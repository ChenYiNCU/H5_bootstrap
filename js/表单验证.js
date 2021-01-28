function a() {
	var s1 = document.getElementById("Input1").value;
	var s3 = document.getElementById("Input2").value;
	var s4 = document.getElementById("Input1").value;
	var s2 = document.getElementsByTagName("textarea");
	if(s1=="" || s2=="" || s3=="" || s4 =="") {
		alert("不能提交");
		return false;		
	} else {
		alert("提交成功");
		return true;
	}
}