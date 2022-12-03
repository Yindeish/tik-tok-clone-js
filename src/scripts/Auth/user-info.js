import Auth from "./auth.js";

class UserInfo extends Auth {

    getInfos() {

        this.createUser(
            {
                name: 'Adeshina Adam',
                avatar: '../../assets/images/team-1.jpg',
                followers: [],
                otherDetails: {
                }
            }
        );

        return {
            userName: this.user.name,
            userAvatar: this.user.avatar,
            userFollowers: this.user.followers,
            userOtherDetails: this.user.otherDetails
        }
    }
   
}

export default UserInfo;