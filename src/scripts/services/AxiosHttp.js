
import axios from 'axios';
import $ from 'jquery';
export default {
    get:function(url,params,isPublic=false){
        if(!isPublic){
            params[access_token] = 'Bearer ' + sessionStorage.access_token;
        }
        return axios(url,{params:params} );
    },
    post:function(url,data,isPublic=false){
        var headers = {
            'Accept': '*/*',
            'Content-Type': 'application/json'
        };
        if(!isPublic){
            headers['Authorization'] = 'Bearer ' + sessionStorage.access_token;
        }
        return axios.post(url,data,{headers:headers});
    },
    
    postAsForm:function(url,data){
        return axios.post(url,$.param(data),{
            headers:{
                "Content-Type": "application/x-www-form-urlencoded"
            }
        });
    }
}