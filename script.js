//========== Вкладка действий с БД ==========//
	$(document).ready(function(){
		$("#less1_cmd_button").on('click', function(){
		if ($("#less1_cmd").is(":hidden")) {
            $("#less1_cmd").show("slow");
			
			$("#less1_myadmin").hide("slow");
			$("#less1_php").hide("slow");
        } else {
            $("#less1_cmd").hide("slow");
        }
		});
		
		$("#less1_myadmin_button").on('click', function(){
		if ($("#less1_myadmin").is(":hidden")) {
            $("#less1_myadmin").show("slow");
			
			$("#less1_cmd").hide("slow");
			$("#less1_php").hide("slow");
        } else {
            $("#less1_myadmin").hide("slow");
        }
		});
		
		$("#less1_php_button").on('click', function(){
		if ($("#less1_php").is(":hidden")) {
            $("#less1_php").show("slow");
			
			$("#less1_myadmin").hide("slow");
			 $("#less1_cmd").hide("slow");
        } else {
            $("#less1_php").hide("slow");
        }
		});
	});