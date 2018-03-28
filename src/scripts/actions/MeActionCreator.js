import AuthService from 'scripts/services/AuthService';


export function updateAuthInfo(authInfo) {
    return {type:"updateAuthInfo",authInfo};
}
export function updateUserInfo(userInfo){
    return {type:"updateUserInfo",userInfo};
}

export function authenticate(){
    return (dispatch,getState)=>{
        let token = sessionStorage.getItem('access_token');
        if(token){
            AuthService.getUserInfoByToken(token).then((data)=>{
                dispatch(updateAuthInfo({access_token:token}));
                dispatch(updateUserInfo(data));
            });
        }else{
            dispatch(updateAuthInfo({access_token:null}));
        }
    }
}
