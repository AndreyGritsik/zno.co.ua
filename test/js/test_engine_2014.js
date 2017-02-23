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
/*var multiselection_variant=7;*/
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
            document.getElementById("WordCounter").innerHTML=textEnteredWordNumber+wordNumber;
            taskArray[currentTaskCounter].userAnswer=wordNumber+1;
        }
    }
    else
    {
        document.getElementById("WordCounter").innerHTML=textEnteredWordNumber+wordNumber;
        taskArray[currentTaskCounter].userAnswer=wordNumber;
    }
}// end of checkWordNumber()
/*функция увеличения изображения задания*/
function imageIncrease()
{
    if((currentTaskCounter!=-1))
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
        tip.innerHTML=textPressDecreasePicture;
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
        document.getElementById("bkLink").appendChild(tsk.view.bigImg);
        document.getElementById("bkLink").appendChild(tip);
    
    }
}// end of imageIncrease()

function imageDecrease()
{
    var bigImage=document.getElementById("bigImage");
    bigImage.parentNode.removeChild(bigImage);
}// end of imageDecrease()

/*функция замены в окне текстового задания на картинку*/

function showPictureforTable(){
	if(currentTaskCounter!=-1)
    {
        var taskNode=document.getElementById("Task");
		var tsk=taskArray[currentTaskCounter];
		taskNode.innerHTML=tsk.view.showPicture();
			
    }
}

function showTableForPicture(){
	if(currentTaskCounter!=-1)
    {
        var taskNode=document.getElementById("Task");
		var tsk=taskArray[currentTaskCounter];
		taskNode.innerHTML=tsk.view.buildHTML();		
    }
}


/**/
/*Конструктор объектов типа представление вопроса в тесте, 
*/
function increaseImage(image){
	image.style.width="100%";
}

function decreaseImage(image){
	{
		image.style.width="50%";
	}
}

function view(initTitle,initNumber,initPath,initTypeView,initNumberVar, initDirection, initLang, initVarArray,initName)
{
	this.isBigImagePermitted=0;//разрешено ли увеличение рисунка условия 1-да, 0-нет
	this.title=initTitle;//название теста
	this.number=initNumber;//порядковый номер теста
	this.path=initPath;//путь к каталогу с картинками
	this.typeView=initTypeView;//тип представления: table, picture, table_picture
	this.numberVar=initNumberVar;//количество вариантов ответов
	this.name=initName;//название теста, если номер не подходит
	if(initName=="") this.name=this.number;
	this.direction=initDirection;//направление расположения ответов: horizontal, vertical
	this.lang=initLang;
	this.varArray=initVarArray;//массив вараинтов ответов varArray[0] - условие задания
	this.question=this.varArray[0];//Текст вопроса
	//функция построения HTML кода вопроса
	this.buildHTML=function(){
		var imageCode = '<div class="thumbnail"><img class="taskImgClass img-responsive" id="TaskImg" align="middle" '+'src="'+this.path+"task"+this.number+'.gif"'+' alt="'+this.title+textTask+this.number+'" title="'+this.title+textTask+this.number+	
		'" name="TaskImg" ';
		var testHolder=document.getElementById("testHolder");
		if((testHolder.classList.contains("fullsize-image"))||(screen.width<500))
		{
			imageCode+='></div>';
		} else {
			imageCode+='onmouseover="increaseImage(this)" onmouseout="decreaseImage(this)">		<div class="caption"><p class="imageTip">'+textPressIncreasePicture+'</p></div></div>';
		}		
		var HTMLcode='';
		if(this.typeView=="picture")//будет ли задание в виде картинки
		{
			HTMLcode=imageCode;
		}
		if((this.typeView=="table")||(this.typeView=="table_picture"))
		{
			this.isBigImagePermitted=0;
			if(this.typeView=="table_picture")
			{
				HTMLcode=imageCode;
			}
			HTMLcode+='<table id="TaskTableHolder" class="taskTable table table-bordered " >';
			if(this.direction=="horizontal")
			{
				HTMLcode+='<tr class="active taskQuestion"><td colspan="'+this.numberVar+'">'+this.question+'</td></tr>';
				HTMLcode+='<tr class="info horVariantLetter">';
				for(i=1;i<this.numberVar+1;i++)
				{	
					HTMLcode+='<td width="'+Math.floor(100/this.numberVar)+'%">'
					if(this.lang=="rus"){
						HTMLcode+=String.fromCharCode(1040+i-1);
					}
					else
					{
						HTMLcode+=String.fromCharCode(65+i-1);	
					}
					HTMLcode+='</td>';				
				}
				HTMLcode+='</tr><tr class="warning horVariantAnswer">';
				for(i=1;i<this.numberVar+1;i++)
				{	
					HTMLcode+='<td>'
					HTMLcode+=this.varArray[i];
					HTMLcode+='</td>';				
				}
				HTMLcode+='</tr>';
			}
			if(this.direction=="vertical")
			{
				HTMLcode+='<tr class="taskQuestion active" ><td colspan="2">'+this.question+'</td></tr>';
				for(i=1;i<this.numberVar+1;i++)
				{
					HTMLcode+='<tr class="vertAnswers">';
					HTMLcode+='<td class="vertVariantLetter info">';
					if(this.lang=="rus"){
						HTMLcode+=String.fromCharCode(1040+i-1);
					}
					else
					{
						HTMLcode+=String.fromCharCode(65+i-1);	
					}
					HTMLcode+='.</td><td class="vertVariantAnswer warning">'+this.varArray[i]+'</td></tr>';
				}
			}
			HTMLcode+='</table>';
		}
		if((this.typeView=="multiselect")||(this.typeView=="multiselect_picture"))
		{
			this.isBigImagePermitted=0;
			if(this.typeView=="multiselect_picture")
			{
				HTMLcode=imageCode;
			}
			HTMLcode+='<table id="TaskTableHolder" class="taskTable table table-bordered">';
			HTMLcode+='<tr class="taskQuestion active" ><td colspan="2">'+this.question+'</td></tr>';
			for(i=1;i<this.varArray.length;i++)
				{			
						HTMLcode+='<tr class="vertAnswers">';
						HTMLcode+='<td class="info vertVariantLetter">';
						if(this.direction=="numeric")
						{
							HTMLcode+=i;
						}
						if(this.direction=="alphabetic")
						{	
							if(this.lang=="rus"){
								HTMLcode+=String.fromCharCode(1040+i-1);
							}
							else
							{
								HTMLcode+=String.fromCharCode(65+i-1);	
							}
						}
						HTMLcode+='.</td><td class="warning vertVariantAnswer">'+this.varArray[i]+'</td></tr>';				
				}
			HTMLcode+='</table>';
		}

		if((this.typeView=="connection")||(this.typeView=="connection_picture"))
		{
			HTMLcode='';
			if(this.typeView=="connection_picture")
			{
				HTMLcode+=imageCode;
			}
			HTMLcode+='<table id="TaskTableHolder" class="taskTable table table-bordered">';
			HTMLcode+='<tr class="taskQuestion active"><td colspan="2">'+this.question+'</td></tr>';
			//вставка внутренней таблицы с вариантами вопросов
			HTMLcode+='<tr><td><table class="questionColumn table">';
			for(i=1;i<this.numberVar;i++)
			{	
				HTMLcode+='<tr><td class="questionColumnNumber info">'+i+'.</td>';
				HTMLcode+='<td class="questionColumnText warning">'+this.varArray[i]+'</td></tr>';
			}
			HTMLcode+='</table></td>';
			//вставка внутренней таблицы с вариантами ответов
			HTMLcode+='<td><table class="answerColumn table">';
			for(i=1;i<this.numberVar+1;i++)
			{	
				HTMLcode+='<tr><td class="answerColumnNumber info">';
				if(this.lang=="rus")
					{
						HTMLcode+=String.fromCharCode(1040+i-1);
					}
					else
					{
						HTMLcode+=String.fromCharCode(65+i-1);	
					}
				HTMLcode+='.</td><td class="answerColumnText warning">'+this.varArray[i+this.numberVar-1]+'</td></tr>';
			}
			HTMLcode+='</table></td>';
			HTMLcode+='</table>';
		}
		if((this.typeView=="singleText")||(this.typeView=="singleText_picture"))
		{
			HTMLcode='<table id="TaskTableHolder" class="taskTable table table-bordered">';
			HTMLcode+='<tr class="taskQuestion active"><td>'+this.question+'</td></tr></table>';
			if(this.typeView=="singleText_picture")
			{
				HTMLcode+=imageCode;
			}
		}
		return HTMLcode;
	}
	this.showPicture=function(){
		this.isBigImagePermitted=1;
		var HTMLcode=imageCode;
			return HTMLcode;
	}
}

