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
/*основной тест ЗНО-2010 по химии 1 сессия */
	if(testName==znoHim2010Main)
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2010main1\/';
		testTitle = znoName+"2010"+znoHimName;
		testDetails=mainName;
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.0","103.5","105.0","106.5","109.0","111.5","114.0","116.5","119.0","121.5","123.5","126.0","128.0","130.0","132.0","133.5","135.5","137.0","138.5","140.0","141.5","143.0","144.0","145.5","146.5","148.0","149.0","150.0","151.0","152.0","152.5","153.5","154.5","155.0","156.0","157.0","158.0","158.5","159.5","160.0","161.0","162.0","163.0","163.5","164.5","165.5","166.5","167.5","168.0","169.0","170.0","171.0","172.0","173.0","173.5","174.5","175.5","176.5","177.0","178.0","179.0","180.0","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.0","191.0","192.0","193.0","194.0","195.0","196.0","196.5","197.5","198.5","199.0","199.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","c","a","d","d","b","b","c","a","b","d","d","c","c","b","b","c","c","d","a","c","b","b","a","a","c","b","c","b","c","b","d","b","a","eadc","cabd","ecab","badc","acbe","cbad","cadb","dbac","cbda","dabc","bcda","cabd","dbac","acdb","abdc",30,5,5,18,14,80,36,698,31,9);
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
