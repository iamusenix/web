import Http from 'scripts/services/AxiosHttp';

export default {
    getNodeList: function (data) {
        return Http.get('/vpn-node/api/vpn', data, true);
    }
}