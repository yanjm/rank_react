
var info_str;
var person_info;


var person_num;
var person_name;
var person_score;




//
//orderbyvalue + endAt() +numChildren()

//100w数据中，定位XX的排名功能


function getPersonRankNum_All(){
	var url = "https://rank.wilddogio.com/";
	var ref = new Wilddog(url);
	
	
	//for (var i=1;i<=5000;i++){//max：128/pre 
	//	ref.child("testBig"+i).set(i);
	//}
	
	ref.orderByValue().endAt(102).on("value", function(snapshot) {
		
		//alert(snapshot.numChildren())
		
		console.log("=======================================......"+snapshot.key(),snapshot.numChildren());
		//txr.innerHTML = JSON.stringify(snapshot.val(), null, '\t');
		//通过eval() 函数可以将JSON字符串转化为对象  
		//var obj =  snapshot.val();
		
		
		

	
	});
	
	
}



function getInfo(){
	var temp_info = eval("("+info_str+")");
	return temp_info;
}

function getPersonInfo(){
	return person_info;
}

function getPersonScore(){
	return person_score;
}

function getPersonName(){
	return person_name;
}

function getPersonRankNum(){
	return person_num;
}
function onRank(){
	var data = [];
	
	var backFlag = false;
	person_info = "";
	person_score = 0;
	
	
	var rank_num = [];
	var rank_score = [];
	
	//获取录入的名字，分支
	var username = document.getElementById("username").value;
	var score = document.getElementById("score").value;

	//synchronized
	var url_r = "https://rank.wilddogio.com/";
	var ref_r = new Wilddog(url_r);
	
	if (username!='Your name' && username!='' && score!=0 && score!='Your score'){
		ref_r.child(username).set(parseInt(score));
	}
	
	var limit = 5;
	
	//chk_auth(); 无需验证~~~~
	ref_r.orderByValue().limitToLast(limit).on("value", function(snapshot) {
		txr.innerHTML = JSON.stringify(snapshot.val(), null, '\t');
		//通过eval() 函数可以将JSON字符串转化为对象  
		var obj =  snapshot.val();
		
		var map = snapshot.val();
		
		snapshot.forEach(function(data) {
			console.log("The " + data.key() + " dinosaur's score is " + data.val());
		  });

		var i = 0;
		person_num = 0;
		info_str = '[';
		
		var keys = [];
		var result_value = [];
		var result_key = [];
		
		for (var p in obj){
			i++;
			
			//info_str = info_str + '{id: '+i+', author: "'+p+'", text: "'+obj[p]+'"},';
			
			//rank_num[i-1]= i + ":" + p;
			
			//rank_score[i-1]=obj[p];
			
			keys[i-1] = p;
			
		}
		
		
		for(var i=0; i<keys.length; i++) {
           var temp = -1;
		   var key_temp = "-1";
           for( var k=0; k<keys.length; k++) {
                 // 和上次循环产生的最大值进行比较
                 if(map[keys[k]] >= map[ "max"]) {
                       continue;
                }

                 if(temp < map[keys[k]]) {
					  key_temp = keys[k];
                      temp = map[keys[k]];
                }
          }
          result_value[i] = temp;
		  result_key[i] = key_temp;
          map[ "max"] = temp;
		}
		
		 console.log(result_value);
		 console.log(result_key);
		 
		for(var i=0; i<result_value.length; i++) {
			
			if (result_key[i] == username) {
				person_num = (i+1);
				person_info = username+", "+"您的排名："+person_num;
				person_name = p;
				person_score = obj[p];
			}
			info_str = info_str + '{id: '+(i+1)+', author: "'+result_key[i]+'", text: "'+result_value[i]+'"},';
		}
		//alert(username)
		if (username!='' && person_info=='' ){
			person_info = username+", "+"您的排名："+limit+" 之后...请继续加油！";
		}

	
		 
		 

		backFlag = true;
		info_str = info_str + ']';
		
		tx.innerHTML = "done...";
		

	
	});
	
	
	while(backFlag){
		//console.log("==================================222=====......"+info_str);
		backFlag = false;
		return  true;
	}

}












function authHandler(error, authData) {
  if (error) {
      console.log("Login Failed!", error);
  } else {
      console.log("Authenticated successfully with payload:", authData);
  }
}

function chk_auth(){
	
	//邮箱验证
	ref.authWithPassword({
		email    : '2181003078@qq.com',
		password : 'yg123qweasd'
	}, authHandler);
}

function onValue1() {
	var tx = document.getElementById("tx");
var txr = document.getElementById("txr");
	chk_auth();
	ref.child('test_sync').set("hello world 哦怕");

	ref.on("value", function(snapshot) {
		//alert(snapshot.val())
		//console.log(snapshot.val());
		//tx.innerHTML = JSON.stringify(datasnapshot.val(), null, '\t');
		txr.innerHTML = JSON.stringify(snapshot.val(), null, '\t');
	});
	
	ref.child('test_sync').on("value", function(snapshot) {
		//alert(snapshot.val())
		//console.log(snapshot.val());
		//tx.innerHTML = JSON.stringify(datasnapshot.val(), null, '\t');
		tx.innerHTML = JSON.stringify(snapshot.val(), null, '\t');;
	});
}

function onValue2(){
	ref.on("value", function(snapshot) {
		var data = snapshot.child('lambeosaurus/height/'),
			userlist = '';
		
		data.forEach(function(snap){

		   userlist += "<p><i>Mail:" + snap.val().id + "</i>&nbsp;" + "<i>" + snap.val().mail + "</i></p>"; 

		});
		
		alert("-----------",userlist)
		
		//$('#container').append(userlist);
	}
	//, 
	//function (errorObject) {
	//	$('#container').append("系统错误： " + errorObject.code);
	//}
	);

}



function onValue() {
	
	var tx = document.getElementById("tx");
	var txr = document.getElementById("txr");
	//alert("tert1212");
	
	txr.innerHTML = "see rank1983383";

	ref.on("value", function(snapshot,error) {
    if (error == null) {
        var newPost = snapshot.val();
        //console.log("Author: " + newPost.author);
       // console.log("Title: " + newPost.title);
		
		tx.innerHTML = "kdjfk";
		
    }
	
});


}
	