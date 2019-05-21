// pages/classic/classic.js
import {config} from '../../config.js'
import {HTTP} from '../../utils/Http.js'
import {ClassicModels} from '../../models/classicModels.js'
import { LikeModels } from '../../models/like.js'

let classicModels = new ClassicModels()
let likeModels = new LikeModels()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:1,
    classicData:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(this.data.test)
    // wx.request({
    //   url: config.url+'/classic/latest', // 仅为示例，并非真实的接口地址
    //   data: {
    //     appkey: config.appKey
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   //箭头函数，可以用this
    //   success:(res)=> {
    //     console.log(this.data.test)
    //   }
    // })
    classicModels.getLatest((res)=>{
      let count = res.data.fav_nums
      let like_status=res.data.like_status
      let like = false
      if(like_status==0){
        like = true
      }
      this.setData({
        classicData:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  onLike: function (event) {
     console.log(event)
    let behavior = event.detail.behavior
    likeModels.like({
      behavior:behavior,
      art_id: this.data.classicData.id,
      category: this.data.classicData.type
    })
    }
  
})