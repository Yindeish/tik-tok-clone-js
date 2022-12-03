
class Auth {

    user;

    createUser(user) {

        this.user = user;

        this.userName = user.name;
        this.userAvatar = user.avatar;
        this.userOtherDetails = user.otherDetails;

        return user;
    }

    signIn() {
        
    }

    signOut() {

    }

}

export default Auth;