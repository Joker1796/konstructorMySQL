//========== УРОК 1 | вкладки ==========//
	$(document).ready(function(){
		$("#less1_cmd_button").on('click', function(){
		if ($("#less1_cmd").is(":hidden")) {
            $("#less1_cmd").show("slow");
			
			$("#less1_myadmin").hide("slow");
			$("#less1_php").hide("slow");
			
			document.getElementById('less1_cmd_button').className = 'less less1 less_activ';
			document.getElementById('less1_myadmin_button').className = 'less less1';
			document.getElementById('less1_php_button').className = 'less less1';
        } else {
            $("#less1_cmd").hide("slow");
        }
		});
		
		$("#less1_myadmin_button").on('click', function(){
		if ($("#less1_myadmin").is(":hidden")) {
            $("#less1_myadmin").show("slow");
			
			$("#less1_cmd").hide("slow");
			$("#less1_php").hide("slow");
			
			document.getElementById('less1_cmd_button').className = 'less less1';
			document.getElementById('less1_myadmin_button').className = 'less less1 less_activ';
			document.getElementById('less1_php_button').className = 'less less1';
        } else {
            $("#less1_myadmin").hide("slow");
        }
		});
		
		$("#less1_php_button").on('click', function(){
		if ($("#less1_php").is(":hidden")) {
            $("#less1_php").show("slow");
			
			$("#less1_myadmin").hide("slow");
			 $("#less1_cmd").hide("slow");
			 
			document.getElementById('less1_cmd_button').className = 'less less1';
			document.getElementById('less1_myadmin_button').className = 'less less1';
			document.getElementById('less1_php_button').className = 'less less1 less_activ';
        } else {
            $("#less1_php").hide("slow");
        }
		});
	});
	
//========== УРОК 1 | PHP ==========//
	$(document).ready(function(){
		$("#less1_button_phpcode").on('click', function(){
			var hostname = $("#less1_hostname").val();
			var database = $("#less1_database").val();
			var username = $("#less1_username").val();
			var password = $("#less1_password").val();
			$("#less1_polezapros").html("< ?php //без пробела <br> 	$db_hostname = '" + hostname + "'; <br> $db_database = '" + database + "'; <br> $db_username = '" + username + "'; <br> $db_password = '" + password + "'; <br> ?> </print>");
			
		});
	});

//========== УРОК 2 | PHP | Создание и Удаление БД==========//
	$(document).ready(function(){
		$("#less2_createBD").on('click', function(){
			var name_BD = $("#name_BD").val();
			$("#less2_polezapros").html('< ?php //без пробела <br> require_once "login.php"; <br> $db_server = mysql_connect($db_hostname, $db_username, $db_password); <br>if (!$db_server) die("Невозможно подключиться к MySQL: " . mysql_error()); <br>mysql_select_db($db_database) <br>or die("Невозможно выбрать базу данных: " . mysql_error()); <br>$query = "CREATE DATABASE ' + name_BD + '; <br>$result = mysql_query($query);<br>if (!$result) die ("Сбой при доступе к базе данных: " . mysql_error());<br>?> ');	
		});
		
		$("#less2_deleteBD").on('click', function(){
			var name_BD = $("#name_BD").val();
			$("#less2_polezapros").html('< ?php //без пробела <br> require_once "login.php"; <br> $db_server = mysql_connect($db_hostname, $db_username, $db_password); <br>if (!$db_server) die("Невозможно подключиться к MySQL: " . mysql_error()); <br>mysql_select_db($db_database) <br>or die("Невозможно выбрать базу данных: " . mysql_error()); <br>$query = "DROP DATABASE ' + name_BD + ';<br>?> ');	
		});
	});