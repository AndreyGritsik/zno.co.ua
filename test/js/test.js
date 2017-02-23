// JavaScript Document
/* Глобальные переменные */
/*Длительность теста в секундах*/
var testTime=0;
/*Счетчик времени в секундах*/
var timeCounter=0;
/*переменная для управления таймером*/
var timer;
/*Счетчик общего числа ответов*/
var answerCounter=0;
/*Счетчик правильных ответов */
var correctAnswerCounter=0;
/*Счетчик пропущенных заданий*/
var passCounter =0;
/*Счетчик длины теста */
var testLength=0;
/*Счетчик номера задания в  тесте*/
var currentTaskCounter=-1;
/*Флаг инициализации теста 0-инициализировать тест, 1-прохождение текущего теста */
var isTestingFlag=0;
/*Массив тестовых объектов */
var taskArray=new Array();
/*Создание объекта высплывающей подсказки*/
var advise=new helper();
/*массив баллов ЗНО*/
var gradeArray=new Array();
/*Колличество вариантов ответов в тесте соответсвия*/
var connectVariantNumber=5;
/*Оптимальное колличество слов в сочинении*/
var optimalWordNumber=200;
/*Минимальное количество слов в сочинении, которое подлежит оценке*/
var minWordNumber=100;
/*Колличество вариантов ответов в тесте по умолчанию*/
var testVariantNumber=5;
/*Массив количества вариантов ответов в тестах*/
var variantNumberArray=null;
/*Массив текстов для анализа*/
var textAnalysisArray=null;
/*Язык вариантов ответов: rus/eng */
var answerLanguage="eng";
/*Название теста*/
var testOficialTitle;
/*Путь к папке с файлами теста*/
var testDirectory;
/*Колличество групп в тесте на классификацию*/
var componateVariantNumber=3;
/*Количество вариантов ответов во множественном віборе*/
var multiselection_variant=6;
/*Количество доступніх  ответов во множественном віборе*/
var multiselection_ans_number=3;
/*Смещение окна просмотра полного текста по горизонтали*/
var fullTextWindowHorizontalOffset=130;
/*Смещение окна просмотра полного текста по вертикали*/
var fullTextWindowVerticalOffset=200;
/*Колличество целых разрядов в числовом ответе*/
var olderNumericDigits=3;
/*Колличество десятичных разрядов в числовом ответе*/
var juniorNumericDigits=3;
/*Содержит ли числовой ответ знак */
var isSignedNumeric=true;
/*объект для вывода высплывающей подсказки */

function helper()
{
 this.show=function(text,x,y)
 {
  var div=document.createElement("div");
  div.className="context";
  div.id="pomosh";
  div.innerHTML=text;
  div.style.left=(x+30)+"px";
  div.style.top=(y+30)+"px";
  div.width="50px";
  div.height="100px";
  document.body.appendChild(div);
 }
 this.hide=function()
 {
  var pomosh=document.getElementById("pomosh");
  pomosh.parentNode.removeChild(pomosh);
 }
}//end of helper()
/*Функция подсчета слов в поле ввода текста и их показа в поле WordCounter*/
function checkWordNumber()
{
	var tvir=document.getElementById("TvirText");
	var wordNumber=0;
	if(tvir.value.length>0)
	{
		var lastChar=tvir.value.charCodeAt(tvir.value.length-1);
		if (!(((lastChar>=48)&&(lastChar<=57))||((lastChar>=65)&&(lastChar<=90))||((lastChar>=97)&&(lastChar<=122))||((lastChar>=1072)&&(lastChar<=1103))||((lastChar>=1040)&&(lastChar<=1071))))
		{
			for(i=1;i<tvir.value.length;i++)
			{
				if ((tvir.value[i]=="&#32;")||(tvir.value[i]=="&#09;")||(tvir.value[i]=="&#10;")||(tvir.value[i]==" "))
				{
					if (!((tvir.value[i-1]=="&#32;")||(tvir.value[i-1]=="&#09;")||(tvir.value[i-1]=="&#10;")||(tvir.value[i-1]==" ")))
					{
					wordNumber++;
					}
				}
			}
			wordNumber++;
			document.getElementById("WordCounter").innerHTML="Колличество введенных слов: "+wordNumber;
        	taskArray[currentTaskCounter].userAnswer=wordNumber+1;
		}
	}
	else
	{
		document.getElementById("WordCounter").innerHTML="Колличество введенных слов: "+wordNumber;
        taskArray[currentTaskCounter].userAnswer=wordNumber;
	}
}// end of checkWordNumber()
/*функция увеличения изображения задания*/
function imageIncrease()
{
  if(currentTaskCounter!=-1)
  {
  var div=document.createElement("div");
  var tsk=taskArray[currentTaskCounter];
  div.className="bigImageDivView";
  div.id="bigImage";
  div.style.left=(document.getElementById('Task').offsetLeft-150)+"px";
  div.style.top=(document.getElementById('Task').offsetTop-75)+"px";
  div.style.position="absolute";
  div.width=805;
  div.height=435;
  document.body.appendChild(div);
  var tip=document.createElement("div");
	tip.innerHTML="Щелкните на картинке для уменьшения";
	tip.align="center";
	tip.textAlign="center";
	tip.id="BigTaskTip";
	tip.name="BigTaskTip";
	tip.width=500;
	tip.height=20;
  var backLink=document.createElement("a");
	backLink.href="javascript:imageDecrease()";
	backLink.id="bkLink";
	backLink.name="bkLink";
	document.getElementById("bigImage").appendChild(backLink);
	document.getElementById("bkLink").appendChild(tsk.bigImg);
	document.getElementById("bkLink").appendChild(tip);
    
  }
}// end of imageIncrease()

function imageDecrease()
{
	var bigImage=document.getElementById("bigImage");
	bigImage.parentNode.removeChild(bigImage);
}// end of imageDecrease()
/*Функция для  просмотра полного текста*/
function showFullText()
{
 var div=document.createElement("div");
  var tsk=taskArray[currentTaskCounter];
  div.className="fullTextDivView";
  div.id="fullText";
  div.style.left=(document.getElementById('Task').offsetLeft+fullTextWindowHorizontalOffset)+"px";
  div.style.top=(document.getElementById('Task').offsetTop+fullTextWindowVerticalOffset)+"px";
  div.style.position="absolute";
  div.width=805;
  div.height=435;
  document.body.appendChild(div);
  var tip=document.createElement("div");
	tip.innerHTML="Закрыть";
	tip.align="center";
	tip.textAlign="center";
	tip.id="FullTextTip";
	tip.name="FullTextTip";
	tip.width=500;
	tip.height=20;
  var backLink=document.createElement("a");
	backLink.href="javascript:hideFullText()";
	backLink.id="bkLink";
	backLink.name="bkLink";
	document.getElementById("fullText").appendChild(tsk.textDiv);
	document.getElementById("fullText").appendChild(backLink);
	document.getElementById("bkLink").appendChild(tip);
}// end of showFullText()
/*Функция для  закрытия полного текста*/
function hideFullText()
{
	var fullText=document.getElementById("fullText");
	fullText.parentNode.removeChild(fullText);
} //end of hideFullText()
/*Конструктор объектов типа "Тест", параметры инициализации: название теста, порядковый номер, тип (test,numeric,free),балл за правильный ответ, путь к каталогу с изображениями заданий (500*250 пикс), ответ */

function task(initTitle,initNumber,initType,initMark,initPath,initAnswer)
{
	this.title=initTitle;
	this.number=initNumber;
	this.type=initType;
	this.path=initPath;
	if(this.type=="numeric")
	{
	this.answer=1000*initAnswer;
	}
	else
	{
	this.answer=initAnswer;	
	}
	this.picture=this.path+"task"+this.number+".gif"; /*задание местоположения изображения 500*250 с условием теста*/
	this.bigPicture=this.path+"task"+this.number+".gif";
	this.userAnswer="pass";                               /*пользовательский ответ на задание теста*/
	this.isCorrectAnswer=false;						  /*флаг правильности ответа */
	this.mark=initMark;                               /* балл за правильный ответ*/
	this.userMark=0;								   /* балл пользователя*/
	/*создание рисунка с условием задания размером 500*250 */
	this.img=document.createElement("img");
	this.img.src=this.picture;
	this.img.height=250;
	this.img.width=500;
	this.img.align="center";
	this.img.alt=this.title+" Задание "+this.number;
	this.img.title=this.title+" Задание "+this.number;
	this.img.id="TaskImg";
	this.img.name="TaskImg";	
	/*создание рисунка с условием задания размером 800*400 */
	this.bigImg=document.createElement("img");
	this.bigImg.src=this.bigPicture;
	this.bigImg.height=400;
	this.bigImg.width=800;
	this.bigImg.align="center";
	this.bigImg.alt=this.title+" Задание "+this.number;
	this.bigImg.title=this.title+" Задание "+this.number;
	/*создание текстового поля для типа textanalysis*/
	if((this.type=="textanalysis")||(this.type=="textual"))
	{
	this.textDiv=document.createElement("textarea");
	this.textDiv.value=textAnalysisArray[this.number-1];
	this.textDiv.cols=35;
	this.textDiv.rows=18;
	this.textDiv.align="center";
	this.textDiv.id="FullTextArea";
	this.textDiv.name="FullTextArea";
	this.textDiv.disabled="true";
	}
	
	/*метод вычисления правильности тестовых отетов */
	this.checkTestAns=function()
	{
	   this.userAnswer="_";
			if(document.getElementById("VariantA")!=null)
			{
				if(document.getElementById("VariantA").checked==true)
				{
				this.userAnswer=document.getElementById("VariantA").value;
				}
			}
			if(document.getElementById("VariantB")!=null)
			{
				if(document.getElementById("VariantB").checked==true)
				{
				this.userAnswer=document.getElementById("VariantB").value;
				}
			}
			if(document.getElementById("VariantC")!=null)
			{
				if(document.getElementById("VariantC").checked==true)
				{
				this.userAnswer=document.getElementById("VariantC").value;
				}
			}
			if(document.getElementById("VariantD")!=null)
			{
				if(document.getElementById("VariantD").checked==true)
				{
				this.userAnswer=document.getElementById("VariantD").value;
				}
			}
			if(document.getElementById("VariantE")!=null)
			{
		    	if(document.getElementById("VariantE").checked==true)
				{
				this.userAnswer=document.getElementById("VariantE").value;
				}
			}
			if(document.getElementById("VariantF")!=null)
			{
		    	if(document.getElementById("VariantF").checked==true)
				{
				this.userAnswer=document.getElementById("VariantF").value;
				}
			}
			if(document.getElementById("VariantG")!=null)
			{
		    	if(document.getElementById("VariantG").checked==true)
				{
				this.userAnswer=document.getElementById("VariantG").value;
				}
			}
			if(document.getElementById("VariantH")!=null)
			{
		    	if(document.getElementById("VariantH").checked==true)
				{
				this.userAnswer=document.getElementById("VariantH").value;
				}
			}
			if(document.getElementById("VariantI")!=null)
			{
		    	if(document.getElementById("VariantI").checked==true)
				{
				this.userAnswer=document.getElementById("VariantI").value;
				}
			}
			if(document.getElementById("VariantJ")!=null)
			{
		    	if(document.getElementById("VariantJ").checked==true)
				{
				this.userAnswer=document.getElementById("VariantJ").value;
				}
			}
		//оценка правильности ответа
		if (this.userAnswer==this.answer)
			{
			 	this.userMark=this.mark;
				this.isCorrectAnswer=true;
			}
	}//end of this.checkTest()
	/*метод вычисления правильности численных ответов отетов */
	this.checkNumeric=function()
	{ 
	  /*считываем не пустые поля с введенными цифрами и преобразуем в число */
			var numAns=0;
			if (document.getElementById("NumberAnswer1000")!=null)
			{										
				if (document.getElementById("NumberAnswer1000").value!="")
				{
				numAns+=1000000*(1*document.getElementById("NumberAnswer1000").value);
				}
			}
			if (document.getElementById("NumberAnswer100")!=null)
			{	
				if (document.getElementById("NumberAnswer100").value!="")
				{
				numAns+=100000*(1*document.getElementById("NumberAnswer100").value);
				}
			}
			if (document.getElementById("NumberAnswer10")!=null)
			{
				if (document.getElementById("NumberAnswer10").value!="")
				{
				numAns+=10000*(1*document.getElementById("NumberAnswer10").value);
				}
			}
			if (document.getElementById("NumberAnswer1")!=null)
			{	
				if (document.getElementById("NumberAnswer1").value!="")
				{
				numAns+=1000*(1*document.getElementById("NumberAnswer1").value);
				}
			}
			if (document.getElementById("NumberAnswer01")!=null)
			{
				if (document.getElementById("NumberAnswer01").value!="")
				{
				numAns+=100*(1*document.getElementById("NumberAnswer01").value);
				}
			}
			if (document.getElementById("NumberAnswer001")!=null)
			{	
				if (document.getElementById("NumberAnswer001").value!="")
				{
				numAns+=10*(1*document.getElementById("NumberAnswer001").value);
				}
			}
			if (document.getElementById("NumberAnswer0001")!=null)
			{
				if (document.getElementById("NumberAnswer0001").value!="")
				{
				numAns+=(1*document.getElementById("NumberAnswer0001").value);
				}
			}
			if (document.getElementById("AnswerSign")!=null)
			{
				if(document.getElementById("AnswerSign").value=="negative")
				{
					numAns*=-1;
				}
			}
			this.userAnswer=numAns;
		//оценка правильности ответа
		if (this.userAnswer==this.answer)
			{
			 	this.userMark=this.mark;
				this.isCorrectAnswer=true;
			}
	}// end of this.checkNumeric()
	/*метод вычисления правильности ответов сопоставления и упорядочивания*/
	this.checkConnect=function()
	{
		if(document.getElementById("connect1").value!="")
				{
				this.userAnswer=document.getElementById("connect1").value;
				}
		else
				{
					this.userAnswer="_";
				}
			
		for (i=2;i<this.answer.length+1;i++)
			{
				if(document.getElementById("connect"+i).value!="")
				{
				this.userAnswer+=document.getElementById("connect"+i).value;
				}
				else
				{
					this.userAnswer+="_";
				}
			}
		//оценка правильности ответов
		for (i=0;i<this.answer.length;i++)
		{
			if (this.userAnswer[i]==this.answer[i])
			{
				this.userMark+=1;
				this.isCorrectAnswer=true;
			}
		}
	}//end of this.checkConnect()
	/*метод вычисления правильности ответов упорядочивания*/
	this.checkOrder=function()
	{
		if(document.getElementById("connect1").value!="")
				{
				this.userAnswer=document.getElementById("connect1").value;
				}
		else
				{
					this.userAnswer="_";
				}
			
		for (i=2;i<this.answer.length+1;i++)
			{
				if(document.getElementById("connect"+i).value!="")
				{
				this.userAnswer+=document.getElementById("connect"+i).value;
				}
				else
				{
					this.userAnswer+="_";
				}
			}
		//оценка правильности ответов
		if (this.userAnswer==this.answer)
			{
				this.userMark=this.mark;
				this.isCorrectAnswer=true;
			}
		
	}//end of this.checkOrder()
/*Прогрессивный метод вычисления правильности ответов упорядочивания: все правильно - 3 балла, правильно 1-е и последнее событие - 2 балла; правильно 1-е или последнее событие - 1 бал*/	
	this.checkOrderNew=function()
	{
		if(document.getElementById("connect1").value!="")
				{
				this.userAnswer=document.getElementById("connect1").value;
				}
		else
				{
					this.userAnswer="_";
				}
			
		for (i=2;i<this.answer.length+1;i++)
			{
				if(document.getElementById("connect"+i).value!="")
				{
				this.userAnswer+=document.getElementById("connect"+i).value;
				}
				else
				{
					this.userAnswer+="_";
				}
			}
		//оценка правильности ответов
		if (this.userAnswer==this.answer)
			{
				this.userMark=this.mark;
				this.isCorrectAnswer=true;
							}
		else
			{
			if ((this.userAnswer[0]==this.answer[0])&&(this.userAnswer[this.answer.length-1]==this.answer[this.answer.length-1]))
				{
				this.userMark=2*(this.mark)/3;
				this.isCorrectAnswer=true;
				}
			else
				{
				 if ((this.userAnswer[0]==this.answer[0])||(this.userAnswer[this.answer.length-1]==this.answer[this.answer.length-1]))
					{
					this.userMark=(this.mark)/3;
					this.isCorrectAnswer=true;
					}
				}
			}
		
	}//end of this.checkOrderNew()
	/*метод вычисления правильности ответов в свободной форме*/
	this.checkFree=function()
	{
	  this.userAnswer=document.getElementById("FreeAnswerText").value;
	  if(this.userAnswer[this.userAnswer.length-1]==";")
			{
				this.userAnswer=this.userAnswer.substr(0,this.userAnswer.length-1);
			}
		//Оценка правильности ответа
		if (this.userAnswer==this.answer)
		{
		 	this.userMark=this.mark;
			this.isCorrectAnswer=true;
		}
	}//end of this.checkFree()
	/*метод вычисления правильности сочинения*/
	this.checkTvir=function()
	{
		if (this.userAnswer<=optimalWordNumber)
			{
				if (this.userAnswer>minWordNumber)
				{
				this.userMark=Math.round(this.mark*(1-(optimalWordNumber-this.userAnswer)/(optimalWordNumber-minWordNumber))); 
				}
				else
				{
				 this.userMark=0;
				}
			}
			else
			{
			 this.userMark=Math.round(this.mark*Math.exp((optimalWordNumber-this.userAnswer)/optimalWordNumber));	
			}
			this.isCorrectAnswer=true;
	}//end of this.checkTvir()
	/*метод вычисления правильности заполнения текстового поля*/
	this.checkTextual=function()
	{
	 	isCorrect=false;
		this.userAnswer=document.getElementById("TextualField").value;
		for(i=0;i<this.answer.length;i++)
		{
			 if (this.answer[i]==this.userAnswer)
			 {
			  isCorrect=true;
			 }
		}
		if (isCorrect==true)
		{
			 this.isCorrectAnswer=true;
			 this.userMark=this.mark;
		}
	}//end of this.checkTextual()
	/*метод вычисления правильности заполнения теста на класификацию*/
	this.checkComponate=function()
	{
		this.userAnswer="";
		 for (i=1;i<4;i++)
		 {
			if(document.getElementById("NumberAnswer"+i).value!="")
			{
			this.userAnswer+=String.fromCharCode(96+1*document.getElementById("NumberAnswer"+i).value);
			}
			else
			{
			 this.userAnswer+="_";
			}
		 }
		//Оценка правильности ответа
		for (i=0;i<this.answer.length;i++)
		{
			if (this.userAnswer[i]==this.answer[i])
			{
				this.userMark+=1;
				this.isCorrectAnswer=true;
			}
		}
	}// end of this.checkComponate()
	/*метод вычисления правильности заполнения теста на класификацию*/
	this.checkMultiselection=function()
	{
		if(document.getElementById("connect1").value!="")
		{
			this.userAnswer=document.getElementById("connect1").value;
		}
		else
		{
			this.userAnswer="_";
		}
			
		for (i=2;i<multiselection_ans_number+1;i++)
		{
			if(document.getElementById("connect"+i).value!="")
			{
				this.userAnswer+=document.getElementById("connect"+i).value;
			}
			else
			{
				this.userAnswer+="_";
			}
		}
		var ansArr=new Array();
		for(i=0;i<multiselection_ans_number;i++)
		{
			ansArr[i]=this.userAnswer[i];
		}
		this.userAnswer="";
		ansArr.sort();
		var flag=0;
		for(i=0;i<multiselection_ans_number;i++)
		{
			this.userAnswer+=ansArr[i];
			for (j=flag;j<multiselection_ans_number;j++)
			{
			  if (this.answer[j]==ansArr[i])
			  {
			   this.userMark+=1;
			   this.isCorrectAnswer=true;
			   flag=j+1;
			  }
			}
		}
	}//end of this.checkMultiselection()
	/*метод для вычисления правильности ответа пользователя */
	this.checkAnswer=function()
	{
	/*Считывание и оценка ответа пользователя */
		switch (this.type)
		{
		 case "test":
					this.checkTestAns();
					break;
		 case "textanalysis":
					this.checkTestAns();
					break;
		 case "textual":
					this.checkTextual();
					break;
		 case "numeric":
					this.checkNumeric();
					break;
		 case "connect":
					this.checkConnect();
					break;
		 case "order":
					this.checkOrder();
					break;
		 case "ordernew":
					this.checkOrderNew();
					break;			
		 case "free":
					this.checkFree();
					break;	
		 case "tvir":
					this.checkTvir();
					break;
		 case "componate":
					this.checkComponate();
					break;
		 case "multiselection":
					this.checkMultiselection();
					break;			
		 default:
					alert('Задан неверный тип теста!');
					break;
		}
	
		
	}//end of this.checkAnswer()
	//
}//end of Task constructor

	


/*Функция загрузки данных теста в форму*/
function taskLoader(curTask)
{
	var tImage=document.getElementById("TaskImg");
	currentTaskCounter=curTask.number-1;
	if (document.getElementById("TaskTip")!=null)
	{
		var tTip=document.getElementById("TaskTip");
		tTip.parentNode.removeChild(tTip);
	}
    tImage.parentNode.removeChild(tImage);
	/*Создание подсказки под рисунком*/
	var tTip=document.createElement("div");
	tTip.innerHTML="Щелкните на картинке для увеличения";
	tTip.align="center";
	tTip.textAlign="center";
	tTip.id="TaskTip";
	tTip.name="TaskTip";
	tTip.width=500;
	tTip.height=20;
	document.getElementById("Task").appendChild(curTask.img);
	document.getElementById("Task").appendChild(tTip);
	/*Построение выпадающего списка с номерами вариантов не отвеченных тестов*/
		var selectHTML="<div id='selectTask'-->К заданию № <select id='selectTaskNumber' size='3' onclick='nexTaskByNumber()'>";
		var listCounter=0;
		for(i=0;i<testLength;i++)
		{
			if((taskArray[i].userAnswer=="")||(taskArray[i].userAnswer=="pass"))
			{
			  listCounter++;
			  if(i==curTask.number-1)
			   {
				selectHTML+="<option selected value="+i+">"+(i+1)+"</option>"; 
			   }
			   else
			   {
				selectHTML+="<option value='"+i+"'>"+(i+1)+"</option>"; 	
			   }
			}
		}
		selectHTML+="</select></div>";
		if(listCounter==0) 
		{selectHTML="";}
	document.getElementById("ZnoTaskNumber").innerHTML='Номер задания:<!-- счетчик номера задания --><span class="TaskNumberView" id="TaskNumber" name="TaskNumberCounter"> '+curTask.number+'</span>'+selectHTML+'</td>';
	document.getElementById("GivenAnswers").innerHTML=testLength-answerCounter;
	/*построение строки ответов для тестов разных типов*/
	switch(curTask.type)
	{
		case "test": buildTest(answerLanguage); break;
		case "textanalysis": buildTextAnalysis(answerLanguage);break;
		case "numeric": buildNumeric(isSignedNumeric,olderNumericDigits,juniorNumericDigits); break;
		case "connect": buildConnect(curTask.answer.length); break;
		case "order": buildOrder(curTask.answer.length); break;
		case "ordernew": buildOrder(curTask.answer.length); break;
		case "free": buildFree(); break;
		case "tvir": buildTvir(); break;
		case "textual": buildTextual(); break;
		case "componate": buildComponate(curTask.answer.length);break;
		case "multiselection": buildMultiselection(multiselection_ans_number,multiselection_variant);break;
		default: alert("Задан неверный тип тестового задания!"); break;
	}	
}
/*функция которая считывает введенные пользователем данные и переходит к следующему неотвеченному тесту*/
function nexTaskByNumber()
{
	var curTask=taskArray[currentTaskCounter];
	//curTask.checkAnswer();
        //answerCounter+=1;
	currentTaskCounter=document.getElementById("selectTaskNumber").value;
	taskLoader(taskArray[currentTaskCounter]);
}
/*функция которая считывает введенные пользователем данные и переходит к следующему неотвеченному тесту*/
function nextTask()
{
	 var curTask=taskArray[currentTaskCounter];
	 /*Считывание ответов пользователя*/
	 	curTask.checkAnswer();
		answerCounter+=1;
		if(findNextTask()==true)
		{
		taskLoader(taskArray[currentTaskCounter]);
		}
		else
		{
			resultReport();
		}
}
/*функция поиска следующего неотвечного вопроса при нажатии кнопки "пропустить" */
function userPass()
{
	if(findNextTask()==true)
		{
		taskLoader(taskArray[currentTaskCounter]);
		}
		else
		{
			resultReport();
		}
}
/*Функция поиска следующего неотвеченного теста*/
function findNextTask()
{
	
	var nextPos=currentTaskCounter;
	/*Счетчик пройденных элементов массива ответов*/
	var passNumber=0;
	/*флаг завершения прохода массива*/
	var isOver=false;
	/*флаг проверки - все ли задания отвечены*/
	var isAllAnswered=false;
	while (isOver==false)
	{
		nextPos+=1;
		passNumber+=1;
		/*проверка не вышли ли за пределы массива если да, то переходим на нулевую позицию*/
		if(nextPos>(taskArray.length-1))
		{
			nextPos=0;
		}
		/*Во избежание зацикивания проверяем не идем ли мы по кругу второй раз - если да то все вопросы отвечены - вывод результатов теста*/
		if(passNumber>taskArray.length)
		{
			isAllAnswered=true;
			isOver=true;
		}
		var nextTask=taskArray[nextPos];
		if (nextTask.userAnswer=="pass")
		{
			isOver=true;
		}
		
	}/*while end*/
	if(isAllAnswered==true)
	{
		return false;
	}
	else
	{
		currentTaskCounter=nextPos;
		document.getElementById("PassAnswerButton").focus();
		return true;
	}
}
/*функция подсчета и вывода результатов*/
function resultReport()
{
	clearTimeout();
	isTestingFlag=0;
	buildResultTable(testOficialTitle);
	/*Подсчет статистики теста*/
	var totalAnswer=0;
	var totalPass=0;
	var totalCorrectAnswer=0;
	var totalMark=0;
	var userTotalMark=0;
	var correctAnswerText="";
	var nonCorrectAnswerText="";
	var passAnswerText="";
	for (var i=0; i<testLength; i++)
		{
			totalMark+=1*taskArray[i].mark;
			userTotalMark+=1*taskArray[i].userMark;
			if(taskArray[i].userAnswer!="pass")
			{
				totalAnswer+=1;
				if(taskArray[i].isCorrectAnswer==true)
				{
					totalCorrectAnswer+=1;
					correctAnswerText+='№ '+taskArray[i].number+' (+'+taskArray[i].userMark+' бал.)<br/>';
				}
				else
				{
					nonCorrectAnswerText+=taskArray[i].number+"<br/>";
				}
			}
			else
			{
				 totalPass+=1;
				 passAnswerText+=taskArray[i].number+"<br/>";
			}
	
		}
	if(totalCorrectAnswer>0)
	{
	 correctAnswerText+='<hr/>';
	}
	document.getElementById("ZnoResultTotalAnswerNumber").innerHTML=totalAnswer;
	document.getElementById("ZnoResultPassedNumber").innerHTML=totalPass;
	document.getElementById("ZnoResultCorrectAnswerNumber").innerHTML=correctAnswerText+totalCorrectAnswer+" правильных ответов<br/>"+userTotalMark+" из "+totalMark+" баллов</br>Набрано "+Math.round(userTotalMark/totalMark*100)+"% баллов";
	/*цвет балла ЗНО в зависимости от колличества набранных баллов*/
	if((gradeArray[userTotalMark]>=100)&&(gradeArray[userTotalMark]<=112.5))
	{document.getElementById("ZnoResultGradeNumber").style.color="black";}
	if((gradeArray[userTotalMark]>=112.6)&&(gradeArray[userTotalMark]<=125))
	{document.getElementById("ZnoResultGradeNumber").style.color="darkviolet";}
	if((gradeArray[userTotalMark]>=125.1)&&(gradeArray[userTotalMark]<=137.5))
	{document.getElementById("ZnoResultGradeNumber").style.color="navy";}
	if((gradeArray[userTotalMark]>=137.6)&&(gradeArray[userTotalMark]<=150))
	{document.getElementById("ZnoResultGradeNumber").style.color="royalblue";}
	if((gradeArray[userTotalMark]>=150.1)&&(gradeArray[userTotalMark]<=162.5))
	{document.getElementById("ZnoResultGradeNumber").style.color="green";}
	if((gradeArray[userTotalMark]>=162.6)&&(gradeArray[userTotalMark]<=175))
	{document.getElementById("ZnoResultGradeNumber").style.color="goldenrod";}
	if((gradeArray[userTotalMark]>=175.1)&&(gradeArray[userTotalMark]<=187.5))
	{document.getElementById("ZnoResultGradeNumber").style.color="darkorange";}
	if((gradeArray[userTotalMark]>=187.6)&&(gradeArray[userTotalMark]<=200))
	{document.getElementById("ZnoResultGradeNumber").style.color="red";}
	document.getElementById("ZnoResultGradeNumber").innerHTML=gradeArray[userTotalMark];
	document.getElementById("ZnoResultTimeNumber").innerHTML=Math.floor((testTime-timeCounter)/60);
	document.getElementById("ZnoResultPoorAnswerDetail").innerHTML=nonCorrectAnswerText;
	document.getElementById("ZnoResultPassedAnswerDetail").innerHTML=passAnswerText;
}
/*Функция отслеживания времени теста*/
function timing()
{
	 if(isTestingFlag==1)
	 {
	 	if (timeCounter==0)
	 	{
		 alert("Время теста истекло! Ознакомьтесь с результатами");
		clearTimeout();
		 resultReport();
	 	}
	 	else
	 	{
	 		if (timeCounter<300)
	 		{
		 	document.getElementById("ZnoTimeLeft").innerHTML='Осталось, сек: <span class="TimeLeftView" name="TimeLeft" id="TimeLeft">'+timeCounter+'</span>';
	 		}
	 		else
	 		{
	 		var curMin=Math.ceil(timeCounter/60);
			document.getElementById("ZnoTimeLeft").innerHTML='Осталось, мин: <span class="TimeLeftView" name="TimeLeft" id="TimeLeft">'+curMin+'</span>';
	 		}
			timeCounter-=1;
			timer=setTimeout('timing()',1000);
	 	}
	 }/*if(isTestingFlag==1)*/
}

/*Функция начальной инициализации теста*/
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
//Тесты по испанскому языку	
/*************************************************************/	
/*ЗНО-2010 испанский язык. Основной тест.*/
	if(testName=="ЗНО-2010 Испанский язык. Основной тест.")
	{
		testLength=51;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/esp\/img\/test2010main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;

		var Tarea1='1-(….)\nNo es un espejismo. En medio del desierto hay una sombrilla. Tres mujeres en bañador juegan debajo a las cartas. Unos pasos más y se alcanza la cima del cerro de arena. Edgard, un trabajador ecuatoriano, lo escala y anuncia a sus hijos: “Hasta aquí llegaba el año pasado el agua”. Es el pantano de San Juan, o lo que queda de él este caluroso verano en que las aguas se han retirado para regar los campos de patatas de Toledo y dar de beber a los habitantes del centro peninsular.\n\n2-(….)\nApartamentos desde 60.000 euros, listos para entrar a vivir. Es la otra cara de la crisis. En Valencia, los descuentos por debajo del 30% han dejado de ser tabú. En Baleares se presenta la oportunidad de hacerse con un apartamento por 100.000 euros. En Cataluña por esa cantidad se puede comprar un apartamento en la Costa Dorada, y por algo menos en Rosas, en plena Costa Brava. En la Costa del Sol andaluza las rebajas oscilan entre el 5% y el 45%, según las zonas y las promociones.\n\n3-(….)\nSi usted vive en Madrid y vuelve de sus vacaciones es más que probable que se tope con una calle cortada. Calzadas y aceras “ocupadas”, según la terminología municipal, por máquinas, obreros, vallas y cartelones. “Disculpen las molestias”, parecen suplicar los grandes carteles. La obra por excelencia de este año es la que ocupa la arteria comercial de Serrano, que además de boquetes y mucho polvo ha provocado la ira de vecinos y tenderos e incluso algún pique entre Ayuntamiento y Comunidad.\n\n4-(….)\nEn poco tiempo Eneko Atxa se ha convertido en uno de los profesionales más prometedores de la culinaria vizcaína contemporánea. A sus 28 años acaba de iniciar una aventura arriesgada como responsable de Azurmendi, nuevo restaurante en Bilbao. Si Atxa ha saltado al escenario de la denominada “cocina tecnoemocional” es gracias a su revolucionaria aportación al mundo de los extractos de carnes y pescados que se convierten en esencias tras un proceso de evaporación a fuego lento.\n\n5-(….)\nBocaditos de marisco, guiso de pescado y arroz con leche, café o té. Y todo por un euro. Difícilmente se podría encontrar un precio más bajo para un almuerzo más completo. Cada día una treintena de jubilados hacen cola en el centro social del barrio de San Xoán. Allí está ubicado el primer comedor para mayores del municipio, una iniciativa pionera en Lugo que arrancó hace un año con un doble objetivo: ofrecer una dieta sana a precios simbólicos para las personas mayores con rentas bajas y romper el aislamiento social de este colectivo creando lazos de amistad en la mesa.';
		var Tarea2='   Los serenos\n\n   ¿Quién era el sereno y qué hacía? Pues, el sereno siempre trabajaba de noche. A eso de las once de la noche se cerraban los portales de los edificios de las ciudades españolas y salía a trabajar el sereno con su chuzo (palo armado con un pincho de hierro). Él vigilaba por la calle durante la noche. Iba vestido con una bata gris y tocado con una gorra. También llevaba las llaves de los portales de todos los edificios de la calle o de la manzana que él tenía asignada. No podía salir de ésta, a menos que existieran circunstancias de especial urgencia y habiéndose asegurado de antemano un sustituto. Durante su horario laboral no debía mantener conversaciones ni sentarse y, por supuesto, tenía que mantenerse siempre en estado de alerta.\n   Cuando un vecino regresaba a casa después de las once de la noche, daba palmadas al llegar al portal de su casa. Al oír las palmadas, el sereno daba unos golpes con su chuzo. Cuando el vecino los oía, sabía que el sereno iba a llegar dentro de unos momentos. Y así era. Casi en seguida el sereno aparecía de la oscuridad con su chuzo y el gran llavero en la mano. Como el sereno conocía a todos los vecinos, siempre les saludaba cuando volvían a casa. Mientras les abría el portal, les decía: “Buenas noches y gracias”. ¿Por qué les daba las gracias? Los vecinos siempre sacaban de su bolsillo una moneda de cinco pesetas y se la daban al sereno. Los serenos no gozaron nunca de garantía social ni contrato de trabajo. Vivían fundamentalmente de las propinas de los vecinos de su manzana.\n   Antiguamente el sereno hacía más que vigilar la calle y abrir los portales. Uno de sus cometidos consistía en cantar las horas a intervalos de quince minutos. Después de dar las horas él añadía el estado del tiempo: “¡Las doce y cuarto y sereno!” o “¡Las tres y media y lloviendo!” Algunos serenos especialmente comunicativos hacían referencia al fulgor de las estrellas o cualquier otra circunstancia que les pareciera apropiada. A veces, también eran los primeros en detectar un incendio y alertar al cuerpo de bomberos.\n   Hoy en día no hay más serenos. La gente tiene que llevar las llaves para abrir los portales de sus casas. Cuando había serenos los vecinos se quejaban un poco, porque creían que el sereno sabía demasiado de su vida. Hoy lamentan la desaparición de estos “ángeles nocturnos”. Dicen que sin su vigilancia hay más crímenes en las calles.';
		var Tarea4='   En la estación\n\n  - Oiga, por favor, ¿para ir al centro de la ciudad, qué tengo que hacer?\n  - ¿Va usted en taxi o en autobús?\n  - En autobús. Habrá, supongo, autobuses que _____(17). ¿No?\n  - Sí, pero con todas estas maletas que veo que lleva, yo le aconsejo que _____(18). No va a costarle mucho.\n  - Sí, puede que _____(19).\n  - Para la parada de taxis tiene que salir por esta salida de la izquierda y para el autobús por allá, al fondo. Yo, en todo caso, le recomendaría más el taxi.\n  - Oiga, ya que usted es tan amable, ¿podría indicarme un hotel que _____(20)?\n  - Pues para eso no sé que decirle. Sabe, he vivido toda la vida en Madrid. Yo le aconsejaría que _____(21). Aquí mismo en la estación hay una.\n  - Muchas gracias por todo. Ha sido usted muy amable.\n  - De nada, hombre. ¡Que _____(22)! ¡Adiós!';
		var Tarea5='   La gripe\n\n  Nuria: Me encuentro fatal. No puedo ni moverme. Creo que tengo cuarenta de _________(23).\n  Juan: ¿Estás enferma? Pepe, tráele a tu madre el termómetro. Nuri, me estás preocupando, ¿quieres que llame al médico?\n  Pepe: Mamá, estás más _________(24) que un tomate y tienes una voz muy rara. ¿Qué te ocurre?\n  Nuria: Me duele la cabeza, la garganta, los oídos. _________(25) de haber pillado una gripe. Juan, pásame el teléfono, por favor. Voy a llamar al trabajo para decir que no puedo ir.\n  Pepe: Pero, papá, ¿por qué te pones los guantes de _________(26) los platos para coger el teléfono?\n  Juan: Cualquier _________(27) es poca para que no nos contagiemos del virus de tu madre. Pepe, mañana puedes ser tú el siguiente que está en la cama inmovilizado por el virus, o yo.\n  Nuria: Juan, dejas de hacer _________(28). No creo que los guantes vayan a _________(29) que te contagie la gripe. En cualquier caso, lo que te podrías poner es una mascarilla que te _________(30) la boca y la nariz.\n  Pepe: Mamá, ¿tú crees que ya me has contagiado? Porque si es así, ya que vas a llamar a tu trabajo, de _________(31) llama a mi profesora para decir que tengo la gripe y que no puedo ir a la escuela.\n  Nuria: Pepe, cariño, tú no tienes _________(32) síntoma de gripe; entonces, ¿cómo te vas a quedar en casa?\n  Pepe: Mamá, si me contagias, mejor que mejor. _________(33) no tengo que hacer los deberes del cole y puedo ver todo el día la televisión.\n  Nuria: Juan, ¿qué te pasa? ¿Por qué llevas este pañuelo negro hasta los ojos? Pareces un terrorista.\n  Juan: Nuri, me he puesto este pañuelo para protegerme del virus. Alguien tiene que trabajar en esta casa para pagar las cuentas y las facturas. ¡Imagínate qué _________(34) si los tres caemos enfermos! ';
		var Tarea6_1='  Texto 1\n\n	El hombre es una curiosa especie que no _____(35) mantiene una dieta variada, sino que le gusta preparar los alimentos, cocinarlos. _____(36) pocos alimentos que se tomen crudos, fuera de las frutas y las verduras, y no todas. El verdadero placer de preparar los alimentos se encuentra _____(37) la intención de satisfacer el gusto de (al menos) otra persona. _____(38) realmente una satisfacción ver comer con agrado a las personas que uno aprecia. Por eso la invitación amistosa pasa por compartir mesa, y más _____(39) si es el anfitrión quien la ha preparado. Bien es verdad que muchas personas cocinan por obligación, _____(40) en la familia o en los restaurantes o equivalentes.';
		var Tarea6_2='  Texto 2\n\n	Muchos españoles a lo largo de su vida celebran cualquier acontecimiento que a ellos _____(41) importante y así comparten la felicidad o el éxito con otras personas.\n  Cuando _____(42) compra una vivienda es normal que _____(43) una fiesta de inauguración, en la que, además de invitar a los amigos o a los familiares a comer o a tomar _____(44), se aprovecha la ocasión para mostrar la vivienda a los invitados.\n  Bastantes españoles _____(45) que conseguir su primer empleo también es motivo de celebración. Lo mismo ocurre si uno _____(46) un ascenso de categoría importante en su empresa.';
		var Tarea_1='   Al entrar en el museo fuimos a la taquilla para sacar las entradas. Como soy estudiante universitaria, pedí que me hicieran el descuento del cincuenta por ___________(47). La señora de la taquilla me pidió que mostrara el carnet de estudiante. Lo había olvidado en casa. ___________(48) vi obligada a pagar la tarifa entera. ¡Mala suerte!\n	De repente el conserje, mientras yo estaba hablando, se ___________(49) cuenta de que Luis llevaba la cámara en bandolera.\n  - ¿Sabe usted que no se pueden hacer fotos?\n  - No, no lo sabía. ¿Hay que dejar la cámara en el guardarropa?\n  - No, no hace ___________(50). Basta con que no haga fotos.';
		answer47Array=new Array("ciento");
		answer48Array=new Array("me","Me");
		answer49Array=new Array("dio");
		answer50Array=new Array("falta");
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","103.5","108.0","111.0","114.5","122.0","124.0","126.0","127.0","128.0","129.0","129.0","131.5","132.0","133.0","133.5","134.5","134.5","135.5","136.5","137.0","137.5","139.5","140.0","140.5","140.5","141.5","142.0","142.0","142.5","143.0","144.0","144.5","144.5","145.0","146.5","147.0","148.0","149.0","151.0","151.0","152.5","154.0","154.0","154.5","155.0","155.0","156.5","157.5","158.0","158.0","158.0","159.0","160.5","162.0","163.0","164.5","165.5","168.0","168.5","170.0","171.5","172.0","176.0","177.5","178.0","180.0","184.5","186.5","186.5","190.5","190.5","194.0","196.5","200.0");
		answerArray=new Array("a","f","c","d","b","a","b","d","d","b","c","e","a","c","h","f","h","f","g","c","a","b","d","d","a","c","a","b","b","c","b","a","d","c","e","g","a","h","f","i","h","c","f","a","i","g",answer47Array,answer48Array,answer49Array,answer50Array," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textual","textual","textual","textual","tvir");
		textAnalysisArray=new Array(Tarea1,Tarea1,Tarea1,Tarea1,Tarea1,Tarea2,Tarea2,Tarea2,Tarea2,Tarea2,Tarea2,"test","test","test","test","test",Tarea4,Tarea4,Tarea4,Tarea4,Tarea4,Tarea4,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea5,Tarea6_1,Tarea6_1,Tarea6_1,Tarea6_1,Tarea6_1,Tarea6_1,Tarea6_2,Tarea6_2,Tarea6_2,Tarea6_2,Tarea6_2,Tarea6_2,Tarea_1,Tarea_1,Tarea_1,Tarea_1,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,24);
		variantNumberArray=new Array(8,8,8,8,8,4,4,4,4,4,4,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
	
		}		
	}
/*ЗНО-2011 испанский язык. Основной тест.*/
	if(testName=="ЗНО-2011 Испанский язык. Основной тест.")
	{
		testLength=46;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/esp\/img\/test2011main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;
		var Tarea1_2011='1 - (…..)\nLa renovacion del espacio medioambiental para todos los publicos ?Toca, Toca! en el Museo de la Ciencia en Madrid, ha  creado un espacio interactivo que permite al visitante conocer diferentes habitats y las especies que en ellos viven. Alli no solo podra ver los animales, sino que tambien podra tocar serpientes, tortugas, estrellas o pepinos de mar. Algunos de los animales que se pueden encontrar en este espacio son tortugas de espolones y dragones barbudos.\n\n2 - (…..)\nLa ultima costa virgen protegida de Murcia lleva nueve anos esperando que el Tribunal Constitucional resuelva un recurso contra una macrourbanizacion. El mayor complejo urbanistico previsto en el Mediterraneo ocupara un parque natural en la costa virgen de la autonomia gracias a una ley de 2001. Un portavoz del Constitucional explica que el tribunal sigue sin fecha para decidir sobre el parrafo de la Ley del Suelo de Murcia que permitia la urbanizacion y que recurrio el PSOE.\n\n3 - (…..)\nLos documentales medioambientales estan de moda. Titulos como Tierra y Home compiten con el cine de Hollywood en las listas de los DVD mas vendidos. Tierra, el espectacular largometraje sobre nuestro planeta de la BBC, ocupo varias semanas el primer puesto en las listas de ventas nacionales de la FNAC en formato Blu-ray. La proxima gran produccion en este genero promete ser Oceans, el documental con mayor presupuesto de la historia: 50 millones de euros.\n\n4 - (…..)\nTras meses en los que los constructores no se han cansado de repetir que los precios de los pisos ya han bajado todo lo que tienen que bajar y que no lo van a hacer mas, un paseo por el Salon Inmobiliario de Madrid (SIMA), deparaba ofertas como la siguiente: “Dos dormitorios, 72 metros cuadrados utiles en Getafe. Desde 300.000 euros”. Sin embargo, los expertos no lo dudan: los precios tienen que bajar mucho mas.\n\n5 - (…..)\nEl mochilero es un personaje peculiar de la vida contemporanea. El mochilero es un joven que con poco dinero y mucha habilidad se lanza a viajar por el mundo solo, gastando lo menos posible (conoce todos los alojamientos interesantes de media estrella, e incluso de ninguna) y disfrutando al maximo porque lo que vale no tiene precio. El mochilero es un maestro en el arte de vivir a fondo mientras atraviesa cualquier lugar del mundo, sea Tailandia, Galicia o Argentina.';
		var Tarea2_2011='Buscamos una casa rural\n\n Los espanoles nos hemos vuelto cada vez mas previsores y reservamos nuestros lugares de vacaciones con una antelacion impensable hace unos anos. Si no lo cree, pruebe a buscar una casa rural para la proxima Nochevieja con menos de dos meses de antelacion. Le resultara mision imposible. Y eso que la oferta de alojamiento rural en Espana se ha disparado. \n\n Si desea alquilar una casa rural, para empezar hay que tener en cuenta que unas casas se alquilan por habitaciones, y otras, enteras. En las primeras, lo normal es que los duenos vivan en ellas y funcione como una explotacion agropecuaria. Permiten disfrutar del espiritu original con el que nacieron estos alojamientos: vivir de cerca las faenas agricolas mientras se facilita a los propietarios unos ingresos extra. A veces huele a vaca o hay que compartir el bano con los duenos. En ocasiones, los propietarios organizan actividades de agroturismo: como ordenar vacas, buscar setas o cocer pan en sus hornos. \n\n Sin embargo, cada vez se rehabilitan mas casas para alquiler completo. En este caso, compruebe que el precio incluye sabanas, mantas, toallas y gastos de calefaccion. \n\n Existe para los precios gran amplitud de oferta. En cualquier caso, mas que por el precio, dejese tentar por la calidad. No es lo mismo pagar una cantidad por una vivienda con doscientos anos de historia primorosamente decorada con muebles antiguos y rodeada por un paisaje de ensueno que abonar casi lo mismo por una casa de paredes blancas donde el dueno ha acumulado todos los muebles viejos que no le cabian en la suya. Las guias especializadas sobre casas rurales y las paginas de Internet pueden ayudarle a decidir de antemano si la vivienda elegida esta decorada con gusto o es un almacen de trastos viejos. \n\n Las necesidades de mercado han llevado a los propietarios de alojamientos rurales a asociarse en centrales de reservas, muy comodas para el usuario porque permiten contratar un alojamiento sin sobreprecio y facilitan la busqueda de otra vivienda en la misma zona si la elegida esta ocupada. A la hora de elegir el lugar para sus vacaciones, valore tambien la belleza del entorno, la cercania de carreteras o zonas industriales que provoquen ruidos, la posibilidad de dar paseos por los alrededores y la oferta de actividades culturales o en la naturaleza que le ofrezca la propia casa o empresas cercanas.';
		var Tarea3_2011='Alejandro Amenábar regresa a las pantallas con “Ágora”, un drama histórico que centra su atención en la figura de Hipatia de Alejandría. Amenábar charla sobre su última producción, así como de su carrera cinematográfica.\n\n11 – Hola, Alejandro. ?Por que has tardado tanto tiempo en hacer una pelicula desde “Mar adentro”? \n– (.....) \n\n12 – Cincuenta millones de euros para hacer una pelicula en medio de una crisis economica. ?Lo has pensado bien? \n– (.....) \n\n13 – ?Como conociste a Hipatia? ?Te intereso primero el personaje o investigaste porque tenias la idea de una produccion ambientada en el mundo clasico? \n– (.....) \n\n14 – A proposito, Alejandro, ?que opinas de la “pirateria” audiovisual? \n– (.....) \n\n15 – ?Que le recomendarias a un guionista novel como yo que quiere dedicarse al cine? \n– (.....)';
		var Tarea4_2011='– ?Que periodico quieres? \n– Me da lo mismo, el que (16)_____. \n\n– Bueno, ?que os parece la paella? \n– Que (17)_____. \n\n– ?Que me contais de Jose? \n– Pues desde que sale con esa chica tan guapa, (18)_____. \n\n– Es dificil hablar con Micaela. \n– Tienes razon. Me molesta que ella nunca (19)_____ con nadie. \n\n– Hoy es mi primer dia de trabajo. \n– ?Pues que (20)_____! \n\n– Mira, como estan las plantas. Te dije que tenias que regarlas todos los dias... \n– Bueno, no te pongas asi, no (21)_____.';
		var Tarea5_2011='Kung Fu Panda  \n\nMarta y Paco quieren ir a ver una pelicula. Los dos estan mirando en el periodico la cartelera actual de cine. \n\nMarta: ?Que te parece esta, Paco? \nPaco: ?Cual? ?“La princesa del bosque”? Mama, por favor, que no tengo cinco anos. ?Desde cuando veo yo ese tipo de peliculas de ninas? Que yo (22)_____, nunca. \nMarta: Bueno, vale. Era solo una (23)_____. ?Y la de Harry Potter? \nPaco: Ya la he visto dos veces. \nMarta: ?Uff!, mira que es dificil (24)_____ una pelicula contigo. Dime tu, ?cual quieres ver? \nPaco: Esta. “La aventura espacial”. \nMarta: A ver... Paco, (25)_____ el dedo del texto, que quiero ver lo que pone. ?Ah, no, no! ?Es una pelicula para mayores de 18 anos! Tiene escenas violentas. Asi que, jovencito, puedes buscar otra que (26)_____ a tu edad. \nPaco: Vaya rollo. Pues Oscar ya la ha visto. \nMarta: Lo que haya visto Oscar o no, es cosa de Oscar y sus padres. Yo tengo bastante con ocuparme de tu educacion. Asi que esa pelicula no es para tu edad, ?vale? Y ahora, (27)_____ buscando. \nPaco: A mi me (28)_____ igual. Me voy a jugar con el ordenador. Escoge tu misma. \nMarta: Voy a preguntar a tu padre si quiere ir al cine con nosotros. A lo (29)_____ el tiene alguna idea... ?Gabrieeel! \nGabriel: ?Que pasa? \nMarta: Oye, ?no querias ir al cine la semana pasada? \nGabriel: Si. Pero (30)_____ hacia mal tiempo, todo el mundo penso en ir al cine y no (31)_____ entradas. \nMarta: Y, ?que pelicula querias ver? Quiza podriamos ir hoy los tres a verla. \nGabriel: Hmmm, si. Pero no se si a ti te gustaria. Es de artes marciales. \nMarta: ?Por que no? ?Cual es? \nGabriel: “Kung Fu Panda”. \nMarta: Pero, ?no es una pelicula para ninos? Gabriel, me (32)_____. A mi me encantaria ir a verla. Y seguro que a Paco tambien le (33)_____ a gustar.';
		var Tarea6_1_2011='  Texto 1\n\nLa Oroya, un pueblo minero en los Andes del Peru, figura (34)_____ las diez ciudades mas contaminadas del mundo. (35)_____ las investigaciones del Instituto Blacksmith, el noventa (36)_____ ciento de los ninos de La Oroya tienen altos niveles de plomo y zinc en la sangre, contaminacion que resulta de la intensa fundicion de metales pesados en el area (37)_____ los anos veinte del siglo pasado. El promedio de plomo en la sangre de esos ninos era el triple del limite aceptable establecido por la Organizacion Mundial (38)_____ la Salud. Los cientificos afirman que, aun cuando las fabricas vayan (39)_____ disminuir las  emisiones, el nivel de la contaminacion por el plomo puede permanecer en la tierra durante muchos siglos.';
		var Tarea6_2_2011='  Texto 2\n\n Los espanoles (40)_____ orgullosos de preservar con fervor la figura de sus reyes como jefes absolutos del Estado. Para muchos, la Familia Real constituye el modelo ideal de vida en familia. Ademas, los espanoles se interesan por conocer la vida cotidiana de los reyes, del principe y de las infantas, como si (41)_____ celebridades del espectaculo.\n\n Los espanoles (42)_____ un especial gusto por conocer la vida privada de otros personajes destacados de la sociedad. Este interes (43)_____ paso a una importante industria editorial dedicada exclusivamente a explorar la vida y costumbres de los personajes de moda. Puede que el producto mas emblematico de todos (44)_____ la publicacion “?Hola!”, revista que (45)_____ investigar los detalles mas privados de las celebridades y la nobleza espanola.';	
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","103.5","108.0","111.0","114.5","122.0","124.0","126.0","127.0","128.0","129.0","129.0","131.5","132.0","133.0","133.5","134.5","134.5","135.5","136.5","137.0","137.5","139.5","140.0","140.5","140.5","141.5","142.0","142.0","142.5","143.0","144.0","144.5","144.5","145.0","146.5","147.0","148.0","149.0","151.0","151.0","152.5","154.0","154.0","154.5","155.0","155.0","156.5","157.5","158.0","158.0","158.0","159.0","160.5","162.0","163.0","164.5","165.5","168.0","168.5","170.0","171.5","172.0","176.0","177.5","178.0","180.0","184.5","186.5","186.5","190.5","190.5","194.0","196.5","200.0");
		answerArray=new Array("c","d","h","f","b","a","c","b","c","d","h","f","e","g","d","e","a","b","c","f","g","c","a","c","c","b","b","d","a","a","d","b","d","c","e","a","d","h","i","b","a","e","i","c","g"," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(Tarea1_2011,Tarea1_2011,Tarea1_2011,Tarea1_2011,Tarea1_2011,Tarea2_2011,Tarea2_2011,Tarea2_2011,Tarea2_2011,Tarea2_2011,Tarea3_2011,Tarea3_2011,Tarea3_2011,Tarea3_2011,Tarea3_2011,Tarea4_2011,Tarea4_2011,Tarea4_2011,Tarea4_2011,Tarea4_2011,Tarea4_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea5_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_1_2011,Tarea6_2_2011,Tarea6_2_2011,Tarea6_2_2011,Tarea6_2_2011,Tarea6_2_2011,Tarea6_2_2011,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,24);
		variantNumberArray=new Array(9,9,9,9,9,4,4,4,4,4,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,9,9,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
	
		}		
	}
/*************************************************************/
//Тесты по биологии
/*************************************************************/	
	/*ЗНО-2009 Биология. Основной тест*/
	if(testName=="ЗНО-2009 Биология. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/bio\/img\/test2009main1\/';
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
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	
	/*ЗНО-2010 Биология. Основной тест*/
	if(testName=="ЗНО-2010 Биология. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/bio\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","109.0","112.0","115.0","118.0","121.5","124.5","128.0","131.0","134.0","137.0","140.0","142.5","145.5","148.0","150.5","152.5","155.0","157.0","159.0","161.0","162.5","164.0","165.5","167.0","168.5","170.0","171.0","172.5","173.5","174.5","175.5","177.0","178.0","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.0","186.0","187.0","188.0","188.5","189.5","190.5","191.5","192.5","193.0","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","c","b","d","b","c","b","c","c","b","b","d","c","b","d","d","a","c","b","d","c","a","c","d","b","c","a","d","b","c","d","b","c","d","b","d","b","d","a","d","a","a","c","d","a","d","b","b","c","d","beac","cdea","edac","daec","baed","dcba","cade","dbac","dacb","dabc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	
	/*ЗНО-2011 Биология. Основной тест*/
	if(testName=="ЗНО-2011 Биология. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
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
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
	/*ЗНО-2012 Биология. Пробный тест*/
	if(testName=="ЗНО-2012 Биология. Пробный тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		testDirectory='\/test\/bio\/img\/test2012demo\/';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.5","104.5","106.5","108.5","111.5","114.5","117.5","121.0","124.5","127.5","131.0","134.0","137.0","139.5","142.5","145.0","147.5","150.0","152.5","154.5","156.5","158.5","160.5","162.0","163.5","165.0","166.5","168.0","169.0","170.5","171.5","172.5","174.0","175.0","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","184.5","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.5","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","b","d","d","c","c","b","a","b","c","b","b","c","b","a","c","b","d","b","c","a","c","c","a","d","b","d","c","d","a","b","d","c","b","b","c","b","a","d","a","c","a","c","b","d","c","b","b","c","c","acbe","abdc","badc","deac","dcbe","edab","dcab","acdb","aca","dcb");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","ordernew","ordernew","componate","componate");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,3,3,3,3);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*ЗНО-2012 Биология. Основной тест*/
	if(testName=="ЗНО-2012 Биология. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		fullTextWindowHorizontalOffset=130;
		fullTextWindowVerticalOffset=200;
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		testDirectory='\/test\/bio\/img\/test2012main1\/';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.5","104.5","106.5","108.5","111.5","114.5","117.5","121.0","124.5","127.5","131.0","134.0","137.0","139.5","142.5","145.0","147.5","150.0","152.5","154.5","156.5","158.5","160.5","162.0","163.5","165.0","166.5","168.0","169.0","170.5","171.5","172.5","174.0","175.0","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","184.5","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.5","194.0","195.0","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","c","d","b","a","c","b","c","d","c","c","b","a","c","b","c","b","d","c","d","a","b","c","a","b","d","c","d","b","b","d","d","b","b","a","a","d","c","d","b","d","a","c","c","c","c","a","d","a","a","adeb","edab","eabc","ecdb","dcbe","cebd","cdba","acbd","ccb","abb");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","ordernew","ordernew","componate","componate");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,3,3,3,3);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	
/*************************************************************/
//Тесты по английскому языку	
/*************************************************************/	
/*ЗНО-2009 Английский язык. Основной тест.*/
	if(testName=="ЗНО-2009 Английский язык. Основной тест.")
	{
		testLength=45;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2009main1\/';
		fullTextWindowHorizontalOffset=-125;
		fullTextWindowVerticalOffset=-75;
		var personDesc='	0. Cinda Wood - writes guidelines for newbies. \n\n I really love working with flowers and also have loved learning Photoshop CS2 and InDesign. My first book was created just for florists, with a CD for their web sites’ images. Most people do not realize that 95% of all images online for florists belong to wire services and so the book filled a niche. I now have been creating floral cookbooks for people who are not florists with simple instructions to help the beginner.\n\n	1. Donna Hardyman\n\nI am trying to learn as much as I can about the fauna. I love writing about my dogs, be it training, or the unconditional love they give. I am also exploring the dream of selling everything I own, packing up the dogs and seeing the US in a recreational vehicle. Any suggestions to sites, forums, etc that will help me fulfill my dream of travelling with my dogs will be appreciated!\n\n	2. Alex Mayer\n\nI absolutely adore horseback riding. I own three horses here in the UK. A stallion named "Perseus" who is insane and I think that\'s why I prefer to ride him and a new stallion named "Disraeli". He\'s even a bit more crazy than the other. It\'s always a fight of wills and I love the fight. The other is a mare named "Seripho" who is an absolute sweetheart. Besides riding, I play tennis and just started taking boxing lessons; it\'s a killer workout.\n\n	3. Jerry E Spencer\n\nI have travelled all over the world and have seen a lot of things in my life, and I have loved all of it. I am a people person, I like talking with people from all over the world.My wife says that I talk more than ten women put together. I would like to help as manypeople as I can with my writing. I feel if I can help you out with something, then I havedone some good out here in this world. And that is a good feeling.\n\n	4. Tim Bennett\n\nAlthough I am English I have been living in the Philippines for the last 10 years andcontrary to what you may have heard about all the bad things in the Philippines it is awonderful country with loads of opportunities.I believe very heavily in taking action rather than just talking about things and myprograms are based around weaving the principles of wealth into our lives rather thanliving superficially. If you would like to be part of my team in any way or if you wouldlike any help you can contact me anytime.\n\n	5. Mike Bova\n\nI am an Advertising Director and Business Columnist for a chain of newspapers in theFingerlakes Region. I also own The Upstate New York Shopping And BusinessDirectory. Please feel free to email me whether you are into business or not. Networkingis a very good thing! Let\'s talk about whatever....';
		var SailingIntoHistory='	Sailing into History\n\n	By Cesar G\n\n	Imagine yourself on a boat looking out at the horizon and all you can see is the water meeting the sky with no land in sight and you are sailing straight ahead to meet the world. Jesse Martin does not have to imagine: he is living it.\n\n	On Dec. 7, 1998, at 17 years old, Jesse departed from Melbourne, Australia on his boat Lionheart to attempt to become the youngest person to sail solo and nonstop around the world. He sailed south of New Zealand, through the South Pacific, around South America, north on the Atlantic, back south past Africa, through the Indian Ocean and back to Melbourne.\n\n	Even as a young child, Jesse had been an adventurer who travelled all over Europe and Asia with his parents. Born in Munich, Germany in 1981 he moved to Australia with his family when he was only two years old. They moved close to a rainforest in Cow Bay, about 3,500 kms north of Melbourne, where they built a small house with no electricity or running water. Jesse grew up at the beach enjoying the outdoors to its fullest.\n\n	At 14, he sailed for the first time with his father and brother, Beau. It was after this trip that he began to dream about sailing around the world. But first, Jesse catamaraned from Cairns to Cape York, then he and his brother kayaked in the rivers of Papua New Guinea. From there, he went on to join a yacht crew to sail from Belize to Tahiti. These experiences kept his dream alive.\n\n	Jesse’s family played an important role. “I was made to believe I could do anything,” he says. Although, he says, there were others that were not so encouraging or supportive, “People that I looked up to, respected and trusted told me I couldn’t. Thankfully, I trusted myself. There were people that said that the boat couldn’t be ready by the time I had to leave.” However, through perseverance and belief in himself he was able to do what many told him was impossible.\n\n	On Oct. 31, 1999, more than 10 months after he set sail, Jesse Martin went down in history as the youngest person to sail around the world solo, nonstop and unassisted.\n\n	Jesse remained on dry land only long enough to document his voyage in a book called Lionheart: A Journey of the Human Spirit, and to plan his next adventure. He is now off on what has been named “The Journey of Kijana,” a two year around the world excursion crewed by five young people.\n\n	At one point on his solo trip, as Jesse overcame the obstacles that faced him, he says, “I started thinking not of what I could do after this trip, but more like what couldn’t I do! Yeeeehaaaaa!!!”';		
		var deathOfClassroom='DEATH of the Classroom The New Wave of Online Education\n\n	By Scott Reekie\n\n	Picture a society where learning can happen at any time, in any place and can be completed without ever going to class. This could be the new wave of education and the Internet technology now exists to support such a system.\n\n	The virtual classroom is here. If you are interested in English, or Civil Engineering, then head to the university and click yourself a degree. Well maybe it\'s not that easy, but you would be on the right track. The flexibility of studying at your own pace, and the money you save with online courses are two of the main attractions.\n\n	The Web is a powerful educational tool. Yet some feel that virtual classrooms will isolate students from each other, which will result in problems developing interpersonal relationships and that these skills are much more important than computer skills. Should teachers teach kids how to behave in society, how to respect others and how to co-operate or should kids have already learned this from their parents? No one is saying that social skills aren\'t important, however, virtual classrooms are far about more than just computer skills. Some strongly believe that education can be taught via the Web and social skills can be gained from joining sports teams, summer camps, or just hanging out!\n\n	Others argue that this virtual classroom may place pressure on students: to become computer literate or be left behind in life. Is this undue pressure or reality? Maybe being left behind in life is a little dramatic, but the reality is that the computer age is here. Whether you want to pay for your new jeans with your debit card, or check to see if the library has the book you want, you\'re going to need some computer skills.\n\n	The development of flexible, inquiring minds has rarely been the main concern in the design of educational systems. After all, if you have over thirty inquiring minds and only one teacher, flexibility could be a problem. It seems that developing students\' proper social behaviour has always exceeded the concern to develop students\' creativity. Computer technology can make individualized attention a real possibility. At the Institute for the Learning Sciences, systems are being developed to allow people to try out things in simulated worlds. This technology will allow for the individual creative growth in students.\n\n	The Web will provide amazing opportunities for the education of our society. Anyone with a phone line and a computer has access to unlimited amounts of knowledge and programs designed to help them learn and understand. The teachers and parents involved with these programs will be given the job of making sure that students lead well-balanced lives that combine Web based education and positive social interaction with their friends and neighbours. Imagine your recreation room has now become your classroom, and your parents seem to be doing as much homework as you are! So, be prepared as the virtual classroom may find its way to a computer screen near you!';
		var collegeApplication='Making the Most of Your College Applications\n\nBy Melissa Algranati and Jennifer Gioia\n\nYou can\'t believe that after 12 years of education your future depends on what pearls of genius you can cram onto a handful of pages – or that complete strangers will sit in a room and determine if you will be "worthy" of attending their institution.\n\nThis can be a stressful time. Below are real questions answered by real college admissions professionals in the United States.\n\n0 _____A_____\n\nReally concentrate on your extra-curricular resume and essay. These are the two areas that will make you noticed. Take time to think about why you are involved in the activities that you are doing. What do they mean to you? How have they shaped you? How might they be of value to the university or college you will be attending?\n\n16__________\n\nAbsolutely! A number of colleges and universities give scholarships and awards to those who have been involved in leadership or community service projects. Include your involvement in extracurricular activities, and make sure to highlight any honors or awards you have received.\n\nYou can also include it in your college essay, and talk about the skills you learned and opportunities you had.\n\n17 __________\n\nIt often depends on the school. Big universities and state schools get thousands and thousands of applicants each year, so they tend to focus on your grade average, scores, and class ranking. Smaller universities and colleges will have more time to focus on things like the essay, recommendations, and extracurricular activities.\n\n18 __________\n\nThink about who knows you best. Who can talk about your academic achievements and aspirations, as well as your character and qualities? Most students ask teachers, club advisors, coaches, and mentors.\n\nTo get the best letters possible, make sure you identify people who are supportive of you. When you ask them, let them know where you are applying and why. The goal is to choose someone who will stress the strengths you have already highlighted, or provide an opportunity to add something new about you that the admissions officer does not yet know.\n\n19 __________\n\nIt definitely has an impact. You should always pay attention to your grades, especially those in your junior year of high school. But don\'t fret. What universities look for most is an upward trend, someone who is constantly getting better and improving.\n\nIf there is an unexpected event that caused your grades to drop, that will also be taken into consideration. And, if you have only done well in a particular subject, you can highlight that strength, stressing that you will use college as a way to really hone in and excel at your strengths and your passions.\n\n20 __________\n\nEach university and college has a specific application fee, which can be found on the school\'s website. A lot of times fee waivers are available. Check with your guidance counselor. In addition, some schools will waive the fee if the student comes to visit the campus and takes a tour or completes the school\'s online application.';
		var nativeEnglishAnimals='Native English Animals\n\nBy Nicola Jane Soen\n\nNow England has hardly any predatory animals in the (0)____A______, but has it always been that way? Not according to ancient rhymes. England was once a country where predatory animals freely roamed and so danger lurked.\n\nMany centuries ago bears, wolves, lynx, etc, ranged the forests and woodlands. Also wild boar, Elk and Aurochs (wild bulls) were (21)__________. However, although some of these species hung on till medieval times, most of these animals were long gone by that time.\n\nThe last English wolf in England was (22)__________ killed and the population extinct by the 16th century, although in Wales it is thought to have lasted a few centuries (23)__________. The great Auroch herds did not least nearly as long and were sadly gone as early as the 9th Century, although on the continent it lasted for many, many (24)__________ centuries.\n\nThere was an even bigger size herding animal in Britain in the early centuries. The Giant deer species called Megaloceros, with an antler span of up to 3 meters; it was possibly 9(25)__________ by the time Neolithic man was making wooden stockades. But the antlers were often found, and perhaps used for digging with.\n\nLynx is thought to have gone by the 10th Century, in England at least. It is thought that the Neolithic settlers mingling with peoples already present or taking over, came from the continent and brought their own animals; cattle, (26)__________ dogs and cats, pigs and also goats with them and built the wooden stockades to protect them.\n\nIn Saxon England land was cleared (27)__________ the forest and a large communal area was used for farming; this was divided into strips called furrows. However by Medieval times the rich landlords had claimed a lot of land and planted hedges (28)__________ their boundaries. This may have meant farming was easier, but for the poor it meant they were beggared and starving, (29)__________ the loss of their land meant the loss of their livelihoods.\n\nLand by the Thames was taken from the people in medieval times and given over to sheep farmers for the trading of wool, which by then had become an important industry that provided (30)__________ for the crown.\n\nSo by now most of the original predatory or herding wild animals had been (31)__________ by non-native species. Thankfully there is now a program that is re-releasing our original, surviving animals back into their own natural habitat. We (32)__________ desperately that this is successful.';
		var bermudaTriangle='The Bermuda Triangle\n\nThe Bermuda Triangle, or Devil’s Triangle, is the name (0)_given_(give) to an area that has been at the centre of many unexplained disappearances. It lies between Bermuda, Miami and San Juan, Puerto Rico. Within this area of water, numerous planes and ships have mysteriously vanished.\n\nThe mystery of the Bermuda Triangle (33)__________(begin) in 1950. A small article appeared outlining the strange disappearances of ships and planes. The area was given the name The Devil’s Sea. In a feature in 1964, Vincent Gaddis christened the area the Bermuda Triangle.\n\nOne of the most famous disappearances occurred in 1945. Flight 19 was a squadron of five naval bombers that supposedly disappeared while they (34)__________(fly) over the Bermuda Triangle. The two planes that set out to rescue Flight 19 also disappeared and were never found. Naval ships such as the USS Cyclops also disappeared without a trace. A large ship (35)__________(carry) ore also mysteriously vanished after only three days at sea. An official statement by the US Coastguard stated that repeated search attempts were made, but no traces (36)__________(сan) ever be found of the missing planes or ships.\n\nPopularity of the Bermuda Triangle phenomenon reached a peak in 1974 with the publication of Charles Berlitz’s book. The (37)__________(author) book was called The Bermuda Triangle. At around the same time, a film with the same name (38)__________(release) as well. Numerous articles and books (39)__________(publish) since then to try to give scientific explanations to the mystery. Some of the explanations have been (40)__________(much) than credible.\n\nThere (41)__________(be) a number of discrepancies in the reports of the Flight 19 disappearance. Flight 19 was reported to have been manned by (42)__________(experience) pilots flying in calm weather. In fact, the flight was a training exercise for students and the weather had turned stormy. The last contact with the flight stated that they were running low on fuel. The flight would no doubt have crash-landed, and no one could have survived the stormy seas of the triangle.\n\nFor all credible explanations of the disappearances, one mystery (43)__________(remain). None of the crashed planes were ever recovered. As a mystery, the Bermuda Triangle is one that may never (44)__________(solve).';
		answer33Array=new Array("began");
		answer34Array=new Array("were flying");
		answer35Array=new Array("carrying");
		answer36Array=new Array("could");
		answer37Array=new Array("author’s",'author"s');
		answer38Array=new Array("was released");
		answer39Array=new Array("have been published");
		answer40Array=new Array("more");
		answer41Array=new Array("are","were");
		answer42Array=new Array("experienced");
		answer43Array=new Array("remains","remained");
		answer44Array=new Array("be solved");
		gradeArray=new Array("100.0","100.5","100.5","101.0","102.0","104.0","107.0","110.5","114.0","117.5","121.0","123.5","126.0","128.5","130.0","132.0","133.5","135.0","136.5","138.0","139.5","141.0","142.5","144.0","145.5","147.5","149.0","150.5","152.5","154.0","155.5","157.5","159.0","160.5","162.0","164.0","165.5","167.0","168.5","170.0","171.5","173.0","174.5","176.0","178.0","179.5","181.5","183.5","185.0","187.0","189.0","191.0","192.5","194.5","196.5","197.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("g","b","f","d","c","b","a","b","b","a","a","d","b","c","c","h","c","f","b","g","b","d","a","a","c","d","b","a","b","c","d","b",answer33Array,answer34Array,answer35Array,answer36Array,answer37Array,answer38Array,answer39Array,answer40Array,answer41Array,answer42Array,answer43Array,answer44Array," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textual","textual","textual","textual","textual","textual","textual","textual","textual","textual","textual","textual","tvir");
		textAnalysisArray=new Array(personDesc,personDesc,personDesc,personDesc,personDesc,SailingIntoHistory,SailingIntoHistory,SailingIntoHistory,SailingIntoHistory,SailingIntoHistory,deathOfClassroom,deathOfClassroom,deathOfClassroom,deathOfClassroom,deathOfClassroom,collegeApplication,collegeApplication,collegeApplication,collegeApplication,collegeApplication,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,nativeEnglishAnimals,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,bermudaTriangle,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,16);
		variantNumberArray=new Array(8,8,8,8,8,2,2,2,2,2,4,4,4,4,4,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}

/*ЗНО-2010 Английский язык. Основной тест.*/
	if(testName=="ЗНО-2010 Английский язык. Основной тест.")
	{
		testLength=51;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2010main1\/';
		fullTextWindowHorizontalOffset=-125;
		fullTextWindowVerticalOffset=-75;
		var amazing='You’re Amazing, So Make Sure People Know It \n\nWhen it comes to telling the world how wonderful you are, there’s a fine line between having other people think, “Wow! She’s got so much more about her than I thought” and “Blimey! I wish she’d shut up about herself”. It’s easy enough to let everyone around you know you’re something special – the trick is doing it without trying too hard or looking like an attention seeker. \nSo here’s how to get the attention you deserve without screaming, “Look at me!” \n\n1.________ \nBeing loud isn’t a good way to get noticed. Quietness and a smile can be more interesting than someone who blurts everything out constantly. Be cool instead, and show people what you’re really about, rather than shouting it in their faces. \n\n2.________ \nIt may be tempting to try to bluff your way through a conversation. But if you don’t know much about the subject being discussed, you’ll get more kudos if you shut up and listen. You can’t lose – get your facts right and people will respect your wisdom, or stay quiet if you’re unsure and people will appreciate your honesty.\n\n3.________ \nToning down your gossip factor will show there’s much more to you than people may think. Your mates will trust you and your reputation will sky-rocket. Gossiping gives negative vibes to other people. \n\n4.________ \nChoose things to do that you love doing and not because everyone else is doing them. If you are passionate about something, and enjoying it, you’ll have more energy and people will be attracted to you – and you might even be the person who starts a new trend. \n\n5.________ \nWe may not be superhuman beings, but remember, each and every one of us has something going on that’s worth shouting about. It’s a fact – everyone is an individual and that’s what makes you who you are. Be proud of why you’re different. If you love who you are, people are more likely to love you too.';
		var waysToImproveMemory='10 Ways to Improve Your Memory \n\nA good memory is often seen as something that comes naturally, and a bad memory as something that cannot be changed, but actually there is a lot that you can do to improve your memory. However, it does mean taking responsibility and making an effort. Here are the experts’ top tips. \n\n1. We all remember the things we are interested in and forget the ones that bore us. This no doubt explains the reason why schoolboys remember football results effortlessly but struggle with dates from their history lessons! Take an active interest in what you want to remember, and focus on it consciously. One way to make yourself more interested is to ask questions – the more the better. \n\n2. Repeating things is the best way to remember things for a short time, e.g. remembering a phone number for a few seconds. ‘Chunking’ or grouping numbers would be impossible for most of us to remember: 1492178919318483. But look at them in ‘chunks’, and it becomes much easier: 1492 1789 1931 8483. \n\n3. Another way to make something more memorable is to think about something visual associated with it. Design a mental picture and the stranger the picture the better you will remember it! If an English person studying Spanish wanted to remember the Spanish word for duck, ‘pato’, he\she could associate it with the English verb ‘to pat’ and imagine a picture of someone patting a duck on the head. \n\n4. To remember long lists, try inventing a story which includes all the items you want to remember. In experiments, people were asked to remember up to 120 words using this technique and when they were tested afterwards, on average they could remember ninety percent of them. \n\n5. If we organize what we know in a logical way then when we learn more about that subject we understand that better, and so add to our knowledge more easily. Make well-organised notes. Be sure things are clear in your mind. If not, ask questions until you understand! \n\n6. Many experts believe that listening to classical music, especially Mozart, helps people to organize their ideas more clearly and so improves their memory. Sadly, rock music does not have the same effect. \n\n7. If you do not want to lose your memory as you get older you need to keep your brain fit, just like your body: ‘use it or lose it’ is the experts’ advice. Logic puzzles, crosswords and mental arithmetic are all good ‘mental aerobics’. \n\n8. Physical exercise is also important for your memory, because it increases your heart rate and sends more oxygen to your brain, and that makes your memory work better. Exercise also reduces stress, which is very bad for the memory. \n\n9. The old saying that ‘eating fish makes you brainy’ may be true after all. Scientists have discovered that the fats found in fish like tuna, sardines and salmon – as well as in olive oil – help to improve the memory. Vitamins C and E (found in fruits like oranges, strawberries and red grapes) and vitamin B (found in lean meat and green vegetables) are all good ‘brain food’, too. \n\n10. Caffeine may not be too good for you, but like exercise, it increases your heart rate and sends more oxygen to your brain. A cup of coffee really does help you concentrate when you sit down and study. And if you don\'t like coffee, don’t worry – experts believe that chewing gum has the same effect! ';		
		var watchingTheDetectives='Watching the Detectives \n\nColumbo (1968-2003)\n \nThe untidy American detective, played by Peter Falk, first appeared in a TV movie before the first series of Columbo began in 1971. His apparent absent-mindedness and shambolic style lulled his suspects into a false sense of security, but he was always quick to guess who the culprit was. With each episode unfolding from the criminal’s point of view, we saw them trying to cover their tracks as the net closed in on them. \nColumbo was a huge success and a host of famous names appeared in cameo roles, including Janet Leigh, Faye Dunaway, Dick Van Dyke and Johnny Cash, while Steven Spielberg directed an episode of the first series. \n\nHercule Poirot (1989-present) \n\nThis fussy Belgian sleuth first appeared in Agatha Christie’s novel The Mysterious Affair At Styles in 1920. Christie didn’t like her character, describing him as an “egocentric little creep”, but when Dave Suchet brought him to life in TV’s Poirot, the detective found a whole new audience and gained fans across the world. \nStarting life as policeman, Poirot retired and became a private investigator in England, where he met Hastings, who narrated his most successful cases, the most famous being Murder On The Orient Express. Although Christie “killed” Poirot his popularity outlived him and he returned to our TV screens with four new stories. \n\nMiss Marple (1984-1992) \n\nJane Marple was an elderly spinster and amateur detective in the village of St. Mary Mead. An Agatha Christie creation, she appeared in 12 novels, starting with Murder in The Vicarage. Although Margaret Rutherford made her famous on the cinema screen during the 1950s and 60s, it is Joan Hickson’s portrayal of her in the classic 1980s BBC series that is closest to the books. \nThough she often seemed to be nothing more than a gossipy old woman, Miss Marple was quicker to get information out of suspects than local copper inspector Slack, and her willingness to put herself in dangerous situations meant that she always caught the criminal. \n\nKojak (1973-1978) \n\nThis sleuth is famous for his love for sweeties and his catchphrase, “Who loves you baby?” Kojak starred Telly Savalas as the bald-headed, lollipop-sucking New York City policeman Lieutenant Theo Kojak. The reason that Kojak loved lollipops was because Savalas was a heavy smoker, and in the face of growing anti-smoking feeling in the USA he decided to suck on a lollipop instead. This became his trademark and, along with charisma and humour, it lightened the gritty storylines. \nThe show was a huge worldwide hit and featured unknown actors who later found fame, including Sylvester Stallone and Richard Gere. \n\nJane Tennison, Prime Suspect (1991-2006) \n\nCreated by TV dramatist Lynda La Plante, Jane Tennison first appeared in Prime Suspect as a detective Chief Inspector surviving in a male world. Played by Helen Mirrem, Tennison was as far away from cuddly Miss Marple as it was possible to get. \nObsessive and determined to succeed, Tennison battled gender bias, alcohol and men whilst tracking down muggers and fighting off serial killers. Dark and hard-hitting, Prime Suspect was an instant success. Last year’s Prime Suspect 7 was Tennison’s final case and it saw her hunting a killer and fighting for her career. She’ll be remembered for breaking the mould of female detectives.';
		var hundredYearsOld='100 Years Old and Still Doing Her Bit for Others \n\n  100-year-old woman who is still an active volunteer at her local hospital has vowed to keep going. \n  Betty Lowe, (17) ________, was awarded the Member of the Order of the British Empire 12 years ago for her contribution to the Women’s Royal Voluntary Service, a charity that provides a range of services for vulnerable people who might otherwise feel lonely. \n  She still helps out at her local WRVS shop at Hope Hospital, Salford, (18) ________ so that it can offer services from meals on wheels for elderly people to welfare centres for soldiers in the Army. \n  The active lady, (19) ________ and had to attend an open-air school, is also still involved with the Girl Guides, 89 years after she first joined. \n  Miss Lowe said: “I’ve been in the guides since I was 11. I was very interested in it and I used to go camping and walking. I was a bit of an outdoor girl when I was younger.” \n  She progressed to being a guide leader, a role in which she introduced hundreds of teenage girls to the organisation, running annual camping trips, and is still a member of the Trefoil Guild, an organisation of more than 20,000 members (20) ________. \n  She said: “I’ve been involved with the WRVS for 34 years and I still do half a day a week.” \n  She never married or had children, but her nephew Peter Lowe says (21) ________ and bakes dozens of cakes for relatives. \n  Mr. Lowe said: “She has a massive circle of friends and we all think she is marvellous. I think she loves being active. She doesn’t like sitting around doing nothing.” \n  Miss Lowe had a run of accidents before her birthday, spending a week in hospital after a fall at home and suffering whiplash in a car accident while being driven to her nephew’s house. But (22) ________ and more than 100 friends and relatives turned up to congratulate her on her centenary. \n  She said: “I think it’s very good to be 100. I’ve enjoyed all my life.” ';
		var matchMadeItInHeaven='Match Made It in Heaven\n \n  As I sat sipping a cup of tea at my sister Doris’ house, my husband, Brian, (23) ________ my eye and flashed me a wide smile. Brian’s eyes had lit up when he saw Michael, our nephew, playing with a pile of craft matchsticks, attempting to make a house. \n  “How about a (24) ________?” he said to Michael. “You make a house and I’ll make a little boat”. In a couple of hours the pair had cut, crafted and glued the matchsticks together and the task was complete. “I’m going to call the boat Hazel,” Brian said proudly. That was when his (25) ________ really started. \n  We found a hobby shop that sold modelling matchsticks, and we soon became their best customers. “I’m going to get bags of them,” Brian said. “I’ll start a new project when I get home.” He got to work on a larger boat, swiftly followed by an (26) ______ copy of a Second World War torpedo boat. Brian was never happier than when he was sat in front of the TV with his matchsticks and PVA glue. It was a great way to keep his mind (27) ________ as he’d retired from his refrigerator factory job years before with health problems, so I was pleased he’d found a hobby he loved. \n  Soon he decided to build a giant grandmother clock. The project was (28) ________ well; it just would have been nice to clear up my living room floor occasionally. Brian would make sections of the clock and then he’d (29) ________ it together. It took around seven years and 210,000 matchsticks to complete the grandmother clock. It now has pride of place in our living room, and chimes to the tune of Big Ben every 15 minutes. \n  As the pieces (30) ________ up, the space in our house disappeared. “We’re going to have to find new homes for some of your models,” I said to Brian one day. The loft was crammed full of pieces and I hadn’t seen the coffee table in years. He’d made a beautiful rocking horse, complete (31) ________ a saddle made from one of my old bags, which we gave to Brian’s sister. He’d also built a huge windmill that played Tulips from Amsterdam, which we (32) ________ to his aunt. \n  The craziest idea Brian ever had was to row from Dover to Calais in a giant boat made of matchsticks. He actually got as far as constructing the 5ft (33) ________. It took nearly a month and 216,000 matchsticks to build, but thankfully that idea was shelved. \n  Instead, he contented himself with making yet another old wartime boat. There were working lights, tiny lifeboats and even the propellers worked. \n  But hopefully the latest boat won’t be here for much longer. \n  “Do you think the maritime museum would (34) ________ the boat?” Brian asked recently. “That’s a lovely idea,” I said. It would be great if they did – then at least I might get my living room back. ';
		var howPigeonsGetHome='How Pigeons Really Get Home\n \n  Homing pigeons (35) ________ for their uncanny internal compass, yet a new study reveals that sometimes the birds get home the same way we do: They follow the roads. Tim Guilford and Dora Biro at (36) ________ Oxford University followed pigeons in Oxford over a three-year period, using tiny tracking devices equipped with global positioning system technology (37) ________ by Swiss and Italian colleagues. \n  What they discovered was surprising. Within ten kilometers of home, the pigeons relied less on their well-known talents for decoding the sun’s position or deciphering the Earth’s magnetic field (38) ________ them navigate. Instead they opted for a habitual route that followed linear features in the landscape, such as roads, rivers, railways, and hedge lines – even when it wasn\'t the most direct way home. “It was almost comical,” says Guilford. “One pigeon followed a road to a roundabout, then exited onto a major road that led to a second roundabout. Others flew down the River Thames, only to make a (39) ________ turn at a bridge.” Guilford suggests that sticking to a (40) ________, linear route may actually make homing more reliable – and easier. “It made me smile to see it,” says Guilford. “You can imagine yourself flying along a road doing the same thing.”';
		var whyDoesTheRedMeansStop='Why Does Red Mean Stop?\n \n  The 19th-century Scottish engineer Robert Stevenson, who was active in designing early lighthouses, (41) ________ for an alternative colour to white – most lighthouses had a white beacon – when he built a lighthouse near to one that already existed, because he was afraid ships (42) ________ be able to tell which was which. \n  Of the light sources and (43) ________ glasses available at the time, he found that red was a particularly intense light, meaning it (44) ________ from the greatest distance. \n  So in maritime signalling red became an alternative to white, and was later adopted by the Admiralty in 1852 (45) ________ the port-side on steam vessels. Green was adopted for the starboard-side, and vessels seeing the green light on other ships had the right of way. \n  When train tracks were developed, engineers adopted this system as (46) ________ stop and go – and the same system continued with cars. ';
		var theWholeWorlsInOneBuilding='The Whole World in One Building\n\nA journey (47) ________ the world, all along the 8-th degree of longitude, starting and ending in Bremerhaven. Through countries and climate zones, (48) ________ the glaciers of Switzerland to the swamps of Cameroon to the desert heat of the Sahel. This unique experience can be had at the Klimahaus Bremerhaven, which opened in summer 2009. For a few hours the visitors become globetrotters in deceptively real-(49) ________ landscapes in an exhibition covering 11.500 square metres. You can hike through the tropics and across the Antarctica ice cap. Interactive exhibits show how the climate determines the daily lives of people around the globe – and demonstrate how climate change (50) ________ transform life on the continents.';
		answer47Array=new Array("around","across");
		answer48Array=new Array("from");
		answer49Array=new Array("looking");
		answer50Array=new Array("will","would","can","could","may","might");
		gradeArray=new Array("100.0","100.5","100.5","101.5","103.5","106.5","110.5","115.0","120.0","124.0","128.0","131.0","133.5","136.0","137.5","139.0","140.5","141.5","142.5","143.5","144.5","145.0","146.0","147.0","148.0","149.0","150.0","151.0","152.5","153.5","154.5","155.5","157.0","158.0","159.0","160.0","161.5","162.5","163.5","164.5","166.0","167.0","168.0","169.5","170.5","171.5","173.0","174.0","175.5","176.5","178.0","179.0","180.5","182.0","183.5","184.5","186.0","187.5","189.0","190.0","191.5","192.5","194.0","195.0","196.5","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("g","c","f","h","b","c","d","b","c","a","a","c","a","d","g","f","d","a","e","g","h","b","c","a","c","b","b","a","d","c","a","d","d","b","c","a","c","b","a","d","b","d","d","c","a","b",answer47Array,answer48Array,answer49Array,answer50Array," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textual","textual","textual","textual","tvir");
		textAnalysisArray=new Array(amazing,amazing,amazing,amazing,amazing,waysToImproveMemory,waysToImproveMemory,waysToImproveMemory,waysToImproveMemory,waysToImproveMemory,waysToImproveMemory,watchingTheDetectives,watchingTheDetectives,watchingTheDetectives,watchingTheDetectives,watchingTheDetectives,hundredYearsOld,hundredYearsOld,hundredYearsOld,hundredYearsOld,hundredYearsOld,hundredYearsOld,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,matchMadeItInHeaven,howPigeonsGetHome,howPigeonsGetHome,howPigeonsGetHome,howPigeonsGetHome,howPigeonsGetHome,howPigeonsGetHome,whyDoesTheRedMeansStop,whyDoesTheRedMeansStop,whyDoesTheRedMeansStop,whyDoesTheRedMeansStop,whyDoesTheRedMeansStop,whyDoesTheRedMeansStop,theWholeWorlsInOneBuilding,theWholeWorlsInOneBuilding,theWholeWorlsInOneBuilding,theWholeWorlsInOneBuilding,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,24);
		variantNumberArray=new Array(8,8,8,8,8,4,4,4,4,4,4,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}

/*ЗНО-2011 Английский язык. Основной тест.*/
	if(testName=="ЗНО-2011 Английский язык. Основной тест.")
	{
		testLength=46;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2011main1\/';
		fullTextWindowHorizontalOffset=-125;
		fullTextWindowVerticalOffset=-75;
		var ceu='Central European University\n\n1. ________\nCentral European University (CEU) is looking to attract students with a sense of social responsibility who are dedicated to contributing to the public good, who are transnationallyinclined,and who have the potential to work for open and democratic societies. They must in addition possess the highest academic achievements and have the potential for intellectual development. Another of the main characteristics of CEU’s student body is the lack of a dominant national culture. Students are admitted on the basis of merit, without any specific country quotas or preferences.\n\n2. _______\nCEU encourages and supports a lively university atmosphere and a sense of community that extends beyond the classroom. As the majority of students come to CEU as international students, the university seeks to build upon the multicultural diversity of its constituents and to enrich the overall student experience. Student activities at CEU are organized directly by the students, by their academic departments or by the Student Life Office of Student Services. Some activities support specific interests, talents and academic pursuits, while others are open to the entire university community and bring together students, faculty and staff.\n\n3. ________\nThe CEU Residence and Conference Center is a modern residence complex located in District 10 of Budapest. It provides air-conditioned single rooms for up to 180 students; each room is equippedwith a personal computer and a private bathroom. The dormitory is run as a hotel-type service and students can find many other services such as a small shop for various personal articles, a cafeteria, a restaurant and a pub. There is a sports center with a swimming pool and a fitness room, basketball and tennis courts, etc. On every floor there is a quiet lounge with a coffee machine, a microwave oven and a refrigerator; as well as a TV room, and a laundry room. Bed linen is provided, but not towels and toiletries. Cooking or keeping food in rooms is not permitted.\n\n4. __________\nWith over 250,000 documents in various formats, the CEU Library holds the largest collection of English-language materials in the social sciences and the humanities in Central and Eastern Europe. New materials are constantly acquired, particularly within the disciplines of CEU’s academic departments and programs. Recently published English-language monographs and serials in economics, environmental policy and sciences, history, international relations and European studies, law, and political science can be found in the collection: many are unique to the region. The basic literature of specialized fields such as gender studies or nationalism is also richly represented.\n\n5. ___________\nCEU maintains an internal academic data network. Course registration and grading are computerized, and students are responsible for conducting all necessary procedures in connection with registration. This continually developing service integrates most of the administrative functions students have to deal with during their stay at CEU. ';
		var studyHabits='Forget What You Know About Good Study Habits(BY BENEDICT CAREY)\n\nEvery September, millions of parents try a kind of psychological witchcraft, to transform their summer-glazed campers into fall students, their video-bugs into bookworms. Advice is cheap and all too familiar: Clear a quiet work space. Stick to a homework schedule. Set goals. Set boundaries. Do not bribe (except in emergencies).\n\nAnd check out the classroom. Does Junior’s learning style match the new teacher’s approach? Or the school’s philosophy? Maybe the child isn’t “a good fit” for the school.\n\nSuch theories have developed in part because of sketchy education research that doesn’t offer clear guidance. Student traits and teaching styles surely interact; so do personalities and at-home rules. The trouble is, no one can predict how.\n\nYet there are effective approaches to learning, at least for those who are motivated. In recent years, cognitive scientists have shown that a few simple techniques can reliably improve what matters most: how much a student learns from studying.\n\nThe findings can help anyone, from a fourth grader doing long division to a retiree taking on a new language. But they directly contradict much of the common wisdom about good study habits, and they have not caught on.\n\nFor instance, instead of sticking to one study location, simply alternating the room where a person studies improves retention. So does studying distinct but related skills or concepts in one sitting, rather than focusing intensely on a single thing.\n\n“We have known these principles for some time, and it’s intriguing that schools don’t pick them up, or that people don’t learn them by trial and error,” said Robert A. Bjork, a psychologist at the University of California, Los Angeles. “Instead, we walk around with all sorts of unexamined beliefs about what works that are mistaken.”';		
		var natGeo='National Geographic invites you to join a variety of thrilling expeditions. Accompanying each expedition is a diverse team of experts – from naturalists to regional specialists – who will share their knowledge and insights on the wildlife, landscapes, and local culture. See some of the members of our extraordinary team below.\n\n11. Jay Dickman\nPulitzer Prize-winning photographer Jay Dickman has worked in photojournalism for more than 30 years, covering topics as diverse as the war in El Salvador, the Olympics, national political conventions, the Super Bowl, and the 40th anniversary of the bombing of Hiroshima. He lived for three months in a village in Papua New Guinea and spent a week under the Arctic ice in a nuclear attack sub on assignments for National Geographic magazine. His work has also appeared in publications around the world, including LIFE, Time, and Sports Illustrated.\n\n12. Kitty Coley\nKitty Coley is a geologist, naturalist, and avid birder who serves as a consultant to National Geographic magazine and has led expeditions for National Geographic for more than eight years. She worked as a geologist for 15 years before becoming involved full-time in expedition travel. Through her work, she has spent extensive time in remote rain forests and rugged geologic settings around the world. Her love of nature has led to exploration through scuba diving, backpacking, white-water and sea kayaking, and mountain biking. Kitty shares her in-depth knowledge about the fascinating aspects of the geology, flora, and fauna in a very interactive, enthusiastic approach.\n\n13. Michael Melford\nNational Geographic photographer Michael Melford has produced over 30 stories for National Geographic Traveler magazine, including eight covers. Some of Michael’s recent assignments have focused on America’s national parks, and the need to preserve them. Michael has produced photography for eight books for National Geographic, including three on Alaska, his favorite being Treasures of Alaska, for which he spent four months traveling to every corner of the state. When not shooting for National Geographic, Michael enjoys giving seminars and workshops on photography, and sharing both his love of nature and his extensive knowledge.\n\n14. Tierney Thys\nNational Geographic Emerging Explorer, Tierney Thys, is a marine biologist and documentary filmmaker whose work explores the breadth of animal diversity from pole to pole and chronicles global environmental change. Tierney is a world authority on the giant ocean sunfish, Mola mola, and has led numerous expeditions worldwide from Africa to Baja, Japan, Indonesia and the Galapagos Islands to study these bizarre jelly-eating behemoths. Tierney has also developed and guided National Geographic student marine biology expeditions in Monterey Bay.\n\n15. Kurt Westenbarger\nWriter and wilderness guide Kurt Westenbarger has led camping and backpacking trips in the Rocky Mountains for more than thirty years. His articles on natural history have appeared in Bicycling, Outdoor Life, Montana Magazine, West Yellowstone News and Big Sky’s Lone Peak Lookout. An instructor at Western Montana College, Kurt is well-versed in the region’s diverse geology, flora, and fauna, as well as the history of the Lewis & Clark expedition and the 1877 Nez Perce flight.';
		var introSleep='Introduction to sleep.\n\nWhen you\'re in a rush to meet work, school, family, or household responsibilities, do you cut back on your sleep? Like many people, you might think that sleep is merely a "down time" when (16) __________. Think again.\n\nWhat is sleep?\nSleep was long considered just a uniform block of time when you are not awake. Thanks to sleep studies done over the past several decades, it is now known that sleep has distinctive stages that cycle throughout the night. Your brain stays active throughout sleep, but (17) __________. For  instance, certain stages of sleep are indeed for us to feel well rested and energetic the next day, and other stages help us learn or make memories.\n\nIn brief, a number of vital tasks carried out during sleep help maintain good health and enable people to function at their best. On the other hand, not getting enough sleep can be dangerous - for example, (18) __________ if you drive when you are tired.\n\nHow much sleep is enough?\nSleep needs vary from person to person, and (19) __________ . Most adults need 7-8 hours of sleep each night. Newborns, on the other hand, sleep between 16 and 18 hours a day, and children in preschool sleep between 10 and 12 hours a day. School-aged children and teens need at least 9 hours of sleep a night.\n\nSome people believe (20) __________ . But there is no evidence to show that older people can get by with less sleep than younger people. As people age, however, they often get less sleep or  they tend to spend less time in the deep, restful stages of sleep. \n\nWhy sleep is good for you and skimping on it isn\'t.\nDoes it really matter if (21) __________? Absolutely! Not only does the quantity of your sleep matter, but the quality of your sleep is important as well.';
		var movPictures='From the History of Moving Pictures\n\nMany believe that the story first began in America in 1877, when two friends were (22) ________ over whether a horse ever had all four feet or hooves off the ground when it galloped. To settle the bet, a photographer was asked to photograph a horse galloping and the bet was settled because you could see that all the hooves were (23) __________ the ground in some of the photos. What was even more interesting was that if the photos were shown in quick succession the horse looked (24) __________ it was running – in other words ‘moving pictures’.\n\nThe person who became interested in (25) __________ the moving pictures to its next step was the famous American inventor Thomas Edison. Actually, he didn’t do the work (26) __________ but rather asked a young Scotsman in his employ to design a system, which he did. Now this young fellow was clever because the first thing he did was study other systemsprimitive as they were – of moving pictures and then put all the existing technologies together to make the first entire motion picture system. He (27) __________ a camera, a projection device and the film. The system was first shown in New York in 1894 and was really very popular. Apparently people (28) __________ around the block to see the wonderful new invention. There were, however, a couple of problems with the system. The camera weighed over 200 kilograms and only one person at a time could see the film.\n\nWell now, news of the new system in America (29) __________ fast and a number of rival European systems started to appear once people had heard about it. The single problem with all the systems was that they couldn’t really (30) __________ the film onto a screen – you know, so more than one person could see it. Then in 1895, three systems were developed, more or less at the same time and independently of each other. I guess the most famous of these was (31) __________ the Lumiere Brothers from France, and they called their system the cinematograph which of course is where the word cinema comes from.\n\nWell now, once the problem of projection had been solved, the next (32) __________ for the inventors was to make the films longer and more interesting. A continuing problem at the time was that the films had a (33) __________ to break when they were being played – a problem which was caused by the tension between the two wheels, or ‘reels’ as they are called, which hold the film.';
		var maleBirds='Male Birds Belt out Their Song by Putting a Little Muscle into It. \n\nSome male songbirds can sing (34) __________ notes than females because they have stronger muscles to make the sounds. Some scientists used to think it was all about how well the birds could force air out of their lungs, but new research says it has more to do with muscles in the (35) __________ throats. \n\nThere’s a reason the boy birds are better singers. They have (36) __________ a mate. The more varied their songs, (37) __________ it will stand out from other boy birds who are also singing in hopes of finding a mate. Varied songs also are easier to hear over noises, like a rushing stream or the noisy calls of other birds. \n\nAlthough all birds (38) __________ knowing certain calls, songbirds learn how to sing from their parents. That ability is only found in songbirds, humans and a few other mammals like dolphins, whales and bats. So think about muscles the next time you hear a bird singing. Muscles (39) __________ just in your arms and legs, or in a bird’s wings. They also help us make a variety of sounds. ';
		var songsStuck='Why do songs get stuck in our heads?\n\nHaving a song, tune, or commercial jingle stuck in one\'s head is a phenomenon (40) ________ as having an earworm. Most people have had an earworm at one time. The experience is harmless and unrelated to both obsessive-compulsive disorder and endomusia, the (41) ________ of music that is not really there. Certain songs – simple, repetitive, or oddly incongruous – have properties that act as mental mosquito bites in that they produce a cognitive "itch." The condition also arises when people struggle (42) ________ forgotten lyrics or how a song ends. To scratch a cognitive itch, the brain repeats the song, which then traps the hapless victim in a repeated cycle of itching and scratching. Everyone has his or her own list of demon tunes that haunt. Earworms occur more often among women, musicians, and individuals who (43) ________ to worry. Earworms also vary across situations, striking when people (44) ________ or under stress. How can you make an earworm go away? Thinking of something else or actually listening to the song in question are thought to help, but there is presently no research evidence showing what works best. Fortunately, (45) ________ episodes eventually dissipate on their own.';
		var theWholeWorlsInOneBuilding='The Whole World in One Building\n\nA journey (47) ________ the world, all along the 8-th degree of longitude, starting and ending in Bremerhaven. Through countries and climate zones, (48) ________ the glaciers of Switzerland to the swamps of Cameroon to the desert heat of the Sahel. This unique experience can be had at the Klimahaus Bremerhaven, which opened in summer 2009. For a few hours the visitors become globetrotters in deceptively real-(49) ________ landscapes in an exhibition covering 11.500 square metres. You can hike through the tropics and across the Antarctica ice cap. Interactive exhibits show how the climate determines the daily lives of people around the globe – and demonstrate how climate change (50) ________ transform life on the continents.';
		gradeArray=new Array("100.0","100.5","100.5","100.5","101.0","102.5","105.5","109.5","114.0","118.5","122.5","126.5","130.0","133.0","135.5","137.5","139.5","141.0","142.0","143.0","144.0","145.0","146.0","147.0","147.5","148.5","149.5","150.5","151.5","152.5","153.5","154.5","155.5","156.5","157.5","158.5","160.0","161.0","162.0","163.0","164.5","166.5","166.5","168.0","169.0","170.0","171.5","172.5","173.5","175.0","176.0","177.5","178.5","180.0","181.5","183.0","184.5","186.5","188.0","189.5","191.5","193.0","194.5","196.5","197.5","198.5","199.5","200.0","200.0","200.0");
		answerArray=new Array("c","g","f","e","a","b","d","d","c","a","f","c","h","a","d","e","c","h","a","f","g","c","b","d","a","c","a","b","b","d","c","a","b","c","b","d","b","a","d","b","c","d","a","c","b"," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(ceu,ceu,ceu,ceu,ceu,studyHabits,studyHabits,studyHabits,studyHabits,studyHabits,natGeo,natGeo,natGeo,natGeo,natGeo,introSleep,introSleep,introSleep,introSleep,introSleep,introSleep,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,movPictures,maleBirds,maleBirds,maleBirds,maleBirds,maleBirds,maleBirds,songsStuck,songsStuck,songsStuck,songsStuck,songsStuck,songsStuck,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24);
		variantNumberArray=new Array(8,8,8,8,8,4,4,4,4,4,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2012 Английский язык. Основной тест.*/
	if(testName=="ЗНО-2012 Английский язык. Основной тест.")
	{
		testLength=43;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2012main1\/';
		fullTextWindowHorizontalOffset=-125;
		fullTextWindowVerticalOffset=-75;
		var bodyLanguage='BODY LANGUAGE \n\n1.______________ \nShaking hands is a polite gesture indicating friendship and acceptance. Atone lime, however, meeting with a stranger around suspicion and fear. To prevent each other from suddenly attacking, strangers joined right hands as a pledge of non-aggression. Thus demonstrating that neither party was about to use a weapon. Handshaking is now the activity practised by both men and women not only to greet one another but to seal a contract as well. \n\n2.______________ \nThe American "OK" sign, the joining of the thumb and forefinger in a circle, indicates that all is well or perfect. The "OK" sign acquired its modern connotation from the ancient world, wherein the circle itself was one of the oldest and most common symbols for perfection. The verbal expression ‘OK’ is native to the United States and was formed in support of the letter ‘O’ indicating that something was as perfect as a circle. \n\n3.______________ \nWhen not used in hitchhiking, the thumbs-up gesture in American culture typically indicates "I like that", while the thumbs-down gesture indicates your negative feelings towards something. The gesture has been linked to the lime of the Roman arena, where the emperor supposedly ordered life or death for a gladiator by turning thumbs up or thumbs down. \n\n4.______________ \nCrossing one\'s fingers serves as protection from bad luck or from the penalties associated with lying. Thus, when people wish for good luck, they cross their fingers, and when they wish not to be held accountable for a lie, they cross their fingers and hide their arms behind their backs to not let on that they are lying. \n\n5.______________ \nBy sticking out their tongues, people react to situations that may be unpleasant for them. Such displays indicate laughing or rejection. For example, children often stick out their tongues to tease each other. Or, they may also stick out their tongues in reaction to activities requiring close concentration; hence, the tongue-showing of children focused on their homework.';
		var generationGap='GENERATION GAP\n\nAs president of the Walt Disney Company\'s children\'s book and magazine publishing unit, Russell Hampton knows a thing or two about teenagers. Or he thought us much until he was driving his 14-year-old daughter, Katie, and two friends to a play last year in Los Angeles.\n\n"Katie and her friends were sitting in the back seat talking to each other about some movie star; I think it was Orlando Bloom," recalled Mr. Hampton. "I made some comment about him. І don\'t remember exactly what, but I got the typical teenager sigh and Katie rolled her eyes at me as if to say, ‘Oh, Dad, you are so out of it.’\n\nAfter that, the back-seat chattering stopped. When Mr Hampton looked into his rearview mirror he saw his daughter sending a test message on her cellphone. "Katie, you shouldn\'t be texting all the time," Mr. Hampton recalled telling her. "Your friends are there. It\'s rude." Katie rolled her eyes again.\n\n"But, Dad, we\'re texting each other," she replied, "I don\'t want you to hear what I’m saying." Mr. Hampton turned his attention back to the freeway. It\'s a common scene these days, one playing out in cars, kitchens and bedrooms across the country.\n\nChildren increasingly rely on personal technological devices like cellphones to define themselves and create social circles apart from their families, changing the way they communicate with their parents. Adults and teenagers alike found a form of easy communication unknown to the inventor of the telephone, Alexander Graham Bell, and his daughters.\n\nAnd the computer, along with the Internet, has given even very young children virtual lives distinctly separate from those of their parents and siblings.\n\nSocial psychologists who have studied the social impact of mobile communications, say these trends are likely to continue as cellphones turn into mini hand-held computers, social networking devices and pint-sized movie screens.\n\n"For kids it has become an identity-shaping and psyche-changing object," Ms. Turkle said, "No one creates a new technology really understanding how it will be used or how it can change a society."';		
		var lollipop='LOLLIPOP MEN AND WOMEN\n\n In Britain someone helping children cross the street is called "lollipop person", because their sign looks like a lollipop.\n\n The job of a lollipop person is to walk to the middle of the road at a suitable time, (17)____ : it is a legal requirement for traffic (18) ___ . The lollipop man/lady will signal that it is all right (19 ) ____ . Traffic  may only move once the sign has been lowered.\n\n Generally speaking, school crossings are manned for approximately 3 hours a day or less. As a result, the work has always appealed more to people who were just seeking (20) _____ such as the retired.\n\n Lollypop people were introduced (21) _____ , who had previously run crossing patrols, to perform other duties. The earliest lollipops were red and black rectangles printed with "Stop, Children Crossing".\n\n In 2001 in Europe patrollers were given extra powers allowing them (22) _____ . The most recent change in the history of the School Crossing Patrol saw the word "children" replaced with a symbol to bring the UK in line with the rest of the EU.';
		var harryPotter='Harry Potter Film Takes $168m to Break Ticket Records\n\n  The (23) ……… Harry Potter movie has shattered box office records in the US and Canada, taking $168m over its opening weekend.\n\n  Harry Potter and the Deathly Hallows: Part 2 had already made \xA392.1 m on its opening day, said the film\'s distributor, Warner Bros. The (24) .… opening weekend record was held (25) ……… Batman film The Dark Knight, (26) ……… took $10m.\n\n  The Potter film is the eighth movie in the hugely popular franchise. Fans around the world (27) ……… for hours to be among the first to see the film, which was based on the second part оf JK Rowling\'s seventh and final book in the series.\n\n  Most cinemas were showing the film in 3D, which slightly increased the ticket (28) ………. . The (29) ……… Porter film series has so far earned more than \xA34bn worldwide, not including the final film\'s takings so far. Internationally, the film had taken $157.5m by Friday. "A billion dollars is (30) ……… going to happen, " said Dan Fellman, head of  domestic distribution at Warner Bros. It has been 10 years (31) ……… the first movie in the series, Harry Potter and the Philosopher s Stone, was (32) ……… . It made stars of its young cast, Daniel Radcliffe, Emma Watson and Rupert Grint.';
		var ancientOlympic='ANCIENT OLYMPIC EVENTS\n\n The ancient Olympics were rather different from the modern Games. There were (33) ……… events, and only free men who (34) ……… Greek could compete, instead of athletes from any country. Also, the games were always held at Olympia instead of moving around to different sites every time.\n\n Like our Olympics, though, winning athletes were heroes who made their (35) ……… towns proud. One young Athenian nobleman defended his political reputation by (36) ……… how he entered seven chariots in the Olympic chariot-race. This high number of entries made both the aristocrat and Athens (37) ……… very wealthy and powerful.';
		var enduringMasterpiece='ENDURING MASTERPIECE\n\n Although it\'s known as the Mona Lisa, (38) ……… famous painting was (39) ……… titled La Giaconda. Painted on wood, it\'s a portrait of Lisa Gherardini, the wife of a Florentine merchant. X-rays (40) ……… that Leonardo sketched three different poses before (41) ……… on the final design. The painting of Lisa has no eyebrows because it was the fashion of the time for women (42) ……… them off.';
		var theWholeWorlsInOneBuilding='The Whole World in One Building\n\nA journey (47) ________ the world, all along the 8-th degree of longitude, starting and ending in Bremerhaven. Through countries and climate zones, (48) ________ the glaciers of Switzerland to the swamps of Cameroon to the desert heat of the Sahel. This unique experience can be had at the Klimahaus Bremerhaven, which opened in summer 2009. For a few hours the visitors become globetrotters in deceptively real-(49) ________ landscapes in an exhibition covering 11.500 square metres. You can hike through the tropics and across the Antarctica ice cap. Interactive exhibits show how the climate determines the daily lives of people around the globe – and demonstrate how climate change (50) ________ transform life on the continents.';
		gradeArray=new Array("100.0","100.5","100.5","101.5","103.5","107.0","110.5","114.5","118.5","122.0","125.0","127.5","129.5","131.5","133.0","134.0","135.5","136.5","137.5","138.5","139.5","140.5","142.0","143.0","144.0","145.0","146.0","147.5","148.5","149.5","150.5","152.0","153.0","154.0","155.0","156.5","157.5","158.5","160.0","161.0","162.5","163.5","165.0","166.0","167.5","168.5","170.0","171.5","173.0","174.5","176.0","178.0","179.5","181.5","183.5","186.0","188.0","190.5","193.0","195.5","198.0","199.5","200,0");
		answerArray=new Array("h","c","d","g","e","b","c","d","c","a","f","a","e","g","b","d","d","a","e","g","b","f","c","b","a","b","d","c","d","b","a","a","d","a","d","c","c","d","c","b","a","d"," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(bodyLanguage,bodyLanguage,bodyLanguage,bodyLanguage,bodyLanguage,generationGap,generationGap,generationGap,generationGap,generationGap,"test","test","test","test","test","test",lollipop,lollipop,lollipop,lollipop,lollipop,lollipop,harryPotter,harryPotter,harryPotter,harryPotter,harryPotter,harryPotter,harryPotter,harryPotter,harryPotter,harryPotter,ancientOlympic,ancientOlympic,ancientOlympic,ancientOlympic,ancientOlympic,enduringMasterpiece,enduringMasterpiece,enduringMasterpiece,enduringMasterpiece,enduringMasterpiece,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,20);
		variantNumberArray=new Array(8,8,8,8,8,4,4,4,4,4,8,8,8,8,8,8,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*************************************************************/
//Тесты по физике
/*************************************************************/	
/*основной тест ЗНО-2009 по физике 1 сессия */
	if(testName=="ЗНО-2009 физика. Основной тест.")
	{
		testLength=35;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2009main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","103.5","108.5","114.0","120.5","127.0","133.5","139.0","144.0","148.5","152.5","156.0","159.0","162.0","164.5","166.5","168.5","170.5","172.0","173.5","175.5","177.0","178.5","179.5","181.0","182.5","184.0","185.0","186.5","187.5","188.5","190.0","190.5","191.5","192.0","193.5","194.0","195.0","196.0","197.0","197.5","198.0","199.0","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","d","b","c","b","a","d","d","d","c","a","d","b","d","b","b","b","d","c","c","d","c","d","d","bace","dbae","dbca",60,200,15,0.1,1.5,564,600);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*основной тест ЗНО-2010 по физике 1 сессия */
	if(testName=="ЗНО-2010 физика. Основной тест.")
	{
		testLength=37;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","101.5","104.5","109.0","114.5","119.5","124.5","128.5","133.0","136.5","139.5","143.0","146.0","149.0","151.5","154.0","156.5","158.5","160.5","162.0","164.0","165.5","166.5","168.0","169.0","170.5","171.5","172.5","173.5","174.5","175.5","176.5","177.5","178.5","180.0","181.0","182.0","183.0","184.0","185.5","186.5","187.5","188.5","190.0","191.0","192.5","194.0","195.5","197.0","198.0","199.0","199.5","200,0");
		answerArray=new Array("c","a","c","d","a","d","c","c","a","c","d","c","d","b","b","a","a","d","d","a","a","a","d","b","c","cade","caeb",6,4,0.04,25,2.56,5,1.5,8,1.2,2);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
	/*основной тест ЗНО-2011 по физике 1 сессия */
	if(testName=="ЗНО-2011 физика. Основной тест.")
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2011main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","102.0","105.0","109.0","114.0","119.5","125.0","130.0","135.0","140.0","144.5","149.0","153.0","157.0","160.0","163.0","165.5","168.0","170.0","171.5","173.0","174.5","176.0","177.0","178.0","179.5","180.5","181.5","182.5","183.5","185.0","186.0","187.0","188.0","189.0","190.0","191.0","192.0","193.0","194.0","195.0","196.0","196.5","197.5","198.0","198.5","198.5","199.0","199.5","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","d","b","d","a","d","d","c","b","b","d","a","c","d","a","b","c","c","c","c","b","d","b","c","aebc","ecda","dbae","cbad",0.25,0.4,1,0.4,4,0.32,7);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*пробный тест ЗНО-2012 по физике  */
	if(testName=="ЗНО-2012 физика. Пробный тест.")
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2012demo\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=4;
		gradeArray=new Array("100.0","100.5","100.5","101.0","103.0","106.5","111.5","117.0","122.5","127.5","132.5","137.5","141.5","145.0","148.5","151.5","154.0","156.5","159.0","161.0","163.0","164.5","166.5","168.0","169.5","170.5","172.0","173.5","174.5","176.0","177.5","178.5","180.0","181.0","182.5","183.5","184.5","186.0","187.5","188.5","189.5","191.0","192.0","193.0","194.5","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("a","c","b","c","b","b","c","b","a","d","a","c","d","c","d","c","c","d","b","a","d","b","d","d","b","d","dcba","ebda","dcae","abdc",5,16,4.5,45,2040,21);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*основной тест ЗНО-2012 по физике  */
	if(testName=="ЗНО-2012 физика. Основной тест.")
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/fiz\/img\/test2012main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=4;
		gradeArray=new Array("100.0","100.5","100.5","101.0","103.0","106.5","111.5","117.0","122.5","127.5","132.5","137.5","141.5","145.0","148.5","151.5","154.0","156.5","159.0","161.0","163.0","164.5","166.5","168.0","169.5","170.5","172.0","173.5","174.5","176.0","177.5","178.5","180.0","181.0","182.5","183.5","184.5","186.0","187.5","188.5","189.5","191.0","192.0","193.0","194.5","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("b","b","d","b","d","c","c","a","b","c","c","c","c","a","c","d","a","a","a","c","b","c","c","d","b","c","dbac","edcb","ebac","ecdb",10,45,84,0.75,70,2.2);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}	
/*************************************************************/
//Тесты по французскому языку	
/*************************************************************/		
if(testName=="ЗНО-2010 Французский язык. Основной тест.")
	{
		testLength=51;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/fra\/img\/test2010main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;
		var Task1='À: Jacques.Lafavre@yaho.fr \n\nCopie: Nadia.Chikou@hitmail.com , Pierre.Arditi@laposte.fr, Alice.Newman@voila.fr, Georges.de.Durand@bmail.com\n\nObjet: petit mot de moi \n\nSalut chers frères et amis(ies), \nJ’étais occupé ces dernières 24 h à une mission urgente et trop importante pour la société où je travaille. Mais je n’ai pas oublié l’esprit d’amitié et d’entraide qui règne dans notre institut et surtout les traditions que nous gardons toujours dans nos coeurs. Je tiens à tous vous féliciter d’avoir exprimé des sentiments si chaleureux envers ceux qui ont réussi leurs examens, la gentillesse touche directement le coeur...';
		var Task2='Le 22 octobre 2008 Airbus A380 a soufflé sa première bougie. Le plus gros avion de voyageurs du monde (500 à 840 places selon ses aménagements) a transporté 700 000 passagers depuis son lancement, il y a un an. C’est le meilleur résultat de l’avion parmi tous les avions des compagnies aériennes.';
		var Task3='Quelques programmes spécifiques...\n\nLe Fonds francophone des inforoutes...\nfinance des projets qui favorisent l’appropriation et l’usage des inforoutes par la création de contenus d’expression française dans des domaines aussi variés que la jeunesse, la culture, l’enseignement, la recherche, l’économie, le droit, la presse, le tourisme ou les arts.\n\nhttp://www. francophonie.org/fonds';
		var Task4='Service d’accueil des Étudiants Étrangers \n39, av. Georges Bernanos\n75005 Paris \nTél.: 01 40 51 36 00 \n\nAttestation de bourse \n\nLe directeur du Centre Régional des OEuvres Universitaires et Scolaires de PARIS atteste que: \nMlle Oxana PETRENKO Dossier nº: 20005198 \nNé(e) le: 25/01/1987 \nPays de nationalité: UKRAINE \nAdresse: 20, rue Zhitomirska, apt.47 \n02345 Kyiv \nest titulaire d’une bourse du Gouvernement Français pour la période du 02/07/2005 au 28/07/2005 \n\nÀ Paris le 03/07/2005 \nLe Directeur du CROUS';
		var Task5='  ESPAGNE\n\nLes enfants du village espagnol de Noblejas (centre) seront désormais payés pour lire. La commune de 3 300 habitants «subventionnera les familles à hauteur d’un euro par heure passée à la bibliothèque» par leurs enfants scolarisés en primaire, a annoncé hier la mairie.\n\nAFP';
		var Task6='   En Belgique, il y a beaucoup de chaînes de télévision. Il est possible de les recevoir avec une antenne ou avec le câble. La plupart des Belges ont le câble. Il permet d\'avoir plus de chaînes de télévision. Les antennes satellites permettent de capter des chaînes du monde entier.\n  Il existe des magazines de télévision. Ils donnent les programmes et les articles sur les émissions. Le journal télévisé est présenté par des journalistes. Pour les autres émissions, ce sont des présentateurs. On dit aussi "animateurs" pour les jeux.';
		var Task7='   PASSEZ ENTRE LES GOUTTES\n\nLes averses sont nombreuses sur l’arc atlantique et le long des côtes de la Manche. Sur un large quart nord-est, de très belles éclaircies sont présentes. Au sud, le temps est perturbé et les précipitations sont soutenues en Corse.';
		var Task8='   Dernière minute\n\nTrop dur, je rentre de vacances. Une folie avec un pote (copain). On est parti tous les deux avec un vol trouvé à la dernière minute. Notre objectif c’était partir le plus loin possible, pour pas cher... On s’est retrouvé au fin fond de l’Inde. Superbe, merveilleux. On n’a rien dépensé, on a dormi dehors, rencontré des gens, mangé local... Je pense qu’on refera ça tous les ans. Ça, c’est la vraie découverte d’un pays et de ses habitants... Par contre le retour est... triste.';
		var Task9='   Pourquoi personne ne porte plus le caïman pour le mettre à l\'eau?\n\nDe Blaise Cendrars. \nPrix:13,50 euros Édition le Sorbier. \n\nParce qu’il n’est pas très gentil? Parce qu’il fait peur? Un peu des deux en fait. Un chasseur courageux peu méfiant porte secours à un caïman qui le supplie de l’aider. Le caïman, une fois sauvé se retourne contre le chasseur, et essaie de le dévorer. Mais un lièvre rusé passe par là. Beau conte africain.';
		var Task10='Pour la première fois depuis le début des années 1950, la capitale gagne des habitants. Selon le dernier recensement, compilé par l’Insee Ile-de-France et rendu public aujourd’hui, la ville comptait 2 181 400 habitants au 1er janvier 2006, soit 56 100 de plus qu’en 1999. Cette progression est uniquement due à un solde naturel plus important (+ 0,7% de croissance annuelle). Car le solde migratoire,lui, restenégatif(-0,4 %).';
		var Task11='  Chère Anita,\n\nJe te remercie pour tes belles photos. J’espère que tu as passé une bonne fin de séjour à Montpellier et un bon voyage de retour. T’es-tu remise pendant le mois d’août des gros efforts réalisés en juillet? Moi, j’ai passé quinze jours splendides en Corse, et maintenant la dure réalité frappe à nouveau à ma porte, les cours vont bientôt recommencer. Enfin, c’est la vie. J’espère continuer à avoir de tes nouvelles.\n\n     Je t’embrasse.\n          José';
		var Task12='  Les rayons solaires sont 8 fois plus puissants dans l’espace qu’une fois arrivés sur le sol terrestre. L’atmosphère protège ainsi la vie sur Terre. Cette puissance des rayons solaires intéresse les chercheurs depuis longtemps. Selon eux, une centrale placée en orbite autour de la Terre pourrait absorber l’énergie solaire et renvoyer beaucoup d’électricité propre sur notre planète, sous la forme d’ondes.\n  Problème important: envoyer du matériel dans l’espace dans une navette coûte actuellement près de 15 000 euros le kilo ...';
		var Task13='  Big Ben est-elle la plus grosse cloche du monde?\n\nContrairement à ce que pourrait laisser penser son nom, Big Ben n’est pas la plus grosse cloche du monde, elle est devancée par l’inutilisé «Tsar Kolokol III» du Kremlin à Moscou qui pèse 212 tonnes (soit plus de 10 fois plus lourde que la cloche anglaise). On estime aujourd’hui à plus de 200 000 le nombre de cloches réparties sur l’ensemble du territoire français.';
		var Task14='  Vous allez partir en France\n\nAvant de quitter votre pays vous devez:\n- retirer votre lettre de présentation à l’Ambassade,\n- vous assurer que l’Ambassade a bien prévenu le CNOUS de votre arrivée en France,\n- vous munir obligatoirement d’une somme de 100 € minimum,\n- vérifier que la validité de votre visa correspond bien à la durée du stage,\n- éviter d’arriver un samedi, un dimanche ou un jour chômé.\n\nNe venez pas en avance, votre hébergement ne pourra être assuré.';
		var Task15='  Leur histoire est liée aux loisirs ouvriers et aux «Dimanches au bord de l’Eau» pour y exercer des activités variées, très souvent liées à l’eau (régates, canotage, natation, joutes, pêche...), mais aussi pour se divertir avec des jeux de foire, de quilles, de boules et balançoires... On s’y attablait pour savourer une cuisine simple servie avec du vin blanc ou rouge: friture ou matelote de poisson, fricassée de lapin. Et puis on y dansait les danses populaires à l’époque: la valse, la polka et plus tard, la valse «Musette».\n  La première moitié du XXe siècle constitue l’âge d’or pour les guinguettes, alors que, au début des années 60, le goût pour les week-ends plus éloignés et de nouveaux types de musiques en annoncent le déclin. De nombreuses guinguettes ont été détruites. Actuellement, quatre d’entre elles sont toujours en activité dans le Val-de-Marne';
		var Task16='  Aussi haut que la dame de fer\n\nURBANISME. La Fondation d’entreprise de la Société de la tour Eiffel lance la première édition du concours d’architecture Eiffel 2008, réservé aux étudiants en architecture des écoles françaises. Individuellement ou en équipe pluridisciplinaire sont invités à concevoir un édifice de très grande hauteur, à distance, accolé ou à la place même de la tour Eiffel. Leurs projets devront tenir compte des réalités environnementales du site, urbaines, sociales, techniques et économiques. Ils devront, également, faire appel aux techniques et matériaux contemporains.\n\n    A.S\nInfos: www.fondationsocietetoureiffel.org';
		var Task17_22='   (22)... .\n\n(18) ... . Et la saison ne fait que commencer! À Dijon, les pompiers sont intervenus plus d’une cinquantaine de fois, principalement pour des inondations de caves, après un violent orage mardi soir. Près d’Avignon, la foudre a blessé six enfants de 11 à 12 ans qui jouaient sur un terrain de football. Météo France a placé 2 départements du sud-ouest en vigilance orange jusqu’à aujourd’hui, cela signifie qu’il y a de forts risques d’inondation dans ces zones.\n(19) ... , que faire en cas d’orage?\nDe façon générale, il faut éviter le plus possible les activités extérieures. Ce n’est pas le moment de sortir ton chien, finir ta partie de foot et encore moins de partir en randonnée. Si malgré tout tu te trouves dehors, quelques règles s’imposent. La première: se débarrasser et s’éloigner de tout objet métallique, ils attirent la foudre. (20) ... , tu ne t’abrites pas sous ton parapluie, tant pis si ça mouille, c’est moins dangereux. Il faut aussi s’éloigner des poteaux électriques et de tout autre objet plus haut que toi, pointu et pointé vers le ciel. Surtout, ne pas s’abriter sous un arbre, et encore moins s’il est isolé. L’idéal est de trouver rapidement un abri de pierre. Si tu n’en trouves pas, roule-toi en boule au sol et attends. Les orages durent rarement plus de trente minutes.\n\n    CÉLINE BOUSQUET';
		var Task23_34='(23)__________ du téléphone portable!\n\nFace aux manques de (24)__________ sur les risques des téléphones portables pour la santé, il faut rester prudent, surtout si tu as moins de douze ans. Voici quelques (25)__________.\n\nLes téléphones portables sont-ils (26)__________? C’est la question que se posent de nombreux scientifiques: (27)__________, nous n’avons pas de réponse définitive concernant leur influence (28)__________ la santé. Pourtant, de plus en plus d’études montrent qu’ils peuvent le (29)__________, surtout chez les enfants de moins de douze ans. En fait, à cet âge-là, tu es plus fragile que les adultes (30)__________ ton corps et tes organes sont en train de se développer.\n\nPour (31)__________ les risques de maladie, des cancérologues viennent de publier (32)__________ de conseils: par exemple, utilise au maximum un kit mains libres, un kit piéton, une oreillette ou un haut-parleur. D’autres gestes simples peuvent aussi être utiles: utilise plutôt les SMS que les appels et ne laisse pas ton portable (33)__________ sur ta table de nuit pendant que tu dors. Et comme dit cette phrase (34)__________ «mieux vaut prévenir que guérir»!\n\n    DELPHINE FABIUS\n\nhttp://www.lesclesjunior.com'
		var Task35_40='   Santé\n\nHalte au surpoids!\n\n«Parce qu’au début, ça ne se voit pas», des centaines de pédiatres (35)__________ ce samedi des informations pour détecter les problèmes de surpoids chez les enfants.\n\n1 enfant sur 6 est trop gros en France. Ce pourcentage (36)__________ très vite en l’espace de 20 ans. Aujourd’hui, il est si (37)__________ que dans une centaine de villes en France, des pédiatres organisent des animations, des conférences et des ateliers pour donner des conseils pour manger (38)__________: c’est la journée nationale de prévention et d’information sur l’obésité infantile. Ces pédiatres insistent aussi sur le dépistage et recommandent d’aller les voir au moins une fois par an. Car un enfant trop gros, cela se voit, peut-on penser. Inutile alors d’aller consulter un docteur. Or, justement, au début ça ne se voit pas… D’où l’importance de consulter un spécialiste. Celui-ci te pèsera et te mesurera. En fonction de ton poids et de ta taille, il (39)__________ en mesure de dire si tu «es juste comme il faut» ou déjà trop gros. Si tel est le cas, ne te vexe pas. Plus ce problème de santé (40)_________ tôt, plus il est facile à soigner. Selon les pédiatres, 9 cas d’obésité sur 10 sont évitables grâce à des règles simples. Pour savoir où rencontrer les pédiatres lors de cette journée nationale de prévention et d’information sur l’obésité infantile, visite le site de l’Association française de pédiatres ambulatoires: www.afpa.org.\n\n     http://www.lesclesjunior.com le 10 janvier 2009';
		var Task41_46='  Les macaques savent compter!\n\nLes hommes ne seraient pas les seuls à savoir compter. Les macaques aussi maîtrisent, comme (41)__________, l’addition.\n\nOn sait depuis longtemps que les singes sont capables de comparer des quantités: (42)___________ réussissent, sans se tromper, à montrer de la patte le pot où il y a le plus de billes. Aujourd’hui, des chercheurs viennent de montrer qu’ils ne savent (43)__________ seulement comparer des quantités. Les singes savent véritablement compter et maîtrisent parfaitement l’addition.\n\nPour montrer l’esprit matheux des singes, les chercheurs ont entraîné (44)__________ guenons (macaques femelles) à compter les sons qu’elles entendaient. Après un certain nombre de «biiiip», les guenons devaient choisir, sur (45)__________écran d’ordinateur, le dessin où apparaissait le même nombre de points. Bilan? 20/20 pour les guenons! Ensuite, les chercheurs ont légèrement compliqué l’exercice: en plus des «biiiip», ils ont ajouté des éclairs de lumière. Les guenons devaient alors additionner le nombre de «biiiip» et d’éclairs. Et, une fois encore, elles ont obtenu de très (46) __________ résultats. C’est prouvé: les macaques savent compter!\n\n       http://www.lesclesjunior.com, le 07 juillet 2008';
		var Task47_50='Akira Kurosawa - Dessinateur\n\nAkira Kurosawa n’était pas que le (47)__________ grand réalisateur japonais.\n\nC’était aussi un peintre et dessinateur d’exception, auquel le Petit Palais (48)__________ hommage en exposant près (49)__________ une centaine d’oeuvres rares, (50)__________ le Vieux meunier, au crayon, aquarelle et pastel. Jusqu’au 11 janvier 2010. \n(http://www.petitpalais.paris.fr).';
		answer47Array=new Array("plus");
		answer48Array=new Array("rend","a rendu","rendait");
		answer49Array=new Array("d'");
		answer50Array=new Array("dont","parmi lesquelles","y compris");
		gradeArray=new Array("100.0","100.5","100.5","101.5","102.0","103.0","106.5","110.5","114.0","116.5","120.5","124.0","127.0","129.5","133.0","135.5","138.0","140.0","141.5","143.0","144.5","145.5","147.0","148.0","149.0","150.0","151.0","152.0","153.0","154.0","154.5","155.0","155.5","156.5","157.5","158.0","158.5","159.5","160.5","161.5","162.0","163.0","164.0","164.5","165.5","166.5","167.5","168.5","169.5","170.5","171.0","172.5","173.5","174.5","175.5","176.5","177.0","178.5","179.5","181.5","182.5","184.0","186.5","187.5","190.0","192.0","193.0","194.5","195.5","197.0","197.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("c","d","d","a","d","a","b","c","a","b","b","b","c","a","c","a","d","b","b","c","c","b","c","b","d","c","a","c","d","b","c","b","c","d","h","f","a","g","d","b","d","f","b","g","i","a",answer47Array,answer48Array,answer49Array,answer50Array," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textual","textual","textual","textual","tvir");
		textAnalysisArray=new Array(Task1,Task2,Task3,Task4,Task5,Task6,Task7,Task8,Task9,Task10,Task11,Task12,Task13,Task14,Task15,Task16,Task17_22,Task17_22,Task17_22,Task17_22,Task17_22,Task17_22,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task23_34,Task35_40,Task35_40,Task35_40,Task35_40,Task35_40,Task35_40,Task41_46,Task41_46,Task41_46,Task41_46,Task41_46,Task41_46,Task47_50,Task47_50,Task47_50,Task47_50,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}			
	}
/*ЗНО-2011 французский язык. Основной тест.*/
	if(testName=="ЗНО-2011 Французский язык. Основной тест.")
	{
		testLength=46;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/fra\/img\/test2011main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;
		var inet_annonce="Professionnels, vous n'avez pas ou plus de secretaire. Particuliers, vous ne savez pas (ou mal) taper sur un clavier... Je vous propose a distance des services individualises et de qualite. Exemples: compte-rendu, livre, these, bon de commande, facture de l'hotel en un mot l'enregistrement sur un ordinateur de tous documents ecrits a la main ou enregistres. Site: http://www.isa-tap.com Tel.: 03.26.70.52.05., isabelle.demianville@laposte.net";
		var tv_prog='   FRANCE 3\n20.55 Lit Grande Illusion Divertissement. Presente par Valerie Benain. \n\nApres Marseille et Paris,«La Grande Illusion» entreprend de perturber l\'espace-temps et le sens commun a La Rochelle. Pierre Palmade, piege par son complice de «Made in Palmade», vole au secours d\'une femme enceinte et bascule dans un monde sans repere. \n\n\n   TF1\n20.50 Josephine, ange gardien: Profession menteur Telefilm de Sylvie Ayme (Fr., 2006). 1 h 30. Avec Mimie Mathy, Bruno Debrandt.\n\nFrederic Duval a perdu son travail mais n\'en a rien dit a ses proches. Josephine intervient pour le ramener a la raison. Elle le pousse a cesser de vivre dans le mensonge. \n\n\n   FRANCE 2\n20.50 Cold Case, affaires classees   Serie.   «Reves   et desillusions». (USA, 2006). Avec Kathryn Morris, Danny  Pino,   Jeremy Ratcliford. \n\n1929: une femme est retrouvee morte le jour de Noel. 2006: l\'arriere-petite-fille de la defunte sollicite l\'aide de Lilly et de son equipe pour en savoir plus sur les circonstances de la mort de son aieule. \n\n\n   M6\n20.50 Kaamelott Serie. «Livre V, 2e partie». Avec Alexandre Astier; Guy Bedos, Patrick Bouchitey. \n\nKaamelott est sans Roi: l\'epee est a nouveau plantee dans le rocher Alors que les clans autonomes se multiplient,on etudie vainement les lois bretonnes afin de designer un chef d\' Etat. Arthur doit se mettre a la recherche de sa possible descendance.';
		var text3_2011='Creee en 1914, afin d\'expedier les hommes et tes materiaux necessaires a la construction du barrage d\'Artouste, situee a 2000 metres d\'attitude, cette ligne de chemin de fer, parmi les plus hautes d\'Europe fut maintenue puis modernisee, des 1932 a des fins touristiques. Sur 10 km de voie a cote de montagne vous decouvrirez des champs de plantes sauvages et vous vous laisserez surprendre par de paysages admirables. Fonctionne tous les jours.';
		var brest='Brest: le prefet interdit l\'alcool le jeudi soir sire la place de la Liberte \n\nPar arrete prefectoral, la consommation d\'alcool est interdite place de la Liberte, au centre-ville de Brest, ainsi que dans plusieurs rues voisines, entre 21 h et 6 h du matin. Cette mesure s\'appliquera dans un premier temps du 7 janvier 2010 au 8 avril 2010 compris. «La place de la Liberte a Brest connait regulierement des rassemblements de personnes alcoolisees qui generent des desordres frequemment signales par les riverains et les passants», explique la prefecture du Finistere.\n\n      www.ouest-france.fr';
		var en_france='En France \n\nMardi sera une journee de temps calme et anticyclonique sur tout le pays. Cependant, les hautes pressions n\'induiront pas partout un ciel limpide et ensoleille. Des nuages relatifs a l\'humidite residuelle des derniers jours seront en effet tres presents sur un bon quart nord-ouest, entre la Bretagne, les Pays de la Loire, le Bassin Parisien, la Normandie et le Nord-Pas-de-Calais. Le soleil s\'imposera progressivement sur les autres regions. Les temperatures remonteront un peu partout, sauf la region du Nord-ouest';
		var text8_2011='Le champion de toutes categories de la collecte et du recyclage des sapins de Noel n\'est pas une collectivite mois une entreprise privee: l\'enseigne lkea. [...]\n\nLa fameuse societe des magasins de meubles a mis en place en 2003 une operation appelee «Agir a la racine». \n\nChaque sapin achete 20 € en decembre peut etre echange i la jardinerie d\'lkea en janvier suivant contre un bon d\'achat de 19 €. Pour le consommateur qui en accepte le principe, le cout d\'un sapin ne se monte plus qu\'a 1 €, que l\'enseigne s\'engage a reverser a l\'Office national des forets. \n\nLes sapins recuperes sont recycles en compost. \n\n       La Voix du Nord';
		var text9_2011='EVOLUTION vous accueillera dans une ambiance chaleureuse tres conviviale. Notre equipe tres professionnelle, vous offrira une tasse de cafe et commencera le diagnostic de vos attentes afin de bien vous comprendre. \n\nPhilosophie: \nNous souhailons mettre en avant les bienfaits de l\'arrangement des cheveux sur le morale et sur le dynamique qu\'elle peut generer. \n\nService: \nMorphologie assistee par ordinateur, coupe moderne et classique, couleur, chignon, une tres large palette de services vous sera proposee. \n\nSpecialite: \nChignon marie etc., morphologie, extension \n\nMode de paiement: \nEspece, carte, cheque ';
		var text10_2011='Decus par les recettes du film Avatar projete en 2D a Vitre, les responsables du cinema L\'Aurore ont decide d\'investir dans un nouveau projecteur: «La ou le film est projete en 3D, Avatar fait un carton. Les salies sont encore pleines.» Vitre ne passera done pas a cote de cette revolution techologique: «Le cinema de L\'Aurore sera equipe des cet ete en materiel 3D. Les spectateurs seront equipes de lunettes speciales pour profiter pleinement du relief.» Le prix des billets sera un peu plus eleve (le montant n\'est pas arrete) mais pas suffisamment pour decourager les passionnes.\n\n           www.ouest-france.fr';
		var text12_2011='La police francaise a annonce jeudi l\'arrestation nocturne d\'un crocodile qui circulait tranquillement dans une rue de General Leclerc, une bourgade du departement du Cher (centre). \n\nLes policiers ont ete alertes vers 02h 00 du matin par un appel telephonique affirmant qu\'un crocodile se promenait dans la rue. \n\nEcartant l\'hypothese pourtant vraisemblable d\'une plaisanterie, tes policiers se sont rendus sur les lieux pour decouvrir l\'animal. Quelques heures plus tard, ils retrouvaient ses proprietaires: un petit cirque qui fait actuellement etape dans la ville.';
		var text13_2011='C\'est un document constitue par un ensemble de feuilles qui sont reliees entre elles et souvent protegees par une couverture. Il designe aussi le contenu, cree par un ecrivain et destine a etre lu par d\'autres. Il existe plusieurs types de ce document. On peut citer les documents, qui racontent une histoire, les ecrits documentaires et manuels, scolaires, ou sont reunis Les savoirs d\'un certain domaine, les documents illustres, qui contiennent des images, les bandes dessinees, qui racontent une histoire sous forme de dessins, les documents sous forme electronique diffuses par Internet, etc. Selon les specialistes ce document doit contenir cinquante pages an minimum.';
		var text14_2011='Payer les eleves pour aller a l\'ecole?! \n\nJe suis scandalisee! Moi aussi, je veux bien aller voir un match «gratos» au velodrome! Et si je seche, je ne peux pas y aller, moi, a Marseille. \n\nLes eleves ont avant tout des devoirs, et celui de venir i l\'ecole est incontournable, indiscutable. \n\nIl existe une loi qui prevoit de supprimer les allocations familiales aux familles dont les enfants sont trop absents. Dans les faits, je suis curieuse de savoir si cela existe vraiment et pour combien de demi-journees d\'absence. \n\nIl  faut trouver d\'autres  moyens,  la recompense de  venir a  l\'ecole, c\'est d\'Apprendre!!! \n\nN\'est-ce pas une merveilleuse recompense qu\'il faut valoriser, encourager. \n\nJe ne suis pas sure que donner l\'envie d\'apprendre, d\'apprendre a apprendre vienne avec des billets! \n\n     Le blog de Brun Junod, prof d\' Eps, titulaire volontaire dans un college de ZEP';
		var text15_2011='Les aurores boreales sont de fabuleux phenomenes qui se produisent dans le ciel nocturne. On peut les observer dans des regions proches du pole nord. Ce sont de grandes bandes lumineuses vertes, bleues ou rouges se deplacant plus ou moins vite dans le ciet nocturne polaire. E Iles se forment a une altitude comprise entre 100 et 500 kilometres et peuvent durer plusieurs dizaines de minutes. La cause de ce phenomene est due a notre astre: le soleil. Regulierement, il subit de violentes tempetes et rejette dans l\'espace ce que l\'on appelle des vents solaires. Ceux-ci viennent en contact avec le champ magnetique terrestre qui est une sorte de bouclier pour notre planete. C\'est lors de cette rencontre que se produit le magnifique spectacle des aurores boreales. Le phenomene n\'est pas sans consequence puisqu\'il perturbe les reseaux electriques. GPS et radios peuvent aussi etre perturbes et des vols peuvent etre annules en cas d\'activite importante.';
		var text16_21_2011='    (21)...\n\nI (l6)... A Clichy-so us-Bois, le centre de production de cette patisserie est en pleine essor.\n\nII Le rythme de production s\'est accelere depuis fin octobre pour fabriquer un maximum de gateaux avant Noel et hier encore c\'etait le coup de chaud dans les ateliers de la Romainville.\n\nIII Malgre la surcharge de travail, rien n\'est laisse au hasard dans la centrale de production de la patisserie, basee a Clichy-sous-Bois. Ici, chaque unite a sa specialite: tarte, galette des rois, bavarois... Autour du tapis roulant sur lequel sont mis ces douceurs, une quinzaine d\'employes s\'attaquent aux finitions: glacage, decoration, a chaque geste une fonction.\n\nIV Car si la production ressemble plus a des quantites industrielles qu\'artisanales, «tout est fait a la main (17) car aucune patisserie ne se ressemble exactement», souligne Julie fi loche, responsable qualite.\n\nV  A proximite, de grands bacs remplis de chocolat, de creme vanille feraient perdre conscience n\'importe quel gourmand. Un peu plus loin, les gateaux sont emballes et prets a etre livres dans les 22 magasins du groupe, principalement en region parisienne, mais aussi a Lyon.\n\nVI En cette veille de Noel, l\'entreprise devrait vendre 15 000 buches et gateaux. «Au plus fort de la journee, les clients feront la queue pendant deux heures et demie pour acheter leurs gateaux, sourit Etienne Ortega, directeur general de la Romainville. Depuis quelques annees, nous avons meme du engager des surveillants pendant les feles pour eviter toute mauvaise conduite des clients.» «En temps normal, dans la boutique de Clichy, nous avons deux ou trois vendeurs mais a Noel nous montons a 10 ou 15 et les cadres du groupe descendent des bureaux pour renforcer l\'equipe», explique Julie Filoche. Ils aident a vendre les milliers de buches.\n\nVII (18) Pourtant,  «depuis deux ou trois ans, on assiste a une baisse des ventes de ce type de produit», reconnait Etienne Ortega.. Alors, le laboratoire maison, avec ses 35 patissiers, tente cette annee de proposer autre chose. «Nous avons cree des gateaux relatifs au Noel, qui sont une alternative a la buche, analyse Philippe Gobinet, responsable de production. Nous en avons en forme de Pere Noel, de patinoire... Et ca marche plus tot bien puisque nous avons distribue 3 500 cette annee.»\n\n      Sebastien Thomas\n\n      www. lepurisieii.fr';
		var text22_33_2011='   J\'ai traverse l\'Atlantique a bord de l\'A380\n\n    Une nuit dans le train Rodez-Paris pour rallier lu plateforme de Roissy Charles-de-Gaulle qui accueille depuis quelques jours a peine la nouvelle star de l\'aviation civile, j\'ai nomme l\'A380. A l\'aeroport, precipitation sur la salle d\'embarquement pour etre dans les blocs a fin de decouvrir la bete. Derriere l\'immense baie vitree, (22)_____________de le manquer, on ne voit que lui.\n\n    Son (23)_____________qui nous Tait faee est enorme. Tout le monde se reunit et photographie le geant. Cote piste, un s\'affaire autour de lui, un le prepare pour sa traversee de l\'Atlantique jusqu\'a New York. Des que le top depart est donne puur l\'installation, les 538 passagers se precipitent. Heureusement, l\'embarquement est tres (24)_____________et se fait avec une rigueur militaire.\n\n    On prend place sur le pont inferieur, vers le fond de l\'avion, du cote droit, a peine assis, un sent et on voit la difference. Le hublot est a la taille de l\'appareil et l\'espace entre les rangees est plus(25)____________compare a un Boeing 747. Un ecran insere dans le siege de devant nous reserve un programme d\'une centaine de films, de series tele, et autant d\'albums de musique. Une prise USB permet de se connecter et un clavier d\'envoyer des mails ou de telephoner, a condition, bien sur, d\'inserer sa carte bancaire. Autre fonction tres interessante et (26) _____________ condition, la communication avec un autre siege.\n\n    En attendant, les (27)____________se ferment, le personnel est souriant et une hotesse se confie: c\'est une premiere pour les 24 membres de l\'equipage qui sont tres fiers de voler a bord de l\'A380.\n\n    Probleme: une heure apres, on est toujours colle (28)____________. On n\'arrive pas a decrocher les passerelles d\'embarquement. Certains (29)____________s\'impatientent. Un mot du commandant nous expliquant les (30)____________, et on roule enfin vers la piste. Derriere nous, ranges en file indienne les autres appareils laissent la priorite a la vedette.\n\n    Ca y est, on est (31)____________position, les reacteurs tournent a fond, le titan se transforme en oiseau leger. Ses ailes blanches, dont la taille atteint la largeur d\'un terrain de football, paraissent dans le ciel azur. Et (32)____________qui frappe des la premiere seconde du vol c\'est le silence. Un silence coupe par les bouchons (33)____________qui sautent. Un vol inaugural ca se fete.\n\n       Marie-Christine Bessou \n        www.ladepeche.fr';
		var text34_39_2011='A 7 ans il (34)___________une pelleteuse pour deblayer la neige\n\n   Un garcon de sept ans (35)___________par la police au volant d\'une pelleteuse en train de deblayer la neige sur une roule du nord de la France pour faire plaisir a son pere.\n\n   L\'enfant a explique que son papa avait dit que la route etait sale et qu\'il  «voulait aider». selon un communique de la police. «Voyant les cles sur la serrure de contact, il a saisi l\'occasion» et (36)___________au volant de l\'engin haut de 3,5 metres pour deblayer laneige sur la route.\n\n   Quand il a remarque la police, il a arrete aussitot Le moteur. «Il a ouvert la porte, (37)___________et a reconnu tout de suite ne pas avoir de permis de conduire», selon les agents.\n\n   Au montent ou la police l\'a decouvert, il (38)___________sa tache et voulait reconduire la machine sur le site de l\'entreprise familiale a Laval pres de Brest, ou il l\'(39)___________.\n\n   Les policiers ont remis l\'enfant a sa mere, avec les cles de la pelleteuse. A la place des parents on irait vite lui acheter pour Noel des grues et des engins de chantier... miniatures.\n\n      www.ouest-france.fr';
		var text40_45_2011='   Elle decouvre son frere soixante ans apres\n\n   Elle se croyait fille unique. Colette, une habitante de Suresnes, a appris (40)_________ elle avait un demi-frere allemand, aujourd\'hui age de plus de soixante ans.\n\n   (41)__________vie de Colette Guillard a bascule en une seconde. Ce jour ou, il y a quelques semaines, elle a rencontre son frere pour la premiere fois. Cinq jours plus tot, cette habitante de Suresnes se croyait encore fille unique.\n\n   Tout commence par un coup de fil et une voix d\'homme avec un (42)_________accent germanique qui lui pose des questions precises, notamment sur son pere.\n\n   Son correspondant explique mener (43)__________recherches en filiation depuis quarante ans. «Quand il im\'a dit que mon pere etait aussi le sien, c\'etait un coup de massue», se souvient Colette, des etoiles plein les yeux. Un rendez-vous est finalement cale a Suresnes. Aujourd\'hui, elle revit la scene avec autant d\'intensite: «Je (44)__________ai entendu monter l\'escalier. A chaque pas, mon coeur battait un peu plus vite. J\'ai ouvert la porte, on s\'est regarde sans rien dire. El a souri et, la, j\'ai vu tout le portrait de mon pere. l\'ai eclate (45)_________sanglots. C\'est le moment le plus fort de ma vie.»[...]n\n     www.leparisien.fr';
		gradeArray=new Array("100.0","100.5","101.0","101.0","101.0","103.5","106.0","108.0","111.5","116.5","121.0","124.5","130.5","134.0","138.0","141.0","143.5","146.5","149.0","151.0","153.5","155.0","155.5","156.5","157.0","158.5","159.0","159.5","160.0","161.5","162.5","164.0","164.5","165.0","166.0","167.0","167.5","168.5","169.0","169.5","170.5","171.5","172.5","174.0","175.0","176.5","177.5","179.0","179.5","180.5","181.0","182.0","183.0","184.5","186.0","187.5","190.0","192.5","193.0","194.0","195.0","196.5","197.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","d","b","b","a","a","d","a","c","a","d","c","d","b","b","c","a","b","b","c","a","b","c","a","a","c","b","a","c","b","b","c","a","b","a","d","c","b","d","d","b","d","a","b","c"," ");
        taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","textanalysis","textanalysis","textanalysis","test","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(inet_annonce,tv_prog,text3_2011,brest,en_france,"test","test",text8_2011,text9_2011,text10_2011,"test",text12_2011,text13_2011,text14_2011,text15_2011,text16_21_2011,text16_21_2011,text16_21_2011,text16_21_2011,text16_21_2011,text16_21_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text22_33_2011,text34_39_2011,text34_39_2011,text34_39_2011,text34_39_2011,text34_39_2011,text34_39_2011,text40_45_2011,text40_45_2011,text40_45_2011,text40_45_2011,text40_45_2011,text40_45_2011,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}		
	}
/*************************************************************/
//Тесты по географии	
/*************************************************************/	
/*ЗНО-2009 География. Основной тест*/
	if(testName=="ЗНО-2009 География. Основной тест")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2009main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","106.5","108.0","110.0","112.0","114.0","116.0","118.0","120.0","122.0","124.0","126.0","128.0","130.0","131.5","133.0","135.0","136.5","138.0","139.5","141.0","142.5","144.5","145.5","147.0","148.5","150.0","151.5","153.0","154.0","155.5","157.0","158.0","159.5","160.5","162.0","163.5","164.5","165.5","167.0","168.0","169.0","170.5","171.5","172.5","173.5","174.5","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","185.0","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.0","194.0","195.0","195.5","196.0","196.5","197.0","197.5","198.0","198.5","198.5","199.0","199.5","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","a","b","b","c","a","c","d","b","d","a","b","a","d","c","a","c","d","a","c","a","d","b","c","d","b","c","c","a","d","b","c","c","a","b","a","b","d","d","c","adcb","eacd","bedc","abed","eadb","baed","ecba","ecba","becd","bcda","cabd","adcb","bcda","acdb","dcba","cdab","bdca","dcba","bdca","dabc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2010 География. Основной тест*/
	if(testName=="ЗНО-2010 География. Основной тест")
	{
		testLength=58;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.5","106.0","107.5","109.5","112.0","114.5","117.0","119.5","122.5","125.0","127.5","130.5","133.0","135.5","138.0","140.5","142.5","145.0","147.5","149.5","152.0","154.0","156.0","158.0","160.0","161.5","163.5","165.5","167.0","168.5","170.0","171.5","173.0","174.5","178.5","176.0","178.5","179.5","181.0","182.0","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.0","193.0","193.5","194.5","195.0","195.5","196.5","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.0","199.5","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","d","c","b","c","c","d","c","b","a","c","c","d","b","a","a","a","b","a","b","b","c","c","d","c","b","d","b","c","a","c","b","a","b","d","b","b","a","d","a","a","c","ebcd","badc","daeb","aceb","ecba","bcae","cdba","ebcd","cdba","bcae","cadb","dcba","cdba","cdab","cadb","dbca");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","connect","connect","connect","connect","order","order","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2011 География. Основной тест*/
	if(testName=="ЗНО-2011 География. Основной тест")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2011main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=3;
		juniorNumericDigits=0;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.0","102.0","103.0","104.0","105.5","107.5","109.5","112.0","114.5","117.5","120.0","122.5","125.5","128.0","131.0","133.5","135.5","138.0","140.0","142.0","144.0","146.0","148.0","149.5","151.5","153.0","154.5","156.0","157.5","158.5","160.0","161.5","162.5","164.0","165.0","166.5","167.5","168.5","170.0","171.0","172.0","173.0","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.0","189.0","190.0","191.0","191.5","192.5","193.0","194.0","194.5","195.5","196.0","196.5","197.5","197.5","198.0","198.5","199.0","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("c","c","d","c","d","b","a","a","c","c","a","a","d","d","b","a","a","d","a","b","c","c","b","c","b","d","c","b","b","a","b","b","a","d","a","b","c","c","d","d","d","b","cdeb","bdac","acde","ebac","adbe","acdb","dabc","adcb","bcda","cdba","dbac","bcf","bcd","cef","adf","abe",18,101);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","order","order","order","multiselection","multiselection","multiselection","multiselection","multiselection","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,2,2,2,3,3,3,3,3,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2012 География. Основной тест*/
	if(testName=="ЗНО-2012 География. Основной тест")
	{
		testLength=56;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/geo\/img\/test2012main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		olderNumericDigits=3;
		juniorNumericDigits=0;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.0","105.5","107.5","109.5","112.0","114.5","117.0","119.5","122.0","124.0","126.5","128.5","130.5","132.5","134.5","136.5","138.5","140.0","142.0","143.5","145.0","146.5","148.5","150.0","151.5","153.0","154.0","155.5","157.0","158.5","159.5","161.0","162.5","164.0","165.0","166.5","167.5","169.0","170.5","171.5","173.0","174.5","175.5","177.0","178.5","179.5","181.0","182.0","183.5","185.0","186.5","187.5","188.5","190.0","191.0","192.5","193.5","194.5","195.5","196.5","197.5","198.0","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","c","b","c","d","a","b","a","a","b","c","a","c","d","c","b","d","c","d","a","b","d","d","c","b","a","a","d","c","b","c","d","c","d","a","b","a","d","a","b","a","b","bcad","deab","baed","edba","bdca","cabd","abcd","dacb","bcd","bde","cef","bce",140,230);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","multiselection","multiselection","multiselection","multiselection","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,3,3,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}	
/*************************************************************/
//Тесты по немецкому языку	
/*************************************************************/		
/*ЗНО-2010 Немецкий язык. Основной тест.*/
	if(testName=="ЗНО-2010 Немецкий язык. Основной тест.")
	{
		testLength=51;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/ger\/img\/test2010main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;
		var Aufgabe1='1.________\nFluggesellschaften in der Europäischen Union müssen Abfindungen zahlen, wenn sie Flüge kurzfristig streichen oder Passagiere nicht befördern, weil die Maschine überbucht ist. Die Verordnung soll vor allem die verbreitete Unsitte bekämpfen, mehr Tickets zu verkaufen als Sitze im Flugzeug vorhanden sind. Darf ein Passagier trotz gültigen Tickets nicht mitfliegen, hat er künftig Anspruch auf eine Abfindung von 250 bis 600 Euro, je nach der Strecke. Diese Beträge muss die Fluggesellschaft auch zahlen, wenn sie einen reservierten Flug streicht. Verspätet sich ein Flug um mehr als fünf Stunden, kann der Fluggast künftig den Preis fürs Ticket zurückverlangen. Die Gesellschaft muss außerdem Hotel- und Taxikosten übernehmen, die ihren Kunden durch überbuchte, verspätete oder gestrichene Flüge entstehen.\n\n2.________\nDeutsche Bahn und Bahnhofsmissionen bieten einen Service für Kinder an, die ohne Begleitung unterwegs sind. Auf den Strecken Köln – Hamburg und Köln – Stuttgart betreuen geschulte Mitarbeiter der Bahnhofsmission die Sechs- bis Zwölfjährigen. Dieser Service kostet 25 Euro zusätzlich. Die Reise muss spätestens sieben Werktage vor Beginn angemeldet werden. Die Begleiter sind während der ganzen Bahnfahrt an der Seite der Kinder und helfen vor allem beim Umsteigen. Die Kinder dürfen allerdings nur freitags und sonntags allein in den Zug steigen. Auf Flugreisen hat die Kinderbetreuung schon Tradition. Allein bei der Lufthansa fliegen im Jahr etwa 55 000 Minderjährige ohne Begleitung mit. Auch hier kostet der Service extra. Der Preis ist abhängig vom Flugziel und der Umsteigehäufigkeit.\n\n3.________\nHaustiere, die mit ihren Herrchen oder Frauchen auf Reisen innerhalb der Europäischen Union gehen, brauchen einen Reisepass. Aus dem geht dann die gültige Tollwutimpfung hervor. Hunde, Katzen und Frettchen müssen außerdem mit einem Mikrochip oder – übergangsweise bis 2011 – durch eine Tätowierung gekennzeichnet sein. Die EU hat festgelegt, wie der Haustierreisepass aussehen soll. Er wird blau sein, den typischen EU-Sternenkranz tragen und die gleichen Maße haben wie der Pass für Herrchen und Frauchen. Diese müssen innen ein Farbfoto ihres Lieblings einkleben. Den Pass gibt es beim Tierarzt. Normen für das Foto im Haustierreisepass gibt es nicht. Das Tier muss aber zu erkennen sein.\n\n4.________\nBahnkunden, denen der Fahrkartenautomat trotz Bezahlung kein Ticket ausspuckt, dürfen dennoch mitfahren. Zwar muss der Reisende eine Fahrkarte im Zug nachlösen. Nach der Fahrt könne er aber im DB-Reisezentrum den Defekt am Automaten reklamieren und einen Antrag auf Fahrpreiserstattung stellen, verspricht die Bahn. Sie will dann den Antrag prüfen und den doppelt bezahlten Fahrpreis erstatten. In Fällen, in denen der Automat lediglich den Zahlungsbeleg ausdruckt, lassen die meisten Zugbegleiter den Kunden nach Auskunft der Bahn auch ohne Fahrschein und ohne erneute Zahlung mitfahren. Tipp: streikt der Automat, lassen Sie sich eine beliebige Verbindung ausdrucken. Dann kommt das fehlende Ticket meist mit raus.\n\n5.________\nBahnfahrten über 100 Kilometer Länge kosten ab 1. April 2004 im Durchschnitt 3,8 Prozent mehr. Für Reisende, die kürzere Strecken fahren, ändert sich nichts. Für Entfernungen zwischen 100 und 200 Kilometern meldet die Deutsche Bahn dagegen eine Preissenkung um rund 1,6 Prozent. Neu eingeführt wird ein Höchstpreis für Strecken über 700 Kilometer. Dafür bezahlen die Reisenden maximal 111 Euro (2. Klasse, einfache Fahrt), mit Bahncard 50 sind es 55,50 Euro. Platzreservierungen, die am Schalter veranlasst werden, kosten jetzt 3 Euro (vorher 2,60 Euro). Sie sind kostenlos, wenn der Kunde die Reservierung am Automaten oder online veranlasst.';
		var Aufgabe2='Gärtner ist das Richtige\n   \n   Christian war vier Jahre alt, als er seine Legosteine wegpackte und sich die Blumenzwiebeln schnappte. Im Sommer kümmerte sich der Kleine zusammen mit seiner Mama um die Balkonblumen. Schon damals war klar: Er hat ein Händchen für Pflanzen.\n   Ob er nie davon geträumt hat, einen anderen Beruf zu ergreifen? "Klar gab es mal Hirngespinste, aber eigentlich war immer klar, dass Gärtner das Richtige ist", sagt Christian und ergänzt lächelnd: "Meine Mutter hätte eh nie zugelassen, dass ich etwas anderes mache."\n   Als er den Hauptschulabschluss in der Tasche hatte, fing Christian gleich eine Lehre zum Zierpflanzengärtner an. Drei Jahre lang lernte er, wie man Blumen pflanzt, wie man sie vermehrt und wie man sie richtig pflegt. Er bekam beigebracht, wie man Schädlingen den Garaus macht und Krankheiten behandelt.\n   Außerdem gehörten Boden- und Maschinenkunde und Pflanzenschutz zur Ausbildung und Christian musste die lateinischen Namen der Pflanzen büffeln. In seiner Abschlussprüfung wurde er gefragt, wie Blumen aufgebaut sind und wie sie Schadstoffe in Sauerstoff umwandeln. "Ganz schön schwer", meint der 29-Jährige, wenn er heute an seine Lehrzeit zurück denkt. Aufgeben kam trotzdem nie in Frage, denn er war vom ersten Tag an begeistert vom Gärtnerberuf. Ganz besonders faszinierte den Lehrling, wie aus einem kleinen Samenkorn, das man im Winter einpflanzt, eine große Pflanze wird, die man an die Kunden verkauft. Dabei lernte er auch, dass ein grüner Daumen nicht ausreicht, um ein guter Gärtner zu sein. Zum Beruf gehört es auch, Kunden zu beraten und ihnen geduldig zu erklären, welches Pflänzchen sie wohin pflanzen sollten.\n   Nach der Lehrzeit blieb Christian seinem Beruf treu. Mittlerweile arbeitet er seit zehn Jahren in einer Baumschule. Die Arbeit dort ist hart, dass muss der Gartenexperte zugeben.\n   Er muss schwere Maschinen bedienen, Bäume pflanzen und Erde schleppen. Außerdem sind die Angestellten der Baumschule bei jedem Wetter draußen.\n   Der Lohn für die Mühen? "Reich wird man als Gärtner nicht", sagt Christian. Aber dafür spürt man die Jahreszeiten. Der Pflanzenkenner mag den Herbst, weil er so schön bunt ist, aber seine Lieblingsjahreszeit ist der Frühling. Er lächelt und gerät ein bisschen ins Schwärmen, wenn er beschreibt, wie nach dem Winter alles zu neuem Leben erwacht, die Blätter sprießen und die Blumen blühen.\n   Das Lachen vergeht Christian schlagartig, wenn er von den Schattenseiten des Gärtneralltags spricht. Spinnmilben und Pilze gehören dazu. Wenn sie den Pflanzen an die Wurzeln und Blätter wollen, versteht er überhaupt keinen Spaß. Auch nach über zehn Jahren im Job sind Pflanzen sein ein und alles. Manche von ihnen begleiten ihn sogar, wenn er sich abends auf den Heimweg macht. "Ich habe selbst fast schon eine eigene Gärtnerei zu Hause", verrät Christian. Er sei ein Sammlertyp. Wann immer ein Pflänzchen in der Gärtnerei schlapp macht, nimmt er es mit nach Hause und versucht es aufzupäppeln. Doch damit noch nicht genug, auch Christians Internetadresse verrät, dass er für Grünzeug schwärmt. Er hat sich den lateinischen Namen des Fächerblattbaums dafür ausgesucht. Kein Zweifel: Christian Heindl ist ein Gärtner aus Leidenschaft.';
		var Aufgabe4='    Junge Leute aus der ganzen Welt berichten in der Rubrik „Der andere Blick“, was ihnen an Deutschland auffällt. Diesmal ist das Anara K. aus Kasachstan.\n   - Wie sind die Deutschen? Die Frage hatte ich mir gestellt, als ich zum ersten Mal nach Deutschland kam. In meinem Kopf hatte ich ein Bild von einem typischen Deutschen, der kühl und pragmatisch, sparsam und ordentlich sein sollte. Ich bin davon ausgegangen, (17)___________, wie ich es in Landeskundeunterricht und von den Medien gelernt hatte. Na ja, das war damals, vor zwei Jahren. Nach einiger Zeit musste ich mein Bild von einem „typischen Deutschen“ wesentlich korrigieren.		\n   Die Deutschen sind von ganzem Herzen hilfsbereit, sogar dann, wenn man die Hilfe nicht braucht. Wenn du zum Beispiel einen Deutschen auf der Straße nach dem Weg fragst, (18)__________, dass die Antwort mehrere Minuten dauern kann. Die Deutschen lieben es, (19)___________, ohne deine Ungeduld zu bemerken. Sie beschreiben dir alle möglichen Wege: den schnellsten, den schönsten, den preisgünstigsten. Du brauchst dich auch nicht zu schämen, wenn nach solchen Erklärungen in deinem Kopf ein Durcheinander herrscht. In den meisten Fällen wird der Deutsche, sobald er ein echtes oder nur scheinbares Zeichen von Unsicherheit auf deinem Gesicht bemerkt, (20)____________.		\n   Höflichkeit ist den Deutschen schon zur Gewohnheit geworden. Das merkt man in alltäglichen Situationen. Für mich war neu, (21)___________und auf mich wartet. Dieser Mensch ist kein Portier und kein Freund, sondern ein wildfremder Deutscher. Und diese Höflichkeit der Deutschen ist sehr angenehm, besonders (22)__________.';
		var Aufgabe5='    German Wunderkind \n\n   Wenn Dirk Nowitzki springt, den Basketball wirft und den Korb trifft, ist der Jubel groß. Seit zehn Jahren ist er einer (23)___________ erfolgreichsten Basketballspieler der Welt. Seit zehn Jahren ist er seinem texanischen Verein, den Dallas Mavericks, treu. Kein Wunder. Für seinen Drei-Jahres-Vertrag bis zum Ende der Saison 2010/11 (24)__________ Nowitzki 60 Millionen Dollar bekommen.\n   Dirk Nowitzki begann erst mit 13 Jahren Basketball (25)__________. Sein damaliger Trainer Holger Geschwindner erkannte sein Talent und trainierte mit dem jungen Mann besonders hart. Nowitzki wurde der (26)___________ Spieler bei dem Basketballverein DJK Würzburg, der dank seiner (27)__________ Leistungen 1998 in die deutsche Basketballbundesliga aufstieg. Nowitzkis Mannschaft siegte auch bei dem Turnier „Nike Hoop Summit“ gegen die besten US-Nachwuchsspieler. So wurden die Scouts der NBA (28)____________ den Deutschen aufmerksam. Nowitzki kam zu den Dallas Maveriks und wurde (29)___________ „German Wunderkind“ gefeiert. Der Deutsche brachte aber in der ersten Saison nicht die erwartete Leistung. Erst seit der Saison 2000/2001 ist Nowitzki der erfolgreichste Spieler der „Mavs“.\n   Dirk Nowitzki ist derzeit der deutsche Sportler, der am besten verdient. Trotz des (30)_________ Geldes ist er bescheiden. Der Sportler mag die Aufregung um seine Person nicht. „Der Rummel ist mir manchmal peinlich“, sagt er. (31)___________ heute lässt der Basketballspieler sein Geld (32)___________ seiner Mutter verwalten. „Meine Mutter passt auf, (33)_________ mein Geld gut angelegt ist. Das geht so weit, dass ich sie fragen (34)_________, wenn ich in Deutschland bin und mal schnell Geld brauche“, sagte er der Wochenzeitung „Die Zeit“.';
		var Aufgabe6_1='   Text1\n\nNatalia Nikulina aus Omsk mag den Campus der Hochschule Siegen. Zusammen mit anderen Studenten wohnt die Austauschstudentin (35)___________ ein Semester in einem Wohnheim. „Dort habe ich schnell Freunde gefunden. Wir haben zusammen gekocht und in der Küche geredet. So habe ich auch mein (36)__________ schnell verbessert“, erzählt die 21-Jährige. (37)__________ die Uni nur 11 000 Studierende hat, ist der Kontakt zwischen den Kommilitonen sehr gut und auch die Professoren (38)__________ die Studenten in der Regel schnell persönlich. Natalia ist vom deutschen Hochschulsystem so begeistert, dass sie nach ihrem russischen (39)___________ in Wirtschaftsrecht gerne einen zweiten Master in Deutschland machen will. (40)__________ praktisch findet sie, dass ihre Dozenten der Uni Siegen die Skripte der Veranstaltungen online stellen.';
		var Aufgabe6_2='   Text2\n\nAn einen weltweiten Siegeszug seiner Idee dachte Richard Schirmann im August 1909 bestimmt nicht. Auf einem Wanderausflug (41)__________ der Nähe von Aachen suchte der Volksschullehrer (42)___________ eine Übernachtung für seine Schüler. Doch (43)__________ Übernachtungsmöglichkeit ergaben sich nur Quartiere in einer Scheune und einer Dorfschule. Da kam ihm die Idee, einfache Herbergen (44)__________ junge Leute und wandernde Schulklassen einzurichten. 1912 eröffnete Schirmann die erste Jugendherberge auf Burg Altena in Nordrhein-Westfalen.\nAuch 100 Jahre (45)___________ ist die Idee ein Erfolgsmodell. Weltweit gibt es inzwischen (46)____________ 4000 Jugendherbergen in fast 90 Ländern.';
		var SehrStilvoll='   Sehr stilvoll\n\nViele Deutsche würden eher auf Schokolade (47)___________ als auf ihr Notebook. (48)____________ die Mehrheit der Bundesbürger gehört das Notebook unbedingt (49)____________ Lebensstil. 89 Prozent der Befragten gaben an, dass ihr Notebook ihren Lebensstil repräsentiert und ein bestimmtes Image (50)___________ außen trägt.';
		answer47Array=new Array("verzichten");
		answer48Array=new Array("für","fur");
		answer49Array=new Array("zum");
		answer50Array=new Array("nach");
		gradeArray=new Array("100.0","100.5","100.5","103.0","106.0","110.0","115.5","120.0","125.5","130.0","134.5","139.0","142.0","144.5","147.0","149.0","150.0","151.5","152.0","153.0","154.0","154.5","155.5","156.0","156.5","157.5","158.0","158.5","159.0","159.5","160.0","161.0","161.0","162.0","162.5","163.0","164.0","164.5","165.0","165.5","166.0","167.0","167.5","168.0","168.5","169.5","169.5","170.5","171.0","172.0","172.5","173.5","174.0","174.5","175.5","176.5","177.5","178.5","179.5","181.0","182.0","183.5","184.0","185.0","186.0","187.0","187.5","188.5","190.0","191.0","192.0","193.0","194.5","195.5","196.5","197.5","199.0","199.0","200.0");
		answerArray=new Array("i","h","g","b","c","b","b","c","c","d","a","f","i","b","h","d","g","a","d","b","c","e","a","b","c","d","b","b","a","d","a","d","b","c","c","h","e","g","d","a","h","i","g","e","b","d",answer47Array,answer48Array,answer49Array,answer50Array," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textual","textual","textual","textual","tvir");
		textAnalysisArray=new Array(Aufgabe1,Aufgabe1,Aufgabe1,Aufgabe1,Aufgabe1,Aufgabe2,Aufgabe2,Aufgabe2,Aufgabe2,Aufgabe2,Aufgabe2,"test","test","test","test","test",Aufgabe4,Aufgabe4,Aufgabe4,Aufgabe4,Aufgabe4,Aufgabe4,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe5,Aufgabe6_1,Aufgabe6_1,Aufgabe6_1,Aufgabe6_1,Aufgabe6_1,Aufgabe6_1,Aufgabe6_2,Aufgabe6_2,Aufgabe6_2,Aufgabe6_2,Aufgabe6_2,Aufgabe6_2,SehrStilvoll,SehrStilvoll,SehrStilvoll,SehrStilvoll,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,24);
		variantNumberArray=new Array(10,10,10,10,10,4,4,4,4,4,4,10,10,10,10,10,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,9,9,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}			
	}

/*ЗНО-2011 Немецкий язык. Основной тест.*/
	if(testName=="ЗНО-2011 Немецкий язык. Основной тест.")
	{
		testLength=46;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/ger\/img\/test2011main1\/';
		fullTextWindowHorizontalOffset=-225;
		fullTextWindowVerticalOffset=-75;
		var Aufgabe1_2011='1.___________\nUrlaub auf dem Sudtiroler Bauernhof tut gut und schmeckt auch so. Das wurzige Stuck Bergbauernkase, der erste Loffel Marmelade, der kuhle Schluck frischen Safts machen Lust auf mehr. Vor allem wecken die „guten Lebensmittel“ vom Land das Interesse, dem Gastgeber beim Verarbeiten uber die Schulter zu schauen. Auf den authentisch gefuhrten Hofen der Marke Roter Hahn“ sind die Feriengaste zum Kasemachen, zum Herstellen von Marillen-Marmelade oder Holundersirup herzlich eingeladen.\n\n2.___________ \nBei einer internationalen Umfrage nach den beliebtesten Touristen landeten die Deutschen auf Platz 4 von 16 Rangen. An der Befragung nahmen mehr als 4500 Hotelmanager in 27 Landern teil. Besonders schatzen die Hoteliers demnach den Ordnungssinn deutscher Urlauber: In der Kategorie Sauberkeit/Ordnung landeten sie auf Platz 2. Auserdem gelten die Bundesburger als recht ruhig und geben groszugig Trinkgeld. Wenn es um die Haufigkeit von Beschwerden geht, liegen deutsche Urlauber auf dem viertletzten Platz.\n\n3.___________ \nWas machen die Deutschen am liebsten, wenn sie an der frischen Luft sind? Radeln? Nein. Fusballspielen? Auch Fehlanzeige. In einem See baden? Wieder falsch. Des Ratsels Losung: Es ist das gute alte Wandern. 34 Millionen Bundesburger marschierten in Freizeit und Urlaub gerne durch Wiesen und Walder, uber Bergrucken und durch Flusstaler. Auswahl gibt es genug, schlieslich kummern sich die deutschen Gebirgs- und Wandervereine um die Pflege und Markierung eines dichten Wegenetzes mit einer Gesamtlange von 190 000 Kilometern.\n\n4.___________\nWarum nicht mit Fahrrad und Bahn in den Urlaub fahren? Besonders in der Schweiz gibt es  einen guten Service: In 95 Prozent der Zuge sind Fahrrader erlaubt. Auf dem Bahnhof sieht man schnell, wo man einsteigen soll. Es gibt Markierungen auf dem Informationsplan. Unser Tipp: 60 Franken (40 Euro) kostet eine Fahrkarte, mit der man an sechs frei wahlbaren Tagen fahren kann. Auch Osterreich mag Touristen mit Fahrrad. Zwolf Euro kostet die Fahrradmitnahme aus dem Ausland.\n\n5.___________ \nStadturlauber nehmen oft an Stadtfuhrungen teil, um einen Ort kennen zu lernen. Auch das Essen ist in fremden Stadten oft anders als zu Hause. In vielen Stadten gibt es Fuhrungen, die beide Aspekte kombinieren. Die Teilnehmer lernen zum Beispiel etwas uber historische Architektur. Auserdem konnen sie Gerichte probieren, die typisch fur die Region sind. Diesen Service bietet man in Berlin, Hamburg und Munchen. Besucher der Schweiz finden im Internet Angebote in vielen Landesteilen. In Wien gibt es auch eine spezielle Stadtfuhrung fur die Freunde von Kuchen.';
		var Aufgabe2_2011='Die „Torte vom Sacher“ \n\nAus Schokolade muss es sein! Das hat der 16-jahrige Konditorlehrling Franz Sacher wahrscheinlich gedacht, als er von seinem Chef, Furst Klemens von Metternich, den Auftrag bekommt, ein besonderes Dessert fur die Hofgaste zu machen. \n\nEs ist das Jahr 1832 und Schokolade ist in Europa beim Adel so sehr in Mode, dass in der Schweiz sogar die ersten Schokoladenfabriken entstehen. Und so macht auch Sacher eine Schokoladentorte: mit einem saftigen, aber auch locker-luftigen Schokoladenteig und einer knackigen Schokoladenglasur daruber. Um den Geschmack aufzufrischen, streicht Sacher die Torte mit ein wenig Marillenmarmelade ein – fertig ist die „Torte vom Sacher“. Sie ist ein Experiment, denn normalerweise macht der Junge zu diesen Anlassen nicht das Dessert. Er ist erst im zweiten Jahr seiner Ausbildung, aber heute Abend liegt der Kuchenchef von Schloss Schonbrunn krank im Bett. Das ist ein echter Notfall.\n\nFurst Metternich, der seinen Amtssitz im Schloss Schonbrunn hatte, war Kanzler von Osterreich und ein bedeutender Politiker des 19. Jahrhunderts. Er war aber auch ein „Lebemann“, er feierte gerne und liebte den Luxus. An diesem Abend hatte er wieder ein delikates Essen fur ganz besondere Gaste in der Kuche bestellt. Die Erleichterung in der Kuche war sicher gros, als endlich die Nachricht aus dem Speisesaal kam: Die Torte war ein voller Erfolg! \n\nTrotzdem dauert es noch uber zehn Jahre, bis aus der „Torte vom Sacher“ die beruhmte „Sachertorte“ wird. Aus dem Lehrling Franz Sacher wird ein groser Konditor, der nach seiner Ausbildung beim Grafen von Esterhasy arbeitet, zuerst in Pressburg, dann in Budapest. Erst 1848 kommt er wieder nach Wien und eroffnet dort einen Feinkostladen und eine einhandlung. Er arbeitet nicht mehr als Konditor. Doch seine Sohne Carl und Eduard treten in seine Fusstapfen. Eduard macht eine Konditorausbildung bei Hofzuckerbacker „Demel“ in Wien. Dort entwickelt er das Rezept der Schokoladentorte seines Vaters weiter, indem er eine zweite Marmeladenschicht in die Mitte der Torte einzieht. Jetzt schmeckt die Torte noch frischer. Die Wiener essen sie gerne. Als Eduard 1876 das Hotel „Sacher“ baut, beginnt er in grosem Rahmen die Sachertorte zu backen und zu verkaufen – mit grosem Erfolg. Heute ist die „Original-Sachertorte“ eine Spezialitat des „Sacher-Hotels“, aber auch von ganz Wien. „Sacher“ produziert taglich bis zu 3000 Torten und verschickt sie in alle Lander der Welt. Das Rezept ist immer noch streng geheim.\n\nAngeblich ist die Glasur auf der Torte eine besondere Mischung aus drei Schokoladensorten, die nur fur Sacher von drei verschiedenen Firmen hergestellt werden.';
		var Anzeigen_2011='A\nGarten ohne Ecken und Kanten\nLassen Sie sich ihren Garten durch einen erfahrenen Meister planen. Meine Planungen folgen\ndem Beispiel der Mutter Natur.\nUdo Westhelle, staatl. gepr. Gartenbautechniker und Feng Shui Berater\nFirma Raum & Baum „Der besondere Garten“\n\nB\nPutzen in Privatwohnung\nSuche Haushaltshilfe zum Putzen meiner kleinen Wohnung.\nSamstags fur ca. 2 Stunden. Die Putzhilfe soll das Wischen der Kuche, des Flurs und des\nWohnzimmers ubernehmen, sowie das Badezimmer sauber machen. Je nach Erfordernis sollen\ndie Fenster auch mit gereinigt werden. Guter Verdienst.\nEventuell regelmasig.\nAlles Weitere auf Anfrage.\n\nC\nFensterputzer\nGlas, Gebaudereinigung, Rahmen, Fenster, Haushaltshilfe\nSelbstandig - zuverlassig - professionell\nMit den besten Empfehlungen aus 20-jahriger Berufserfahrung.\nWir arbeiten professionell fur Buros & Privathaushalte in allen Grosenordnungen!\nVereinbaren Sie einen Termin unter Sofortkontakt\nTelefon Koln 0221 - 530 28 48\n\nD\nSuche 400€ Job\nIch bin 37, suche eine Putzstelle im Haushalt oder in der Gebaudereinigung.\nErfahrung in beidem vorhanden.\nBesser in der Woche. Ab September gerne fur Vormittags.\nBitte nur seriose Angebote\n59427 Unna\nTelefon: 353 29 28\n\nE\nFensterputz & Hausputz\n14 Fenster eines Neubaus inkl. 2 Dachfenster sowie der gesamte Haushalt sind zu putzen:\n3 Schlafzimmer, 1 Bad, 1 Gaste-WC, Kuche, Wohn- und Essraum, Treppenhaus und 2 x Flur.\nBesser in der Woche, Dienstag bis Freitag, vormittags.\nGesamt ca. 150m2.\n59174 Kamen\nTelefon: 522 45 78\n\nF\nMobile Dienste fur Alltag und Haushalt\nMein Name ist Andrea, bin verheiratet und habe drei Kinder. Ich biete haushaltsnahe Dienste\nan:\n *Hauswirtschaftliche Hilfen\n *Wohnungsreinigung, Einkaufen, Waschepflege, u.a.\nWenn ich Ihr Interesse geweckt habe, wurde ich mich uber einen Anruf freuen.\nTelefon: 541 18 79\n\nG\nSie benotigen Hilfe im Garten?\nSie haben einen Garten und haben einfach keine Zeit ihn sauber und ordentlich zu halten? Ich helfe Ihnen gerne: Rasenmahen, Hecke schneiden, etc. Schnell, leicht, kreativ.\nFragen Sie einfach an. Ich freue mich auf Ihren Anruf.\nTelefon: 643 24 67\n\nH\nGartenpfleger/in gesucht\nIch suche einen Gartenpfleger fur meinen Garten und Vorgarten. Wir sind zeitlich flexibel, deswegen kann der Gartenpfleger fast frei entscheiden, wann in der Woche er kommen will.\nDie gesamte Flache betragt ca. 60 m2 und ich denke, dass man die Arbeit in gut 2-2,5 Stunden erledigen kann.\n59071 Hamm\nTelefon: 457 66 90\n\nI\nHausmeisterdienste zu gunstigen Preisen\nSie brauchen Hilfe am und im Haus?\n *Kleinumzuge\n *Kleintransporte von Mobeln und Einrichtungsgegenstanden\n *Raumungen von Ausenflachen und Lagerhallen\nWir erledigen fur Sie Arbeiten rund ums Haus zu gunstigen Preisen.\n58840 Plettenberg\n\nJ\nPutzhilfe gesucht\nSuche zuverlassige ordentliche deutschsprachige weibliche Putzhilfe, die 1x wochentlich in unserem Haus das Bad und Gaste-WC putzt, die untere Etage saugt und Staub wischt!\nEinmal monatlich sollten die Fenster geputzt werden!\nAm besten ware es in der Woche von 8 Uhr bis 10 Uhr.\n59469 Ense Bittingen';
		var Aufgabe4_2011='Wie wohnt die Jugend?\n\nThomas Magerl, 23 Jahre, studiert Volkswirtschaftslehre in Berlin. Er erzahlt: – Ich wohne in einer WG, zusammen mit drei Leuten. Insgesamt sind wir zwei Jungs und zwei Madchen. An unserer WG gefallt mir besonders, (16)___________ und man verschiedene Leute trifft. Wir unternehmen viel zusammen. Auch mit der Ordnung klappt es ganz gut: Wir haben einen Putzplan (17)____________.\n\nBei meinen Eltern konnte ich nicht wohnen. Sowohl meine Eltern als auch ich denken, (18)______.\n\nAuserdem studiere ich in einer anderen Stadt. Im Haus meiner Eltern gelten deren Regeln, (19)_________. In der WG kann ich machen, (20)_____________. Zum Gluck werde ich von meinen Eltern finanziell unterstutzt, so (21)_________________.';
		var Aufgabe5_2011='Modedesigner mit 16\n\nLennart Wronkowitz hat viel zu tun. Er hat ein eigenes Modelabel – mit 16 Jahren. „Ich halte ihn (22)__________ ein groses Talent!“ So hat es Collien Fernandes gesagt. Die deutsche Moderatorin hat (23)__________ ein T-Shirt von Lennart Wronkowitz angezogen und (24)__________ mit dem 16-Jahrigen bei der Berliner Modewoche uber den roten Teppich (25)__________. Vielleicht war der Termin in Berlin fur den jungen Designer der Anfang (26)__________ grosen Karriere. Lennart wohnt fast 500 Kilometer westlich von (27)__________ Hauptstadt, in Soest. Dort geht er auch noch zur Schule. Er arbeitet in einem (28)__________ Atelier, das in der Arztpraxis (29)__________ Vaters liegt. Lennart hat dunkle Haare und (30)___________ eine sehr grose schwarze Brille. Seine Mode ist bunt, kreativ, und sie provoziert: jugendliche Partymode fur Menschen, (31)__________ sich nicht so gerne normale Sachen anziehen. Lennart mochte ein bekannter Modedesigner werden. (32)___________ ist die Provinz nicht ideal, findet er. Deshalb will er (33)____________ dort weg. Seine Kreationen will er spater in New York, Paris und Mailand zeigen.';
		var Aufgabe6_1_2011='Text1\n\nMangel an Ingenieuren\n\nIn Deutschland gibt es zu wenig Ingenieure und Fachkrafte in den technischen Berufen. Junge Deutsche (34)__________nur sehr selten eine Ingenieursausbildung. Die Bundesregierung, die Wirtschaft und die Wissenschaft (35)_________ nun mehr Frauen zu einem naturwissenschaftlich-technischen (36)__________ bewegen. Dafur soll bei Schulerinnen schon fruh das Interesse an der (37)__________ geweckt werden. Aber auch die Unternehmen konnen Frauen in den technischen (38)______ helfen, (39)_______ und Karriere zu vereinbaren.';
		var Aufgabe6_2_2011='Text2\n\nAls Austauschschulerin im Kiwi-Land\n\nLinda (16) aus Puchheim hat sich dafur entschieden, die 11.Klasse in Neuseeland zu verbringen. Sie erzahlt: \n\n– Die Schule hier ist auf jeden Fall total anders! Einer der grosten Unterschiede ist, dass ich eine (40)__________ tragen muss. Zum Gluck finde ich die aber gar nicht schlecht. Ein weiterer groser Unterschied ist, (41)__________ ich hier schon in der 12. Klasse bin und nur sechs Facher habe: Neben Physik, Mathe, Englisch und Musik habe ich noch Journalismus und Photographie. Und der groste Unterschied zu Deutschland ist naturlich die (42)__________. Alles ist auf Englisch. Die ersten paar Wochen fand ich es ziemlich (43)___________, dem Unterricht zu folgen. Doch mittlerweile verstehe ich fast alles. Ich konnte wahrscheinlich ein ganzes Buch uber meine bisherigen tollen (44)___________ schreiben. Heute kann ich nur allen raten: Geht (45)__________ Neuseeland, dem schonsten Land der Welt!';
		gradeArray=new Array("100.0","100.5","102.0","103.5","106.5","110.0","114.0","118.5","123.0","127.0","131.0","134.5","138.5","142.0","145.0","147.5","149.5","151.5","153.0","154.5","155.5","156.5","157.5","158.5","159.0","159.5","160.5","161.0","161.5","162.0","162.5","163.0","164.0","164.5","165.0","165.5","166.5","166.5","167.5","168.0","168.5","169.5","170.5","171.0","171.5","172.0","173.0","173.5","174.5","175.0","176.0","177.0","177.5","178.5","179.5","180.5","182.0","183.0","184.0","185.5","186.5","188.0","190.0","191.5","193.0","195.0","196.5","198.0","199.0","200.0");
		answerArray=new Array("j","g","a","f","d","c","b","c","b","d","g","c","b","a","f","g","d","h","b","a","e","d","b","c","b","c","c","b","c","c","d","d","d","e","h","a","d","b","g","f","c","h","e","d","b"," ");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(Aufgabe1_2011,Aufgabe1_2011,Aufgabe1_2011,Aufgabe1_2011,Aufgabe1_2011,Aufgabe2_2011,Aufgabe2_2011,Aufgabe2_2011,Aufgabe2_2011,Aufgabe2_2011,Anzeigen_2011,Anzeigen_2011,Anzeigen_2011,Anzeigen_2011,Anzeigen_2011,Aufgabe4_2011,Aufgabe4_2011,Aufgabe4_2011,Aufgabe4_2011,Aufgabe4_2011,Aufgabe4_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe5_2011,Aufgabe6_1_2011,Aufgabe6_1_2011,Aufgabe6_1_2011,Aufgabe6_1_2011,Aufgabe6_1_2011,Aufgabe6_1_2011,Aufgabe6_2_2011,Aufgabe6_2_2011,Aufgabe6_2_2011,Aufgabe6_2_2011,Aufgabe6_2_2011,Aufgabe6_2_2011,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,24);
		variantNumberArray=new Array(10,10,10,10,10,4,4,4,4,4,10,10,10,10,10,8,8,8,8,8,8,4,4,4,4,4,4,4,4,4,4,4,4,9,9,9,9,9,9,9,9,9,9,9,9,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}		
	}
/*************************************************************/
//Тесты по химим
/*************************************************************/	
/*основной тест ЗНО-2009 по химии 1 сессия */
	if(testName=="ЗНО-2009 химия. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2009main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","104.0","106.0","108.5","111.5","114.0","117.0","120.0","123.0","125.5","128.0","130.0","132.5","134.0","136.0","138.0","139.5","140.5","142.0","143.5","144.5","145.5","146.5","147.5","148.5","149.5","150.0","151.0","152.0","152.5","153.5","154.0","155.0","155.5","156.5","157.0","157.5","158.5","159.0","160.0","160.5","161.5","162.0","162.5","163.5","164.0","164.5","165.5","166.0","167.0","167.5","168.0","169.0","170.0","170.5","171.5","172.0","173.0","174.0","174.5","175.5","176.5","177.5","178.0","179.0","180.0","181.0","182.0","183.0","183.5","184.5","185.5","187.0","188.0","189.0","190.0","191.5","192.5","194.0","195.0","196.0","197.0","198.0","199.0","200.0","200.0","200.0");
		answerArray=new Array("a","d","c","a","b","a","c","d","b","a","a","b","c","b","d","d","a","b","c","c","a","c","b","a","b","b","a","d","d","b","a","c","d","b","c","cbda","ceab","bead","edca","beda","cbad","acbd","bacd","bdac","cbad","dcba","bdac","bcda","abdc","dbca",128,4,278,200,64,10,112,96,6,9);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*основной тест ЗНО-2010 по химии 1 сессия */
	if(testName=="ЗНО-2010 химия. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.0","103.5","105.0","106.5","109.0","111.5","114.0","116.5","119.0","121.5","123.5","126.0","128.0","130.0","132.0","133.5","135.5","137.0","138.5","140.0","141.5","143.0","144.0","145.5","146.5","148.0","149.0","150.0","151.0","152.0","152.5","153.5","154.5","155.0","156.0","157.0","158.0","158.5","159.5","160.0","161.0","162.0","163.0","163.5","164.5","165.5","166.5","167.5","168.0","169.0","170.0","171.0","172.0","173.0","173.5","174.5","175.5","176.5","177.0","178.0","179.0","180.0","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.0","191.0","192.0","193.0","194.0","195.0","196.0","196.5","197.5","198.5","199.0","199.0","200.0","200.0","200.0");
		answerArray=new Array("b","a","c","a","d","d","b","b","c","a","b","d","d","c","c","b","b","c","c","d","a","c","b","b","a","a","c","b","c","b","c","b","d","b","a","eadc","cabd","ecab","badc","acbe","cbad","cadb","dbac","cbda","dabc","bcda","cabd","dbac","acdb","abdc",30,5,5,18,14,80,36,698,31,9);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
	/*основной тест ЗНО-2011 по химии 1 сессия */
	if(testName=="ЗНО-2011 химия. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2011main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.5","102.5","105.0","107.0","110.0","113.0","116.5","120.0","123.5","126.5","129.5","132.5","135.0","137.0","139.5","141.5","143.0","144.5","146.0","147.5","148.5","149.5","150.5","151.5","152.5","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","160.5","161.0","162.0","162.5","163.5","164.0","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.5","172.5","173.0","174.0","174.5","175.5","176.0","177.0","178.0","178.5","179.5","180.5","181.0","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","190.0","190.5","191.5","192.5","193.0","194.0","194.5","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("b","d","b","b","a","d","b","a","a","b","a","c","c","a","c","b","c","c","d","b","a","a","c","d","d","b","c","c","b","d","c","d","b","b","d","cbda","eabc","ecbd","daeb","cebd","cabd","bdca","dcab","bacd","dbca","abdc","cbad","dbac","acbd","cadb",25,5,3,20,143,20,80,18,20,80);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","order","order","order","order","order","order","order","order","order","order","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*основной тест ЗНО-2012 по химии пробный тест */
	if(testName=="ЗНО-2012 химия. Пробный тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2012demo\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","110.0","113.0","115.5","118.5","121.0","124.0","126.5","128.5","130.5","133.0","135.0","137.0","138.5","140.0","141.5","143.0","144.5","146.0","147.0","148.0","149.0","150.0","151.0","152.0","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","161.0","161.5","162.0","163.0","163.5","164.5","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.0","172.0","172.5","173.5","174.0","175.0","175.5","176.5","177.5","178.0","179.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","194.0","195.0","196.5","197.5","198.5","199.5","200.0","200.0");
		answerArray=new Array("b","b","c","b","b","d","d","a","c","a","a","c","a","c","b","d","c","d","b","d","b","b","c","d","a","a","d","b","a","a","c","a","c","d","a","d","d","d","c","c","cbad","baec","dcea","cedb","acdb","bacd","dacb","dabc","badc","cabd",32,25,63,8,161,10,75,80,19,15);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","ordernew","ordernew","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*основной тест ЗНО-2012 по химии основной тест */
	if(testName=="ЗНО-2012 химия. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/him\/img\/test2012main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		isSignedNumeric=false;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","105.0","107.0","110.0","113.0","115.5","118.5","121.0","124.0","126.5","128.5","130.5","133.0","135.0","137.0","138.5","140.0","141.5","143.0","144.5","146.0","147.0","148.0","149.0","150.0","151.0","152.0","153.0","154.0","154.5","155.5","156.0","157.0","157.5","158.5","159.0","160.0","161.0","161.5","162.0","163.0","163.5","164.5","165.0","165.5","166.5","167.0","167.5","168.5","169.0","170.0","170.5","171.0","172.0","172.5","173.5","174.0","175.0","175.5","176.5","177.5","178.0","179.0","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","194.0","195.0","196.5","197.5","198.5","199.5","200.0","200.0");
		answerArray=new Array("d","a","a","a","b","c","c","d","c","c","a","a","d","d","d","b","c","a","c","d","a","b","c","a","b","b","d","b","b","d","b","d","c","c","a","d","a","a","c","c","cead","adcb","ceab","caed","dcba","cabd","dbca","bcda","dacb","dcab",10,353,234,112,25,18,42,150,42,6);
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","ordernew","ordernew","ordernew","ordernew","ordernew","ordernew","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
	
/*************************************************************/
//Тесты по истории
/*************************************************************/	
/*ЗНО-2010 История. Основной тест. II сессия*/
	if(testName=="ЗНО-2010 История. Основной тест. II сессия")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2010main2\/';
		testVariantNumber=4;
		answerLanguage="rus";
		gradeArray=new Array("100","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101","102","103","105","108","111.5","115","118.5","122","126","129.5","132.5","135.5","139","142","144.5","147","149.5","151.5","154","156","157.5","159.5","161","163","164.5","166","167","168.5","170","171","172","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186.5","187","188","189","190","190.5","191.5","192","193","193.5","194","195","195.5","196","196.5","197","197.5","198","198.5","199","199","199.5","199.5","200","200","200","200","200","200");
		answerArray=new Array("d","a","d","b","b","a","b","d","c","d","c","a","b","d","b","a","d","a","d","b","d","c","d","c","c","a","a","b","c","a","d","c","a","b","a","c","d","b","d","a","b","d","a","c","b","a","b","c","c","c","bace","cbde","acbe","ebcd","edcb","aebd","cdba","cdab","cbad","abdc");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*ЗНО-2010 История. Основной тест. I сессия*/
	if(testName=="ЗНО-2010 История. Основной тест. I сессия")
	{
		testLength=60;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2010main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		gradeArray=new Array("100","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101","102.5","104","106","108.5","111.5","114.5","118","121","124.5","127.5","130.5","133.5","136.5","139.5","142","144.5","147","149","151","153","155","156.5","158.5","160","161.5","163.5","164.5","166","167.5","169","170","171.5","173","174","175","176.5","177.5","178.5","180","181","182","183.5","184.5","185.5","186.5","187.5","188.5","189.5","190.5","191.5","192.5","193","194","194.5","195.5","196","196.5","197.5","198","198.5","198.5","199","199.5","199.5","200","200","200","200","200","200","200","200");
		answerArray=new Array("a","d","b","d","c","c","b","c","a","d","a","d","b","a","d","b","d","b","d","c","a","b","d","b","a","c","a","b","d","b","d","c","b","a","c","d","b","c","c","d","a","c","c","b","a","d","a","b","c","c","dabe","ebad","beca","badc","deab","cbde","cabd","bcad","dcba","cbda");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","connect","order","order","order","order");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,2,2,2,2);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*ЗНО-2011 История. Пробный тест*/
	if(testName=="ЗНО-2011 История. Пробный тест")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2011demo\/';
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
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	
/*ЗНО-2011 История. Основной тест. I сессия*/
	if(testName=="ЗНО-2011 История. Основной тест. I сессия")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2011main1\/';
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
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2012 История. Основной тест. I сессия*/
	if(testName=="ЗНО-2012 История Украины. Основной тест. I сессия")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2012main1\/';
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		multiselection_variant=6;
		multiselection_ans_number=3;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","102.0","103.0","104.0","105.5","107.5","110.0","112.5","115.5","118.5","121.5","124.5","127.0","130.0","133.0","135.5","138.0","140.5","142.5","145.0","147.0","149.0","151.0","153.0","154.5","156.5","158.0","159.5","161.0","162.5","164.0","165.0","166.5","167.5","169.0","170.0","171.0","172.5","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.0","186.0","187.0","188.0","189.0","190.0","190.5","191.5","192.0","193.0","193.5","194.5","195.0","196.0","196.5","197.0","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("c","c","d","c","b","b","b","d","a","d","c","c","a","d","a","b","c","a","d","d","b","a","c","b","d","b","c","b","a","d","c","a","b","b","d","b","c","a","d","c","a","a","a","d","b","d","a","c","dabe","ebad","ebcd","becd","deab","cbda","badc","bdac","bde","ade","acf","bdf");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","ordernew","ordernew","ordernew","multiselection","multiselection","multiselection","multiselection");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,3,3,3,3,3,3,3);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2012 История. Основной тест. II сессия*/
	if(testName=="ЗНО-2012 История Украины. Основной тест. II сессия")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/ist\/img\/test2012main2\/';
		testVariantNumber=4;
		answerLanguage="rus";
		componateVariantNumber=3;
		multiselection_variant=6;
		multiselection_ans_number=3;
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.5","106.0","108.0","110.0","112.5","115.0","118.0","120.5","123.5","126.0","129.0","131.5","133.5","136.0","138.0","140.5","142.5","144.0","146.0","148.0","150.0","151.5","153.0","154.5","156.0","157.5","159.0","160.5","162.0","163.0","164.5","165.5","167.0","168.0","169.5","170.5","171.5","173.0","174.0","175.0","176.0","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","189.5","190.5","191.5","192.0","193.0","194.0","194.5","195.5","196.0","196.5","197.5","198.0","198.5","199.0","199.0","199.5","200.0","200.0","200.0");
		answerArray=new Array("b","a","b","b","c","c","d","a","a","b","a","c","b","a","d","b","a","c","d","c","a","c","d","c","d","b","b","d","a","c","a","a","a","d","c","d","a","d","d","c","c","b","b","d","b","b","d","c","cdab","bcea","bdae","ecba","cdab","cbda","acdb","bcda","bdf","bdf","ace","bce");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","ordernew","ordernew","ordernew","multiselection","multiselection","multiselection","multiselection");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,3,3,3,3,3,3,3);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2012 Всемирная История. Основной тест.*/
	if(testName=="ЗНО-2012 всемирная история. Основной тест.")
	{
		testLength=60;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/mir\/img\/test2012main1\/';
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
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}

/*************************************************************/
//Тесты по математике
/*************************************************************/	
/*ЗНО-2006.Математика. */
	if(testName=="ЗНО-2006.Математика.Основной тест")
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
	}
/*ЗНО-2007.Математика. */
	if(testName=="ЗНО-2007.Математика.Основной тест")
	{
		testLength=38;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2007main\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","115","121","125","129","132","134","137","139","141","143","145","147","149","150","152","154","155","157","158","159","161","162","163","164","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","184","185","186","187","188","189","189","190","191","192","193","193","194","195","196","196","197","198","199","199","200");
		answerArray=new Array("a","e","c","e","d","b","e","d","d","e","a","b","d","c","b","a","e","c","a","d",-5,144,-8,60,0.5,8,-3,32,4,1,2,-3,12.5,405,12,"arctg(√(11))","y=√(−x)−2:x∈(−∞;−16];y=2:x∈(−16;0]","a∈(0;1):x∈(−∞;log↓‘2’(lg(1:a)));a∈{1}:x∈Ø;a∈(1;+∞):x∈(√(a)-√(a-1);√(a)+√(a-1))");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,6);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*ЗНО-2008.Математика.Основной тест*/
	if(testName=="ЗНО-2008.Математика.Основной тест")
	{
		testLength=36;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2008main\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","102","108","115","124","131","138","144","149","153","156","159","161","163","165","167","169","170","172","173","175","176","177","178","180","181","182","183","184","185","186","187","188","189","189","190","191","192","192","193","194","194","195","196","196","197","197","198","198","199","199","200","200","200","200","200");
		answerArray=new Array("b","b","c","d","e","c","a","b","c","e","d","e","a","b","a","c","d","e","b","a","c","b","d","a","c",6,2.5,-2,10,0.45,48,135,1.4,"arccos(1:2×√(3))","[-3;-1)U{3}","1)(-1;0)U(2;+∞);2)(−∞;−1)U(0;2);3)−32;4)+∞;5)Ø:(−∞;−32);1:{-32};2:(-32;-5)U(0;+∞);3:{-5}U{0};4:(-5;0)");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,4,4,6);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
 /*основной тест ЗНО-2009 по математике */
	if(testName=="ЗНО-2009.Математика.Основной тест")
	{
		testLength=33;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/mat\/img\/test2009main\/';
		testVariantNumber=5;
		answerLanguage="rus";
		isSignedNumeric=true;
		gradeArray=new Array("100","106.5","114.5","122.5","129.5","135","139.5","143","146","148.5","150.5","152.5","154.5","156","157.5","159","160.5","162","163","164.5","165.5","167","168","169","170","171.5","172.5","173.5","174.5","175.5","176.5","177.5","178.5","179.5","180.5","181.5","182.5","183.5","184.5","185.5","186","187","188","189","190","191","192","193","194","195.5","196.5","197.5","198.5","200","200");
		answerArray=new Array("c","b","d","e","c","d","a","b","a","d","c","e","d","c","b","a","e","d","e","a",64,42,-0.6,36,12,56, 7,14,0.375,0.5,"R↑«2»×tgα×√(1−tg↑«2»α×tg↑«2»φ):cosφ","1)−3;2;2)20+5:6","[1.25;+∞)");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","numeric","free","free","free");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,4,4,6);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*основной тест ЗНО-2010 по математике 1 сессия */
	if(testName=="ЗНО-2010 Математика. Основной тест. I сессия")
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
	}
/*основной тест ЗНО-2010 по математике 2 сессия */
	if(testName=="ЗНО-2010 Математика. Основной тест. II сессия")
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
		
	}
/*основной тест ЗНО-2011 по математике*/
	if(testName=="ЗНО-2011 Математика. Основной тест")
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
	}
/*пробный тест ЗНО-2012 по математике*/
	if(testName=="ЗНО-2012 Математика. Пробный тест")
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
	}
/*тест ЗНО-2012 по математике сессия 1*/
	if(testName=="ЗНО-2012 Математика. Основной тест. I сессия")
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
	}
/*тест ЗНО-2012 по математике сессия 2*/
	if(testName=="ЗНО-2012 Математика. Основной тест. II сессия")
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

/*************************************************************/
//Тесты по русскому языку	
/*************************************************************/
/*ЗНО-2011 Русский язык. Основной тест. I сессия*/
	if(testName=="ЗНО-2011 Русский язык. Основной тест.")
	{
		testLength=51;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='\/test\/rus\/img\/test2011main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var Penitsilin='(1) Этому плесневелому грибку, без сомнения, можно поставить памятник, ведь благодаря ему были спасены миллионы жизней, стало возможно лечение прежде смертельных заболеваний, таких как стафиллококовые инфекции. \n(2)Ни одна операция в мире не обходит…ся без пенициллиновой терапии, и с лекарствами, полученными из этой плесени, сталкивалось большинство людей. \n(3)Её лечебные свойства были открыты случайно в 1928 году, когда ассистент шотландского биолога Александра Флеминга забыл закрыть окно на ноч…, и утром оказалось, что некие споры покрыли образцы стафиллококов в открытом контейнере. \n(4)Сначала он чуть не выбросил «испорченный» материал, но догадался изучить его в микроскоп. \n(5)Оказалось, что бактерии, окружённые сине-зелёной плесенью, погибают и не способны размножат…ся. \n(6)Изучив эту плесень, он обнаружил, что это Penicillinum chrisogenum, что привело после к выпуску лекарственного средства – пенициллина, который не только убивает бактерии, но и способен лечить опасные болезни у животных и людей. \n(7)… человечество обрело возможность борот…ся за жизнь.';
		var Gogol='(1–6) Надобно сказать, что у нас на Руси если не угнались ещё кой в чём другом за иностранцами, то далеко перегнали их в умении обращаться. Пересчитать нельзя всех оттенков и тонкостей нашего обращения. Француз или немец век не смекнёт и не поймёт всех его особенностей и различий; он почти тем же голосом и тем же языком станет говорить и с миллионщиком, и с мелким табачным торгашом, хотя, конечно, в душе поподличает в меру с первым.\n\n(7–11) У нас не то: у нас есть такие мудрецы, которые с помещиком, имеющим двести душ, будут говорить совсем иначе, нежели с тем, у которого их триста, а с тем, у которого их триста, будут говорить опять не так, как с тем, у которого их пятьсот, а с тем, у которого их пятьсот, опять не так, как с тем, у которого их восемьсот, – словом, хоть восходи до миллиона, всё найдутся оттенки.\n\n(12–19) Положим, например, существует канцелярия, не здесь, а в тридевятом государстве, а в канцелярии, положим, существует правитель канцелярии. Прошу посмотреть на него, когда он сидит среди своих подчинённых, – да просто от страха и слова не выговоришь! Гордость и благородство, и уж чего не выражает лицо его? Просто бери кисть, да и рисуй: Прометей, решительный Прометей! Высматривает орлом, выступает плавно, мерно. Тот же самый орёл, как только вышел из комнаты и приближается к кабинету своего начальника, куропаткой такой спешит с бумагами под мышкой, что мочи нет.\n\n(20–26) В обществе и на вечеринке, будь все небольшого чина, Прометей так и останется Прометеем, а чуть повыше его, с Прометеем сделается такое превращение, какого и Овидий не выдумает: муха, меньше даже мухи, уничтожился в песчинку. «Да это не Иван Петрович, – говоришь, глядя на него. – Иван Петрович выше ростом, а этот и низенький, и худенький; тот говорит громко, басит и никогда не смеётся, а этот чёрт знает что: пищит птицей и всё смеётся». Подходишь ближе, глядишь – точно Иван Петрович! «Эхе – хе!» – думаешь себе…\n\nН.В.Гоголь\n314 слов';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","102.0","102.5","104.0","105.5","107.5","109.0","111.5","113.0","114.0","115.0","117.0","119.5","121.5","123.5","125.5","127.0","128.5","130.0","131.5","132.5","134.0","135.5","136.5","138.0","139.0","140.0","141.0","142.5","144.0","145.0","146.5","148.0","149.0","150.5","151.5","153.0","154.0","155.5","157.0","158.5","159.5","161.0","162.5","164.0","165.0","166.5","168.0","169.5","171.0","172.5","174.0","175.0","176.0","177.5","179.0","180.5","182.0","183.5","184.5","186.5","188.0","189.0","190.5","191.5","193.0","194.5","196.5","197.0","197.5","198.0","199.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("c","b","a","a","d","c","b","c","a","d","d","a","c","d","b","d","b","b","d","c","c","b","a","c","d","c","a","b","b","c","b","a","d","d","b","a","b","cead","eabc","edca","bedc","daec","c","d","c","a","d","d","b","d","");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(Penitsilin,Penitsilin,Penitsilin,Penitsilin,Penitsilin,Penitsilin,Penitsilin,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",Gogol,Gogol,Gogol,Gogol,Gogol,Gogol,Gogol,Gogol,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}		
/*ЗНО-2012 Русский язык. Основной тест. I сессия*/
	if(testName=="ЗНО-2012 Русский язык. Основной тест.")
	{
		testLength=51;
		timeCounter=150*60;
		testTime=timeCounter;
		testDirectory='test\/rus\/img\/test2012main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var Solomon='(1)Жил-был мудрый царь Соломон. (2)Но, (не)смотря на свойственную ему мудрость, жизнь его не была спокойной. (3)И поэтому, по обыкновению, обратился однажды царь Соломон за советом к придворному мудрецу: (4)«Помоги мне: (в)течение многих лет я пытался усмирить свои страсти, но безуспешно, поэтому и страдаю». (5)Помолчав, мудрец ответил: (6)«Я знаю, как помочь тебе: надень это кольцо. (7)Когда тебя постигнет беда, гнев, взгляни на то, что написано на нём, и ты обретёшь покой». (8) На кольце было начертано: «Это пройдёт». (9) (В) продолжение многих лет, чтобы успокоить своё сердце в минуты страдания или гнева, он смотрел на кольцо и обретал душевный мир. (10)Что(бы) ни происходило, надпись на кольце напоминала: ничто не может быть вечным.';
		var LikeReading=' \nЛЮБИТЕ ЧИТАТЬ! \n\n(1–3) Каждый человек обязан (я подчеркиваю – обязан) заботиться о своем интеллектуальном развитии. Это его обязанность перед обществом, в котором он живет, и перед самим собой. \n\n(4–5) Основной (но, разумеется, не единственный) способ своего интеллектуального развития – чтение. \n\n(6–11) Чтение не должно быть случайным. Это огромный расход времени, а время – величайшая ценность, которую нельзя тратить на пустяки. Читать следует по программе, не следуя ей жестко, отходя от нее там, где появляются дополнительные для читающего интересы. Однако при всех отступлениях от первоначальной программы необходимо составить для себя новую, учитывающую появившиеся новые интересы. \n\n(12–15) Чтение, для того чтобы оно было эффективным, должно интересовать читающего. Интерес к чтению вообще или по определенным отраслям культуры необходимо развивать в себе. Интерес может быть в значительной мере результатом самовоспитания. \n\n(16–18) Составлять для себя программы чтения не так уж просто, и это нужно делать, советуясь со знающими людьми, с существующими справочными пособиями разного типа. \n\n(19–21) Опасность чтения – это развитие (сознательное или бессознательное) в себе склонности к «диагональному» просмотру текстов или к различного вида скоростным методам чтения. \n\n(22–24) «Скоростное чтение» создает видимость знаний. Его можно допускать лишь в некоторых видах профессий, остерегаясь создания в себе привычки к скоростному чтению, оно ведет к заболеванию внимания. \n\n(25–27) Замечали ли вы, какое большое впечатление производят те произведения литературы, которые читаются в спокойной, неторопливой и несуетливой обстановке, на отдыхе? \n\n(28–40) Литература дает нам колоссальный, обширнейший и глубочайший опыт жизни. Она делает человека интеллигентным, развивает в нем не только чувство красоты, но и понимание – понимание жизни, всех ее сложностей, служит проводником в другие эпохи, раскрывает перед вами сердца людей. Одним словом, делает вас мудрыми. Но все это дается только тогда, когда вы читаете, вникая во все мелочи. Ибо самое главное часто кроется именно в мелочах. А такое чтение возможно только тогда, когда вы читаете с удовольствием, не потому, что то или иное произведение надо прочесть, а потому, что оно вам нравится – вы почувствовали, что автору есть что сказать, есть чем с вами поделиться и он умеет это сделать. У человека должны быть любимые произведения, к которым он обращается неоднократно, которые знает в деталях, о которых может напомнить в подходящей обстановке окружающим и этим то поднять настроение, то разрядить обстановку, то посмешить, то просто выразить свое отношение к происшедшему с вами или с кем-либо другим. \n\n(41–42) «Незаинтересованное», но интересное чтение – вот что заставляет любить литературу и что расширяет кругозор человека. \n\n(43–45) Умейте читать не только для школьных ответов и не только потому, что ту или иную вещь читают сейчас все – она модная. Умейте читать с интересом и не торопясь. \n\n(46–54) Почему телевизор частично вытесняет сейчас книгу? Да потому, что телевизор заставляет вас не торопясь просмотреть какую-то передачу, сесть поудобнее, чтобы вам ничего не мешало, он вас отвлекает от забот, он вам диктует – как смотреть и что смотреть. Я не говорю: перестаньте смотреть телевизор. Но я говорю: смотрите с выбором. Тратьте свое время на то, что достойно этой траты. Читайте же больше и читайте с величайшим выбором. Определите сами свой выбор, сообразуясь с тем, какую роль приобрела выбранная вами книга в истории человеческой культуры, чтобы стать классикой. Это значит, что в ней что-то существенное есть. А может быть, это существенное для культуры человечества окажется существенным и для вас? \n\n(55–60) Классическое произведение – то, которое выдержало испытание временем. С ним вы не потеряете своего времени. Но классика не может ответить на все вопросы сегодняшнего дня. Поэтому надо читать и современную литературу. Не бросайтесь только на каждую модную книгу. Не будьте суетны. Суетность заставляет человека безрассудно тратить самый большой и самый драгоценный капитал, каким он обладает, – свое время. \n\n577 слов \n\nД. Лихачёв';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","102.5","104.0","105.5","107.5","109.5","111.0","113.0","115.0","117.0","119.0","121.0","123.0","124.5","126.5","128.0","130.0","131.5","133.5","135.0","136.5","138.0","139.5","141.5","143.5","145.0","146.5","148.5","150.0","151.5","153.5","155.0","157.0","158.5","160.0","162.0","163.5","165.0","166.5","168.0","169.5","171.0","172.0","173.5","174.5","176.0","177.5","178.5","180.0","181.5","183.0","184.0","185.5","187.0","188.0","189.5","191.0","192.0","193.5","194.0","195.0","195.5","197.0","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","d","b","c","a","b","b","d","c","d","c","c","a","c","c","b","b","c","c","d","c","d","b","d","c","a","b","c","b","a","d","c","c","a","c","c","a","eadc","edba","becd","dcea","bacd","b","d","d","d","b","d","a","d","");
		taskTypeArray=new Array("textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","tvir");
		textAnalysisArray=new Array(Solomon,Solomon,Solomon,Solomon,Solomon,Solomon,Solomon,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",LikeReading,LikeReading,LikeReading,LikeReading,LikeReading,LikeReading,LikeReading,LikeReading,"tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,4,4,4,4,4,4,4,4,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	
/*************************************************************/
//Тесты по украинскому языку	
/*************************************************************/
/*ЗНО-2009 Украинский язык и литература*/
	if(testName=="ЗНО-2009 Украинский язык и литература")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2009\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var Kvitka='	Квітка на асфальті\n\n	(1-4) Далеко не всім у нас відома Квітка Цісик — американка українського походження, майже містична співачка. Ця аудіомісіонерка зробила для пропаганди української душі у світі, мабуть, більше, ніж президенти. Її неповторне виконання — просвітлена приреченість, а її доля — фатальний відхід майже на зльоті.\n	(5-9) Ті, хто чув її композиції (а це відомі пісні, у тому числі «Два кольори», «Я піду в далекі гори», «Чуєш, брате мій»), не можуть звільнитися від їхнього енергетичного впливу. Перший диск записаний 1980-го, другий — через дев’ять років. Кожен з «утаємничених» у її творчість може розповісти, як уперше почув і здивувався: «А звідки тут янголи?».\n	(10-13) Виявилося, янгол поселився у старій касеті. Хіба вгадаєш, у якій подобі Творець відправляє на землю своїх гінців, і хіба завбачиш, якої миті він покличе їх назад? От тільки ті 1990-ті були не янгольські. І ніщо не віщувало появи цього голосу «нізвідки» — на диво місцевій естраді.\n	(14-16) Зірок тоді наплодилося необлікована кількість. Більше, ніж на небі. Творець навіть розгубився... Але ж душа все одно лишалася байдужою до підступів. Тріскотіть, співайте, вийте! А ми, можливо, й дочекаємося свого — янгола?\n	(17-19) …І тут доведеться згадати добрим словом свідомих українських піратів. Спасибі, друзі, за те, що з далекого берега доставляли в тривожний час не тільки товари народного вжитку, а й перлини у вигляді касет — цю саму Квітку.\n	(20-28) Після того, як її записи стали проникати в місцеві програвачі й у деякі серця, з’явилися легенди. Адже багато хто чув, але ніхто не бачив, а голос хвилював. Казали, ніби її предки — із аристократичного музичного роду, наче в Америці вона вмирає від хвороби. І співає на паперті українських пісень, бо «не має на що жити!». І то правда: у деяких її піснях проривалося щось зрошене сльозою розлуки, благанням про милість. Ніби стоїть ця гарна дівчина посеред Брукліна, коханим покинута, долею скривджена, батьківщиною забута, і виводить пісню знетямлено, протяжно, жалібно. І я навіть уявляв собі її самозаглиблений погляд і відсторонену байдужість до світу. Оскільки і світ байдужий до неї, бо в ньому місце не квіткам, а будякам.\n	(29-33) Згодом усе виявилося не таким драматичним. У дівчини справді було романтичне минуле. Її родина ніколи не забувала про рідну землю, на якій тільки у мріях і ростуть виняткові квіти. І долю доньки, названої вигадливо, як для техногенної Америки, — Квіткою, її батьки бачили виключно в музичному орнаменті.\n	(34-38) Квітка вступила до нью-йоркської консерваторії. Та розчарую шанувальників американської мрії. Оперне майбутнє не склалося, а її американською «дійсністю» стає... рекламний конвеєр, і ось вона — цей янгол — співає дивним тембром сто мільйонів разів якісь «трелі»-заставки для коли.\n	(39-43) Було в її кар’єрі й залучення до «великого» кіно. Але це так – мимохідь – так і не розквітла для «Оскара». Але родичі чітко усвідомили: призначення цього херувима не кока-кола, а щось неземне. Те, що залишається тільки у творчості. Тому і сподобилися допомогти їй у «сімейній вигадці» — записі українських пісень, які вона ввібрала з материнським молоком.\n	(44-49) Свої кревні 200 тисяч доларів ця вродлива й розкута американка вкладає в «український проект». У сімейні альбоми. Ніби «не для продажу». Українська — не найдосконаліша в її розмовній мові (м’яко кажучи). Але вимову контролює мама. У результаті народжується щось ніким не очікуване... Наче «відкриваючи» для себе українську мову, Квітка «з чистого аркуша» розповідає відомі пісенні сюжети. А ми сприймаємо їх — «як уперше».\n	(50-54) Виконує хрестоматійні «Два кольори». Мільярд разів чуті. Але небесний тембр — мимохіть — ніби вириває зі строфи одне слово: «Червоне — то любов, а чорне — то-о-о-о… журба». І в «то-о-о» — горе знання і небажання зустріти «журбу». Вона немовби відтягує цю зустріч і хоче залишитися на іншому кінці «кольору» — тільки в любові.\n	(55-57) «Чуєш, брате мій...» — про смерть на чужині. Співає, як поминальну молитву. Голос злегка тремтить. У кожній інтонації — прощання. І це, скажете, не передчуття янгола, якому невдовзі доведеться... «повернутися»?\n	(58-59) 1998-го вона й розтанула свічкою на «рідній чужині» — від невиліковної хвороби.\n	(60-67) ...Ще вона фантастично записала за дев’ять років до смерті «Я піду в далекі гори». І саме в американської українки виявилося найбагатше змістове й емоційне аранжування. Так виходить... коли «як уперше». Магнетичний тембр летить над Карпатами, а там — загублений Іван із «Тіней забутих предків» усе шукає і шукає свою Марічку. Вслухайтеся — пригадаєте фільм... До речі, хто знав, що вже інший янгол зовсім в інший час пролетить над Карпатами і торкнеться крилом тоді ще ще маловідомого режисера, і в результаті народиться «кіномелодія» на всі часи. І ніхто ніколи переспівати її не зможе.\n	(68-71) Саму Квітку дехто намагався «переспівати». Тільки без усіляких реклам поціновувач якщо шукає, то знаходить не удаваних, а справжню. Ніякі продюсери не «прорахували» б подібну Квітку, яка співає. Співає за океаном, а українську душу відчуває глибше, ніж ті, що з нашого «асфальту».\n	(72-73) Як і раніше, вона існує не «всупереч», а просто окремо. Хто почує — той молодець. У її голосі — туга за надіями марними, гарними, такими — як у «раю».\n\n	За О. Вергелісом, газета «Дзеркало тижня»';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.0","103.0","104.0","105.0","106.5","108.0","109.5","111.5","113.0","115.0","116.5","118.5","120.0","121.5","123.5","125.0","126.5","128.0","129.5","130.5","132.0","133.5","134.5","136.0","137.0","138.5","139.5","141.0","142.0","143.0","144.5","145.5","146.5","147.5","148.5","150.0","151.0","152.0","153.0","154.0","155.0","156.0","157.0","158.0","159.0","156.5","161.0","162.0","162.5","163.5","164.5","165.5","166.5","167.5","168.0","169.0","170.0","171.0","172.0","173.0","173.5","174.5","175.5","176.5","177.5","178.0","179.0","180.0","181.0","182.0","183.0","184.0","185.0","186.0","187.0","188.0","189.0","190.0","191.0","192.0","193.0","194.0","194.5","195.5","196.5","197.0","197.5","198.0","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","c","b","b","a","c","d","e","b","d","c","a","b","c","a","c","b","a","e","e","c","c","c","beda","dcba","ecda","cabd","cbde","a","a","c","c","d","d","a","b","b","b","e","c","e","b","d","d","e","b","c","c","b","b","e","b","b","a","c","d","deca","dabe","dcea","bade"," ");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",Kvitka,Kvitka,Kvitka,Kvitka,Kvitka,Kvitka,Kvitka,Kvitka,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2010 Украинский язык и литература. Основной тест. I сессия*/
	if(testName=="ЗНО-2010 Украинский язык и литература. Основной тест. I сессия")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2010main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var vanGog='Мистецтво, не підвладне часу\n\n   (1–11) На серйозних аукціонах подекуди виникають підозри щодо справжності картин видатних художників. Не обійшла ця доля й полотна великого Вінсента ван Гога: якось переконували, що виставлена на продаж картина «Сад в Овері» – підробка. Доводили, що неможливо за короткий час зробити таку систему крапок, натякали на стилістичну невідповідність. Але ретельні рентгенівські дослідження засвідчили, що всі роботи митця написані зі «швидкістю виконання й без вагань», «на одному подихові». І картину купили за рекордну суму. Для «Саду в Овері» характерна унікальна техніка пуантилізму, сутність якої полягає в нанесенні на полотно окремих дрібних крапок чистого кольору. Якщо розглядати таку картину з відстані, ці крапки змішуються, і кольорове відчуття виявляється іншим, аніж коли фарби були б змішані на самому полотні. \n   (12–17) Він був найбіднішим за життя, а став найдорожчим сьогодні художником. Чи сподівався будь-коли ван Гог, що досягне такого успіху, що його роботи купуватимуть? Вінсент запевняв: «Роль, яку я відігравав чи відіграватиму, завжди залишиться другорядною». Він щиро вирішив творити мистецтво заради мистецтва. Без жодних меркантильних інтересів… Зрештою, він і не міг ними керуватися – так відкрито він бачив природу. \n   (18–32) 1885 року, після виснажливих тренувань і праці в багатьох техніках живопису, Вінсент виставляє на продаж одну з картин. Вона, за його словами, була настільки вдалою, що він «не зміг її продати», – художник просто подарував полотно. Ван Гог, свідомо присвятивши своє життя живопису, у який був несамовито закоханим, працює не в порожнечу: «Я знаю, що я хочу вкласти у вої картини, і намагатимусь цього досягти навіть ціною життя, тому що мене надихає абсолютна віра в мистецтво». І живописець самовдосконалюється, розвиває в собі енергію й думку. Він знає, що відчуває красу, сутність речей, і йде вузькою, але усвідомленою стежкою, аби постійно розвивати те відчуття, розкриватися всесвітові якомога більше. Вінсент відтворює своє бачення світу для того, аби зробити його чистішим, наблизити до первісного стану. 1882 року ван Гог пише: «Я хочу робити такі картини, які зворушать багатьох людей. А для цього треба писати не покладаючи рук, без зупинок, без сподівань на земні блага, без жалю до себе». Так, він ставився до всього пристрасно, проте йому була притаманна жорстка творча самодисципліна. \n   (33–38) З дитинства ван Гог прагнув іншого, по-справжньому духовного життя, ішов своїм, загадковим шляхом. Надмірна серйозність і нелюдимість хлопця вкупі із захопленням природою та вибухами пристрасної ніжності до близьких – свідчення його пошуків досконалого світу у світі недосконалому. Дитина й дорослий митець були єдиною енергетичною істотою, яка прийшла до нашого світу \n   (39–45) Вінсент створював полотно легко. Він справді набив руку старанними, наполегливими й самозреченими вправами. Очевидці розповідають, що митець писав постійно й безперервно. Ван Гог просто завалював майстерню полотнами, був машиною (як сам себе називав) з виробництва картин… І всюди Вінсент не зраджує свого бачення – сміливо й вільно зафарбовує полотно, виплескуючи на нього енергію й відображаючи суть речей, їхні енергетичні форми. Найбільше в мистецтві художник цінує реалізм.\n \nНепідробний. \n\n(46–53) Ван Гог відсторонювався від власних творів. Він давав їм жити самостійним життям. Немає часу та й просто нерозумно зосереджуватися на матеріальних речах. Увагу треба приділяти природі, якій Вінсент віддається цілком, особливо під час роботи над картиною. Живопис. Живо писати. Вінсент же пише яро – сама бачена ним природа малює його рукою, відтворюючи саму себе на полотні (не дивно, що його картини випромінюють не лише три виміри, а й інші, загадкові й неприйнятні для звичайної людини). Може, ще й тому Вінсент за дев’ять років написав понад 800 полотен – рекордна для такого відтинку часу кількість. \n(54–60) Цікава історія творів митця. Він залишав безліч полотен у всіх кутках Голландії, Бельгії, Франції – скрізь, де працював. Забував, не встигав забрати, не міг забрати… І тоді з його полотнами творилися дивні речі: їх спалювали, не вбачаючи в них жодної цінності, картини тачками возили халамидники, розпродуючи їх по десять центів за штуку, з них обдирали фарбу й повторно писали на них, полотна використовували як циновки, мішені, ними прикрашали горища й затуляли дірки курників. \n(61–64) Чому Вінсента ван Гога не визнали за життя і ще довго не визнавали після смерті? Тому що він, як і інші великі люди, як і інші самобутні постімпресіоністи, випередив час! Енергетика ван Гога просто шалена. Люди ж не володіли тоді тим рівнем енергетичної вібрації, аби сприймати її, а тим більше – цінувати. \n(65) Зараз вони її цінують. \n\nЗа В. Терещенком, журнал «Політика і культура» ';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.0","101.5","102.0","102.5","103.5","104.5","105.5","106.5","107.5","109.0","110.5","111.5","113.0","115.0","116.5","118.0","119.5","121.0","122.5","124.0","125.5","126.5","128.0","129.0","130.5","131.5","132.5","134.0","135.0","136.0","137.0","138.0","139.0","140.0","141.5","142.5","143.5","144.5","145.5","146.0","147.0","148.0","149.0","150.0","151.0","152.0","152.5","153.5","154.5","155.0","156.0","157.0","158.0","158.5","159.5","160.0","161.0","162.0","163.0","163.5","164.5","165.5","166.0","167.0","167.5","168.5","169.5","170.5","171.0","172.0","173.0","174.0","174.5","175.5","176.5","177.5","178.5","179.5","180.5","182.0","183.0","184.0","185.0","186.5","187.5","189.0","190.0","191.0","192.5","193.5","194.5","196.0","197.0","197.5","198.5","199.0","199.5","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","b","a","a","c","d","c","b","a","c","b","e","b","d","d","a","e","d","c","b","b","b","b","bdae","aedc","eadb","dabc","aceb","d","c","c","a","c","b","c","d","c","d","e","b","d","e","d","c","e","b","e","d","d","e","a","e","e","d","b","d","edab","dabc","edac","bdec"," ");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",vanGog,vanGog,vanGog,vanGog,vanGog,vanGog,vanGog,vanGog,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}	
	}
/*ЗНО-2010 Украинский язык и литература. Основной тест. II сессия*/
	if(testName=="ЗНО-2010 Украинский язык и литература. Основной тест. II сессия")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2010main2\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var iSoshenko='«Мій іскрений друже» \n\n(Життєва доля Івана Сошенка) \n\n   (1–5) У примарному сяйві білої ночі юнак змальовує грецьку статую. До нього підходить студент Академії мистецтв… Що було далі – відомо кожному зі шкільних хрестоматій, де за джерело інформації – повість Тараса Шевченка «Художник». Опоетизована, як це й буває з художніми творами, версія справжнього життєвого факту. \n   (6–15) А насправді до майбутнього благодійника Шевченка привели земляки, і він нахилився поцілувати руку, і Сошенко сказав, що жодна людина не повинна так принижуватися. У свій 21 рік Шевченко навіть не здогадувався, що в ньому гряде геній – він дивився на світ із прірви зацькованості. Вдумуючись у цей епізод, сповна осягаєш справедливість слів одного з Кобзаревих біографів Олександра Кониського: «Не можна вгадати, що б сталося з генієм нашого народу, коли б він не спізнався із Сошенком. Чи поталанила б йому доля яким іншим робом вибитися з темного льоху неволі та вийти в люди, чи може б, під густою корою Ширяєвських красок зав’яли б і засохли ті величезні дари духовні, якими природа наділила Тараса». \n   (16–19) Сошенко не лише організував викуп обдарованого юнака – він дав поштовх туго стиснутій пружині потенційних можливостей, що зробили Тараса Шевченка не простим художником і поетом, а силою, яка об’єднала український народ, не давши йому піти в небуття. \n   (20–27) З прірви приниженості не можна вихопитися без того, щоб не запаморочилася голова. Після викупу з кріпацтва Тарас зовсім змінився. Він часто їздив на вечори, витрачав чимало грошей на гарне вбрання – на деякий час у нього вселився «світський біс». Немає Пророка без Предтечі, який готує йому путі насамперед до самого себе, своєї місії. Чи здолав би Шевченко спокусу стати модною цяцькою аристократичних салонів, коли б не мав поряд людини, котра йому казала: «Тарасе, схаменися! Чого ти діла не робиш? Чого тебе нечистая носить по тих гостях?». \n   (28–35) Як же склалася доля того, до кого поет звертався в листах «Мій іскрений друже»? Народився Сошенко в Богуславі, навчався в дяка, потім у майстра-самоука. Платити за уроки не було чим, тому Іван відробляв їх як міг. За розпис монастирського іконостаса дістав стільки грошей, що навіть трохи землі вдалося прикупити… Але в холерну зиму 1832 року без копійки в кишені (зібрані гроші віддав за викуп паспорта) Сошенко з обозами подався до Петербурга. Йому пощастило на добру душу: ровесник, панич із вигляду, насправді ж кріпак-кравець, не дав пропасти з голоду, допоміг улаштуватися в місті. \n   (36–42) Петербурзький період життя був найщасливішим. Бо коли через загострення сухот мусив повернутися до Батьківщини, доля ніби заповзялася покарати вдатного колись богомаза за прагнення до високого мистецтва. Якось, діставши замовлення на ікону, довго працював над нею, передаючи тонку гру світла, а єпископ віддав те переробити місцевому невігласові. Тяжко переживши образу, художник пообіцяв собі бідувати, але не догоджати смакам церковників, які й чути не хотіли про рафаелівських мадонн. \n   (43–49) 1846 року Іван Максимович став учителем малювання Немирівської гімназії. Однак патологічно жорстокий і цинічний директор заходився цькувати вчителя. Дістанеться, бува, Сошенко після уроків рідної домівки, аж тут посильний кличе його до начальства. І – тупцяй осінньою сльотою, бухикаючи від задавненої хвороби, щоб почути: – Ви, Іване Максимовичу, художник, у Петербургах навчалися, то вмієте добре стругати олівці. Приготуйте мені два… га-га! \n   (50–56) Сошенків колега, базграючи ікони, стільки грошей наскладав, що власну майстерню відкрив. А Іванові не давала «халтурити» та сама сила, що колись погнала його до столиці: даний Богом талант. Хоч уже й розумів, що через злидні не реалізує себе: «Одна надія – на труд, а де взяти роботи? Думка, що буде попереду, жахає мене, і руки опускаються… Коли б ви знали, яка втіха для серця і яке привілля, утікши від світу, жити для мистецтва». Але таке було для нього недосяжним. \n   (57–59) 1861 року по «естафеті добра» до Петербурга було відправлено найталановитішого Сошенкового учня – Володимира Орловського, який згодом став професором Академії мистецтв. Вступити туди йому допоміг Шевченко. \n   (60–68) Картин Сошенко створив небагато, не всі вони дійшли до нас. Та ті, що експонуються, наводять на думку, що художник мав цілком самобутній талант, шукав свого шляху в мистецтві. Він знав, що міг би залишити по собі яскравіший слід, і тяжко карався, що «життя загублене». Останніми роками ходив київськими вулицями, підгодовуючи бездомних тварин… Згадаймо, що картина, за яку Шевченко дістав срібну медаль, називалася «Хлопчик-жебрак, що дає собаці хліб». Сошенко ставав грізним, коли при ньому візник жорстоко поводився з конем, нещадно соромив кожного, хто «жив не за совістю». В усьому іншому був лагідний і безмежно добрий. \n   (69–71) Життя минуло в трудах і злиднях. Останні канікули вирішив подарувати собі – помандрувати рідними місцями, подивитися на біле каміння берегів Росі. Не доїхав – 30 серпня 1876 року помер у Корсуні. \n   (72–76) Сяйво білої ночі вихопило з безвісті цю тиху постать. Благородна душа, приречена на поразку немилосердністю життя? Ні, вічний переможець! Доказ тому – наша історія, неможлива без Кобзаря, доказ тому – сам факт, що світ, попри всі його страждання, відступи й помилки, веде свій поступ, прагнучи добра й справедливості. \n\nЗа Н. Околітенко, журнал «Жінка»';
		gradeArray=new Array("100","100,5","100,5","100,5","100,5","100,5","100,5","100,5","100,5","101","101","101,5","102,5","103","104","105","106,5","107,5","109","110,5","112,5114","115.5","117.5","119","120.5","122","123.5","125.5","127","128","129.5","131","132.5","133.5","135","136.5","137.5","139","140","141.5","142.5","143.5","145","146","147","148","149","150.5","151.5","152","153","154","155","156","157","158","159","159.5","160.5","161.5","162.5","163","164","165","165.5","166.5","167.5","168","169","170","170.5","171.5","172.5","173.5","174","175","176","177","178","179","180","180.5","181.5","183","184","185","186","187","188","189.5","190.5","191.5","192.5","193.5","194.5","195.5","196.5","197","197.5","198.5","199","199","199.5","200","200","200","200","200","200","200","200");
		answerArray=new Array("c","a","b","c","c","d","c","e","a","a","d","e","e","b","b","d","a","d","d","c","e","d","a","eabd","cdea","dabc","bead","cdba","b","b","c","d","a","b","b","d","b","c","c","a","d","b","e","b","e","a","b","c","e","c","e","d","b","d","e","c","edab","deab","ecab","becd"," ");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",iSoshenko,iSoshenko,iSoshenko,iSoshenko,iSoshenko,iSoshenko,iSoshenko,iSoshenko,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*ЗНО-2010 Украинский язык и литература. Основной тест. III сессия*/
	if(testName=="ЗНО-2010 Украинский язык и литература. Основной тест. III сессия")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2010main3\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var sParadzhanov='Сергій Параджанов\n\n   (1–3) Геній – поняття, що давно стало книжним. Кажемо так про людей, які зоріють у недосяжному часі та просторі. Довідуємося про них із легенд і підручників. Серед нас вони давно не живуть. \n   (4–15) Тим, хто знав режисера фільму «Тіні забутих предків» Сергія Параджанова, фантастично пощастило. Вони бачили живого генія. Це зрозуміло було з того, як усе від його слова сповнювалося краси та значення.Це зрозуміло було з тієї бентежної енергії, що неослабно променіла з нього. Це зрозуміло було настільки, що в жартівливих розмовах слово «геній» стало синонімом його імені та й сам він залюбки вдавався до цього титулу. Треба було знати Параджанова, щоб за цим нешукати марнославства чи несмаку. Він жив іншими стимулами, у його світі тон задавали дитяча великодушність та оповитий артистизмом гумор. Смак до жарту, «жертвою» якого ставав він сам, передавався його друзям. «У ці дні ми будемо насолоджуватися присутністю найгеніальнішого режисера всіх часів – Параджанова. Це я його жартома так називаю», – писав приятель. Авжеж, усі ми так жартували. Але добре знали, що в тих жартах – правда. \n   (16–20) Книжок у його хаті майже не було, а як щось з’являлося – на другий день комусь дарував. Здавалося, нічого не читав, а насправді все знав і давав непомильну, на рівні «абсолютного слуху» оцінку всім помітним явищам літератури та мистецтва. Часом допомагала інтуїція генія: досить було кинути оком, проглянути кілька сторінок – і суть схоплено. \n   (21–26) Він сприймав світ через красу. І мав дивовижну здатність надавати всьому краси: інтер’єрові, букетові квітів, святковому столу. Здавалося, не було чогось такого, чого він не міг зробити. І все – красиве. Де був Параджанов – там чинилося мистецьке дійство: море насолоди для друзів і гостей. Якби можна було прихованою камерою зняти його життя – це був би найфантастичніший витвір Параджанова. \n   (27–30) Так виходило, що він завжди дбав про інших, не залишаючи місця для віддяки. Був щедрим до самознищення – усім роздавав ідеї, задуми, мистецькі дрібнички. Дарувати – було йогощастям. Не меншим, ніж творити.Може, це його й тримало вжитті, коли не давали творити.Він усіх залишив заборгованими й винними. \n   (31–38) У боргу та провині перед ним залишилася й уся Україна. Вона, позбавлена самої себе, віддана на поталу тим, хто, виступаючи від її імені, нищив її, – не змогла його захистити. А він приріс до неї серцем і не втрачав надії повернутися, дістати дозвіл працювати на Київській кіностудії…І, може, трохи звеселило останні його місяці оте бодай часткове (але яке вагоме!) повернення в українське кіно – створення сценарію фільму Леоніда Осики «Етюди про Врубеля» та співавторство у фільмі світового визнання «Лебедине озеро. Зона», який за його сценарієм поставив Юрій Іллєнко, друг і добрий творчий суперник з часів «Тіней забутих предків». \n   (39–43) Та скількище він хотів зробити для України!Фільм «Київські фрески» мав стати феєричною картиною життя сучасного міста, за яким стоїть тисячолітня історія. Не став: зйомки заборонили. «Інтермецо» за шедевром його улюбленого Михайла Коцюбинського мало стати натхненною поемою про невмирущий дух українського народу. Але такий фільм не повинен був з’явитися. \n   (44–48) Любов до української культури й народного мистецтва, тонке їх розуміння, солідарний відгук на них породжували оригінальні задуми фільмів, які б мовою кіно інтерпретували світ нашої духовної спадщини, змагалися з його художнім генієм. Пам’ятаю поїздку до Марії Приймаченко – про неї Сергій також хотів робити фільм. Та не ті були часи… (49–58) Та, може, найбільше, що ми втратили, – нездійснений задум фільму «Марія». До Шевченка Параджанов звертався незмінно, хотів поставити біографічну картину «Дорога в безсмертя». А пізніше – неймовірна ідея: зробити кіноверсіюШевченкової «Марії». Таки неймовірна, бо як можна перекласти мовою кінокадрів річ, у якій майже немає зовнішнього руху, стосунків персонажів, а вся сила якої – у пристрасному внутрішньому монолозі, в етичній дії слова? Але саме це й було близьке Параджанову, і для нього не було нічого неможливого. Він уже мав у голові не лише сценарій, а й зоровий ряд, точне бачення майбутнього фільму. Це мав бути твір високої мистецької умовності, з імітацією українського вертепу, різдвяної містерії… \n   (59–66) Великий Довженко мучився нездарністю київського проспекту Перемоги, складав проекти його реконструкції та мріяв повернути Києву його неспотворену красу. Через кільканадцять років на томужпроспектіжитиме Сергій Параджанов і мучитиметься тим самим. Олександр Довженко посадив на Київській кіностудії сад, яким вона пишається.Що реального залишилося б від Довженка на цій студії, крім саду та меморіальних знаків, якби не прийшли люди, здатні причаститися його духом, які прагнули творити мистецтво його міри? Вони почали відроджувати кіно, і не їхня вина, що їх зупинилина півдорозі. \n   (67–72) Як тут не нагадати,що «Тіні забутих предків» – це було не просто свято українського мистецтва. Це було свято української душі, підтвердження того, що Україна може стати естетичною й духовною величиною у світі. Отже – величиною повною. І знаменно, що саме на прем’єрі фільму в кінотеатрі «Україна» вчинено публічний протест проти політичних арештів, перший у нашій повоєнній історії акт масової непокори. \n   (73–75) … Сьогодні в українському кіномистецтві все доводиться починати заново. Але є досвід і є уроки. І провідною зорею тепер світитиме поряд з образом Довженка образ Параджанова. \n\n    За І. Дзюбою ';
		gradeArray=new Array("100","100.5","100.5","100.5","100.5","100.5","100.5","101","101.5","102","102.5","103","104","104.5","105.5","107","108","109.5","111","112","113.5","115","116.5","117.5","119","120.5","122","123","124.5","126","127","128","129.5","130.5","132","133","134","135.5","136.5","137.5","138.5","139.5","140.5","142","143","144","145","146","147","148","149","149.5","150.5","151.5","152.5","153.5","154.5","155","156","157","158","158.5","159.5","160.5","161","162","163","164","164.5","165.5","166","167","168","168.5","169.5","170.5","171.5","172.5","173","174","175","176","177","178","179","180","181","182","183","184","185.5","186.5","187.5","189","190","191.5","192.5","193.5","194.5","195.5","197","197.5","198","199","199","199.5","200","200","200","200","200","200");
		answerArray=new Array("c","d","a","b","a","c","b","c","c","c","e","b","b","a","e","b","d","c","d","d","e","b","a","cabd","acdb","adec","eadc","dcba","c","c","c","d","a","b","c","d","c","e","c","a","c","b","b","e","b","c","d","c","e","e","d","d","d","c","e","b","eadb","dcea","edac","ecab","");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",sParadzhanov,sParadzhanov,sParadzhanov,sParadzhanov,sParadzhanov,sParadzhanov,sParadzhanov,sParadzhanov,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*ЗНО-2011 Украинский язык и литература. Пробный тест.*/
	if(testName=="ЗНО 2011. Украинский язык и литература. Пробный тест")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2011demo\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var Galileo='Галілео Галілей\n\n(1–4) Галілей народився в італійському місті Пізі 1564 року. Батько майбутнього астронома, Вінченцо Галілей, з бідних дворян, був учителем музики, композитором, знав математику й інші науки. На життя Вінченцо Галілей заробляв уроками музики, але в країні, де вчителів музики було більше, ніж чоботарів, це давало небагато. А сім’я зростала.\n\n(5–7) Галілео був найстаршим сином у сім’ї. Батько примушував хлопця грати на скрипці, розучувати свої композиції, щоб син міг продовжити справу його життя. Але викладача музики з Галілео не вийшло, хоча він і став великим її знавцем. \n\n (8–9) Вінченцо, прагнувши знайти вихід із тяжкого становища, віддав хлопчика на виховання до монастиря, де його схиляли прийняти чернецтво. Галілео збунтувався і втік. \n\n (10–11) Тоді батькові спало на думку зробити з сина лікаря. Сімнадцятирічний Галілео стаєстудентом Пізанського університету. \n\n (12–16) Цікаво, що до цього часу юному Галілею зовсім не доводилося вивчати математику, і він абсолютно не був у ній обізнаний. А в університеті майбутнім лікарям серед інших навчальних предметів викладали й математику. Нова, досі незнайома йому наука зацікавила юнака, і батько, бачачи захоплення сина, порадив йому познайомитися з творами великих математиків давнини Евкліда і Архімеда. \n\n (17–18) Сталося те, чого зовсім не чекав старий Вінченцо: математика цілком захопила Галілео, він покинув вивчати медицину й заглибився в нову для нього галузь науки. \n\n (19–20) У молодого Галілея виявилися незвичайні математичні здібності, праці з математики він читав, як цікаві романи.  \n\n (21–28) Галілей покинув Пізу й перебрався до Флоренції, де за кілька років до нього оселилася його сім’я. Батько дуже лютував через те, що Галілео покинув медицину, яка обіцяла йому гарний заробіток. Але математика, особливо геометрія з її послідовністю аксіом і теорем, де все незаперечно витікало одне з другого, зачарувала Галілея. У 19 років він розробляє закони коливання маятника, а в 22 роки стає одним з найвідоміших учених Італії. І це всього за 7 років від часу, коли він уперше познайомився з математикою! У 25 років Галілео Галілей, медик- недоучка, людина, яка не мала вченого ступеня, очолює кафедру математики в Пізанському університеті. Згодом він – професор математики в Падуї. \n\n (29–31) За цей час молодий науковець зробив низку великих відкриттів у галузі механіки,  фізики, математики, астрономії, хоча не публікував їх, бо вони заперечували вчення Аристотеля про будову Землі.  \n\n (32–39) Захоплення Галілея астрономією почалося, коли він 1609 року дізнався, що в Голландії з’явився «прилад-дальновидець» – телескоп. Як цей прилад сконструйований, він не знав, тому сам узявся за його створення. Зробивши телескоп, Галілей першим спрямував його до зірок, саме тому Галілея називають Колумбом неба. Галілео Галілей споглядав Місяць, Юпітер, бачив чотири його супутники, він першим відкрив плями на Сонці, довів, що воно обертається навколо своєї осі. І Земля також, виявляється, обертається навколо своєї осі і навколо Сонця! Ось тоді й з’явилась книга «Зоряний вісник», де вчений розповів про свої дослідження, продовжуючи вчення Ніколая Коперника та Джордано Бруно. \n\n (40–45) Проте наукові знахідки Галілео Галілея суперечили загальноприйнятому вченню про будову Землі і Всесвіту, тому незабаром він був схоплений інквізицією. Тюрма, допити, погрози, тортури… Під страхом жахливої смерті 70-літнього Галілео Галілея змусили зректися своїх наукових поглядів, визнати, що Земля – твердь і не обертається навколо Сонця. Хворий, змучений старець не витримав тортур. Але, кажуть, прочитавши текст свого зречення, Галілей тупнув ногою й вигукнув: «І все ж вона обертається!» \n\n (46–47) Помер Галілео Галілей 1642 року і в останні роки перед смертю встиг багато зробити для науки (З журналу). ';
		gradeArray=new Array("100","100.5","100.5","100.5","100.5","100.5","100.5","101","101.5","102","102.5","103","104","104.5","105.5","107","108","109.5","111","112","113.5","115","116.5","117.5","119","120.5","122","123","124.5","126","127","128","129.5","130.5","132","133","134","135.5","136.5","137.5","138.5","139.5","140.5","142","143","144","145","146","147","148","149","149.5","150.5","151.5","152.5","153.5","154.5","155","156","157","158","158.5","159.5","160.5","161","162","163","164","164.5","165.5","166","167","168","168.5","169.5","170.5","171.5","172.5","173","174","175","176","177","178","179","180","181","182","183","184","185.5","186.5","187.5","189","190","191.5","192.5","193.5","194.5","195.5","197","197.5","198","199","199","199.5","200","200","200","200","200","200");
		answerArray=new Array("c","d","a","a","b","a","c","b","e","a","b","b","e","c","c","c","e","d","d","d","e","d","b","ceab","bacd","bdae","cdbe","dace","c","b","c","d","d","c","b","b","c","d","e","b","b","e","e","d","a","e","e","c","b","e","c","a","c","e","d","c","cadb","ceab","deba","deab","");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",Galileo,Galileo,Galileo,Galileo,Galileo,Galileo,Galileo,Galileo,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	
/*ЗНО-2011 Украинский язык и литература. Основной тест. I сессия*/
	if(testName=="ЗНО-2011 Украинский язык и литература. Основной тест. I сессия")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2011main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var KievPotop='Містика київських потопів\n\n\n\n (1–3) Чи хтось бачив, щоб над Києвом летів великий білий птах? Ні? Правда,небагато киян упізнали б лебедя. Більшості на небо ніколи й глянути. А я з дитинствапам’ятаю, як схвильовано видивлялися навесні білого лебедя старші сусідки.\n\n(4–6) Зараз мало хто в Києві знає, як це стосується можливого потопу. Звісно, прикмети тепер не завжди працюють, зважаючи на екологію та «вдосконалення» природи. Лише Господь достеменно знає, як воно буде кожного разу насправді.\n\n (7–16) А бувало по-всякому. Пам’ять поколінь донесла цікаві оповідки про те, які чому заливало Київ; що віщувало шкоду від стихії та які містичні сили «відповідали»за провіщення чи відвернення лиха. У дитинстві я чула від мешканців київського Подолу все нові версії витівок Видибая – так називали Перуна, якого вкинули вДніпро, коли хрестили киян. Що характерно, кияни зробили з нього не мстивого грізного діда, а віщуна, який міг допомогти. Скільки хлопчаків щоліта пірнало врайоні Видубицького монастиря, скільки дітлахів нишпорило «печерами» в горіпоруч, сподіваючись знайти золоті та срібні Перунові стріли! Навіть розповідали, що десь на горі жила ворожка, яка мала одну стрілу й використовувала її у своєму ремеслі. Однак усе ж не Видибай став провісником потопів.\n\n (17–24) Героїнею відповідних віщувань була Либідь, сестра засновників Києва. Саме вона, перевтілена в білого птаха, попереджала про небезпеку від води.За старокиївськими переказами, Либідь, явившись як птах, що голосить, могла попередити праведну душу навіть тоді, коли хтось замірявся закладати будинок на підземних плавунах. А таких територій над річкою Либідь і в інших київських закутках було чимало. Бідних киян – мешканців Либідських мочар – описав ІванНечуй-Левицький у «Київських прохачах»: раніше на тамтешніх непевних ґрунтах тільки бідняки та прохачі й селилися.\n\n (25–28) Однак найбільше з тривогою та надією виглядали Либідь навесні,очікуючи водопілля. Деякі киянки навіть намагалися задобрити її, залишаючи гостинці в дуплах столітніх верб над водою. Душа княжни могла попередити і пробіду, і про життєдайну воду.\n\n (29–34) А починалося все так: за переказом, сестра засновників Києва Либідь була жрицею богині водної стихії Дани. Письменниця Наталена Королева у своїх «Легендах старокиївських» згадує про це, однак наділяє долю князівни напруженим, фатальним драматизмом. Старі ж кияни були переконані, що жила князівна Либідь довго та щасливо, сповна виконала свою місію жриці, а по смерті залишилася берегинею-заступницею киян.\n\n(35–47) Цікаво, що певний час заступатися доводилося через дрібниці: хтось джерельце необачно замутив чи на річці насмітив. Але на початку смутних часів князівських незгод один із нащадків Ярославичів піддався на вмовляння купців трохи поглибити й розширити річку Почайну, щоб зручніше було підпливати важким суднам, переповненим крамом. Подейкується в переказі, що зробив він тоза «мзду купецьку велику», бо хотів поставити собі новий терем. Пролетіла начебто тоді Либідь із жалібно-гнівним криком, і хазяйновиті кияни занепокоїлися, стали грудьми проти купців-зачинщиків і князя. І що ж: робіт з «удосконалення» Почайнине докінчили – відмовилися від «грішного діла». Судна тих купців потрощила буряна Дніпрі, яка невідомо звідки взялася серед погожого дня, а наступної весни сталося лихо на воді з кимось із князевих родичів. Сам же він залишився на весь вік зганьбленим і безталанним, бо обурені кияни прийшли з вилами під новий терем,що не пішов йому на користь…\n\n (48–53) «Екологічний урок» був засвоєний і замолений, тривалий час кияни не потерпали від води. Були навали й пожежі, але нікому й на думку не спадало змагатисяз природою, самовпевнено її гнуздати. Аж поки, крім варварського «зняття скальпу»із Замкової гори за наказом Петра І, щоб знищити саму згадку про княжу столицю, крім абсурдної, з огляду на особливості рельєфу, перебудови київських укріплень, – було задумано і масштабний, як на XVIII століття, проект «підкорення річки».\n\n(54–62) Коли 1712 року задля зручнішого проходження барок почали перекопувати Почайнинську косу, що захищала Поділ від великої води, старі кияни – від князівських нащадків до майстрових подолян – обурилися, протестували й чекали клекоту Либеді. Але яке було діло до старосвітських «малоруських пліток» і «забобонних протестів» тодішній київській колоніальній адміністрації! Можливо, також «купці» переконали… Що сталося потім – відомо: перерізану косу Дніпро згодом розмив, від Почайни залишилося кілька озер, і відтоді Поділ стало періодично заливати з чималими збитками, смертельними хворобами від розмитих старих комунікацій, куди потрапляли води з-під цвинтарів, і розмоканням від цієї «мертвої» води осель. \n\n (63–67) Як казали старі кияни, то кара й за наші гріхи, що не вберегли угіддя Либеді та свій предківський спадок від сваволі. Такі розмови я чула перед потопом 1970 року, коли залило значну частину Подолу, а вода в підвалах стояла подекуди років два. Бачити Либідь над Києвом не доводилося, однак сусідські родини про це розповідали. \n\n(68–75) Останній (1979 року) потоп у Києві я зустріла вже школяркою. Із групою художньої школи виїздила в Гідропарк на етюди і якось побачила великого птаха на малюнку іншої дівчинки – киянки в першому поколінні, котра не знала про віщунку Либідь. На запитання, що це за птах, колежанка відповіла, що бачила лебедя в небі, тож і відтворила сумлінно на папері. Наступним запитанням стало, чи птах кричав, на що була заперечна відповідь. Розповідь викладачки про птаха й можливе витлумачення його появи було сприйнято як гарну казку, однак незабаром пів-Гідропарку залило. \n\n (76–82) За старокиївським переказом, Либідь, яка мовчки пролітає над якоюсь київською місциною,— це вістка про півбіди, на відміну від гіршої ситуації, коли птах голосить. Якщо ж з’являється білим птахом у веселці – це провісник лагідної весни, коли вода до людей добра. Тоді кияни поспішали, поки веселка не погасне, набрати водиці з живого джерела: вона, осінена крилом Либеді, вважалася помічною багато в чому: проти хвороб; для дівчат, які нею вмивалися «на красу»; для «відливання» лиха від хати. \n\n (83–84) Дай, Боже, бачити тільки добрі знаки над нашими домівками, але для цього треба і не робити лиха самим, і не допускати його від інших. \n\n За Ольгою Недавньою, газета «Дзеркало тижня», 897 слів';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.0","101.5","102.5","103.0","104.0","105.5","106.5","107.5","109.0","110.5","112.0","113.5","115.0","116.5","118.0","120.0","121.5","123.0","124.5","126.0","127.5","128.5","130.0","131.5","132.5","134.0","135.0","136.5","138.0","139.0","140.5","141.5","143.0","144.0","145.5","146.5","148.0","149.0","150.0","151.0","152.5","153.5","154.5","155.5","156.5","157.5","158.5","159.5","160.5","161.5","162.5","163.5","164.0","165.0","166.0","167.0","168.0","168.5","169.5","170.5","171.5","172.0","173.0","174.0","175.0","176.0","177.0","177.5","178.5","179.5","180.0","181.0","182.0","183.0","184.0","185.0","186.0","187.0","187.5","188.5","189.5","190.5","191.5","192.5","193.5","194.0","195.0","196.0","196.5","197.0","197.5","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","d","b","c","c","d","d","c","a","d","a","c","a","d","a","a","e","e","b","b","c","b","b","dbec","bdac","bcda","eadb","dbea","c","a","b","c","a","a","d","d","b","a","d","e","a","b","c","d","b","d","b","b","e","b","e","d","b","c","e","c","badc","badc","abcd","badc","");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",KievPotop,KievPotop,KievPotop,KievPotop,KievPotop,KievPotop,KievPotop,KievPotop,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	

/*ЗНО-2011 Украинский язык и литература. Основной тест. II сессия*/
	if(testName=="ЗНО-2011 Украинский язык и литература. Основной тест. II сессия")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2011main2\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var Samous='Шлях до національного самоусвідомлення\n\n\n\n(1–4) Квітник життя людства на Землі складається з багатьох націй, народів, країн. Серед них немає гірших чи кращих, добрих чи злих, потворних чи вродливих. Кожна нація – це велика особистість, що несе в зернині своєї душі скарб великої любові, краси, добра, справедливості, гармонії. \n\n(5–9) Кожна сучасна нація – це також і продукт історії, це потік, у який влилися свого часу інші великі чи малі нації й народи. Тому якщо первісні нації можна розглядати як ноти у своєму звучанні, то сучасні нації – це складні поліфонічні акорди. Або якщо первісні нації розглядати як чисті кольори спектру, райдужні кольори, то сучасні нації – це складні багатокольорові малюнки. \n\n(10–13) Якими різними є люди, котрі приходять на Землю зі своїми завданнями й утілюють ці завдання настільки, наскільки це виявляється для них можливим завдяки комплексу обставин, такими різними є народи, нації, і кожна з них має свою місію, провідну ідею буття на цій Землі. \n\n(14–19) Життя великих індивідуальностей – націй – підпорядковане законові ритму, відбувається відповідно до циклів. В історичному минулому нам відомі приклади, коли нації з’являлися та зникали, коли якась нація виявляла себе зі значною активністю, а потім віками жила тихо й непомітно… Є нації з великим історичним минулим, а є нації молоді, що проходять через етап становлення як цілісна людська спільнота. \n\n(20–35) Етноісторичне коріння українського народу безпосередньо пов’язане з географічним положенням. Із прадавніх часів на землях сучасної України жили землероби. З геологічної точки зору, сучасна Україна розташована на одній з найстабільніших платформ світу й не була затоплена світовим океаном. За оцінками експертів, на території України розміщується понад 30 відсотків чорноземів світу. Українські ґрунти називають унікальним багатством загальнопланетарного значення. На цій землі завжди жили хлібороби, вони зрослися зі своєю ненькою-землею. Сучасні дослідження багатьох учених, які вивчають трипільську культуру, підтверджують спадкоємність культурних традицій, незважаючи на різноманітні міграційні процеси, що відбувалися протягом тисячоліть. Приходилита йшли далі племена завойовників і кочівників, але жителі цієї землі зберігали свої традиції та культуру. Їх називали різними іменами, проте етнічні ознаки залишалися незмінними. Не є випадковим, що вихідці з України за її межами (а таких сьогодні налічується близько 20 мільйонів осіб) селилися на територіях, найкраще придатних для хліборобства, – на Кубані, Алтаї, у Приамур’ї, на півдні Канади, півночі США, півночі Австралії, в Аргентині. \n\n(36–37) Саме у ХХ столітті почали з’являтися наукові докази існування прадавніх коренів української нації, і це визнано у світі. \n\n(38–43) Науковці називають українську мову однією з найдавніших і найдосконаліших мов світу. Польський учений-лінгвіст Михайло Красуський у праці «Прадавність української мови» (1880 рік) відзначив: «Тривалий час порівнюючи арійські мови, я переконався, що українська мова старша не тільки за всі слов’янські, включно з так званою старослов’янською, а й за санскритську, давньогрецьку, латинську й інші арійські». \n\n(44–50) За евфонічністю (милозвучністю) науковці ставлять нашу мову на одне з перших місць у світі. Так, 1934 року на Всесвітньому конкурсі мов, що проводився у Франції, серед найкрасивіших і найбагатших мов назвали французьку, перську й українську. Милозвучність української мови досягається уникненням збігу голосних і приголосних, чергуванням звуків. Як підкреслюють дослідники, особливі краса та музикальність української мови є одним з найяскравіших проявів панестетизму, всеохопної любові до краси, що пронизує духовне та матеріальне буття українців. \n\n(51–52) У сучасній українській культурі збереглися священні знаки-символи, історія виникнення яких сягає в глибину тисячоліть. \n\n(53–55) Тризуб, державний символ України, є одним із найархаїчніших і найпоширеніших сакральних знаків людської цивілізації. Із тризубом зображалися грецький Посейдон, римський Нептун, індійські Шива та Вішну, скіфський Тагимасад. \n\n(56–64) На території України знайдено наскельні малюнки із зображенням тризуба, датовані ІV–ІІІ тисячоліттями до нашої ери. Тризуб був відомий в Ольвії, Боспорському царстві, Урарту, Ірані, Індії, на Кавказі, його зображення використо- вували представники крито-мінойської культури (ІІІ–ІІ тисячоліття до нашої ери), гети (ІІІ–І тисячоліття до нашої ери), сармати, царські скіфи, руські князі. В Індії, у штаті Джаму і Кашмір, височить священна гора з трьома вершинами, яку індійці називають Трикута. У надрах гори заховане святилище богині Вайяну Деві – Великої Матері. Під охороною жерців, за трьома магічними каменями, знаходиться її велична бронзова фігура з тризубом у правій руці. \n\n(65–73) Філософські гіпотези трактують цей знак як символічне зображення ідеї. Є думка, що тризуб – це символ державної влади. За іншими версіями – символ влади над трьома світами – небесним, земним і підземним, або ж символ-ключ до розуміння алфавітів земної писемності. Найґрунтовнішими видаються гіпотези, що шукають витоки тризуба в триєдності світобудови. Навколишній світ побудований на взаємодії трьох елементів: три типи кварків (елементарних частинок) утворюють атоми та молекули, що є основою всіх фізичних тіл; три кольори – жовтий, червоний, синій, – взаємодіючи, утворюють спектр веселки, багатобарвність світу; три напрямки виміру – ширина, довжина, висота – характеризують об’єм і простір світобудови. \n\n(74–77) Гомер, описуючи у своїй «Іліаді» давніх жителів Північного Причорномор’я, дає їм характеристику «найсправедливіших серед людей». Конституція українського гетьмана Пилипа Орлика була неперевершеним правовим феноменом і однією з перших конституцій Європи. \n\n(78–79) Кожна нація у великому плетиві світової історії веде свій малюнок, свій візерунок, творячи спільну духовну й матеріальну реальність, загальну тканину життя. \n\n(80–83) Хочеться сказати разом з іншими: призначення України й українців – берегти Життя, утверджувати Істину, творити Добро, примножувати Красу. Місія України – бути джерелом духовної наснаги людства. У цьому її велич та її національна ідея. \n\nЗа Світланою Гавриленко, «Дайджест Всеукраїнської експертної мережі» 838 слів';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","104.5","106.0","107.5","109.0","110.5","112.0","114.0","115.5","117.0","119.0","120.5","122.5","124.0","125.5","127.0","128.5","129.5","131.0","132.5","133.5","135.0","136.0","137.5","138.5","140.0","141.0","142.0","143.0","144.5","145.5","146.5","147.5","148.5","149.0","150.0","151.0","152.0","152.5","153.5","154.5","155.0","156.0","156.5","157.5","158.5","159.0","160.0","160.5","161.5","162.0","163.0","163.5","164.0","165.0","165.5","166.5","167.0","168.0","168.5","169.0","170.0","170.5","171.5","172.0","173.0","174.0","174.5","175.5","176.0","177.0","178.0","179.0","180.0","180.5","181.5","182.5","183.5","184.5","186.0","187.0","188.0","189.5","190.5","191.5","192.5","194.0","195.0","196.0","197.0","197.5","198.5","199.0","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("b","d","d","b","a","d","c","d","b","a","a","b","e","a","a","d","b","b","a","c","c","e","a","baed","eadc","cbda","dbec","aceb","a","d","a","d","c","c","d","c","a","d","c","d","a","e","a","c","e","b","e","d","b","b","b","e","d","c","a","c","edbc","deba","daeb","caeb","");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",Samous,Samous,Samous,Samous,Samous,Samous,Samous,Samous,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}
/*ЗНО-2012 Украинский язык и литература. Пробный тест.*/
	if(testName=="ЗНО 2012. Украинский язык и литература. Пробный тест")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2012demo\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var Oberegy='	Наші обереги.\n\n(1-3) Повертаючись обличчям до духовної культури свого народу, ми наближаємося до забутих джерел, які живили його дух, оберігали чистоту душі, були добрими охоронцями в повсякденному житті.\n\n(4-7) Людина є маленькою часточкою космосу - внутрішня її частина підпорядкована вищим законам буття, гармонії Всесвіту. Проте, прийшовши на землю у своїй тілесній оболонці, вона відчувала безсилля перед природою та шукала захисту в ній.\n\n(8-10) Наші давні предки обожнювали природу й вірили, що весь світ сповнений добрими і злими духами. Намагаючись захиститися від зла, людина створила для себе цілу систему оберігів. Що ж таке оберіг?\n\n(11-14) Василь Скуратівський у книзі "Берегиня" зазначає: "Берегиня, обереги - наші давні й добрі символи. Їхнє генетичне коріння сягає глибини століть... Маючи такі прекрасні символи, народ зумів уберегти від забуття нашу пісню й думу, нашу історію й родовідну пам\'ять..."\n\n(15-18) За давніми уявленнями наших предків, світ складався з трьох частин: небесна частина з божествами, що жили на ній, світилами (сонцем, місяцем і  зорями); земна - з людиною і землею, на якій вона живе; підземна - з духами зла, смертю, хворобами та лихом і душами померлих родичів.\n\n(19-30) На зорі цивілізації, придумавши житло, людина уявляла його також у трьох вимірах: небесна частина - дах, середня частина - власне житло - і нижня, яка містилась у землі. Тобто саме житло було прообразом Усесвіту, і кожна його частина  мала символічне значення. Вікна - це очі хати, через які людина підтримувала зв\'язок  із небесним світлом, божествами. Поріг - це межа між зовнішнім і внутрішнім світом, а також межа між підземним світом - світом померлих - і світом живої людини. Піч - домашнє вогнище. А вогонь був священним, тому що він уважався доброю силою, що  йде від сонця. Через комин також здійснювався зв\'язок із небесним світом, тому що через комин, уважали наші предки, вилітає всяка нечисть із хати. Щоб захистити житло від зла, над вхідними дверима часто вирізували знаки-обереги: кола, розетки - символи сонця, хрести. Ці знаки наносили на сволок у хаті, а також на віконні рами.\n\n(31-43) Традиційна українська хата, на думку Василя Скуратівського, є цілком оригінальним витвором народу, самобутнім явищем в історії архітектури, високим зразком будівельних, мистецьких, етичних та естетичних конструкцій. Зводячи той чи інший тип житла, народні будівничі виробили цілу систему симетричних прийомів з використанням унікальних і пропорційних силуетів. Не випадково французький військовий інженер Гійом Лавассер де Боплан, мандруючи в XVII столітті по Дніпру, захоплювався високим мистецтвом народного зодчества. Інший іноземець - німецький географ Йоганн-Георг Коль, який 1838 року побував в Україні, відзначав у своїх нотатках: "Українці живуть в охайних, завше підтримуванних у чистоті хатах, які начебто усміхаються до тебе. Господині не задовольняються тим, що кожної суботи миють їх, як це роблять голландці, але ще й раз на два тижні білять житло. Від того хати в Україні виглядають вельми чепурно, немовби свіжовибілене полотно."\n\n(44-58) Оберегами в давнину слугували й рушники, на яких були вишиті магічні знаки. Уявлення наших предків про походження світу перейшли в художню мову орнаментів. Магічний знак - Дерево життя, який траплявся найчастіше на рушниках і відбивав уявлення наших пращурів про світ, також мав три частини: крона - це небо, стовбур - матеріальний світ, людина; коріння - підземний світ, вода, змії та все, що живе в землі. Над Деревом Життя (Світовим деревом) на вишивках зображалися зірки, що символізували зоряне небо. Чіткою лінією відмежовувався  від Дерева життя підземний світ, у якому все уявлялося у перевернутому вигляді (квіти голівками донизу). Це особливо відбилося на похоронних рушниках, де перевернуті вниз голівками квіти означали  перехід покійного в інший світ. Під мотивами Світового дерева завжди зображали зигзагоподібний орнамент чи меандр, що символізував хвилі первісного океану, з якого виросло це дерево. Меандри, як знаки водної стихії зображалися з метою завоювати прихильність цієї сили, непідвладної людині, і допомогти природним процесам (наприклад, викликати дощ).\n\n(59-62) Знаками-оберегами на рушнику були ромби, квадрати, трикутники, що символізували родючість. Чотири пори року, чотири тижні місяця, чотири фази людського життя (народження, юність, старість, смерть) виражалися в геометричному орнаменті накладенням одних квадратиків на інші.\n\n(63-72) Магічні знаки дістали відображення не лише в українській вишивці, а й в орнаменті писанки. Яйце - це також, за давніми уявленнями наших пращурів, символ Усесвіту. Історія писанки сягає в сиву давнину і пов\'язана з язичницьким культом уславлення вічного закону весняного пробудження всього живого на землі. Група орнаментів, найбільш поширених на писанках, - це знаки Всесвіту і сонця (солярні знаки). Знаки сонця на деяких писанках виглядають як розетки (Пряшівщина, Лемківщина), на інших - як зорі (Одещина); на подільських писанках вони реалістично представляють весняне сонце. Проте одним із найдавніших варіантів цього знака слід уважати "павучки", поширені на східному Поліссі, і "крутороги", характерні для всієї території України.\n\n(73-80) У писанкових орнаментах часто використовується зображення сосонки - трави, що найпершою з\'являється на піщаних грунтах і плететься, наче змійка. Ця деталь у писанкарстві пов\'язана з культом небесного змія, який, як уважали наші предки, запліднював усе живе на землі. Цей культ поступово зник після впровадження християнства. Натомість з\'явилися на писанках гілочки верби, маки, усяка рослинність, що оживає й починає буйно квітнути навесні. Ці магічні знаки та символи воскресіння природи були не випадковими. Вони уславлювали життєдайні сили - сонце і воду, від яких залежали життя і добробут наших предків.\n\n(81-83) Наші пращури міцно трималися духовних законів, вони перебували в гармонії з природою, космосом, у гармонії з навколишнім світом, тому людина була захищена від духовної руйнації.\n\n     За Лідією Вудвуд';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.0","101.5","102.5","103.0","104.0","105.5","106.5","107.5","109.0","110.5","112.0","113.5","115.0","116.5","118.0","120.0","121.5","123.0","124.5","126.0","127.5","128.5","130.0","131.5","132.5","134.0","135.0","136.5","138.0","139.0","140.5","141.5","143.0","144.0","145.5","146.5","148.0","149.0","150.0","151.0","152.5","153.5","154.5","155.5","156.5","157.5","158.5","159.5","160.5","161.5","162.5","163.5","164.0","165.0","166.0","167.0","168.0","168.5","169.5","170.5","171.5","172.0","173.0","174.0","175.0","176.0","177.0","177.5","178.5","179.5","180.0","181.0","182.0","183.0","184.0","185.0","186.0","187.0","187.5","188.5","189.5","190.5","191.5","192.5","193.5","194.0","195.0","196.0","196.5","197.0","197.5","198.5","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","c","b","a","c","b","a","c","d","d","a","d","a","c","b","d","e","e","a","c","a","c","c","dbca","bcad","bdea","bead","bcea","d","d","a","d","b","b","b","b","a","d","a","e","c","d","e","a","b","b","d","d","a","c","b","e","e","c","d","c","baec","ecba","badc","cabe","");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",Oberegy,Oberegy,Oberegy,Oberegy,Oberegy,Oberegy,Oberegy,Oberegy,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	
/*ЗНО-2012 Украинский язык и литература. Основной тест. I сессия*/
	if(testName=="ЗНО-2012 Украинский язык и литература. Основной тест. I сессия")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2012main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var Ekzuperi='Антуан де Сент-Екзюпері \n\n\n\n(1-8) Цей знаменитий поет-мислитель і пілот-винахідник став героїчною легендою Франції, коли на зміну героям приходили виконавці. Як живий, він усміхається до нас сердечною усмішкою в мільйонах книг, позбавлених спокусливого сюжету і все ж таки чи не найбільш читаних на всіх континентах. Він дивиться в Людину і шукає рідної душі, щоб навести на свою хвилю. «Я люблю пробуджувати в людині шляхетні почуття. Можливо, у мене покликання відкривати джерела». Джерела любові й самопожертви, обов\'язку й відповідальності... Бо «бути людиною - означає бути за все відповідальним». \n\n(9-16) Один з перших відкривачів повітряних просторів, Сент-Екзюпері зумів ніби з висоти поглянути на сучасний світ. Син віку техніки й сам людина науки, він був «страшенно невдоволений турботами своєї цивілізації», яка гарячково підносила над людиною систему матеріальних винаходів, забуваючи, що вони служитимуть лише опорою в пошуку духовних цінностей. Вічно тривожний і в щось заглиблений, він прозирав далеко крізь свою епоху, позначену наступом фашизму, який «накидав пріоритет одного народу над іншими народами, однієї думки над іншими думками». \n\n(17-19) Екзюпері поважав розум, але думав, що «розум набуває цінності лише тоді, коли служить любові». Він неухильно йшов до великих істин, упевнившись, що найголовнішого очима не побачиш: найглибше бачиш тільки серцем... \n\n(20-24) Кожен новий твір Екзюпері - це крок в опануванні нової смуги життя. Тридцяті роки принесуть йому багато відкриттів, бо це роки близького знайомства зі світом. Він їде до Індокитаю, об\'їздить Німеччину. Він довіряє лише власним очам: «Мені плювати на режим: найважливіше знати, який тип людини створюється тим ладом». \n\n(25-30) Насувалася катастрофа, не просто на нього - на Францію. І тут до нього приходять і стають над усім думи про кризу цивілізації - «спадок вірувань і знань, здобутих віками, не завжди виправданих логікою, але виправданих самих у собі, як шляхи, що кудись ведуть, бо вони відкривають людині її внутрішні простори». Усі надії письменник покладає на внутрішню силу французького Опору. \n\n(31-35) Екзюпері знав, що не можна жити вчорашнім днем, не прозираючи в завтра: «Минулого не переробити, але теперішнє лежить у безладді, як матеріал під ногами будівничого, і вам належить виковувати майбутнє». Крізь тимчасові, ще не розв\'язані війною проблеми він бачить найтривожнішу: «Повернути людям духовний зміст, духовні клопоти».\n\n(36-39) У години самотності, що нагадувала самотність пустелі, поринав на дно спогадів і на розгойданих хвилях уяви плекав «Маленького принца». Він повертався в дитинство - крізь десятки років, наповнених болем утрат і гіркотою дум, - і вже не знаходив у ньому безтурботної радісної усмішки. \n\n(40-46) Маленький принц дивиться на світ дорослих мудрими очима: він усе розуміє. У своїх міжпланетних мандрівках він натрапляє на ті самі феномени, які оселилися на Землі. Тільки він швидко проходить повз них зі смутною посмішкою, бо навіки прикутий душею до своєї маленької планети. Він уміє приручати, по-дитячому серйозно допитуватися. Але висміювати не вміє: він сприймає серцем. Він прийшов з планети, де треба щодня виполювати баобаби. Бо коли їх не розпізнати вчасно - потім не позбудешся. \n\n(47-52) Маленький принц розуміє більше за дорослих, бо вони дивляться на світ до всього звиклими очима, і кожен заклопотаний лише собою. Тоді як «добре бачиш тільки серцем». Він знає також, що люди на землі не знаходять того, чого шукають: «тим часом його можна було б знайти в єдиній троянді або в ковтку води». Цей сумний світ примарився людині, яка зрозуміла, що розгубила духовну спадщину й опинилася серед пустелі. \n\n(53-55) Тональність казки гармоніює з настроями Екзюпері тієї пори. Він жив одним прагненням - «брати участь»! «Мене почують тільки тоді, коли я й мої товариші будемо знову ризикувати життям за нашу справу». \n\n(56-58) Було щось символічне в тому, що востаннє летів він над країною дитинства й останнього листа написав до матері. 31 липня 1944 року з Корсики майор Екзюпері зробив свій дев\'ятий політ, з якого не повернувся. \n\n(59) До визволення Франції не дожив місяця. \n\n(60) Але він став її піснею. \n\nЗа Є. Сверстюком, 605 слів';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.5","105.0","106.0","107.5","109.5","111.0","113.0","115.0","116.5","118.5","120.5","122.0","124.0","125.5","127.0","128.5","130.0","131.5","133.0","134.5","136.0","137.0","138.5","140.0","141.0","142.5","143.5","145.0","146.0","147.0","148.0","149.0","150.5","151.5","152.5","153.5","154.0","155.0","156.0","157.0","158.0","158.5","159.5","160.0","161.0","162.0","162.5","163.5","164.0","165.0","165.5","166.5","167.0","168.0","168.5","169.0","170.0","170.5","171.5","172.5","173.0","174.0","174.5","175.5","176.0","177.0","177.5","178.5","179.0","180.0","181.0","181.5","182.5","183.5","184.5","185.0","186.0","187.0","188.0","189.0","190.0","191.0","192.0","193.0","194.0","195.5","196.5","197.0","198.0","198.5","199.0","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("a","d","a","d","b","b","a","a","a","c","e","d","b","b","c","a","a","d","a","b","c","a","e","cadb","deba","ceba","bace","bdac","c","d","d","b","c","b","b","d","d","d","a","a","a","e","c","d","b","c","b","e","d","c","b","b","c","e","a","e","adec","abed","bdce","adeb","");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",Ekzuperi,Ekzuperi,Ekzuperi,Ekzuperi,Ekzuperi,Ekzuperi,Ekzuperi,Ekzuperi,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}	
/*ЗНО-2012 Украинский язык и литература. Основной тест. II сессия*/
	if(testName=="ЗНО-2012 Украинский язык и литература. Основной тест. II сессия")
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2012main2\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="rus";
		var Pivni='Вже треті півні проспівали...\n\n\n\n(1-4)Кожен народ має свої звичаї, сфокусовані на етнічну специфіку. Але останнім часом відбулася відчутна девальвація - потужні країни з міцним корінням традицій «нав\'язали» нам свої обряди, котрі значною мірою відрізняються від наших.\n\n(5-8)Нині ледве не в усьому світі символи року позначаються китайською демонологією. Літолік символізують то «дерев\'яна мавпа», то «вогняний дракон», то «білий тигр». Натомість єдиний птах у цьому ряду - півень, один з найулюбленіших для українців пернатих.\n\n(9-15)Аби не бути голослівним, згадаймо наші національні традиції. Ще до впровадження християнства наші пращури віддавали цій птасі особливу шану. Якщо в інших народів (зокрема й сусідів-слов\'ян) приносили в жертву своїм богам велетенських тварин, а подекуди й людей, то наші дайбожичі на величні свята - лише півнів. Один з літописів засвідчив, що вої на чолі з київським князем Ігорем, пропливаючи на човнах повз Хортицю, зупинялися біля священного капища й залишали півня.\n\n(16—19)Півень як жертва виступає в казках, скажімо, у добре відомій оповіді про Котика й Півника: «Несе мене Лиска за темнії ліси, за синєє море, за крутії гори», - плаче-голосить Півник. У казках відобразилась ідея жертовності заради вічності життя, підтримання усталеного порядку.\n\n(20-25)Чим же заслужив таку шану пернатий? Наші пращури вірили, що півень слугує надійним оберегом у господарстві - «якщо його бракує, то обов\'язково заведеться сатана». У дохристиянських віруваннях уважалося, що когут народився з «мертвого» яйця, і тому він, обранець сонячного бога, щодосвіта викликає денне світло. Саме з цією метою люди вважали за обов\'язок тримати в господарстві цю провісну птаху.\n\n(26-34)Українці вірили, що чорні сили правують од півночі й до півнячого співу. Щойно зачується кукурікання - зникає всяка нечисть. Не випадково зберігся давній звичай: коли зводили нову оселю, то перед уходинами до світлиці запускали на ніч когута. Це символізувало, що досвітковий півнячий голос вижене з помешкання нечисту силу, а відтак родина убезпечиться від усіляких негараздів. Тому не дивно, що фронтони на дахах прикрашали різьбленими оберегами цієї птахи; їх вишивали й на рушниках, котрі вивішували над вхідними дверима, а почасти й на покуті, бо, як мовить народна приказка, «без півня і хата глуха».\n\n(35-39)Аж ніяк не всі знають, що чумаки, вирушаючи в Крим по сіль, обов\'язково брали з собою й когута. Він не лише вважався охоронцем од нечистої сили, а й був своєрідним будильником, - як птаха проспівала, мандрівники тут же знімали намети й вирушали в дорогу. До речі, у давніші часи, коли не вистачало годинників, досвіток визначали за півнячим кукуріканням.\n\n(40-44)Образ птахи трапляється і в дитячому фольклорі. Пам\'ятаєте віршик: «Два півники, два півники горох молотили...»? У казках півень виступає не тільки добрим господарем, але й ревним охоронцем свого чада від підступної лисиці. Не випадково найпопулярнішою іграшкою були півники-свистунці, що їх повсюди в Україні виліплювали з глини народні майстри.\n\n(45-51)Нарешті, півні вважаються своєрідними провісниками й синоптиками. Селяни знали: якщо когут часто кукурікає біля вікна, то це вірна прикмета, що хтось із домашніх помре; коли ж на порозі - прийдуть несподівані гості. На них варто чекати й тоді, коли домашній охоронець обійде довкіл хати та прокукурікає: у який бік спрямує дзьоба, звідтіля і з\'являться погостювальники. За таких випадків приказували: «Якщо дорогий гість, то нехай тобі буде золотий хвіст, а якщо буде поганий гість, то нехай одпаде і той хвіст».\n\n(52-56)Загалом, господарі намагались обзавестися домашнім охоронцем, щоб він мав доброчинне оперення, адже кольорова символіка багато важила в українській міфології. Щоби домашній охоронець приносив злагоду та добробут, господарі намагалися обзавестися півнем не будь-якого кольору, а певного оперення — переважно золотавого.\n\n(57-60)Будемо сподіватися, півник і далі приноситиме нам щастя, бо що досвіта голосисто оповіщатиме нас про народження світлого дня. Одна з народних загадок рече: «Двічі родився, ні разу не хрестився, а чорт його боїться». Так воно й буде!\n\nЗа В. Скуратівським, журнал «Берегиня»\n\n600 слів';
		gradeArray=new Array("100.0","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","100.5","101.0","101.5","102.5","103.0","104.5","105.5","107.0","108.5","110.5","112.0","114.0","115.5","117.5","119.5","121.0","122.5","124.5","126.0","127.5","129.0","130.5","131.5","133.0","134.5","135.5","137.0","138.5","139.5","140.5","142.0","143.0","144.0","145.0","146.0","147.0","148.0","149.0","150.0","151.0","152.0","152.5","153.5","154.5","155.5","156.0","157.0","158.0","158.5","159.5","160.0","161.0","161.5","162.5","163.0","164.0","164.5","165.5","166.0","167.0","167.5","168.0","169.0","170.0","170.5","171.5","172.0","173.0","173.5","174.5","175.5","176.5","177.0","178.0","179.0","180.0","181.0","182.0","183.0","184.0","185.0","186.0","187.5","188.5","189.5","191.0","192.0","193.0","194.5","195.5","196.5","197.5","198.0","199.0","199.0","199.5","200.0","200.0","200.0","200.0","200.0");
		answerArray=new Array("d","a","b","b","a","d","b","b","a","a","a","b","b","c","c","b","d","e","b","d","e","c","b","cead","bcae","edab","cabd","bace","c","a","c","a","b","d","a","d","a","c","a","c","b","a","b","e","d","c","d","a","b","e","d","e","e","b","c","d","aceb","edab","abce","abcd","");
		taskTypeArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","textanalysis","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		textAnalysisArray=new Array("test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","connect",Pivni,Pivni,Pivni,Pivni,Pivni,Pivni,Pivni,Pivni,"test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","test","connect","connect","connect","connect","tvir");
		taskMarkArray=new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,24);
		variantNumberArray=new Array(4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,0,0,0,0,0);
		for (var i=0; i<testLength; i++)
		{
			taskArray[i]=new task(testName,i+1,taskTypeArray[i],taskMarkArray[i],testDirectory,answerArray[i]);
		}
	}		
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		buildTestTable(testName,testDirectory);
		document.getElementById("ZnoGivenAnswers").innerHTML='Осталось заданий: <!-- Счетчик ответов --><span class="GivenAnswersView" name="GivenAnswers" id="GivenAnswers"></span>';
		taskLoader(taskArray[currentTaskCounter]);
		isTestingFlag=1;
		document.getElementById("ResumeTest").innerHTML='<input type="button" value="Подтвердить ответ" name="ResumeTestButton" id="ResumeTestButton" onClick="nextTask()" />';
		/*установка счетчика времени*/
		isTestingFlag=1;
		timing();
		
	 					
	
}
/*Функция которая убирает пробелы в строке*/
function removeBlank(inputString)
{
					var changePosition=0;
					/*Указатель на позицию символа до которого будет происходить замена*/
					var textInHtml=inputString;
					/*Убираем пробелы из строки*/
					while(changePosition>-1)		
					{	
						changePosition=textInHtml.indexOf(String.fromCharCode(32),changePosition);
						if(changePosition>=0)
						{
						 var firstSubstring=textInHtml.substring(0, changePosition);
						 var secondSubstring=textInHtml.substring(changePosition+1,textInHtml.length);
						 textInHtml=firstSubstring+secondSubstring;
						}
						
					}
					return textInHtml;
}
/*функция которая преобразует значения после ^ в кавычках в верхний индекс(степень), а значения в скобках { } в нижний индекс */
function toUpperLowerCase(inputString)
{
					var changePosition=0;
					/*Указатель на позицию символа до которого будет происходить замена*/
					var endPosition=0;
					var textInHtml=removeBlank(inputString);
					/*Ищем символы в нижнем регистре*/
					changePosition=0;
					while(changePosition>-1)		
					{	
						changePosition=textInHtml.indexOf(String.fromCharCode(8216),endPosition);
						if(changePosition>=0)
						{
						 endPosition=textInHtml.indexOf(String.fromCharCode(8217),changePosition);
						 var firstSubstring=textInHtml.substring(0, changePosition-1);
						 var secondSubstring=textInHtml.substring(changePosition+1, endPosition);
						 var thirdSubstring=textInHtml.substring(endPosition+1,textInHtml.length);
						 textInHtml=firstSubstring+"<sub><small>"+secondSubstring+"</small></sub>"+thirdSubstring;
						}
						
					}
					/*Ищем символы в верхнем регистре*/
					changePosition=0;
					endPosition=0;
					while(changePosition>-1)		
					{	
						changePosition=textInHtml.indexOf(String.fromCharCode(171),endPosition);
						if(changePosition>=0)
						{
						 endPosition=textInHtml.indexOf(String.fromCharCode(187),changePosition);
						 var firstSubstring=textInHtml.substring(0, changePosition-1);
						 var secondSubstring=textInHtml.substring(changePosition+1, endPosition);
						 var thirdSubstring=textInHtml.substring(endPosition+1,textInHtml.length);
						 textInHtml=firstSubstring+"<sup><small>"+secondSubstring+"</small></sup>"+thirdSubstring;
						}
						
					}
		return textInHtml;
}
/*Добавление символа в значения в поля A,B или C в зависимости от селектора placeSelect*/
function placeSymbol(symbol)
{
	var hidAns=document.getElementById("FreeAnswerText");
	var valueA=document.getElementById("fieldA");
	var valueB=document.getElementById("fieldB");
	var valueC=document.getElementById("fieldC");
	var dest=document.getElementById("placeSelect").value;
	var visAns=document.getElementById("ansDiv");
	if (dest=="a")
					 {
						valueA.value+=symbol;
						valueA.focus();
					 }
	if (dest=="b")
					 {
						valueB.value+=symbol; 
						valueB.focus();
					 }
	if (dest=="c")
					 {
						valueC.value+=symbol;
						valueC.focus();
					 }
	if (dest=="ans")
					 {
					 	hidAns.value+=symbol;
						visAns.innerHTML+=symbol;
					 }
	
}


/*добавление   альфа в строку*/
function addSymbol(symbol)
{
	var hidAns=document.getElementById("FreeAnswerText");
	var valueA=document.getElementById("fieldA");
	var valueB=document.getElementById("fieldB");
	var valueC=document.getElementById("fieldC");
	var dest=document.getElementById("placeSelect").value;
	var visAns=document.getElementById("ansDiv");
	switch (symbol)
	{
		case "alpha":
	                 placeSymbol(String.fromCharCode(945));
					 break;
		case "beta":
					 placeSymbol(String.fromCharCode(946));
					 break;
        case "gamma":
					 placeSymbol(String.fromCharCode(947));
					 break;
        case "pi":
					 placeSymbol(String.fromCharCode(960));
					 break;
		case "phi":
					 placeSymbol(String.fromCharCode(966));
					 break;
		case "infinity":
					 placeSymbol(String.fromCharCode(8734));
					 break;
		case "deg":
					 placeSymbol(String.fromCharCode(176));
					 break;
		case "leftSq":
					 placeSymbol(String.fromCharCode(91));
					 break;
		case "rightSq":
					 placeSymbol(String.fromCharCode(93));
					 break;
		case "leftRnd":
					 placeSymbol(String.fromCharCode(40));
					 break;
		case "rightRnd":
					 placeSymbol(String.fromCharCode(41));
					 break;
		case "plus":
					 placeSymbol(String.fromCharCode(43));
					 break;
		case "minus":
					 placeSymbol(String.fromCharCode(8722));
					 break;
		case "multiply":
					 placeSymbol(String.fromCharCode(215));
					 break;
		case "divide":
					 placeSymbol(String.fromCharCode(58));
					 break;
		case "emptyEnt":
					 placeSymbol(String.fromCharCode(216));
					 break;
		case "union":
					 placeSymbol(String.fromCharCode(8746));
					 break;
		case "intersection":
					 placeSymbol(String.fromCharCode(8745));
					 break;
		case "isIn":
					placeSymbol(String.fromCharCode(8712));
					 break;
		case "isEqual":
					placeSymbol(String.fromCharCode(61));
					 break;
		case "textA":
					hidAns.value+=removeBlank(valueA.value);
					visAns.innerHTML+=toUpperLowerCase(valueA.value);
					valueA.focus();
					break;
		case "textB":
					hidAns.value+=removeBlank(valueB.value);
					visAns.innerHTML+=toUpperLowerCase(valueB.value);
					valueB.focus();
					break;
		case "textC":
					hidAns.value+=removeBlank(valueC.value);
					visAns.innerHTML+=toUpperLowerCase(valueC.value);
					valueC.focus();
					break;
		case "powAB":
					if(valueA.value=="")
					{
						alert("Заполните поле А!");
						valueA.focus();
					}
					else{
						if(valueB.value=="")
						{
						alert("Заполните поле B!");
						valueB.focus();
						}
						else
						{						
						valueC.value+=String.fromCharCode(40)+valueA.value+String.fromCharCode(41)+String.fromCharCode(8593)+String.fromCharCode(171)+valueB.value+String.fromCharCode(187);
						valueC.focus();	

						}
					}
					break;
		case "powA":
					if(valueA.value=="")
					{
						alert("Заполните поле А!");
						valueA.focus();
					}
					else{
						valueC.value+=String.fromCharCode(8593)+String.fromCharCode(171)+valueA.value+String.fromCharCode(187);
						valueC.focus();
						}
					break;
		case "indexA":
					if(valueA.value=="")
					{
						alert("Заполните поле А!");
						valueA.focus();
					}
					else{
						valueC.value+=String.fromCharCode(8595)+String.fromCharCode(8216)+valueA.value+String.fromCharCode(8217);
						valueC.focus();
						}
					break;
		case "logAB":
					if(valueA.value=="")
					{
						alert("Заполните поле А!");
						valueA.focus();
					}
					else{
						if(valueB.value=="")
						{
						alert("Заполните поле B!");
						valueB.focus();
						}
						else
						{
							valueC.value+="log"+String.fromCharCode(8595)+String.fromCharCode(8216)+valueA.value+String.fromCharCode(8217)+"("+valueB.value+")";
							valueC.focus();
						}
					}
					break;
	    case "sqrt":
					if(valueA.value=="")
					{
						alert("Заполните поле А!");
						valueA.focus();
					}
					else{
						valueC.value+=String.fromCharCode(8730)+String.fromCharCode(40)+valueA.value+String.fromCharCode(41);
						valueC.focus();
						}			
					 break;
		default:
					placeSymbol(symbol);	
	}//switch
}

/*Построение ячеек */

//построение ячейки с вариантами ответов на тесты инициализируется значением testVariantNumber и языка списка "rus"/"eng"
function buildTest (languageOfList)
{
		var varNum;
		if(variantNumberArray==null)
		{
			varNum=testVariantNumber;
		}
		else
		{
			varNum=variantNumberArray[currentTaskCounter];
		}
		var tableConstructor='<td>';
		for(var i=0;i<varNum;i++)
		{
			if (languageOfList=="rus")
			{
			tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">'+String.fromCharCode(1040+i)+'<br/><input type="radio" id="Variant'+String.fromCharCode(65+i)+'" name="Variant" value="'+String.fromCharCode(97+i)+'"/></div>';
			/*tableConstructor+='<td class="ZnoVariantView" name="ZnoVariant'+String.fromCharCode(65+i)+'" id="ZnoVariant'+String.fromCharCode(65+i)+'" align="center">'+String.fromCharCode(1040+i)+'<br /><input type="radio" id="Variant'+String.fromCharCode(65+i)+'" name="Variant" value="'+String.fromCharCode(97+i)+'"/></td>';*/
			}
			else
			{
			tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">'+String.fromCharCode(65+i)+'<br/><input type="radio" id="Variant'+String.fromCharCode(65+i)+'" name="Variant" value="'+String.fromCharCode(97+i)+'"/></div>';
			/*tableConstructor+='<td class="ZnoVariantView" name="ZnoVariant'+String.fromCharCode(65+i)+'" id="ZnoVariant'+String.fromCharCode(65+i)+'" align="center">'+String.fromCharCode(65+i)+'<br /><input type="radio" id="Variant'+String.fromCharCode(65+i)+'" name="Variant" value="'+String.fromCharCode(97+i)+'"/></td>';*/
			}
		}
		tableConstructor+='</td>';/*'</td></tr></table>';*/
		document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
		/*document.getElementById("ZnoVariantTest").innerHTML=tableConstructor;*/
		
}
//построение ячейки с вариантами ответов на тесты и кнопкой "просмотр текста" инициализируется значением testVariantNumber и языка списка "rus"/"eng"
function buildTextAnalysis (languageOfList)
{
		var varNum;
		if(variantNumberArray==null)
		{
			varNum=testVariantNumber;
		}
		else
		{
			varNum=variantNumberArray[currentTaskCounter];
		}
		var tableConstructor='<td><div class="TextViewCell"><a href="javascript:showFullText()">Просмотр текста</a></div>';
		for(var i=0;i<varNum;i++)
		{
			if (languageOfList=="rus")
			{
			tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">'+String.fromCharCode(1040+i)+'<br /><input type="radio" id="Variant'+String.fromCharCode(65+i)+'" name="Variant" value="'+String.fromCharCode(97+i)+'"/></div>';
			}
			else
			{
			tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">'+String.fromCharCode(65+i)+'<br /><input type="radio" id="Variant'+String.fromCharCode(65+i)+'" name="Variant" value="'+String.fromCharCode(97+i)+'"/></div>';
			}
		}
		tableConstructor+='</td>';
		document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
		/*document.getElementById("ZnoVariantTest").innerHTML=tableConstructor;*/
		
}
//построение ячейки для ввода слова 
function buildTextual()
{
		var tableConstructor='<td><div class="TextViewCell"><a href="javascript:showFullText()">Просмотр текста</a></div>';
		tableConstructor+='<div class="TextEnterCell">Введите Ваш ответ (одно слово маленькими буквами):</div><div class="TextEnterCell"><textarea cols="15" rows="1" id="TextualField" name="TextualField" value=""></textarea></div>';
		document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
		/*document.getElementById("ZnoTextual").innerHTML=tableConstructor;*/
}
//построение ячейки для ввода числа иницализируется: со знаком или без, колличеством разрядов до запятой,  колличеством после запятой
function buildNumeric(isSigned,beforeDotNumber,afterDotNumber)
{
		var tableConstructor='<div class="ZnoVariantNumberView" name="ZnoVariantNumber" id="ZnoVariantNumber"><!-- поле для ввода числового ответа: селектор знака, четыре односимвольных поля до запятой и два после запятой -->Введите ответ:<br/>';
		/*добавление поля выбора знака ответа*/
		if (isSigned==true)
		{
                    tableConstructor+='<select name="AnswerSign" id="AnswerSign"><option value="positive" selected="selected">+</option><option value="negative">-</option></select>';
	    }
		/*построение набора ячеек ввода целочисленных разрядов*/
        for (var i=beforeDotNumber;i>0;i--)
		{
					var digitCounter='1';
					for(var j=1;j<i;j++)
					{
					 digitCounter+='0';
					}
					tableConstructor+='<input type="num" size="1" maxlength="1" value="" name="NumberAnswer'+digitCounter+'" id="NumberAnswer'+digitCounter+'" class="numberAnswerView" />';
		}
		/*Добавление десятичной запятой*/
		if(afterDotNumber>0)
		{
		  tableConstructor+=' , ';
		}
		/*построение набора ячеек ввода дробных десятичных разрядов*/
		for (var i=1;i<afterDotNumber+1;i++)
		{
					var digitCounter="";
					/*Добавления нужного колличества нулей в название разряда, например ячейка ввода сотых числа (0,01) имеет название NumberAnswer001*/
					for(var j=1;j<i+1;j++)
					{
					 digitCounter+='0';
					}
					digitCounter+='1';
					tableConstructor+='<input type="num" size="1" maxlength="1" value="" name="NumberAnswer'+digitCounter+'" id="NumberAnswer'+digitCounter+'" class="numberAnswerView" />';
		}
		tableConstructor+='</div></td>';
		document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
//Построение  ячейки с вводом полей для классификации
function buildComponate(connectNum)
{
 var varNum;
		if (connectNum==0)
		{
		 varNum=componateVariantNumber;
		}
		else
		{
		 varNum=connectNum;
		}
   var tableConstructor='<td class="ZnoVariantNumberView" name="ZnoVariantNumber" id="ZnoVariantNumber" align="center">Введите ответ:<hr/>                    из 1-й группы: <input type="num" size="1" maxlength="1" value="" name="NumberAnswer1" id="NumberAnswer1" class="numberAnswerView" /><hr/>';
   for (var i=2;i<varNum+1;i++)
   {
    tableConstructor+='из '+i+'-й группы: <input type="num" size="1" maxlength="1" value="" name="NumberAnswer'+i+'" id="NumberAnswer'+i+'" class="numberAnswerView" /><hr/>';
   }
   tableConstructor+='</td>';
   document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
//построение ячейки для выбора вариантов связывания 
function buildConnect(connectNum)
{
 var tableConstructor='<td>';
		var varNum;
		if (connectNum==0)
		{
		 varNum=connectVariantNumber;
		}
		else
		{
		 varNum=connectNum;
		}
		for(var i=1;i<varNum+1;i++)
		{
			tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">'+i+':<br /><select name="connect'+i+'" size="'+(varNum+1)+'" id="connect'+i+'">';
			for(var j=0;j<varNum+1;j++)
			{
				tableConstructor+='<option value="'+String.fromCharCode(97+j)+'">'+String.fromCharCode(1040+j)+'</option>';
			}
			tableConstructor+='</select></div>';
		}
		tableConstructor+='</td>';
		document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
//построение ячейки упорядочивания событий
function buildOrder(connectNum)
{
		var tableConstructor='<td>';
		var varNum;
		if (connectNum==0)
		{
		 varNum=connectVariantNumber;
		}
		else
		{
		 varNum=connectNum;
		}
		for(var i=1;i<varNum+1;i++)
		{
			tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">'+i+':<br /><select name="connect'+i+'" size="'+varNum+'" id="connect'+i+'">';
			for(var j=0;j<varNum;j++)
			{
				tableConstructor+='<option value="'+String.fromCharCode(97+j)+'">'+String.fromCharCode(1040+j)+'</option>';
			}
			tableConstructor+='</select></div>';
		}
		tableConstructor+='</td>';
		document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
//построение ячейки с множественным вариантом выбора
function buildMultiselection(choiceNum,variantNum)
{
		var varNum,chNum;
		if (variantNum==0)
		{
		 varNum=multiselection_variant;
		}
		else
		{
		 varNum=variantNum;
		}
		
		if(choiceNum==0)
		{
		 chNum=multiselection_ans_number;
		}
		else
		{
		 chNum=choiceNum;
		}
		var tableConstructor='<td>';
		for(var i=1;i<chNum+1;i++)
		{
			tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/chNum)+'%;">'+i+':<br /><select name="connect'+i+'" size="'+varNum+'" id="connect'+i+'">';
			for(var j=0;j<varNum;j++)
			{
				tableConstructor+='<option value="'+String.fromCharCode(97+j)+'">'+(j+1)+'</option>';
			}
			tableConstructor+='</select></div>';
		}
		tableConstructor+='</td>';
		document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;		
}
//построение ячейки ответа в свободном виде - с редактором мат. формул
function buildFree()
{
		var tableConstructor='<td><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">Введите ответ:</div><div id=\"divAnsDiv\" style=\"float:left; width:90%;\"><span id=\"ansDiv\"></span></div><div id=\"helperDiv\" align=\"center\" style=\"float:left; width:8%;\"> <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'ansDiv\').innerHTML=\'\';document.getElementById(\'FreeAnswerText\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Очистка поля ответа\',document.getElementById(\'clearAnsButton\').offsetLeft,document.getElementById(\'clearAnsButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearAnsButton\"/> <a href=\"#\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Заполняйте поле ответа используя конструктор формул. С клавиатуры вводите только английские буквы и цифры \',document.getElementById(\'infotip\').offsetLeft,document.getElementById(\'infotip\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"infotip\">?</a></div><input type=\"hidden\" size=\"55\" class=\"FreeAnswerTextView\" name=\"FreeAnswerText\" id=\"FreeAnswerText\" /><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">Добавить в ответ выражение:</div><div align=\"center\" style=\"width:100%; text-align:left;\">A=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldA\" id=\"fieldA\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Добавить в ответ\',document.getElementById(\'addAButton\').offsetLeft,document.getElementById(\'addAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addAButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldA\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Очистка поля А\',document.getElementById(\'clearAButton\').offsetLeft,document.getElementById(\'clearAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearAButton\"/>  </div><div align=\"center\" style=\"width:100%; text-align:left;\">B=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldB\" id=\"fieldB\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Добавить в ответ\',document.getElementById(\'addBButton\').offsetLeft,document.getElementById(\'addBButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addBButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldB\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Очистка поля B\',document.getElementById(\'clearBButton\').offsetLeft,document.getElementById(\'clearBButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearBButton\" />             	   </div><div align=\"center\" style=\"width:100%; text-align:left;\">C=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldC\" id=\"fieldC\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textC\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Добавить в ответ\',document.getElementById(\'addCButton\').offsetLeft,document.getElementById(\'addCButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addCButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldC\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Очистка поля C\',document.getElementById(\'clearCButton\').offsetLeft,document.getElementById(\'clearCButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearCButton\" />             	   </div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">Добавить символ:</div><div style=\"float:left; width:80%;\"><input type=\"button\" value=\"&alpha;\" onclick=\"addSymbol(\'alpha\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Буква АЛЬФА\',document.getElementById(\'alphaButton\').offsetLeft,document.getElementById(\'alphaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"alphaButton\"/>                   <input type=\"button\" value=\"&beta;\" onclick=\"addSymbol(\'beta\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Буква БЕТТА\',document.getElementById(\'betaButton\').offsetLeft,document.getElementById(\'betaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"betaButton\"/>                   <input type=\"button\" value=\"&gamma;\" onclick=\"addSymbol(\'gamma\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Буква ГАММА\',document.getElementById(\'gammaButton\').offsetLeft,document.getElementById(\'gammaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"gammaButton\" />                   <input type=\"button\" value=\"&Pi;\" onclick=\"addSymbol(\'pi\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Число Пи\',document.getElementById(\'piButton\').offsetLeft,document.getElementById(\'piButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"piButton\" />                   <input type=\"button\" value=\"&phi;\" onclick=\"addSymbol(\'phi\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Буква ФИ\',document.getElementById(\'phiButton\').offsetLeft,document.getElementById(\'phiButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"phiButton\"/>                   <input type=\"button\" value=\"&infin;\" onclick=\"addSymbol(\'infinity\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Знак бесконечности\',document.getElementById(\'infinityButton\').offsetLeft,document.getElementById(\'infinityButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"infinityButton\"/>                   <input type=\"button\" value=\"&deg;\" onclick=\"addSymbol(\'deg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Градус(угловая мера)\', document.getElementById(\'degButton\').offsetLeft, document.getElementById(\'degButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"degButton\"/>                   <input type=\"button\" value=\"&Oslash;\" onclick=\"addSymbol(\'emptyEnt\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Пустое множество\', document.getElementById(\'empEntButton\').offsetLeft, document.getElementById(\'empEntButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"empEntButton\"/>                   <input type=\"button\" value=\"&isin;\" onclick=\"addSymbol(\'isIn\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Принадлежит\', document.getElementById(\'isInButton\').offsetLeft, document.getElementById(\'isInButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"isInButton\"/>                   <input type=\"button\" value=\"[\" onclick=\"addSymbol(\'leftSq\')\" />                   <input type=\"button\" value=\"]\" onclick=\"addSymbol(\'rightSq\')\" />                   <input type=\"button\" value=\"(\" onclick=\"addSymbol(\'leftRnd\')\" />                   <input type=\"button\" value=\")\" onclick=\"addSymbol(\'rightRnd\')\" />                   <input type=\"button\" value=\"{\" onclick=\"addSymbol(\'{\')\" />                   <input type=\"button\" value=\"}\" onclick=\"addSymbol(\'}\')\" />                   <input type=\"button\" value=\";\" onclick=\"addSymbol(\';\')\"  style=\"position:relative;\" onMouseOver=\"advise.show(\'Точка с запятой\',document.getElementById(\'semiButton\').offsetLeft,document.getElementById(\'semiButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"semiButton\"/>                   <input type=\"button\" value=\".\" onclick=\"addSymbol(\'.\')\"  style=\"position:relative;\" onMouseOver=\"advise.show(\'десятичная запятая\',document.getElementById(\'dotButton\').offsetLeft,document.getElementById(\'dotButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"dotButton\"/>                   <input type=\"button\" value=\"=\" onclick=\"addSymbol(\'isEqual\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Равно\',document.getElementById(\'isEqualButton\').offsetLeft,document.getElementById(\'isEqualButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"isEqualButton\"/>                   <input type=\"button\" value=\"+\" onclick=\"addSymbol(\'plus\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Суммирование\',document.getElementById(\'plusButton\').offsetLeft,document.getElementById(\'plusButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"plusButton\"/>                   <input type=\"button\" value=\"-\" onclick=\"addSymbol(\'minus\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Вычитание\',document.getElementById(\'minusButton\').offsetLeft,document.getElementById(\'minusButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"minusButton\"/>                   <input type=\"button\" value=\"&times;\" onclick=\"addSymbol(\'multiply\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Умножение\',document.getElementById(\'multiplyButton\').offsetLeft,document.getElementById(\'multiplyButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"multiplyButton\"/>                   <input type=\"button\" value=\"&#58;\" onclick=\"addSymbol(\'divide\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Деление\',document.getElementById(\'divideButton\').offsetLeft,document.getElementById(\'divideButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"divideButton\"/>                   <input type=\"button\" value=\"U\" onclick=\"addSymbol(\'U\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Объеденение множеств\',document.getElementById(\'unionButton\').offsetLeft,document.getElementById(\'unionButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"unionButton\"/>                   <input type=\"button\" value=\"&cap;\" onclick=\"addSymbol(\'intersection\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Пересечение множеств\',document.getElementById(\'intSectButton\').offsetLeft,document.getElementById(\'intSectButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"intSectButton\"/>                   <input type=\"button\" value=\"ln\" onclick=\"addSymbol(\'ln\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Натуральный логарифм\',document.getElementById(\'lnButton\').offsetLeft,document.getElementById(\'lnButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lnButton\"/>                   <input type=\"button\" value=\"lg\" onclick=\"addSymbol(\'lg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Десятичный логарифм\',document.getElementById(\'lgButton\').offsetLeft,document.getElementById(\'lgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lgButton\"/>                   <input type=\"button\" value=\"log\" onclick=\"addSymbol(\'log\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Логарифм\',document.getElementById(\'lоgButton\').offsetLeft,document.getElementById(\'lоgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lоgButton\"/>                                      <input type=\"button\" value=\"sin\" onclick=\"addSymbol(\'sin\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Синус\',document.getElementById(\'sinButton\').offsetLeft,document.getElementById(\'sinButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"sinButton\"/>                    <input type=\"button\" value=\"cos\" onclick=\"addSymbol(\'cos\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Косинус\',document.getElementById(\'cosButton\').offsetLeft,document.getElementById(\'cosButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"cosButton\"/>                    <input type=\"button\" value=\"tg\" onclick=\"addSymbol(\'tg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Тангенс\',document.getElementById(\'tgButton\').offsetLeft,document.getElementById(\'tgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"tgButton\"/>                    <input type=\"button\" value=\"ctg\" onclick=\"addSymbol(\'ctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Котангенс\',document.getElementById(\'ctgButton\').offsetLeft,document.getElementById(\'ctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"ctgButton\"/>                    <input type=\"button\" value=\"arcsin\" onclick=\"addSymbol(\'arcsin\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Арксинус\',document.getElementById(\'arcsinButton\').offsetLeft,document.getElementById(\'arcsinButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arcsinButton\"/>                   <input type=\"button\" value=\"arccos\" onclick=\"addSymbol(\'arccos\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Арккосинус\',document.getElementById(\'arccosButton\').offsetLeft,document.getElementById(\'arccosButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arccosButton\"/>                     <input type=\"button\" value=\"arctg\" onclick=\"addSymbol(\'arctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Арктангенс\',document.getElementById(\'arctgButton\').offsetLeft,document.getElementById(\'arctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arctgButton\"/>                     <input type=\"button\" value=\"arcctg\" onclick=\"addSymbol(\'arcctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Арккотангенс\',document.getElementById(\'arcctgButton\').offsetLeft,document.getElementById(\'arcctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arcctgButton\"/>                   </div><div style=\"float:left; width:20%;\"><select name=\"placeSelect\" size=\"4\" id=\"placeSelect\"><option value=\"ans\">в ответ</option><option value=\"a\">в поле А</option><option value=\"b\">в поле B</option>        <option value=\"c\" selected=\"selected\">в поле C</option></select></div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">Добавить в поле С выражение:</div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\"><input type=\"button\" value=\"A^B\" onclick=\"addSymbol(\'powAB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Возвести поле А в степень поля В\',document.getElementById(\'powButton\').offsetLeft,document.getElementById(\'powButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"powButton\"/>                    <input type=\"button\" value=\"&radic;A\" onclick=\"addSymbol(\'sqrt\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Корень квадратный из А\',document.getElementById(\'sqrtButton\').offsetLeft,document.getElementById(\'sqrtButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"sqrtButton\"/>                    <input type=\"button\" value=\"LOGaB\" onclick=\"addSymbol(\'logAB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Логарифм от B по основанию A\', document.getElementById(\'logABButton\').offsetLeft,document.getElementById(\'logABButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"logABButton\"/>                    <input type=\"button\" value=\"&uarr;A\" onclick=\"addSymbol(\'powA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'Возведение в степень A\', document.getElementById(\'powAButton\').offsetLeft,document.getElementById(\'powAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"powAButton\"/>                    <input type=\"button\" value=\"&darr;A\" onclick=\"addSymbol(\'indexA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\'с индексом A\', document.getElementById(\'indexAButton\').offsetLeft,document.getElementById(\'indexAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"indexAButton\"/> </div></td>';
		/*'<table align="center"><tr>';
		tableConstructor+='<td class="ZnoVariantFreeAnswerView" name="ZnoVariantFreeAnswer" id="ZnoVariantFreeAnswer" align="center">                   Введите ответ:                   <!-- поле для ввода ответа в свободной форме -->                   <table width="100%">                   <tr>                   <td id="divAnsDiv">                   <span id="ansDiv"></span>                   </td>                   <td id="helperDiv" align="center">                            <input type="button" value="&laquo;" onclick="document.getElementById(\'ansDiv\').innerHTML=\'\';document.getElementById(\'FreeAnswerText\').value=\'\'" style="position:relative;" onMouseOver="advise.show(\'Очистка поля ответа\',document.getElementById(\'clearAnsButton\').offsetLeft,document.getElementById(\'clearAnsButton\').offsetTop)" onMouseOut="advise.hide()" id="clearAnsButton"/>                   <a href="#" style="position:relative;" onMouseOver="advise.show(\'Заполняйте поле ответа используя конструктор формул. С клавиатуры вводите только английские буквы и цифры \',document.getElementById(\'infotip\').offsetLeft,document.getElementById(\'infotip\').offsetTop)" onMouseOut="advise.hide()" id="infotip">?</a>                   </td>                   </tr>                   </table>                   <input type="hidden" size="55" class="FreeAnswerTextView" name="FreeAnswerText" id="FreeAnswerText" />                   <!-- ссылка на всплывающую подсказку -->                   <table width="100%" align="center" class="AnswerTable">                   <tr>                   		<td colspan="2" align="center">                   		Добавить в ответ выражение:<br/>                        </td>                   </tr>                   <tr>                   <td colspan="2">                                                       A=                   <input type="text" maxlength="40" size="40" name="fieldA" id="fieldA" />                   <input type="button" value="&uarr;" onclick="addSymbol(\'textA\')" style="position:relative;" onMouseOver="advise.show(\'Добавить в ответ\',document.getElementById(\'addAButton\').offsetLeft,document.getElementById(\'addAButton\').offsetTop)" onMouseOut="advise.hide()" id="addAButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById(\'fieldA\').value=\'\'" style="position:relative;" onMouseOver="advise.show(\'Очистка поля А\',document.getElementById(\'clearAButton\').offsetLeft,document.getElementById(\'clearAButton\').offsetTop)" onMouseOut="advise.hide()" id="clearAButton"/>                   </td>                   </tr>                   <tr>                   <td colspan="2">                   B=                   <input type="text" maxlength="40" size="40" name="fieldB" id="fieldB" />                   <input type="button" value="&uarr;" onclick="addSymbol(\'textB\')" style="position:relative;" onMouseOver="advise.show(\'Добавить в ответ\',document.getElementById(\'addBButton\').offsetLeft,document.getElementById(\'addBButton\').offsetTop)" onMouseOut="advise.hide()" id="addBButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById(\'fieldB\').value=\'\'" style="position:relative;" onMouseOver="advise.show(\'Очистка поля B\',document.getElementById(\'clearBButton\').offsetLeft,document.getElementById(\'clearBButton\').offsetTop)" onMouseOut="advise.hide()" id="clearBButton" />             	   </td>                   </tr>                   <tr>                   <td colspan="2">                   C=                   <input type="text" maxlength="40" size="40" name="fieldC" id="fieldC" />                   <input type="button" value="&uarr;" onclick="addSymbol(\'textC\')" style="position:relative;" onMouseOver="advise.show(\'Добавить в ответ\',document.getElementById(\'addCButton\').offsetLeft,document.getElementById(\'addCButton\').offsetTop)" onMouseOut="advise.hide()" id="addCButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById(\'fieldC\').value=\'\'" style="position:relative;" onMouseOver="advise.show(\'Очистка поля C\',document.getElementById(\'clearCButton\').offsetLeft,document.getElementById(\'clearCButton\').offsetTop)" onMouseOut="advise.hide()" id="clearCButton" />             	   </td>                   </tr>                   </table>                                    <table align="center" width="100%">                  <tr>                    <td colspan="2" align="center">                    <span id="addSym"> Добавить символ: </span>                  	</td>                  </tr>                  <tr>                   <td width="80%" align="left">                   <input type="button" value="&alpha;" onclick="addSymbol(\'alpha\')" style="position:relative;" onMouseOver="advise.show(\'Буква АЛЬФА\',document.getElementById(\'alphaButton\').offsetLeft,document.getElementById(\'alphaButton\').offsetTop)" onMouseOut="advise.hide()" id="alphaButton"/>                   <input type="button" value="&beta;" onclick="addSymbol(\'beta\')" style="position:relative;" onMouseOver="advise.show(\'Буква БЕТТА\',document.getElementById(\'betaButton\').offsetLeft,document.getElementById(\'betaButton\').offsetTop)" onMouseOut="advise.hide()" id="betaButton"/>                   <input type="button" value="&gamma;" onclick="addSymbol(\'gamma\')" style="position:relative;" onMouseOver="advise.show(\'Буква ГАММА\',document.getElementById(\'gammaButton\').offsetLeft,document.getElementById(\'gammaButton\').offsetTop)" onMouseOut="advise.hide()" id="gammaButton" />                   <input type="button" value="&Pi;" onclick="addSymbol(\'pi\')" style="position:relative;" onMouseOver="advise.show(\'Число Пи\',document.getElementById(\'piButton\').offsetLeft,document.getElementById(\'piButton\').offsetTop)" onMouseOut="advise.hide()" id="piButton" />                   <input type="button" value="&phi;" onclick="addSymbol(\'phi\')" style="position:relative;" onMouseOver="advise.show(\'Буква ФИ\',document.getElementById(\'phiButton\').offsetLeft,document.getElementById(\'phiButton\').offsetTop)" onMouseOut="advise.hide()" id="phiButton"/>                   <input type="button" value="&infin;" onclick="addSymbol(\'infinity\')" style="position:relative;" onMouseOver="advise.show(\'Знак бесконечности\',document.getElementById(\'infinityButton\').offsetLeft,document.getElementById(\'infinityButton\').offsetTop)" onMouseOut="advise.hide()" id="infinityButton"/>                   <input type="button" value="&deg;" onclick="addSymbol(\'deg\')" style="position:relative;" onMouseOver="advise.show(\'Градус(угловая мера)\', document.getElementById(\'degButton\').offsetLeft, document.getElementById(\'degButton\').offsetTop)" onMouseOut="advise.hide()" id="degButton"/>                   <input type="button" value="&Oslash;" onclick="addSymbol(\'emptyEnt\')" style="position:relative;" onMouseOver="advise.show(\'Пустое множество\', document.getElementById(\'empEntButton\').offsetLeft, document.getElementById(\'empEntButton\').offsetTop)" onMouseOut="advise.hide()" id="empEntButton"/>                   <input type="button" value="&isin;" onclick="addSymbol(\'isIn\')" style="position:relative;" onMouseOver="advise.show(\'Принадлежит\', document.getElementById(\'isInButton\').offsetLeft, document.getElementById(\'isInButton\').offsetTop)" onMouseOut="advise.hide()" id="isInButton"/>                   <input type="button" value="[" onclick="addSymbol(\'leftSq\')" />                   <input type="button" value="]" onclick="addSymbol(\'rightSq\')" />                   <input type="button" value="(" onclick="addSymbol(\'leftRnd\')" />                   <input type="button" value=")" onclick="addSymbol(\'rightRnd\')" />                   <input type="button" value="{" onclick="addSymbol(\'{\')" />                   <input type="button" value="}" onclick="addSymbol(\'}\')" />                   <input type="button" value=";" onclick="addSymbol(\';\')"  style="position:relative;" onMouseOver="advise.show(\'Точка с запятой\',document.getElementById(\'semiButton\').offsetLeft,document.getElementById(\'semiButton\').offsetTop)" onMouseOut="advise.hide()" id="semiButton"/>                   <input type="button" value="." onclick="addSymbol(\'.\')"  style="position:relative;" onMouseOver="advise.show(\'десятичная запятая\',document.getElementById(\'dotButton\').offsetLeft,document.getElementById(\'dotButton\').offsetTop)" onMouseOut="advise.hide()" id="dotButton"/>                   <input type="button" value="=" onclick="addSymbol(\'isEqual\')" style="position:relative;" onMouseOver="advise.show(\'Равно\',document.getElementById(\'isEqualButton\').offsetLeft,document.getElementById(\'isEqualButton\').offsetTop)" onMouseOut="advise.hide()" id="isEqualButton"/>                   <input type="button" value="+" onclick="addSymbol(\'plus\')" style="position:relative;" onMouseOver="advise.show(\'Суммирование\',document.getElementById(\'plusButton\').offsetLeft,document.getElementById(\'plusButton\').offsetTop)" onMouseOut="advise.hide()" id="plusButton"/>                   <input type="button" value="-" onclick="addSymbol(\'minus\')" style="position:relative;" onMouseOver="advise.show(\'Вычитание\',document.getElementById(\'minusButton\').offsetLeft,document.getElementById(\'minusButton\').offsetTop)" onMouseOut="advise.hide()" id="minusButton"/>                   <input type="button" value="&times;" onclick="addSymbol(\'multiply\')" style="position:relative;" onMouseOver="advise.show(\'Умножение\',document.getElementById(\'multiplyButton\').offsetLeft,document.getElementById(\'multiplyButton\').offsetTop)" onMouseOut="advise.hide()" id="multiplyButton"/>                   <input type="button" value="&#58;" onclick="addSymbol(\'divide\')" style="position:relative;" onMouseOver="advise.show(\'Деление\',document.getElementById(\'divideButton\').offsetLeft,document.getElementById(\'divideButton\').offsetTop)" onMouseOut="advise.hide()" id="divideButton"/>                   <input type="button" value="U" onclick="addSymbol(\'U\')" style="position:relative;" onMouseOver="advise.show(\'Объеденение множеств\',document.getElementById(\'unionButton\').offsetLeft,document.getElementById(\'unionButton\').offsetTop)" onMouseOut="advise.hide()" id="unionButton"/>                   <input type="button" value="&cap;" onclick="addSymbol(\'intersection\')" style="position:relative;" onMouseOver="advise.show(\'Пересечение множеств\',document.getElementById(\'intSectButton\').offsetLeft,document.getElementById(\'intSectButton\').offsetTop)" onMouseOut="advise.hide()" id="intSectButton"/>                   <input type="button" value="ln" onclick="addSymbol(\'ln\')" style="position:relative;" onMouseOver="advise.show(\'Натуральный логарифм\',document.getElementById(\'lnButton\').offsetLeft,document.getElementById(\'lnButton\').offsetTop)" onMouseOut="advise.hide()" id="lnButton"/>                   <input type="button" value="lg" onclick="addSymbol(\'lg\')" style="position:relative;" onMouseOver="advise.show(\'Десятичный логарифм\',document.getElementById(\'lgButton\').offsetLeft,document.getElementById(\'lgButton\').offsetTop)" onMouseOut="advise.hide()" id="lgButton"/>                   <input type="button" value="log" onclick="addSymbol(\'log\')" style="position:relative;" onMouseOver="advise.show(\'Логарифм\',document.getElementById(\'lоgButton\').offsetLeft,document.getElementById(\'lоgButton\').offsetTop)" onMouseOut="advise.hide()" id="lоgButton"/>                                      <input type="button" value="sin" onclick="addSymbol(\'sin\')" style="position:relative;" onMouseOver="advise.show(\'Синус\',document.getElementById(\'sinButton\').offsetLeft,document.getElementById(\'sinButton\').offsetTop)" onMouseOut="advise.hide()" id="sinButton"/>                    <input type="button" value="cos" onclick="addSymbol(\'cos\')" style="position:relative;" onMouseOver="advise.show(\'Косинус\',document.getElementById(\'cosButton\').offsetLeft,document.getElementById(\'cosButton\').offsetTop)" onMouseOut="advise.hide()" id="cosButton"/>                    <input type="button" value="tg" onclick="addSymbol(\'tg\')" style="position:relative;" onMouseOver="advise.show(\'Тангенс\',document.getElementById(\'tgButton\').offsetLeft,document.getElementById(\'tgButton\').offsetTop)" onMouseOut="advise.hide()" id="tgButton"/>                    <input type="button" value="ctg" onclick="addSymbol(\'ctg\')" style="position:relative;" onMouseOver="advise.show(\'Котангенс\',document.getElementById(\'ctgButton\').offsetLeft,document.getElementById(\'ctgButton\').offsetTop)" onMouseOut="advise.hide()" id="ctgButton"/>                    <input type="button" value="arcsin" onclick="addSymbol(\'arcsin\')" style="position:relative;" onMouseOver="advise.show(\'Арксинус\',document.getElementById(\'arcsinButton\').offsetLeft,document.getElementById(\'arcsinButton\').offsetTop)" onMouseOut="advise.hide()" id="arcsinButton"/>                   <input type="button" value="arccos" onclick="addSymbol(\'arccos\')" style="position:relative;" onMouseOver="advise.show(\'Арккосинус\',document.getElementById(\'arccosButton\').offsetLeft,document.getElementById(\'arccosButton\').offsetTop)" onMouseOut="advise.hide()" id="arccosButton"/>                     <input type="button" value="arctg" onclick="addSymbol(\'arctg\')" style="position:relative;" onMouseOver="advise.show(\'Арктангенс\',document.getElementById(\'arctgButton\').offsetLeft,document.getElementById(\'arctgButton\').offsetTop)" onMouseOut="advise.hide()" id="arctgButton"/>                     <input type="button" value="arcctg" onclick="addSymbol(\'arcctg\')" style="position:relative;" onMouseOver="advise.show(\'Арккотангенс\',document.getElementById(\'arcctgButton\').offsetLeft,document.getElementById(\'arcctgButton\').offsetTop)" onMouseOut="advise.hide()" id="arcctgButton"/>                   </td>                   <td width="20%">                   <select name="placeSelect" size="4" id="placeSelect">                   <option value="ans">в ответ</option>                   <option value="a">в поле А</option>                   <option value="b">в поле B</option>                   <option value="c" selected="selected">в поле C</option>                                </select>                   </td>                   </tr>                  		<tr>             <td colspan="2" align="center">             Добавить в поле С выражение:             </td>            </tr>            <tr>            	<td align="left">                	<input type="button" value="A^B" onclick="addSymbol(\'powAB\')" style="position:relative;" onMouseOver="advise.show(\'Возвести поле А в степень поля В\',document.getElementById(\'powButton\').offsetLeft,document.getElementById(\'powButton\').offsetTop)" onMouseOut="advise.hide()" id="powButton"/>                    <input type="button" value="&radic;A" onclick="addSymbol(\'sqrt\')" style="position:relative;" onMouseOver="advise.show(\'Корень квадратный из А\',document.getElementById(\'sqrtButton\').offsetLeft,document.getElementById(\'sqrtButton\').offsetTop)" onMouseOut="advise.hide()" id="sqrtButton"/>                    <input type="button" value="LOGaB" onclick="addSymbol(\'logAB\')" style="position:relative;" onMouseOver="advise.show(\'Логарифм от B по основанию A\', document.getElementById(\'logABButton\').offsetLeft,document.getElementById(\'logABButton\').offsetTop)" onMouseOut="advise.hide()" id="logABButton"/>                    <input type="button" value="&uarr;A" onclick="addSymbol(\'powA\')" style="position:relative;" onMouseOver="advise.show(\'Возведение в степень A\', document.getElementById(\'powAButton\').offsetLeft,document.getElementById(\'powAButton\').offsetTop)" onMouseOut="advise.hide()" id="powAButton"/>                    <input type="button" value="&darr;A" onclick="addSymbol(\'indexA\')" style="position:relative;" onMouseOver="advise.show(\'с индексом A\', document.getElementById(\'indexAButton\').offsetLeft,document.getElementById(\'indexAButton\').offsetTop)" onMouseOut="advise.hide()" id="indexAButton"/>            	</td>            </tr>                   </table>                </td>';
		tableConstructor+='</tr></table>';*/
		document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
//Построение ячейки для ввода текста сочинения
function buildTvir()
{
 var tableConstructor='<td><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">Введите текст Вашего сочинения:</div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\"><textarea cols=\"55\" rows=\"5\"  onkeyup=\"checkWordNumber()\" id=\"TvirText\" name=\"TvirText\"></textarea></div><div align="center" style="width:100%; text-align:center; clear:both;" id="WordCounter" name="WordCounter" class="WordCounterView">                       </div></td>';
/*'<table align="center"><tr>';
 tableConstructor+=' <td class="ZnoTvirView" name="ZnoTvir" id="ZnoTvir" align="center">                	<table>					<tr align="center">							<td>						 Введите текст Вашего сочинения:						</td>					</tr>					 <tr align="center">                     							<td>                    	<textarea cols="55" rows="5"  onkeyup="checkWordNumber()" id="TvirText" name="TvirText"></textarea>                        </td>                      </tr>                      <tr align="center">                       <td id="WordCounter" name="WordCounter" class="WordCounterView">                       </td>                      </tr>                    </table>                  </td>';
 tableConstructor+='</tr></table>';*/
 document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
function buildResultTable(testTitle)
{
 var tableConstructor=' <table align="center" class="ZnoResultTableView" id="ZnoResultTable" name="ZnoResultTable">	<tr>    	<!-- Ячейка с заголовком таблицы результатов тестирования -->        <td colspan="2" class="ZnoResultTitleView" name="ZnoResultTitle" id="ZnoResultTitle">        Результаты Вашего теста<br /> ('+testTitle+')        </td>	</tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием всех ответов (правильных и неправильных) -->        	<td class="ZnoResultTotalAnswerView" name="ZnoResultTotalAnswer" id="ZnoResultTotalAnswer">             Дано ответов:        </td>        <!-- Ячейка с числом всех ответов (правильных и неправильных) -->        <td class="ZnoResultTotalAnswerNumberView" name="ZnoResultTotalAnswerNumber" id="ZnoResultTotalAnswerNumber">        	0        </td>    </tr>    <tr class="ResultRowView">    	<!-- Ячейка с описанием пропущенных заданий  -->         <td class="ZnoResultPassedView" name="ZnoResultPassed" id="ZnoResultPassed">             Пропущено:        </td>        <!-- Ячейка с числом пропущенных заданий  -->        <td class="ZnoResultPassedNumberView" name="ZnoResultPassedNumber" id="ZnoResultPassedNumber">             0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием правильных ответов -->        	<td class="ZnoResultCorrectAnswerView" name="ZnoResultCorrectAnswer" id="ZnoResultCorrectAnswer">             Правильных ответов:        </td>        <!-- Ячейка с числом правильных ответов  -->        <td class="ZnoResultCorrectAnswerNumberView" name="ZnoResultCorrectAnswerNumber" id="ZnoResultCorrectAnswerNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием балла ЗНО -->        	<td class="ZnoResultGradeView" name="ZnoResultGrade" id="ZnoResultGrade">             Рейтинг ЗНО, баллов:        </td>        <!-- Ячейка с числом балла ЗНО  -->        <td class="ZnoResultGradeNumberView" name="ZnoResultGradeNumber" id="ZnoResultGradeNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием затраченного времени -->        	<td class="ZnoResultTimeView" name="ZnoResultTime" id="ZnoResultTime">             Затречено времени, мин:        </td>        <!-- Ячейка с числом затраченного времени -->        <td class="ZnoResultTimeNumberView" name="ZnoResultTimeNumber" id="ZnoResultTimeNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с подробным описанием неправильных ответов -->        	<td class="ZnoResultPoorAnswerView" name="ZnoResultPoorAnswer" id="ZnoResultPoorAnswer">             Неправильные ответы, номера заданий:        </td>        <!-- Ячейка с перечислением неправильных ответов -->        <td class="ZnoResultPoorAnswerDetailView" name="ZnoResultPoorAnswerDetail" id="ZnoResultPoorAnswerDetail">        	0 <br/>  0 <br /> 0 <br />        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с подробным описанием пропущенных ответов -->       	  <td class="ZnoResultPassedAnswerView" name="ZnoResultPassedAnswer" id="ZnoResultPassedAnswer">             Пропущенные ответы, номера заданий:      </td>        <!-- Ячейка с перечислением пропущенных ответов -->      <td class="ZnoResultPassedAnswerDetailView" name="ZnoResultPassedAnswerDetail" id="ZnoResultPassedAnswerDetail">        	0 <br/>  0 <br /> 0 <br />      </td>    </tr>    <tr>	        <!-- Ячейка с запросом на повторное тестирование -->        	<td class="ZnoResultRepeatView" name="ZnoResultRepeat" id="ZnoResultRepeat">             Повторно пройти этот тест:        </td>        <!-- Ячейка с кнопкой начала повторного тестирования -->        <td class="ZnoResultRepeatButtonView" name="ZnoResultRepeatButton" id="ZnoResultRepeatButton">        	<input name="ZnoResultRepeatTestButton" type="button" id="ZnoResultRepeatTestButton" value="Повтор теста" onClick="testInit(\''+testTitle+'\')"/>        </td>    </tr>    </table>';
document.getElementById("ZnoOuterTable").innerHTML=tableConstructor;
 
}
function buildTestTable(testTitle,sourceDir)
{
 var tableConstructor='<tr class="ZnoOuterTableRowHeaderView" name="ZnoOuterTableRowHeader" id="ZnoOuterTableRowHeader">        <td>              <!--Внутренняя таблица с номером задания и названием теста --><table class="ZnoInnerTableHeaderView" name="ZnoInnerTableHeader" id="ZnoInnerTableHeader">              	<tbody><tr>                     <!-- Ячейка с номером задания -->                     <td class="ZnoTaskNumberView" name="ZnoTaskNumber" id="ZnoTaskNumber">Номер задания:<!-- счетчик номера задания --><span class="TaskNumberView" id="TaskNumber" name="TaskNumberCounter"> 1</span></td>                     <!-- Ячейка с названием теста -->                     <td class="ZnoTestNameView" name="ZnoTestName" id="ZnoTestName">'+testTitle+'</td>                                  </tr>          </tbody></table>        </td>  </tr>    <!-- Строка таблицы с счетчиками ответов и оставшегося времени -->  <tr class="ZnoOuterTableRowCounterView" name="ZnoOuterTableRowCounter" id="ZnoOuterTableRowCounter">        <td>                  <!-- Внутренняя таблица со счетчиками ответов и оставшегося времени --><table class="ZnoInnerTableCounterView" name="ZnoInnerTableCounter" id="ZnoInnerTableCounter">                <tbody><tr>                    <!-- Ячейка со счетчиком ответов -->                    <td class="ZnoGivenAnswersView" name="ZnoGivenAnswers" id="ZnoGivenAnswers">Осталось заданий: <!-- Счетчик ответов --><span class="GivenAnswersView" name="GivenAnswers" id="GivenAnswers">46</span></td>                    <!-- Ячейка со счетчиком времени -->                    <td class="ZnoTimeLeftView" name="ZnoTimeLeft" id="ZnoTimeLeft">Осталось, мин: <span class="TimeLeftView" name="TimeLeft" id="TimeLeft">120</span></td>                </tr>          </tbody></table>        </td>                    </tr>    <!-- Строка таблицы с условиями задания -->  <tr class="ZnoOuterTableRowTaskView" name="ZnoOuterTableRowTask" id="ZnoOuterTableRowTask">    <td><div class="TaskView" name="Task" id="Task" style="position: relative;" onclick="imageIncrease()" align="center">               <img name="TaskImg" id="TaskImg" title="'+testTitle+'. Задание 1" alt="'+testTitle+'. Задание 1" src="'+sourceDir+'/task1.gif" width="500" align="center" height="250"><div id="TaskTip" align="center">Щелкните на картинке для увеличения</div></div>       </td>  </tr>    <!-- Строка таблицы с вариантами ответов -->  <tr class="ZnoOuterTableRowVariantView" name="ZnoOuterTableRowVariant" id="ZnoOuterTableRowVariant">                    </tr>    <!-- Строка таблицы с кнопками управления -->  <tr class="ZnoOuterTableControlView" name="ZnoOuterTableControl" id="ZnoOuterTableControl">    <td>      <!-- Внутренняя таблица с кнопками управления ходом тестирования: "далее" и "прервать тестирование" -->  		<table class="ZnoInnerTableControlView" name="ZnoInnerTableControl" id="ZnoInnerTableControl">        	<tbody><tr>            	<!-- ячейка с кнопкой "Пропустить задание" -->            	<td class="PassAnswerView" name="PassAnswer" id="PassAnswer">                <input value="Пропустить задание" name="PassAnswerButton" id="PassAnswerButton" onclick="userPass()" type="button">        <!-- ячейка с кнопкой "Начать тест/Далее" -->        		</td>            	<td class="ResumeTestView" name="ResumeTest" id="ResumeTest"><input value="Подтвердить ответ" name="ResumeTestButton" id="ResumeTestButton" onclick="nextTask()" type="button"></td>        <!-- ячейка с кнопкой "Прервать тест" -->          		<td class="StopTestView" name="StopTest" id="StopTest">                <input value="завершить тест" name="StopTestButton" id="StopTestButton" onclick="resultReport()" type="button" align="right">		                </td>                  	</tr>                    </tbody></table>    </td>  </tr>';
 document.getElementById("ZnoOuterTable").innerHTML=tableConstructor;
}

