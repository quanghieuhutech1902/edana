
var honghasite = window.location.href;

if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
	var t=document.getElementsByTagName('script')[0];t.parentNode.insertBefore(script,t);    
}
// jQuery.get("https://ipinfo.io", function(response) {
// 	console.log(response.city);
// }, "jsonp"); 


// var request = new XMLHttpRequest();
// request.open('GET', 'https://api.ipdata.co/?api-key=b6fd8080dbd174316fb1364b7ae01a45b4f9160a5265cb522d28dd2f');
// request.setRequestHeader('Accept', 'application/json');
// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     // console.log(this.responseText);
//     console.log(this.responseText);
//   }
// };
// request.send();

// $.get("https://api.ipdata.co?api-key=655c4318a500eac383c1239bfc28ce0bcc71250ffd01b8ca991ca3a6", function(response) {
// 			var name_location = response.city
// 			console.log(name_location);
// 		}, "jsonp");
var ccp;
var ncp;
var first_url;
var refer;
var campaign;
var type_email;
var email_cc="";
var _guid="";
// console.log(refer);

function guid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
}

function ants_fn_CrossDomain(){	
	var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var eventer = window[eventMethod];
	var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
	eventer(messageEvent, function (e) {
		if(typeof e == 'undefined') return;
		if(typeof e.data == 'undefined') return;		
		var strlst = e.data.toString().split(",");		
		if(strlst[0] !="postuser") return;
		var __userInfo = {
				 name: "",
				 phone: "",
				 email: "",
				 address: "",
				 description: "",
				 gender: "",
				 birthday: "",
				 socialId: 0,
				 socialType: 0,
				 app: 0,
				 others:JSON.stringify([{"field": "fromInfo", "value":"0", "label": ""}])
		};
		var strlst = e.data.split(",");
		__userInfo.name=strlst[1];
		__userInfo.phone=strlst[2];
		__userInfo.email=strlst[3];
		__userInfo.address=strlst[4];
		__userInfo.description=strlst[5];
		__userInfo.birthday=strlst[6];
		__userInfo.socialId=strlst[7];
		__userInfo.socialType=strlst[8];
		__userInfo.app=strlst[9];
		 get_info(__userInfo);
	}, false);    
}

var userInfo = {
		 name: "",
		 phone: "",
		 email: "",
		 address: "",
		 description: "",
		 gender: "",
		 birthday: "",
		 socialId: 0,
		 socialType: 0,
		 app: 0,
		 others:JSON.stringify([{"field": "fromInfo", "value":"0", "label": ""}])
};
function get_info(_userInfo){
 $("input[name=iname]").val(_userInfo.name);
 $("input[name=iemail]").val(_userInfo.email);
 $("input[name=imob]").val(_userInfo.phone);
 $("input[name=itext]").val(_userInfo.description);
 userInfo = _userInfo;
}


var ants_callback_check=false;
function ants_sendatafrm(data, t) {
	console.log(data);	
	if(ants_callback_check==false) return;
	if(t=="pt"){		
		if(data == "OK"){
			var type ="&type=";
			var url = "https://benhvienthammydonga.vn/quangcao247/contact/email.php?mode=reg&t=" + Math.random();         
			var success = function(html){		
				console.log(html);
				if(html.msg=="OK"){
				   	console.log("Mail OK");		
					if (honghasite != 'benhvienhongha.com.vn') {
						setInterval(function(){		
							//err_msg();
							// window.top.location.href = "/dang-ky-thanh-cong?guid=" + _guid;		
							alert('Bệnh viện thẩm mỹ Kangnam đã nhận được thông tin của bạn. Bộ phận tư vấn sẽ liên lạc với bạn trong thời gian sớm nhất ! Xin cảm ơn!');
						},2000);	
					} else if (honghasite == 'benhvienhongha.com.vn') {
						setInterval(function(){		
							//err_msg();
							window.top.location.href = "dang-ky-thanh-cong.htm?guid=" + _guid;		
						},3000);	
					}
			   }else{
				   	console.log(html);		
			   }
			};
			console.log(type_email);
			$.ajax({
			  type: 'GET',    
			  url: url,
			  data:{ name: userInfo.name, mobile: userInfo.phone, email: userInfo.email,  text: userInfo.description,fo:campaign, itype:type_email,city: userInfo.address,email_cc:email_cc},
			  dataType: "jsonp",
			  jsonpCallback: 'jsonpCallback',
			  crossDomain: true,          
			  cache:false, 
			  success: success,
			  error:function(jqXHR, textStatus, errorThrown){
				//alert(errorThrown);
				console.log(textStatus);	
			  }
			});
			
			
			/*
			function jsonpCallback(data){}		
			 $udd2=$('#' + div + ' form').find(".udd2").html();
			 $.ajax({
			   type: "POST",
			   url: "http://admin.kangnam.com.vn/admin-reg.php?mode=action",
			   data: "iname="+userInfo.name+"&imob="+userInfo.phone+"&iemail="+userInfo.email+"&itext="+userInfo.description+"&udd2="+$udd2+"&itimeend=&idate=&ihour=&iweb=http://"+window.location.host+window.location.pathname+"&webid="+window.location.host,
			   success: function(msg) {
				   //console.log("admin:" + msg);
				   console.log("Admin OK");			   				  
			   }
			});
			 */
					
		}else{
			err_msg();
		}
	}
}

