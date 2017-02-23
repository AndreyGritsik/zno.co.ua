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
/*ЗНО-2006.Математика. */
	/*if(testName=="ЗНО-2006.Математика.Основной тест")
	{
		testLength=38;
		timeCounter=135*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2006main\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","115","121","125","129","132","134","137","139","141","143","145","147","149","150","152","154","155","157","158","159","161","162","163","164","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","184","185","186","187","188","189","189","190","191","192","193","194","195","196","196","197","198","199","200");
		answerArray=new Array("d","a","e","d","d","e","c","c","b","d","b","c","c","e","a","d","a","e","d","c",-1,610,10,18,-0.8,-3,4,1.68,72,4.5,-8,3,-0.5,18,3,24,11.25,"");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,6);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*ЗНО-2007.Математика. */
	/*if(testName=="ЗНО-2007.Математика.Основной тест")
	{
		testLength=38;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2007main\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","115","121","125","129","132","134","137","139","141","143","145","147","149","150","152","154","155","157","158","159","161","162","163","164","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","184","185","186","187","188","189","189","190","191","192","193","193","194","195","196","196","197","198","199","199","200");
		answerArray=new Array("a","e","c","e","d","b","e","d","d","e","a","b","d","c","b","a","e","c","a","d",-5,144,-8,60,0.5,8,-3,32,4,1,2,-3,12.5,405,12,"arctg(√(11))","y=√(−x)−2:x∈(−&infin;;−16];y=2:x∈(−16;0]","a∈(0;1):x∈(−&infin;;log↓‘2’(lg(1:a)));a∈{1}:x∈Ø;a∈(1;+&infin;):x∈(√(a)-√(a-1);√(a)+√(a-1))");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,6);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*ЗНО-2008.Математика.Основной тест*/
	/*if(testName=="ЗНО-2008.Математика.Основной тест")
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2008main\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","102","108","115","124","131","138","144","149","153","156","159","161","163","165","167","169","170","172","173","175","176","177","178","180","181","182","183","184","185","186","187","188","189","189","190","191","192","192","193","194","194","195","196","196","197","197","198","198","199","199","200","200","200","200","200");
		answerArray=new Array("b","b","c","d","e","c","a","b","c","e","d","e","a","b","a","c","d","e","b","a","c","b","d","a","c",6,2.5,-2,10,0.45,48,135,1.4,"arccos(1:2×√(3))","[-3;-1)U{3}","1)(-1;0)U(2;+&infin;);2)(−&infin;;−1)U(0;2);3)−32;4)+&infin;;5)Ø:(−&infin;;−32);1:{-32};2:(-32;-5)U(0;+&infin;);3:{-5}U{0};4:(-5;0)");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,4,4,6);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
 /*основной тест ЗНО-2009 по математике */
	/*if(testName=="ЗНО-2009.Математика.Основной тест")
	{
		testLength=33;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2009main\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","106.5","114.5","122.5","129.5","135","139.5","143","146","148.5","150.5","152.5","154.5","156","157.5","159","160.5","162","163","164.5","165.5","167","168","169","170","171.5","172.5","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186","187","188","189","190","191","192","193","194","195.5","196.5","197.5","198.5","200","200");
		answerArray=new Array("c","b","d","e","c","d","a","b","a","d","c","e","d","c","b","a","e","d","e","a",64,42,-0.6,36,12,56, 7,14,0.375,0.5,"R↑«2»×tgα×√(1−tg↑«2»α×tg↑«2»φ):cosφ","1)−3;2;2)20+5:6","[1.25;+&infin;)");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,4,4,6);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*основной тест ЗНО-2010 по математике 1 сессия */
	/*if(testName=="ЗНО-2010 Математика. Основной тест. I сессия")
	{
		testLength=36;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2010main1\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","100.5","102","105","109.5","114.5","120","125","129","133","137","139.5","142.5","144.5","147","148.5","150.5","152","153.5","155","156.5","157.5","159","160.5","161.5","163","164","165.5","166.5","168","169","170.5","171.5","173","174","175.5","177","178","179.5","181","182.5","184","185","186.5","188","189.5","191","192.5","194","195","196.5","197.5","198.5","200");
		answerArray=new Array("e","a","c","e","b","d","b","c","a","d","e","c","a","c","a","d","a","d","b","e","b","d","d","b","e","beac","cdeb","bdae",-1.6,1.56,4,9,192,-15.75,144,-12);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*основной тест ЗНО-2010 по математике 2 сессия */
	/*if(testName=="ЗНО-2010 Математика. Основной тест. II сессия")
	{
		testLength=36;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2010main2\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		olderNumericDigits=4;
		gradeArray=new Array("100","101","104","108","113.5","119","124","128.5","133","136.5","139.5","142","144.5","147","148.5","150.5","152","154","155.5","156.5","158","159.5","160.5","162","163","164.5","165.5","166.5","168","169","170","171","172","173.5","174.5","175.5","176.5","177.5","179","180","181.5","182.5","184","185.5","186.5","188","189.5","191","192","194","195.5","197","198.5","200");
		answerArray=new Array("e","b","d","a","e","c","a","c","a","b","d","c","d","b","d","e","d","a","e","b","c","b","e","c","a","deac","bdec","daeb",20.25,1920,-7,42,13.5,3,12,-4.5);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
		
	}*/
