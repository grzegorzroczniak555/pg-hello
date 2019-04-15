function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}


function OwnerInfo() { 

	info = 'Cześć, jestem Grzegorz' + '\n' +
			'======' + '\n' +
			'Imię i nazwisko    :' + 'Grzegorz Roczniak' + '\n' +
			'Adres email        :' + 'grzegorz.roczniak@o2.pl' + '\n' +
			'Strona WWW         :' + 'www.niemamstrony.pl' + '\n' +
			'Nr wydziału        :' + '1212' + '\n' +
			'Kierunek studiow   :' + 'Informatyka Stosowana' + '\n';
		
	navigator.notification.alert(info);

 }
 
function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'=====' + '\n' +
			'Device Name    : '     + device.name     + '\n' + 
			'Device Cordova : '  + device.cordova + '\n' + 
			'Device Platform: ' + device.platform + '\n' + 
			'Device UUID    : '     + device.uuid     + '\n' + 
			'Device Model   : '    + device.model     + '\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}