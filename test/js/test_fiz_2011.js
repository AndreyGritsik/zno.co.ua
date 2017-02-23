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
	/*основной тест ЗНО-2011 по физике 1 сессия */
	if(testName==znoFiz2011Main)
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2011main1\/';
		testTitle = znoName+"2011"+znoFizName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","102.0","105.0","109.0","114.0","119.5","125.0","130.0","135.0","140.0","144.5","149.0","153.0","157.0","160.0","163.0","165.5","168.0","170.0","171.5","173.0","174.5","176.0","177.0","178.0","179.5","180.5","181.5","182.5","183.5","185.0","186.0","187.0","188.0","189.0","190.0","191.0","192.0","193.0","194.0","195.0","196.0","196.5","197.5","198.0","198.5","198.5","199.0","199.5","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","d","b","d","a","d","d","c","b","b","d","a","c","d","a","b","c","c","c","c","b","d","b","c","aebc","ecda","dbae","cbad",0.25,0.4,1,0.4,4,0.32,7);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2);
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
