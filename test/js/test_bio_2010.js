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
//Тесты по биологии
/*************************************************************/	
	/*ЗНО-2010 Биология. Основной тест*/
	if(testName==znoBio2010Main)
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/bio\/img\/test2010main1\/';
		testTitle = znoName+"2010"+znoBioName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","109.0","112.0","115.0","118.0","121.5","124.5","128.0","131.0","134.0","137.0","140.0","142.5","145.5","148.0","150.5","152.5","155.0","157.0","159.0","161.0","162.5","164.0","165.5","167.0","168.5","170.0","171.0","172.5","173.5","174.5","175.5","177.0","178.0","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.0","186.0","187.0","188.0","188.5","189.5","190.5","191.5","192.5","193.0","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","c","b","d","b","c","b","c","c","b","b","d","c","b","d","d","a","c","b","d","c","a","c","d","b","c","a","d","b","c","d","b","c","d","b","d","b","d","a","d","a","a","c","d","a","d","b","b","c","d","beac","cdea","edac","daec","baed","dcba","cade","dbac","dacb","dabc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,2,2,2);
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
