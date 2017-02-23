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
	if(testName==znoFiz2009Main)
	{
		testLength=35;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2009main1\/';
		testTitle = znoName+"2009"+znoFizName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","103.5","108.5","114.0","120.5","127.0","133.5","139.0","144.0","148.5","152.5","156.0","159.0","162.0","164.5","166.5","168.5","170.5","172.0","173.5","175.5","177.0","178.5","179.5","181.0","182.5","184.0","185.0","186.5","187.5","188.5","190.0","190.5","191.5","192.0","193.5","194.0","195.0","196.0","197.0","197.5","198.0","199.0","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","d","b","c","b","a","d","d","d","c","a","d","b","d","b","b","b","d","c","c","d","c","d","d","bace","dbae","dbca",60,200,15,0.1,1.5,564,600);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,2,2,2,2,2,2,2);
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
