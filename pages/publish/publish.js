// pages/publish/publish.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  publish(e){
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000
    })
    wx.switchTab({
      url:'/pages/course/course'
    })
    console.log(this.data.course_detail);
    let course_detail = this.data.course_detail;
    let actual_num = 0;
    let form = e.detail.value;
    let course_id = form.course_id;
    let course_name = form.course_name;
    let teacher = form.teacher;
    let outline = form.outline;
    let detail = form.course_detail;
    let course_addr = form.course_addr;
    let course_time = form.course_time;
    let score = form.score;
    let limited_num = form.limited_num;
    let deadline = form.deadline;
    let test_time = form.test_time;
    let test_addr = form.test_addr;
    let method = form.method;
    let status = status;
    console.log(form);
    var course ={
      // 要保存的课程
      course_id,course_name,teacher,outline,
      course_detail:detail,course_addr,course_time,score,actual_num,limited_num,deadline,test_addr,
      test_time,method,status
    }
    let temp = app.globalData.course_list;
    temp.push(course);
    console.log(temp);
    app.globalData.course_list = temp;
    console.log(app.globalData.course_list);
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
  
  }
})