/**
 * 工具类
 */
export default class Tool {
  constructor() {
    
  }
  static gettodayDate() {
		let myDate = new Date();
		let year=myDate.getFullYear();
		let month=myDate.getMonth()+1;
		let date=myDate.getDate(); 
		if(month<10) {
			month = "0" + month;
		}
		if(date<10) {
			date = "0" + date;
		}
		return (year+"-"+month+"-"+date)
	}
	static getsecDate() {
		let day2 = new Date();
		day2.setTime(day2.getTime()+24*60*60*1000);
		let year2=day2.getFullYear();
		let month2=day2.getMonth()+1;
		let date2=day2.getDate(); 
		if(month2<10) {
			month2 = "0" + month2;
		}
		if(date2<10) {
			date2 = "0" + date2;
		}
		return (year2+"-"+month2+"-"+date2)
	}
	static judgecode(str,complete,success,fail) {
		let codereg = /<script.*?>.*?<\/script>/gi;
		complete(str);
		if (!codereg.test(str)) {
			if(success) {
				success(str);
			}
		} else {
			wx.showToast({
				title: '含有非法字符，请正确填写!',
				icon: 'none',
				duration: 500
			});
			setTimeout(()=>{
				if(fail) {
					fail();
				}
			},200)
		}
	}
}