/*Конструктор объектов типа "Тест", */
/*параметры инициализации: тип теста, 
балл за правильный ответ, 
правильный ответ, представление задания
*/

function task(initType,initMark,initAnswer,initView)
{
    this.type=initType;
    this.view=initView;
    
    if(this.type=="numeric")
    {
        this.answer=1000*initAnswer;
    }
    else
    {
        this.answer=initAnswer;	
    }
    this.userAnswer="pass";                               /*пользовательский ответ на задание теста*/ 
    this.isCorrectAnswer=false;						  /*флаг правильности ответа */
    this.mark=initMark;                               /* балл за правильный ответ*/
    this.userMark=0;								   /* балл пользователя*/
	
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
	    /*метод вычисления правильности ответа с анализом текста ЗНО-2015*/
    this.checkTextanalysisTvir=function()
    {
        var optWordNum = this.answer;
	   var minWorNum = optWordNum-10; 	
		
	  if (this.userAnswer<=optWordNum)
        {
            if (this.userAnswer>minWorNum)
            {
                this.userMark=Math.round(this.mark*(1-(optWordNum-this.userAnswer)/(optWordNum-minWorNum))); 
            }
            else
            {
                this.userMark=0;
            }
        }
        else
        {
            this.userMark=Math.round(this.mark*Math.exp((optWordNum-this.userAnswer)/optWordNum));	
        }
        this.isCorrectAnswer=true;
    }//end of this.checkTextanalysisTvir()
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
		   case "textanalysis_tvir":
                this.checkTextanalysisTvir();
                break;
            case "componate":
                this.checkComponate();
                break;
            case "multiselection":
                this.checkMultiselection();
                break;			
            default:
                alert(textWrongTestType);
                break;
        }
	
		
    }//end of this.checkAnswer()
//
}//end of Task constructor

function startInitialization(){
	/*Завершение инициализации тестов*/
	/*Заполнение поля дано ответов*/
		buildTestTable(testTitle, testDetails, testLength, testTime);
		taskLoader(taskArray[currentTaskCounter]);
		/*установка счетчика времени*/
		isTestingFlag=1;
		timing();
}	


