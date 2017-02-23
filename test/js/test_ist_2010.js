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
/*ЗНО-2010 История. Основной тест. II сессия*/
	if(testName==znoIst2010Main2)
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2010main2\/';
		testTitle = znoName+"2010"+znoHstName;
		testDetails=mainName+session2Name;
		testVariantNumber=4;
		answerLanguage="rus";
		gradeArray=new Array("100","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101","102","103","105","108","111.5","115","118.5","122","126","129.5","132.5","135.5","139","142","144.5","147","149.5","151.5","154","156","157.5","159.5","161","163","164.5","166","167","168.5","170","171","172","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187","188","189","190","190.5","191.5","192","193","193.5","194","195","195.5","196","196.5","197","197.5","198","198.5","199","199","199.5","199.5","200","200","200","200","200","200");
		answerArray=new Array("d","a","d","b","b","a","b","d","c","d","c","a","b","d","b","a","d","a","d","b","d","c","d","c","c","a","a","b","c","a","d","c","a","b","a","c","d","b","d","a","b","d","a","c","b","a","b","c","c","c","bace","cbde","acbe","ebcd","edcb","aebd","cdba","cdab","cbad","abdc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}
/*ЗНО-2010 История. Основной тест. I сессия*/
	if(testName==znoIst2010Main1)
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2010main1\/';
		testTitle = znoName+"2010"+znoHstName;
		testDetails=mainName+session1Name;
		testVariantNumber=4;
		answerLanguage="rus";
		gradeArray=new Array("100","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101","102.5","104","106","108.5","111.5","114.5","118","121","124.5","127.5","130.5","133.5","136.5","139.5","142","144.5","147","149","151","153","155","156.5","158.5","160","161.5","163.5","164.5","166","167.5","169","170","171.5","173","174","175","176.5","177.5","178.5","180","181","182","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","193","194","194.5","195.5","196","196.5","197.5","198","198.5","198.5","199","199.5","199.5","200","200","200","200","200","200","200","200");
		answerArray=new Array("a","d","b","d","c","c","b","c","a","d","a","d","b","a","d","b","d","b","d","c","a","b","d","b","a","c","a","b","d","b","d","c","b","a","c","d","b","c","c","d","a","c","c","b","a","d","a","b","c","c","dabe","ebad","beca","badc","deab","cbde","cabd","bcad","dcba","cbda");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,2,2);
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
