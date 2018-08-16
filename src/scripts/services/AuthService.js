import Http from 'scripts/services/AxiosHttp';
export default {
    getFirstPage: function () {
        return Http.get("/sns/api/menu/firstPage");
    },
    getUserInfoByToken: function (token) {
        return Http.get("/uz-usermgr/api/user/login", { access_token: token }, true);
    },
    login: function (userName, password) {
        var data = {
            "username": userName,
            "password": password,
            "client_id": "xietong110_web",
            "client_secret": "xietong110_web_secret",
            "grant_type": "password"
        }
        return Http.postAsForm("/uz-auth/oauth/token", data, true);
    }
}