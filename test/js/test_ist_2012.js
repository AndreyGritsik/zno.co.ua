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
//Тесты по истории
/*************************************************************/	
/*ЗНО-2012 История. Основной тест. I сессия*/
	if(testName==znoIst2012Main1)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2012main1\/';
		testTitle = znoName+"2012"+znoIstName;
		testDetails=mainName+session1Name;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		multiselection_variant=6;
		multiselection_ans_number=3;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","104.0","105.5","107.5","110.0","112.5","115.5","118.5","121.5","124.5","127.0","130.0","133.0","135.5","138.0","140.5","142.5","145.0","147.0","149.0","151.0","153.0","154.5","156.5","158.0","159.5","161.0","162.5","164.0","165.0","166.5","167.5","169.0","170.0","171.0","172.5","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.0","186.0","187.0","188.0","189.0","190.0","190.5","191.5","192.0","193.0","193.5","194.5","195.0","196.0","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("c","c","d","c","b","b","b","d","a","d","c","c","a","d","a","b","c","a","d","d","b","a","c","b","d","b","c","b","a","d","c","a","b","b","d","b","c","a","d","c","a","a","a","d","b","d","a","c","dabe","ebad","ebcd","becd","deab","cbda","badc","bdac","bde","ade","acf","bdf");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","ordernew","ordernew","ordernew","multiselection","multiselection","multiselection","multiselection");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,3,3,3,3,3,3,3);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}
/*ЗНО-2012 История. Основной тест. II сессия*/
	if(testName==znoIst2012Main2)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2012main2\/';
		testTitle = znoName+"2012"+znoIstName;
		testDetails=mainName+session2Name;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		multiselection_variant=6;
		multiselection_ans_number=3;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.5","106.0","108.0","110.0","112.5","115.0","118.0","120.5","123.5","126.0","129.0","131.5","133.5","136.0","138.0","140.5","142.5","144.0","146.0","148.0","150.0","151.5","153.0","154.5","156.0","157.5","159.0","160.5","162.0","163.0","164.5","165.5","167.0","168.0","169.5","170.5","171.5","173.0","174.0","175.0","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","189.5","190.5","191.5","192.0","193.0","194.0","194.5","195.5","196.0","196.5","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("b","a","b","b","c","c","d","a","a","b","a","c","b","a","d","b","a","c","d","c","a","c","d","c","d","b","b","d","a","c","a","a","a","d","c","d","a","d","d","c","c","b","b","d","b","b","d","c","cdab","bcea","bdae","ecba","cdab","cbda","acdb","bcda","bdf","bdf","ace","bce");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","ordernew","ordernew","ordernew","multiselection","multiselection","multiselection","multiselection");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,3,3,3,3,3,3,3);
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
