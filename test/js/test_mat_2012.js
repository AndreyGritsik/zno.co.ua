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

/*пробный тест ЗНО-2012 по математике*/
	if(testName==znoMat2012Demo)
	{
		testLength=32;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2012demo\/';
		testTitle = znoName+"2012"+znoMatName;
		testDetails=demoName;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		olderNumericDigits=4;
		gradeArray=new Array("100.0","100.5","101.5","104.0","108.5","113.0","118.0","122.5","126.5","130.5","133.5","136.5","139.5","141.5","144.0","146.0","148.5","150.0","152.0","154.0","155.5","157.0","158.5","160.0","161.5","163.0","164.0","165.5","166.5","167.5","169.0","170.0","171.5","172.5","174.0","175.5","177.0","178.5","180.0","181.5","183.5","185.0","186.5","188.5","190.0","191.5","193.5","194.5","196.5","197.0","198.5","199.0","200.0");
		answerArray=new Array("b","b","d","c","a","d","e","e","c","d","a","b","b","d","c","e","e","d","a","a","ecba","aced","edcb","abdc",-9,2.5,16,20,200,1800,121.5,1.5);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}
/*тест ЗНО-2012 по математике сессия 1*/
	if(testName==znoMat2012Main1)
	{
		testLength=32;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2012main1\/';
		testTitle = znoName+"2012"+znoMatName;
		testDetails=mainName+session1Name;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		olderNumericDigits=3;
		gradeArray=new Array("100.0","100.5","101.5","104.0","108.5","113.0","118.0","122.5","126.5","130.5","133.5","136.5","139.5","141.5","144.0","146.0","148.5","150.0","152.0","154.0","155.5","157.0","158.5","160.0","161.5","163.0","164.0","165.5","166.5","167.5","169.0","170.0","171.5","172.5","174.0","175.5","177.0","178.5","180.0","181.5","183.5","185.0","186.5","188.5","190.0","191.5","193.5","194.5","196.5","197.0","198.5","199.0","200.0");
		answerArray=new Array("a","d","c","e","d","b","e","e","c","e","b","b","d","a","a","e","a","d","e","c","aedc","eacd","acbd","ceab",94,16,-20,18,42,2.25,117,-9);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}
/*тест ЗНО-2012 по математике сессия 2*/
	if(testName==znoMat2012Main2)
	{
		testLength=32;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2012main2\/';
		testTitle = znoName+"2012"+znoMatName;
		testDetails=mainName+session2Name;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		olderNumericDigits=3;
		gradeArray=new Array("100.0","100.5","101.0","102.5","106.0","109.5","113.5","117.5","121.5","125.5","128.5","131.5","134.5","137.5","140.0","142.5","144.5","147.0","149.0","151.0","153.0","155.0","157.0","159.0","160.5","162.5","164.0","165.5","166.5","168.0","169.5","170.5","172.0","173.0","174.0","175.0","176.5","177.5","179.0","180.0","181.5","183.5","185.0","187.0","188.0","190.0","192.0","193.0","195.0","196.0","197.5","198.5","200.0");
		answerArray=new Array("d","a","e","b","a","a","b","d","c","b","d","d","c","b","e","e","d","c","a","b","acdb","eacb","aebc","cabd",53,30,-88,15,100,27.5,600,4.5);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2,2);
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
