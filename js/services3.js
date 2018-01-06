app.factory('Chats3', function() {
	var chats3Data = [
	[{
    id: 0,
    name: '朋友圈',
    pic1: '../img/discovery/1.png',
    pic2:'../img/discovery/2.png'
   }],
  [{
    id: 4,
    name: '扫一扫',
    face: '../img/discovery/3.png'
  },{
    id: 5,
    name: '摇一摇',
    face: '../img/discovery/4.png'
  }],
  [{
    id: 6,
    name: '漂流瓶',
    face: '../img/discovery/5.png'
  }],
  [{
    id: 7,
    name: '购物车',
    face: '../img/discovery/6.png'
  },{
  	 id: 8,
    name: '游戏',
    face: '../img/discovery/7.png'
  }],
  [{
    id: 9,
    name: '小程序',
    face: '../img/discovery/8.png'
  }]
	]
  return {
    all: function() {
      return chats3Data;
    }
  };
})




