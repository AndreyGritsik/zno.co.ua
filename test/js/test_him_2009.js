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
//Тесты по химим
/*************************************************************/	
/*основной тест ЗНО-2009 по химии 1 сессия */
	if(testName==znoHim2009Main)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2009main1\/';
		testTitle = znoName+"2009"+znoHimName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","104.0","106.0","108.5","111.5","114.0","117.0","120.0","123.0","125.5","128.0","130.0","132.5","134.0","136.0","138.0","139.5","140.5","142.0","143.5","144.5","145.5","146.5","147.5","148.5","149.5","150.0","151.0","152.0","152.5","153.5","154.0","155.0","155.5","156.5","157.0","157.5","158.5","159.0","160.0","160.5","161.5","162.0","162.5","163.5","164.0","164.5","165.5","166.0","167.0","167.5","168.0","169.0","170.0","170.5","171.5","172.0","173.0","174.0","174.5","175.5","176.5","177.5","178.0","179.0","180.0","181.0","182.0","183.0","183.5","184.5","185.5","187.0","188.0","189.0","190.0","191.5","192.5","194.0","195.0","196.0","197.0","198.0","199.0","200.0","200.0","200.0");
		answerArray=new Array("a","d","c","a","b","a","c","d","b","a","a","b","c","b","d","d","a","b","c","c","a","c","b","a","b","b","a","d","d","b","a","c","d","b","c","cbda","ceab","bead","edca","beda","cbad","acbd","bacd","bdac","cbad","dcba","bdac","bcda","abdc","dbca",128,4,278,200,64,10,112,96,6,9);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
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
