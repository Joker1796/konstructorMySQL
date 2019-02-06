$(document).ready(function(){
	//выводит футер
	var d = new Date(),
		year = d.getFullYear();
	$(".foot").html('ГПОУ ЯО Ростовский педагогический колледж  ' + year + ' <sup>©</sup>');  
	//выводит хедер
	$(".hed").html('<div class="men1"><a href="index.html"><img class="logo" src="logo.png"></a>	</div><div class="men"><a href="index.html">Что это?</a></div><div class="men"><a href="kostruct.html">Занятия</a></div><div class="men"><a href="faq.html">Справочник</a></div>');  
	//выводит хедер во внутренних папках
	$(".inner_hed").html('<div class="men1"><a href="../index.html"><img class="logo" src="logo.png"></a>	</div><div class="men"><a href="../index.html">Что это?</a></div><div class="men"><a href="../kostruct.html">Занятия</a></div><div class="men"><a href="../faq.html">Справочник</a></div>');

	$(function() {
		$(window).scroll(function() { 
		if($(this).scrollTop() != 0) { 
		$('#toTop').fadeIn();
		} else {
		$('#toTop').fadeOut();
		}
		});
		$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
		});
	});
});
