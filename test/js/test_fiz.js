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
	
	
	/*Оценки за задания тестов*/
	/*Инициализация тестов в зависимости от названия теста*/

/*************************************************************/
//Тесты по физике
/*************************************************************/	
/*основной тест ЗНО-2009 по физике 1 сессия */
/*	if(testName=="ЗНО-2009 физика. Основной тест.")
	{
		testLength=35;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2009main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","103.5","108.5","114.0","120.5","127.0","133.5","139.0","144.0","148.5","152.5","156.0","159.0","162.0","164.5","166.5","168.5","170.5","172.0","173.5","175.5","177.0","178.5","179.5","181.0","182.5","184.0","185.0","186.5","187.5","188.5","190.0","190.5","191.5","192.0","193.5","194.0","195.0","196.0","197.0","197.5","198.0","199.0","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","d","b","c","b","a","d","d","d","c","a","d","b","d","b","b","b","d","c","c","d","c","d","d","bace","dbae","dbca",60,200,15,0.1,1.5,564,600);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}*/
/*основной тест ЗНО-2010 по физике 1 сессия */
/*	if(testName=="ЗНО-2010 физика. Основной тест.")
	{
		testLength=37;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","101.5","104.5","109.0","114.5","119.5","124.5","128.5","133.0","136.5","139.5","143.0","146.0","149.0","151.5","154.0","156.5","158.5","160.5","162.0","164.0","165.5","166.5","168.0","169.0","170.5","171.5","172.5","173.5","174.5","175.5","176.5","177.5","178.5","180.0","181.0","182.0","183.0","184.0","185.5","186.5","187.5","188.5","190.0","191.0","192.5","194.0","195.5","197.0","198.0","199.0","199.5","200,0");
		answerArray=new Array("c","a","c","d","a","d","c","c","a","c","d","c","d","b","b","a","a","d","d","a","a","a","d","b","c","cade","caeb",6,4,0.04,25,2.56,5,1.5,8,1.2,2);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}*/
	/*основной тест ЗНО-2011 по физике 1 сессия */
/*	if(testName=="ЗНО-2011 физика. Основной тест.")
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2011main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","102.0","105.0","109.0","114.0","119.5","125.0","130.0","135.0","140.0","144.5","149.0","153.0","157.0","160.0","163.0","165.5","168.0","170.0","171.5","173.0","174.5","176.0","177.0","178.0","179.5","180.5","181.5","182.5","183.5","185.0","186.0","187.0","188.0","189.0","190.0","191.0","192.0","193.0","194.0","195.0","196.0","196.5","197.5","198.0","198.5","198.5","199.0","199.5","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","d","b","d","a","d","d","c","b","b","d","a","c","d","a","b","c","c","c","c","b","d","b","c","aebc","ecda","dbae","cbad",0.25,0.4,1,0.4,4,0.32,7);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}*/
/*пробный тест ЗНО-2012 по физике  */
/*	if(testName=="ЗНО-2012 физика. Пробный тест.")
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2012demo\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=4;
		gradeArray=new Array("100.0","100.5","100.5","101.0","103.0","106.5","111.5","117.0","122.5","127.5","132.5","137.5","141.5","145.0","148.5","151.5","154.0","156.5","159.0","161.0","163.0","164.5","166.5","168.0","169.5","170.5","172.0","173.5","174.5","176.0","177.5","178.5","180.0","181.0","182.5","183.5","184.5","186.0","187.5","188.5","189.5","191.0","192.0","193.0","194.5","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("a","c","b","c","b","b","c","b","a","d","a","c","d","c","d","c","c","d","b","a","d","b","d","d","b","d","dcba","ebda","dcae","abdc",5,16,4.5,45,2040,21);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}*/
/*основной тест ЗНО-2012 по физике  */
/*	if(testName=="ЗНО-2012 физика. Основной тест.")
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2012main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=4;
		gradeArray=new Array("100.0","100.5","100.5","101.0","103.0","106.5","111.5","117.0","122.5","127.5","132.5","137.5","141.5","145.0","148.5","151.5","154.0","156.5","159.0","161.0","163.0","164.5","166.5","168.0","169.5","170.5","172.0","173.5","174.5","176.0","177.5","178.5","180.0","181.0","182.5","183.5","184.5","186.0","187.5","188.5","189.5","191.0","192.0","193.0","194.5","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("b","b","d","b","d","c","c","a","b","c","c","c","c","a","c","d","a","a","a","c","b","c","c","d","b","c","dbac","edcb","ebac","ecdb",10,45,84,0.75,70,2.2);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}	
		*/
