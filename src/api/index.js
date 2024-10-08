import axios from "../utils/request";
import path from "./path"
const api = {
    //登录接口
    loginApi(form) {
        return axios.post(
            path.baseUrl + path.login, form)
    },
    //注册接口
    registerApi(form) {
        return axios.post(
            path.baseUrl + path.register, form
        )
    },
    //获取邮箱验证码接口
    sendEmailApi(email) {
        return axios.get(path.baseUrl + path.sendEmail + "/" + email)
    },
    //获取图片验证码接口
    // getImageVerifyApi() {
    //     return axios.get(path.baseUrl + path.imageVerify)
    // },
    // 队伍接口
    teamApi(){
        return axios.get(path.baseUrl+path.team)
    },
    //完美校园新闻详情接口
    perfectNewsDetailApi(id){
        return axios.get("/cms/api/info/detail?id="+id)
    },
    newsDetailApi(id){
        return axios.get(path.baseUrl+path.news+"/"+id)
    },
    //相关赛事接口
    competitionApi(pageNum,pageSize){
        return axios.get(path.baseUrl+path.competition+"/list/?pageNum="+pageNum+ "&pageSize=" + pageSize)
    },
    //文章详情接口
    competitionDetailApi(id) {
        return axios.get(path.baseUrl + path.competition + "/" + id)
    },
    //荣誉奖项
    awardsApi(){
        return axios.get(path.baseUrl+path.awards+"/list")
    },
    //优秀毕业生
    getExcellentListApi(pageSize){
        return axios.get(path.baseUrl+path.excellent+"/?pageNum=1&pageSize="+pageSize)
    }
}
export default api
