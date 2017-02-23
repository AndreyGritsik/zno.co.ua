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
/*основной тест ЗНО-2010 по математике 1 сессия */
	if(testName==znoMat2010Main1)
	{
		testLength=36;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2010main1\/';
		testTitle = znoName+"2010"+znoMatName;
		testDetails=mainName+session1Name;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","100.5","102","105","109.5","114.5","120","125","129","133","137","139.5","142.5","144.5","147","148.5","150.5","152","153.5","155","156.5","157.5","159","160.5","161.5","163","164","165.5","166.5","168","169","170.5","171.5","173","174","175.5","177","178","179.5","181","182.5","184","185","186.5","188","189.5","191","192.5","194","195","196.5","197.5","198.5","200");
		answerArray=new Array("e","a","c","e","b","d","b","c","a","d","e","c","a","c","a","d","a","d","b","e","b","d","d","b","e","beac","cdeb","bdae",-1.6,1.56,4,9,192,-15.75,144,-12);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}
/*основной тест ЗНО-2010 по математике 2 сессия */
	if(testName==znoMat2010Main2)
	{
		testLength=36;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2010main2\/';
		testTitle = znoName+"2010"+znoMatName;
		testDetails=mainName+session2Name;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		olderNumericDigits=4;
		gradeArray=new Array("100","101","104","108","113.5","119","124","128.5","133","136.5","139.5","142","144.5","147","148.5","150.5","152","154","155.5","156.5","158","159.5","160.5","162","163","164.5","165.5","166.5","168","169","170","171","172","173.5","174.5","175.5","176.5","177.5","179","180","181.5","182.5","184","185.5","186.5","188","189.5","191","192","194","195.5","197","198.5","200");
		answerArray=new Array("e","b","d","a","e","c","a","c","a","b","d","c","d","b","d","e","d","a","e","b","c","b","e","c","a","deac","bdec","daeb",20.25,1920,-7,42,13.5,3,12,-4.5);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,2,2,2,2,2,2,2,2);
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
