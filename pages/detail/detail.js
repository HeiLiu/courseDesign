// pages/course/course.js
//获取应用实例
var app = getApp();

//配置文件
var config = require('../../config.js');

var course_id = ''

var userinfo = ''

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user_type: true, //按钮显示标志
    course_detail: '', //课程明细信息
    apply_text: '我要报名' //按钮文字信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    // 登陆权限验证
    if (!app.globalData.userinfo) {
      wx.redirectTo({
        url: '/pages/login/login'
      })
      return false
    }
    let user_type;
    console.log(app.globalData.user_type);
    if(app.globalData.user_type == 0){
      user_type =true;
    }else{
      user_type = false;
    }
    this.setData({
      user_type
    })
    userinfo = app.globalData.userinfo[0]
    course_id = options.course_id
    console.log(userinfo);
    const Mycourse = userinfo.courses
    if(Mycourse){
       Mycourse.forEach(item => {
      if (item.course_id == course_id) {
        let apply_text = '您已成功报名'
        this.setData({
          apply_text
        })
      }
    });
    }
    console.log(Mycourse)
    console.log(this.data.apply_text)
    this.course_detail()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.course_detail()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: config.mini_apps_title,
      path: '/pages/detail/detail'
    }
  },

  /**
   * 获取课程明细
   */
  course_detail: function (e) {
    wx.showLoading();
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
        // 获取当前课程的详细信息
        const courses_list = res.data.data.courses_list;
        // let course_detail = courses_list[course_id];
        console.log(courses_list);
        let course = courses_list.filter(item => {
          if (item.course_id === course_id) {
            console.log(item);
            return item;
          }
        });
        console.log(course);
        if (course[0].actual_num == course[0].limited_num) {
          let apply_text = '报名人数已满';
          this.setData({
            apply_text
          });
        }
        let temp = wx.getStorageSync(course_id);
        let coursetem;
        if (temp.course_id == course_id) {
          coursetem = temp;
          this.setData({
            apply_text: '您已报名成功'
          })
        } else {
          coursetem = course[0];
        }

        if (wx.getStorageSync(course_id)) {
          this.setData({
            apply_text: '您已报名成功'
          })
        }
        this.setData({
          flag: true,
          course_detail: coursetem,
        })
        console.log(this.data.apply_text);
        wx.hideLoading()
      }
    })
  },

  /**
   * 报名按钮
   */
  apply: function (e) {
    let course_list = app.globalData.course_list;
    wx.showLoading()
    wx.showModal({
      title: '提示',
      content: '选定后不能退课！',
      success: (res)=> {
        if (res.confirm) {

          course_list.forEach(item => {
            if (item.course_id == course_id) {
              item.actual_num++;
              this.setData({
                course_detail: item
              })
              app.globalData.course_list = course_list;
              wx.setStorageSync(this.data.course_detail.course_id, this.data.course_detail);
              app.globalData.userinfo[0].courses.push(item);
              if (wx.getStorageSync(course_id)) {
                this.setData({
                  apply_text: '您已报名成功'
                })
              }
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })

    console.log(course_list);
    app.globalData.course_list = course_list;
    wx.hideLoading();
    // this.setData({
    //   course_detail:course_list
    // })
    // wx.request({
    //   url: config.url_course_apply,
    //   success: function (ret) {
    //     if (ret.statusCode != 200) {
    //       extend.showModal({ content: '网络请求出错,请稍后重试!' })
    //       extend.hideLoading()
    //       return false
    //     }

    //     var data = ret.data
    //     if (!data.success) {
    //       wx.showModal({ content: data.msg })
    //       wx.hideLoading()
    //       return false
    //     }

    //     that.setData({
    //       flag_apply: false,
    //       apply_text: '您已报名成功',
    //       course_detail: data.course_detail
    //     })
    //     wx.hideLoading()
    //     wx.showModal({ content: data.msg })
    //   }
    // })
  }
})