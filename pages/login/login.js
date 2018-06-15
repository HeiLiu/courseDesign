// pages/login/login.js
//获取应用实例
var app = getApp();

//配置文件
var config = require('../../config.js');

//通用js代码
var extend = require("../../style/js/extend.js")

//页面的初始数据
var data_param = {
  username: '',
  password: '',
  type_user: ['学生', '教师'],
  type_index: 0
}

Page({

  /**
   * 页面的初始数据
   */
  data: data_param,

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: config.mini_apps_title,
      path: '/pages/login/login'
    }
  },

  /**
   * 类型选择
   */
  bindType: function (e) {
    this.setData({
      type_index: e.detail.value
    })
    console.log(this.data.type_index);
  },
  
  /**
   * 用户登录
   */
  login: function(e) {
    extend.showLoading()
    var that = this
    var form_data = e.detail.value
    var username = form_data.username
    var password = form_data.password
    var type_user = form_data.type_user
    console.log(form_data);
    // 保存登录信息并格式化
    const loginInfo = `${form_data.username}|${form_data.type_user}`;
    console.log(loginInfo);
    //参数验证
    if (username == '') {
      wx.showModal({ content: '请输入账号' })
      wx.hideLoading()
      return false
    }
    if(password == '') {
      extend.showModal({ content: '请输入密码' })
      extend.hideLoading()
      return false
    }

    // extend.request({
    //   url: config.url_login,
    //   method: 'POST',
    //   header: { 'content-type': 'application/x-www-form-urlencoded'},
    //   data: { username: username, pw: password, type: type_user },
    //   success: function(ret) {
    //     var data = ret.data
    //     if( !data.success) {
    //       extend.showModal({ content: data.msg })
    //       extend.hideLoading()
    //       return false
    //     }
        
    //     extend.setStorageSync('UserInfo', data.info)
    //     app.globalData.userinfo = data.info
    //     extend.hideLoading()
    //   }
    // })
    wx.switchTab({ url: '/pages/course/course' })
  },

  /**
   * 表单重置
   */
  reset: function(e) {
    this.setData(data_param)
  }
})