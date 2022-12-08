import Component from './components.js';
import UserInfo from '../Auth/user-info.js';
import Notification from './notification.js';

class VideoRecorder extends Component {

    videoSrc;
    imageIsReady = false;

    async uploadVideo() {
      const { user } = new UserInfo().getInfos();
      
      const videoInfo = {
        creator: user,
        videoSrc: this.videoSrc,
        videoExtraInfos: {
          likes: 0,
          comments: []
        },
        isPlaying: false,
        soundInfo: '9ice'
      }

      return new Promise((resolve, reject) => {
        console.log('return a new Promise Indeed');
        const xhr = new XMLHttpRequest();

        xhr.open('POST','https://tiktok-clone-js-videos-default-rtdb.firebaseio.com/videos.json');

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';

        xhr.onload = () => {
          if ( xhr.status == 200 || xhr.readyState == 4 ) {
            resolve('Video was successfully uploaded!');
          } else {
            reject(xhr.response);
          }
        }

        xhr.onerror = () => {
          reject('You are offline');
        }

        xhr.onprogress = () => {}

        xhr.send(JSON.stringify(videoInfo));
      })
      .then(data => {
        const notification = new Notification(data);
        notification.createNotification();
      })
      .catch(err => {
        const notification = new Notification(err);
        notification.createNotification();
      })

    }

    run() {
      
      const { videoRecordBlock, recordingVideo, recordBtn, stopRecord, playRecord, closeVideoRecorderBtn, uploadBtn, cancelImage } = this.getElements();

      if (navigator.mediaDevices) {
        const constraints = { audio: true, video: true };
        let blobsContainer = [];
        
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(stream => {

            if ( 'srcObject' in recordingVideo ) {
              recordingVideo.srcObject = stream;
            } else {
              recordingVideo.src = window.URL.createObjectURL(stream)
              
            }

            let mediaRecorder = new MediaRecorder(stream);

            // Start Recording
            recordBtn.addEventListener('click', event => {
              mediaRecorder.start();
              console.log('mediaRecorder playing');
  
              if ( recordBtn.classList.contains('active')) recordBtn.classList.remove('active');
              recordBtn.nextElementSibling.classList.add('active');
  
              mediaRecorder.ondataavailable = event => {
                blobsContainer.push(event.data);
              }
  
              mediaRecorder.onerror = event => {
                return new Error(event.error);
              }
  
              mediaRecorder.onstop = () => {
  
                let blob = new Blob(blobsContainer);
  
                const recordedVideo = document.createElement('video');
  
                let src = window.URL.createObjectURL(blob);
                recordedVideo.innerHTML = 
                /*html*/ 
                `
                <source src="${src}" type="video/mp4">
                `;
                playRecord.addEventListener('click', () => recordedVideo.play());
                const recordedVideoSrc = recordedVideo.querySelector('source').src;
                this.imageIsReady = true;
                this.videoSrc = recordedVideoSrc;
                console.log(this.videoSrc);
  
                videoRecordBlock.querySelector('.video-container').removeChild(recordingVideo);
                videoRecordBlock.querySelector('.video-container').appendChild(recordedVideo);
              }

              // Stop Recording
              stopRecord.addEventListener('click', event => {
      
                recordingVideo.pause();
                mediaRecorder.stop();
                console.log('mediaRecorder stopped');
         
               if ( stopRecord.classList.contains('active')) stopRecord.classList.remove('active');
                  playRecord.classList.add('active');
              })
  
              // Cancel Image
              cancelImage.addEventListener('click', event => {
                recordingVideo.src = '';
                const recordedVideo = videoRecordBlock.querySelector('video');
                videoRecordBlock.querySelector('.video-container').appendChild(recordingVideo);
                videoRecordBlock.querySelector('.video-container').removeChild(recordedVideo);
                this.videoSrc = null;
                this.imageIsReady = false;

                playRecord.classList.remove('active');
                recordBtn.classList.add('active');
              })

            })
          })
          .catch(err => {
            console.error(`The following error occurred: ${err}`);
          })

      }

    uploadBtn.addEventListener('click', () => this.uploadVideo());

    this.closeUploadWindow(closeVideoRecorderBtn);

    }

    closeUploadWindow(closeBtn) {
      closeBtn.addEventListener('click', event => {
        history.back();
      })
    }


}

const videoRecorder = new VideoRecorder();
videoRecorder.run();


// if ( mediaRecorder.state != 'inactive' || mediaRecorder.state != 'recording' ) {
//   this.startRecording(recordBtn, mediaRecorder);
// }

// this.stopRecording(stopRecord, mediaRecorder, chunks, recordedVideo, playRecord); 

// this.playRecordedVideo(playRecord);


