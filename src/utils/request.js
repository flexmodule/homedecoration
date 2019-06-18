import wepy from 'wepy';
const wxRequest = async(params = {}, url) => {
	wepy.showNavigationBarLoading()
	wepy.showLoading({
		title: '加载中',
	})
	try {
		let data = params.query || {};
		let res = await wepy.request({
				url: url,
				method: params.method || 'GET',
				data: data,
				header: { 'Content-Type': 'application/json' },
		});
		wepy.hideNavigationBarLoading();
		wepy.hideLoading();
		return res;
	} catch(e) {
		wepy.hideNavigationBarLoading();
		wepy.hideLoading();
		wepy.redirectTo({
			url: '/pages/error/index',
			success: function() {},
			fail: function() {},
			complete: function() {}
		  });
	}	
};
export default wxRequest
