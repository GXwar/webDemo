// Create Cookie
function setCookie(name,value,days=30)
{
  let exp = new Date();
  exp.setTime(exp.getTime() + days*24*60*60*1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
}

// Read Cookie
function getCookie(name)
{
  let arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");

  if(arr = document.cookie.match(reg))

    return decodeURI(arr[2]);
  else
    return null;
}

// Delete Cookie
function delCookie(name) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


// main
setCookie('username', 'testUser');
setCookie('password', '123456');

