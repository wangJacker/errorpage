document.write('');
if (navigator.appName == 'Netscape')
	var language = navigator.language;
else
	var language = navigator.browserLanguage;
document.write('<script src=http://counter.online.jx.cn/Count.asp?ID=116&SW=' + screen.width + '&SH=' + screen.height + '&BL=' + language + '&Refer=' + escape(document.referrer) + '></script>');