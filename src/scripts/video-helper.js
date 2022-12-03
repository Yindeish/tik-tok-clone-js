
class VideoHelper {

    followingVideos = [
        {
            creator: {
                name: 'Kxled',
                followers: 20000,
                picture: '../../assets/images/team-2.jpg',
            },
            videoSrc: '../assets/videos/Khāled_Siddīq_-__Rise_&_Fall__(Official_Nasheed_Video)(360p).mp4',
            videoAlt: 'rise and fall',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                comments: [
                   {
                    userName: 'Alfred Adler',
                    message: 'I love this video; It awakened me',
                    avatar: '../../assets/images/team-4.jpg'
                   },
                   {
                    userName: 'Alfred Adler',
                    message: 'I love this video; It awakened me',
                    avatar: '../../assets/images/team-4.jpg'
                   },
                   {
                    userName: 'Alfred Adler',
                    message: 'I love this video; It awakened me',
                    avatar: '../../assets/images/team-4.jpg'
                   },
                ]
            },
            isPlaying: false,
            soundInfo: 'khalid siddique'
        },
        {
            creator: {
                name: 'Kxled',
                followers: 20000,
                picture: '../../assets/images/team-2.jpg',
            },
            videoSrc: '../assets/videos/Khāled_Siddīq_-__Aleppo__(Vocals_Only___Official_Nasheed_Video)(360p).mp4',
            videoAlt: 'aleppo',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 10,
                comments: []
            },
            isPlaying: false,
            soundInfo: 'khalid siddique'
        },
        {
            creator: {
                name: 'Ishaq',
                followers: 30000,
                picture: '../../assets/images/team-3.jpg',
            },
            videoSrc: '../assets/videos/Ishaq_Ayubi_-_Allah_Hu_Official_Nasheed_Video(360p).mp4',
            videoAlt: 'allah hu',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                comments: []
            },
            isPlaying: false,
            soundInfo: 'ishaq ayubi'
        },
        {
            creator: {
                name: 'Kxled',
                followers: 20000,
                picture: '../../assets/images/team-2.jpg',
            },
            videoSrc: '../assets/videos/Khāled_Siddīq_-__Road_to_Palestine__(Vocals_Only___Official_Video)(360p).mp4',
            videoAlt: 'road to palestine',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                comments: [
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                    {
                        userName: 'Max Shwarz',
                        message: 'This video is extremely outstanding; I enjoyed it',
                        avatar: '../../assets/images/team-4.jpg'
                    },
                ]
            },
            isPlaying: false,
            soundInfo: 'khalid siddique'
        },
    ];
    forYouVideos = [
        {
            creator: {
                name: 'Kxled',
                followers: 20000,
                picture: '../../assets/images/team-2.jpg',
            },
            videoSrc: '../assets/videos/Khāled_Siddīq_-__Road_to_Palestine__(Vocals_Only___Official_Video)(360p).mp4',
            videoAlt: 'road to palestine',
            videoInfo: 'lorem ipsum dolor jkfjkj e mnjwdhjj ehji 3ejryu wdjkh',
            videoExtraInfos: {
                likes: 0,
                comments: []
            },
            isPlaying: false,
            soundInfo: 'khalid siddique'
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