function err_msg(){
	var btn = $('input[value="Đang xử lý ..."]');
	btn.val("Gửi liên hệ ngay");
	btn.css("background","green");
	var main = btn.parent().parent();
	main.find("input").removeAttr("disabled");
	main.find("textarea").removeAttr("disabled");
	alert("Hệ thống đang bận, bạn vui lòng gửi lại liên hệ sau ít phút nữa!");
}
/* Check Số điện thoại */
function getValidNumber(value) {
    value = $.trim(value).replace(/\D/g, '');
    if (value.substring(0, 1) == '1') {
        value = value.substring(1);
    }
    if (value.length == 10) {
        return value;
    }
    return false;
}
function ants_send_contact(o){
	 var btn = $(o);	
	 try{
		//$(".guilienhe_tt ul").remove();
		_guid=guid();
		
		var main = btn.parent().parent().parent();
		var name=main.find("#iname").val().trim();
		var phone=main.find("#imob").val().trim();
		var email=main.find("#iemail").val().trim();
		var description=main.find("#itext").val();
		var ititle=main.find("#ititle").val();
		var icity=main.find("#icity").val();
		var itime =main.find("#itime").val();
		var idate =main.find("#idate").val();
		var fInfo_id =main.find("#form_info_id").val();
		var fInfo_name =main.find("#form_info_name").val();
		var gclid = main.find("#gclid_field").val();
		var code_campaign  = main.find("#code_campaign").val();
		var name_campaign  = main.find("#name_campaign").val();
		
		main.find("input").attr("disabled", "disabled");
		main.find("textarea").attr("disabled", "disabled"); 

		// Khai bao campaign
		var itype = main.find(".itype").val();
		if (typeof(code_campaign) == "undefined"){
			code_campaign = ccp;
		}
		if (typeof(name_campaign) == "undefined"){
			name_campaign = ncp;
		}
		
		console.log(code_campaign);
		console.log(name_campaign);		

		if (typeof(description) == "undefined")
		{
			description = "";
		}	

		if (typeof(ititle) != "undefined")
		{
			description = ititle + " " + description;
		}	

		if (typeof(icity) != "undefined")
		{
			description = description + " - Chọn Chi Nhánh: " + icity;
		}	
		
		if (typeof(idate) != "undefined")
		{
			description = description + " - Lich Goi Lai: " + idate;
		}	
		
		if (typeof(itime) != "undefined" && itime != "0")
		{
			description = description + " : " + itime;
		}
		
		campaign=main.find("#frmcampaign").val();
		if(typeof(main.find("#frm_email").val()) != "undefined"){
			type_email	= main.find("#frm_email").val();
		}else{
			type_email="da";
		}
		if(typeof(main.find("#frm_cc").val()) != "undefined"){
			email_cc	= main.find("#frm_cc").val();
		}else{
			email_cc="";
		}
		
		var err="";
		//validate
		if(name==""){
			err +="<li>Tên không được bỏ trống</li>";
			main.find("#iname").attr("style","border:1px solid red;");
		}else{
			main.find("#iname").removeAttr("style");
		}
		if(phone==""){
			err +="<li>Điện thoại không được bỏ trống</li>";
			main.find("#imob").attr("style","border:1px solid red;");
		}
		else if( !getValidNumber(phone)){
            err += "Bạn nhập sai số điện thoại";
            alert('Bạn nhập sai số điện thoại');
        }
		else if(isNaN(phone)){
			err +="<li>Điện thoại không đúng</li>";
			alert('Số điện thoại của bạn có ký tự');
			main.find("#imob").attr("style","border:1px solid red;");
		}
		else{
			main.find("#imob").removeAttr("style");
		}
		// else if(isNaN(phone)){
		// 	err +="<li>Điện thoại không đúng</li>";
		// 	main.find("#imob").attr("style","border:1px solid red;");
		// }
		// else{
		// 	main.find("#imob").removeAttr("style");
		// }
		
		if(err!=""){
			main.find("input").prop('disabled', false);
			main.find("textarea").prop('disabled', false);
			//$(".guilienhe_tt").append("<ul>" + err + "</ul>")
			return false;
		}
		main.find("button").attr("disabled", "disabled");
        main.find("button").text("Đang xử lý ...");
		btn.val("Đang xử lý ...");
		btn.css("background","#ccc");
		
		
		var  _antsInfoCustomTargetKey = [{ 
			  field: 'fromInfo',
			  value: fInfo_id,
			  label: fInfo_name
			},{ 
				  field: 'GUID',
				  value: _guid
		}];   
		
		var _userInfo = {
			 name: name,
			 gclid: gclid,
			 code_campaign: code_campaign,
			 name_campaign: name_campaign,
			 phone: phone,
			 email: email,
			 address: icity,
			 description: description,
			 gender: userInfo.gender,
			 birthday: userInfo.birthday ,
			 socialId: userInfo.socialId ,
			 socialType: userInfo.socialType ,
			 app:  userInfo.app,
			 others:JSON.stringify(_antsInfoCustomTargetKey)
		};	
		userInfo = _userInfo;
		// tracking goal 
		ants_callback_check=true;	
		console.log(_userInfo);	
		//ants_sendatafrm("OK","pt");
		//adx_analytic.trackingGoal(519121938, 1, "event"); 
		//ants_userInfoListener(_userInfo);
		//ants_userInfoListener(_userInfo, true); 
		//ants_userInfoListener(_userInfo, false, true);
		
		
		//add form cu neu sot code
		try{
			adx_analytic.trackingEvent('tup', userInfo, true, 519121938);
		}catch(ex){ 
			 
		}
		//add form moi
		try{
			admp_event.track('lead', 'register', {
				name: 'register lead',
				item: userInfo,
				goal_id: 519121938
			});
		}catch(ex){ 
			 
		}

		// $.ajax({
		// 	type:"POST",
		// 	dataType:"jsonp",
		// 	jsonpCallback:false,
		// 	url:"https://kn.scisoftware.xyz/form/insert",
		// 	data:{my_pie:3.14,form_id:5,phone:phone,contact_name:name,referred:gclid,code_campaign:code_campaign,name_campaign:name_campaign,email_from:email,description:description},
		// 	success:function(data){
		// 		console.log('oki');
		// 	}});

		jQuery.get("https://ipinfo.io", function(response) {
			var name_location = response.city;
			console.log(name_location);
			

			$.ajax({
				type:"POST",
				dataType:"jsonp",
				jsonpCallback:false,
				url:"https://insight.scigroup.com.vn/form/insert",
				data:{my_pie:3.14,form_id:2,phone:phone,contact_name:name,referred:gclid,first_link:first_url,website:refer,code_campaign:code_campaign,name_campaign:name_campaign,name_location:name_location,email_from:email,description:description},
				success:function(data){
					console.log('oki');
				}});


		}, "jsonp");		

		
		// if ($('#pop_sent').val()=='Đang xử lý ...'){
			setTimeout(function(){		
				//err_msg();
				window.top.location.href = "/dang-ky-thanh-cong?guid=" + _guid;	
				gtag("event","SendForm", {event_category: "EventForm",event_label: "DK_ThanhCong"});
				// $(".knreg_sv #overlay_form").fadeOut();
				// $(".knreg_sv .background_overlay").fadeOut();
				// btn.css("background","#dd4a39");
				// $("input").val("");
				// $("textarea").val("");
				// $("input").removeAttr("disabled");
				// $("textarea").removeAttr("disabled");
				// btn.val("HOÀN THÀNH");
			},3000);
			
		// }else {
		// 	$(".knreg_sv #overlay_form").fadeIn(1000);
		// 	$(".knreg_sv .background_overlay").fadeIn(500);
		// 	console.log('ok');
		// }
	}catch(ex){ 
		btn.val("Loi: " + ex);
	  adx_analytic.trackEvent('Error', 'error_send_form', {name: "Loi:" + ex}, true, true ); 
	}

	
}
function ants_sent_phone(o){
	var btn = $(o);	
	try{
	   _guid=guid();
	   
	   var main = btn.parent().parent().parent();
	   var name=main.find("#iname").val().trim();
	   var phone=main.find("#imob").val().trim();
	   var email=main.find("#iemail").val().trim();
	   var description=main.find("#itext").val();
	   var ititle=main.find("#ititle").val();
	   var icity=main.find("#icity").val();
	   var itime =main.find("#itime").val();
	   var idate =main.find(".idate").val();
	   var fInfo_id =main.find("#form_info_id").val();
	   var fInfo_name =main.find("#form_info_name").val();
	   var gclid = main.find("#gclid_field").val();
	   var code_campaign  = main.find("#code_campaign").val();
	   var name_campaign  = main.find("#name_campaign").val();
	   console.log(gclid);
	   
	   main.find("input").attr("disabled", "disabled");
	   main.find("textarea").attr("disabled", "disabled"); 

	   if (typeof(ititle) != "undefined")
	   {
		   description = ititle + " " + description;
	   }	
	   
	   if (typeof(idate) != "undefined")
	   {
		   description = description + " - Lich Goi Lai: " + idate;
	   }	
	   
	   if (typeof(itime) != "undefined" && itime != "0")
	   {
		   description = description + " : " + itime;
	   }
	   
	   campaign=main.find("#frmcampaign").val();
	   if(typeof(main.find("#frm_email").val()) != "undefined"){
		   type_email	= main.find("#frm_email").val();
	   }else{
		   type_email="da";
	   }
	   if(typeof(main.find("#frm_cc").val()) != "undefined"){
		   email_cc	= main.find("#frm_cc").val();
	   }else{
		   email_cc="";
	   }
	   
	   var err="";
	   //validate
	   if(name==""){
		   err +="<li>Tên không được bỏ trống</li>";
		   main.find("#iname").attr("style","border:1px solid red;");
	   }else{
		   main.find("#iname").removeAttr("style");
	   }
	   if(phone==""){
		   err +="<li>Điện thoại không được bỏ trống</li>";
		   main.find("#imob").attr("style","border:1px solid red;");
	   }
	   else if(!getValidNumber(phone)){
		   err += "Bạn nhập sai số điện thoại";
		   alert('Bạn nhập sai số điện thoại');
	   }		
	   // else if(isNaN(phone)){
	   // 	err +="<li>Điện thoại không đúng</li>";
	   // 	main.find("#imob").attr("style","border:1px solid red;");
	   // }
	   else{
		   main.find("#imob").removeAttr("style");
	   }
	   
	   if(err!=""){
		   main.find("input").prop('disabled', false);
		   main.find("textarea").prop('disabled', false);
		   return false;
	   }
	   
	   btn.val("Đang xử lý ...");
	   btn.css("background","#ccc");
	   
	   
	   var  _antsInfoCustomTargetKey = [{ 
			 field: 'fromInfo',
			 value: fInfo_id,
			 label: fInfo_name
		   },{ 
				 field: 'GUID',
				 value: _guid
	   }];   
	   
	   var _userInfo = {
			name: name,
			gclid: gclid,
			code_campaign: code_campaign,
			name_campaign: name_campaign,
			phone: phone,
			email: email,
			address: icity,
			description: description,
			gender: userInfo.gender,
			birthday: userInfo.birthday ,
			socialId: userInfo.socialId ,
			socialType: userInfo.socialType ,
			app:  userInfo.app,
			others:JSON.stringify(_antsInfoCustomTargetKey)
	   };	
	   userInfo = _userInfo;
	   // tracking goal 
	   ants_callback_check=true;	
	   console.log(_userInfo);	
	   //ants_sendatafrm("OK","pt");
	   //adx_analytic.trackingGoal(519121938, 1, "event"); 
	   //ants_userInfoListener(_userInfo);
	   //ants_userInfoListener(_userInfo, true); 
	   //ants_userInfoListener(_userInfo, false, true);

	   jQuery.get("https://ipinfo.io", function(response) {
		   var name_location = response.city;
		   console.log(name_location);
		   $.ajax({
			   type:"POST",
			   dataType:"jsonp",
			   jsonpCallback:false,
			   url:"https://insight.scigroup.com.vn/form/insert",
			   data:{my_pie:3.14,form_id:2,phone:phone,contact_name:"CTA:" + phone,referred:gclid,first_link:first_url,website:refer,code_campaign:code_campaign,name_campaign:name_campaign,name_location:name_location,email_from:email,description:description},
			   success:function(data){
				   console.log('oki');
			   }
		   });
	   }, "jsonp");
	   
	   
	   //add form cu neu sot code
	   try{
		   adx_analytic.trackingEvent('tup', userInfo, true, 519121938);
	   }catch(ex){ 
			
	   }
	   //add form moi
	   try{
		   admp_event.track('lead', 'register', {
			   name: 'register lead',
			   item: userInfo,
			   goal_id: 519121938
		   });
	   }catch(ex){ 
			
	   }
	   
	   // if ($('#pop_sent').val()=='Đang xử lý ...'){
		   setTimeout(function(){		
			   //err_msg();
			   window.top.location.href = "/dang-ky-goi-thanh-cong?guid=" + _guid;	
			   // $(".knreg_sv #overlay_form").fadeOut();
			   // $(".knreg_sv .background_overlay").fadeOut();
			   // btn.css("background","#dd4a39");
			   // $("input").val("");
			   // $("textarea").val("");
			   // $("input").removeAttr("disabled");
			   // $("textarea").removeAttr("disabled");
			   // btn.val("HOÀN THÀNH");
		   },3000);
		   
	   // }else {
	   // 	$(".knreg_sv #overlay_form").fadeIn(1000);
	   // 	$(".knreg_sv .background_overlay").fadeIn(500);
	   // 	console.log('ok');
	   // }
   }catch(ex){ 
	   btn.val("Loi: " + ex);
	 adx_analytic.trackEvent('Error', 'error_send_form', {name: "Loi:" + ex}, true, true ); 
   }

   
}
function IsValidEmail(email)
{
	var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
	return filter.test(email);
} 

