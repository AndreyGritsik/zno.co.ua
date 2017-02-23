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
//Тесты по математике
/*************************************************************/	
/*ЗНО-2007.Математика. */
	if(testName==znoMat2007Main)
	{
		testLength=38;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2007main\/';
		testTitle = znoName+"2007"+znoMatName;
		testDetails=mainName;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","115","121","125","129","132","134","137","139","141","143","145","147","149","150","152","154","155","157","158","159","161","162","163","164","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","184","185","186","187","188","189","189","190","191","192","193","193","194","195","196","196","197","198","199","199","200");
		answerArray=new Array("a","e","c","e","d","b","e","d","d","e","a","b","d","c","b","a","e","c","a","d",-5,144,-8,60,0.5,8,-3,32,4,1,2,-3,12.5,405,12,"arctg(√(11))","y=√(−x)−2:x∈(−&infin;;−16];y=2:x∈(−16;0]","a∈(0;1):x∈(−&infin;;log↓‘2’(lg(1:a)));a∈{1}:x∈Ø;a∈(1;+&infin;):x∈(√(a)-√(a-1);√(a)+√(a-1))");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,6);
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
