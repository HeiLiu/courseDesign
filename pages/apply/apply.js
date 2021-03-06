// pages/course/course.js
//获取应用实例
var app = getApp();

//配置文件
var config = require('../../config.js');

var userinfo = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    course_list: '',
    user: ''
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

    userinfo = app.globalData.userinfo[0]
    console.log(userinfo)
    var type_user = ['学生', '教师']
    this.setData({
      user: {
        name: userinfo.name,
        brand: userinfo.brand,
        department: userinfo.department,
        pass: userinfo.pass,
        score: userinfo.score,
        loss: userinfo.loss
      },
      course_list: userinfo.courses
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
    this.course_list()
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
    return {
      title: config.mini_apps_title,
      path: '/pages/apply/apply'
    }
  },

  /**
   * 获取课程列表
   */
  course_list: function (e) {
    // extend.showLoading()
    // var that = this

    // extend.request({
    //   url: config.url_course_self,
    //   method: 'POST',
    //   header: { 'content-type': 'application/x-www-form-urlencoded' },
    //   data: { username: userinfo.username, type: userinfo.type },
    //   success: function (ret) {
    //     if (ret.statusCode != 200) {
    //       extend.showModal({ content: '网络请求出错,请稍后重试!' })
    //       return false
    //     }

    //     var data = ret.data
    //     if (!data.success) {
    //       extend.showModal({ content: data.msg })
    //       extend.hideLoading()
    //       return false
    //     }

    //     that.setData({ course_list: data.data })
    //     extend.hideLoading()
    //   }
    // })
  }
})