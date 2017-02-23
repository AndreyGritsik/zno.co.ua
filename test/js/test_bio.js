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
//Тесты по биологии
/*************************************************************/	
	/*ЗНО-2009 Биология. Основной тест*/
/*	if(testName=="ЗНО-2009 Биология. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/bio\/img\/test2009main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","107.5","109.5","113.0","116.0","119.5","123.0","126.0","129.5","133.0","136.0","139.0","141.5","144.5","147.0","149.0","151.5","153.5","155.5","157.0","159.0","160.5","162.0","163.5","165.0","166.5","167.5","169.0","170.0","171.5","172.5","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.0","182.0","183.0","184.0","185.0","185.5","186.5","187.0","188.0","188.5","189.5","190.5","191.0","192.0","192.5","193.5","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","b","a","b","b","a","a","b","c","d","a","b","d","a","c","b","a","b","a","b","b","c","d","d","a","a","d","b","b","a","a","c","c","b","c","b","d","c","c","a","b","b","b","d","b","c","b","d","c","c","edac","beac","cdae","eadb","beac","dbec","cedb","cadb","dbca","dbca");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	*/
	/*ЗНО-2010 Биология. Основной тест*/
/*	if(testName=="ЗНО-2010 Биология. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/bio\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","109.0","112.0","115.0","118.0","121.5","124.5","128.0","131.0","134.0","137.0","140.0","142.5","145.5","148.0","150.5","152.5","155.0","157.0","159.0","161.0","162.5","164.0","165.5","167.0","168.5","170.0","171.0","172.5","173.5","174.5","175.5","177.0","178.0","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.0","186.0","187.0","188.0","188.5","189.5","190.5","191.5","192.5","193.0","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","c","b","d","b","c","b","c","c","b","b","d","c","b","d","d","a","c","b","d","c","a","c","d","b","c","a","d","b","c","d","b","c","d","b","d","b","d","a","d","a","a","c","d","a","d","b","b","c","d","beac","cdea","edac","daec","baed","dcba","cade","dbac","dacb","dabc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	*/
	/*ЗНО-2011 Биология. Основной тест*/
/*	if(testName=="ЗНО-2011 Биология. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		testDirectory='\/test\/bio\/img\/test2011main1\/';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","104.5","106.5","108.0","110.5","112.5","115.0","117.5","120.5","123.0","125.5","128.0","130.5","132.5","135.0","137.5","139.5","142.0","144.0","146.0","148.0","150.0","152.0","154.0","156.0","157.5","159.5","161.0","162.5","164.5","166.0","167.0","168.5","170.0","171.5","172.5","174.0","175.0","176.0","177.0","178.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.0","188.0","189.0","190.0","191.0","192.0","193.0","193.5","194.5","195.5","196.5","197.5","198.0","198.5","199.0","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","c","b","a","a","c","b","b","d","a","c","b","a","d","c","c","c","d","a","b","b","b","d","b","c","c","c","d","b","b","c","d","b","a","a","c","c","b","d","c","d","b","b","c","b","b","c","b","a","a","abec","bdea","adec","eacb","eacb","debc","bdac","acdb","cdb","bdc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","componate","componate");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,3,3);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
	/*ЗНО-2012 Биология. Пробный тест*/
