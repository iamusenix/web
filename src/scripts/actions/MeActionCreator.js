import AuthService from 'scripts/services/AuthService';


export function updateAuthInfo(authInfo) {
    return { type: "updateAuthInfo", authInfo };
}
export function updateUserInfo(userInfo) {
    return { type: "updateUserInfo", userInfo };
}

export function authenticate() {
    return (dispatch, getState) => {
        let token = sessionStorage.getItem('access_token'),
            vpnToken = sessionStorage.getItem('vpn_token');
        if (token) {
            AuthService.getUserInfoByToken(token).then((res) => {
                dispatch(updateAuthInfo({ access_token: token, vpn_token: vpnToken }));
                dispatch(updateUserInfo(res));
            });
        } else {
            dispatch(updateAuthInfo({ access_token: null }));
        }
    }
}
export function login(username, password) {
    return (dispatch, getState) => {
        var authInfo;
        AuthService.login(username, password).then((res) => {
            authInfo = res;
            sessionStorage.setItem('access_token', res.access_token);
            sessionStorage.setItem('vpn_token', res.vpnToken);
            return AuthService.getUserInfoByToken(res.access_token);
        }).then((res) => {
            dispatch(updateAuthInfo(authInfo));
            dispatch(updateUserInfo(res.data));
        });
    }
}
