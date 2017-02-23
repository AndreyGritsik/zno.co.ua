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
/*основной тест ЗНО-2010 по физике 1 сессия */
	if(testName==znoFiz2010Main)
	{
		testLength=37;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2010main1\/';
		testTitle = znoName+"2010"+znoFizName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","101.5","104.5","109.0","114.5","119.5","124.5","128.5","133.0","136.5","139.5","143.0","146.0","149.0","151.5","154.0","156.5","158.5","160.5","162.0","164.0","165.5","166.5","168.0","169.0","170.5","171.5","172.5","173.5","174.5","175.5","176.5","177.5","178.5","180.0","181.0","182.0","183.0","184.0","185.5","186.5","187.5","188.5","190.0","191.0","192.5","194.0","195.5","197.0","198.0","199.0","199.5","200,0");
		answerArray=new Array("c","a","c","d","a","d","c","c","a","c","d","c","d","b","b","a","a","d","d","a","a","a","d","b","c","cade","caeb",6,4,0.04,25,2.56,5,1.5,8,1.2,2);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,2,2,2,2,2,2,2,2,2,2);
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
