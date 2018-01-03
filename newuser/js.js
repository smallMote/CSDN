// JavaScript Document
$(function(){
	var $zh = $('.userName');//账号DOM
	var $zhts = $zh.next().find('a');//账号提示
	var $pwd = $('.userPwd'); //密码DOM
	var $pwdts = $pwd.next().find('a');//密码提示
	var $qrpwd = $('.qruserPwd'); //确认密码DOM
	//焦点验证
	$.each($('input'),function(){
		var attrByname = $(this).attr('name');
		if(attrByname == $zh.attr('name')){
			$(this).blur(function(){
				visuser($zh,$zhts);
			});
		}else if(attrByname == $pwd.attr('name')){
			$(this).blur(function(){
				visuser($pwd,$pwdts);
			});
		}else if(attrByname == $qrpwd.attr('name')){
			$(this).blur(function(){
				pwdsame($pwd,$qrpwd);
			});
		}
	});
	
	//submit验证
	$('input[type="submit"]').click(function(e){		
		if(visuser($zh,$zhts) && visuser($pwd,$pwdts) && pwdsame($pwd,$qrpwd)){
			alert('登录成功'+'\n'+'提交表单');
			}
		e.prevenDefault;//阻止默认事件行为
		return false; //阻止冒泡
		});
	
	//账号验证
	/**
	  *obj:判断的文本框
	  *objts:提示文本框
	  */
	function visuser(obj,objts){
		var flag = false;
		var tsmes = "";
		if(obj.val().length == 0){
			tsmes = "请填写信息";
		}else if(obj.val().length <3){
			tsmes = "您的信息太短了";	
		}else if(obj.val().length > 8){
			tsmes = "您的信息太长了";
		}else if(!isNaN(obj.val())){
			tsmes = "不能为纯数字";
		}else{
			tsmes = "验证通过";
			flag = true;
		};
		objts.html(tsmes);
		return flag;
		}
	//判断没密码是否一致
	/**
	  *obj_1:密码框
	  *obj_2:确认密码框
	  *密码框与面提示框关系：var obj_1ts = obj_1.next().find('a');
	  *确认密码亦同
	  */
	function pwdsame(obj_1,obj_2){
		var obj_1ts = obj_1.next().find('a');
		var obj_2ts = obj_2.next().find('a');
		var tsmes = "";
		var flag = false;
		if(obj_1.val().length == 0){
			tsmes = "请填写信息";
			if(obj_1.val() == obj_2.val()){
				visuser(obj_1,obj_1ts);	//如果密码为空了就交个visuser()去处理
			}
		}else if(obj_1.val() != obj_2.val()){
			tsmes = "两次密码输入不一致";			
		}else{
			tsmes = "验证通过";
			var flag = true;
		}
		obj_2ts.html(tsmes);
		return flag;
	}
	});