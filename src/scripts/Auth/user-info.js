import Auth from "./auth.js";

class UserInfo {

    user;

    createUser() {

        const user = new Auth({
            name: 'Adeshina Adam',
            avatar: '../../assets/images/team-1.jpg',
            otherDetails: {
            }
        });

        this.user = user.user;

        return user;
    }

    getInfos() {

        this.createUser();

        return {
            userName: this.user.name,
            userAvatar: this.user.avatar,
            userOtherDetails: this.user.otherDetails
        }
    }
   
}

export default UserInfo;