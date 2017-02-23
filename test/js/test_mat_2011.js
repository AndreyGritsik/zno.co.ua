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
//Тесты по математике
/*************************************************************/	
/*основной тест ЗНО-2011 по математике*/
	if(testName==znoMat2011Main)
	{
		testLength=35;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2011main\/';
		testTitle = znoName+"2011"+znoMatName;
		testDetails=mainName;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100.0","100.5","103.0","107.5","113.5","120.0","126.0","131.5","136.0","140.5","144.0","147.0","150.0","152.5","154.5","156.5","158.0","159.5","161.0","162.5","164.0","165.5","166.5","168.0","169.0","170.5","171.5","173.0","174.0","175.5","176.5","177.5","178.5","180.0","181.0","182.5","183.5","184.5","186.0","187.0","188.0","189.5","190.5","191.5","192.5","194.0","195.0","196.0","197.0","198.0","199.0","200.0");
		answerArray=new Array("d","b","a","e","c","b","d","e","a","d","a","c","e","a","d","c","b","e","c","d","b","e","a","c","c","dbea","ceab","acdb",-9,18.25,2.5,7,72,27,-3.5);
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
