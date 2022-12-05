import Component from './components.js';

class VideoRecorder extends Component {

    startRecording(recordBtn, mediaRecorder) {
       
        recordBtn.onclick = () => {

          mediaRecorder.start(10000);

          console.log(mediaRecorder.state);

          if ( recordBtn.classList.contains('active')) recordBtn.classList.remove('active');
          recordBtn.nextElementSibling.classList.add('active');
        };
    }

    stopRecording(stopBtn, mediaRecorder, chunks) {

      stopBtn.onclick = () => {
        mediaRecorder.stop();

        const blob = new Blob(chunks, {
          type: 'video/mp4'
        });
        const url = URL.createObjectURL(blob);
        const a  = document.createElement('a');
        document.body.appendChild(a);
        a.style = 'display: none';
        a.href = url;
        a.download = 'test.mp4'
        a.click();
        console.log(mediaRecorder.state);

        if ( stopBtn.classList.contains('active')) stopBtn.classList.remove('active');
          stopBtn.nextElementSibling.classList.add('active');
      };

    }

    run() {
      
      const { recordBtn, stopBtn } = this.getElements();
      const video = document.querySelector('video');

      let chunks = [];

      if (navigator.mediaDevices) {
        const constraints = { audio: true, video: true };
        
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(stream => {

            if ( 'srcObject' in video ) {
              video.srcObject = stream;
            } else {
              video.src = window.URL.createObjectURL(stream)
            }

            const mediaRecorder = new MediaRecorder(stream);
            
            this.startRecording(recordBtn, mediaRecorder);

            this.stopRecording(stopBtn, mediaRecorder, chunks); 

            mediaRecorder.ondataavailable = event => {
              chunks.push(event.data);
            }

          })
          .catch(err => {
            console.error(`The following error occurred: ${err}`);
          })
      }

    }


}

const videoRecorder = new VideoRecorder();
videoRecorder.run();


// The below is the svg to mark the video recorded
{/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-check-fill" viewBox="0 0 16 16"> */}
  {/* <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-1.146 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/> */}
{/* </svg> */}