/*основной тест ЗНО-2011 по математике*/
	/*if(testName=="ЗНО-2011 Математика. Основной тест")
	{
		testLength=35;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2011main\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100.0","100.5","103.0","107.5","113.5","120.0","126.0","131.5","136.0","140.5","144.0","147.0","150.0","152.5","154.5","156.5","158.0","159.5","161.0","162.5","164.0","165.5","166.5","168.0","169.0","170.5","171.5","173.0","174.0","175.5","176.5","177.5","178.5","180.0","181.0","182.5","183.5","184.5","186.0","187.0","188.0","189.5","190.5","191.5","192.5","194.0","195.0","196.0","197.0","198.0","199.0","200.0");
		answerArray=new Array("d","b","a","e","c","b","d","e","a","d","a","c","e","a","d","c","b","e","c","d","b","e","a","c","c","dbea","ceab","acdb",-9,18.25,2.5,7,72,27,-3.5);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*пробный тест ЗНО-2012 по математике*/
	/*if(testName=="ЗНО-2012 Математика. Пробный тест")
	{
		testLength=32;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2012demo\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		olderNumericDigits=4;
		gradeArray=new Array("100.0","100.5","101.5","104.0","108.5","113.0","118.0","122.5","126.5","130.5","133.5","136.5","139.5","141.5","144.0","146.0","148.5","150.0","152.0","154.0","155.5","157.0","158.5","160.0","161.5","163.0","164.0","165.5","166.5","167.5","169.0","170.0","171.5","172.5","174.0","175.5","177.0","178.5","180.0","181.5","183.5","185.0","186.5","188.5","190.0","191.5","193.5","194.5","196.5","197.0","198.5","199.0","200.0");
		answerArray=new Array("b","b","d","c","a","d","e","e","c","d","a","b","b","d","c","e","e","d","a","a","ecba","aced","edcb","abdc",-9,2.5,16,20,200,1800,121.5,1.5);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*тест ЗНО-2012 по математике сессия 1*/
	/*if(testName=="ЗНО-2012 Математика. Основной тест. I сессия")
	{
		testLength=32;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2012main1\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		olderNumericDigits=3;
		gradeArray=new Array("100.0","100.5","101.5","104.0","108.5","113.0","118.0","122.5","126.5","130.5","133.5","136.5","139.5","141.5","144.0","146.0","148.5","150.0","152.0","154.0","155.5","157.0","158.5","160.0","161.5","163.0","164.0","165.5","166.5","167.5","169.0","170.0","171.5","172.5","174.0","175.5","177.0","178.5","180.0","181.5","183.5","185.0","186.5","188.5","190.0","191.5","193.5","194.5","196.5","197.0","198.5","199.0","200.0");
		answerArray=new Array("a","d","c","e","d","b","e","e","c","e","b","b","d","a","a","e","a","d","e","c","aedc","eacd","acbd","ceab",94,16,-20,18,42,2.25,117,-9);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}*/
