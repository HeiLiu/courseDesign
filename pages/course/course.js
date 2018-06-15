//获取应用实例
var app = getApp()

//配置文件
var config = require('../../config.js');

//通用js代码
var extend = require("../../style/js/extend.js")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 登陆权限验证
    if (!app.globalData.userinfo) {
      extend.redirectTo({
        url: '/pages/login/login'
      })
      return false
    }

    this.course_list()
  },


  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.course_list()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: config.mini_apps_title,
      path: '/pages/course/course'
    }
  },
  check(e){
    console.log(e);
  },
  /**
   * 获取课程列表
   */
  course_list: function (e) {
    wx.showLoading({
      title: '课程加载中..',
    })

    wx.request({
      url: 'https://easy-mock.com/mock/5b2221764e7e0c3ad361130e/courses/courses_list',
      success: (res) => {
        if (res.statusCode != 200) {
          wx.hideLoading();
          wx.showModal({
            content: '网络请求出错,请稍后重试!'
          })
          return false
        }
        // console.log(res.data.data.courses_list);
        this.setData({
          course_list: res.data.data.courses_list
        })
        // console.log(this.data.course_list);
        wx.hideLoading()
      }
    })
  }
})