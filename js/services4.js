app.factory('Chats4', function() {
	var chats4Data = [
	[{
    name: '王志武',
    weixin:'微信号：mrswangzhiwu7758520',
    pic1: '../img/mine/1.png',
    pic2:'../img/mine/2.png'
   }],
  [{
    name: '钱包',
    face: '../img/mine/3.png'
  }],
  [{
    name: '收藏',
    face: '../img/mine/4.png'
  },{
    name: '相册',
    face: '../img/mine/5.png'
  },{
    name: '卡包',
    face: '../img/mine/6.png'
  },{
    name: '表情',
    face: '../img/mine/7.png'
  }],
  [{
    name: '设置',
    face: '../img/mine/8.png'
  }]
	]
  return {
    all: function() {
      return chats4Data;
    }
  };
})




