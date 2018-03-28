
export default function MeReducer(state={}, action){
    switch (action.type){
        case "updateAuthInfo":
            return  Object.assign({},state,{authInfo:action.authInfo});
        case "updateUserInfo":
            return  Object.assign({},state,{userInfo:action.userInfo});
        default :
             return state;
    }
}