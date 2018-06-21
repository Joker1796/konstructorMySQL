
//========================= ПОДСКАЗКИ ========================//


//========== текст подсказки ==========//
	function text_podskazki(parametr){
		switch(parametr){
			case 'bd': return('<p><b>Синтаксис оператора CREATE DATABASE</b></p><hr><div class="vid_zap">CREATE DATABASE [IF NOT EXISTS] db_name [CHARACTER SET charset] [COLLATE collation];</div><p>	<b>db_name</b>- Имя, которое будет присвоено создаваемой базе данных.</p><p><b>IF NOT EXISTS</b>- Если не указать этот параметр, то при попытке создания базы данных с уже существующим именем, возникнет ошибка выполнения команды.</p><p><b>CHARACTER SET, COLLATE</b>- Используется для задания стандартной кодировки таблицы и порядка сортировки.</p><hr><div class="next"><button class="button"><a href="spravka/f2.html">подробнее</a></button></div>'); break;
			case 'dt': return('<p><b>Синтаксис оператора CREATE TABLE:</b></p><hr><div class="vid_zap">CREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name [(create_definition,...)]<br>[table_options] [select_statement]</div><p><b>tbl_name</b>- Задает имя таблицы, которая будет создана в текущей базе данных. </p><p><b>TEMPORARY</b>- Этот параметр используется для создания временной таблицы с именем tbl_name в течении только текущего сценария.</p><p><b>IF NOT EXISTS</b>- Если указан этот параметр и производится попытка создать таблицу с дублирующим именем, то таблица создана не будет и сообщение об ошибке не появиться.</p><p><b>create_definition</b>- Определяет внутреннюю структуру создаваемой таблицы.</p><hr><div class="next"><button class="button"><a href="spravka/f4.html">подробнее</a></button></div>'); break;
			case 'dp': return('<p><b>Изменить свойства столбцов можно при помощи следующей конструкции:</b></p><div class="vid_zap">ALTER TABLE table_name CHANGE field_name_old field_name_new parametrs</div><p><b>table_name</b>- имя таблицы, в которой находится изменяемый столбец;</p><p><b>field_name_old</b>- имя столбца изменяемого столбца;</p><p><b>field_name_new</b>- новое имя изменяемого столбца;</p><p><b>parametrs</b>- новые параметры столбца.</p><hr><div class="next"><button class="button"><a href="spravka/f6_3.html">подробнее</a></button></div>'); break;
			case 'bdd': return('<p>Для удаления базы данных используется оператор <b>DROP DATABASE</b>.</p><p><b>Синтаксис:</b></p><hr><div class="vid_zap">DROP DATABASE [IF EXISTS] db_name</div><p><b>db_name</b>- Задает имя базы данных, которую необходимо удалить.</p><p><b>IF EXISTS</b>- Если не указать этот параметр, то при попытке удаления не существующей базы данных, возникнет ошибка выполнения команды. Данный параметр доступен в MySQL 3.22 и более поздних версиях.</p><p>При выполнении команды <b>DROP DATABASE</b> удаляется как сама база данных, так и все таблицы, которые в ней находятся.</p><hr><div class="next"><button class="button"><a href="spravka/f3.html">подробнее</a></button></div>'); break;
			case '': return(''); break;
			case '': return(''); break;
			case '': return(''); break;
			case '': return(''); break;
			case '': return(''); break;
			case '': return(''); break;
			case '': return('<hr><div class="next"><button class="button"><a href="spravka/f6_3.html">подробнее</a></button></div>'); break;
		
		
		}
	};


//========== скрывает окно справки ==========//
	$(document).ready(function(){
		$("#close").on('click', function(){
			document.getElementById('pods').className = 'podskazki_minus';
		});
	});


//========================= ОТОБРАЖЕНИЕ ВКЛАДОК ========================//