/*Функция загрузки данных теста в форму*/
function taskLoader(curTask)
{
     currentTaskCounter=curTask.view.number-1;
	var currentTaskMark=curTask.mark;
	document.getElementById("Task").innerHTML=curTask.view.buildHTML();
     var selectHTML="<label for='selectTaskNumber'>"+moveToTaskText+"</label><select class='selectTaskNumberView form-control' id='selectTaskNumber' size='"+selectVariantSize+"' onclick='nexTaskByNumber()'>";
    var listCounter=0;
    for(i=0;i<testLength;i++)
	{
		/*Не учитывать правильные задания из предыдущей попытки*/
		if(taskArray[i].userAnswer=="pass_count") {
			continue;
		}
		if((taskArray[i].userAnswer=="")||(taskArray[i].userAnswer=="pass"))
		{
		  listCounter++;
		  if(i==curTask.view.number-1)
		   {
			selectHTML+="<option selected value="+i+">"+taskArray[i].view.name+"</option>"; 
		   }
		   else
		   {
			selectHTML+="<option value='"+i+"'>"+taskArray[i].view.name+"</option>"; 	
		   }
		}
	}
	selectHTML+="</select>";
	if(listCounter==0) {
	selectHTML="";
	}
    document.getElementById("ZnoTaskNumber").innerHTML=textTaskNumber+'<!--'+textTaskNumberCounter+' --><span class="blueNumber" id="TaskNumber" name="TaskNumberCounter"> '+curTask.view.name+'<br/> ('+curTask.mark+textMark+')</span></td>';
	document.getElementById("selectTask").innerHTML=selectHTML;
    document.getElementById("GivenAnswers").innerHTML=testLength-answerCounter;
    /*построение строки ответов для тестов разных типов*/
    switch(curTask.type)
    {
        case "test":
            buildTest(answerLanguage);
            break;
        case "textanalysis":
            buildTextAnalysis(answerLanguage);
            break;
        case "numeric":
            buildNumeric(isSignedNumeric,olderNumericDigits,juniorNumericDigits);
            break;
        case "connect":
            buildConnect(curTask.answer.length);
            break;
        case "order":
            buildOrder(curTask.answer.length);
            break;
        case "ordernew":
            buildOrder(curTask.answer.length);
            break;
        case "free":
            buildFree();
            break;
        case "tvir":
            buildTvir();
            break;
	   case "textanalysis_tvir":
            buildTextAnalysisTvir();
            break;
        case "textual":
            buildTextual();
            break;
        case "componate":
            buildComponate(curTask.answer.length);
            break;
        case "multiselection":
		if(curTask.view.varArray.length>1){
			buildMultiselection(curTask.answer.length,curTask.view.varArray.length-1);
		} else {
			buildMultiselection(curTask.answer.length,multiselection_variant);
		}
            break;
        default:
            alert(textWrongTestType);
            break;
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
        /*не учитывать правильные задания из предыдущей попытки*/
	   if(taskArray[i].userAnswer =="pass_count") {
		continue;
	   }
	   totalMark+=1*taskArray[i].mark;
        userTotalMark+=1*taskArray[i].userMark;
        if(taskArray[i].userAnswer!="pass")
        {
            totalAnswer+=1;
            if(taskArray[i].isCorrectAnswer==true)
            {
                totalCorrectAnswer+=1;
                correctAnswerText+='№ '+taskArray[i].view.name+' (+'+taskArray[i].userMark+textMark+')<br/>';
			/*Исключить задание при прохождении теста только по неправильным ответам*/
			 taskArray[i].userAnswer="pass_count";			 
            }
            else
            {
                nonCorrectAnswerText+=taskArray[i].view.name+", ";
            }
        }
        else
        {
            totalPass+=1;
            passAnswerText+=taskArray[i].view.name+", ";
        }
	
    }
    if(totalCorrectAnswer>0)
    {
        correctAnswerText+='<br/>';
    }
	correctAnswerCounter = totalCorrectAnswer;
	nonCorrectAnswerText = nonCorrectAnswerText.replace(/,\s*$/, "");
	passAnswerText = passAnswerText.replace(/,\s*$/, "");
	buildResultTable(testOficialTitle);
    document.getElementById("ZnoResultTotalAnswerNumber").innerHTML=totalAnswer;
    document.getElementById("ZnoResultPassedNumber").innerHTML=totalPass;
    document.getElementById("ZnoResultCorrectAnswerNumber").innerHTML=correctAnswerText+totalCorrectAnswer+" "+textCorrectAnswers+"<br/>"+userTotalMark+" "+textFrom+" "+totalMark+" "+textMarks+"</br>"+textCollected+" "+Math.round(userTotalMark/totalMark*100)+"% "+textMarks;
    /*цвет балла ЗНО в зависимости от колличества набранных баллов*/
    if((gradeArray[userTotalMark]>=100)&&(gradeArray[userTotalMark]<=112.5))
    {
        document.getElementById("ZnoResultGradeNumber").style.color="black";
    }
    if((gradeArray[userTotalMark]>=112.6)&&(gradeArray[userTotalMark]<=125))
    {
        document.getElementById("ZnoResultGradeNumber").style.color="darkviolet";
    }
    if((gradeArray[userTotalMark]>=125.1)&&(gradeArray[userTotalMark]<=137.5))
    {
        document.getElementById("ZnoResultGradeNumber").style.color="navy";
    }
    if((gradeArray[userTotalMark]>=137.6)&&(gradeArray[userTotalMark]<=150))
    {
        document.getElementById("ZnoResultGradeNumber").style.color="royalblue";
    }
    if((gradeArray[userTotalMark]>=150.1)&&(gradeArray[userTotalMark]<=162.5))
    {
        document.getElementById("ZnoResultGradeNumber").style.color="green";
    }
    if((gradeArray[userTotalMark]>=162.6)&&(gradeArray[userTotalMark]<=175))
    {
        document.getElementById("ZnoResultGradeNumber").style.color="goldenrod";
    }
    if((gradeArray[userTotalMark]>=175.1)&&(gradeArray[userTotalMark]<=187.5))
    {
        document.getElementById("ZnoResultGradeNumber").style.color="darkorange";
    }
    if((gradeArray[userTotalMark]>=187.6)&&(gradeArray[userTotalMark]<=200))
    {
        document.getElementById("ZnoResultGradeNumber").style.color="red";
    }
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
            alert(textTimeOver);
            clearTimeout();
            resultReport();
        }
        else
        {
            if (timeCounter<300)
            {
                document.getElementById("ZnoTimeLeft").innerHTML=textLeftSeconds+': <span class="blueNumber" name="TimeLeft" id="TimeLeft">'+timeCounter+'</span>';
            }
            else
            {
                var curMin=Math.ceil(timeCounter/60);
                document.getElementById("ZnoTimeLeft").innerHTML=textLeftMin+': <span class="blueNumber" name="TimeLeft" id="TimeLeft">'+curMin+'</span>';
            }
            timeCounter-=1;
            timer=setTimeout('timing()',1000);
        }
    }/*if(isTestingFlag==1)*/
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
    /*�?щем символы в нижнем регистре*/
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
    /*�?щем символы в верхнем регистре*/
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
                alert(textInputField+" А!");
                valueA.focus();
            }
            else{
                if(valueB.value=="")
                {
                    alert(textInputField+" B!");
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
                alert(textInputField+" А!");
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
                alert(textInputField+" А!");
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
                alert(textInputField+" А!");
                valueA.focus();
            }
            else{
                if(valueB.value=="")
                {
                    alert(textInputField+" B!");
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
                alert(textInputField+" А!");
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
    var tableConstructor='';
    for(var i=0;i<varNum;i++)
    {
		tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">';	
        if (languageOfList=="rus")
        {
            tableConstructor+=String.fromCharCode(1040+i);
        }
        else
        {
            tableConstructor+=String.fromCharCode(65+i);
        }
		tableConstructor+='<br/><input type="radio" id="Variant'+String.fromCharCode(65+i)+'" name="Variant" value="'+String.fromCharCode(97+i)+'"/></div>';
    }
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
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
	var tableConstructor='<textarea rows="6" class="form-control" id="FullTextArea" name="FullTextArea" disabled="">'+textAnalysisArray[currentTaskCounter]+'</textarea>';
    for(var i=0;i<varNum;i++)
    {
		tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">';	
        if (languageOfList=="rus")
        {
            tableConstructor+=String.fromCharCode(1040+i);
        }
        else
        {
            tableConstructor+=String.fromCharCode(65+i);
        }
		tableConstructor+='<br/><input type="radio" id="Variant'+String.fromCharCode(65+i)+'" name="Variant" value="'+String.fromCharCode(97+i)+'"/></div>';
    }
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
/*document.getElementById("ZnoVariantTest").innerHTML=tableConstructor;*/
		
}
/*функция построения короткого высказывания*/
function buildTextAnalysisTvir ()
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
	var tableConstructor='<textarea rows="6" class="form-control" id="FullTextArea" name="FullTextArea" disabled="">'+textAnalysisArray[currentTaskCounter]+'</textarea>';
	tableConstructor+='<div align="center" style="width:100%; text-align:center; clear:both;">'+textInputAnswer+':</div><div align="center" style="width:100%; text-align:center; clear:both;"><textarea rows="4"  onkeyup="checkWordNumber()" id="TvirText" name="TvirText" class="form-control"></textarea></div><div align="center" style="width:100%; text-align:center; clear:both;" id="WordCounter" name="WordCounter" class="WordCounterView"></div>';
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;	
}

//построение ячейки для ввода слова 
function buildTextual()
{
    var tableConstructor='<textarea rows="6" class="form-control" id="FullTextArea" name="FullTextArea" disabled="">'+textAnalysisArray[currentTaskCounter]+'</textarea>';
    tableConstructor+='<div class="TextEnterCell">'+textOneWordAnswer+':</div><input type="text" class="form-control" id="TextualField" name="TextualField" value="">';
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
/*document.getElementById("ZnoTextual").innerHTML=tableConstructor;*/
}
//построение ячейки для ввода числа иницализируется: со знаком или без, колличеством разрядов до запятой,  колличеством после запятой
function buildNumeric(isSigned,beforeDotNumber,afterDotNumber)
{
    var tableConstructor='<div class="ZnoVariantNumberView" name="ZnoVariantNumber" id="ZnoVariantNumber"><!-- поле для ввода числового ответа: селектор знака, четыре односимвольных поля до запятой и два после запятой -->'+textInputAnswer+':<br/>';
    /*добавление поля выбора знака ответа*/
    if (isSigned==true)
    {
        tableConstructor+='<select name="AnswerSign" id="AnswerSign" class="answerSignView"><option value="positive" selected="selected">+</option><option value="negative">-</option></select>';
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
    tableConstructor+='</div>';
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
    var tableConstructor='<div class="ZnoVariantNumberView container-fluid" name="ZnoVariantNumber" id="ZnoVariantNumber" align="center"><div class="row"><div class="col-sm-12">'+textInputAnswer+':</div></div><div class="row"><div class="col-sm-4"><div class="input-group"><span class="input-group-addon" id="NumberAnswer1">'+textFrom+' 1'+textFromGroup+': </span><input type="num" size="1" maxlength="1" value="" name="NumberAnswer1" id="NumberAnswer1" class="numberAnswerView form-control"/></div></div>';
    for (var i=2;i<varNum+1;i++)
    {
        tableConstructor+='<div class="col-sm-4"><div class="input-group"><span class="input-group-addon" id="NumberAnswer'+i+'">'+textFrom+' '+i+' '+textFromGroup+': </span><input type="num" size="1" maxlength="1" value="" name="NumberAnswer'+i+'" id="NumberAnswer'+i+'" class="numberAnswerView form-control"/></div></div>';
    }
    tableConstructor+='</div></div>';
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
//построение ячейки для выбора вариантов связывания 
function buildConnect(connectNum)
{
    var tableConstructor='';
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
        tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">'+i+':<br /><select name="connect'+i+'" size="'+(varNum+1)+'" id="connect'+i+'" style="width:auto;">';
        for(var j=0;j<varNum+1;j++)
        {
            tableConstructor+='<option value="'+String.fromCharCode(97+j)+'">'+String.fromCharCode(1040+j)+'</option>';
        }
        tableConstructor+='</select></div>';
    }
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
        tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/varNum)+'%;">'+i+':<br /><select name="connect'+i+'" size="'+varNum+'" id="connect'+i+'" style="width:auto;">';
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
    var tableConstructor='';
    for(var i=1;i<chNum+1;i++)
    {
        tableConstructor+='<div class="answerItemStyle" style="width:'+Math.floor(100/chNum)+'%;">'+i+':<br /><select name="connect'+i+'" size="'+varNum+'" id="connect'+i+'" style="width:auto;">';
        for(var j=0;j<varNum;j++)
        {
            tableConstructor+='<option value="'+String.fromCharCode(97+j)+'">'+(j+1)+'</option>';
        }
        tableConstructor+='</select></div>';
    }
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;		
}
function clearField(name){
	document.getElementById(name).innerHTML="";
}
//построение ячейки ответа в свободном виде - с редактором мат. формул
function buildFree()
{
	
    /*var tableConstructor='
	<td>
		<div align="center" style="width:100%; text-align:center; clear:both;">'+textInputAnswer+':</div>
		<div id="divAnsDiv" style="float:left; width:90%;" ><span id="ansDiv" data-toggle="tooltip" data-placement="top"  title="'+textBuildAnswerAdvice++'"></span></div>
		<div id="helperDiv" align="center" style="float:left; width:8%;"> 
			<input type="button" value="&laquo;" onclick=\'clearField("ansDiv"); clearField("FreeAnswerText");\' style="position:relative;" data-toggle="tooltip" data-placement="top"  title="'+textClearAnswerField+'"/> <a href="#" style="position:relative;" onMouseOver="advise.show("'+textBuildAnswerAdvice+' ",document.getElementById("infotip").offsetLeft,document.getElementById("infotip").offsetTop)" onMouseOut="advise.hide()" id="infotip">?</a></div><input type="hidden" size="55" class="FreeAnswerTextView" name="FreeAnswerText" id="FreeAnswerText" /><div align="center" style="width:100%; text-align:center; clear:both;">'+textAddExpression+':</div><div align="center" style="width:100%; text-align:left;">A=                   <input type="text" maxlength="40" size="40" name="fieldA" id="fieldA" />                   <input type="button" value="&uarr;" onclick="addSymbol("textA")" style="position:relative;" onMouseOver="advise.show("'+textAddToAnswer+'",document.getElementById("addAButton").offsetLeft,document.getElementById("addAButton").offsetTop)" onMouseOut="advise.hide()" id="addAButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById("fieldA").value=""" style="position:relative;" onMouseOver="advise.show("'+textClearField+' А",document.getElementById("clearAButton").offsetLeft,document.getElementById("clearAButton").offsetTop)" onMouseOut="advise.hide()" id="clearAButton"/>  </div><div align="center" style="width:100%; text-align:left;">B=                   <input type="text" maxlength="40" size="40" name="fieldB" id="fieldB" />                   <input type="button" value="&uarr;" onclick="addSymbol("textB")" style="position:relative;" onMouseOver="advise.show("'+textAddToAnswer+'",document.getElementById("addBButton").offsetLeft,document.getElementById("addBButton").offsetTop)" onMouseOut="advise.hide()" id="addBButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById("fieldB").value=""" style="position:relative;" onMouseOver="advise.show("'+textClearField+' B",document.getElementById("clearBButton").offsetLeft,document.getElementById("clearBButton").offsetTop)" onMouseOut="advise.hide()" id="clearBButton" />             	   </div><div align="center" style="width:100%; text-align:left;">C=                   <input type="text" maxlength="40" size="40" name="fieldC" id="fieldC" />                   <input type="button" value="&uarr;" onclick="addSymbol("textC")" style="position:relative;" onMouseOver="advise.show("'+textAddToAnswer+'",document.getElementById("addCButton").offsetLeft,document.getElementById("addCButton").offsetTop)" onMouseOut="advise.hide()" id="addCButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById("fieldC").value="" style="position:relative;" onMouseOver="advise.show("'+textClearField+' C",document.getElementById("clearCButton").offsetLeft,document.getElementById("clearCButton").offsetTop)" onMouseOut="advise.hide()" id="clearCButton" />             	   </div><div align="center" style="width:100%; text-align:center; clear:both;">'+textAddSymbol+':</div><div style="float:left; width:80%;"><input type="button" value="&alpha;" onclick="addSymbol("alpha")" style="position:relative;" onMouseOver="advise.show("'+textLetter+' АЛЬФА",document.getElementById("alphaButton").offsetLeft,document.getElementById("alphaButton").offsetTop)" onMouseOut="advise.hide()" id="alphaButton"/>                   <input type="button" value="&beta;" onclick="addSymbol("beta")" style="position:relative;" onMouseOver="advise.show("'+textLetter+' БЕТТА",document.getElementById("betaButton").offsetLeft,document.getElementById("betaButton").offsetTop)" onMouseOut="advise.hide()" id="betaButton"/>                   <input type="button" value="&gamma;" onclick="addSymbol("gamma")" style="position:relative;" onMouseOver="advise.show("'+textLetter+' ГАММА",document.getElementById("gammaButton").offsetLeft,document.getElementById("gammaButton").offsetTop)" onMouseOut="advise.hide()" id="gammaButton" />                   <input type="button" value="&Pi;" onclick="addSymbol("pi")" style="position:relative;" onMouseOver="advise.show("'+textPiNumber+'",document.getElementById("piButton").offsetLeft,document.getElementById("piButton").offsetTop)" onMouseOut="advise.hide()" id="piButton" />                   <input type="button" value="&phi;" onclick="addSymbol("phi")" style="position:relative;" onMouseOver="advise.show("'+textLetter+' ФИ",document.getElementById("phiButton").offsetLeft,document.getElementById("phiButton").offsetTop)" onMouseOut="advise.hide()" id="phiButton"/>                   <input type="button" value="&infin;" onclick="addSymbol("infinity")" style="position:relative;" onMouseOver="advise.show("'+textInfinitySign+'",document.getElementById("infinityButton").offsetLeft,document.getElementById("infinityButton").offsetTop)" onMouseOut="advise.hide()" id="infinityButton"/>                   <input type="button" value="&deg;" onclick="addSymbol("deg")" style="position:relative;" onMouseOver="advise.show("'+textDegrees+'", document.getElementById("degButton").offsetLeft, document.getElementById("degButton").offsetTop)" onMouseOut="advise.hide()" id="degButton"/>                   <input type="button" value="&Oslash;" onclick="addSymbol("emptyEnt")" style="position:relative;" onMouseOver="advise.show("'+textEmptySet+'", document.getElementById("empEntButton").offsetLeft, document.getElementById("empEntButton").offsetTop)" onMouseOut="advise.hide()" id="empEntButton"/>                   <input type="button" value="&isin;" onclick="addSymbol("isIn")" style="position:relative;" onMouseOver="advise.show("'+textBelongSymbol+'", document.getElementById("isInButton").offsetLeft, document.getElementById("isInButton").offsetTop)" onMouseOut="advise.hide()" id="isInButton"/>                   <input type="button" value="[" onclick="addSymbol("leftSq")" />                   <input type="button" value="]" onclick="addSymbol("rightSq")" />                   <input type="button" value="(" onclick="addSymbol("leftRnd")" />                   <input type="button" value=")" onclick="addSymbol("rightRnd")" />                   <input type="button" value="{" onclick="addSymbol("{")" />                   <input type="button" value="}" onclick="addSymbol("}")" />                   <input type="button" value=";" onclick="addSymbol(";")"  style="position:relative;" onMouseOver="advise.show("'+textBracket+'",document.getElementById("semiButton").offsetLeft,document.getElementById("semiButton").offsetTop)" onMouseOut="advise.hide()" id="semiButton"/>                   <input type="button" value="." onclick="addSymbol(".")"  style="position:relative;" onMouseOver="advise.show("'+textDecimalPoint+'",document.getElementById("dotButton").offsetLeft,document.getElementById("dotButton").offsetTop)" onMouseOut="advise.hide()" id="dotButton"/>                   <input type="button" value="=" onclick="addSymbol("isEqual")" style="position:relative;" onMouseOver="advise.show("'+textEquals+'",document.getElementById("isEqualButton").offsetLeft,document.getElementById("isEqualButton").offsetTop)" onMouseOut="advise.hide()" id="isEqualButton"/>                   <input type="button" value="+" onclick="addSymbol("plus")" style="position:relative;" onMouseOver="advise.show("'+textAddSymbol+'",document.getElementById("plusButton").offsetLeft,document.getElementById("plusButton").offsetTop)" onMouseOut="advise.hide()" id="plusButton"/>                   <input type="button" value="-" onclick="addSymbol("minus")" style="position:relative;" onMouseOver="advise.show("'+textMinusSymbol+'",document.getElementById("minusButton").offsetLeft,document.getElementById("minusButton").offsetTop)" onMouseOut="advise.hide()" id="minusButton"/>                   <input type="button" value="&times;" onclick="addSymbol("multiply")" style="position:relative;" onMouseOver="advise.show("'+textMultiplySymbol+'",document.getElementById("multiplyButton").offsetLeft,document.getElementById("multiplyButton").offsetTop)" onMouseOut="advise.hide()" id="multiplyButton"/>                   <input type="button" value="&#58;" onclick="addSymbol("divide")" style="position:relative;" onMouseOver="advise.show("'+textDivideSymbol+'",document.getElementById("divideButton").offsetLeft,document.getElementById("divideButton").offsetTop)" onMouseOut="advise.hide()" id="divideButton"/>                   <input type="button" value="U" onclick="addSymbol("U")" style="position:relative;" onMouseOver="advise.show("'+textUnionSymbol+'",document.getElementById("unionButton").offsetLeft,document.getElementById("unionButton").offsetTop)" onMouseOut="advise.hide()" id="unionButton"/>                   <input type="button" value="&cap;" onclick="addSymbol("intersection")" style="position:relative;" onMouseOver="advise.show("'+textIntersection+'",document.getElementById("intSectButton").offsetLeft,document.getElementById("intSectButton").offsetTop)" onMouseOut="advise.hide()" id="intSectButton"/>                   <input type="button" value="ln" onclick="addSymbol("ln")" style="position:relative;" onMouseOver="advise.show("'+textLn+'",document.getElementById("lnButton").offsetLeft,document.getElementById("lnButton").offsetTop)" onMouseOut="advise.hide()" id="lnButton"/>                   <input type="button" value="lg" onclick="addSymbol("lg")" style="position:relative;" onMouseOver="advise.show("'+textLg+'",document.getElementById("lgButton").offsetLeft,document.getElementById("lgButton").offsetTop)" onMouseOut="advise.hide()" id="lgButton"/>                   <input type="button" value="log" onclick="addSymbol("log")" style="position:relative;" onMouseOver="advise.show("'+textLog+'",document.getElementById("lоgButton").offsetLeft,document.getElementById("lоgButton").offsetTop)" onMouseOut="advise.hide()" id="lоgButton"/>                                      <input type="button" value="sin" onclick="addSymbol("sin")" style="position:relative;" onMouseOver="advise.show("'+textSin+'",document.getElementById("sinButton").offsetLeft,document.getElementById("sinButton").offsetTop)" onMouseOut="advise.hide()" id="sinButton"/>                    <input type="button" value="cos" onclick="addSymbol("cos")" style="position:relative;" onMouseOver="advise.show("'+textCos+'",document.getElementById("cosButton").offsetLeft,document.getElementById("cosButton").offsetTop)" onMouseOut="advise.hide()" id="cosButton"/>                    <input type="button" value="tg" onclick="addSymbol("tg")" style="position:relative;" onMouseOver="advise.show("'+textTg+'",document.getElementById("tgButton").offsetLeft,document.getElementById("tgButton").offsetTop)" onMouseOut="advise.hide()" id="tgButton"/>                    <input type="button" value="ctg" onclick="addSymbol("ctg")" style="position:relative;" onMouseOver="advise.show("'+textCtg+'",document.getElementById("ctgButton").offsetLeft,document.getElementById("ctgButton").offsetTop)" onMouseOut="advise.hide()" id="ctgButton"/>                    <input type="button" value="arcsin" onclick="addSymbol("arcsin")" style="position:relative;" onMouseOver="advise.show("'+textArcsin+'",document.getElementById("arcsinButton").offsetLeft,document.getElementById("arcsinButton").offsetTop)" onMouseOut="advise.hide()" id="arcsinButton"/>                   <input type="button" value="arccos" onclick="addSymbol("arccos")" style="position:relative;" onMouseOver="advise.show("'+textArccos+'",document.getElementById("arccosButton").offsetLeft,document.getElementById("arccosButton").offsetTop)" onMouseOut="advise.hide()" id="arccosButton"/>                     <input type="button" value="arctg" onclick="addSymbol("arctg")" style="position:relative;" onMouseOver="advise.show("'+textArctg+'",document.getElementById("arctgButton").offsetLeft,document.getElementById("arctgButton").offsetTop)" onMouseOut="advise.hide()" id="arctgButton"/>                     <input type="button" value="arcctg" onclick="addSymbol("arcctg")" style="position:relative;" onMouseOver="advise.show("'+textArcctg+'",document.getElementById("arcctgButton").offsetLeft,document.getElementById("arcctgButton").offsetTop)" onMouseOut="advise.hide()" id="arcctgButton"/>                   </div><div style="float:left; width:20%;"><select name="placeSelect" size="4" id="placeSelect"><option value="ans">'+textToAnswer+'</option><option value="a">'+textToField+' А</option><option value="b">'+textToField+' B</option>        <option value="c" selected="selected">'+textToField+' C</option></select></div><div align="center" style="width:100%; text-align:center; clear:both;">'+textAddToFieldCExpression+':</div><div align="center" style="width:100%; text-align:center; clear:both;"><input type="button" value="A^B" onclick="addSymbol("powAB")" style="position:relative;" onMouseOver="advise.show("'+textPowAB+'",document.getElementById("powButton").offsetLeft,document.getElementById("powButton").offsetTop)" onMouseOut="advise.hide()" id="powButton"/>                    <input type="button" value="&radic;A" onclick="addSymbol("sqrt")" style="position:relative;" onMouseOver="advise.show("'+textSqrtA+'",document.getElementById("sqrtButton").offsetLeft,document.getElementById("sqrtButton").offsetTop)" onMouseOut="advise.hide()" id="sqrtButton"/>                    <input type="button" value="LOGaB" onclick="addSymbol("logAB")" style="position:relative;" onMouseOver="advise.show("'+textLogAB+'", document.getElementById("logABButton").offsetLeft,document.getElementById("logABButton").offsetTop)" onMouseOut="advise.hide()" id="logABButton"/>                    <input type="button" value="&uarr;A" onclick="addSymbol("powA")" style="position:relative;" onMouseOver="advise.show("'+textPowA+'", document.getElementById("powAButton").offsetLeft,document.getElementById("powAButton").offsetTop)" onMouseOut="advise.hide()" id="powAButton"/>                    <input type="button" value="&darr;A" onclick="addSymbol("indexA")" style="position:relative;" onMouseOver="advise.show("'+textIndexA+'", document.getElementById("indexAButton").offsetLeft,document.getElementById("indexAButton").offsetTop)" onMouseOut="advise.hide()" id="indexAButton"/> </div></td>';*/
	var tableConstructor='<td><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textInputAnswer+':</div><div id=\"divAnsDiv\" style=\"float:left; width:90%;\"><span id=\"ansDiv\"></span></div><div id=\"helperDiv\" align=\"center\" style=\"float:left; width:8%;\"> <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'ansDiv\').innerHTML=\'\';document.getElementById(\'FreeAnswerText\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textClearAnswerField+'\',document.getElementById(\'clearAnsButton\').offsetLeft,document.getElementById(\'clearAnsButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearAnsButton\"/> <a href=\"#\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textBuildAnswerAdvice+' \',document.getElementById(\'infotip\').offsetLeft,document.getElementById(\'infotip\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"infotip\">?</a></div><input type=\"hidden\" size=\"55\" class=\"FreeAnswerTextView\" name=\"FreeAnswerText\" id=\"FreeAnswerText\" /><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textAddExpression+':</div><div align=\"center\" style=\"width:100%; text-align:left;\">A=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldA\" id=\"fieldA\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textAddToAnswer+'\',document.getElementById(\'addAButton\').offsetLeft,document.getElementById(\'addAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addAButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldA\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textClearField+' А\',document.getElementById(\'clearAButton\').offsetLeft,document.getElementById(\'clearAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearAButton\"/>  </div><div align=\"center\" style=\"width:100%; text-align:left;\">B=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldB\" id=\"fieldB\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textAddToAnswer+'\',document.getElementById(\'addBButton\').offsetLeft,document.getElementById(\'addBButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addBButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldB\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textClearField+' B\',document.getElementById(\'clearBButton\').offsetLeft,document.getElementById(\'clearBButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearBButton\" />             	   </div><div align=\"center\" style=\"width:100%; text-align:left;\">C=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldC\" id=\"fieldC\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textC\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textAddToAnswer+'\',document.getElementById(\'addCButton\').offsetLeft,document.getElementById(\'addCButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addCButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldC\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textClearField+' C\',document.getElementById(\'clearCButton\').offsetLeft,document.getElementById(\'clearCButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearCButton\" />             	   </div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textAddSymbol+':</div><div style=\"float:left; width:70%;\"><input type=\"button\" value=\"&alpha;\" onclick=\"addSymbol(\'alpha\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLetter+' АЛЬФА\',document.getElementById(\'alphaButton\').offsetLeft,document.getElementById(\'alphaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"alphaButton\"/>                   <input type=\"button\" value=\"&beta;\" onclick=\"addSymbol(\'beta\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLetter+' БЕТТА\',document.getElementById(\'betaButton\').offsetLeft,document.getElementById(\'betaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"betaButton\"/>                   <input type=\"button\" value=\"&gamma;\" onclick=\"addSymbol(\'gamma\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLetter+' ГАММА\',document.getElementById(\'gammaButton\').offsetLeft,document.getElementById(\'gammaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"gammaButton\" />                   <input type=\"button\" value=\"&Pi;\" onclick=\"addSymbol(\'pi\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textPiNumber+'\',document.getElementById(\'piButton\').offsetLeft,document.getElementById(\'piButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"piButton\" />                   <input type=\"button\" value=\"&phi;\" onclick=\"addSymbol(\'phi\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLetter+' ФИ\',document.getElementById(\'phiButton\').offsetLeft,document.getElementById(\'phiButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"phiButton\"/>                   <input type=\"button\" value=\"&infin;\" onclick=\"addSymbol(\'infinity\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textInfinitySign+'\',document.getElementById(\'infinityButton\').offsetLeft,document.getElementById(\'infinityButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"infinityButton\"/>                   <input type=\"button\" value=\"&deg;\" onclick=\"addSymbol(\'deg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textDegrees+'\', document.getElementById(\'degButton\').offsetLeft, document.getElementById(\'degButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"degButton\"/>                   <input type=\"button\" value=\"&Oslash;\" onclick=\"addSymbol(\'emptyEnt\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textEmptySet+'\', document.getElementById(\'empEntButton\').offsetLeft, document.getElementById(\'empEntButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"empEntButton\"/>                   <input type=\"button\" value=\"&isin;\" onclick=\"addSymbol(\'isIn\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textBelongSymbol+'\', document.getElementById(\'isInButton\').offsetLeft, document.getElementById(\'isInButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"isInButton\"/>                   <input type=\"button\" value=\"[\" onclick=\"addSymbol(\'leftSq\')\" />                   <input type=\"button\" value=\"]\" onclick=\"addSymbol(\'rightSq\')\" />                   <input type=\"button\" value=\"(\" onclick=\"addSymbol(\'leftRnd\')\" />                   <input type=\"button\" value=\")\" onclick=\"addSymbol(\'rightRnd\')\" />                   <input type=\"button\" value=\"{\" onclick=\"addSymbol(\'{\')\" />                   <input type=\"button\" value=\"}\" onclick=\"addSymbol(\'}\')\" />                   <input type=\"button\" value=\";\" onclick=\"addSymbol(\';\')\"  style=\"position:relative;\" onMouseOver=\"advise.show(\''+textBracket+'\',document.getElementById(\'semiButton\').offsetLeft,document.getElementById(\'semiButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"semiButton\"/>                   <input type=\"button\" value=\".\" onclick=\"addSymbol(\'.\')\"  style=\"position:relative;\" onMouseOver=\"advise.show(\''+textDecimalPoint+'\',document.getElementById(\'dotButton\').offsetLeft,document.getElementById(\'dotButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"dotButton\"/>                   <input type=\"button\" value=\"=\" onclick=\"addSymbol(\'isEqual\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textEquals+'\',document.getElementById(\'isEqualButton\').offsetLeft,document.getElementById(\'isEqualButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"isEqualButton\"/>                   <input type=\"button\" value=\"+\" onclick=\"addSymbol(\'plus\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textAddSymbol+'\',document.getElementById(\'plusButton\').offsetLeft,document.getElementById(\'plusButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"plusButton\"/>                   <input type=\"button\" value=\"-\" onclick=\"addSymbol(\'minus\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textMinusSymbol+'\',document.getElementById(\'minusButton\').offsetLeft,document.getElementById(\'minusButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"minusButton\"/>                   <input type=\"button\" value=\"&times;\" onclick=\"addSymbol(\'multiply\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textMultiplySymbol+'\',document.getElementById(\'multiplyButton\').offsetLeft,document.getElementById(\'multiplyButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"multiplyButton\"/>                   <input type=\"button\" value=\"&#58;\" onclick=\"addSymbol(\'divide\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textDivideSymbol+'\',document.getElementById(\'divideButton\').offsetLeft,document.getElementById(\'divideButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"divideButton\"/>                   <input type=\"button\" value=\"U\" onclick=\"addSymbol(\'U\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textUnionSymbol+'\',document.getElementById(\'unionButton\').offsetLeft,document.getElementById(\'unionButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"unionButton\"/>                   <input type=\"button\" value=\"&cap;\" onclick=\"addSymbol(\'intersection\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textIntersection+'\',document.getElementById(\'intSectButton\').offsetLeft,document.getElementById(\'intSectButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"intSectButton\"/>                   <input type=\"button\" value=\"ln\" onclick=\"addSymbol(\'ln\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLn+'\',document.getElementById(\'lnButton\').offsetLeft,document.getElementById(\'lnButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lnButton\"/>                   <input type=\"button\" value=\"lg\" onclick=\"addSymbol(\'lg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLg+'\',document.getElementById(\'lgButton\').offsetLeft,document.getElementById(\'lgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lgButton\"/>                   <input type=\"button\" value=\"log\" onclick=\"addSymbol(\'log\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLog+'\',document.getElementById(\'lоgButton\').offsetLeft,document.getElementById(\'lоgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lоgButton\"/>                                      <input type=\"button\" value=\"sin\" onclick=\"addSymbol(\'sin\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textSin+'\',document.getElementById(\'sinButton\').offsetLeft,document.getElementById(\'sinButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"sinButton\"/>                    <input type=\"button\" value=\"cos\" onclick=\"addSymbol(\'cos\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textCos+'\',document.getElementById(\'cosButton\').offsetLeft,document.getElementById(\'cosButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"cosButton\"/>                    <input type=\"button\" value=\"tg\" onclick=\"addSymbol(\'tg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textTg+'\',document.getElementById(\'tgButton\').offsetLeft,document.getElementById(\'tgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"tgButton\"/>                    <input type=\"button\" value=\"ctg\" onclick=\"addSymbol(\'ctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textCtg+'\',document.getElementById(\'ctgButton\').offsetLeft,document.getElementById(\'ctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"ctgButton\"/>                    <input type=\"button\" value=\"arcsin\" onclick=\"addSymbol(\'arcsin\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textArcsin+'\',document.getElementById(\'arcsinButton\').offsetLeft,document.getElementById(\'arcsinButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arcsinButton\"/>                   <input type=\"button\" value=\"arccos\" onclick=\"addSymbol(\'arccos\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textArccos+'\',document.getElementById(\'arccosButton\').offsetLeft,document.getElementById(\'arccosButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arccosButton\"/>                     <input type=\"button\" value=\"arctg\" onclick=\"addSymbol(\'arctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textArctg+'\',document.getElementById(\'arctgButton\').offsetLeft,document.getElementById(\'arctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arctgButton\"/>                     <input type=\"button\" value=\"arcctg\" onclick=\"addSymbol(\'arcctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textArcctg+'\',document.getElementById(\'arcctgButton\').offsetLeft,document.getElementById(\'arcctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arcctgButton\"/>                   </div><div style=\"float:left; width:20%;\"><select name=\"placeSelect\" size=\"4\" id=\"placeSelect\"><option value=\"ans\">'+textToAnswer+'</option><option value=\"a\">'+textToField+' А</option><option value=\"b\">'+textToField+' B</option>        <option value=\"c\" selected=\"selected\">'+textToField+' C</option></select></div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textAddToFieldCExpression+':</div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\"><input type=\"button\" value=\"A^B\" onclick=\"addSymbol(\'powAB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textPowAB+'\',document.getElementById(\'powButton\').offsetLeft,document.getElementById(\'powButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"powButton\"/>                    <input type=\"button\" value=\"&radic;A\" onclick=\"addSymbol(\'sqrt\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textSqrtA+'\',document.getElementById(\'sqrtButton\').offsetLeft,document.getElementById(\'sqrtButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"sqrtButton\"/>                    <input type=\"button\" value=\"LOGaB\" onclick=\"addSymbol(\'logAB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLogAB+'\', document.getElementById(\'logABButton\').offsetLeft,document.getElementById(\'logABButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"logABButton\"/>                    <input type=\"button\" value=\"&uarr;A\" onclick=\"addSymbol(\'powA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textPowA+'\', document.getElementById(\'powAButton\').offsetLeft,document.getElementById(\'powAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"powAButton\"/>                    <input type=\"button\" value=\"&darr;A\" onclick=\"addSymbol(\'indexA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textIndexA+'\', document.getElementById(\'indexAButton\').offsetLeft,document.getElementById(\'indexAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"indexAButton\"/> </div></td>';		
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
//Построение ячейки для ввода текста сочинения
function buildTvir()
{
    var tableConstructor='<div align="center" style="width:100%; text-align:center; clear:both;">'+textTvir+':</div><div align="center" style="width:100%; text-align:center; clear:both;"><textarea rows="7"  onkeyup="checkWordNumber()" id="TvirText" name="TvirText" class="form-control"></textarea></div><div align="center" style="width:100%; text-align:center; clear:both;" id="WordCounter" name="WordCounter" class="WordCounterView"></div>';
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
function buildResultTable(testTitle)
{
   var tableConstructor=' <table align="center" class="ZnoResultTableView table table-striped" id="ZnoResultTable" name="ZnoResultTable">	<tr>    	<!-- Ячейка с заголовком таблицы результатов тестирования -->        <th colspan="2" class="ZnoResultTitleView" name="ZnoResultTitle" id="ZnoResultTitle">'+textTestResult+'<br /> ('+testTitle+')        </td>	</tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием всех ответов (правильных и неправильных) -->        	<td class="ZnoResultTotalAnswerView" name="ZnoResultTotalAnswer" id="ZnoResultTotalAnswer">             '+textTotalAnswers+':        </th>        <!-- Ячейка с числом всех ответов (правильных и неправильных) -->        <td class="ZnoResultTotalAnswerNumberView" name="ZnoResultTotalAnswerNumber" id="ZnoResultTotalAnswerNumber">        	0        </td>    </tr>    <tr class="ResultRowView">    	<!-- Ячейка с описанием пропущенных заданий  -->         <td class="ZnoResultPassedView" name="ZnoResultPassed" id="ZnoResultPassed">             '+textPassedAnswers+':        </td>        <!-- Ячейка с числом пропущенных заданий  -->        <td class="ZnoResultPassedNumberView" name="ZnoResultPassedNumber" id="ZnoResultPassedNumber">             0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием правильных ответов -->        	<td class="ZnoResultCorrectAnswerView" name="ZnoResultCorrectAnswer" id="ZnoResultCorrectAnswer">             '+textCorrectAnswer+':        </td>        <!-- Ячейка с числом правильных ответов  -->        <td class="ZnoResultCorrectAnswerNumberView" name="ZnoResultCorrectAnswerNumber" id="ZnoResultCorrectAnswerNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием балла ЗНО -->        	<td class="ZnoResultGradeView" name="ZnoResultGrade" id="ZnoResultGrade">             '+textRatingZNO+':        </td>        <!-- Ячейка с числом балла ЗНО  -->        <td class="ZnoResultGradeNumberView" name="ZnoResultGradeNumber" id="ZnoResultGradeNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием затраченного времени -->        	<td class="ZnoResultTimeView" name="ZnoResultTime" id="ZnoResultTime">             '+textTimeSpent+':        </td>        <!-- Ячейка с числом затраченного времени -->        <td class="ZnoResultTimeNumberView" name="ZnoResultTimeNumber" id="ZnoResultTimeNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с подробным описанием неправильных ответов -->        	<td class="ZnoResultPoorAnswerView" name="ZnoResultPoorAnswer" id="ZnoResultPoorAnswer">             '+textWrongAnswers+':        </td>        <!-- Ячейка с перечислением неправильных ответов -->        <td class="ZnoResultPoorAnswerDetailView" name="ZnoResultPoorAnswerDetail" id="ZnoResultPoorAnswerDetail">        	0 <br/>  0 <br /> 0 <br />        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с подробным описанием пропущенных ответов -->       	  <td class="ZnoResultPassedAnswerView" name="ZnoResultPassedAnswer" id="ZnoResultPassedAnswer">             '+textPassedTasks+':      </td>        <!-- Ячейка с перечислением пропущенных ответов -->      <td class="ZnoResultPassedAnswerDetailView" name="ZnoResultPassedAnswerDetail" id="ZnoResultPassedAnswerDetail">        	0 <br/>  0 <br /> 0 <br />      </td>    </tr>    <tr>	        <!-- Ячейка с запросом на повторное тестирование -->        	<td class="ZnoResultRepeatView" name="ZnoResultRepeat" id="ZnoResultRepeat">             '+textRepeatTest+':        </td>        <!-- Ячейка с кнопкой начала повторного тестирования -->        <td class="ZnoResultRepeatButtonView" name="ZnoResultRepeatButton" id="ZnoResultRepeatButton">        	<input name="ZnoResultRepeatTestButton" class="btn btn-primary" type="button" id="ZnoResultRepeatTestButton" value="'+textRepeatButton+'" onClick="testInit(\''+testTitle+'\')"/>        </td>    </tr>';
   if (correctAnswerCounter < taskArray.length) {
		tableConstructor += '<tr>	        <!-- Ячейка с запросом на повторное тестирование только ошибочных ответов -->        	<td class="ZnoResultRepeatView" name="ZnoResultRepeat" id="ZnoResultRepeat">             '+textRepeatTestWrong+':        </td>        <!-- Ячейка с кнопкой начала повторного тестирования -->        <td class="ZnoResultRepeatButtonView" name="ZnoResultRepeatButton" id="ZnoResultRepeatButton">        	<input name="ZnoResultRepeatTestButton" class="btn btn-warning" type="button" id="ZnoResultRepeatTestButton" value="'+textRepeatButtonWrong+'" onClick="testInitWrong(\''+testTitle+'\')"/>        </td>    </tr>   </table>';
   } else {
		tableConstructor += '</table>';
   }
    document.getElementById("ZnoOuterTable").innerHTML=tableConstructor;
 
}
function buildTestTable(testTitle, testDetails, testLength, testTime)
{
	/*инициализация ячейки с номером текущего задания*/
	var znoTaskNumberContent = textTaskNumber+'<span class="blueNumber" id="TaskNumber" name="TaskNumberCounter"> 1</span>';
	if(!document.getElementById('ZnoTaskNumber')){
		var tableContent = '<div class="fluid-container panel ZnoOuterTableView " id="ZnoOuterTable"><!--Строка с номером задания и названием теста --><div class="row extendedRow ZnoOuterTableRowHeaderView" name="ZnoOuterTableRowHeader" id="ZnoOuterTableRowHeader"><div class="col-md-4 col-xs-12 col-sm-12 bigText text-left" name="ZnoTaskNumber" id="ZnoTaskNumber"></div><div class="col-md-4 col-xs-12 col-sm-12 form-group selectTaskView" id="selectTask" name="selectTask"></div><div class="col-md-4 col-xs-12 col-sm-12 bigText text-right" name="ZnoTestName" id="ZnoTestName"><span class="text-danger" id="ZnoTestName" name="ZnoTestName">'+testTitle+'.<br> '+testDetails+'.</span></div></div><!-- Строка с счетчиками ответов и оставшегося времени --><div class="row extendedRow ZnoInnerTableCounterView" name="ZnoInnerTableCounter" id="ZnoInnerTableCounter"></div><!-- Строка с условиями задания -->  <div class="row extendedRow ZnoOuterTableRowTaskView" name="ZnoOuterTableRowTask" id="ZnoOuterTableRowTask"></div><!-- Строка с вариантами ответов --><div class="row extendedRow center-block" id="AnswerVariantContainer" name="AnswerVariantContainer"></div><!-- Строка с кнопками управления --><div class="row extendedRow ZnoOuterTableControlView" name="ZnoOuterTableControl" id="ZnoOuterTableControl"></div></div></div>'
		document.getElementById("testHolder").innerHTML=tableContent;
	}
	document.getElementById('ZnoTaskNumber').innerHTML = znoTaskNumberContent;
	/*инициализация строки со счетчиком оставшихся заданий и оставшимся временем теста*/
	var znoInnerTableCounterContent = '<div class="col-md-6 bigText text-left " name="ZnoGivenAnswers" id="ZnoGivenAnswers">'+textTasksLeft+': <!-- Счетчик ответов --><span class="blueNumber" name="GivenAnswers" id="GivenAnswers">'+testLength+'</span></div><div class="col-md-6 bigText text-right" name="ZnoTimeLeft" id="ZnoTimeLeft">'+textLeftMin+': <span class="blueNumber" name="TimeLeft" id="TimeLeft">'+(testTime/60)+'</span></div>';
	document.getElementById('ZnoInnerTableCounter').innerHTML = znoInnerTableCounterContent;
	/*инициализация строки с заданием*/
	var znoOuterTableRowTaskContent = '<div class="col-md-12" name="Task" id="Task" style="position: relative;" align="center"></div>';
	document.getElementById('ZnoOuterTableRowTask').innerHTML = znoOuterTableRowTaskContent;
	/*инициализация строки с кнопками управления*/
	var znoOuterTableControlContent = '<div class="PassAnswerView col-md-4" name="PassAnswer" id="PassAnswer">                <input class="btn btn-warning" value="'+textPassTask+'" name="PassAnswerButton" id="PassAnswerButton" onclick="userPass()" type="button">   </div>    <div  class="ResumeTestView col-md-4" name="ResumeTest" id="ResumeTest"><input class="btn btn-success" value="'+textAcceptAnswer+'" name="ResumeTestButton" id="ResumeTestButton" onclick="nextTask()" type="button"></div> <div  class="StopTestView col-md-4" name="StopTest" id="StopTest"> <input class="btn btn-danger" value="'+textFinishTest+'" name="StopTestButton" id="StopTestButton" onclick="resultReport()" type="button"></div>';
	document.getElementById('ZnoOuterTableControl').innerHTML = znoOuterTableControlContent;
	/*Инициализация строки с вариантами ответов*/
	var AnswerVariantContainerContent='<div class="col-md-12"><div class="panel panel-info"><div class="panel-body ZnoOuterTableRowVariantView"  name="ZnoOuterTableRowVariant" id="ZnoOuterTableRowVariant"></div></div></div>';
	document.getElementById('AnswerVariantContainer').innerHTML = AnswerVariantContainerContent;
}
function testInitWrong(testName) {
	
	testLength -= correctAnswerCounter;
	answerCounter=0;
	correctAnswerCounter=0;
	passCounter =0;
	currentTaskCounter=0;
	var isCheckTaskCounter = true;
	for (var i=0; i<taskArray.length; i++)
	{			
		if (taskArray[i].userAnswer == "pass_count") {
		  continue;
		}
		if (isCheckTaskCounter) {
			isCheckTaskCounter = false;
			currentTaskCounter = i;
		}
		taskArray[i].userAnswer="pass";
		taskArray[i].isCorrectAnswer=false;
		taskArray[i].userMark=0
	}
	startInitialization();
}

