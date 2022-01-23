import axios from "../utils/request";
import base from "./base";
const api = {
    reigister(params){
        return axios.post(base.baseUrl + base.register,params)
    },
    login(params){
        return axios.post(base.baseUrl + base.login,params)
    },
    selectTbItemAllByPage(params){
        return axios.get(base.baseUrl + base.selectTbItemAllByPage,{
            params
        })
    }
}
export default api;