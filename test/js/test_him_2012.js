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

/*основной тест ЗНО-2012 по химии пробный тест */
	if(testName==znoHim2012Demo)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2012demo\/';
		testVariantNumber=4;
		testTitle = znoName+"2012"+znoHimName;
		testDetails=demoName;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","110.0","113.0","115.5","118.5","121.0","124.0","126.5","128.5","130.5","133.0","135.0","137.0","138.5","140.0","141.5","143.0","144.5","146.0","147.0","148.0","149.0","150.0","151.0","152.0","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","161.0","161.5","162.0","163.0","163.5","164.5","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.0","172.0","172.5","173.5","174.0","175.0","175.5","176.5","177.5","178.0","179.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","194.0","195.0","196.5","197.5","198.5","199.5","200.0","200.0");
		answerArray=new Array("b","b","c","b","b","d","d","a","c","a","a","c","a","c","b","d","c","d","b","d","b","b","c","d","a","a","d","b","a","a","c","a","c","d","a","d","d","d","c","c","cbad","baec","dcea","cedb","acdb","bacd","dacb","dabc","badc","cabd",32,25,63,8,161,10,75,80,19,15);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","ordernew","ordernew","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}
/*основной тест ЗНО-2012 по химии основной тест */
	if(testName==znoHim2012Main)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2012main1\/';
		testVariantNumber=4;
		testTitle = znoName+"2012"+znoHimName;
		testDetails=mainName;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","110.0","113.0","115.5","118.5","121.0","124.0","126.5","128.5","130.5","133.0","135.0","137.0","138.5","140.0","141.5","143.0","144.5","146.0","147.0","148.0","149.0","150.0","151.0","152.0","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","161.0","161.5","162.0","163.0","163.5","164.5","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.0","172.0","172.5","173.5","174.0","175.0","175.5","176.5","177.5","178.0","179.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","194.0","195.0","196.5","197.5","198.5","199.5","200.0","200.0");
		answerArray=new Array("d","a","a","a","b","c","c","d","c","c","a","a","d","d","d","b","c","a","c","d","a","b","c","a","b","b","d","b","b","d","b","d","c","c","a","d","a","a","c","c","cead","adcb","ceab","caed","dcba","cabd","dbca","bcda","dacb","dcab",10,353,234,112,25,18,42,150,42,6);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","ordernew","ordernew","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2);
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