//========== Вкладка действий с БД ==========//
	$(document).ready(function(){
		$("#vkl_bd").on('click', function(){
			document.getElementById('bd').className = 'bd_plus';
			document.getElementById('dt').className = 'dt_minus';
			document.getElementById('dp').className = 'dt_minus';
			$(this).attr("id", "vkl_bd_plus");
			$("#vkl_dt_plus").attr("id", "#vkl_dt");
			$("#vkl_dp_plus").attr("id", "#vkl_dp");
			
			document.getElementById('pods').className = 'podskazki';		//отобразить окно справки
			$("#podskazki_text").html(text_podskazki("bd"));				//подсказка
		});


//========== Вкладка действий с ТАБЛИЦАМИ ==========//

		$("#vkl_dt").on('click', function(){
			document.getElementById('bd').className = 'bd_minus';
			document.getElementById('dt').className = 'dt_plus';
			document.getElementById('dp').className = 'dt_minus';
			$(this).attr("id", "vkl_dt_plus");
			$("#vkl_bd_plus").attr("id", "#vkl_bd");
			$("#vkl_dp_plus").attr("id", "#vkl_dp");
			
			document.getElementById('pods').className = 'podskazki';		//отобразить окно справки
			$("#podskazki_text").html(text_podskazki("dt"));				//подсказка
		});


//========== Вкладка действий с ПОЛЯМИ ==========//

		$("#vkl_dp").on('click', function(){
			document.getElementById('bd').className = 'bd_minus';
			document.getElementById('dt').className = 'dt_minus';
			document.getElementById('dp').className = 'dt_plus';
			$(this).attr("id", "vkl_dp_plus");
			$("#vkl_bd_plus").attr("id", "#vkl_bd");
			$("#vkl_dt_plus").attr("id", "#vkl_dt");
			
			document.getElementById('pods').className = 'podskazki';		//отобразить окно справки
			$("#podskazki_text").html(text_podskazki("dp"));				//подсказка
		});
	});

//========================= ФУНКЦИИ КОНСТРУКТОРА ========================//	
	
//========== Функция создания БД ==========//
	$(document).ready(function(){
		$("#createBD").on('click', function(){
			var bdname = $("#name_BD").val();
			$("#zap").val("CREATE DATABASE " + bdname + ";");
			
			document.getElementById('pods').className = 'podskazki';		//отобразить окно справки
			$("#podskazki_text").html(text_podskazki("dt"));				//подсказка
		});

	
//========== Функция удаления БД ==========//	

		$("#deleteBD").on('click', function(){
			var bdname = $("#name_BD").val();
			$("#zap").val("DROP DATABASE [IF EXISTS] " + bdname + ";");
			
			document.getElementById('pods').className = 'podskazki';			//отобразить окно справки
			$("#podskazki_text").html(text_podskazki("bdd"));					//подсказка
		});
	});
			
//=============== ДЕЙСТВИЯ С ТАБЛИЦАМИ ================//
	
//========== Функция обработки входных данных ==========// 
	function dano(){				// возвращает выбранное пользователем значение типа поля
		var tip1 = $('#dt input[name="tip_pole"]:checked').val(); 
									// записывает в tip1 значение отмеченного радио-баттона
		if (tip1 == "true1")
		{	
			var tip2 = $("#tip_1").val();
			switch(tip2){
				case 'Целые числа':  return("INT");
				break;
				case 'TINYINT Может хранить числа от -128 до 127':  return("TINYINT");
				break;
				case 'SMALLINT Диапазон от -32 768 до 32 767':  return("SMALLINT");
				break;
				case 'MEDIUMINT Диапазон от -8 388 608 до 8 388 607':  return("MEDIUMINT");
				break;
				case 'INT Диапазон от -2 147 483 648 до 2 147 483 647':  return("INT");
				break;
			}
		}

		if (tip1 == "true2")
		{	
			var tip2 = $("#tip_2").val();
			switch(tip2){
				case 'Дробные числа':  return("FLOAT");
				break;
				case 'UNSIGNED задает беззнаковые числа':  return("UNSIGNED");
				break;
				case 'FLOAT Число с плавающей точкой небольшой точности':  return("FLOAT");
				break;
				case 'DOUBLE Число с плавающей точкой двойной точности':  return("DOUBLE");
				break;
				case 'DECIMAL Дробное число, хранящееся в виде строки':  return("DECIMAL");
				break;
			}
		}

		if (tip1 == "true3")
		{	
			var quant = $("#quantity").val();
			var tip2 = $("#tip_3").val();
			switch(tip2){
				case 'Строки':  return("TEXT(" + quant + ")");
				break;
				case 'VARCHAR Может хранить не более 255 символов':  return("VARCHAR(" + quant + ")");
				break;
				case 'TINYTEXT Может хранить не более 255 символов':  return("TINYTEXT(" + quant + ")");
				break;
				case 'TEXT Может хранить не более 65 535 символов':  return("TEXT(" + quant + ")");
				break;
				case 'MEDIUMTEXT Может хранить не более 16 777 215 символов':  return("MEDIUMTEXT(" + quant + ")");
				break;
			}
		}

		if (tip1 == "true4")
		{	
			var tip2 = $("#tip_4").val();
			switch(tip2){
				case 'Дата и время':  return("DATE");
				break;
				case 'DATE Дата в формате ГГГГ-ММ-ДД':  return("DATE");
				break;
				case 'TIME Время в формате ЧЧ:ММ:СС':  return("TIME");
				break;
				case 'DATETIME Дата и время в формате ГГГГ-ММ-ДД ЧЧ:ММ:СС':  return("DATETIME");
				break;
			}
		}	
	};

