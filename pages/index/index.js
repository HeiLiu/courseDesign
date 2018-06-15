//获取应用实例
var app = getApp();

//配置文件
var config = require('../../config.js');

//通用js
var extend = require("../../style/js/extend.js")

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
    wx.request({
      url:'https://m.xxiangfang.com/index.php/Home/Xiaoxxf/activity?is_hot=1',
      success:function(res){
        console.log(res.data);
      }
    })
    wx.navigateTo({ url: '/pages/login/login' });
  }
})

