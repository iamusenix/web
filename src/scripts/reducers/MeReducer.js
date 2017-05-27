import Constants from 'scripts/actions/Constants';
export default function MeReducer(state={}, action){
    switch (action.type){
        case Constants.ME.GET_USER_INFO:
            return action.userInfo;
        default :
             return state;
    }
}