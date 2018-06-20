// pages/user/user.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatar: 'https://wx.qlogo.cn/mmhead/Q3auHgzwzM5Ps1ibeDV24zmVxOnLvjtdHqoamRoacfVFtbCGDLeZib2g/64',
      nickName: '青衣诶',
      isBindEdu: true
    },
    stu_id: 'i969403750',
    user_type: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user_type;
    console.log(app.globalData.user_type);
    if(app.globalData.user_type == 0){
      user_type = true;
    }else{
      user_type = false;
    }
    this.setData({user_type})
  },
  switchTap(){
    wx.switchTab({
      url: '/pages/course/course'
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
  
  }
})