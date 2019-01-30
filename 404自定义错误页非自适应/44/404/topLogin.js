// JavaScript Document

<!--
function Cookies()
{
    this.name;
    this.path="/";
    expires=new Date();
    expires.setTime(expires.getTime()+(86400*365));
    this.expires = expires.toGMTString();
}
Cookies.prototype.SetCookie=function (name,value)
{
    document.cookie=name+"="+value+"; expires="+this.expires+"; path="+this.path+"";
}
Cookies.prototype.getCookie=function (Name)
{
   var search = Name + "=";
   if (document.cookie.length > 0)
   {
      offset = document.cookie.indexOf(search)
      if (offset != -1)
      { 
         offset += search.length ;
         end = document.cookie.indexOf(";", offset)
         if (end == -1)
            end = document.cookie.length;       
           return (document.cookie.substring(offset, end));      }
   }
   return 0;
}
function cookie_select(){
	var c = new Cookies();	
	var menu = document.getElementById("menu");
	if(c.getCookie("user[username]","")!=""){
		menu.innerHTML = '<img src="" id="cookie_photo" /><i id="cookie_username"></i><a href="http://passport.huanqiu.com/member.php" target="_blank">个人中心</a><a href="http://passport.huanqiu.com/pm.php?a=pmlist" target="_blank"><span class="menu-msg">(<i id="cookie_pm"></i>)</span></a><a href="http://passport.huanqiu.com/user.php?a=loginout">退出</a>';
		var cookie_username = document.getElementById("cookie_username");
		var cookie_photo = document.getElementById("cookie_photo");
		var cookie_pm = document.getElementById("cookie_pm");
		cookie_username.innerHTML=decodeURI(c.getCookie("user[username]","")); 
		cookie_photo.src=unescape(c.getCookie("user[avatar]",""));
		if(c.getCookie("user[pm]","")==0){
			cookie_pm.parentNode.parentNode.style.textDecoration="none";
			cookie_pm.parentNode.innerHTML = '<i style="padding-left:5px;">&nbsp;</i>';
		}else if(c.getCookie("user[pm]","")<=10){
			cookie_pm.innerHTML=c.getCookie("user[pm]","");
		}else{
			cookie_pm.innerHTML = "10+";
		}
	}else{
		menu.innerHTML = '<a href="http://passport.huanqiu.com/user.php?a=login" class="hdBtnLog">登录</a><span class="logArr"></span><a class="logRegist" href="http://passport.huanqiu.com/user.php?a=register">注册</a>';
	}
}
//-->