//========== Функция возвращает запрос добавления поля ==========//

	function f_addPOLE(){

		var pole_name = $("#name_POL").val();									//хранит название последнего дополнительного поля
		var pole_tip = dano();													//хранит тип последнего дополнительного поля		
		var dop_polya = (pole_name + " " + pole_tip);							//хранит часть запроса для добавления дополнительных полей																				
		return(dop_polya);														//возвращает запрос
	};

//========== Функция возвращает запрос создания таблицы ==========//
	function f_createTABLE(){

		var table_name = $("#name_TABLE").val();								//хранит название таблицы
		var table_zap1 = ("CREATE TABLE " + table_name); 						//хранит кусок запроса																				
		return(table_zap1);														//возвращает кусок запроса
		
	};

//========== Функция возвращает запрос удаления таблицы ==========//
	function f_delTABLE(){
		var table_name2 = $("#name_TABLE").val();								//хранит название таблицы																		
		blokirovka = 0;	
		return("DROP TABLE [IF EXISTS] " + table_name2);						//возвращает кусок запроса
		
	};	
	
//========== ОБРАБОТКА КЛИКОВ НА КНОПКИ ==========//
	
//========== Функция обработки нажатия на кнопку "cоздать таблицу" ==========//
	$(document).ready(function(){
		var blokirovka = 0;														//переменная для блокировки кнопок
		var table_zap = " ";													//объявляет глобальную переменную под запрос
		$("#createTABLE").on('click', function(){		
			blokirovka = 1;	
			table_zap = (f_createTABLE() + " (" + f_addPOLE() + ");"); 			//собирает запрос																			
			$("#zap").val(table_zap);											//выводит запрос
		});


//========== Функция обработки нажатия на кнопку "удалить таблицу" ==========//
	
		$("#delTABLE").on('click', function(){
			$("#zap").val(f_delTABLE() + ";");									//выводит запрос удаления таблицы
			
			
		});

//========== Функция обработки нажатия "добавить поле" ==========//
			
		$("#addPOLE").on('click', function(){
			if(blokirovka >= 1){													//проверка нажатия создать таблицу
				blokirovka = 2;
				table_zap = (table_zap.slice(0, -2));								//удаляет из запроса -  ;)										
				table_zap = (table_zap + ", " + f_addPOLE() + ");");				//собирает новый запрос с новым полем
				$("#zap").val(table_zap);											//выводит запрос
			}	
		});
		
	
//========== Функция обработки нажатия "удалить поля" ==========//

		$("#deletePOLE_TABLE").on('click', function(){
			if(blokirovka >= 2){
				blokirovka = 1;														//блокировка повторного удаления
				table_zap = (table_zap.split(',')[0] + ");");						//удаляет все после запятой
				$("#zap").val(table_zap);											//выводит запрос
			}
			
		});
	});