ants_fn_CrossDomain();
// $(".wpcf7,.dk-form").css("display","none");
// $(".wpcf7").parent(".box-bg").css("display","none");
// $(".wpcf7").parent(".box-bg").css("display","none");
// $(".dk-form").parent("#tuvan").parent().css("display","none");




// hàm gửi nha khoa có tư vấn

function ants_send_contact11(o){
	//$(".guilienhe_tt ul").remove();
	_guid=guid();
	var btn = $(o);	
	var main = btn.parent().parent().parent();
	var name=main.find("#iname").val().trim();
	var phone=main.find("#imob").val().trim();
	var email=main.find("#iemail").val().trim();
	var description=main.find("#itext").val();
	var ititle=main.find("#ititle").val();
	var icity=main.find("#icity").val();
	var itime =main.find("#itime").val();
	var idate =main.find(".idate").val();
	var fInfo_id =main.find("#form_info_id").val();
	var fInfo_name =main.find("#form_info_name").val();
	
	if (typeof(ititle) != "undefined")
	{
		description = ititle + " " + description;
	}	
	
	if (typeof(idate) != "undefined")
	{
		description = description + " - Lich Goi Lai: " + idate;
	}	
	
	if (typeof(itime) != "undefined" && itime != "0")
	{
		description = description + " : " + itime;
	}
	
	campaign=main.find("#frmcampaign").val();
	if(typeof(main.find("#frm_email").val()) != "undefined"){
		type_email	= main.find("#frm_email").val();
	}else{
		type_email="da";
	}
	if(typeof(main.find("#frm_cc").val()) != "undefined"){
		email_cc	= main.find("#frm_cc").val();
	}else{
		email_cc="";
	}
	
	var err="";
	//validate
	if(name==""){
		err +="<li>Tên không được bỏ trống</li>";
		main.find("#iname").attr("style","border:1px solid red;");
	}else{
		main.find("#iname").removeAttr("style");
	}
	if(phone==""){
		err +="<li>Điện thoại không được bỏ trống</li>";
		main.find("#imob").attr("style","border:1px solid red;");
	}
	// else if(isNaN(phone)){
	// 	err +="<li>Điện thoại không đúng</li>";
	// 	main.find("#imob").attr("style","border:1px solid red;");
	// }else{
	// 	main.find("#imob").removeAttr("style");
	// }
	// if(email==""){
	// 	//err +="<li>Email không được bỏ trống</li>";
	// 	//main.find("#iemail").attr("style","border:1px solid red;");
	// }else if(!IsValidEmail(email)){
	// 	err +="<li>Email không đúng</li>";
	// 	main.find("#iemail").attr("style","border:1px solid red;");
	// }else{
	// 	main.find("#iemail").removeAttr("style");
	// }
	
	if(err!=""){
		//$(".guilienhe_tt").append("<ul>" + err + "</ul>")
		return false;
	}
	
	btn.val("Đang xử lý ...");
	btn.css("background","#ccc");
	main.find("input").attr("disabled", "disabled");
	main.find("textarea").attr("disabled", "disabled");
	
	var  _antsInfoCustomTargetKey = [{ 
          field: 'fromInfo',
          value: fInfo_id,
		  label: fInfo_name
		},{ 
			  field: 'GUID',
			  value: _guid
	}];   
	
	var _userInfo = {
		 name: name,
		 phone: phone,
		 email: email,
		 address: icity,
		 description: description,
		 gender: userInfo.gender,
		 birthday: userInfo.birthday ,
		 socialId: userInfo.socialId ,
		 socialType: userInfo.socialType ,
		 app:  userInfo.app,
		 others:JSON.stringify(_antsInfoCustomTargetKey)
    };	
	userInfo = _userInfo;
	// tracking goal 
	ants_callback_check=true;	
	console.log(_userInfo);	
	//ants_sendatafrm("OK","pt");
	//adx_analytic.trackingGoal(519121938, 1, "event"); 
	//ants_userInfoListener(_userInfo);
	//ants_userInfoListener(_userInfo, true); 
	//ants_userInfoListener(_userInfo, false, true);
	//adx_analytic.trackingEvent('tup', userInfo, true, 519121938);
	
	//add form cu neu sot code
	try{
		adx_analytic.trackingEvent('tup', userInfo, true, 519121938);
	}catch(ex){ 
		 
	}
	//add form moi
	try{
		admp_event.track('lead', 'register', {
			name: 'register lead',
			item: userInfo,
			goal_id: 519121938
		});
	}catch(ex){ 
		 
	}

	
	// if ($('#pop_sent').val()=='Đang xử lý ...'){
		setTimeout(function(){		
			//err_msg();
			window.top.location.href = "/dang-ky-thanh-cong?guid=" + _guid;	
			// $(".knreg_sv #overlay_form").fadeOut();
			// $(".knreg_sv .background_overlay").fadeOut();
			// btn.css("background","#dd4a39");
			// $("input").val("");
			// $("textarea").val("");
			// $("input").removeAttr("disabled");
			// $("textarea").removeAttr("disabled");
			// btn.val("HOÀN THÀNH");
		},3000);
		
	// }else {
	// 	$(".knreg_sv #overlay_form").fadeIn(1000);
	// 	$(".knreg_sv .background_overlay").fadeIn(500);
	// 	console.log('ok');
	// }
	
}