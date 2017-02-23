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
	/*ЗНО-2009 Биология. Основной тест*/
	if(testName==znoBio2009Main)
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/bio\/img\/test2009main1\/';
		testTitle = znoName+"2009"+znoBioName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","107.5","109.5","113.0","116.0","119.5","123.0","126.0","129.5","133.0","136.0","139.0","141.5","144.5","147.0","149.0","151.5","153.5","155.5","157.0","159.0","160.5","162.0","163.5","165.0","166.5","167.5","169.0","170.0","171.5","172.5","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.0","182.0","183.0","184.0","185.0","185.5","186.5","187.0","188.0","188.5","189.5","190.5","191.0","192.0","192.5","193.5","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","b","a","b","b","a","a","b","c","d","a","b","d","a","c","b","a","b","a","b","b","c","d","d","a","a","d","b","b","a","a","c","c","b","c","b","d","c","c","a","b","b","b","d","b","c","b","d","c","c","edac","beac","cdae","eadb","beac","dbec","cedb","cadb","dbca","dbca");
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
