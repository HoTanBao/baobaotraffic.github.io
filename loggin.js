var CORRECT_USER = 'chuyende1';
var CORRECT_PASS = '123456';
var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');
var formLogin = document.getElementById('form-login');
if(formLogin.attachEvent) {
	formLogin.attachEvent ('submit', onFormSubmit);
} else {
	formLogin.addEventListener('submit', onFormSubmit);
}
function onFormSubmit(e) {
	var username = inputUsername.value;
	var password = inputPassword.value;
	if(username == CORRECT_USER && password == CORRECT_PASS) {
		
		e.preventDefault();
		window.location.assign('begin.html');
		
	} else {
		alert ('Dang nhap that bai');
		}
	}
