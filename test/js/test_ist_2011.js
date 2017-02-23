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
/*ЗНО-2011 История. Пробный тест*/
	if(testName==znoIst2011Demo)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2011demo\/';
		testTitle = znoName+"2011"+znoHstName;
		testDetails=demoName;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		multiselection_variant=6;
		multiselection_ans_number=3;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","107.0","109.0","111.5","114.5","117.0","120.0","123.0","126.0","129.0","131.5","134.5","137.0","140.0","142.5","145.0","147.0","149.5","151.5","153.5","155.5","157.5","159.0","161.0","162.5","164.0","165.5","166.5","168.0","169.5","170.5","172.0","173.0","174.0","175.0","176.0","177.5","178.5","179.5","180.5","181.5","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","190.0","190.5","191.5","192.5","193.0","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","c","d","d","c","b","a","c","d","b","d","a","c","d","a","b","c","d","c","a","d","b","a","c","c","a","d","b","c","d","a","d","b","b","a","a","d","c","d","c","b","a","d","c","b","b","c","a","bdac","daeb","dace","bedc","bdac","dcab","bdca","cbda","adf","abd","bce","cef");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","order","order","order","order","multiselection","multiselection","multiselection","multiselection");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,3,3,3,3);
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,"picture",testVariantNumber, "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}	
/*ЗНО-2011 История. Основной тест. I сессия*/
	if(testName==znoIst2011Main)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2011main1\/';
		testTitle = znoName+"2011"+znoHstName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		multiselection_variant=6;
		multiselection_ans_number=3;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","107.0","109.0","111.5","114.5","117.0","120.0","123.0","126.0","129.0","131.5","134.5","137.0","140.0","142.5","145.0","147.0","149.5","151.5","153.5","155.5","157.5","159.0","161.0","162.5","164.0","165.5","166.5","168.0","169.5","170.5","172.0","173.0","174.0","175.0","176.0","177.5","178.5","179.5","180.5","181.5","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","190.0","190.5","191.5","192.5","193.0","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","c","d","b","a","c","c","b","a","b","d","a","c","b","c","a","d","c","d","c","d","b","c","b","a","d","c","a","d","d","a","d","b","b","d","b","c","a","a","d","c","a","b","b","c","b","a","a","deab","edba","eadb","bdac","badc","cabd","cbda","dbac","acf","bce","ade","bdf");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","order","order","order","order","multiselection","multiselection","multiselection","multiselection");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,3,3,3,3);
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
