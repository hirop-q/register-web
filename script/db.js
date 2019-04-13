var db = openDatabase("myDB", "1.0", "dB", 2 * 1024 * 1024);

db.transaction(function(tx){
	tx.executeSql("CREATE TABLE IF NOT EXISTS contas (id INTEGER PRIMARY KEY,email TEXT,username TEXT,password TEXT)");
});

function salvarDados(){
	var email = document.getElementById("email").value;
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	
	db.transaction(function(tx){
		tx.executeSql('INSERT INTO contas (email, username, password) VALUES(?,?,?)',[email,username,password]);
	});
}