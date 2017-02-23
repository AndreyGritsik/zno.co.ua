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
	/*основной тест ЗНО-2011 по химии 1 сессия */
	if(testName==znoHim2011Main)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2011main1\/';
		testTitle = znoName+"2011"+znoHimName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.5","105.0","107.0","110.0","113.0","116.5","120.0","123.5","126.5","129.5","132.5","135.0","137.0","139.5","141.5","143.0","144.5","146.0","147.5","148.5","149.5","150.5","151.5","152.5","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","160.5","161.0","162.0","162.5","163.5","164.0","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.5","172.5","173.0","174.0","174.5","175.5","176.0","177.0","178.0","178.5","179.5","180.5","181.0","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","190.0","190.5","191.5","192.5","193.0","194.0","194.5","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("b","d","b","b","a","d","b","a","a","b","a","c","c","a","c","b","c","c","d","b","a","a","c","d","d","b","c","c","b","d","c","d","b","b","d","cbda","eabc","ecbd","daeb","cebd","cabd","bdca","dcab","bacd","dbca","abdc","cbad","dbac","acbd","cadb",25,5,3,20,143,20,80,18,20,80);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
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
