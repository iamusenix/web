import AuthService from 'scripts/services/AuthService';


export function updateAuthInfo(authInfo) {
    return {type:"updateAuthInfo",authInfo};
}
export function updateUserInfo(userInfo){
    return {type:"updateUserInfo",userInfo};
}

export function authenticate(token){
    return (dispatch,getState)=>{
        return AuthService.getUserInfoByToken(token).then((data)=>{
            dispatch(updateAuthInfo({access_token:token}));
            dispatch(updateUserInfo(data));
        });
    }
}
