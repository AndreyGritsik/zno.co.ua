function testInit(testName)
{
	testOficialTitle=testName;
	/*обнуление всех текущих счетчиков*/
	answerCounter=0;
	correctAnswerCounter=0;
	passCounter =0;
	currentTaskCounter=0;
	timeCounter=0;
	testTime=0;
	testLength=0;
	testTitle=''; 
	testDetails='';
	/*Обнуление массива заданий*/
	taskArray=new Array();
	/*Массив правильных ответов*/
	var answerArray=new Array();
	/*Массив типов вопросов теста*/
	var taskTypeArray=new Array();
	/*Массив баллов за правильные ответы*/
	var taskMarkArray=new Array();

	/*Оценки за задания тестов*/
	/*Инициализация тестов в зависимости от названия теста*/

/*************************************************************/
//Тесты по украинскому языку	
/*************************************************************/
/*ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
	if(testName==znoUkr2013Main1)
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2013main1\/';
		testTitle = znoName+"2013"+znoUkrName;
		testDetails=mainName+session1Name;
		answerLanguage="rus";
		var vitry='(1) Прилинули не/зліченні теплі молдавські вітри, насунуло з півдня велике жовте одноманіття. \n(2) Наставали дедалі кращі й леткі наче мильні бульбашки дні, і кожний видавався так до краю шляхетним, що всяка хвиля тривання була чудом надмірним і ще не/звіданим. \n(3) У тиші глибоких і гарних днів змінювалась не/помітно тканина листків. \n(4) Аж певного дня дерева постали в солом’яному вогні цілком здематеріалізованого листя, у красі легкій, як відцвілі пелюстки, як прекрасні пави й фенікси, котрі мусять лишень схитнутись і затріпотіти, щоб струсити те злиняле та не/потрібне пір’я.';
		var filosofInstrument='Філософський інструмент Данила Демуцького \n\t(1–6) На порозі Нового часу європейська цивілізація винайшла систему приладів, починаючи від мікроскопа й телескопа аж до фотографії, які тоді назвали філософськими інструментами. А в епоху формування націй Київ перетворився на столицю художньої світлини в Російській імперії. Згодом услід за фотографією з’явився кінематограф і відбулося формування київської операторської школи, одним з представників якої був Данило Демуцький. \n\t(7–12) У кінооператорське мистецтво Демуцький увійшов дуже своєрідно: не тільки через фотографію, якою захопився ще в молодості, а й у світоглядному плані. Батько Данила Порфирій був представником українського громадівського руху, шляхтич, усе життя присвятив вивченню українського фольклору, створив сільський хор. Але рано чи пізно треба було побачити той народ не лише через народницьке малярство та не тільки на фотографії, а й за допомогою кінематографа. \n\t(13–19) Демуцький працював з Олександром Довженком над першими лабораторними стрічками режисера: «Вася-реформатор», «Ягідка кохання». Згодом, 1929 року, з’явився «Арсенал». У цьому фільмі є геніальні епізоди. Наприклад, мчить поїзд без машиніста із солдатами Першої світової, які від великих свобод втратили орієнтацію у світі. А закінчується це цілковитою катастрофою. Цікаво, що 1985 року в голлівудському «Поїзді-втікачеві» цей епізод і наступну катастрофу повторили сценарист Акіра Куросава та режисер Андрон Кончаловський, який шанував українське поетичне кіно. \n\t(20–31) Улітку 1929 року Демуцький із Довженком знімали «Землю». Хто тут геніальніший, стверджувати важко. Зрозуміло, що в кіно передує режисер, а зусилля оператора залишаються в тіні. Однак у фільмі «Земля» виникла рідкісна гармонія великого режисера й великого оператора. Пригадаймо славнозвісні кадри з героїнею, яка у відчаї без одягу метається по хаті в усій своїй трагічній красі. Цей епізод є зусиллям не тільки Довженка, а й Демуцького. Для свого філософського інструмента – камери – Данило створив тут технологію особливого окуляра: те, що постає на екрані, ніби проходить крізь поетичний сон, як певна внутрішня мова. Нічого подібного до тієї дивовижної експозиції не можна пригадати у світовому мистецтві. Ці роботи вразили кінематографічну громадськість того часу і вражають зараз. Згадаймо манхеттенський фільм Вуді Аллена, де герої, палко сперечаючись, виходять з кінотеатру – і раптом бачимо афішу стрічки, яка їх вразила й викликала суперечку. То була «Земля» Довженка. \n\t(32–39) Саме після «Землі» почалася драма українського режисера, у яку він втягнув і Демуцького. Під дамокловим мечем сталінського терору вони почали знімати фільм «Іван» про індустріалізацію й технологічне приборкання Дніпра. У ньому майстерно відзнятий індустріальний пейзаж фантастично поєднаний з ліричним полотном головної річкової артерії України. Режисер Сергій Ейзенштейн уважав ці зйомки найкращою пейзажною роботою світового кіно. Після закінчення стрічки режисера й оператора вирішили фактично знищити. Довженкові вдалося «втекти» до Москви, а Демуцький не схотів покидати Україну, яка була джерелом його творчості. \n\t(40–48) Це скінчилося катастрофою. У 1932 році оператора арештували за надуманим наклепом. Далі – висилка до Середньої Азії. Жорстокі садистські допити, а потім тюрма, страшний і трагічний досвід радянського в’язня. Розчавлений після відбування покарання, Демуцький повернувся до України, та почалася війна, і його знову відправили до Середньої Азії. У Ташкенті Данило багато зробив для становлення узбецького кіно. Найкраща його робота тих часів – «Пригоди Насреддіна». Блискуче, з гумором і в точно орієнтальному дусі він зняв фільм про походеньки відомого східного персонажа – єхидну притчу про абсолютну нібито давню владу тамтешньої тиранії. Ця стрічка стала однією з найпопулярніших у кінопрокаті тієї епохи. \n\t(49–54) У повоєнні роки Демуцькому довелося фільмувати пропагандистський «Подвиг розвідника» режисера Бориса Барнета, де йшлося про чекістську героїку, і військово-морську стрічку Володимира Брауна «У мирні часи». Справді серйозна робота – азійські епізоди у фільмі «Тарас Шевченко» Ігоря Савченка. Майстерне подання краси тамтешніх ландшафтів і водночас пекла каторжної солдатчини. Це можна вважати і відчуттям Шевченка, і страшним досвідом самого Демуцького-в’язня. \n\t(55–58) Помер Данило Порфирович надто рано – у перші місяці відлиги, 1954 року. Він не побачив подальших злетів українського авангардного кінематографа від Параджанова до братів Іллєнків. Останні боготворили Демуцького, а для Параджанова він був операторським Богом. \n\t(59–62) Є вкрай неоднозначні інтерпретації кінопродукції студії імені Довженка. Нам багато чого може видаватися радянським пафосом, але поганої роботи з камерою в Києві на той час не було. Оператори пам’ятали про Демуцького. Присутність його в українському та світовому кінооператорстві примушувала їх працювати щосили. \n\t За В. Скуратівським, 640 слів';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","104.5","105.5","107.0","108.5","110.5","112.0","114.0","115.5","117.5","119.0","121.0","122.5","124.0","126.0","127.5","129.0","130.5","131.5","133.0","134.5","136.0","137.0","138.5","139.5","141.0","142.0","143.0","144.0","145.0","146.0","147.0","148.0","149.0","150.0","151.0","151.5","152.5","153.5","154.0","155.0","155.5","156.5","157.0","158.0","158.5","159.5","160.0","161.0","161.5","162.5","163.0","163.5","164.5","165.0","166.0","166.5","167.0","168.0","168.5","169.5","170.0","171.0","171.5","172.5","173.5","174.0","175.0","176.0","177.0","177.5","178.5","180.0","181.0","182.5","184.0","185.0","186.0","187.0","188.5","190.0","191.5","192.5","194.0","195.5","196.5","197.5","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="На другий склад падає наголос у слові";
			zadanieArray[1]="черговий";
			zadanieArray[2]="псевдонім";
			zadanieArray[3]="ознака";
			zadanieArray[4]="осока";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №2 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="Букву <i>і</i> треба писати на місці обох пропусків у рядку";
			zadanieArray[1]="невідомий інду..зм, переможний ф..ніш";
			zadanieArray[2]="великий еліпсо..д, беззаперечний тр..умф";
			zadanieArray[3]="надміцний т..тан, радіоактивний цез..й";
			zadanieArray[4]="неповторна грац..я, визнаний пр..оритет";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №3 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="Чергування приголосних НЕ відбуватиметься в прикметнику, утвореному за допомогою суфікса <i>-ськ-</i> від слова";
			zadanieArray[1]="викладач";
			zadanieArray[2]="козак";
			zadanieArray[3]="товариш";
			zadanieArray[4]="депутат";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №4 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=4;
			var zadanieArray=new Array();
			zadanieArray[0]="У фразеологізмах <i>«у вогонь і …», «і кінці в …», «як у … дивитися»</i> замість пропусків має бути слово";
			zadanieArray[1]="полум’я";
			zadanieArray[2]="прірву";
			zadanieArray[3]="воду";
			zadanieArray[4]="безодню";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №5 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="Неправильно утворено форму слова у варіанті";
			zadanieArray[1]="познімали пальта";
			zadanieArray[2]="у чистім полі";
			zadanieArray[3]="найбільш новіший";
			zadanieArray[4]="стежачи за дітьми";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
				
		/*задание №6 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="Неправильно побудовано речення";
			zadanieArray[1]="Завжди будуть питання, на які людство, вочевидь, відповіді не знайде ніколи.";
			zadanieArray[2]="Першим розповів європейцям про Єгипет мандрівник та історик Геродот.";
			zadanieArray[3]="За дорученням Київської археографічної комісії Шевченко робив замальовки пам’яток.";
			zadanieArray[4]="Письменник розповідає про внутрішній світ Івана Дідуха й чому він емігрує.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
				
		/*задание №7 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Стиль тексту –";
			zadanieArray[1]="розмовний";
			zadanieArray[2]="науковий";
			zadanieArray[3]="публіцистичний";
			zadanieArray[4]="художній";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=vitry;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №8 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=8;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Окремо в тексті треба писати сполуку";
			zadanieArray[1]="не/зліченні";
			zadanieArray[2]="не/звіданим";
			zadanieArray[3]="не/помітно";
			zadanieArray[4]="не/потрібне";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=vitry;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №9 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=9;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>Роль підмета виконують слова, виділені в усіх рядках, ОКРІМ";
			zadanieArray[1]="молдавські <i>вітри</i>";
			zadanieArray[2]="<i>кожний</i> видавався";
			zadanieArray[3]="<i>хвиля</i> тривання";
			zadanieArray[4]="не/потрібне <i>пір’я</i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=vitry;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №10 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>Пунктуаційну помилку допущено в реченні";
			zadanieArray[1]="першому";
			zadanieArray[2]="другому";
			zadanieArray[3]="третьому";
			zadanieArray[4]="четвертому";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=vitry;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №11 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="Однакова кількість звуків і букв у кожному слові рядка";
			zadanieArray[1]="прислів’я, мавпячий, Київщина";
			zadanieArray[2]="сьогодні, балтієць, дзижчати";
			zadanieArray[3]="тюбетейка, віджити, щипати";
			zadanieArray[4]="водяний, м’якенький, щиглик";
			zadanieArray[5]="тріщить, сум’яття, дев’ять";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №12 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Помилково вжито слово в рядку";
			zadanieArray[1]="знаний у столиці";
			zadanieArray[2]="бувший у користуванні";
			zadanieArray[3]="охочий відвідати виставку";
			zadanieArray[4]="необхідне для кожного";
			zadanieArray[5]="прикрі помилки";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №13 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="РАЗОМ треба писати всі складні іменники в рядку";
			zadanieArray[1]="екс/чемпіон, зірви/голова, напів/провідник";
			zadanieArray[2]="орг/відділ, учитель/словесник, живо/пис";
			zadanieArray[3]="праце/люб, метео/служба, сімдесяти/річчя";
			zadanieArray[4]="проф/спілка, відео/телефон, 40/метрівка";
			zadanieArray[5]="авто/стоп, багато/тиражка, віце/прем’єр";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №14 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте фрагмент тексту.<br/><i>Уперше ступаючи на стародавню бруківку (1)В/вічного міста навесні 1837 року, Гоголь стає обожнювачем (2)Р/рима, його чудовим знавцем. Працюючи над (3)«М/мертвими душами», він часто полишає перо на своєму вузенькому пюпітрі й відвідує пам’ятки минувшини, розкішні (4)Р/римські палаци, а до улюбленого друга й порадника (5)К/колізею йде з мольбертом і фарбами.</i><br/> З малої букви треба писати слово після цифри";
			zadanieArray[1]="1";
			zadanieArray[2]="2";
			zadanieArray[3]="3";
			zadanieArray[4]="4";
			zadanieArray[5]="5";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №15 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Літеру <i>с</i> на місці пропуску потрібно писати в усіх словах рядка";
			zadanieArray[1]="..терти, ..чепитися, ..кинути";
			zadanieArray[2]="..творити, ..класти, ..хибити";
			zadanieArray[3]="..казати, ..цідити, ..хитрувати";
			zadanieArray[4]="..пекти, ..шити, ..формувати";
			zadanieArray[5]="..клеїти, ..простити, ..цілити";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №16 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Подвоєння приголосних відбувається у формі Ор. в. однини всіх слів рядка";
			zadanieArray[1]="верф, паралель, подорож, мазь";
			zadanieArray[2]="пам’ять, сіль, велич, лазур";
			zadanieArray[3]="вуаль, буденність, суміш, папороть";
			zadanieArray[4]="кров, заметіль, емаль, світлотінь";
			zadanieArray[5]="магістраль, ціль, мігрень, пастель";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №17 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="Правильно поєднано іменник з числівником у рядку";
			zadanieArray[1]="обидва хлопця";
			zadanieArray[2]="чотири поверха";
			zadanieArray[3]="три десятих метри";
			zadanieArray[4]="два випускники";
			zadanieArray[5]="сто два клена";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №18 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="Граматичну помилку допущено в рядку";
			zadanieArray[1]="обрати нелегкий шлях";
			zadanieArray[2]="запобігати руйнування";
			zadanieArray[3]="захворіти на бронхіт";
			zadanieArray[4]="ігнорувати зауваження";
			zadanieArray[5]="відправити листа";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №19 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Граматичну помилку допущено в реченні";
			zadanieArray[1]="Коли ми проходили повз вежу, годинник пробив шосту.";
			zadanieArray[2]="На годиннику була шоста, коли ми проходили повз вежу.";
			zadanieArray[3]="Проходячи повз вежу, ми почули бій годинника.";
			zadanieArray[4]="Годинник пробив шосту, а ми тільки проходили повз вежу.";
			zadanieArray[5]="Проходячи повз вежу, годинник пробив шосту годину.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №20 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="Виділене слово є сполучником і його треба писати разом у реченні";
			zadanieArray[1]="<i>Як/би</i> дівчата не любили гомоніти, а мовчать.";
			zadanieArray[2]="<i>Як/би</i> не було важко, іди до своєї мети.";
			zadanieArray[3]="<i>Як/би</i> знав я чари, що спиняють хмари.";
			zadanieArray[4]="<i>Як/би</i> там не було, ми мали це перевірити.";
			zadanieArray[5]="<i>Як/би</i> хотілося мені щастя знайти у світі.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №21 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="Розділові знаки для передачі чужої мови правильно вжито в реченні";
			zadanieArray[1]="«Добрий вечір вам»: заспівав позаду тоненький дівочий голос.";
			zadanieArray[2]="«Ні, – сказав сам собі Василько – щуки я не піймаю, бо вона прудка».";
			zadanieArray[3]="«Життя мені всміхалося, – говорив Франко, – а діти були промінням».";
			zadanieArray[4]="«Коли я сита, то така я добра», ковтнувши жертву, просичала Кобра.";
			zadanieArray[5]="Мама сказала: як же ж мені сумно, хочу побачити рідненьку сестру.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №22 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Усі розділові знаки правильно вжито в реченні";
			zadanieArray[1]="Багато струмків народжується тут, високо на горах, де росами опадають тумани, й де хмари часто сіють дощі.";
			zadanieArray[2]="Де знаходить природа такі розмаїті барви, що їх не відтворити точно жодною фарбою, жодним пензлем?";
			zadanieArray[3]="Дерева у цвіту такі казково білі й легкі вночі, зараз обважніли, посірішали й ніби танули, розтікалися сірим туманом по низині.";
			zadanieArray[4]="Здоровенний дуб розлігся розширився своїм кострубатим гіллям, так що аж темно під ним.";
			zadanieArray[5]="Високо поросло розкішне дерево вгору, укриваючи холодком зелену землю на котрій, чіпляючись колосками за гілки, буяє розкішна рослина.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №23 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Складнопідрядним з підрядним причини є речення";
			zadanieArray[1]="Коли ідеш ранковим полем, то грають бризки від роси.";
			zadanieArray[2]="Ніч була довга, думалося, що ніколи вже сонце не зійде.";
			zadanieArray[3]="Люблю людей землі своєї, бо й я землі своєї вірний син.";
			zadanieArray[4]="День такий, що жалітися грішно на невдачі, нестачі, біду.";
			zadanieArray[5]="Здалося, що якийсь чарівник, як у казці, позолотив дерева.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №24 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Утворіть граматично правильні словосполучення";
			zadanieArray[1]="згідно";
			zadanieArray[2]="відповідно";
			zadanieArray[3]="керуючись";
			zadanieArray[4]="усупереч";
			zadanieArray[5]="наказам";
			zadanieArray[6]="наказами";
			zadanieArray[7]="наказів";
			zadanieArray[8]="до наказів";
			zadanieArray[9]="з наказами";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="edba";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №25 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="Доберіть приклад до кожної з груп вставних слів за значенням.";
			zadanieArray[1]="вказівка на джерело повідомлення";
			zadanieArray[2]="зв’язок з попередньою думкою";
			zadanieArray[3]="невпевненість, припущення";
			zadanieArray[4]="емоційне ставлення до змісту висловленого";
			zadanieArray[5]="Весна, на диво, була рання.";
			zadanieArray[6]="Навпаки, у рухах спортсмена почувається впевненість.";
			zadanieArray[7]="Тихі води, кажуть, найглибші.";
			zadanieArray[8]="Погодьтесь, вам зробили слушне зауваження.";
			zadanieArray[9]="Здається, сама ця тиша ночі повинна врівноважувати душу.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cbea";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №26 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Доберіть приклад до кожного виду речення.";
			zadanieArray[1]="називне";
			zadanieArray[2]="означено-особове";
			zadanieArray[3]="неозначено-особове";
			zadanieArray[4]="безособове";
			zadanieArray[5]="Яку ще хочем собі славу?";
			zadanieArray[6]="Солодке тяжіння земної орбіти.";
			zadanieArray[7]="В моїй сльозі є сіль землі.";
			zadanieArray[8]="Небо затягло сизими хмарками.";
			zadanieArray[9]="Тут уміють цінувати працю хлібороба.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="baed";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №27 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="З’ясуйте, якою частиною мови є виділені слова в реченні (цифра позначає наступне слово).<br/><br/> Щасливий <i>(1)той</i>, хто знайшов мудрість, хто розум придбав, <i>(2)</i>бо таке <i>(3)придбання</i> ліпше від придбання срібла, і <i>(4)понад</i> золото такий прибуток.";
			zadanieArray[1]="іменник";
			zadanieArray[2]="прикметник";
			zadanieArray[3]="займенник";
			zadanieArray[4]="прийменник";
			zadanieArray[5]="сполучник";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="cead";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №28 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=28;
			var zadanieArray=new Array();
			zadanieArray[0]="Доберіть приклад до кожного випадку вживання тире.";
			zadanieArray[1]="тире при відокремленому означенні";
			zadanieArray[2]="тире в складносурядному реченні";
			zadanieArray[3]="тире при однорідних членах речення";
			zadanieArray[4]="тире між підметом і присудком";
			zadanieArray[5]="Я усміхнусь – і все навкруг сміється.";
			zadanieArray[6]="Печаль пече – гаряча і нестримна.";
			zadanieArray[7]="Для гордої і владної душі життя і воля – на горі високій.";
			zadanieArray[8]="Непереможна безборонність – твій меч єдиний і єдиний щит.";
			zadanieArray[9]="На річці, у лісі, на полі – усюди німа тиша.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="baed";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №29 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Філософськими інструментами названо в тексті всі перераховані далі предмети, ОКРІМ";
			zadanieArray[1]="мікроскопа";
			zadanieArray[2]="фотоапарата";
			zadanieArray[3]="кінокамери";
			zadanieArray[4]="компаса";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=filosofInstrument;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №30 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> У тексті немає мікротеми, названої в рядку";
			zadanieArray[1]="культурницька діяльність Порфирія Демуцького";
			zadanieArray[2]="революційні події в об’єктиві Данила Демуцького";
			zadanieArray[3]="нагороди Данила Демуцького за операторську роботу";
			zadanieArray[4]="шевченківська тема у творчості Данила Демуцького";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=filosofInstrument;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №31 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Антитезі <i>«високе мистецтво / радянський пафос»</i> відповідає в тексті протиставлення фільмів";
			zadanieArray[1]="«Арсенал» – «Вася-реформатор»";
			zadanieArray[2]="«Пригоди Насреддіна» – «Ягідка кохання»";
			zadanieArray[3]="«Земля» – «Подвиг розвідника»";
			zadanieArray[4]="«Тарас Шевченко» – «Іван»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=filosofInstrument;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №32 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Автор звертає увагу на художні особливості фільму «Пригоди Насреддіна» (рядки 40–48), щоб";
			zadanieArray[1]="продемонструвати «наднаціональність» хисту оператора, прагнення Демуцького відійти від власне української тематики";
			zadanieArray[2]="наголосити на універсальності операторського таланту, завдяки чому Демуцькому вдалося проявити себе й у східному стилі";
			zadanieArray[3]="відзначити інтернаціоналізм радянських кінематографістів, що дало можливість Демуцькому долучитися до узбецького кіно";
			zadanieArray[4]="показати, що Демуцький мав фільмувати картини, ідейно-тематичне спрямування яких не відповідало його вподобанням";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=filosofInstrument;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
			
		/*задание №33 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Змістові тексту НЕ відповідає твердження";
			zadanieArray[1]="Данило Демуцький був палким прибічником індустріальних і соціальних перетворень радянського часу";
			zadanieArray[2]="роботам Данила Демуцького властиве поєднання витонченої операторської техніки й поетичного чуття";
			zadanieArray[3]="фільми, відзняті Данилом Демуцьким, були високо оцінені майстрами світового кінематографа";
			zadanieArray[4]="життєвий шлях Данила Демуцького є прикладом трагічної долі митця в часи сталінського лихоліття";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=filosofInstrument;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
			
		/*задание №34 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=34;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Засобом міжфразового зв’язку між передостаннім та останнім реченнями тексту <i>«Оператори пам’ятали про Демуцького. Присутність його в українському та світовому кінооператорстві примушувала їх працювати щосили.»</i> (рядки 61–62) є";
			zadanieArray[1]="сполучник";
			zadanieArray[2]="синонім";
			zadanieArray[3]="прислівник";
			zadanieArray[4]="займенник";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=filosofInstrument;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №35 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=35;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> З тексту можна зробити висновок, що майстри українського кіно (Сергій Параджанов, Юрій і Михайло Іллєнки та інші) багато чого навчилися в Данила Демуцького, тому що";
			zadanieArray[1]="починали знімати свої фільми під його безпосереднім керівництвом";
			zadanieArray[2]="надихалися операторською майстерністю відзнятих ним фільмів";
			zadanieArray[3]="намагалися спочатку копіювати його знахідки у своїх фільмах";
			zadanieArray[4]="використовували його технологію особливого «поетичного» окуляра";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=filosofInstrument;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №36 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=36;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> За типом мовлення текст є";
			zadanieArray[1]="розповіддю з елементами роздуму";
			zadanieArray[2]="описом з елементами розповіді";
			zadanieArray[3]="роздумом з елементами опису";
			zadanieArray[4]="описом з елементами роздуму";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=filosofInstrument;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №37 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=37;
			var zadanieArray=new Array();
			zadanieArray[0]="Славетну перемогу козацького війська біля Жовтих Вод («Жовтого» чи «Золотого» Броду) оспівано у творі";
			zadanieArray[1]="«Засвіт встали козаченьки…»";
			zadanieArray[2]="«Чи не той то Хміль…»";
			zadanieArray[3]="«Ой Морозе, Морозенку…»";
			zadanieArray[4]="«Віють вітри…»";
			zadanieArray[5]="«Бондарівна»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №38 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=38;
			var zadanieArray=new Array();
			zadanieArray[0]="Персонажів цього пам’ятника згадано в";
			zadanieArray[1]="«Повісті минулих літ» (уривок про заснування Києва)";
			zadanieArray[2]="«Повісті минулих літ» (уривок про напад хозарів)";
			zadanieArray[3]="«Повісті минулих літ» (уривок про помсту княгині Ольги)";
			zadanieArray[4]="«Думі про Марусю Богуславку»";
			zadanieArray[5]="«Слові про похід Ігорів»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №39 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=39;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Спіши, милий, спаси мене од лютой напасті! <br/> За нелюбом коли буду, то мушу пропасти»</i>,– звертається до коханого головна героїня твору";
			zadanieArray[1]="Тараса Шевченка";
			zadanieArray[2]="Лесі Українки";
			zadanieArray[3]="Ліни Костенко";
			zadanieArray[4]="Івана Франка";
			zadanieArray[5]="Івана Котляревського";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №40 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=40;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Як треба рятовати Україну, байдуже мені i лiта, й рани. Обновиться, яко орля, юность моя. На коня, на коня! Нiчого гаятись!»</i>– заявляє герой твору";
			zadanieArray[1]="«Україна в огні»";
			zadanieArray[2]="«Чорна рада»";
			zadanieArray[3]="«Максим Гримач»";
			zadanieArray[4]="«Хіба ревуть воли, як ясла повні?»";
			zadanieArray[5]="«Кайдашева сім’я»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №41 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=41;
			var zadanieArray=new Array();
			zadanieArray[0]="Панас Мирний – це псевдонім";
			zadanieArray[1]="П. Рудченка";
			zadanieArray[2]="П. Губенка";
			zadanieArray[3]="М. Фітільова";
			zadanieArray[4]="І. Лозов’ягіна";
			zadanieArray[5]="І. Тобілевича";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №42 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=42;
			var zadanieArray=new Array();
			zadanieArray[0]="Баладний сюжет має твір";
			zadanieArray[1]="«Камінний хрест»";
			zadanieArray[2]="«Мартин Боруля»";
			zadanieArray[3]="«Максим Гримач»";
			zadanieArray[4]="«Intermezzo»";
			zadanieArray[5]="«Енеїда»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №43 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=43;
			var zadanieArray=new Array();
			zadanieArray[0]="Життя родини Мазурів із села Семигори лягло в основу твору";
			zadanieArray[1]="Панаса Мирного";
			zadanieArray[2]="Ольги Кобилянської";
			zadanieArray[3]="Івана Нечуя-Левицького";
			zadanieArray[4]="Григорія Квітки-Основ’яненка";
			zadanieArray[5]="Івана Карпенка-Карого";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №44 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=44;
			var zadanieArray=new Array();
			zadanieArray[0]="У творі «Intermezzo» слова <i>«Ми таки стрілись на ниві і мовчки стояли хвилину – я і людина. То був звичайний мужик»</i> є";
			zadanieArray[1]="експозицією";
			zadanieArray[2]="зав’язкою";
			zadanieArray[3]="розвитком дії";
			zadanieArray[4]="кульмінацією";
			zadanieArray[5]="розв’язкою";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №45 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=45;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Нема на світі України, <br> Немає другого Дніпра, <br> А ви претеся на чужину <br> Шукати доброго добра»</i>, – докоряє землякам";
			zadanieArray[1]="Тарас Шевченко";
			zadanieArray[2]="Пантелеймон Куліш";
			zadanieArray[3]="Іван Котляревський";
			zadanieArray[4]="Марко Вовчок";
			zadanieArray[5]="Іван Нечуй-Левицький";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №46 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=46;
			var zadanieArray=new Array();
			zadanieArray[0]="Уривок із листа <i>«От і знов берусь здіймати «сізіфовий камінь» догори!...Чи підійметься? Навряд – не такий то камінь!»</i> перегукується з óбразами тамотивами вірша";
			zadanieArray[1]="«О слово рідне! Орле скутий!..»";
			zadanieArray[2]="«Мені однаково»";
			zadanieArray[3]="«Стилет чи стилос?»";
			zadanieArray[4]="«Молюсь і вірю...»";
			zadanieArray[5]="«Contra spem spero!»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №47 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=47;
			var zadanieArray=new Array();
			zadanieArray[0]="«Переломаним» земляки прозвали";
			zadanieArray[1]="Омелька Кайдаша";
			zadanieArray[2]="Івана Дідуха";
			zadanieArray[3]="Максима Гримача";
			zadanieArray[4]="Мартина Борулю";
			zadanieArray[5]="Степана Радченка";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №48 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=48;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Клянусь тобі, веселий світе,<br>Клянусь тобі, моє дитя,<br>Що буду жити, поки жити<br>Мені дозволить дух життя»,</i>–заявляє ліричний герой вірша";
			zadanieArray[1]="«Молюсь і вірю…»";
			zadanieArray[2]="«О панно Інно»";
			zadanieArray[3]="«Страшні слова, коли вони мовчать»";
			zadanieArray[4]="«О земле втрачена, явися!..»";
			zadanieArray[5]="«Стилет чи стилос?»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №49 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=49;
			var zadanieArray=new Array();
			zadanieArray[0]="Ризикуючи життям, рятує артільну шаланду";
			zadanieArray[1]="Лаврін Запорожець";
			zadanieArray[2]="Карпо Ярковий";
			zadanieArray[3]="Денис Сірко";
			zadanieArray[4]="Івоніка Федорчук";
			zadanieArray[5]="Мусій Половець";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №50 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=50;
			var zadanieArray=new Array();
			zadanieArray[0]="Щезник, мольфар, Чугайстир є персонажами твору";
			zadanieArray[1]="«Повість минулих літ»";
			zadanieArray[2]="«Камінний хрест»";
			zadanieArray[3]="«Тіні забутих предків»";
			zadanieArray[4]="«Лісова пісня»";
			zadanieArray[5]="«Тигролови»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №51 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=51;
			var zadanieArray=new Array();
			zadanieArray[0]="Словами: <i>«З далекого туману, з тихих озер загірної комуни шелестить шелест: то йде Марія»</i> починається твір";
			zadanieArray[1]="«Зачарована Десна»";
			zadanieArray[2]="«Україна в огні»";
			zadanieArray[3]="«Тіні забутих предків»";
			zadanieArray[4]="«Я (Романтика)»";
			zadanieArray[5]="«Три зозулі з поклоном»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №52 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=52;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Тобі дано і вірити й кохати.<br>А що мені? Які такі куші?!<br>Нелегко, кажуть, жити на дві хати.<br>А ще нелегше – жить на дві душі»</i>,– зізнається герой твору";
			zadanieArray[1]="Лесі Українки";
			zadanieArray[2]="Тараса Шевченка";
			zadanieArray[3]="Ліни Костенко";
			zadanieArray[4]="Василя Симоненка";
			zadanieArray[5]="Максима Рильського";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №53 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=53;
			var zadanieArray=new Array();
			zadanieArray[0]="Остап Вишня започаткував жанр";
			zadanieArray[1]="роману в новелах";
			zadanieArray[2]="роману у віршах";
			zadanieArray[3]="памфлету";
			zadanieArray[4]="усмішки";
			zadanieArray[5]="фейлетону";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №54 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=54;
			var zadanieArray=new Array();
			zadanieArray[0]="Зворушливий образ матері, яка проводжала сина в далеку дорогу <i>«і рушник вишиваний на щастя дала»</i>, створив";
			zadanieArray[1]="Володимир Сосюра";
			zadanieArray[2]="Василь Симоненко";
			zadanieArray[3]="Богдан-Ігор Антонич";
			zadanieArray[4]="Андрій Малишко";
			zadanieArray[5]="Василь Стус";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №55 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=55;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«В пралісах Сіхоте-Аліня»</i> відбуваються події твору";
			zadanieArray[1]="Ліни Костенко";
			zadanieArray[2]="Олеся Гончара";
			zadanieArray[3]="Олександра Довженка";
			zadanieArray[4]="Миколи Куліша";
			zadanieArray[5]="Івана Багряного";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
			
		/*задание №56 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=56;
			var zadanieArray=new Array();
			zadanieArray[0]="На початку 1990-х років виникло літературне угруповання";
			zadanieArray[1]="«Молодняк»";
			zadanieArray[2]="«Нова дегенерація»";
			zadanieArray[3]="«Ланка»";
			zadanieArray[4]="«Молода Муза»";
			zadanieArray[5]="«МАРС»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №57 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=57;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між назвами творів одного автора.";
			zadanieArray[1]="«De libertate»";
			zadanieArray[2]="«Маруся Чурай»";
			zadanieArray[3]="«Сон» («У всякого своя доля»)";
			zadanieArray[4]="«Чари ночі»";
			zadanieArray[5]="«Українське альфреско»";
			zadanieArray[6]="«Маруся»";
			zadanieArray[7]="«Бджола та Шершень»";
			zadanieArray[8]="«Кавказ»";
			zadanieArray[9]="«О слово рідне! Орле скутий!..»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cade";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №58 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=58;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між жанром і персонажем твору.";
			zadanieArray[1]="роман";
			zadanieArray[2]="повість";
			zadanieArray[3]="поема";
			zadanieArray[4]="комедія";
			zadanieArray[5]="Бондарівна";
			zadanieArray[6]="Кирило Тур";
			zadanieArray[7]="Марічка Гутенюк";
			zadanieArray[8]="Уля Розсоха";
			zadanieArray[9]="Дідона";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="bced";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №59 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=59;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між персонажами того самого твору.";
			zadanieArray[1]="Анхіз";
			zadanieArray[2]="Мойсей";
			zadanieArray[3]="Галя Ґудзь";
			zadanieArray[4]="Мартин Пушкар";
			zadanieArray[5]="Азазель";
			zadanieArray[6]="Венера";
			zadanieArray[7]="Чіпка Вареник";
			zadanieArray[8]="Ярема Галайда";
			zadanieArray[9]="Гриць Бобренко";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="bace";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №60 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=60;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між письменником і його висловлюванням.";
			zadanieArray[1]="Олександр Довженко";
			zadanieArray[2]="Іван Багряний";
			zadanieArray[3]="Валер’ян Підмогильний";
			zadanieArray[4]="Остап Вишня";
			zadanieArray[5]="«Охотське море. Тайга. Тундра. Звіроловство. Були там поселення давно осілих наших людей з України. Все це, сказати щиро, було мені навіть цікаво. Але згодом мене охопила страшна туга за Україною. Непереможна. Отож сів я на поїзд і рушив на захід. У Томську мене перехопила залізнична агентура НКВС»";
			zadanieArray[6]="«І думка така: поет повинен бути людиною. Такою, що повна любові, долає природне почуття зненависті, звільнюється від неї, як од скверни. Поет – це людина. Насамперед. А людина – це насамперед добродій. Якби було краще жити, я б віршів не писав…»";
			zadanieArray[7]="«У моєму сміхові завжди бачив народ: хорошого  чоловіка, привітну жінку, дівчину веселооку, дитину, бабу з дідом… І так мені хотілося, щоб усміхнулися вони, щоб веселі вони були, радісні, хороші…»";
			zadanieArray[8]="«Я написав «Україну в огні» з огненним болем у серці і палким стражданням за Україну, що перебувала в німецьких лапах, з болючим жалем і страхом за її долю…»";
			zadanieArray[9]="«І коли мені частина критики закидає «хуторянську ворожість» до міста, то я собі можу закинути тільки невдячність проти села. Але занадто вже довго жили ми під стріхами, щоб лишатися романтиками їх»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="daeb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №61 ЗНО-2013 Украинский язык и литература. Основной тест. I сессия*/
			taskNumber=61;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте наведений текст.<br/> Понад століття тому Іван Франко писав:<br/> <i>«Книги – морська глибина,<br/> Хто в них пірне аж до дна,<br/> Той, хоч і труду мав досить,<br/> Дивнії перли виносить».</i> <br/>Багато хто переконаний, що книги відіграють важливу роль у формуванні особистості, її духовному становленні. Інші ж твердять, що сьогодні можна легко обійтися взагалі без книжок.<br/> Чи збереглося значення книги в нашому інформаційному суспільстві?<br/> Викладіть Ваш погляд на цю проблему.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]="0";
			taskTypeArray[taskNumber-1]="tvir";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=20;
			variantNumberArray[taskNumber-1]=1;	
			
		/*Завершение инициализации теста*/
		for (var i=0; i<testLength; i++)
		{
            curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i], "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}		
