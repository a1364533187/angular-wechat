app.factory('Chats1', function() {
  var chats1 = [{
    id: 0,
    name: '好兄弟好姐妹一辈子',
    lastText: '鹏飞老弟：[语音]',
    face: '../img/wechat/1.png'
  }, {
    id: 1,
    name: '中国银行广东分行',
    lastText: '叮叮当~速来领取出国金融暖心好礼！',
    face: '../img/wechat/2.png'
  }, {
    id: 2,
    name: '百世快递',
    lastText: '佛系&圣诞？这是一道送命题',
    face: '../img/wechat/3.png'
  }, {
    id: 3,
    name: '微众有折',
    lastText: '在吗？快来领取你的30元奖励',
    face: '../img/wechat/4.png'
  }, {
    id: 4,
    name: '周黑鸭',
    lastText: '下午发吃，10分钟立减，500份暖手礼',
    face: '../img/wechat/5.png'
  },{
    id: 5,
    name: '收钱吧广州',
    lastText: "比春药更能俘获女神的，只有这瓶香水",
    face: '../img/wechat/6.png'
  }, {
    id: 6,
    name: 'web前端7组',
    lastText: '什么时候偷拍的',
    face: '../img/wechat/7.png'
  }, {
    id: 7,
    name: '抚州汽车站',
    lastText: '黎川长运城市公交体广告位 租赁招',
    face: '../img/wechat/8.png'
  }, {
    id: 8,
    name: '断臂山',
    lastText: '影片讲述了1963年至1981年的美国怀俄明州，两个男人之间情爱与性爱的复杂关系。',
    face: '../img/list/list10.jpg'
  }, {
    id: 9,
    name: 'X战警2',
    lastText:'《X战警2》是布莱恩·辛格Bryan Singer执导，休·杰克曼，帕特里克·斯图尔特，伊安·麦克莱恩等人主演的影片，讲述了美国政要遭到无名变种人的刺杀，美国国防部部长史崔克下令包围X学校，并抓走了X教授的几名学生，而万磁王已经被关入监狱中服刑，随着变种人与人类的矛盾越来越大，一对老冤家不得不联起手来对抗以国防部部长史崔克为首的人类军队',
    face: '../img/list/list11.jpg'
  }];

  return {
    all: function() {
      return chats1;
    },
    remove: function(chat) {
      chats1.splice(chats1.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats1.length; i++) {
        if (chats1[i].id === parseInt(chatId)) {
          return chats1[i];
        }
      }
      return null;
    }
  };
});




