//获取应用实例
var app = getApp();

//配置文件
var config = require('../../config.js');

Page({
  data: {
    nickname: '',
    userinfo: null
  },
  onLoad: function (options) {

  },
  onShareAppMessage: function () {
    return {
      title: config.mini_apps_title,
      path: '/pages/index/index'
    }
  },
  loginTap: function () {
    console.log('jaaa');
    wx.navigateTo({
      url: '/pages/login/login'
    });
  }
})