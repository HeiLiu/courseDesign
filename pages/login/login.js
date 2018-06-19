// pages/login/login.js
//获取应用实例
var app = getApp();

//配置文件
var config = require('../../config.js');

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
  login: function (e) {
    wx.showLoading()
    var form_data = e.detail.value
    var username = form_data.username
    var password = form_data.password
    var type_user = form_data.type_user
    console.log(form_data);
    // 保存登录信息并格式化
    const loginInfo = `${username} | ${type_user}`;
    console.log(loginInfo);
    //参数验证
    if (username == '') {
      wx.showModal({
        content: '请输入账号'
      })
      wx.hideLoading()
      return
    }
    if (password == '') {
      wx.showModal({
        content: '请输入密码'
      })
      wx.hideLoading()
      return
    }

    wx.request({
      url: 'https://easy-mock.com/mock/5b2221764e7e0c3ad361130e/courses/userInfo',
      success: function (res) {
        const userInfo = res.data.data.userInfo;
        console.log(userInfo);
        // let userinfo = userInfo.filter((item) => {
        //   if (item[loginInfo] === password) {
        //     console.log(item);
        //   }
        // });
        let userinfo = userInfo.filter(item => {
          console.log(loginInfo);
          if(item[loginInfo]  == password){
            console.log(item[loginInfo]);
            console.log(`${item.name}`);
            return item;
          }
        });
        console.log(`sdfs${userinfo}`);

        // if (!userInfo) {
        //   wx.showModal({
        //     content: '当前用户不存在'
        //   })
        //   wx.hideLoading()
        //   return
        // }

        // wx.setStorageSync('UserInfo', data.info)
        // app.globalData.userinfo = data.info
        wx.hideLoading()
        wx.switchTab({
          url: '/pages/course/course'
        })
      }
    })
  },

  /**
   * 表单重置
   */
  reset: function (e) {
    this.setData(data_param)
  }
})