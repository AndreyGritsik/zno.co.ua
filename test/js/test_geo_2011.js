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
/*ЗНО-2011 География. Основной тест*/
	if(testName==znoGeo2011Main)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2011main1\/';
		testTitle = znoName+"2011"+znoGeoName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=3;
		juniorNumericDigits=0;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.0","102.0","103.0","104.0","105.5","107.5","109.5","112.0","114.5","117.5","120.0","122.5","125.5","128.0","131.0","133.5","135.5","138.0","140.0","142.0","144.0","146.0","148.0","149.5","151.5","153.0","154.5","156.0","157.5","158.5","160.0","161.5","162.5","164.0","165.0","166.5","167.5","168.5","170.0","171.0","172.0","173.0","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.0","194.0","194.5","195.5","196.0","196.5","197.5","197.5","198.0","198.5","199.0","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("c","c","d","c","d","b","a","a","c","c","a","a","d","d","b","a","a","d","a","b","c","c","b","c","b","d","c","b","b","a","b","b","a","d","a","b","c","c","d","d","d","b","cdeb","bdac","acde","ebac","adbe","acdb","dabc","adcb","bcda","cdba","dbac","bcf","bcd","cef","adf","abe",18,101);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","order","order","order","multiselection","multiselection","multiselection","multiselection","multiselection","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,2,2,2,3,3,3,3,3,2,2);
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
