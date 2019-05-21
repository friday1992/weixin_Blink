import {
  config
} from '../config.js'
const tips = {
  '1': '系统出现错误，请联系管理员',
  '401': 'appKey无效，请重新申请',
  '400': '访问错误'
}
class HTTP {
  request(params) {
    console.log(config.appKey)
    if (!params.method) {
      params.method = 'GET'
    }
    wx.request({
      url: config.url + params.url, // 仅为示例，并非真实的接口地址
      header: {
        'content-type': 'application/json', // 默认值
        'appkey': config.appKey
      },
      data:params.data,
      method: params.method,
      //箭头函数，可以用this
      success: (res) => {
        console.log(res.statusCode)
        let errorCode = res.statusCode.toString()
        if (!errorCode.startsWith('2')) {
          this._show_error(errorCode)
        } else {
          params.success && params.success(res)
        }

      },
      fail: (res) => {
        this._show_error('1')
      }

    })
  }
  _show_error(errorCode) {
    if (!errorCode) {
      errorCode = '1'
    }
    wx.showToast({
      title: tips[errorCode],
      duration: 2000,
      icon: 'none'
    })

  }
}
export {
  HTTP
}