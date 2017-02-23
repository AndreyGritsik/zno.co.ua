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
	/*ЗНО-2011 Биология. Основной тест*/
	if(testName==znoBio2011Main)
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testTitle = znoName+"2011"+znoBioName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		testDirectory='\/test\/bio\/img\/test2011main1\/';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","104.5","106.5","108.0","110.5","112.5","115.0","117.5","120.5","123.0","125.5","128.0","130.5","132.5","135.0","137.5","139.5","142.0","144.0","146.0","148.0","150.0","152.0","154.0","156.0","157.5","159.5","161.0","162.5","164.5","166.0","167.0","168.5","170.0","171.5","172.5","174.0","175.0","176.0","177.0","178.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.0","188.0","189.0","190.0","191.0","192.0","193.0","193.5","194.5","195.5","196.5","197.5","198.0","198.5","199.0","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","c","b","a","a","c","b","b","d","a","c","b","a","d","c","c","c","d","a","b","b","b","d","b","c","c","c","d","b","b","c","d","b","a","a","c","c","b","d","c","d","b","b","c","b","b","c","b","a","a","abec","bdea","adec","eacb","eacb","debc","bdac","acdb","cdb","bdc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","componate","componate");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,3,3);
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