/*тест ЗНО-2012 по математике сессия 2*/
	/*if(testName=="ЗНО-2012 Математика. Основной тест. II сессия")
	{
		testLength=32;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2012main2\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		olderNumericDigits=3;
		gradeArray=new Array("100.0","100.5","101.0","102.5","106.0","109.5","113.5","117.5","121.5","125.5","128.5","131.5","134.5","137.5","140.0","142.5","144.5","147.0","149.0","151.0","153.0","155.0","157.0","159.0","160.5","162.5","164.0","165.5","166.5","168.0","169.5","170.5","172.0","173.0","174.0","175.0","176.5","177.5","179.0","180.0","181.5","183.5","185.0","187.0","188.0","190.0","192.0","193.0","195.0","196.0","197.5","198.5","200.0");
		answerArray=new Array("d","a","e","b","a","a","b","d","c","b","d","d","c","b","e","e","d","c","a","b","acdb","eacb","aebc","cabd",53,30,-88,15,100,27.5,600,4.5);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
*/
/*ЗНО-2013 Математика. Основной тест. I сессия*/
	if(testName==znoMat2013Main1)
	{
		testLength=33;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2013main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		gradeArray=new Array("100.0","100.5","102.0","105.5","110.0","115.0","120.0","124.5","129.0","133.0","136.5","139.5","142.0","144.5","146.5","148.5","150.5","152.5","154.5","156.0","158.0","160.0","161.5","163.5","165.0","166.5","168.5","170.0","171.5","173.0","174.0","175.5","176.5","178.0","179.0","180.5","181.5","183.0","184.0","185.5","186.5","187.5","189.0","190.0","191.0","192.0","193.0","194.0","195.0","196.0","197.0","198.0","198.5","199.0","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №1 ЗНО-2013 Математика. Основной тест. I сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №2 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть вираз, тотожно рівний виразу <p align=center><i>(2x + 5)·(3 – x)</i>.</p>";
			zadanieArray[1]="<i>15 + x – 2x<sup>2</sup></i>";
			zadanieArray[2]="<i>15 + x + 2x<sup>2</sup></i>";
			zadanieArray[3]="<i>15 + 6x – 2x<sup>2</sup></i>";
			zadanieArray[4]="<i>15 + 11x – 2x<sup>2</sup></i>";
			zadanieArray[5]="<i>15 + 11x + 2x<sup>2</sup></i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №3 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="Пряма <i>b</i> не має спільних точок з площиною <i>&alpha;</i>. Які з наведених тверджень є правильними?<br><br>І. Через пряму <i>b</i> можна провести лише одну площину, перпендикулярну до площини <i>&alpha;</i>.<br><br>ІІ. Через пряму <i>b</i> можна провести лише одну площину, паралельну площині <i>&alpha;</i>.<br><br>ІІІ. У площині <i>&alpha;</i> можна провести лише одну пряму, паралельну прямій <i>b</i>.";
			zadanieArray[1]="лише І";
			zadanieArray[2]="лише ІІ";
			zadanieArray[3]="лише І і ІІ";
			zadanieArray[4]="лише ІІ і ІІІ";
			zadanieArray[5]="І, ІІ і ІІІ";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №4 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=4;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="задание №4 ЗНО-2013 Математика. Основной тест. I сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №5 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №5 ЗНО-2013 Математика. Основной тест. I сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №6 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №6 ЗНО-2013 Математика. Основной тест. I сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №7 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="В арифметичній прогресії <i>(a<sub>n</sub>)</i> задано<p align=center><i>а<sub>1</sub> = 4</i>, <i>а<sub>2</sub> = –1</i></p> Укажіть формулу для знаходження n-го члена цієї прогресії.";
			zadanieArray[1]="<i>a<sub>n</sub> = – 1 + 5n</i>";
			zadanieArray[2]="<i>a<sub>n</sub> = 7 – 3n</i>";
			zadanieArray[3]="<i>a<sub>n</sub> = 5 – n</i>";
			zadanieArray[4]="<i>a<sub>n</sub> = 9 – 5n</i>";
			zadanieArray[5]="<i>a<sub>n</sub> = 9 – 5n</i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №8 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=8;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено графік функції <i>y = f (x)</i>, визначеної на проміжку [–5; 3]. Укажіть проміжок, на якому функція <i>y = f (x)</i> зростає.";
			zadanieArray[1]="[0;3]";
			zadanieArray[2]="[–1;2]";
			zadanieArray[3]="[1;3]";
			zadanieArray[4]="[–3;3]";
			zadanieArray[5]="[–5;1]";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №9 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=9;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="задание №9 ЗНО-2013 Математика. Основной тест. I сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №10 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="На діаграмі відображено нараховану фірмою загальну суму заробітної плати усім своїм працівникам у січні, лютому та березні 2011 року. У січні на фірмі працювали 15 співробітників, у лютому – 18, а в березні – 25. Як змінилася <i>середня</i> нарахована заробітна плата в цій фірмі в березні порівняно з січнем?";
			zadanieArray[1]="зменшилась більше ніж на 1000 грн";
			zadanieArray[2]="зменшилась менше ніж на 1000 грн";
			zadanieArray[3]="не змінилась";
			zadanieArray[4]="збільшилась менше ніж на 1000 грн";
			zadanieArray[5]="збільшилась більше ніж на 1000 грн";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №11 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="Знайдіть площу повної поверхні куба, діагональ якого дорівнює <i>2&radic;<span style='text-decoration:overline;'>&nbsp;3&nbsp;</span> см</i>.";
			zadanieArray[1]="8 см<sup>2</sup>";
			zadanieArray[2]="16 см<sup>2</sup>";
			zadanieArray[3]="20 см<sup>2</sup>";
			zadanieArray[4]="24 см<sup>2</sup>";
			zadanieArray[5]="36&radic;<span style='text-decoration:overline;'>&nbsp;2&nbsp;</span> см<sup>2</sup>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №12 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть проміжок, якому належить корінь рівняння <p align=center><i>&radic;<span style='text-decoration:overline;'>&nbsp;1 - x&nbsp;</span> = 4.<i></p>";
			zadanieArray[1]="(–20;–10)";
			zadanieArray[2]="(–10;–5)";
			zadanieArray[3]="(–5; 5)";
			zadanieArray[4]="(5; 10)";
			zadanieArray[5]="(10; 20)";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №13 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="У координатній площині <i>xy</i> зображено п’ять точок: <p align=center><i>O, L, N, M, K.</i></p> Коло з центром в одній із цих точок дотикається до осі ординат у точці <i>M</i>. <br>У якій точці знаходиться центр цього кола?";
			zadanieArray[1]="у точці <i>L</i>";
			zadanieArray[2]="у точці <i>N</i>";
			zadanieArray[3]="у точці <i>M</i>";
			zadanieArray[4]="у точці <i>O</i>";
			zadanieArray[5]="у точці <i>K</i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №14 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть парну функцію.";
			zadanieArray[1]="y = 4<sup>x</sup>";
			zadanieArray[2]="y = x";
			zadanieArray[3]="y = &radic;<span style='text-decoration:overline;'>&nbsp;x&nbsp;</span>";
			zadanieArray[4]="y = tg(x)";
			zadanieArray[5]="y = |x|";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №15 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Менша сторона прямокутника дорівнює 16 м і утворює з його діагоналлю кут 60&deg;. Середини всіх сторін прямокутника послідовно сполучено. Знайдіть площу утвореного чотирикутника.";
			zadanieArray[1]="64&radic;<span style='text-decoration:overline;'>&nbsp;3&nbsp;</span> м<sup>2</sup>";
			zadanieArray[2]="128&radic;<span style='text-decoration:overline;'>&nbsp;3&nbsp;</span> м<sup>2</sup>";
			zadanieArray[3]="128 м<sup>2</sup>";
			zadanieArray[4]="256 м<sup>2</sup>";
			zadanieArray[5]="256&radic;<span style='text-decoration:overline;'>&nbsp;3&nbsp;</span> м<sup>2</sup>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №16 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Розв’яжіть нерівність <p align=center><i>2<sup>x</sup> &le; 3.</i></p>";
			zadanieArray[1]="(–&infin;; log<sub>2</sub>3]";
			zadanieArray[2]="(0; log<sub>2</sub>3]";
			zadanieArray[3]="(–&infin;; 3/2]";
			zadanieArray[4]="(–&infin;; log<sub>3</sub>2]";
			zadanieArray[5]="[log<sub>2</sub>3; +&infin;)";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №17 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="Переріз кулі площиною має площу 81&Pi; см<sup>2</sup>. Знайдіть відстань від центра кулі до площини перерізу, якщо радіус кулі дорівнює 15 см.";
			zadanieArray[1]="6 см";
			zadanieArray[2]="8 см";
			zadanieArray[3]="9 см";
			zadanieArray[4]="12 см";
			zadanieArray[5]="15 см";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №18 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №18 ЗНО-2013 Математика. Основной тест. I сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №19 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Укажіть нерівність, що виконується для <br>&alpha;&isin;(&pi;/2; &pi;).";
			zadanieArray[1]="1 – sin<sup>2</sup> &alpha; < 0";
			zadanieArray[2]="cos&alpha; · tg&alpha; < 0";
			zadanieArray[3]="cos<sup>2</sup>&alpha; + sin<sup>2</sup>&alpha; < 0";
			zadanieArray[4]="1 – cos<sup>2</sup>&alpha; < 0";
			zadanieArray[5]="sin &alpha; · ctg&alpha; < 0";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №20 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="У трикутник <i>АВС</i> вписано квадрат <i>KLMN</i> (див. рисунок). Висота цього трикутника, проведена до сторони <i>АС</i>, дорівнює 6 см. Знайдіть периметр квадрата, якщо <i>АС</i> = 10 см.";
			zadanieArray[1]="7,5 см";
			zadanieArray[2]="12,5 см";
			zadanieArray[3]="17,5 см";
			zadanieArray[4]="15 см";
			zadanieArray[5]="20 см";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №21 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між фігурою (1–4) і тілом обертання (А–Д), яке утворено внаслідок обертання цієї фігури навколо прямої, зображеної пунктиром.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="dace";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №22 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="У прямокутній системі координат на площині <i>xy</i> задано точки <i>O (0; 0)</i> і <i>A (6; 8)</i>. З точки <i>A</i> на вісь <i>x</i> опущено перпендикуляр. Точка <i>B</i> – основа цього перпендикуляра. Установіть відповідність між величиною (1–4) та її числовим значенням (А–Д).";
			zadanieArray[1]="довжина вектора <i>OA</i>";
			zadanieArray[2]="відстань від точки <i>A</i> до осі <i>x</i>";
			zadanieArray[3]="ордината точки <i>B</i>";
			zadanieArray[4]="довжина радіуса кола, описаного навколо трикутника <i>OAB</i>";
			zadanieArray[5]="0";
			zadanieArray[6]="5";
			zadanieArray[7]="6";
			zadanieArray[8]="8";
			zadanieArray[9]="10";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="edab";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №23 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Дві однакові автоматичні лінії виготовляють 16 т шоколадної глазурі за 4 дні. Установіть відповідність між запитанням (1–4) та правильною відповіддю на нього (А–Д). Уважайте, що кожна лінія виготовляє однакову кількість глазурі щодня."; 
			zadanieArray[1]="Скільки тонн шоколадної глазурі дві лінії виготовляють за 3 дні?";
			zadanieArray[2]="За скільки днів одна лінія виготовить 16 т шоколадної глазурі?";
			zadanieArray[3]="Скільки тонн шоколадної глазурі виготовить одна лінія за 2 дні?";
			zadanieArray[4]="Скільки таких ліній потрібно для виготовлення 48 т шоколадної глазурі за 4 дні?";
			zadanieArray[5]="2";
			zadanieArray[6]="4";
			zadanieArray[7]="6";
			zadanieArray[8]="8";
			zadanieArray[9]="12";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="edbc";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №24 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено графік функції <i>y = f (x)</i>, визначеної на проміжку [0; 11] та диференційовної на проміжку (0; 11). Установіть відповідність між числом (1–4) та проміжком (А–Д), якому належить це число.";
			zadanieArray[1]="<i>f(8)</i>";
			zadanieArray[2]="<i>f '(7)</i>";
			zadanieArray[3]="найменше значення функції <br><i>y = f (x)</i> на її області визначення";
			zadanieArray[4]="<table style='border: 0px solid #ffffff;'><tr><td><sub>3</sub></td><td></td></tr><tr><td>&int;</td><td><i>f(x)dx</i></td></tr><tr><td><sup>1</sup></td><td></td></tr></table>";
			zadanieArray[5]="(–&infin;;–2]";
			zadanieArray[6]="(–2;–0,5]";
			zadanieArray[7]="(–0,5; 2]";
			zadanieArray[8]="(2;&nbsp;4]";
			zadanieArray[9]="(4;&nbsp;+&infin;)";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection_picture";
			answerArray[taskNumber-1]="dcab";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №25 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="Додатне число <i>А</i> більше додатного числа <i>В</i> у 3,8 раза. На скільки відсотків число <i>А</i> більше за число <i>В</i>?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=280;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №26 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №26 ЗНО-2013 Математика. Основной тест. I сессия";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]= -0.204;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №27 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №27 ЗНО-2013 Математика. Основной тест. I сессия";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]= 34;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №28 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=28;
			var zadanieArray=new Array();
			zadanieArray[0]="Знайдіть найменший додатний період функції <p align=center><i>f(x) = 9 – 6 cos(20&pi;x + 7)</i>.</p>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 0.1;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №29 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="В автобусному парку налічується <i>n</i> автобусів, шосту частину яких було обладнано інформаційними табло. Пізніше інформаційні табло встановили ще на 4 автобуси з наявних у парку. Після проведеного переобладнання навмання вибирають один з <i>n</i> автобусів парку. Ймовірність того, що це буде автобус з інформаційним табло, становить 0,25. Визначте <i>n</i>. Уважайте, що кожен автобус обладнується лише одним табло."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 48;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №30 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="План паркової зони, обмеженої трикутником <i>АВС</i>, зображено на рисунку. Дуга <i>АВ</i> – велосипедна доріжка. Відомо, що дуга <i>АВ</i> є четвертою частиною кола радіуса 1,8 км. <i>СА</i>і <i>СВ</i> – дотичні до цього кола (<i>А</i> і <i>В</i> – точки дотику). Обчисліть площу зображеної на плані паркової зони (у км<sup>2</sup>)."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= 1.62;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №31 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено графік функції <i>F(x) = x<sup>2</sup> + bx + c</i>, яка є первісною для функції <i>f (x)</i>. Визначте параметри <i>b</i> i <i>c</i>, знайдіть функцію <i>f (x)</i>. У відповіді запишіть значення <i>f (–8)</i>."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]= -22;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №32 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="Основою піраміди <i>SABCD</i> є трапеція <i>ABCD</i> (<i>AD</i> ││ <i>BC</i>), довжина середньої лінії якої дорівнює 5 см. Бічне ребро <i>SB</i> перпендикулярне до площини основи піраміди і вдвічі більше від середньої лінії трапеції <i>ABCD</i>. Знайдіть відстань від середини ребра <i>SD</i> до площини <i>SBC</i> (у см), якщо об’єм піраміди дорівнює 210 см<sup>3</sup>."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 6.3;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;			
		/*задание №33 ЗНО-2013 Математика. Основной тест. I сессия*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="Знайдіть значення параметра a, при якому корінь рівняння<p align=center>lg(sin 5πx) = &radic;<span style='text-decoration:overline;'>&nbsp;16 + a – x&nbsp;</span></p>належить проміжку (1,5 ; 2).";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= -14.3;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;			
		
		/*Завершение инициализации теста*/	
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i]);
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}/*конец ЗНО-2013 Математика. Основной тест. I сессия*/
	