/*ЗНО-2013 Физика. Основной тест.*/
	if(testName==znoFiz2013Main)
	{
		testLength=34;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2013main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		gradeArray=new Array("100.0","100.5","100.5","101.0","102.5","106.0","110.5","115.5","121.0","126.5","131.5","136.0","140.0","144.0","148.0","151.0","154.0","156.5","159.0","161.0","163.0","165.0","166.5","168.0","169.5","171.0","172.5","173.5","175.0","176.0","177.5","178.5","179.5","180.5","181.5","183.0","184.0","185.0","186.0","187.0","188.0","189.0","190.0","191.0","192.0","193.5","194.5","195.5","196.0","197.0","197.5","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="Хто може в розрахунках уважати Землю матеріальною точкою?";
			zadanieArray[1]="диспетчер, керуючи рухом літаків";
			zadanieArray[2]="космонавт, готуючись до посадки космічного корабля на Землю";
			zadanieArray[3]="науковець, обчислюючи силу тяжіння між Землею та Марсом";
			zadanieArray[4]="геолог, прогнозуючи місцезнаходження родовищ корисних копалин";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №2 ЗНО-2013 Физика. Основной тест.(Доделать!!!)*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунках зображено вектори миттєвої швидкості&nbsp;<span style='text-decoration:overline; font-style:italic;'>v</span> та прискорення&nbsp;<span style='text-decoration:overline; font-style:italic;'>a</span> тіла.<br/>У якому з випадків тіло може рівномірно рухатися по колу?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №3 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="На якому з етапів руху автогонщик <i>не</i> зазнає перевантаження?";
			zadanieArray[1]="розгін відразу після старту";
			zadanieArray[2]="рух зі сталою швидкістю прямою трасою";
			zadanieArray[3]="крутий поворот на великій швидкості";
			zadanieArray[4]="гальмування перед зупинкою";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №4 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=4;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="Пружину жорсткістю <i>k</i> розрізали на дві рівні частини. Визначте коефіцієнт жорсткості кожної з отриманих частин пружини.";
			zadanieArray[1]="<i>0,5k</i>";
			zadanieArray[2]="<i>k</i>";
			zadanieArray[3]="<i>2k</i>";
			zadanieArray[4]="<i>4k</i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №5 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="Тепловоз масою&nbsp;<i>М</i>, який рухався зі швидкістю&nbsp;<i>v</i>, зчіплюється з вагоном масою&nbsp;<i>m</i>, що рухається в тому самому напрямку зі швидкістю&nbsp;<i>u</i>. Якою буде їхня швидкість руху відразу після зчеплення?"; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №6 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="У балоні міститься газ кількістю 0,01 моль. Скільки молекул газу в балоні?<br/> Уважайте, що стала Авогадро дорівнює 6∙10<sup>23</sup>&nbsp;моль<sup>-1</sup> .";
			zadanieArray[1]="10<sup>21</sup>";
			zadanieArray[2]="6 · 10<sup>21</sup>";
			zadanieArray[3]="10<sup>24</sup>";
			zadanieArray[4]="6 · 10<sup>24</sup>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №7 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено різні циклічні процеси в системі координат <i>p</i>, <i>V</i> (<i>p</i>&nbsp;–&nbsp;тиск, <i>V</i>&nbsp;–&nbsp;об’єм), які здійснені газом сталої маси. Під час якого циклу газ виконав найбільшу роботу?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №8 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=8;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="Під час вимірювання відносної вологості повітря обидва термометри психрометра, вологий і сухий, показують однакову температуру. Це означає, що";
			zadanieArray[1]="повітря дуже сухе, відносна вологість дорівнює 0&nbsp;%.";
			zadanieArray[2]="відносна вологість повітря дорівнює 50&nbsp;%.";
			zadanieArray[3]="відносна вологість повітря дорівнює 100&nbsp;%.";
			zadanieArray[4]="температура повітря становить 0&nbsp;&deg;С.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №9 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=9;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="Якщо занурити в широку посудину з рідиною скляний капіляр, рівень рідини в ньому встановиться вище, ніж у посудині. Яку форму матиме крапля цієї рідини на горизонтальній поверхні скла?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №10 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="З поверхні електрично нейтральної краплі рідини вилетів електрон. Потім крапля поглинула протон. Елементарний електричний заряд дорівнює 1,6∙10<sup>–19</sup>&nbsp;Кл. Обчисліть значення електричного заряду краплі після цих перетворень.";
			zadanieArray[1]="–3,2∙10<sup>–19</sup>&nbsp;Кл";
			zadanieArray[2]="–1,6∙10<sup>–19</sup>&nbsp;Кл";
			zadanieArray[3]="1,6∙10<sup>–19</sup>&nbsp;Кл";
			zadanieArray[4]="3,2∙10<sup>–19</sup>&nbsp;Кл";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №11 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено схему електричного кола, що містить два однакових конденсатори і вимикач&nbsp;<i>K</i>. Перед початком експерименту конденсатор&nbsp;<i>С1</i> було заряджено до напруги&nbsp;10&nbsp;В, а конденсатор&nbsp;<i>С2</i> був розряджений. Після замикання вимикача&nbsp;<i>K</i> напруга на обох конденсаторах набула однакового значення&nbsp;5&nbsp;В. Про збереження якої з фізичних величин свідчить цей дослід?";
			zadanieArray[1]="енергії";
			zadanieArray[2]="заряду";
			zadanieArray[3]="напруженості";
			zadanieArray[4]="напруги";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №12 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Дві лампи, які з’єднані послідовно, розраховано на однакову напругу і потужності&nbsp;<i>P<sub>1</sub></i>&nbsp;=&nbsp;20&nbsp;Вт&nbsp;і&nbsp;<i>P<sub>2</sub></i>&nbsp;=&nbsp;100&nbsp;Вт. Порівняйте кількості теплоти &nbsp;<i>Q<sub>1</sub></i>&nbsp;і&nbsp;<i>Q<sub>2</sub></i>, що виділиться у відповідних лампах за однаковий проміжок часу. Залежність електричного опору від температури не враховуйте.";
			zadanieArray[1]="<i>Q<sub>1</sub></i> : <i>Q<sub>2</sub></i> = 1";
			zadanieArray[2]="<i>Q<sub>1</sub></i> : <i>Q<sub>2</sub></i> = 5";
			zadanieArray[3]="<i>Q<sub>1</sub></i> : <i>Q<sub>2</sub></i> = 1 : 5";
			zadanieArray[4]="<i>Q<sub>1</sub></i> : <i>Q<sub>2</sub></i> = 1 : 2";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №13 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="Який вид розряду в газі зображено на фотографії?";
			zadanieArray[1]="тліючий";
			zadanieArray[2]="коронний";
			zadanieArray[3]="іскровий";
			zadanieArray[4]="дуговий";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №14 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Дві ізольовані одна від одної котушки з мідного дроту намотані на спільне феромагнітне осердя (див. рисунок). По одній із котушок пропускають струм, який упродовж дослідження змінюється так, як зображено на графіку&nbsp;<i>І(t)</i>. <br/>Укажіть інтервал часу, протягом якого амперметр покаже найбільше значення сили струму.";
			zadanieArray[1]="0–1";
			zadanieArray[2]="1–2";
			zadanieArray[3]="2–4";
			zadanieArray[4]="4–5";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №15 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Електронний пучок утворює світлу пляму в центрі екрана осцилографа. Над центром екрана розмістили штабовий (прямий) магніт північним полюсом донизу. Визначте, у який бік відхилиться пляма на екрані.";
			zadanieArray[1]="ліворуч";
			zadanieArray[2]="праворуч";
			zadanieArray[3]="угору";
			zadanieArray[4]="униз";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №16 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Маятник настінного годинника здійснює коливання з частотою&nbsp;2&nbsp;Гц. Скільки разів за хвилину потенціальна енергія маятника набуває максимального значення?";
			zadanieArray[1]="30";
			zadanieArray[2]="60";
			zadanieArray[3]="120";
			zadanieArray[4]="240";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №17 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку схематично зображено промінь світла, що перетинає головну оптичну вісь тонкої збиральної лінзи і падає на її поверхню. Укажіть подальший хід променя.";
			zadanieArray[1]="1";
			zadanieArray[2]="2";
			zadanieArray[3]="3";
			zadanieArray[4]="4";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №18 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="Забарвлення мильної бульбашки переважно залежить від";
			zadanieArray[1]="кольору мила, розчиненого у воді.";
			zadanieArray[2]="температури повітря, яким заповнена бульбашка.";
			zadanieArray[3]="товщини мильної плівки.";
			zadanieArray[4]="діаметра мильної бульбашки.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №19 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Червона межа фотоефекту для деякого металу, що є катодом фотоелемента, дорівнює&nbsp;<i>&lambda;<sub>ч</sub></i>. Укажіть формулу для обчислення запірної (затримуючої) напруги&nbsp;<i>U<sub>з</sub></i>, яку треба прикласти до фотоелемента, щоб затримати електрони, які вилітають з металу під час опромінення його світлом із довжиною хвилі  <i>&lambda;</i> (<i> &lambda;</i> <  <i>&lambda;<sub>ч</sub></i>). <i>с</i>&nbsp;–&nbsp;швидкість світла у вакуумі, <i>h</i>&nbsp;–&nbsp;стала Планка, <i>е</i>&nbsp;–&nbsp;заряд електрона."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №20 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="Визначте співвідношення між енергіями&nbsp;<i>Е<sub>1</sub></i>&nbsp;і&nbsp;<i>Е<sub>2</sub></i>&nbsp;фотонів, що їх випускають два джерела світла: перше – з довжиною хвилі&nbsp;720&nbsp;нм, друге&nbsp;– з довжиною хвилі&nbsp;480&nbsp;нм.";
			zadanieArray[1]="<i>Е<sub>1</sub></i>=2,25<i>Е<sub>2</sub></i>";
			zadanieArray[2]="<i>Е<sub>1</sub></i>=1,5<i>Е<sub>2</sub></i>";
			zadanieArray[3]="<i>Е<sub>2</sub></i>=1,5<i>Е<sub>1</sub></i>";
			zadanieArray[4]="<i>Е<sub>2</sub></i>=2,25<i>Е<sub>1</sub></i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №21 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між рухом тіла та напрямком прискорення.";
			zadanieArray[1]="падіння яблука з дерева в безвітряну погоду";
			zadanieArray[2]="рух м’яча, який летить угору під кутом до горизонту";
			zadanieArray[3]="гальмування автомобіля без зміни напрямку руху";
			zadanieArray[4]="рух штучного супутника Землі по коловій орбіті";
			zadanieArray[5]="протилежно до напрямку швидкості руху тіла";
			zadanieArray[6]="під тупим кутом до напрямку швидкості руху тіла";
			zadanieArray[7]="у напрямку швидкості руху тіла";
			zadanieArray[8]="під гострим кутом до напрямку швидкості руху тіла";
			zadanieArray[9]="під прямим кутом до напрямку швидкості руху тіла";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cbae";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №22 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між назвою ізопроцесу, що відбувається з ідеальним газом сталої маси, і графіком, який відповідає цьому процесу (<i>p</i>&nbsp;–&nbsp;тиск, <i>V</i>&nbsp;–&nbsp;об’єм, <i>T</i>&nbsp;–&nbsp;температура).";
			zadanieArray[1]="ізотермічне розширення";
			zadanieArray[2]="ізобарне нагрівання";
			zadanieArray[3]="ізохорне охолодження";
			zadanieArray[4]="ізотермічне стискання";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="multiselect_picture";
			answerArray[taskNumber-1]="acdb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №23 ЗНО-2013 Физика. Основной тест.(доделать!!!)*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між видом випромінювання та його характеристикою."; 
			zadanieArray[1]="інфрачервоне";
			zadanieArray[2]="ультрафіолетове";
			zadanieArray[3]="рентгенівське";
			zadanieArray[4]="гамма-випромінювання";
			zadanieArray[5]="спричиняє засмагу";
			zadanieArray[6]="застосовується в приладах нічного бачення";
			zadanieArray[7]="сприймається зором людини";
			zadanieArray[8]="виникає в результаті гальмування швидких електронів на аноді";
			zadanieArray[9]="виникає в результаті самочинного розпаду атомних ядер";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="bade";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №24 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між досягненням фізичної науки та автором відкриття (видатним ученим, чий внесок був найбільш значущим).";
			zadanieArray[1]="вимірювання тиску світла";
			zadanieArray[2]="створення планетарної моделі атома";
			zadanieArray[3]="створення теорії фотоефекту";
			zadanieArray[4]="створення першого ядерного реактора";
			zadanieArray[5]="Лебедєв&nbsp;П.";
			zadanieArray[6]="Резерфорд&nbsp;Е.";
			zadanieArray[7]="Ейнштейн&nbsp;А.";
			zadanieArray[8]="Фермі&nbsp;Е.";
			zadanieArray[9]="Рентген&nbsp;В.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="abcd";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №25 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="Озером пливуть два човни перпендикулярно один до одного зі швидкостями 3&nbsp;м/с та 4&nbsp;м/с відносно берега. Яка швидкість першого човна відносно другого? <br/>Відповідь запишіть у метрах за секунду.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=5;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №26 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Повітряну кулю заповнено газом, густина якого в&nbsp;6&nbsp;разів менша за густину повітря. У скільки разів збільшиться допустима маса вантажу, який може підняти куля, якщо газ у ній підігріли, унаслідок чого його густина зменшилася ще удвічі? Вагою оболонки кулі знехтуйте.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 1.1;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №27 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку в системі координат <i>p</i>, <i>T</i> (<i>p</i>&nbsp;–&nbsp;тиск, <i>Т</i>&nbsp;–&nbsp;температура) зображено замкнутий цикл 12341 теплової машини, у якої робочим тілом є ідеальний газ сталої маси. Визначте співвідношення <i>A<sub>1-2</sub></i>&nbsp;:&nbsp;<i>A<sub>3-4</sub></i> абсолютних значень робіт газу на ділянках 1–2 і 3–4.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= 1;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №28 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=28;
			var zadanieArray=new Array(); 
			zadanieArray[0]="Відкриту посудину з водою, температура якої дорівнює 20&nbsp;&deg;С, поставили на електроплиту. Через 8&nbsp;хв вода закипіла. Скільки ще часу потрібно, щоб уся вода перетворилася на пару? Питома теплоємність води дорівнює 4200&nbsp;Дж/(кг&nbsp;∙&nbsp;К), питома теплота пароутворення води становить 2,1&nbsp;МДж/кг. Витратами енергії на нагрівання посудини та навколишнього середовища знехтуйте. <br/>Відповідь запишіть у хвилинах.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 50;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №29 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="Сила струму, що виникає під час освітлення фотоелемента, дорівнює 10&nbsp;мкА і в умовах цього досліду не залежить від навантаження. Фотоелемент приєднують до розрядженого конденсатора електроємністю 100&nbsp;мкФ. Через який час напруга на конденсаторі становитиме 6&nbsp;В? <br/>Відповідь запишіть у секундах."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 60;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №30 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="В електричному колі, схему якого зображено на рисунку, опори всіх резисторів однакові. Внутрішнім опором джерела струму можна знехтувати. Визначте, у скільки разів збільшиться сила струму в колі через джерело струму після замикання розімкненого ключа&nbsp;<i>K</i>."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= 1.2;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №31 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="Після розмикання кола живлення котушки індуктивністю 2&nbsp;Гн на клемах вимикача виникала електрорушійна сила (ЕРС) самоіндукції 300&nbsp;В. Сила струму до розмикання кола становила 1,5&nbsp;А. Уважаючи, що сила струму в колі змінювалася рівномірно, визначте час існування струму в котушці після розмикання кола.<br/>Відповідь запишіть у секундах.";  
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 0.01;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №32 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="Коливальний контур радіоприймача складається з конденсатора та котушки індуктивності. Радіоприймач фіксовано налаштовано на приймання радіостанції, що випромінює радіохвилі довжиною 4&nbsp;м. Радіоаматор вирішив переналаштувати приймач на прийом іншої радіостанції і приєднав паралельно до конденсатора в коливальному контурі конденсатор утричі більшої електроємності. На яку довжину хвилі тепер налаштовано приймач? <br/>Відповідь запишіть у метрах."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 8;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;			
		/*задание №33 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="На дзеркало, розташоване під кутом 50&deg; до горизонтальної поверхні столу, падає спрямований вертикально вниз промінь світла і відбивається (див. схематичний рисунок). Який кут утворює відбитий промінь із горизонтом? <br/>Відповідь запишіть у градусах.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= 10;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;			
		/*задание №34 ЗНО-2013 Физика. Основной тест.*/
			taskNumber=34;
			var zadanieArray=new Array();
			zadanieArray[0]="Коли людина знімає окуляри, їй зручно читати, тримаючи книжку на відстані 40&nbsp;см від очей. Яка оптична сила її окулярів? Відстань найкращого бачення для нормального ока становить 25&nbsp;см. <br/>Відповідь запишіть у діоптріях.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 1.5;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		
		/*Завершение инициализации теста*/	
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i]);
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}/*конец ЗНО-2013 Физика. Основной тест.*/
	
/*Завершение инициализации тестов*/

/*Заполнение поля дано ответов*/

	buildTestTable(testName,testDirectory);
		document.getElementById("ZnoGivenAnswers").innerHTML=textTasksLeft+': <!-- Счетчик ответов --><span class="GivenAnswersView" name="GivenAnswers" id="GivenAnswers"></span>';
		taskLoader(taskArray[currentTaskCounter]);
		isTestingFlag=1;
		document.getElementById("ResumeTest").innerHTML='<input type="button" value="'+textAcceptAnswer+'" name="ResumeTestButton" id="ResumeTestButton" onClick="nextTask()" />';
		/*установка счетчика времени*/
		isTestingFlag=1;
		timing();
	
}
