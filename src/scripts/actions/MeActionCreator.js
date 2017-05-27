
import Constants from './Constants.js';
export default {
    initMe: (userInfo) => ({type:Constants.ME.GET_USER_INFO,userInfo:userInfo})
}