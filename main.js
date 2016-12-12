	
var objPeople = [
	{ // Object @ 0 index
		username: "Hugo",
		password: "1234"
	},
	{ // Object @ 1 index
		username: "Paco",
		password: "1234"
	},

	{ // Object @ 2 index
		username: "Luis",
		password: "1234"
	},

	{ // Object @ 2 index
		username: "LuzLugo",
		password: "1234"
	}
]

var admins = [
	{ // Object @ 0 index
		username: "Ernesto21",
		password: "1234"
	},
	{ // Object @ 1 index
		username: "Carmen21",
		password: "1234"
	},
	{ // Object @ 2 index
		username: "Cristian21",
		password: "1234"
	}	
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < admins.length; i++) {
		// check is user input matches username and password of a current index of the admins array
		if(username == admins[i].username && password == admins[i].password) {
			console.log(username + " Administrador ha iniciado Sesion!!!")
			// stop the function if this is found to be true
			document.location.href = 'escritorio.html'
			//document.location.href="/ViewerJS/#../p.pdf">
			return
		}	
	}

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " Usuario ha iniciado Sesion!!!")
			document.location.href = 'escritorio.html'
			// stop the function if this is found to be true
			return
		}	
	}
	console.log("Incorrecto usuario y contrasena")
}