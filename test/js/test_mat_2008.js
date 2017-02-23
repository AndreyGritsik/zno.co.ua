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
/*ЗНО-2008.Математика.Основной тест*/
	if(testName==znoMat2008Main)
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2008main\/';
		testTitle = znoName+"2008"+znoMatName;
		testDetails=mainName;
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","102","108","115","124","131","138","144","149","153","156","159","161","163","165","167","169","170","172","173","175","176","177","178","180","181","182","183","184","185","186","187","188","189","189","190","191","192","192","193","194","194","195","196","196","197","197","198","198","199","199","200","200","200","200","200");
		answerArray=new Array("b","b","c","d","e","c","a","b","c","e","d","e","a","b","a","c","d","e","b","a","c","b","d","a","c",6,2.5,-2,10,0.45,48,135,1.4,"arccos(1:2×√(3))","[-3;-1)U{3}","1)(-1;0)U(2;+&infin;);2)(−&infin;;−1)U(0;2);3)−32;4)+&infin;;5)Ø:(−&infin;;−32);1:{-32};2:(-32;-5)U(0;+&infin;);3:{-5}U{0};4:(-5;0)");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,4,4,6);
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
