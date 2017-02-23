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
//Тесты по географии	
/*************************************************************/	
/*ЗНО-2009 География. Основной тест*/
	if(testName==znoGeo2009Main)
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2009main1\/';
		testTitle = znoName+"2009"+znoGeoName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","106.5","108.0","110.0","112.0","114.0","116.0","118.0","120.0","122.0","124.0","126.0","128.0","130.0","131.5","133.0","135.0","136.5","138.0","139.5","141.0","142.5","144.5","145.5","147.0","148.5","150.0","151.5","153.0","154.0","155.5","157.0","158.0","159.5","160.5","162.0","163.5","164.5","165.5","167.0","168.0","169.0","170.5","171.5","172.5","173.5","174.5","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","185.0","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.0","194.0","195.0","195.5","196.0","196.5","197.0","197.5","198.0","198.5","198.5","199.0","199.5","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","a","b","b","c","a","c","d","b","d","a","b","a","d","c","a","c","d","a","c","a","d","b","c","d","b","c","c","a","d","b","c","c","a","b","a","b","d","d","c","adcb","eacd","bedc","abed","eadb","baed","ecba","ecba","becd","bcda","cabd","adcb","bcda","acdb","dcba","cdab","bdca","dcba","bdca","dabc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}
	
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		startInitialization();
	
}
