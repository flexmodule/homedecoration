
export default class Template {
  constructor() {
    
  }
  /**
   * 弹出提示框
   */

  static success(title, duration = 500) {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: "success",
        mask: true,
        duration: duration
      });
    }, 300);
    if (duration > 0) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, duration);
      });
    }
  }

  /**
   * 弹出确认窗口
   */
  static confirm(title = "提示",text,confirmBtn, payload = {}) {
    return new Promise((resolve, reject) => {
      wx.showModal({
        title: title,
        content: text,
				showCancel: true,
				confirmText:confirmBtn,
        success: res => {
          if (res.confirm) {
            resolve(payload);
          } else if (res.cancel) {
            reject(payload);
          }
        },
        fail: res => {
          reject(payload);
        }
      });
    });
  }

  static toast(title, onHide, icon = "success") {
    setTimeout(() => {
      wx.showToast({
        title: title,
        icon: icon,
        mask: true,
        duration: 500
      });
    }, 300);

    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }

  /**
   * 警告框
   */
  static alert(title) {
    wx.showToast({
      title: title,
      image: "../images/alert.png",
      mask: true,
      duration: 1500
    });
  }

  /**
   * 错误框
   */

  static error(title, onHide) {
    wx.showToast({
      title: title,
      image: "/img/err.png",
      mask: true,
      duration: 500
    });
    // 隐藏结束回调
    if (onHide) {
      setTimeout(() => {
        onHide();
      }, 500);
    }
  }
}

