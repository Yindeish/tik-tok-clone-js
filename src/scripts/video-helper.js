
class VideoHelper {

    followingVideos = [
        {
            videoSrc: '../assets/videos/Khāled_Siddīq_-__Rise_&_Fall__(Official_Nasheed_Video)(360p).mp4',
            videoPoster: '../assets/images/portfolio-1.jpg',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                unlikes: 0,
            },
            isPlaying: false,
            soundInfo: 'ksdkljiruiou cckje'
        },
        {
            videoSrc: '../assets/videos/Khāled_Siddīq_-__Aleppo__(Vocals_Only___Official_Nasheed_Video)(360p).mp4',
            videoPoster: '../assets/images/portfolio-2.jpg',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                unlikes: 0,
            },
            isPlaying: false,
            soundInfo: 'ksdkljiruiou cckje'
        },
        {
            videoSrc: '../assets/videos/Ishaq_Ayubi_-_Allah_Hu_Official_Nasheed_Video(360p).mp4',
            videoPoster: '../assets/images/portfolio-3.jpg',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                unlikes: 0,
            },
            isPlaying: false,
            soundInfo: 'ksdkljiruiou cckje'
        },
        {
            videoSrc: '../assets/videos/Khāled_Siddīq_-__Road_to_Palestine__(Vocals_Only___Official_Video)(360p).mp4',
            videoPoster: '../assets/images/portfolio-4.jpg',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                unlikes: 0,
            },
            isPlaying: false,
            soundInfo: 'ksdkljiruiou cckje'
        },
    ];
    forYouVideos = [
        {
            videoSrc: '../assets/videos/Khāled_Siddīq_-__Road_to_Palestine__(Vocals_Only___Official_Video)(360p).mp4',
            videoPoster: '../assets/images/portfolio-5.jpg',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                unlikes: 0,
            },
            isPlaying: false,
        },
    ];

    async fetchVideos(data = false) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', 'url', true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.withCredentials = 'true';
            xhr.onload = () => {
                if( this.status >= 200 || this.status < 300) {
                    resolve(xr.response);
                } else {
                    reject(xhr.response);
                }
            }
            xhr.onerror = () => {
                reject(`You're offline!`);
            }
            xhr.onprogress = () => {

            }
            if( data ) {
                xhr.send(JSON.stringify(data))
            } else xhr.send();
        })
    }

    getVideos() {
        return {
            followingVideos: this.followingVideos,
            forYouVideos: this.forYouVideos,
        }
    }
}

export default VideoHelper;