/*	if(testName=="ЗНО-2012 Биология. Пробный тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		testDirectory='\/test\/bio\/img\/test2012demo\/';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.5","104.5","106.5","108.5","111.5","114.5","117.5","121.0","124.5","127.5","131.0","134.0","137.0","139.5","142.5","145.0","147.5","150.0","152.5","154.5","156.5","158.5","160.5","162.0","163.5","165.0","166.5","168.0","169.0","170.5","171.5","172.5","174.0","175.0","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","184.5","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.5","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","b","d","d","c","c","b","a","b","c","b","b","c","b","a","c","b","d","b","c","a","c","c","a","d","b","d","c","d","a","b","d","c","b","b","c","b","a","d","a","c","a","c","b","d","c","b","b","c","c","acbe","abdc","badc","deac","dcbe","edab","dcab","acdb","aca","dcb");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","ordernew","ordernew","componate","componate");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,3,3,3,3);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*ЗНО-2012 Биология. Основной тест*/
/*	if(testName=="ЗНО-2012 Биология. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		testDirectory='\/test\/bio\/img\/test2012main1\/';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.5","104.5","106.5","108.5","111.5","114.5","117.5","121.0","124.5","127.5","131.0","134.0","137.0","139.5","142.5","145.0","147.5","150.0","152.5","154.5","156.5","158.5","160.5","162.0","163.5","165.0","166.5","168.0","169.0","170.5","171.5","172.5","174.0","175.0","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","184.5","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.5","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","c","d","b","a","c","b","c","d","c","c","b","a","c","b","c","b","d","c","d","a","b","c","a","b","d","c","d","b","b","d","d","b","b","a","a","d","c","d","b","d","a","c","c","c","c","a","d","a","a","adeb","edab","eabc","ecdb","dcbe","cebd","cdba","acbd","ccb","abb");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","ordernew","ordernew","componate","componate");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,3,3,3,3);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	*/
	
