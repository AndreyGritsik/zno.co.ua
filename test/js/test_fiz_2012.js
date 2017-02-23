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
/*пробный тест ЗНО-2012 по физике  */
	if(testName==znoFiz2012Demo)
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2012demo\/';
		testTitle = znoName+"2012"+znoFizName;
		testDetails=demoName;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=4;
		gradeArray=new Array("100.0","100.5","100.5","101.0","103.0","106.5","111.5","117.0","122.5","127.5","132.5","137.5","141.5","145.0","148.5","151.5","154.0","156.5","159.0","161.0","163.0","164.5","166.5","168.0","169.5","170.5","172.0","173.5","174.5","176.0","177.5","178.5","180.0","181.0","182.5","183.5","184.5","186.0","187.5","188.5","189.5","191.0","192.0","193.0","194.5","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("a","c","b","c","b","b","c","b","a","d","a","c","d","c","d","c","c","d","b","a","d","b","d","d","b","d","dcba","ebda","dcae","abdc",5,16,4.5,45,2040,21);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}
/*основной тест ЗНО-2012 по физике  */
	if(testName==znoFiz2012Main)
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2012main1\/';
		testTitle = znoName+"2012"+znoFizName;
		testDetails=mainName;
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
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}	
	
/*Завершение инициализации тестов*/

/*Заполнение поля дано ответов*/

	startInitialization();
	
}
