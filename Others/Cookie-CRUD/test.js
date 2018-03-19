function setCookie(name,value,days=30)
{
  let exp = new Date();
  exp.setTime(exp.getTime() + days*24*60*60*1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toUTCString();
}

setCookie('userName', 'qw')