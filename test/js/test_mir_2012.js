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
/*ЗНО-2012 Всемирная История. Основной тест.*/
	if(testName==znoMir2012Main)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mir\/img\/test2012main1\/';
		testTitle = znoName+"2012"+znoMirName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		multiselection_variant=6;
		multiselection_ans_number=3;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.0","102.0","103.5","105.5","107.5","110.0","112.5","115.0","117.5","120.0","123.0","125.5","127.5","129.5","132.0","133.5","135.5","137.5","139.0","140.5","142.5","144.0","145.5","146.5","148.0","149.5","151.0","152.0","153.0","154.5","155.5","157.0","158.0","159.0","160.0","161.0","162.0","163.0","164.0","165.0","166.0","167.0","168.0","168.5","169.5","170.5","171.5","172.5","173.5","174.5","175.0","176.0","177.0","178.0","179.5","180.0","181.0","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","190.0","191.5","193.5","194.5","195.5","197.0","198.0","199.0","199.5","200.0","200.0");
		answerArray=new Array("a","d","b","c","b","a","b","c","b","a","d","c","d","b","a","b","c","d","c","c","a","d","c","a","d","c","d","b","d","a","b","c","d","a","b","c","b","d","c","b","d","a","d","b","c","d","b","c","eadb","dbac","bced","cdab","dabe","dacb","bdca","cbda","ace","abd","cef","ade");
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
