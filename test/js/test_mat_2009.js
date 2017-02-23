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
 /*основной тест ЗНО-2009 по математике */
	if(testName==znoMat2009Main)
	{
		testLength=33;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2009main\/';
		testTitle = znoName+"2009"+znoMatName;
		testDetails=mainName;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","106.5","114.5","122.5","129.5","135","139.5","143","146","148.5","150.5","152.5","154.5","156","157.5","159","160.5","162","163","164.5","165.5","167","168","169","170","171.5","172.5","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186","187","188","189","190","191","192","193","194","195.5","196.5","197.5","198.5","200","200");
		answerArray=new Array("c","b","d","e","c","d","a","b","a","d","c","e","d","c","b","a","e","d","e","a",64,42,-0.6,36,12,56, 7,14,0.375,0.5,"R↑«2»×tgα×√(1−tg↑«2»α×tg↑«2»φ):cosφ","1)−3;2;2)20+5:6","[1.25;+&infin;)");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,4,4,6);
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