/*ЗНО-2013 биология. Основной тест. I сессия*/
	if(testName==znoBio2013Main)
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/bio\/img\/test2013main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","104.5","106.0","108.5","111.0","113.5","116.5","119.5","122.5","125.0","128.0","130.5","133.0","135.5","138.0","140.0","142.5","144.5","146.5","148.0","150.0","151.5","153.0","154.5","156.0","157.5","158.5","160.0","161.0","162.5","163.5","164.5","165.5","166.5","167.5","168.0","169.0","170.0","171.0","172.0","172.5","173.5","174.5","175.0","176.0","177.0","178.0","179.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","190.0","191.0","192.5","193.5","195.0","196.0","197.0","198.0","199.0","199.5","200.0","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2013 биология. Основной тест*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка наука досліджує вимерлі організми?";
			zadanieArray[1]="палеонтологія";
			zadanieArray[2]="морфологія";
			zadanieArray[3]="еволюційне вчення";
			zadanieArray[4]="археологія";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №2 ЗНО-2013 биология. Основной тест*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="Регулярне вживання в їжу продуктів із низьким умістом Йоду призводить до виникнення";
			zadanieArray[1]="карликовості.";
			zadanieArray[2]="флюорозу.";
			zadanieArray[3]="ендемічного зобу.";
			zadanieArray[4]="поліомієліту.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №3 ЗНО-2013 биология. Основной тест*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка група ліпідів формує основу клітинних мембран?";
			zadanieArray[1]="нейтральні жири";
			zadanieArray[2]="воски";
			zadanieArray[3]="фосфоліпіди";
			zadanieArray[4]="каротиноїди";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №4 ЗНО-2013 биология. Основной тест*/
			taskNumber=4;
			var zadanieArray=new Array();
			zadanieArray[0]="Обчисліть і укажіть відсоток гуанілових нуклеотидів у ділянці молекули ДНК, якщо тимідилові нуклеотиди становлять 42 відсотки від загальної кількості.";
			zadanieArray[1]="84";
			zadanieArray[2]="42";
			zadanieArray[3]="16";
			zadanieArray[4]="8";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №5 ЗНО-2013 биология. Основной тест*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="Твердження <i>«кожна нова клітина утворюється лише внаслідок розмноження материнської клітини шляхом поділу»</i> є одним із положень"; 
			zadanieArray[1]="клітинної теорії.";
			zadanieArray[2]="біогенетичного закону.";
			zadanieArray[3]="закону необоротності еволюції.";
			zadanieArray[4]="еволюційної теорії Дарвіна.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №6 ЗНО-2013 биология. Основной тест*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="Рослинна клітина, на відміну від тваринної, має"; 
			zadanieArray[1]="вакуолю з клітинним соком.";
			zadanieArray[2]="комплекс Гольджі.";
			zadanieArray[3]="ендоплазматичну сітку.";
			zadanieArray[4]="мітохондрії.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №7 ЗНО-2013 биология. Основной тест*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="Під час досліду з одноклітинною водорістю ацетабулярією (див. рисунок) у водорості Х видалили верхню та середню частини, у водорості Y – верхню та нижню частини. До нижньої частини водорості Х пересадили середню частину водорості Y, у результаті чого штучно створений організм набув вигляду водорості Х. Укажіть правильний висновок з цього експерименту.";
			zadanieArray[1]="мітохондрії відповідають за утворення енергії в клітині";
			zadanieArray[2]="ядро відповідає за збереження спадкової інформації";
			zadanieArray[3]="хлоропласти здійснюють процес фотосинтезу";
			zadanieArray[4]="клітинні мембрани мають властивість відновлюватися";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №8 ЗНО-2013 биология. Основной тест*/
			taskNumber=8;
			var zadanieArray=new Array();
			zadanieArray[0]="Зерниста ендоплазматична сітка відрізняється від незернистої наявністю";
			zadanieArray[1]="рибосом.";
			zadanieArray[2]="лізосом.";
			zadanieArray[3]="центросом.";
			zadanieArray[4]="пероксисом.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №9 ЗНО-2013 биология. Основной тест*/
			taskNumber=9;
			var zadanieArray=new Array();
			zadanieArray[0]="Мітохондрії називають енергетичними станціями клітини. Така назва органел пов’язана з їхньою функцією";
			zadanieArray[1]="синтезу білків.";
			zadanieArray[2]="синтезу АТФ.";
			zadanieArray[3]="транспорту газів, зокрема кисню.";
			zadanieArray[4]="внутрішньоклітинного травлення.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №10 ЗНО-2013 биология. Основной тест*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено хромосомний набір";
			zadanieArray[1]="здорової жінки.";
			zadanieArray[2]="здорового чоловіка.";
			zadanieArray[3]="жінки, хворої на синдром Дауна.";
			zadanieArray[4]="чоловіка, хворого на синдром Дауна.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №11 ЗНО-2013 биология. Основной тест*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="Під час якої фази мітозу починається утворення веретена поділу?";
			zadanieArray[1]="телофази";
			zadanieArray[2]="анафази";
			zadanieArray[3]="метафази";
			zadanieArray[4]="профази";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №12 ЗНО-2013 биология. Основной тест*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Для збудників синдрому набутого імунодефіциту та грипу спільним є те, що їхня спадкова інформація міститься в";
			zadanieArray[1]="молекулах ДНК."; 
			zadanieArray[2]="молекулах РНК.";
			zadanieArray[3]="молекулах білка.";
			zadanieArray[4]="нуклеоїді.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №13 ЗНО-2013 биология. Основной тест*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="Групу прокаріотів називають анаеробними, якщо вони";
			zadanieArray[1]="нездатні до фотосинтезу.";
			zadanieArray[2]="отримують енергію за рахунок окиснення органічних речовин.";
			zadanieArray[3]="використовують енергію хімічних реакцій для синтезу нових органічних речовин.";
			zadanieArray[4]="отримують енергію за рахунок безкисневого розщеплення органічних речовин.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №14 ЗНО-2013 биология. Основной тест*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Якщо хліб залишити надовго в закритому поліетиленовому пакеті, на ньому виростає гриб. Укажіть його назву.";
			zadanieArray[1]="Борошниста роса";
			zadanieArray[2]="Мукор";
			zadanieArray[3]="Фітофтора";
			zadanieArray[4]="Сажка";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №15 ЗНО-2013 биология. Основной тест*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Червоні водорості можуть проникати на значні глибини тому, що в них є";
			zadanieArray[1]="глибоководні корені.";
			zadanieArray[2]="добре розвинені провідні тканини.";
			zadanieArray[3]="скоротливі вакуолі в клітинах.";
			zadanieArray[4]="додаткові пігменти фотосистем.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №16 ЗНО-2013 биология. Основной тест*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Вирости, які позначено на рисунку буквою Х, призначені для";
			zadanieArray[1]="здійснення фотосинтезу.";
			zadanieArray[2]="закріплення рослини в ґрунті.";
			zadanieArray[3]="статевого розмноження.";
			zadanieArray[4]="відкладання поживних речовин.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №17 ЗНО-2013 биология. Основной тест*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="У більшості хвойних рослин листки набули форми голок. У зв’язку з чим виникло це пристосування?";
			zadanieArray[1]="для забезпечення майже повного припинення випаровування води";
			zadanieArray[2]="через необхідність захисту від рослиноїдних тварин";
			zadanieArray[3]="для виділення більшої кількості кисню";
			zadanieArray[4]="для запобігання обламуванню гілок під час снігопадів";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №18 ЗНО-2013 биология. Основной тест*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка тканина розташована в зоні поділу кореня?";
			zadanieArray[1]="механічна";
			zadanieArray[2]="покривна";
			zadanieArray[3]="твірна";
			zadanieArray[4]="провідна";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №19 ЗНО-2013 биология. Основной тест*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Яку частину квітки позначено на рисунку буквою Х?";
			zadanieArray[1]="чашолисток";
			zadanieArray[2]="тичинку";
			zadanieArray[3]="пелюстку";
			zadanieArray[4]="маточку";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №20 ЗНО-2013 биология. Основной тест*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="У зародку насінини поряд із брунькою є зародковий корінець. На який вид кореня він перетвориться під час проростання?";
			zadanieArray[1]="головний";
			zadanieArray[2]="бічний";
			zadanieArray[3]="додатковий";
			zadanieArray[4]="дихальний";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №21 ЗНО-2013 биология. Основной тест*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="Частота пульсації скоротливих вакуолей найпростіших залежить від";
			zadanieArray[1]="концентрації солей у навколишньому середовищі.";
			zadanieArray[2]="кількості неперетравлених решток у клітині.";
			zadanieArray[3]="руху цитоплазми в клітині.";
			zadanieArray[4]="генетичного коду особин певного виду.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №22 ЗНО-2013 биология. Основной тест*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Яку роль відіграє личинка в житті коралових поліпів?";
			zadanieArray[1]="підсилює внутрішньовидову конкуренцію";
			zadanieArray[2]="забезпечує розселення";
			zadanieArray[3]="пришвидшує розвиток";
			zadanieArray[4]="вегетативно розмножується";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №23 ЗНО-2013 биология. Основной тест*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Чому зараження гостриком частіше трапляється у дітей, ніж у дорослих?";
			zadanieArray[1]="у дітей немає навичок гігієнічної поведінки";
			zadanieArray[2]="у дорослих сильніший імунітет до гостриків";
			zadanieArray[3]="гострики передаються з молоком, а діти його частіше вживають";
			zadanieArray[4]="у дітей гострики не викликають симптомів, тому їх важче діагностувати";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №24 ЗНО-2013 биология. Основной тест*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Ознакою будови рака річкового є";
			zadanieArray[1]="відсутність вусиків.";
			zadanieArray[2]="відсутність хітинового покриву.";
			zadanieArray[3]="наявність п’яти пар ходильних кінцівок.";
			zadanieArray[4]="наявність трьох пар ходильних кінцівок.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №25 ЗНО-2013 биология. Основной тест*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="У якого молюска черепашка складається з двох стулок?";
			zadanieArray[1]="ставковика малого";
			zadanieArray[2]="слимака виноградного";
			zadanieArray[3]="беззубки звичайної";
			zadanieArray[4]="восьминога гігантського";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №26 ЗНО-2013 биология. Основной тест*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Пристосуванням земноводних до життя на суходолі є";
			zadanieArray[1]="нирки.";
			zadanieArray[2]="повіки.";
			zadanieArray[3]="перетинки між пальцями.";
			zadanieArray[4]="бічна лінія.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №27 ЗНО-2013 биология. Основной тест*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="Пристосуванням птахів до польоту є";
			zadanieArray[1]="задні кінцівки з пальцями.";
			zadanieArray[2]="грудна клітка.";
			zadanieArray[3]="пір’яний покрив.";
			zadanieArray[4]="легені.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №28 ЗНО-2013 биология. Основной тест*/
			taskNumber=28;
			var zadanieArray=new Array();
			zadanieArray[0]="Морж, тюлень, нерпа належать до класу";
			zadanieArray[1]="Кісткові риби.";
			zadanieArray[2]="Земноводні.";
			zadanieArray[3]="Плазуни.";
			zadanieArray[4]="Ссавці.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №29 ЗНО-2013 биология. Основной тест*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="Яку тканину зображено на рисунку?";
			zadanieArray[1]="нервову";
			zadanieArray[2]="епітеліальну";
			zadanieArray[3]="сполучну";
			zadanieArray[4]="м’язову";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №30 ЗНО-2013 биология. Основной тест*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка кістка входить до складу поясу верхніх кінцівок людини?";
			zadanieArray[1]="променева";
			zadanieArray[2]="плечова";
			zadanieArray[3]="ліктьова";
			zadanieArray[4]="лопатка";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №31 ЗНО-2013 биология. Основной тест*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="Мале коло кровообігу людини починається";
			zadanieArray[1]="правим передсердям.";
			zadanieArray[2]="лівим передсердям.";
			zadanieArray[3]="правим шлуночком.";
			zadanieArray[4]="лівим шлуночком.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №32 ЗНО-2013 биология. Основной тест*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="До якого патологічного стану призводить зменшення вмісту гемоглобіну в крові?";
			zadanieArray[1]="анемії";
			zadanieArray[2]="гемофілії";
			zadanieArray[3]="лейкопенії";
			zadanieArray[4]="лейкоцитозу";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №33 ЗНО-2013 биология. Основной тест*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="Відростки яких нейронів входять до складу передніх корінців спинного мозку?";
			zadanieArray[1]="чутливих";
			zadanieArray[2]="рухових";
			zadanieArray[3]="вставних";
			zadanieArray[4]="змішаних";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №34 ЗНО-2013 биология. Основной тест*/
			taskNumber=34;
			var zadanieArray=new Array();
			zadanieArray[0]="Яке твердження правильно характеризує гуморальну регуляцію фізіологічних функцій?";
			zadanieArray[1]="у процесі еволюції виникла пізніше за нервову";
			zadanieArray[2]="підпорядкована нервовій і становить з нею єдину регуляторну систему";
			zadanieArray[3]="відрізняється високою збудливістю і провідністю";
			zadanieArray[4]="в основі її діяльності лежать рефлекси";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №35 ЗНО-2013 биология. Основной тест*/
			taskNumber=35;
			var zadanieArray=new Array();
			zadanieArray[0]="Який імунітет виникає в організмі після введення лікувальної сироватки проти правця?";
			zadanieArray[1]="вроджений";
			zadanieArray[2]="пасивний";
			zadanieArray[3]="активний";
			zadanieArray[4]="клітинний";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №36 ЗНО-2013 биология. Основной тест*/
			taskNumber=36;
			var zadanieArray=new Array();
			zadanieArray[0]="Вуглекислий газ потрапляє з крові до альвеол унаслідок";
			zadanieArray[1]="фільтрації.";
			zadanieArray[2]="випаровування.";
			zadanieArray[3]="дифузії.";
			zadanieArray[4]="реабсорбції.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №37 ЗНО-2013 биология. Основной тест*/
			taskNumber=37;
			var zadanieArray=new Array();
			zadanieArray[0]="Емульгування жирів під дією жовчі відбувається в";
			zadanieArray[1]="ротовій порожнині.";
			zadanieArray[2]="товстому кишечнику.";
			zadanieArray[3]="шлунку.";
			zadanieArray[4]="дванадцятипалій кишці.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №38 ЗНО-2013 биология. Основной тест*/
			taskNumber=38;
			var zadanieArray=new Array();
			zadanieArray[0]="Первинна сеча утворюється внаслідок";
			zadanieArray[1]="фільтрації в капсулі нефрона.";
			zadanieArray[2]="фільтрації у звивистих канальцях.";
			zadanieArray[3]="реабсорбції в капсулі нефрона.";
			zadanieArray[4]="реабсорбції у звивистих канальцях.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №39 ЗНО-2013 биология. Основной тест*/
			taskNumber=39;
			var zadanieArray=new Array();
			zadanieArray[0]="Унаслідок овогенезу з однієї клітини-попередниці утворюються";
			zadanieArray[1]="чотири яйцеклітини.";
			zadanieArray[2]="три яйцеклітини і одне полярне тільце.";
			zadanieArray[3]="дві яйцеклітини і два полярних тільця.";
			zadanieArray[4]="одна яйцеклітина і три полярних тільця.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №40 ЗНО-2013 биология. Основной тест*/
			taskNumber=40;
			var zadanieArray=new Array();
			zadanieArray[0]="Яке захворювання виникає за нестачі вітаміну С?";
			zadanieArray[1]="рахіт";
			zadanieArray[2]="цинга";
			zadanieArray[3]="бері-бері";
			zadanieArray[4]="куряча сліпота";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №41 ЗНО-2013 биология. Основной тест*/
			taskNumber=41;
			var zadanieArray=new Array();
			zadanieArray[0]="Проаналізуйте рисунок, на якому представлено пропорції тіла людини залежно від віку, та твердження, що його інтерпретують. Які з них є правильними?<br><br>І. Пропорції тіла людини з часом змінюються.<br>ІІ. Швидкість росту голови після народження перевищує швидкість росту тіла.<br>ІІІ. Відносна довжина нижніх кінцівок з віком збільшується.";
			zadanieArray[1]="правильне лише І";
			zadanieArray[2]="правильні лише І і ІІІ";
			zadanieArray[3]="правильні лише ІІ і ІІІ";
			zadanieArray[4]="усі правильні";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №42 ЗНО-2013 биология. Основной тест*/
			taskNumber=42;
			var zadanieArray=new Array();
			zadanieArray[0]="Томас Морган досліджував спадковість низки ознак у плодової мушки дрозофіли. В одному з експериментів учений досліджував дві ознаки – забарвлення тіла (<i>B</i>&nbsp; –&nbsp;сіре, <i>b</i>&nbsp; –&nbsp;чорне) і форму крил (<i>V </i>&nbsp; –&nbsp;нормальні, <i>v</i>&nbsp; –&nbsp;зачаткові). Дослідник схрестив дигетерозиготну за цими ознаками самицю з мутантним самцем, який мав чорне тіло та зачаткові крила.<br> Як видно з результатів схрещування (див. рисунок), співвідношення фенотипів у гібридному поколінні сильно відрізняється від очікуваного за законами Менделя (1:1:1:1). Це пояснюється тим, що частка утворених дигетерозиготною самицею некросоверних (нерекомбінантних) гамет становить";
			zadanieArray[1]="8,5&nbsp;%.";
			zadanieArray[2]="17&nbsp;%.";
			zadanieArray[3]="41,5&nbsp;%.";
			zadanieArray[4]="83&nbsp;%.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №43 ЗНО-2013 биология. Основной тест*/
			taskNumber=43;
			var zadanieArray=new Array();
			zadanieArray[0]="Забарвлення в норок визначається одним геном з повним домінуванням. Схрещування коричневої норки з сірою дало лише коричневих потомків. У другому поколінні отримали коричневих та сірих норок. З якою ймовірністю серед них слід очікувати появу гетерозиготних?"; 
			zadanieArray[1]="100&nbsp;%";
			zadanieArray[2]="75&nbsp;%";
			zadanieArray[3]="50&nbsp;%";
			zadanieArray[4]="25&nbsp;%";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №44 ЗНО-2013 биология. Основной тест*/
			taskNumber=44;
			var zadanieArray=new Array();
			zadanieArray[0]="Який компонент середовища належить до абіотичних екологічних факторів?";
			zadanieArray[1]="атмосферний тиск";
			zadanieArray[2]="вирубування тропічних лісів";
			zadanieArray[3]="коменсалізм";
			zadanieArray[4]="конкуренція за особин протилежної статі";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №45 ЗНО-2013 биология. Основной тест*/
			taskNumber=45;
			var zadanieArray=new Array();
			zadanieArray[0]="Біологічні ритми людини зумовлені різними причинами. Причиною ритмічної зміни температури тіла людини протягом доби є обертання";
			zadanieArray[1]="Землі навколо Сонця.";
			zadanieArray[2]="Місяця навколо Землі.";
			zadanieArray[3]="Місяця навколо власної осі.";
			zadanieArray[4]="Землі навколо власної осі.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №46 ЗНО-2013 биология. Основной тест*/
			taskNumber=46;
			var zadanieArray=new Array();
			zadanieArray[0]="На місці чагарнику вирішили вирощувати полуниці. Для цього підготували ґрунт, висадили розсаду декількох сортів полуниць, внесли мінеральні та органічні добрива. Результатом цієї діяльності стало формування";
			zadanieArray[1]="фітоценозу.";
			zadanieArray[2]="біогеоценозу.";
			zadanieArray[3]="біоценозу.";
			zadanieArray[4]="агроценозу.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №47 ЗНО-2013 биология. Основной тест*/
			taskNumber=47;
			var zadanieArray=new Array();
			zadanieArray[0]="Яка послідовність правильно відображає передавання енергії в ланцюгу живлення?";
			zadanieArray[1]="пшениця&rarr;довгоносик&rarr;жайворонок&rarr;орел";
			zadanieArray[2]="довгоносик&rarr;пшениця&rarr;жайворонок&rarr;орел";
			zadanieArray[3]="орел&rarr;жайворонок&rarr;довгоносик&rarr;пшениця";
			zadanieArray[4]="жайворонок&rarr;довгоносик&rarr;пшениця&rarr;орел";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №48 ЗНО-2013 биология. Основной тест*/
			taskNumber=48;
			var zadanieArray=new Array();
			zadanieArray[0]="Який організм займає перший трофічний рівень у ланцюгах живлення?";		
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №49 ЗНО-2013 биология. Основной тест*/
			taskNumber=49;
			var zadanieArray=new Array();
			zadanieArray[0]="Новозеландський плазун гатерія не облаштовує собі нори, а використовує гнізда буревісників. Коли птах уночі повертається до гнізда, гатерія вирушає на полювання. Укажіть тип взаємозв’язків між цими організмами."; 
			zadanieArray[1]="мутуалізм";
			zadanieArray[2]="паразитизм";
			zadanieArray[3]="коменсалізм";
			zadanieArray[4]="хижацтво";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №50 ЗНО-2013 биология. Основной тест*/
			taskNumber=50;
			var zadanieArray=new Array();
			zadanieArray[0]="На острові Мадейра з 550 видів жуків близько 200 – безкрилі й нездатні до польоту, у інших видів жуків є довгі крила, що добре протистоять вітрам. Укажіть тип добору, результатом якого є така дивергенція.";
			zadanieArray[1]="стабілізуючий";
			zadanieArray[2]="рушійний";
			zadanieArray[3]="розриваючий";
			zadanieArray[4]="штучний";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №51 ЗНО-2013 биология. Основной тест*/
			taskNumber=51;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між органелою, зображеною на рисунку (1–4), і функцією (А–Д), яку вона виконує.";
			zadanieArray[1]="синтез білків";
			zadanieArray[2]="синтез АТФ";
			zadanieArray[3]="здійснення фотосинтезу";
			zadanieArray[4]="регуляція внутрішньо-клітинного тиску";
			zadanieArray[5]="дозрівання, розподіл і транспортування синтезованих речовин";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="alphabetic";
			viewArray[taskNumber-1]="multiselect_picture";
			answerArray[taskNumber-1]="beac";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
		/*задание №52 ЗНО-2013 биология. Основной тест*/
			taskNumber=52;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між значенням рослин у житті людини (1–4) та назвою родини (А–Д), до якої вони належать.";
			zadanieArray[1]="серед представників є олійна рослина, із зерен якої виготовляють гостру приправу; овочеві культури утворюють розрослі бруньки – головки; є коренеплідні рослини";
			zadanieArray[2]="серед представників багато плодово-ягідних культур, є декоративні та цінні лікарські рослини; з деяких декоративних рослин отримують ефірну олію";
			zadanieArray[3]="до родини належать цінні харчові та кормові культури, у насінні яких міститься багато білка; деякі культури використовують як медоноси, зелені добрива, декоративні рослини";
			zadanieArray[4]="майже всі представники містять отруйні речовини (нікотин, атропін), хоча багато з них є цінними овочевими та декоративними культурами";
			zadanieArray[5]="Пасльонові";
			zadanieArray[6]="Лілійні";
			zadanieArray[7]="Капустяні";
			zadanieArray[8]="Розові";
			zadanieArray[9]="Бобові";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cdea";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №53 ЗНО-2013 биология. Основной тест*/
			taskNumber=53;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між рядом комах (1–4) та представником (А–Д), який до нього належить.";
			zadanieArray[1]="Твердокрилі";
			zadanieArray[2]="Лускокрилі";
			zadanieArray[3]="Перетинчастокрилі";
			zadanieArray[4]="Прямокрилі";
			zadanieArray[5]="Білан капустяний";
			zadanieArray[6]="Жук колорадський";
			zadanieArray[7]="Коник зелений";
			zadanieArray[8]="Воша людська";
			zadanieArray[9]="Бджола медоносна";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="baec";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;			
		/*задание №54 ЗНО-2013 биология. Основной тест*/
			taskNumber=54;
			var zadanieArray=new Array();
			zadanieArray[0]="Органи в організмі об’єднані у фізіологічні системи. Установіть відповідність між органом, зображеним на рисунку (1–4), та системою (А–Д), до якої він належить.";
			zadanieArray[1]="нервова";
			zadanieArray[2]="ендокринна";
			zadanieArray[3]="кровоносна";
			zadanieArray[4]="видільна";
			zadanieArray[5]="лімфатична";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="alphabetic";
			viewArray[taskNumber-1]="multiselect_picture";
			answerArray[taskNumber-1]="cadb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;
		/*задание №55 ЗНО-2013 биология. Основной тест*/
			taskNumber=55;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть правильну послідовність руху крові судинами від серця.";
			zadanieArray[1]="нижня порожниста вена";
			zadanieArray[2]="печінкова вена";
			zadanieArray[3]="печінкова артерія";
			zadanieArray[4]="аорта";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="dcba";
			taskTypeArray[taskNumber-1]="ordernew";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=4;		
			
		/*задание №56 ЗНО-2013 биология. Основной тест*/
			taskNumber=56;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть правильну послідовність еволюційних подій історичного розвитку органічного світу.";
			zadanieArray[1]="виникнення більшості типів безхребетних тварин";
			zadanieArray[2]="панування плазунів; поява перших ссавців";
			zadanieArray[3]="розквіт кам’яновугільних лісів; поява хвойних рослин, плазунів";
			zadanieArray[4]="виникнення покритонасінних рослин; поява птахів";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="acbd";
			taskTypeArray[taskNumber-1]="ordernew";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №57 ЗНО-2013 биология. Основной тест*/
			taskNumber=57;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №57 ЗНО-2013 биология. Основной тест";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="bcc";
			taskTypeArray[taskNumber-1]="componate";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;	
		
		/*задание №58 ЗНО-2013 биология. Основной тест*/
			taskNumber=58;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №58 ЗНО-2013 биология. Основной тест";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="bba";
			taskTypeArray[taskNumber-1]="componate";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;	
			
		/*задание №59 ЗНО-2013 биология. Основной тест*/
			taskNumber=59;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №59 ЗНО-2013 биология. Основной тест";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="aca";
			taskTypeArray[taskNumber-1]="componate";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;	
			
		/*задание №60 ЗНО-2013 биология. Основной тест*/
			taskNumber=60;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №60 ЗНО-2013 биология. Основной тест";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="numeric";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="bab";
			taskTypeArray[taskNumber-1]="componate";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=3;
			variantNumberArray[taskNumber-1]=3;			
		
		/*Завершение инициализации теста*/	
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i]);
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}	/* Окончание ЗНО-2013 биология. Основной тест. I сессия*/	
	
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
