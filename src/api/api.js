import wxrequest from '@/utils/request';

// const baseurl = 'https://www.sssyin.cn'
const baseurl = 'https://uat.sssyin.cn';
//首页商品接口
const hostGoodsList = (params) => wxrequest(params, baseurl + '/tour/oversea/getPlaceList');
//授权接口
const auth = (params) => wxrequest(params, baseurl + '/auth/info');
const getimg = (params) => wxrequest(params, `https://openapi.mtlab.meitu.com/v3/makeup?api_key=CI6cZg01b3vVZ8oy1xpcPk3eLkU2LT_W&api_secret=qstwzvbfn9etMqtrzmnYrM0Pomjb8uqo`);
export default {
	hostGoodsList,
	getimg,
	auth
}
