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
/*ЗНО-2010 География. Основной тест*/
	if(testName==znoGeo2010Main)
	{
		testLength=58;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2010main1\/';
		testTitle = znoName+"2010"+znoGeoName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.5","106.0","107.5","109.5","112.0","114.5","117.0","119.5","122.5","125.0","127.5","130.5","133.0","135.5","138.0","140.5","142.5","145.0","147.5","149.5","152.0","154.0","156.0","158.0","160.0","161.5","163.5","165.5","167.0","168.5","170.0","171.5","173.0","174.5","178.5","176.0","178.5","179.5","181.0","182.0","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.0","193.0","193.5","194.5","195.0","195.5","196.5","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.0","199.5","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","d","c","b","c","c","d","c","b","a","c","c","d","b","a","a","a","b","a","b","b","c","c","d","c","b","d","b","c","a","c","b","a","b","d","b","b","a","d","a","a","c","ebcd","badc","daeb","aceb","ecba","bcae","cdba","ebcd","cdba","bcae","cadb","dcba","cdba","cdab","cadb","dbca");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","connect","connect","connect","order","order","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2);
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
