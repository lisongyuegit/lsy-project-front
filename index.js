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
}

//初始化监测类别下拉框的值
//function submit(defaultValue){
//alert("触发了点击事件")
//$.ajax({
//	    url : rootpath+"/webpage/biz/sf/objectandcategory/list.action?bean.objectid="+objectid,
//		type:'POST',
//		cache : false,
//		data : {},
//		async : false,
//		error : function(data) {
//			alertErrorMsg("系统ajax交互错误");
//		},
//		success : function(data) {
//		//先初始为空值
//        $("#categoryid").empty();
//			var datastr = JSON.parse(data);
//			var dataList = datastr.rows;
//			for(var i = 0; i < dataList.length; i++){
//				if(i == 0){
//					$("#categoryid").append("<option value=''>请选择</option>");
//				}
//				if(defaultValue == dataList[i].categoryid){
//					$("#categoryid").append("<option value='"+dataList[i].categoryid+"' selected='selected'>"+dataList[i].categoryname+"</option>");//新增
//				}else{
//					$("#categoryid").append("<option value='"+dataList[i].categoryid+"'>"+dataList[i].categoryname+"</option>");//新增
//				}
//			}
//		}
//	});
//}
