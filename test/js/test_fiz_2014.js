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
	/*Обнуление массива заданий*/
	taskArray=new Array();
	/*Массив правильных ответов*/
	var answerArray=new Array();
	/*Массив типов вопросов теста*/
	var taskTypeArray=new Array();
	/*Массив баллов за правильные ответы*/
	var taskMarkArray=new Array();
	/*Массив названий тестов*/
	var taskNameArray=new Array();
	
	
	/*Оценки за задания тестов*/
	/*Инициализация тестов в зависимости от названия теста*/

/*************************************************************/
//Тесты по физике
/*************************************************************/	
/*ЗНО-2014 Физика. Основной тест.*/
	if(testName==znoFiz2014Main)
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2014main\/';
		testTitle = znoName+"2014"+znoFizName;
		testDetails=mainName;
		answerLanguage="rus";
		olderNumericDigits=4;
		gradeArray=new Array("100.0","100.5","100.5","102.5","107.0","112.5","118.5","124.5","130.5","136.0","141.0","146.0","149.5","153.0","156.0","158.5","160.5","162.5","164.0","165.5","167.0","168.5","169.5","171.0","172.0","173.0","174.0","175.0","176.0","177.0","178.0","179.0","179.5","180.5","181.5","182.5","184.0","185.0","186.0","187.0","188.0","189.0","190.0","191.5","192.5","193.5","194.5","195.5","197.0","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено графік залежності проекції швидкості <i>υ<sub>x</sub></i> автомобіля, що рухається прямолінійно, від часу <i>t</i>. У якому інтервалі часу модуль прискорення є мінімальним?";
			zadanieArray[1]="від 0 до 10 с";
			zadanieArray[2]="від 30 до 40 с";
			zadanieArray[3]="від 20 до 30 с";
			zadanieArray[4]="від 10 до 20 с";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №2 ЗНО-2014 Физика. Основной тест.(Доделать!!!)*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="На фотографії зображено важіль (1), який може вільно обертатися навколо осі (2) без тертя. Спочатку важіль було зрівноважено без важків та вантажу (3), а потім – із ними. Визначте масу вантажу (3).";
			zadanieArray[1]="0,8 кг";
			zadanieArray[2]="0,5 кг";
			zadanieArray[3]="0,2 кг";
			zadanieArray[4]="0,05 кг";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №3 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="Два тіла – перше масою 50&nbsp;г і друге масою 100&nbsp;г – зв’язані ниткою та лежать на гладкій горизонтальній поверхні. Із якою найбільшою горизонтальною силою можна тягнути перше тіло, щоб нитка не розірвалася? Нитка витримує натяг 6&nbsp;Н.";
			zadanieArray[1]="4 H";
			zadanieArray[2]="6 H";
			zadanieArray[3]="9 H";
			zadanieArray[4]="12 H";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №4 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=4;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="Дві однакові пластилінові кульки підвішено на нерозтяжних, невагомих нитках однакової довжини <i>L</i>, які закріплено в одній точці. Одну з кульок відхилили на кут 90&deg; від вертикалі (див. рисунок) і відпустили. На яку висоту піднімуться кульки після непружної взаємодії? Розміром кульок знехтуйте.";
			zadanieArray[1]="<i>0.5L</i>";
			zadanieArray[2]="<i>0.25L</i>";
			zadanieArray[3]="<i>0.75L</i>";
			zadanieArray[4]="<i>L</i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №5 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="Ліве коліно <i>U</i>-подібної трубки відкрито, а праве запаяно. Трубка частково заповнена водою (див. рисунок). Укажіть правильне співвідношення між значеннями тиску в точках <i>A</i>, <i>B</i>, <i>C</i>, <i>D</i>. Зміною тиску повітря залежно від висоти знехтуйте.";
			zadanieArray[1]="<i>p<sub>A</sub> &lt; p<sub>C</sub> &lt; p<sub>B</sub> &lt; p<sub>D</sub></i>";
			zadanieArray[2]="<i>p<sub>A</sub> &lt; p<sub>B</sub> &lt; p<sub>C</sub> &lt; p<sub>D</sub></i>";
			zadanieArray[3]="<i>p<sub>B</sub> &lt; p<sub>A</sub> &lt; p<sub>C</sub> &lt; p<sub>D</sub></i>";
			zadanieArray[4]="<i>p<sub>D</sub> &lt; p<sub>C</sub> &lt; p<sub>B</sub> &lt; p<sub>A</sub></i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №6 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="Який процес дає змогу перевести ідеальний газ певної маси зі стану 1 у стан 2 (див. рисунок) у системі координат <i>pT</i>, де <i>p</i> – тиск, <i>T</i> – температура?";
			zadanieArray[1]="ізотермічний";
			zadanieArray[2]="ізохорний";
			zadanieArray[3]="ізобарний";
			zadanieArray[4]="адіабатний";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №7 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="Ідеальний газ, отримавши від нагрівника деяку кількість теплоти <i>Q</i>, ізобарно розширюється й виконує роботу <i>A</i>. Чому дорівнює зміна внутрішньої енергії газу?";
			zadanieArray[1]="<i>Q</i>";
			zadanieArray[2]="<i>QA</i>";
			zadanieArray[3]="<i>Q-A</i>";
			zadanieArray[4]="<i>A</i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №8 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=8;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="Визначте роботу, яку виконує ідеальний газ під час процесів 1–2–3, що відображені на графіку (див. рисунок).";
			zadanieArray[1]="180&nbsp;кДж";
			zadanieArray[2]="150&nbsp;кДж";
			zadanieArray[3]="100&nbsp;кДж";
			zadanieArray[4]="50&nbsp;кДж";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №9 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=9;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="Крапля води набула заряду 4·10<sup>–12</sup>&nbsp;Кл. Яка сила діє на краплю з боку електричного поля Землі напруженістю 90&nbsp;В/м?";
			zadanieArray[1]="0,036&nbsp;нН";
			zadanieArray[2]="0,225&nbsp;нН";
			zadanieArray[3]="0,36&nbsp;нН";
			zadanieArray[4]="2,25&nbsp;нН";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №10 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="Два плоскі повітряні конденсатори однакової електричної ємності з’єднані послідовно, як зображено на рисунку. Як зміниться ємність системи конденсаторів, якщо їх занурити в гліцерин? Уважайте, що діелектрична проникність гліцерину дорівнює 42.";
			zadanieArray[1]="збільшиться в 42 рази";
			zadanieArray[2]="зменшиться в 42 рази";
			zadanieArray[3]="збільшиться у 84 рази";
			zadanieArray[4]="зменшиться у 84 рази";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №11 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="На якому графіку правильно відображено залежність опору металевих провідників від температури?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №12 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Визначте, як зміниться кількість теплоти, що виділяється за одиницю часу в провіднику з постійним електричним опором, якщо силу струму в колі збільшити в 4 рази.";
			zadanieArray[1]="зменшиться в 4 рази";
			zadanieArray[2]="збільшиться у 2 рази";
			zadanieArray[3]="збільшиться у 8 разів";
			zadanieArray[4]="збільшиться в 16 разів";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №13 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №13 ЗНО-2014 Физика. Основной тест.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №14 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Тіло здійснює гармонічні коливання з періодом <i>Т</i>&nbsp;=&nbsp;2&nbsp;с. Протягом половини періоду коливань через рівні проміжки часу виміряли (у&nbsp;см) зміщення <i>х</i> тіла й одержали такі значення: 1;&nbsp;0,7;&nbsp;0;&nbsp;–0,7;&nbsp;–1. У якому рядку записано послідовність моментів часу (у секундах), що відповідає вказаній послідовності значень зміщення тіла? Уважайте, що &radic;<span style='text-decoration:overline;'>2</span>&nbsp;=&nbsp;1,4.";
			zadanieArray[1]="0; 0,5; 1; 1,5; 2";
			zadanieArray[2]="0; 0,25; 0,5; 0,75; 1";
			zadanieArray[3]="90; 135; 180; 225; 270";
			zadanieArray[4]="0; 45; 90; 135; 180";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №15 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка фізична величина визначає висоту звуку?";
			zadanieArray[1]="амплітуда коливань";
			zadanieArray[2]="фаза коливань";
			zadanieArray[3]="частота коливань";
			zadanieArray[4]="швидкість звукової хвилі";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №16 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Під час вільних незгасаючих електромагнітних коливань у коливальному контурі максимальна сила струму дорівнює 5&nbsp;мА, а максимальна напруга на конденсаторі – 10&nbsp;В. Визначте модуль напруги на конденсаторі в момент, коли сила струму в котушці дорівнює 3&nbsp;мА.";
			zadanieArray[1]="2 В";
			zadanieArray[2]="4 В";
			zadanieArray[3]="6 В";
			zadanieArray[4]="8 В";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №17 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="На дзеркало в точку <i>О</i> падає промінь під кутом 60&deg;, як показано на рисунку. На який кут потрібно повернути дзеркало проти годинникової стрілки, щоб відбитий промінь попав у точку <i>A</i>? Вісь обертання проходить через точку <i>О</i> перпендикулярно до площини рисунка.";
			zadanieArray[1]="15&deg";
			zadanieArray[2]="30&deg";
			zadanieArray[3]="90&deg";
			zadanieArray[4]="120&deg";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
			taskNameArray[taskNumber-1]="";
		/*задание №18 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть вид електромагнітного випромінювання, яке має найбільшу частоту.";
			zadanieArray[1]="видиме світло";
			zadanieArray[2]="радіохвилі";
			zadanieArray[3]="інфрачервоне випромінювання";
			zadanieArray[4]="рентгенівське випромінювання";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №19 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №19 ЗНО-2014 Физика. Основной тест."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
			taskNameArray[taskNumber-1]="";
		/*задание №20 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="У різних нуклідів хімічного елемента однаковою є";
			zadanieArray[1]="кількість нейтронів у ядрі.";
			zadanieArray[2]="кількість нуклонів у ядрі.";
			zadanieArray[3]="кількість протонів у ядрі.";
			zadanieArray[4]="маса ядра.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
			taskNameArray[taskNumber-1]="";
		/*задание №21 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="Тіло, рухаючись рівномірно по колу радіуса <i>R</i>, за час <i>t</i> перемістилося з точки <i>C</i> в точку <i>D</i> (див. рисунок). Установіть відповідність між характеристикою (1–4) руху тіла та математичним виразом для її обчислення (А–Д).";
			zadanieArray[1]="модуль переміщення";
			zadanieArray[2]="шлях";
			zadanieArray[3]="швидкість";
			zadanieArray[4]="кутова швидкість";
			zadanieArray[5]="&pi;/t";
			zadanieArray[6]="&pi;R/t";
			zadanieArray[7]="&pi;R";
			zadanieArray[8]="2R";
			zadanieArray[9]="&pi;R<sup>2</sup>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection_picture";
			answerArray[taskNumber-1]="dcba";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
			taskNameArray[taskNumber-1]="";
		/*задание №22 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між назвою процесу (1–4), що відбувається з ідеальним газом незмінної маси, та записом першого закону термодинаміки для цього процесу (А–Д), де <i>Q</i> – кількість теплоти, надана газу, <i>А</i> – робота над газом, <i>&Delta;U</i> – зміна внутрішньої енергії.";
			zadanieArray[1]="ізотермічний";
			zadanieArray[2]="ізобарний";
			zadanieArray[3]="ізохорний";
			zadanieArray[4]="адіабатний";
			zadanieArray[5]="Q&nbsp;=&nbsp;A&nbsp;+&nbsp;&Delta;U";
			zadanieArray[6]="Q&nbsp;=&nbsp;A";
			zadanieArray[7]="A&nbsp;=&nbsp;&Delta;U";
			zadanieArray[8]="&Delta;U&nbsp;+&nbsp;A&nbsp;=&nbsp;0";
			zadanieArray[9]="&Delta;U&nbsp;=&nbsp;Q";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="baed";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
			taskNameArray[taskNumber-1]="";
		/*задание №23 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між фізичною величиною (1–4), що характеризує електричне поле, і її математичним виразом (А–Д), де <i>F</i>&nbsp;–&nbsp;сила, <i>E</i>&nbsp;–&nbsp;напруженість електричного поля, <i>&epsilon;</i>&nbsp;–&nbsp;діелектрична проникність, <i>&epsilon;</i><sub>0</sub>&nbsp;–&nbsp;електрична стала,<i>C</i>&nbsp;–&nbsp;електрична ємність, <i>U</i>&nbsp;–&nbsp;напруга, <i>W</i><sub>п</sub>&nbsp;–&nbsp;потенціальна енергія, <i>q</i>&nbsp;–&nbsp;електричний заряд."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="daeb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;		
			taskNameArray[taskNumber-1]="";
		/*задание №24 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між рівнянням реакції розпаду (1–4) і назвою (А–Д) частинки <i>Х</i>, яка вилітає з ядра.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="bacd";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
			taskNameArray[taskNumber-1]="";
		/*задание №25 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="Тіло рухається вздовж осі <i>Ох</i> так, що його координата змінюється з часом за законом <p style='text-align:center;'><i>х</i>&nbsp;=&nbsp;–8&nbsp;+&nbsp;8<i>t</i>&nbsp;–&nbsp;2<i>t</i><sup>2</sup></p> (усі одиниці подано в системі SІ).<p>У який момент часу від початку відліку тіло опиниться в початку координат (<i>х</i>&nbsp;=&nbsp;0)?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=2;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			taskNameArray[taskNumber-1]="25.1";
		/*задание №26 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Тіло рухається вздовж осі <i>Ох</i> так, що його координата змінюється з часом за законом <p style='text-align:center;'><i>х</i>&nbsp;=&nbsp;–8&nbsp;+&nbsp;8<i>t</i>&nbsp;–&nbsp;2<i>t</i><sup>2</sup></p> (усі одиниці подано в системі SІ).<p>Яку швидкість матиме тіло під час проходження точки з координатою <i>х</i>&nbsp;=&nbsp;0?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 0;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			taskNameArray[taskNumber-1]="25.2";
		/*задание №27 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="Підйомник гірськолижного курорту піднімає 45 лижників на висоту 2&nbsp;км за 20&nbsp;хв. Уважайте, що середня маса одного лижника дорівнює 70&nbsp; кг, а прискорення вільного падіння <i>g</i>&nbsp;=&nbsp;10&nbsp;м/с<sup>2</sup>.<p>Обчисліть корисну роботу (MДж), яку виконує підйомник.</p>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 63;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			taskNameArray[taskNumber-1]="26.1";
		/*задание №28 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=28;
			var zadanieArray=new Array(); 
			zadanieArray[0]="Підйомник гірськолижного курорту піднімає 45 лижників на висоту 2&nbsp;км за 20&nbsp;хв. Уважайте, що середня маса одного лижника дорівнює 70&nbsp; кг, а прискорення вільного падіння <i>g</i>&nbsp;=&nbsp;10&nbsp;м/с<sup>2</sup>.<p>Обчисліть потужність (кВт) двигуна підйомника.</p>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 52.5;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
			taskNameArray[taskNumber-1]="26.2";
		/*задание №29 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="Визначте масу (у грамах) водяної пари в повітрі кімнати, якщо відносна вологість повітря становить 60&nbsp;%. Густина насиченої пари дорівнює 20&nbsp;г/м<sup>3</sup>, об’єм кімнати – 50&nbsp;м<sup>3</sup>."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 600;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
			taskNameArray[taskNumber-1]="27";
		/*задание №30 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="З ідеальним одноатомним газом незмінної маси відбуваються процеси 1–2–3, що відображені на графіку (див. рисунок). Яку кількість теплоти отримав газ у процесах 1–2–3, якщо <i>р</i><sub>0</sub>&nbsp;=&nbsp;1&nbsp;∙&nbsp;10<sup>5</sup>&nbsp;Па, <i>V</i><sub>0</sub>&nbsp;=&nbsp;2&nbsp;л?<br>Відповідь запишіть у кілоджоулях."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= 1.6;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
			taskNameArray[taskNumber-1]="28";
		/*задание №31 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="Щоб розширити межі вимірювання сили струму за допомогою амперметра, до нього паралельно під’єднують шунт – провідник з певним опором, через який проходить частина вимірюваного струму. Міліамперметр розраховано на вимірювання максимального струму <i>І</i><sub>мА</sub>&nbsp;=&nbsp;50&nbsp;мА; його внутрішній опір <i>R</i><sub>мА</sub>&nbsp;=&nbsp;10&nbsp;Ом. Обчисліть опір (у міліомах) шунта, який дає змогу вимірювати струм <i>І</i> до 5&nbsp;А.<br>Відповідь округліть до цілих.";  
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= 101;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
			taskNameArray[taskNumber-1]="29";
		/*задание №32 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="У просторі, де одночасно існують взаємно перпендикулярні електричне та магнітне поля, рухається електрон. Обчисліть швидкість прямолінійного рівномірного руху електрона, якщо напруженість електричного поля становить 500&nbsp;кВ/м, а індукція магнітного поля дорівнює 500&nbsp;мТл. Відповідь запишіть у км/с."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 1000;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;			
			taskNameArray[taskNumber-1]="30";
		/*задание №33 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="За допомогою електролізу отримали молекулярний водень об’ємом <span style='white-space: nowrap;'>11,2 л (н. у.)</span>. Визначте величину заряду (у&nbsp;кілокулонах), який повинен пройти крізь електроліт. Уважайте, що елементарний електричний заряд становить <span style='white-space: nowrap;'>1,6 · 10<sup>–19</sup> Кл</span>, а стала Авогадро дорівнює <span style='white-space: nowrap;'>6 · 10<sup>23</sup>моль<sup>–1</sup></span>.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 96;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;			
			taskNameArray[taskNumber-1]="31";
		/*задание №34 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=34;
			var zadanieArray=new Array();
			zadanieArray[0]="Котушка індуктивністю 50&nbsp;мкГн послідовно приєднана до конденсатора. Визначте ємність конденсатора, якщо контур резонує на довжину хвилі 600&nbsp;м. Уважайте, що <span style='white-space: nowrap;'>&pi;<sup>2</sup> = 10</span>. Відповідь запишіть у нанофарадах.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 2;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
			taskNameArray[taskNumber-1]="32";	
		/*задание №35 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=35;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено графік коливань математичного маятника. Визначте довжину математичного маятника. Уважайте, що <span style='white-space: nowrap;'>&pi;<sup>2</sup> =  g</span>. Відповідь запишіть у метрах.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= 6.25;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
			taskNameArray[taskNumber-1]="33";
		/*задание №36 ЗНО-2014 Физика. Основной тест.*/
			taskNumber=36;
			var zadanieArray=new Array();
			zadanieArray[0]="Визначте швидкість (км/с) руху електрона, за якої його імпульс дорівнює імпульсу фотона з довжиною хвилі 0,66&nbsp;мкм. Уважайте, що стала Планка дорівнює <span style='white-space: nowrap;'>6,6·10<sup>–34</sup>Дж · с</span>, маса електрона – <span style='white-space: nowrap;'>9 · 10<sup>–31</sup> кг</span>. Відповідь округліть до десятих.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 1.1;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
			taskNameArray[taskNumber-1]="34";		
		/*Завершение инициализации теста*/	
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i],taskNameArray[i]);
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}/*конец ЗНО-2014 Физика. Основной тест.*/
	
/*Завершение инициализации тестов*/

/*Заполнение поля дано ответов*/

	startInitialization();
}
