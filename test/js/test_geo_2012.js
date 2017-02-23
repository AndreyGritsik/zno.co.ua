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
/*ЗНО-2012 География. Основной тест*/
	if(testName==znoGeo2012Main)
	{
		testLength=56;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2012main1\/';
		testTitle = znoName+"2012"+znoGeoName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=3;
		juniorNumericDigits=0;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.0","105.5","107.5","109.5","112.0","114.5","117.0","119.5","122.0","124.0","126.5","128.5","130.5","132.5","134.5","136.5","138.5","140.0","142.0","143.5","145.0","146.5","148.5","150.0","151.5","153.0","154.0","155.5","157.0","158.5","159.5","161.0","162.5","164.0","165.0","166.5","167.5","169.0","170.5","171.5","173.0","174.5","175.5","177.0","178.5","179.5","181.0","182.0","183.5","185.0","186.5","187.5","188.5","190.0","191.0","192.5","193.5","194.5","195.5","196.5","197.5","198.0","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","c","b","c","d","a","b","a","a","b","c","a","c","d","c","b","d","c","d","a","b","d","d","c","b","a","a","d","c","b","c","d","c","d","a","b","a","d","a","b","a","b","bcad","deab","baed","edba","bdca","cabd","abcd","dacb","bcd","bde","cef","bce",140,230);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","multiselection","multiselection","multiselection","multiselection","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,3,3,2,2);
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