/*ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
	if(testName==znoUkr2013Main2)
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2013main2\/';
		testTitle = znoName+"2013"+znoUkrName;
		testDetails=mainName+session2Name;
		answerLanguage="rus";
		var vesna='(1) На календарі вже весна. (2) Хоча снігу не/має, про/те надворі мороз пробирає по спині… (3) Простую собі лісом, опустивши голову до/долу і лише зрідка оглядаючись навкруги. (4) Аж ось поміж деревами щось, схоже, забіліло… (5) Це підсніжники перші провидці весни, що не побоялися холоду. (6) Вони підняли свої голівки, неначе мовчки сповіщаючи: як/би не лютувала зима, весна не за горами. (7) І так мені радісно стало на серці, мов на світ народився, кудись зникли і холод, і мороз.';
		var magicBox='\tЧарівна скринька\n\n\t(1–8) Понад 10 років тому у світі з’явилася така собі «чарівна скринька» – сайт, який змінив уявлення про інформацію та доступ до неї… Назва цього сайта – Вікіпедія. Він докорінно вплинув на життя школярів, студентів, журналістів – загалом тієї частини людства, яка потребує постійного й зручного доступу до найрізноманітнішої інформації. Поступово відходять у минуле багатотомники традиційних енциклопедій, багатогодинні походи в бібліотеки, колекціонування довідників і словників. Адже практично кожнісінький факт можна знайти в одній з мільйонів статей, розміщених у Вікіпедії – універсальній багатомовній безплатній веб-енциклопедії. (9–17) Заснували проект Джиммі Вейлз і Ларрі Сенґер. Разом вони розробили формулу успіху Вікіпедії. Вейлз вирішив зробити її відкритою для редагування кожним охочим, а Сенґер запропонував використати для цього вікі – так називають сайти, які дають змогу користувачам змінювати зміст і програмне забезпечення (гавайською мовою «вікі» означає «хуткий»). Отже, 2001 року англомовну Вікіпедію було офіційно запущено, а вже 2007 року вона подолала позначку два мільйони статей, ставши найбільшим довідником в історії людства. Проект став джерелом натхнення для численних імітацій, проте жодній так і не вдалося наблизитися в популярності до оригіналу.\n\t(18–21) Реальних конкурентів Вікіпедія справді не має. За даними дослідників, нині це сьомий найпопулярніший сайт у світі. Енциклопедія має 280 мовних версій, на чотирьох із яких (англійській, німецькій, французькій і нідерландській) – понад мільйон статей.\n\t(22–30) Проект живе на пожертви та завдяки неоплачуваній праці тисяч волонтерів. Перший збір коштів оголосили, щоб купити ноутбук для волонтера, який згодом став першим директором з технічних питань. З роками потреби енциклопедії зросли – тепер вона має понад 50 оплачуваних працівників і мусить підтримувати роботу сотень серверів. Наприкінці 2010 року Вікіпедія, уже вкотре провівши кампанію зі збору добровільних внесків, змогла отримати 16 мільйонів доларів – більше й за коротший термін, ніж будь-коли раніше. Середній розмір пожертви становив усього 22 долари, хоча енциклопедія отримує й більші гранти, наприклад, два мільйони доларів 2010 року від Ґуґл.\n\t(31–38) Утім симпатикам і творцям Вікіпедії рано спочивати на лаврах. Спостерігачі зазначають, що темпи додавання нових статей значно сповільнилися. Причиною може бути те, що вже наявні на сьогодні статті описують більшість відомих людству фактів. Паралельно, однак, відбувається й процес відпливу редакторів-добровольців, завдяки яким проект виявився успішним. Критики наголошують, що Вікіпедія стає дедалі ексклюзивнішою: статті та правки нових редакторів змінюють або скасовують частіше, ніж тексти елітної групи постійних редакторів. Це відлякує новачків, а отже, не сприяє появі нових статей.\n\t(39–45) Натомість багатьох науковців той факт, що будь-яка людина може анонімно виправити статтю, написану фахівцем, украй обурює. А чимало викладачів узагалі забороняють своїм студентам використовувати Вікіпедію, бо вважають її ненадійним джерелом інформації. Саме «антиелітаризм» проекту призвів 2002 року до розриву між Вейлзом і Сенґером, якого обурював брак поваги до експертів. За словами останнього, він не зміг змиритися з тим, що «в проекті була отруйна соціальна й політична атмосфера».\n\t(46–51) Україномовна Вікіпедія з’явилася 2004 року і на сьогодні нараховує понад 400 тисяч статей. За статистикою, українська Вікі є найпоширенішим і найбільшим енциклопедичним ресурсом українською мовою. Це свідчить передусім про самовіддану працю українських вікіпедистів. Станом на кінець 2012 року 156 тисяч зареєстрованих користувачів української Вікіпедії зробили принаймні одне редагування.\n\t(52–59) Загалом же сучасний стан розвитку «чарівної скриньки» характеризується справжнісінькими війнами: представники різних націй намагаються підняти свою мовну версію якнайвище в рейтингах. На щастя, це той випадок воєнних дій, коли запеклі битви для кожної зі сторін закінчуються перемогою: результатом суперництва стає не руйнування, а поширення знань, завдяки чому «чарівна скринька» ніколи не перетвориться на «скриньку Пандори», адже її відкриття робитиме знання доступнішим, що, є надія, сприятиме розвитку кожної нації зокрема й людства загалом, а отже, злагоді у світі.\n\tЗа Д. Губенком, журнал «Український тиждень»,\n\t569 слів';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","106.5","108.5","110.5","112.5","114.5","116.5","118.0","120.0","122.0","124.0","125.5","127.5","129.0","130.5","132.0","133.5","135.0","136.5","137.5","139.0","140.0","141.0","142.5","143.5","144.5","145.5","146.5","147.5","148.5","149.0","150.0","151.0","152.0","152.5","153.5","154.0","155.0","156.0","156.5","157.0","158.0","158.5","159.5","160.0","161.0","161.5","162.0","163.0","163.5","164.0","165.0","165.5","166.0","167.0","167.5","168.0","169.0","169.5","170.5","171.0","172.0","172.5","173.5","174.0","175.0","175.5","176.5","177.5","178.5","179.5","180.0","181.0","182.5","183.5","184.5","186.0","187.0","188.0","189.0","190.5","191.5","193.0","194.0","195.5","196.5","197.5","198.5","199.0","199.5","200.0","200.0","200.0","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="На третій склад падає наголос у слові";
			zadanieArray[1]="кропива";
			zadanieArray[2]="периметр";
			zadanieArray[3]="підошва";
			zadanieArray[4]="однаковий";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №2 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="Префікс <i>з-</i> треба писати в усіх словах рядка";
			zadanieArray[1]="..ціпити, ..палити, ..чинити";
			zadanieArray[2]="..хопити, ..цідити, ..чистити";
			zadanieArray[3]="..сувати, ..пиляти, ..чесати";
			zadanieArray[4]="..садити, ..чепити, ..варити";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №3 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="Спільнокореневим до <i>слова</i> гора є";
			zadanieArray[1]="горянка";
			zadanieArray[2]="горечко";
			zadanieArray[3]="горючий";
			zadanieArray[4]="гороскоп";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №4 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=4;
			var zadanieArray=new Array();
			zadanieArray[0]="Лексичної помилки НЕМАЄ в рядку";
			zadanieArray[1]="несподіваний сюрприз";
			zadanieArray[2]="пам’ятний сувенір";
			zadanieArray[3]="вільна вакансія";
			zadanieArray[4]="чинний закон";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №5 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="Неправильно утворено форму слова у варіанті";
			zadanieArray[1]="тривалих подорожів";
			zadanieArray[2]="менш досвідчений пілот";
			zadanieArray[3]="на твоїм моніторі";
			zadanieArray[4]="хочуть долучитися";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №6 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="Прийменник помилково вжито в реченні";
			zadanieArray[1]="Гол забили через помилку центрального захисника.";
			zadanieArray[2]="Забудову здійснено згідно з ухвалою міської ради.";
			zadanieArray[3]="Завдяки бурі зруйновано багато автомобільних доріг.";
			zadanieArray[4]="Літня екзаменаційна сесія триває аж до липня.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №7 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>Вставне слово є в реченні";
			zadanieArray[1]="другому";
			zadanieArray[2]="третьому";
			zadanieArray[3]="четвертому";
			zadanieArray[4]="п’ятому";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=vesna;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №8 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=8;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> З-поміж сполучень слів тексту фразеологізмом НЕ є";
			zadanieArray[1]="мороз пробирає по спині";
			zadanieArray[2]="опустивши голову до/долу";
			zadanieArray[3]="не за горами";
			zadanieArray[4]="мов на світ народився";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=vesna;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			
		/*задание №9 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=9;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>Окремо в тексті треба писати сполуку слів";
			zadanieArray[1]="не/має";
			zadanieArray[2]="про/те";
			zadanieArray[3]="до/долу";
			zadanieArray[4]="як/би";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=vesna;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №10 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>Пунктуаційну помилку допущено в реченні";
			zadanieArray[1]="другому";
			zadanieArray[2]="третьому";
			zadanieArray[3]="четвертому";
			zadanieArray[4]="п’ятому";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=vesna;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			
		/*задание №11 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="Однакова кількість звуків і букв у всіх словах рядка";
			zadanieArray[1]="тьохкає, колючий, творіння";
			zadanieArray[2]="віщунка, йоржик, беззоряний";
			zadanieArray[3]="прощає, паляниця, обов’язковість";
			zadanieArray[4]="пробудження, ящик, тріщить";
			zadanieArray[5]="господиня, кузня, їдальня";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №12 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Обидва слова, подані в дужках, можливі за змістом у реченні";
			zadanieArray[1]="Це фахівець найвищого класу – справжній <i>(профі, профан)</i>.";
			zadanieArray[2]="Наша невеличка група здійснила <i>(екскурс, екскурсію)</i> центром Тернополя.";
			zadanieArray[3]="Протягом <i>(століть, сторіч)</i> український Степ належав кочовикам.";
			zadanieArray[4]="Передвиборча <i>(компанія, кампанія)</i> була в самісінькому розпалі.";
			zadanieArray[5]="Цей <i>(абонент, абонемент)</i> дає нам право відвідувати басейн щосереди.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №13 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="М’який знак на місці крапок НЕ треба писати в усіх словах рядка";
			zadanieArray[1]="багрянец.., чіткіс..ть, п’ят..десят";
			zadanieArray[2]="вагаєш..ся, скрин..ці, ослін..чик";
			zadanieArray[3]="хустин..ці, тіт..чин, хар..ків’янин";
			zadanieArray[4]="русал..чин, спитаєш.., нен..чин";
			zadanieArray[5]="радіст..ю, лан..цюг, різ..бяр";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №14 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Спрощення приголосних позначається на письмі в усіх словах рядка";
			zadanieArray[1]="пристрас..ний, щас..ливий, шіс..надцять, об’їз..ний";
			zadanieArray[2]="захис..ник, студен..ський, корис..но, облас..ний";
			zadanieArray[3]="водоочис..ний, свис..нути, перс..ні, корис..ливий";
			zadanieArray[4]="зліс..ний, аген..ство, особистіс..ний, перехрес..ний";
			zadanieArray[5]="капос..ний, контрас..ний, доблес..ний, тиж..невик";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №15 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Правильно написано всі займенники в рядку";
			zadanieArray[1]="дехто, ніякий, скільки-небудь, абищо";
			zadanieArray[2]="ніщо, будь-який, де-котрий, ніскільки";
			zadanieArray[3]="будь-що, якийсь, аби-хто, що-небудь";
			zadanieArray[4]="нічий, хто-небудь, де-який, будь-чий";
			zadanieArray[5]="будь-хто, якийсь, ніякий, хто-зна-що";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №16 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Правильно утворено жіноче ім’я по батькові";
			zadanieArray[1]="Юрійовна";
			zadanieArray[2]="Ігоревна";
			zadanieArray[3]="Андріївна";
			zadanieArray[4]="Валерієвна";
			zadanieArray[5]="Марковна";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №17 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="Правильно узгоджено прикметник з іменником";
			zadanieArray[1]="далека путь";
			zadanieArray[2]="десяткова дріб";
			zadanieArray[3]="наукова ступінь";
			zadanieArray[4]="нестерпна біль";
			zadanieArray[5]="хронічна нежить";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			
		/*задание №18 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="Неправильною є відмінкова форма числівника в рядку";
			zadanieArray[1]="<i>Р. в.</i> трьохсот п’ятдесяти шести";
			zadanieArray[2]="<i>Д. в.</i> трьомстам п’ятдесяти шести";
			zadanieArray[3]="<i>Зн. в.</i> триста п’ятдесят шість";
			zadanieArray[4]="<i>Ор. в.</i> трьомастами п’ятдесятьма шістьма";
			zadanieArray[5]="<i>М. в.</i> (на) трьохсот п’ятдесяти шести";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
			
		/*задание №19 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Граматичну помилку допущено в рядку";
			zadanieArray[1]="милуватися чудовим світанком";
			zadanieArray[2]="запропонувати вам перелік";
			zadanieArray[3]="дивуватися з його поведінки";
			zadanieArray[4]="стосуватися моїх приятелів";
			zadanieArray[5]="наслідувати відомій актрисі";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №20 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="Через дефіс треба писати всі прислівники в рядку";
			zadanieArray[1]="віч/на/віч, по/домашньому, будь/де";
			zadanieArray[2]="по/людськи, як/небудь, як/найбільше";
			zadanieArray[3]="в/тричі, колись/то, хтозна/куди";
			zadanieArray[4]="де/не/де, в/цілому, по/четверте";
			zadanieArray[5]="до/речі, без/кінця/краю, далеко/таки";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №21 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="Перед виділеним сполучником і після нього НЕ треба ставити коми в реченні (розділові знаки пропущено)";
			zadanieArray[1]="Явори й долини залила імла <i>і</i> несміливі й кволі встали зорі.";
			zadanieArray[2]="Тихий сон стуляє вії розігнавши давні мрії <i>і</i> втопивши їх в журбі.";
			zadanieArray[3]="Нависло хмар глухе склепіння <i>і</i> шурхаючи крилами об них летять чайки.";
			zadanieArray[4]="Я кличу сонце <i>і</i> припале сріблястим порохом з долин воно пливе.";
			zadanieArray[5]="Сивим туманом оповило велетні-дерева <i>і</i> навіває сум така картина.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №22 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Відокремленим означенням можна замінити підрядне речення в рядку";
			zadanieArray[1]="Радують око різнобарвні квіти, що ростуть на клумбі.";
			zadanieArray[2]="Знову бачу синицю, що перелітає з гілки на гілку.";
			zadanieArray[3]="Ми зустріли Степанову бабусю, яка купувала фрукти.";
			zadanieArray[4]="Це був тільки сон, що наснився навесні.";
			zadanieArray[5]="Ледь-ледь тремтять губи, що посиніли від холоду.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №23 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Складнопідрядне речення з підрядним мети утвориться, якщо до речення <i>«На початку травня ми поїхали до Криму …»</i> додати";
			zadanieArray[1]="незважаючи на погану погоду.";
			zadanieArray[2]="щоб відвідати ботанічний сад.";
			zadanieArray[3]="тому що були вихідні дні.";
			zadanieArray[4]="через задушливі дні в Києві.";
			zadanieArray[5]="так що відпочинок був цікавий.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №24 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Доберіть синоніми.";
			zadanieArray[1]="абсолютний";
			zadanieArray[2]="автентичний";
			zadanieArray[3]="автономний";
			zadanieArray[4]="аналогічний";
			zadanieArray[5]="цілковитий";
			zadanieArray[6]="самостійний";
			zadanieArray[7]="сучасний";
			zadanieArray[8]="схожий";
			zadanieArray[9]="справжній";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="aebd";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №25 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="Доберіть приклад до кожного випадку вживання тире.";
			zadanieArray[1]="тире в неповному реченні";
			zadanieArray[2]="тире при відокремленій прикладці";
			zadanieArray[3]="тире при однорідних членах речення";
			zadanieArray[4]="тире між підметом і присудком";
			zadanieArray[5]="Найбільше у світі любив він осінь – природи солодку зрілість.";
			zadanieArray[6]="Дівчина внесла оберемок майористих квітів – до цього похмура кімната враз ожила.";
			zadanieArray[7]="Зацвіла тендітно-біла конвалія в гаю, а сонячні кульбабки – біля ставу.";
			zadanieArray[8]="Класична пластика, і контур строгий, і логіки залізна течія – це справжньої поезії дороги.";
			zadanieArray[9]="Зображення флори і фауни: квітів, дерев, тварин – свідчать про обожнення природи нашими предками.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="caed";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
		/*задание №26 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Доберіть приклад до кожного виду речення.";
			zadanieArray[1]="означено-особове";
			zadanieArray[2]="неозначено-особове";
			zadanieArray[3]="узагальнено-особове";
			zadanieArray[4]="безособове";
			zadanieArray[5]="Пахне гіркотою осені.";
			zadanieArray[6]="Раніше в Україні на щодень пекли житній хліб.";
			zadanieArray[7]="Старезний, густий, предковічний ліс на Волині.";
			zadanieArray[8]="Чесне діло роби сміло.";
			zadanieArray[9]="Сади свій сад, плекай свої надії.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="ebda";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
		/*задание №27 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="Доберіть приклад до кожного типу речення.";
			zadanieArray[1]="складнопідрядне";
			zadanieArray[2]="складноcурядне			";
			zadanieArray[3]="складне безсполучникове";
			zadanieArray[4]="складне з різними видами зв’язку";
			zadanieArray[5]="Люби музику – вона облагороджує твої думки і почуття.";
			zadanieArray[6]="Красна пташка своїм пір’ям, а людина – знанням.";
			zadanieArray[7]="Що в пісні співається, те в житті збувається.";
			zadanieArray[8]="Голос у нього гучний і спочатку завжди впевнений.";
	 		zadanieArray[9]="Небо вночі чисте, і видно, як падають зорі.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cbae";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
		/*задание №28 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=28;
			var zadanieArray=new Array();
			zadanieArray[0]="З’ясуйте, якими частинами мови є виділені слова в реченні (цифра позначає наступне слово).<br>Ти явилась мені – і здалося, <i>(1)що</i> світ помолодшав <i>(2)навколо (3)на</i> тисячу <i>(4)літ.</i>";
			zadanieArray[1]="прислівник";
			zadanieArray[2]="іменник";
			zadanieArray[3]="числівник";
			zadanieArray[4]="сполучник";
			zadanieArray[5]="прийменник";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="daeb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №29 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>З тексту можна зробити висновок, що перевагами Вікіпедії порівняно з традиційними енциклопедіями є все перераховане, ОКРІМ";
			zadanieArray[1]="можливості звернення до джерела будь-коли";
			zadanieArray[2]="універсальності інформації, яку можна знайти";
			zadanieArray[3]="зручності роботи з потрібними матеріалами";
			zadanieArray[4]="відсутності суворої експертизи змісту статей";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=magicBox;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №30 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>Наявне в тексті протиставлення «чарівна скринька» / «скринька Пандори» може бути інтерпретоване як протиставлення за значеннями";
			zadanieArray[1]="злагода / розбрат";
			zadanieArray[2]="знання / невігластво";
			zadanieArray[3]="доступність / таємність";
			zadanieArray[4]="відкритість / закритість";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=magicBox;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №31 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>Говорячи про <i>«антиелітаризм»</i> (рядки 39–45) як політику, що лежить в основі стратегії творення Вікіпедії, автор має на увазі";
			zadanieArray[1]="доступність інформації з веб-енциклопедії для будь-яких прошарків населення";
			zadanieArray[2]="рівність усіх у праві створювати й редагувати будь-які статті веб-енциклопедії";
			zadanieArray[3]="низьку якість веб-енциклопедії через відсутність фахового редагування статей";
			zadanieArray[4]="відсутність поваги до експертів і віддання переваги анонімному редагуванню";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=magicBox;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №32 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>У тексті немає мікротеми";
			zadanieArray[1]="проблеми розвитку Вікіпедії";
			zadanieArray[2]="конфлікт «батьків» Вікіпедії";
			zadanieArray[3]="популярність Вікіпедії у світі";
			zadanieArray[4]="заборона доступу до Вікіпедії";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=magicBox;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №33 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Факт про те, що середній розмір пожертви на Вікіпедію становить усього 22 долари (рядки 22–30), автор наводить, щоб";
			zadanieArray[1]="поінформувати читачів про Вікіпедію як доволі прибуткову справу для організаторів";
			zadanieArray[2]="показати, що сайт Вікіпедія не гребує навіть найменшими сумами для свого розвитку";
			zadanieArray[3]="засвідчити, що цей проект підтримує чимало простих людей, розуміючи його користь";
			zadanieArray[4]="підтвердити думку про Вікіпедію не як про бізнес-проект, а як про добровільну справу";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=magicBox;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №34 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=34;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Засобом міжфразового зв’язку між другим і третім реченнями тексту<br><i>Назва цього сайта – Вікіпедія. Він докорінно вплинув на життя школярів, студентів, журналістів – загалом тієї частини людства, яка потребує постійного й зручного доступу до найрізноманітнішої інформації.</i> <br>є";
			zadanieArray[1]="лексичний повтор";
			zadanieArray[2]="вставне слово";
			zadanieArray[3]="прислівник";
			zadanieArray[4]="займенник";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=magicBox;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №35 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=35;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/>Загальною темою тексту є розповідь про";
			zadanieArray[1]="історію випадкової появи Вікіпедії";
			zadanieArray[2]="Вікіпедію від її появи й до сьогодні";
			zadanieArray[3]="стан українського варіанта Вікіпедії";
			zadanieArray[4]="поширення Вікіпедії в усьому світі";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=magicBox;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №36 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=36;
			var zadanieArray=new Array();
			zadanieArray[0]="Прочитайте текст і виконайте завдання. <br/> Для тексту характерним є поєднання ознак стилів";
			zadanieArray[1]="наукового й офіційно-ділового";
			zadanieArray[2]="публіцистичного й наукового";
			zadanieArray[3]="офіційно-ділового й публіцистичного";
			zadanieArray[4]="художнього й наукового";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=magicBox;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №37 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=37;
			var zadanieArray=new Array();
			zadanieArray[0]="Словами <i>«Ой Морозе, Морозенку…»</i> починається";
			zadanieArray[1]="календарно-обрядова пісня";
			zadanieArray[2]="суспільно-побутова пісня";
			zadanieArray[3]="історична пісня";
			zadanieArray[4]="балада";
			zadanieArray[5]="дума";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №38 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=38;
			var zadanieArray=new Array();
			zadanieArray[0]="Видатний український державний діяч, пам’ятник якому ви бачите на фото, є персонажем твору";
			zadanieArray[1]="«De libertate»";
			zadanieArray[2]="«Contra spem spero!»";
			zadanieArray[3]="«Intermezzo»";
			zadanieArray[4]="«Засвіт встали козаченьки»";
			zadanieArray[5]="«Україна в огні»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №39 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=39;
			var zadanieArray=new Array();
			zadanieArray[0]="Сюжет «Енеїди» Іван Котляревський запозичив у";
			zadanieArray[1]="Гомера";
			zadanieArray[2]="Овідія";
			zadanieArray[3]="Горація";
			zadanieArray[4]="Вергілія";
			zadanieArray[5]="Шекспіра";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №40 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=40;
			var zadanieArray=new Array();
			zadanieArray[0]="Автором першого в українській літературі історичного роману є";
			zadanieArray[1]="Пантелеймон Куліш";
			zadanieArray[2]="Панас Мирний";
			zadanieArray[3]="Микола Куліш";
			zadanieArray[4]="Іван Котляревський";
			zadanieArray[5]="Григорій Сковорода";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №41 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=41;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Утни, батьку, щоб нехотя <br> На весь світ почули, <br> Що діялось в Україні, <br> За що погибала, <br> За що слава козацькая <br> На всім світі стала! <br> Утни, батьку, орле сизий!»</i> – звертався Тарас Шевченко до"; 			
			zadanieArray[1]="Григорія Сковороди";
			zadanieArray[2]="Пантелеймона Куліша";
			zadanieArray[3]="Івана Котляревського";
			zadanieArray[4]="Григорія Квітки-Основ’яненка";
			zadanieArray[5]="Івана Вишенського";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №42 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=42;
			var zadanieArray=new Array();
			zadanieArray[0]="Карпо Адамович Тобілевич був прототипом головного героя твору";
			zadanieArray[1]="«Максим Гримач»»";
			zadanieArray[2]="«Кайдашева сім’я»";
			zadanieArray[3]="«Камінний хрест»";
			zadanieArray[4]="«Земля»";
			zadanieArray[5]="«Мартин Боруля»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №43 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=43;
			var zadanieArray=new Array();
			zadanieArray[0]="Марко Вовчок – це псевдонім";
			zadanieArray[1]="Л. Косач";
			zadanieArray[2]="О. Кандиби";
			zadanieArray[3]="М. Вілінської";
			zadanieArray[4]="М. Фітільова";
			zadanieArray[5]="П. Губенка";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №44 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=44;
			var zadanieArray=new Array();
			zadanieArray[0]="У творі «Кайдашева сім’я» слова <i>«Діло з грушею скінчилося несподівано. Груша всохла, і дві сім’ї помирилися. В обох садибах настала мирнота й тиша»</i> є";
			zadanieArray[1]="експозицією";
			zadanieArray[2]="зав’язкою";
			zadanieArray[3]="розвитком дії";
			zadanieArray[4]="кульмінацією";
			zadanieArray[5]="розв’язкою";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №45 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=45;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Як я люблю тебе без тями,<br>Як мучусь довгими ночами<br>І як літа вже за літами<br>Свій біль, свій жаль, свої пісні<br>У серці здавлюю на дні»</i>, –<br>звертається до коханої ліричний герой вірша";
			zadanieArray[1]="Миколи Вороного";
			zadanieArray[2]="Івана Франка";
			zadanieArray[3]="Олександра Олеся";
			zadanieArray[4]="Павла Тичини";
			zadanieArray[5]="Максима Рильського";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №46 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=46;
			var zadanieArray=new Array();
			zadanieArray[0]="Біблійну притчу про Каїна і Авеля нагадують сюжети обох творів у рядку";
			zadanieArray[1]="«Місто», «Лісова пісня»";
			zadanieArray[2]="«Земля»,«Подвійне коло»";
			zadanieArray[3]="«Момент»,«Україна в огні»";
			zadanieArray[4]="«Гайдамаки»,«Я (Романтика)»";
			zadanieArray[5]="«Різдво»,«Маруся»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №47 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=47;
			var zadanieArray=new Array();
			zadanieArray[0]="Українське слово в умовах імперії названо <i>«скутим орлом»</i> у поезії";
			zadanieArray[1]="Івана Франка";
			zadanieArray[2]="Лесі Українки";
			zadanieArray[3]="Олександра Олеся";
			zadanieArray[4]="Миколи Вороного";
			zadanieArray[5]="Тараса Шевченка";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №48 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=48;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Драматичне роздвоєння реальності та ідеалів, внутрішній конфлікт революціонера, який потрапляє у витворену революційними ідеями пастку»</i> розкриває твір";
			zadanieArray[1]="«Шаланда в морі»";
			zadanieArray[2]="«За мить щастя»";
			zadanieArray[3]="«Intermezzo»";
			zadanieArray[4]="«Момент»";
			zadanieArray[5]="«Я (Романтика)»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №49 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=49;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Як могутній центр тяжіння, що круг нього крихітними планетами обертаються села, вічні супутники його руху, і часточки їх, потрапивши в розпечену атмосферу цього сонця, мусять пристосовуватися до нових умов тиску й підсоння»</i> – так сприймав місто";
			zadanieArray[1]="Мусій Половець";
			zadanieArray[2]="Степан Радченко";
			zadanieArray[3]="Мина Мазайло";
			zadanieArray[4]="Григорій Многогрішний";
			zadanieArray[5]="Сашко Діденко";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №50 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=50;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Як син, тобі доземно уклонюсь, і чесно гляну в чесні твої вічі»</i>, – звертається до свого народу";
			zadanieArray[1]="Василь Симоненко";
			zadanieArray[2]="Євген Маланюк";
			zadanieArray[3]="Андрій Малишко";
			zadanieArray[4]="Володимир Сосюра";
			zadanieArray[5]="Василь Стус";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №51 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=51;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Має крилами Весна<br>Запашна,<br>Лине вся в прозорих шатах,<br>У серпанках і блаватах…<br>Сяє усміхом примар<br>З-поза хмар,<br>Попелястих, пелехатих»</i> –<br>так змалював прихід весни";
			zadanieArray[1]="Микола Вороний";
			zadanieArray[2]="Олександр Олесь";
			zadanieArray[3]="Богдан-Ігор Антонич";
			zadanieArray[4]="Василь Симоненко";
			zadanieArray[5]="Євген Маланюк";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №52 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=52;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Серцем передчуваю, що українізація – це спосіб робити з мене провінціала, другосортного службовця і не давати мені ходу на вищу посаду»</i>, – розмірковує персонаж твору";
			zadanieArray[1]="Остапа Вишні";
			zadanieArray[2]="Валер’яна Підмогильного";
			zadanieArray[3]="Олександра Довженка";
			zadanieArray[4]="Миколи Куліша";
			zadanieArray[5]="Олеся Гончара";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №53 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=53;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Неси мене, коню… коли б хоч не пізно…<br>Шляхи перекриті… і варта не спить…<br>Якщо я впаду – неврятована пісня,<br>задушена пісня в петлі захрипить!»</i> –<br>з такими думками поспішає до гетьмана";
			zadanieArray[1]="Лесько Черкес";
			zadanieArray[2]="Мартин Пушкар";
			zadanieArray[3]="Іван Іскра";
			zadanieArray[4]="Гриць Бобренко";
			zadanieArray[5]="Яким Шибилист";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №54 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=54;
			var zadanieArray=new Array();
			zadanieArray[0]="Порівнює поезію із <i>«сонцем оранжевим»</i>, яке <i>«щомиті якийсь хлопчисько відкриває для себе»</i>,";
			zadanieArray[1]="Василь Стус";
			zadanieArray[2]="Ліна Костенко";
			zadanieArray[3]="Дмитро Павличко";
			zadanieArray[4]="Іван Драч";
			zadanieArray[5]="Андрій Малишко";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №55 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=55;
			var zadanieArray=new Array();
			zadanieArray[0]="<i>«Це була наша друга Україна, синку... І назви наші люди подавали тут свої, сумуючи за рідним краєм: Київ, Чернігівка, Полтавка, Україна, Катеринославка, Перяславка тощо»</i>, – розповідає героїня твору";
			zadanieArray[1]="«Тигролови»";
			zadanieArray[2]="«Земля»";
			zadanieArray[3]="«Місто»";
			zadanieArray[4]="«За мить щастя»";
			zadanieArray[5]="«Україна в огні»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №56 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=56;
			var zadanieArray=new Array();
			zadanieArray[0]="Наприкінці ХХ століття діяло літературне угруповання";
			zadanieArray[1]="«Молода Муза»";
			zadanieArray[2]="«Пропала грамота»";
			zadanieArray[3]="«Молодняк»";
			zadanieArray[4]="«МАРС»";
			zadanieArray[5]="«Ланка»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №57 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=57;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між назвами творів одного автора.";
			zadanieArray[1]="«Contra spem spero!»";
			zadanieArray[2]="«Мені однаково»";
			zadanieArray[3]="«Як добре те, що смерті не боюсь я»";
			zadanieArray[4]="«Гімн»";
			zadanieArray[5]="«Чого являєшся мені у сні»";
			zadanieArray[6]="«Ви знаєте, як липа шелестить…»";
			zadanieArray[7]="«О земле втрачена, явися!»";
			zadanieArray[8]="«Лісова пісня»";
			zadanieArray[9]="«Заповіт»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="deca";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
		/*задание №58 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=58;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між жанром і персонажем твору.";
			zadanieArray[1]="роман";
			zadanieArray[2]="повість";
			zadanieArray[3]="поема";
			zadanieArray[4]="балада";
			zadanieArray[5]="Бондарівна";
			zadanieArray[6]="Максим Ґудзь";
			zadanieArray[7]="Іван Дідух";
			zadanieArray[8]="Мелашка Балаш";
			zadanieArray[9]="Датан";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="bdea";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №59 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=59;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між персонажами того самого твору.";
			zadanieArray[1]="Петро Шраменко";
			zadanieArray[2]="Мавка";
			zadanieArray[3]="Антоніо Пальма";
			zadanieArray[4]="Мокій Мазайло";
			zadanieArray[5]="дядько Лев";
			zadanieArray[6]="Уля Розсоха";
			zadanieArray[7]="Леся Черевань";
			zadanieArray[8]="Христя Хуторна";
			zadanieArray[9]="Оверко Половець";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cadb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №60 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=60;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між письменником і висловлюванням про нього.";
			zadanieArray[1]="Микола Куліш";
			zadanieArray[2]="Григір Тютюнник";
			zadanieArray[3]="Василь Стус";
			zadanieArray[4]="Остап Вишня";
			zadanieArray[5]="«Серед його тюремних творів для мене найдорожчі його інтимні поезії, його відчайдушне вміння знаходити для душі місце всюди – в найкарколомніших знущаннях, у найбезпросвітнішому мороці сучасності»";
			zadanieArray[6]="«Залюбки маскувався під «простачка», який здебільш з усім погоджується, але від нього повівало казковим «дурником», перед яким пасують мудреці і королі. Такого «простака» грає він і в автобіографії»";
			zadanieArray[7]="«Український театр дістав свою найкращу комедію, може, свою єдину комедію, якщо властивістю комедії вважати легкість, грайливість, ритмічність, грацію на підложжі глибокого, але тільки натякненого змісту»";
			zadanieArray[8]="«Поет жив у час, що заправив генія на роль блазня. І поет згодився на цю роль… Він обрізав усякі живі контакти, замінивши їх цілком офіційною інформацією. У цих умовах поет міг тільки конати, а не рости»";
			zadanieArray[9]="«Його новели і повісті суворі, витримані у вищих вимогах правди життєвої і художньої, автор не заграє зі світом, з героями й з істиною, письмо його точне, вивірене, ощадливе, часто новели нагадують мовби гравюри на сталі»";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="ceab";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №61 ЗНО-2013 Украинский язык и литература. Основной тест. II сессия*/
			taskNumber=61;
			var zadanieArray=new Array();
			zadanieArray[0]="Прислів’я мовить: <i>«Моя хата скраю – нічого не знаю».</i><br> Дехто вважає, що можна жити, не переймаючись чужими клопотами, суспільними проблемами, а віддавши себе служінню сім’ї, дбаючи про благополуччя своїх близьких і рідних. Багато ж хто переконаний, що повноцінним є життя з турботою про інших.<br> Як має ставитися до цього людина, прагнучи до щасливого життя?<br> Викладіть Ваш погляд на цю проблему."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]="0";
			taskTypeArray[taskNumber-1]="tvir";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=20;
			variantNumberArray[taskNumber-1]=1;	
		/*Завершение инициализации теста*/	
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i], "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}		

/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/
	startInitialization();
}
