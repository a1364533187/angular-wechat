app.factory('Chats2', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: '濠江风云',
    lastText: '《濠江风云》是由邓衍成执导，任达华、郭可盈、郑则仕、方中信等主演的犯罪片。该片讲述的是1991年记者方颖宁（郭可盈饰）赴澳门访问黑帮首脑尹志巨（任达华饰，人物原型崩牙驹），听他道出往事。原来巨自幼便加入黑社会，很快成为小头目。香港捞家渔栏灿利用巨与另一势力炳爷相斗，巨与炳的嫌隙也由此开始。连场恶斗后，巨势力渐硬，将炳赶出了澳门，但巨之妻子为了追求宁静生活而离开，与巨一同打天下的好兄弟阿廖（方中信饰）又患上了绝症。已是黑道巨头的巨才发现自己失去的远远比得到的多。',
    face: '../img/list/list00.jpg'
  }, {
    id: 1,
    name: '魔法女仆',
    lastText: '《魔法女仆》是连载于起点中文网的一本小说，作者是路瑟斯。',
    face: '../img/list/list01.jpg'
  }, {
    id: 2,
    name: '特别手术室',
    lastText: '《特别手术室》是导演田壮壮1988年执导的反映女性未婚先孕的影片，本片由李雪健、徐帆、谢园、史可、丁嘉莉、雷恪生等人主演，是中国第一部以女性未婚先孕为题材的影片',
    face: '../img/list/list02.jpg'
  }, {
    id: 3,
    name: '黑客帝国',
    lastText: '一名年轻的网络黑客尼奥发现看似正常的现实世界实际上是由一个名为“矩阵”的计算机人工智能系统控制的。尼奥在一名神秘女郎崔妮蒂的引导下见到了黑客组织的首领墨菲斯，三人走上了抗争矩阵的征途',
    face: '../img/list/list03.jpg'
  }, {
    id: 4,
    name: '普罗米修斯',
    lastText: '2058年，考古学家在非洲挖掘出的古迹发现，人类是由一个进化程度更高的外星生物种族创造的。于是人们派出飞船“普罗米修斯号”前去外星“上帝”的星球，追寻造物主。外星生物接待了人类，向他们展示了先进的文明。但是有一个地球人不满足，盗取了外星种族的“生物源码”，人类便可和自己的造物主平起平坐。外星种族大怒，放出了异形，来杀死忘恩负义的地球人',
    face: '../img/list/list09.jpg'
  },{
    id: 5,
    name: '流氓神探',
    lastText: "《流氓神探》是一部在幻剑书盟连载的网络小说，作者是东北六少，目前暂停更新中。",
    face: '../img/list/list07.jpg'
  }, {
    id: 6,
    name: '我不是潘金莲',
    lastText: '《我不是潘金莲》是由冯小刚执导的电影， 范冰冰领衔主演，郭涛、大鹏、张嘉译、于和伟、张译、赵立新等联合主演，该片于2016年9月8日在多伦多电影节上映。',
    face: '../img/list/list08.jpg'
  }, {
    id: 7,
    name: '普罗米修斯',
    lastText: '2058年，考古学家在非洲挖掘出的古迹发现，人类是由一个进化程度更高的外星生物种族创造的。于是人们派出飞船“普罗米修斯号”前去外星“上帝”的星球，追寻造物主。外星生物接待了人类，向他们展示了先进的文明。但是有一个地球人不满足，盗取了外星种族的“生物源码”，人类便可和自己的造物主平起平坐。外星种族大怒，放出了异形，来杀死忘恩负义的地球人',
    face: '../img/list/list09.jpg'
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
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});




app.controller('myCtrl',function($scope,Chats){
	$scope.data = Chats.all();
})