/*ЗНО-2013 Математика. Основной тест. II сессия*/
	if(testName==znoMat2013Main2)
	{
		testLength=33;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2013main2\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		gradeArray=new Array("100.0","101.0","103.5","108.0","114.0","120.5","126.0","131.0","136.0","140.0","144.0","147.0","149.5","152.0","154.0","156.0","158.0","159.5","161.0","162.5","164.0","165.0","166.5","167.5","168.5","170.0","171.0","172.0","173.0","174.0","175.0","176.0","177.0","178.0","179.0","180.5","181.5","183.0","184.0","185.5","186.5","187.5","189.0","190.0","191.0","192.0","193.0","194.0","195.0","196.0","197.0","198.5","199.0","199.5","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var taskNumber=1;
		/*задание №1 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="Три промені зі спільним початком лежать в одній площині (див. рисунок). Визначте градусну міру кута <i>&gamma;</i>, <br>якщо <i>&alpha;</i> = 20&deg;, <i>&beta;</i> = 50&deg;."; 
			zadanieArray[1]="330&deg;";
			zadanieArray[2]="290&deg;";
			zadanieArray[3]="250&deg;";
			zadanieArray[4]="160&deg;";
			zadanieArray[5]="110&deg;";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №2 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="Діаграма, зображена на рисунку, містить інформацію про кількість електроенергії (у&nbsp;кВт·год), спожитої певною сім’єю в кожному місяці 2012 року. Користуючись діаграмою, установіть, які з наведених тверджень є правильними.<br><br>І. У грудні порівняно з липнем спожито електроенергії більше, ніж у 2 рази.<br>ІІ. За всі літні місяці спожито електроенергії на 150 кВт·год менше, ніж за всі весняні місяці.<br> ІІІ. Середньомісячне споживання електроенергії за рік є більшим за 120 кВт·год.";
			zadanieArray[1]="лише І";
			zadanieArray[2]="лише І і ІІ";
			zadanieArray[3]="лише І і ІІІ";
			zadanieArray[4]="лише ІІ і ІІІ";
			zadanieArray[5]="І, ІІ і ІІІ";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №3 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="Остача від ділення натурального числа <i>k</i> на 5 дорівнює 2.<br> Укажіть остачу від ділення на 5 числа <i>k + 21.</i>";
			zadanieArray[1]="0";
			zadanieArray[2]="1";
			zadanieArray[3]="2";
			zadanieArray[4]="3";
			zadanieArray[5]="4";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №4 ЗНО-2013 Математика. Основной тест. II сессия */
			taskNumber=4;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="задание №4 ЗНО-2013 Математика. Основной тест. II сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №5 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено графік неперервної функції <i>y = f (x)</i>, визначеної на відрізку [–3; 7]. <br>Скільки всього точок екстремуму має ця функція на відрізку [–3; 7]?";
			zadanieArray[1]="1";
			zadanieArray[2]="2";
			zadanieArray[3]="3";
			zadanieArray[4]="5";
			zadanieArray[5]="6";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №6 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="Які з наведених тверджень є правильними?<br><br>І. Через дві прямі, що перетинаються, можна провести лише одну площину.<br>ІІ. Через точку, що не належить площині, можна провести безліч прямих,паралельних цій площині.<br>ІІІ. Якщо дві різні площини паралельні одній і тій самій прямій, то вонипаралельні між собою.";
			zadanieArray[1]="лише І";
			zadanieArray[2]="лише І і ІІ";
			zadanieArray[3]="лише І і ІІІ";
			zadanieArray[4]="лише ІІ і ІІІ";
			zadanieArray[5]="І, ІІ і ІІІ";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №7 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="Розв’яжіть рівняння <p align=center><i>2x(x + 2) = 5(x + 2)</i>.</p>";
			zadanieArray[1]="–2,5; 2";
			zadanieArray[2]="–2";
			zadanieArray[3]="2,5";
			zadanieArray[4]="–2; 0,4";
			zadanieArray[5]="–2; 2,5";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №8 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=8;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="задание №8 ЗНО-2013 Математика. Основной тест. II сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №9 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=9;
			var zadanieArray=new Array();
			var zadanieArray=new Array();
			zadanieArray[0]="Якщо <i>x</i> + 2<i>y</i> – 6<i>z</i> = –1 і –<i>y</i> + 3<i>z</i> = 5, <br>то <i>x</i> =";
			zadanieArray[1]="9";
			zadanieArray[2]="11";
			zadanieArray[3]="4";
			zadanieArray[4]="-9";
			zadanieArray[5]="-11";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №10 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="На рисунку зображено графік <br>функції <i>y = x<sup>2</sup> – 2x</i>.<br>Укажіть графік функції <i>y = | x<sup>2</sup> –2x |</i>.";
			zadanieArray[1]="зменшилась більше ніж на 1000 грн";
			zadanieArray[2]="зменшилась менше ніж на 1000 грн";
			zadanieArray[3]="не змінилась";
			zadanieArray[4]="збільшилась менше ніж на 1000 грн";
			zadanieArray[5]="збільшилась більше ніж на 1000 грн";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText_picture";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №11 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="<div align='center'><table style='text-align:center;width:20%; border:1px solid #ffffff;'><tr><td><i>lg 25</i></td><td></td></tr><tr><td><hr></td><td>=</td></tr><tr><td><i>lg 5</i></td><td></td></tr></table></div>";
			zadanieArray[1]="lg 5";
			zadanieArray[2]="5";
			zadanieArray[3]="lg 20";
			zadanieArray[4]="2";
			zadanieArray[5]="0,5";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №12 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Сторона основи правильної чотирикутної призми дорівнює 3 см, а периметр її бічної грані&nbsp;–&nbsp;22 см.<br>Знайдіть площу бічної поверхні цієї призми.";
			zadanieArray[1]="66 см<sup>2</sup>";
			zadanieArray[2]="72 см<sup>2</sup>";
			zadanieArray[3]="96 см<sup>2</sup>";
			zadanieArray[4]="114 см<sup>2</sup>";
			zadanieArray[5]="264 см<sup>2</sup>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №13 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №13 ЗНО-2013 Математика. Основной тест. II сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №14 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №14 ЗНО-2013 Математика. Основной тест. II сессия";
			zadanieArray[1]="а";
			zadanieArray[2]="б";
			zadanieArray[3]="в";
			zadanieArray[4]="г";
			zadanieArray[5]="д";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №15 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="На координатній площині <i>ху</i> зображено коло, центр якого збігається з початком координат (див. рисунок).<br> Точки <i>K</i>(8; 6) і <i>М</i>(<i>х</i>;<i> у</i>) належать цьому колу. <br>Визначте координати точки <i>М</i>.";
			zadanieArray[1]="(–10; 0)";
			zadanieArray[2]="(10; 0)";
			zadanieArray[3]="(0; –14)";
			zadanieArray[4]="(0; –10)";
			zadanieArray[5]="(0; 10)";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №16 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="У трикутнику <i>АВС</i> точка <i>M</i> – середина сторони <i>ВС</i>, <i>АС</i> = 24 см (див. рисунок).<br> Знайдіть відстань <i>d</i> від точки <i>M</i> до сторони <i>АС</i>, якщо площа трикутника <i>АВС</i> дорівнює 96 см<sup>2.</sup>";
			zadanieArray[1]="2 см";
			zadanieArray[2]="3 см";
			zadanieArray[3]="4 см";
			zadanieArray[4]="6 см";
			zadanieArray[5]="8 см";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №17 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="Спростіть вираз <p align='center'> sin<sup>2</sup>&alpha; (1 – ctg<sup>2</sup>&alpha;).<p>";
			zadanieArray[1]="cos(2&alpha;)";
			zadanieArray[2]="tg<sup>2</sup> &alpha;";
			zadanieArray[3]="1";
			zadanieArray[4]="ctg<sup>2</sup> &alpha;";
			zadanieArray[5]="- cos(2&alpha;)";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;
		/*задание №18 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="Знайдіть похідну функції <p align='center'><i>y = e<sup>–2x</sup></i>.</p>";
			zadanieArray[1]="<i>y' = e<sup>–2x</sup></i>";
			zadanieArray[2]="<i>y' = -2e<sup>–2x</sup></i>";
			zadanieArray[3]="<i>y' = -2xe<sup>–2x-1</sup></i>";
			zadanieArray[4]="<i>y' = 2e<sup>–2x</sup></i>";
			zadanieArray[5]="<i>y' = -0,5e<sup>–2x</sup></i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №19 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Розв’яжіть нерівність <p align='center'><i>log <sub>0,4</sub> x &ge; log <sub>0,4</sub> 2</i>.</p>";
			zadanieArray[1]="(–&infin;; 2]";
			zadanieArray[2]="(0,4; 2]";
			zadanieArray[3]="(0; + &infin;)";
			zadanieArray[4]="[2; + &infin;)";
			zadanieArray[5]="(0; 2]";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №20 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="Для розігрівання в мікрохвильовій печі рідких страв використовують посудину у формі циліндра, радіус основи якого дорівнює 9&nbsp;см. Посудина ставиться на горизонтальний диск у формі круга і накривається кришкою, що має форму півсфери (див. рисунок). Радіус півсфери дорівнює 12&nbsp;см і є меншим за радіус  круга. Укажіть найбільше з наведених значень, якому може дорівнювати висота посудини, якщо посудина не торкається кришки."; 
			zadanieArray[1]="3 см";
			zadanieArray[2]="5 см";
			zadanieArray[3]="6 см";
			zadanieArray[4]="7 см";
			zadanieArray[5]="8 см";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="table_picture";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №21 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="З пунктів <i>А</i> і <i>В</i> одночасно по шосе назустріч один одному виїхали два велосипедисти. Вони їхали без зупинок зі сталими швидкостями: перший – зі швидкістю <i>х</i> км/год, другий – зі швидкістю <i>у</i> км/год (<i>х</i> > <i>у</i>). Через <i>t</i> годин (<i>t</i> > 1) вони зустрілися в точці <i>С</i> і, не зупиняючись, продовжили рух без зміни  напрямків.<br>До кожного запитання (1–4) доберіть правильну відповідь (А–Д).";
			zadanieArray[1]="На скільки кілометрів зменшилася відстань по шосе між велосипедистами через 1 годину після початку руху?";
			zadanieArray[2]="Чому дорівнює відстань по шосе між пунктами <i>А</i> і <i>В</i> (у км)?";
			zadanieArray[3]="На скільки кілометрів більше проїхав перший велосипедист, ніж другий, за час від початку руху до моменту зустрічі?";
			zadanieArray[4]="За скільки годин перший велосипедист подолає відстань по шосе від точки <i>С</i> до пункту <i>В</i>?";
			zadanieArray[5]="<i>(x&nbsp;+&nbsp;y)&nbsp;t</i>";
			zadanieArray[6]="<i>(x&nbsp;–&nbsp;y)&nbsp;t</i>";
			zadanieArray[7]="<i><table style='text-align:center; border: 1px solid #ffffff;'><tr><td style='text-decoration:underline;'>yt</td></tr><tr><td>x</td></tr></table></i>";
			zadanieArray[8]="<i><table style='text-align:center; border: 1px solid #ffffff;'><tr><td style='text-decoration:underline;'>(x-y)t</td></tr><tr><td >y</td></tr></table></i>";
			zadanieArray[9]="<i>x&nbsp;+&nbsp;y</i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="eabc";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №22 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між твердженням (1–4) та функцією (А–Д), для якої це твердження є правильним.";
			zadanieArray[1]="графік функції не перетинає жодну з осей координат";
			zadanieArray[2]="областю значень функції є проміжок (0;&nbsp;+&nbsp;&infin;)";
			zadanieArray[3]="функція спадає на всій області визначення";
			zadanieArray[4]="на відрізку [–1,5; 1,5] функція має два нулі";
			zadanieArray[5]="<i>y&nbsp;=&nbsp;–&nbsp;x&nbsp;+&nbsp;2</i>";
			zadanieArray[6]="<i>y&nbsp;=&nbsp;x<sup>2</sup>&nbsp;–&nbsp;2</i>";
			zadanieArray[7]="<i>y&nbsp;=&nbsp;-1/x</i>";
			zadanieArray[8]="<i>y&nbsp;=&nbsp;3<sup>x</sup></i>";
			zadanieArray[9]="<i>y&nbsp;=&nbsp;cos&nbsp;x</i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="cdab";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №23 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="У прямокутній системі координат на площині дано вектори <i style='text-decoration:overline;'>a</i>&nbsp;(3; 4) і <i style='text-decoration:overline;'>b</i>&nbsp;(–2; 2).<br>До кожного початку речення (1–4) доберіть його закінчення (А–Д) так, щоб утворилося правильне твердження."; 
			zadanieArray[1]="Довжина вектора <i style='text-decoration:overline;'>a</i>";
			zadanieArray[2]="Сумою векторів <i style='text-decoration:overline;'>a</i> і <i style='text-decoration:overline;'>c</i> (–3; <i>k</i>) є нульовий вектор, якщо <i>k</i>";
			zadanieArray[3]="Вектори <i style='text-decoration:overline;'>b</i> і <i style='text-decoration:overline;'>d</i> (– 4; <i>m</i>) колінеарні, якщо <i>m</i>";
			zadanieArray[4]="Скалярний добуток векторів <i style='text-decoration:overline;'>a</i> і <i style='text-decoration:overline;'>b</i>";
			zadanieArray[5]="дорівнює&nbsp;7.";
			zadanieArray[6]="дорівнює&nbsp;2.";
			zadanieArray[7]="дорівнює&nbsp;–4.";
			zadanieArray[8]="дорівнює&nbsp;5.";
			zadanieArray[9]="дорівнює&nbsp;4.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection";
			answerArray[taskNumber-1]="dceb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №24 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Установіть відповідність між тілом обертання, заданим умовою (1–4), та формулою (А–Д) для обчислення його об’єму <i>V</i>.";
			zadanieArray[1]="квадрат зі стороною <i>а</i> обертається навколо прямої, що проходить через сторону цього квадрата (рис.&nbsp;1)";
			zadanieArray[2]="прямокутний рівнобедрений трикутник із катетом <i>а</i> обертається навколо прямої, що проходить через катет цього трикутника (рис.&nbsp;2)";
			zadanieArray[3]="прямокутний рівнобедрений трикутник із катетом <i>а</i> обертається навколо прямої, що проходить через вершину гострого кута цього трикутника перпендикулярно до одного з його катетів (рис.&nbsp;3)";
			zadanieArray[4]="круг, радіус якого дорівнює <i>(3/4)а</i>, обертається навколо прямої, що проходить через центр цього круга (рис.&nbsp;4)";
			zadanieArray[5]="<i>V&nbsp;=&nbsp;(1/3)&nbsp;&pi;a<sup>3</sup></i>";
			zadanieArray[6]="<i>V&nbsp;=&nbsp;(9/16)&nbsp;&pi;a<sup>3</sup></i>";
			zadanieArray[7]="<i>V&nbsp;=&nbsp;(2/3)&nbsp;&pi;a<sup>3</sup></i>";
			zadanieArray[8]="<i>V&nbsp;=&nbsp;&pi;a<sup>3</sup></i>";
			zadanieArray[9]="<i>V&nbsp;=&nbsp;2&pi;a<sup>3</sup></i>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="connection_picture";
			answerArray[taskNumber-1]="dacb";
			taskTypeArray[taskNumber-1]="connect";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=4;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №25 ЗНО-2013 Математика. Основной тест. II сессия */
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="У магазині молодіжного одягу діє акція: при покупці будь-яких двох однакових футболок за одну з них платять на 40% менше, ніж за іншу. За дві однакові футболки, придбані в цьому магазині під час акції, Микола заплатив 200 гривень. Скільки гривень заплатить Микола, якщо він купить лише одну таку футболку?";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]=125;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №26 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Розв’яжіть рівняння <p align='center'>3 <i><sup>x</sup></i> · 4 <i><sup>x</sup></i> = (12 <sup><i>x</i>+ 1</sup>)<sup>5</sup>.</p>";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= -1.25;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №27 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="Знайдіть значення виразу | <i>y</i> – 2<i>x</i> |,<br> якщо 4<i>x</i><sup>2</sup> – 4<i>xy</i> + <i>y</i><sup>2</sup> = 2,25";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 1.5;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №28 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=28;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №28 ЗНО-2013 Математика. Основной тест. II сессия";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]= 40.5;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;
		/*задание №29 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="У прямокутний трикутник <i>АВС</i> вписано коло, яке дотикається катетів <i>АС</i> та <i>ВС</i> у точках <i>K</i> і <i>М</i> відповідно. <br>Знайдіть радіус кола, описаного навколо трикутника <i>АВС</i> (у см), якщо <i>АK</i>&nbsp;=&nbsp;4,5&nbsp;см, <i>МВ</i>&nbsp;=&nbsp;6&nbsp;см.";  
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 5.25;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №30 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="План паркової зони, обмеженої трикутником <i>АВС</i>, зображено на рисунку. Дуга <i>АВ</i> – велосипедна доріжка. Відомо, що дуга <i>АВ</i> є четвертою частиною кола радіуса 1,8 км. <i>СА</i>і <i>СВ</i> – дотичні до цього кола (<i>А</i> і <i>В</i> – точки дотику). Обчисліть площу зображеної на плані паркової зони (у км<sup>2</sup>)."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]= 12;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;	
		/*задание №31 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="У фестивалі беруть участь 25 гуртів, серед яких є по одному гурту з України і Чехії. Порядок виступу гуртів визначається жеребкуванням, за яким кожен із гуртів має однакові шанси отримати будь-який порядковий номер від 1 до 25. Знайдіть імовірність того, що на цьому фестивалі гурт з України виступатиме першим, а порядковий номер виступу гурту з Чехії буде парним."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 0.02;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;		
		/*задание №32 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="Основою піраміди є ромб, тупий кут якого дорівнює 120&deg;. Дві бічні грані піраміди, що містять сторони цього кута, перпендикулярні до площини основи, а дві інші бічні грані нахилені до площини основи під кутом 30&deg;. Знайдіть площу бічної поверхні піраміди (у&nbsp;см<sup>2</sup>), якщо її висота дорівнює 4 см.";  
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]= 96;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;			
		/*задание №33 ЗНО-2013 Математика. Основной тест. II сессия*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="задание №33 ЗНО-2013 Математика. Основной тест. II сессия";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="picture";
			answerArray[taskNumber-1]= -1.625;
			taskTypeArray[taskNumber-1]="numeric";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=2;
			variantNumberArray[taskNumber-1]=5;			
		
		/*Завершение инициализации теста*/	
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i]);
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}/*конец ЗНО-2013 Математика. Основной тест. II сессия*/
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		buildTestTable(testName,testDirectory);
		document.getElementById("ZnoGivenAnswers").innerHTML=textTasksLeft+': <!-- Счетчик ответов --><span class="GivenAnswersView" name="GivenAnswers" id="GivenAnswers"></span>';
		taskLoader(taskArray[currentTaskCounter]);
		isTestingFlag=1;
		document.getElementById("ResumeTest").innerHTML='<input type="button" value="'+textAcceptAnswer+'" name="ResumeTestButton" id="ResumeTestButton" onClick="nextTask()" />';
		/*установка счетчика времени*/
		isTestingFlag=1;
		timing();
		
	 					
	
}
