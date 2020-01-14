console.log("已经成功进入JS");
function copyText(){
	console.log("你点击了一下");
	var url = "http://localhost:8081/lsy/testQuery";
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onload = function (e) {
	  if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		  console.log("调用成功:" + xhr.responseText);
		  resultVO = JSON.parse(xhr.responseText);
		} else {
		  console.error(xhr.statusText);
		}
	  }
	};
	xhr.onerror = function (e) {
	  console.error(xhr.statusText);
	};
	xhr.send(null);
	console.log("调用结束 ");
	submit("11");
}

//初始化监测类别下拉框的值
function submit(defaultValue){
console.log("进入ajax");
$.ajax({
	    url : 'http://localhost:8081/lsy/testQuery',
		type:'GET',
		cache : false,
		data : {},
		async : false,
		error : function(data) {
			alertErrorMsg("系统ajax交互错误");
		},
		success : function(data) {
		//先初始为空值
			var datastr = JSON.parse(data);
			console.log("ajax调用结果为: " + datastr)
			var dataList = datastr.rows;
		}
	});
}
