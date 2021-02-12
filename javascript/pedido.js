var Name = document.forms['form']['Name'];
var address = document.forms['form']['address'];
var city = document.forms['form']['city'];
var state = document.forms['form']['state'];
var zip = document.forms['form']['zip'];
var country = document.forms['form']['country'];

var Name_error = document.getElementById('Name_error');
var address_error = document.getElementById('address_error');
var city_error = document.getElementById('city_error');
var state_error = document.getElementById('state_error');
var zip_error = document.getElementById('zip_error');
var country_error = document.getElementById('country_error');

Name.addEventListener('textInput', Name_Verify);
address.addEventListener('textInput', address_Verify);
city.addEventListener('textInput', city_Verify);
state.addEventListener('textInput', state_Verify);
zip.addEventListener('textInput', zip_Verify);
country.addEventListener('textInput', country_Verify);

function pedidoted(){
	if (Name.value.length < 2) {
		Name.style.border = "1px solid red";
		Name_error.style.display = "block";
		Name.focus();
		return false;
	}
	if (address.value.length < 2) {
		address.style.border = "1px solid red";
		address_error.style.display = "block";
		address.focus();
		return false;
	}
    if (city.value.length < 2) {
		city.style.border = "1px solid red";
		city_error.style.display = "block";
		city.focus();
		return false;
	}
    if (state.value.length < 2) {
		state.style.border = "1px solid red";
		state_error.style.display = "block";
		state.focus();
		return false;
	}
    if (zip.value.length < 5) {
		zip.style.border = "1px solid red";
		zip_error.style.display = "block";
		zip.focus();
		return false;
	}
    if (country.value.length < 2) {
		country.style.border = "1px solid red";
		country_error.style.display = "block";
		country.focus();
		return false;
	}

}
function Name_Verify(){
	if (Name.value.length >= 2) {
		Name.style.border = "1px solid silver";
		Name_error.style.display = "none";
		return true;
	}
}
function address_Verify(){
	if (address.value.length >= 2) {
		address.style.border = "1px solid silver";
		address_error.style.display = "none";
		return true;
	}
}

function city_Verify(){
	if (city.value.length >= 2) {
		city.style.border = "1px solid silver";
		city_error.style.display = "none";
		return true;
	}
}

function state_Verify(){
	if (state.value.length >= 2) {
		state.style.border = "1px solid silver";
		state_error.style.display = "none";
		return true;
	}
}

function zip_Verify(){
	if (zip.value.length >= 4) {
		zip.style.border = "1px solid silver";
		zip_error.style.display = "none";
		return true;
	}
}

function country_Verify(){
	if (country.value.length >= 2) {
		country.style.border = "1px solid silver";
		country_error.style.display = "none";
		return true;
	}
}