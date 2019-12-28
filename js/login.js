var list = 2;

function validform(){
	var user =  document.login.username.value;
	var pass = document.login.psw.value;
	var valid = false;
	var userarr = ["duc123", "duy123"];
	var passarr = ["123", "123"];
	for (var i = 0, l = userarr.length; i < l; ++i) {
	    if ((user == userarr[i]) && (pass == passarr[i])) {
			valid = true;
			break;
	    }
	}			

	if(valid){
		window.location = "HomeAfter.html"
		return false;
	}
	else{
		alert("Incorrect Username or Password !");
		window.location = "Home.html"
		return false;
	}
}
