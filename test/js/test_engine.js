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
    tip.innerHTML=textClose;
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
/**/

/**/
/*Конструктор объектов типа представление вопроса в тесте, 
*/


function view(initTitle,initNumber,initPath,initTypeView,initNumberVar, initDirection, initLang, initVarArray)
{
	this.isBigImagePermitted=0;//разрешено ли увеличение рисунка условия 1-да, 0-нет
	this.title=initTitle;//название теста
    this.number=initNumber;//порядковый номер теста
	this.path=initPath;//путь к каталогу с картинками
	this.typeView=initTypeView;//тип представления: table, picture, table_picture
	this.numberVar=initNumberVar;//количество вариантов ответов
	this.direction=initDirection;//направление расположения ответов: horizontal, vertical
	this.lang=initLang;
	this.varArray=initVarArray;//массив вараинтов ответов varArray[0] - условие задания
	this.question=this.varArray[0];//Текст вопроса
	//функция построения HTML кода вопроса
	this.buildHTML=function(){
		var HTMLcode='';
		if(this.typeView=="picture")//будет ли задание в виде картинки
		{
			HTMLcode='<a href="javascript:imageIncrease()"><img id="TaskImg" width="500" height="250" align="middle" '+
			'src="'+this.path+"task"+this.number+'.gif"'+' alt="'+this.title+textTask+this.number+
			'" title="'+this.title+textTask+this.number+
			'" name="TaskImg"></a> <div class="TextViewCell"><a href="javascript:imageIncrease()">'+textIncreaseImage+'</a></div>';
			//создание рисунка с условием задания размером 800*400 
			this.bigImg=document.createElement("img");
			this.bigImg.src=this.path+'task'+this.number+'.gif';
			this.bigImg.height=400;
			this.bigImg.width=800;
			this.bigImg.align="center";
			this.bigImg.alt=this.title+textTask+this.number;
			this.bigImg.title=this.title+textTask+this.number;
		}
		if((this.typeView=="table")||(this.typeView=="table_picture"))
		{
			this.isBigImagePermitted=0;
			if(this.typeView=="table_picture")
			{
				HTMLcode='<a href="javascript:imageIncrease()"><img id="TaskImage" width="500" height="250" align="middle" '+
				'src="'+this.path+"task"+this.number+'.gif"'+' alt="'+this.title+textTask+this.number+
				'" title="'+this.title+textTask+this.number+
				'" name="TaskImg"></a> <div class="TextViewCell"><a href="javascript:imageIncrease()">'+textIncreaseImage+'</a></div>';
			}
			HTMLcode+='<table id="TaskImg" class="taskTable">';
			if(this.direction=="horizontal")
			{
				HTMLcode+='<tr class="taskQuestion"><td colspan="'+this.numberVar+'">'+this.question+'<hr/></td></tr>';
				HTMLcode+='<tr class="horVariantLetter">';
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
				HTMLcode+='</tr><tr class="horVariantAnswer">';
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
				HTMLcode+='<tr class="taskQuestion" ><td colspan="2">'+this.question+'<hr/></td></tr>';
				for(i=1;i<this.numberVar+1;i++)
				{
					HTMLcode+='<tr class="vertAnswers">';
					HTMLcode+='<td class="vertVariantLetter">';
					if(this.lang=="rus"){
						HTMLcode+=String.fromCharCode(1040+i-1);
					}
					else
					{
						HTMLcode+=String.fromCharCode(65+i-1);	
					}
					HTMLcode+='.</td><td class="vertVariantAnswer">'+this.varArray[i]+'</td></tr>';
				}
			}
			HTMLcode+='</table>';
			if(this.typeView=="table_picture")
			{
				//HTMLcode+='<div class="TextViewCell"><a href="javascript:showPictureforTable()">'+textImageView+'</a></div>';
				this.bigImg=document.createElement("img");
			    this.bigImg.src=this.path+'task'+this.number+'.gif';
			    this.bigImg.height=400;
			    this.bigImg.width=800;
			    this.bigImg.align="center";
			    this.bigImg.alt=this.title+textTask+this.number;
			    this.bigImg.title=this.title+textTask+this.number;
			}
		}
		if((this.typeView=="multiselect")||(this.typeView=="multiselect_picture"))
		{
			this.isBigImagePermitted=0;
			if(this.typeView=="multiselect_picture")
			{
				HTMLcode='<a href="javascript:imageIncrease()"><img id="TaskImage" width="500" height="250" align="middle" '+
				'src="'+this.path+"task"+this.number+'.gif"'+' alt="'+this.title+textTask+this.number+
				'" title="'+this.title+textTask+this.number+
				'" name="TaskImg"></a> <div class="TextViewCell"><a href="javascript:imageIncrease()">'+textIncreaseImage+'</a></div>';
			}
			HTMLcode+='<table id="TaskImg" class="taskTable">';
				HTMLcode+='<tr class="taskQuestion" ><td colspan="2">'+this.question+'<hr/></td></tr>';
				for(i=1;i<this.varArray.length;i++)
				{
					
						HTMLcode+='<tr class="vertAnswers">';
						HTMLcode+='<td class="vertVariantLetter">';
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
						HTMLcode+='.</td><td class="vertVariantAnswer">'+this.varArray[i]+'</td></tr>';
					
				}
			HTMLcode+='</table>';
			if(this.typeView=="multiselect_picture")
			{
				//HTMLcode+='<div class="TextViewCell"><a href="javascript:showPictureforTable()">'+textImageView+'</a></div>';
				this.bigImg=document.createElement("img");
			    this.bigImg.src=this.path+'task'+this.number+'.gif';
			    this.bigImg.height=400;
			    this.bigImg.width=800;
			    this.bigImg.align="center";
			    this.bigImg.alt=this.title+textTask+this.number;
			    this.bigImg.title=this.title+textTask+this.number;
			}
		}

		if((this.typeView=="connection")||(this.typeView=="connection_picture"))
		{
			HTMLcode='';
			if(this.typeView=="connection_picture")
			{
				HTMLcode+='<a href="javascript:imageIncrease()"><img id="TaskImage" width="500" height="250" align="middle" '+
				'src="'+this.path+"task"+this.number+'.gif"'+' alt="'+this.title+textTask+this.number+
				'" title="'+this.title+textTask+this.number+
				'" name="TaskImg"></a> <div class="TextViewCell"><a href="javascript:imageIncrease()">'+textIncreaseImage+'</a></div>';
					this.bigImg=document.createElement("img");
					this.bigImg.src=this.path+'task'+this.number+'.gif';
					this.bigImg.height=400;
					this.bigImg.width=800;
					this.bigImg.align="center";
					this.bigImg.alt=this.title+textTask+this.number;
					this.bigImg.title=this.title+textTask+this.number;
			}
			HTMLcode+='<table id="TaskImg" class="taskTable">';
			HTMLcode+='<tr class="taskQuestion"><td colspan="2">'+this.question+'<hr/></td></tr>';
			//вставка внутренней таблицы с вариантами вопросов
			HTMLcode+='<tr><td><table class="questionColumn">';
			for(i=1;i<this.numberVar;i++)
			{	
				HTMLcode+='<tr><td class="questionColumnNumber">'+i+'.</td>';
				HTMLcode+='<td class="questionColumnText">'+this.varArray[i]+'</td></tr>';
			}
			HTMLcode+='</table></td>';
			//вставка внутренней таблицы с вариантами ответов
			HTMLcode+='<td><table class="answerColumn">';
			for(i=1;i<this.numberVar+1;i++)
			{	
				HTMLcode+='<tr><td class="answerColumnNumber">';
				if(this.lang=="rus")
					{
						HTMLcode+=String.fromCharCode(1040+i-1);
					}
					else
					{
						HTMLcode+=String.fromCharCode(65+i-1);	
					}
				HTMLcode+='.</td><td class="answerColumnText">'+this.varArray[i+this.numberVar-1]+'</td></tr>';
			}
			HTMLcode+='</table></td>';
			HTMLcode+='</table>';
		}
		if((this.typeView=="singleText")||(this.typeView=="singleText_picture"))
		{
			HTMLcode='<table id="TaskImg" class="taskTable">';
			HTMLcode+='<tr class="taskQuestion"><td>'+this.question+'</td></tr></table>';
			if(this.typeView=="singleText_picture")
			{
					HTMLcode+='<a href="javascript:imageIncrease()"><img id="TaskImage" width="500" height="250" align="middle" '+
				'src="'+this.path+"task"+this.number+'.gif"'+' alt="'+this.title+textTask+this.number+
				'" title="'+this.title+textTask+this.number+
				'" name="TaskImg"></a> <div class="TextViewCell"><a href="javascript:imageIncrease()">'+textIncreaseImage+'</a></div>';
					this.bigImg=document.createElement("img");
					this.bigImg.src=this.path+'task'+this.number+'.gif';
					this.bigImg.height=400;
					this.bigImg.width=800;
					this.bigImg.align="center";
					this.bigImg.alt=this.title+textTask+this.number;
					this.bigImg.title=this.title+textTask+this.number;
			}
		}
		return HTMLcode;
	}
	this.showPicture=function(){
		this.isBigImagePermitted=1;
		var HTMLcode='<img id="TaskImg" width="500" height="250" align="middle" '+
			'src="'+this.path+"task"+this.number+'.gif"'+' alt="'+this.title+textTask+this.number+
			'" title="'+this.title+textTask+this.number+
			'" name="TaskImg"> <div class="TextViewCell"><a href="javascript:showTableForPicture()">'+textViewTask+'</a></div><br/><div class="TextViewCell"><a href="javascript:imageIncrease()">'+textIncreaseImage+'</a></div>';
			this.bigImg=document.createElement("img");
			    this.bigImg.src=this.path+'task'+this.number+'.gif';
			    this.bigImg.height=400;
			    this.bigImg.width=800;
			    this.bigImg.align="center";
			    this.bigImg.alt=this.title+textTask+this.number;
			    this.bigImg.title=this.title+textTask+this.number;
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
     /*создание текстового поля для типа textanalysis*/
    if((this.type=="textanalysis")||(this.type=="textual"))
    {
        this.textDiv=document.createElement("textarea");
        this.textDiv.innerHTML=textAnalysisArray[this.view.number-1];
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
                alert(textWrongTestType);
                break;
        }
	
		
    }//end of this.checkAnswer()
//
}//end of Task constructor

	


/*Функция загрузки данных теста в форму*/
function taskLoader(curTask)
{
    var tImage=document.getElementById("TaskImg");
    currentTaskCounter=curTask.view.number-1;
	
    if (document.getElementById("TaskTip")!=null)
    {
        var tTip=document.getElementById("TaskTip");
        tTip.parentNode.removeChild(tTip);
    }
    tImage.parentNode.removeChild(tImage);
    /*Создание подсказки под рисунком*/
    /*var tTip=document.createElement("div");
    tTip.innerHTML="Щелкните на картинке для увеличения";
    tTip.align="center";
    tTip.textAlign="center";
    tTip.id="TaskTip";
    tTip.name="TaskTip";
    tTip.width=500;
    tTip.height=20;*/
    document.getElementById("Task").innerHTML=curTask.view.buildHTML();//appendChild(curTask.img);
    //document.getElementById("Task").appendChild(tTip);
    /*Построение выпадающего списка с номерами вариантов не отвеченных тестов*/
    var selectHTML="<div id='selectTask'-->"+moveToTaskText+"<select id='selectTaskNumber' size='"+selectVariantSize+"' onclick='nexTaskByNumber()'>";
    var listCounter=0;
    for(i=0;i<testLength;i++)
	{
		if((taskArray[i].userAnswer=="")||(taskArray[i].userAnswer=="pass"))
		{
		  listCounter++;
		  if(i==curTask.view.number-1)
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
    document.getElementById("ZnoTaskNumber").innerHTML=textTaskNumber+'<!--'+textTaskNumberCounter+' --><span class="TaskNumberView" id="TaskNumber" name="TaskNumberCounter"> '+curTask.view.number+'<br/> ('+curTask.mark+textMark+')</span>'+selectHTML+'</td>';
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
        case "textual":
            buildTextual();
            break;
        case "componate":
            buildComponate(curTask.answer.length);
            break;
        case "multiselection":
            buildMultiselection(curTask.answer.length,curTask.view.varArray.length-1);
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
                correctAnswerText+='№ '+taskArray[i].view.number+' (+'+taskArray[i].userMark+textMark+')<br/>';
            }
            else
            {
                nonCorrectAnswerText+=taskArray[i].view.number+"<br/>";
            }
        }
        else
        {
            totalPass+=1;
            passAnswerText+=taskArray[i].view.number+"<br/>";
        }
	
    }
    if(totalCorrectAnswer>0)
    {
        correctAnswerText+='<hr/>';
    }
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
                document.getElementById("ZnoTimeLeft").innerHTML=textLeftSeconds+': <span class="TimeLeftView" name="TimeLeft" id="TimeLeft">'+timeCounter+'</span>';
            }
            else
            {
                var curMin=Math.ceil(timeCounter/60);
                document.getElementById("ZnoTimeLeft").innerHTML=textLeftMin+': <span class="TimeLeftView" name="TimeLeft" id="TimeLeft">'+curMin+'</span>';
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
    var tableConstructor='<td><div class="TextViewCell"><textarea cols="48" rows="8" id="FullTextArea" name="FullTextArea" disabled="">'+textAnalysisArray[currentTaskCounter]+'</textarea></div>';
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
    var tableConstructor='<td><div class="TextViewCell"><textarea cols="48" rows="8" id="FullTextArea" name="FullTextArea" disabled="">'+textAnalysisArray[currentTaskCounter]+'</textarea></div>';
    tableConstructor+='<div class="TextEnterCell">'+textOneWordAnswer+':</div><div class="TextEnterCell"><textarea cols="15" rows="1" id="TextualField" name="TextualField" value=""></textarea></div>';
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
    var tableConstructor='<td class="ZnoVariantNumberView" name="ZnoVariantNumber" id="ZnoVariantNumber" align="center">'+textInputAnswer+':<hr/>                    '+textFrom+' 1'+textFromGroup+': <input type="num" size="1" maxlength="1" value="" name="NumberAnswer1" id="NumberAnswer1" class="numberAnswerView" /><hr/>';
    for (var i=2;i<varNum+1;i++)
    {
        tableConstructor+=textFrom+' '+i+' '+textFromGroup+': <input type="num" size="1" maxlength="1" value="" name="NumberAnswer'+i+'" id="NumberAnswer'+i+'" class="numberAnswerView" /><hr/>';
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
    var tableConstructor='<td><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textInputAnswer+':</div><div id=\"divAnsDiv\" style=\"float:left; width:90%;\"><span id=\"ansDiv\"></span></div><div id=\"helperDiv\" align=\"center\" style=\"float:left; width:8%;\"> <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'ansDiv\').innerHTML=\'\';document.getElementById(\'FreeAnswerText\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textClearAnswerField+'\',document.getElementById(\'clearAnsButton\').offsetLeft,document.getElementById(\'clearAnsButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearAnsButton\"/> <a href=\"#\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textBuildAnswerAdvice+' \',document.getElementById(\'infotip\').offsetLeft,document.getElementById(\'infotip\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"infotip\">?</a></div><input type=\"hidden\" size=\"55\" class=\"FreeAnswerTextView\" name=\"FreeAnswerText\" id=\"FreeAnswerText\" /><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textAddExpression+':</div><div align=\"center\" style=\"width:100%; text-align:left;\">A=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldA\" id=\"fieldA\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textAddToAnswer+'\',document.getElementById(\'addAButton\').offsetLeft,document.getElementById(\'addAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addAButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldA\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textClearField+' А\',document.getElementById(\'clearAButton\').offsetLeft,document.getElementById(\'clearAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearAButton\"/>  </div><div align=\"center\" style=\"width:100%; text-align:left;\">B=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldB\" id=\"fieldB\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textAddToAnswer+'\',document.getElementById(\'addBButton\').offsetLeft,document.getElementById(\'addBButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addBButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldB\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textClearField+' B\',document.getElementById(\'clearBButton\').offsetLeft,document.getElementById(\'clearBButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearBButton\" />             	   </div><div align=\"center\" style=\"width:100%; text-align:left;\">C=                   <input type=\"text\" maxlength=\"40\" size=\"40\" name=\"fieldC\" id=\"fieldC\" />                   <input type=\"button\" value=\"&uarr;\" onclick=\"addSymbol(\'textC\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textAddToAnswer+'\',document.getElementById(\'addCButton\').offsetLeft,document.getElementById(\'addCButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"addCButton\"/>                   <input type=\"button\" value=\"&laquo;\" onclick=\"document.getElementById(\'fieldC\').value=\'\'\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textClearField+' C\',document.getElementById(\'clearCButton\').offsetLeft,document.getElementById(\'clearCButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"clearCButton\" />             	   </div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textAddSymbol+':</div><div style=\"float:left; width:80%;\"><input type=\"button\" value=\"&alpha;\" onclick=\"addSymbol(\'alpha\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLetter+' АЛЬФА\',document.getElementById(\'alphaButton\').offsetLeft,document.getElementById(\'alphaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"alphaButton\"/>                   <input type=\"button\" value=\"&beta;\" onclick=\"addSymbol(\'beta\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLetter+' БЕТТА\',document.getElementById(\'betaButton\').offsetLeft,document.getElementById(\'betaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"betaButton\"/>                   <input type=\"button\" value=\"&gamma;\" onclick=\"addSymbol(\'gamma\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLetter+' ГАММА\',document.getElementById(\'gammaButton\').offsetLeft,document.getElementById(\'gammaButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"gammaButton\" />                   <input type=\"button\" value=\"&Pi;\" onclick=\"addSymbol(\'pi\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textPiNumber+'\',document.getElementById(\'piButton\').offsetLeft,document.getElementById(\'piButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"piButton\" />                   <input type=\"button\" value=\"&phi;\" onclick=\"addSymbol(\'phi\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLetter+' ФИ\',document.getElementById(\'phiButton\').offsetLeft,document.getElementById(\'phiButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"phiButton\"/>                   <input type=\"button\" value=\"&infin;\" onclick=\"addSymbol(\'infinity\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textInfinitySign+'\',document.getElementById(\'infinityButton\').offsetLeft,document.getElementById(\'infinityButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"infinityButton\"/>                   <input type=\"button\" value=\"&deg;\" onclick=\"addSymbol(\'deg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textDegrees+'\', document.getElementById(\'degButton\').offsetLeft, document.getElementById(\'degButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"degButton\"/>                   <input type=\"button\" value=\"&Oslash;\" onclick=\"addSymbol(\'emptyEnt\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textEmptySet+'\', document.getElementById(\'empEntButton\').offsetLeft, document.getElementById(\'empEntButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"empEntButton\"/>                   <input type=\"button\" value=\"&isin;\" onclick=\"addSymbol(\'isIn\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textBelongSymbol+'\', document.getElementById(\'isInButton\').offsetLeft, document.getElementById(\'isInButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"isInButton\"/>                   <input type=\"button\" value=\"[\" onclick=\"addSymbol(\'leftSq\')\" />                   <input type=\"button\" value=\"]\" onclick=\"addSymbol(\'rightSq\')\" />                   <input type=\"button\" value=\"(\" onclick=\"addSymbol(\'leftRnd\')\" />                   <input type=\"button\" value=\")\" onclick=\"addSymbol(\'rightRnd\')\" />                   <input type=\"button\" value=\"{\" onclick=\"addSymbol(\'{\')\" />                   <input type=\"button\" value=\"}\" onclick=\"addSymbol(\'}\')\" />                   <input type=\"button\" value=\";\" onclick=\"addSymbol(\';\')\"  style=\"position:relative;\" onMouseOver=\"advise.show(\''+textBracket+'\',document.getElementById(\'semiButton\').offsetLeft,document.getElementById(\'semiButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"semiButton\"/>                   <input type=\"button\" value=\".\" onclick=\"addSymbol(\'.\')\"  style=\"position:relative;\" onMouseOver=\"advise.show(\''+textDecimalPoint+'\',document.getElementById(\'dotButton\').offsetLeft,document.getElementById(\'dotButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"dotButton\"/>                   <input type=\"button\" value=\"=\" onclick=\"addSymbol(\'isEqual\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textEquals+'\',document.getElementById(\'isEqualButton\').offsetLeft,document.getElementById(\'isEqualButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"isEqualButton\"/>                   <input type=\"button\" value=\"+\" onclick=\"addSymbol(\'plus\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textAddSymbol+'\',document.getElementById(\'plusButton\').offsetLeft,document.getElementById(\'plusButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"plusButton\"/>                   <input type=\"button\" value=\"-\" onclick=\"addSymbol(\'minus\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textMinusSymbol+'\',document.getElementById(\'minusButton\').offsetLeft,document.getElementById(\'minusButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"minusButton\"/>                   <input type=\"button\" value=\"&times;\" onclick=\"addSymbol(\'multiply\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textMultiplySymbol+'\',document.getElementById(\'multiplyButton\').offsetLeft,document.getElementById(\'multiplyButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"multiplyButton\"/>                   <input type=\"button\" value=\"&#58;\" onclick=\"addSymbol(\'divide\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textDivideSymbol+'\',document.getElementById(\'divideButton\').offsetLeft,document.getElementById(\'divideButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"divideButton\"/>                   <input type=\"button\" value=\"U\" onclick=\"addSymbol(\'U\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textUnionSymbol+'\',document.getElementById(\'unionButton\').offsetLeft,document.getElementById(\'unionButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"unionButton\"/>                   <input type=\"button\" value=\"&cap;\" onclick=\"addSymbol(\'intersection\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textIntersection+'\',document.getElementById(\'intSectButton\').offsetLeft,document.getElementById(\'intSectButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"intSectButton\"/>                   <input type=\"button\" value=\"ln\" onclick=\"addSymbol(\'ln\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLn+'\',document.getElementById(\'lnButton\').offsetLeft,document.getElementById(\'lnButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lnButton\"/>                   <input type=\"button\" value=\"lg\" onclick=\"addSymbol(\'lg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLg+'\',document.getElementById(\'lgButton\').offsetLeft,document.getElementById(\'lgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lgButton\"/>                   <input type=\"button\" value=\"log\" onclick=\"addSymbol(\'log\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLog+'\',document.getElementById(\'lоgButton\').offsetLeft,document.getElementById(\'lоgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"lоgButton\"/>                                      <input type=\"button\" value=\"sin\" onclick=\"addSymbol(\'sin\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textSin+'\',document.getElementById(\'sinButton\').offsetLeft,document.getElementById(\'sinButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"sinButton\"/>                    <input type=\"button\" value=\"cos\" onclick=\"addSymbol(\'cos\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textCos+'\',document.getElementById(\'cosButton\').offsetLeft,document.getElementById(\'cosButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"cosButton\"/>                    <input type=\"button\" value=\"tg\" onclick=\"addSymbol(\'tg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textTg+'\',document.getElementById(\'tgButton\').offsetLeft,document.getElementById(\'tgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"tgButton\"/>                    <input type=\"button\" value=\"ctg\" onclick=\"addSymbol(\'ctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textCtg+'\',document.getElementById(\'ctgButton\').offsetLeft,document.getElementById(\'ctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"ctgButton\"/>                    <input type=\"button\" value=\"arcsin\" onclick=\"addSymbol(\'arcsin\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textArcsin+'\',document.getElementById(\'arcsinButton\').offsetLeft,document.getElementById(\'arcsinButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arcsinButton\"/>                   <input type=\"button\" value=\"arccos\" onclick=\"addSymbol(\'arccos\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textArccos+'\',document.getElementById(\'arccosButton\').offsetLeft,document.getElementById(\'arccosButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arccosButton\"/>                     <input type=\"button\" value=\"arctg\" onclick=\"addSymbol(\'arctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textArctg+'\',document.getElementById(\'arctgButton\').offsetLeft,document.getElementById(\'arctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arctgButton\"/>                     <input type=\"button\" value=\"arcctg\" onclick=\"addSymbol(\'arcctg\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textArcctg+'\',document.getElementById(\'arcctgButton\').offsetLeft,document.getElementById(\'arcctgButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"arcctgButton\"/>                   </div><div style=\"float:left; width:20%;\"><select name=\"placeSelect\" size=\"4\" id=\"placeSelect\"><option value=\"ans\">'+textToAnswer+'</option><option value=\"a\">'+textToField+' А</option><option value=\"b\">'+textToField+' B</option>        <option value=\"c\" selected=\"selected\">'+textToField+' C</option></select></div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textAddToFieldCExpression+':</div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\"><input type=\"button\" value=\"A^B\" onclick=\"addSymbol(\'powAB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textPowAB+'\',document.getElementById(\'powButton\').offsetLeft,document.getElementById(\'powButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"powButton\"/>                    <input type=\"button\" value=\"&radic;A\" onclick=\"addSymbol(\'sqrt\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textSqrtA+'\',document.getElementById(\'sqrtButton\').offsetLeft,document.getElementById(\'sqrtButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"sqrtButton\"/>                    <input type=\"button\" value=\"LOGaB\" onclick=\"addSymbol(\'logAB\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textLogAB+'\', document.getElementById(\'logABButton\').offsetLeft,document.getElementById(\'logABButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"logABButton\"/>                    <input type=\"button\" value=\"&uarr;A\" onclick=\"addSymbol(\'powA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textPowA+'\', document.getElementById(\'powAButton\').offsetLeft,document.getElementById(\'powAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"powAButton\"/>                    <input type=\"button\" value=\"&darr;A\" onclick=\"addSymbol(\'indexA\')\" style=\"position:relative;\" onMouseOver=\"advise.show(\''+textIndexA+'\', document.getElementById(\'indexAButton\').offsetLeft,document.getElementById(\'indexAButton\').offsetTop)\" onMouseOut=\"advise.hide()\" id=\"indexAButton\"/> </div></td>';
    /*'<table align="center"><tr>';
		tableConstructor+='<td class="ZnoVariantFreeAnswerView" name="ZnoVariantFreeAnswer" id="ZnoVariantFreeAnswer" align="center">                   Введите ответ:                   <!-- поле для ввода ответа в свободной форме -->                   <table width="100%">                   <tr>                   <td id="divAnsDiv">                   <span id="ansDiv"></span>                   </td>                   <td id="helperDiv" align="center">                            <input type="button" value="&laquo;" onclick="document.getElementById(\'ansDiv\').innerHTML=\'\';document.getElementById(\'FreeAnswerText\').value=\'\'" style="position:relative;" onMouseOver="advise.show(\'Очистка поля ответа\',document.getElementById(\'clearAnsButton\').offsetLeft,document.getElementById(\'clearAnsButton\').offsetTop)" onMouseOut="advise.hide()" id="clearAnsButton"/>                   <a href="#" style="position:relative;" onMouseOver="advise.show(\'Заполняйте поле ответа используя конструктор формул. С клавиатуры вводите только английские буквы и цифры \',document.getElementById(\'infotip\').offsetLeft,document.getElementById(\'infotip\').offsetTop)" onMouseOut="advise.hide()" id="infotip">?</a>                   </td>                   </tr>                   </table>                   <input type="hidden" size="55" class="FreeAnswerTextView" name="FreeAnswerText" id="FreeAnswerText" />                   <!-- ссылка на всплывающую подсказку -->                   <table width="100%" align="center" class="AnswerTable">                   <tr>                   		<td colspan="2" align="center">                   		Добавить в ответ выражение:<br/>                        </td>                   </tr>                   <tr>                   <td colspan="2">                                                       A=                   <input type="text" maxlength="40" size="40" name="fieldA" id="fieldA" />                   <input type="button" value="&uarr;" onclick="addSymbol(\'textA\')" style="position:relative;" onMouseOver="advise.show(\'Добавить в ответ\',document.getElementById(\'addAButton\').offsetLeft,document.getElementById(\'addAButton\').offsetTop)" onMouseOut="advise.hide()" id="addAButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById(\'fieldA\').value=\'\'" style="position:relative;" onMouseOver="advise.show(\'Очистка поля А\',document.getElementById(\'clearAButton\').offsetLeft,document.getElementById(\'clearAButton\').offsetTop)" onMouseOut="advise.hide()" id="clearAButton"/>                   </td>                   </tr>                   <tr>                   <td colspan="2">                   B=                   <input type="text" maxlength="40" size="40" name="fieldB" id="fieldB" />                   <input type="button" value="&uarr;" onclick="addSymbol(\'textB\')" style="position:relative;" onMouseOver="advise.show(\'Добавить в ответ\',document.getElementById(\'addBButton\').offsetLeft,document.getElementById(\'addBButton\').offsetTop)" onMouseOut="advise.hide()" id="addBButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById(\'fieldB\').value=\'\'" style="position:relative;" onMouseOver="advise.show(\'Очистка поля B\',document.getElementById(\'clearBButton\').offsetLeft,document.getElementById(\'clearBButton\').offsetTop)" onMouseOut="advise.hide()" id="clearBButton" />             	   </td>                   </tr>                   <tr>                   <td colspan="2">                   C=                   <input type="text" maxlength="40" size="40" name="fieldC" id="fieldC" />                   <input type="button" value="&uarr;" onclick="addSymbol(\'textC\')" style="position:relative;" onMouseOver="advise.show(\'Добавить в ответ\',document.getElementById(\'addCButton\').offsetLeft,document.getElementById(\'addCButton\').offsetTop)" onMouseOut="advise.hide()" id="addCButton"/>                   <input type="button" value="&laquo;" onclick="document.getElementById(\'fieldC\').value=\'\'" style="position:relative;" onMouseOver="advise.show(\'Очистка поля C\',document.getElementById(\'clearCButton\').offsetLeft,document.getElementById(\'clearCButton\').offsetTop)" onMouseOut="advise.hide()" id="clearCButton" />             	   </td>                   </tr>                   </table>                                    <table align="center" width="100%">                  <tr>                    <td colspan="2" align="center">                    <span id="addSym"> Добавить символ: </span>                  	</td>                  </tr>                  <tr>                   <td width="80%" align="left">                   <input type="button" value="&alpha;" onclick="addSymbol(\'alpha\')" style="position:relative;" onMouseOver="advise.show(\'Буква АЛЬФА\',document.getElementById(\'alphaButton\').offsetLeft,document.getElementById(\'alphaButton\').offsetTop)" onMouseOut="advise.hide()" id="alphaButton"/>                   <input type="button" value="&beta;" onclick="addSymbol(\'beta\')" style="position:relative;" onMouseOver="advise.show(\'Буква БЕТТА\',document.getElementById(\'betaButton\').offsetLeft,document.getElementById(\'betaButton\').offsetTop)" onMouseOut="advise.hide()" id="betaButton"/>                   <input type="button" value="&gamma;" onclick="addSymbol(\'gamma\')" style="position:relative;" onMouseOver="advise.show(\'Буква ГАММА\',document.getElementById(\'gammaButton\').offsetLeft,document.getElementById(\'gammaButton\').offsetTop)" onMouseOut="advise.hide()" id="gammaButton" />                   <input type="button" value="&Pi;" onclick="addSymbol(\'pi\')" style="position:relative;" onMouseOver="advise.show(\'Число Пи\',document.getElementById(\'piButton\').offsetLeft,document.getElementById(\'piButton\').offsetTop)" onMouseOut="advise.hide()" id="piButton" />                   <input type="button" value="&phi;" onclick="addSymbol(\'phi\')" style="position:relative;" onMouseOver="advise.show(\'Буква Ф�?\',document.getElementById(\'phiButton\').offsetLeft,document.getElementById(\'phiButton\').offsetTop)" onMouseOut="advise.hide()" id="phiButton"/>                   <input type="button" value="&infin;" onclick="addSymbol(\'infinity\')" style="position:relative;" onMouseOver="advise.show(\'Знак бесконечности\',document.getElementById(\'infinityButton\').offsetLeft,document.getElementById(\'infinityButton\').offsetTop)" onMouseOut="advise.hide()" id="infinityButton"/>                   <input type="button" value="&deg;" onclick="addSymbol(\'deg\')" style="position:relative;" onMouseOver="advise.show(\'Градус(угловая мера)\', document.getElementById(\'degButton\').offsetLeft, document.getElementById(\'degButton\').offsetTop)" onMouseOut="advise.hide()" id="degButton"/>                   <input type="button" value="&Oslash;" onclick="addSymbol(\'emptyEnt\')" style="position:relative;" onMouseOver="advise.show(\'Пустое множество\', document.getElementById(\'empEntButton\').offsetLeft, document.getElementById(\'empEntButton\').offsetTop)" onMouseOut="advise.hide()" id="empEntButton"/>                   <input type="button" value="&isin;" onclick="addSymbol(\'isIn\')" style="position:relative;" onMouseOver="advise.show(\'Принадлежит\', document.getElementById(\'isInButton\').offsetLeft, document.getElementById(\'isInButton\').offsetTop)" onMouseOut="advise.hide()" id="isInButton"/>                   <input type="button" value="[" onclick="addSymbol(\'leftSq\')" />                   <input type="button" value="]" onclick="addSymbol(\'rightSq\')" />                   <input type="button" value="(" onclick="addSymbol(\'leftRnd\')" />                   <input type="button" value=")" onclick="addSymbol(\'rightRnd\')" />                   <input type="button" value="{" onclick="addSymbol(\'{\')" />                   <input type="button" value="}" onclick="addSymbol(\'}\')" />                   <input type="button" value=";" onclick="addSymbol(\';\')"  style="position:relative;" onMouseOver="advise.show(\'Точка с запятой\',document.getElementById(\'semiButton\').offsetLeft,document.getElementById(\'semiButton\').offsetTop)" onMouseOut="advise.hide()" id="semiButton"/>                   <input type="button" value="." onclick="addSymbol(\'.\')"  style="position:relative;" onMouseOver="advise.show(\'десятичная запятая\',document.getElementById(\'dotButton\').offsetLeft,document.getElementById(\'dotButton\').offsetTop)" onMouseOut="advise.hide()" id="dotButton"/>                   <input type="button" value="=" onclick="addSymbol(\'isEqual\')" style="position:relative;" onMouseOver="advise.show(\'Равно\',document.getElementById(\'isEqualButton\').offsetLeft,document.getElementById(\'isEqualButton\').offsetTop)" onMouseOut="advise.hide()" id="isEqualButton"/>                   <input type="button" value="+" onclick="addSymbol(\'plus\')" style="position:relative;" onMouseOver="advise.show(\'Суммирование\',document.getElementById(\'plusButton\').offsetLeft,document.getElementById(\'plusButton\').offsetTop)" onMouseOut="advise.hide()" id="plusButton"/>                   <input type="button" value="-" onclick="addSymbol(\'minus\')" style="position:relative;" onMouseOver="advise.show(\'Вычитание\',document.getElementById(\'minusButton\').offsetLeft,document.getElementById(\'minusButton\').offsetTop)" onMouseOut="advise.hide()" id="minusButton"/>                   <input type="button" value="&times;" onclick="addSymbol(\'multiply\')" style="position:relative;" onMouseOver="advise.show(\'Умножение\',document.getElementById(\'multiplyButton\').offsetLeft,document.getElementById(\'multiplyButton\').offsetTop)" onMouseOut="advise.hide()" id="multiplyButton"/>                   <input type="button" value="&#58;" onclick="addSymbol(\'divide\')" style="position:relative;" onMouseOver="advise.show(\'Деление\',document.getElementById(\'divideButton\').offsetLeft,document.getElementById(\'divideButton\').offsetTop)" onMouseOut="advise.hide()" id="divideButton"/>                   <input type="button" value="U" onclick="addSymbol(\'U\')" style="position:relative;" onMouseOver="advise.show(\'Объеденение множеств\',document.getElementById(\'unionButton\').offsetLeft,document.getElementById(\'unionButton\').offsetTop)" onMouseOut="advise.hide()" id="unionButton"/>                   <input type="button" value="&cap;" onclick="addSymbol(\'intersection\')" style="position:relative;" onMouseOver="advise.show(\'Пересечение множеств\',document.getElementById(\'intSectButton\').offsetLeft,document.getElementById(\'intSectButton\').offsetTop)" onMouseOut="advise.hide()" id="intSectButton"/>                   <input type="button" value="ln" onclick="addSymbol(\'ln\')" style="position:relative;" onMouseOver="advise.show(\'Натуральный логарифм\',document.getElementById(\'lnButton\').offsetLeft,document.getElementById(\'lnButton\').offsetTop)" onMouseOut="advise.hide()" id="lnButton"/>                   <input type="button" value="lg" onclick="addSymbol(\'lg\')" style="position:relative;" onMouseOver="advise.show(\'Десятичный логарифм\',document.getElementById(\'lgButton\').offsetLeft,document.getElementById(\'lgButton\').offsetTop)" onMouseOut="advise.hide()" id="lgButton"/>                   <input type="button" value="log" onclick="addSymbol(\'log\')" style="position:relative;" onMouseOver="advise.show(\'Логарифм\',document.getElementById(\'lоgButton\').offsetLeft,document.getElementById(\'lоgButton\').offsetTop)" onMouseOut="advise.hide()" id="lоgButton"/>                                      <input type="button" value="sin" onclick="addSymbol(\'sin\')" style="position:relative;" onMouseOver="advise.show(\'Синус\',document.getElementById(\'sinButton\').offsetLeft,document.getElementById(\'sinButton\').offsetTop)" onMouseOut="advise.hide()" id="sinButton"/>                    <input type="button" value="cos" onclick="addSymbol(\'cos\')" style="position:relative;" onMouseOver="advise.show(\'Косинус\',document.getElementById(\'cosButton\').offsetLeft,document.getElementById(\'cosButton\').offsetTop)" onMouseOut="advise.hide()" id="cosButton"/>                    <input type="button" value="tg" onclick="addSymbol(\'tg\')" style="position:relative;" onMouseOver="advise.show(\'Тангенс\',document.getElementById(\'tgButton\').offsetLeft,document.getElementById(\'tgButton\').offsetTop)" onMouseOut="advise.hide()" id="tgButton"/>                    <input type="button" value="ctg" onclick="addSymbol(\'ctg\')" style="position:relative;" onMouseOver="advise.show(\'Котангенс\',document.getElementById(\'ctgButton\').offsetLeft,document.getElementById(\'ctgButton\').offsetTop)" onMouseOut="advise.hide()" id="ctgButton"/>                    <input type="button" value="arcsin" onclick="addSymbol(\'arcsin\')" style="position:relative;" onMouseOver="advise.show(\'Арксинус\',document.getElementById(\'arcsinButton\').offsetLeft,document.getElementById(\'arcsinButton\').offsetTop)" onMouseOut="advise.hide()" id="arcsinButton"/>                   <input type="button" value="arccos" onclick="addSymbol(\'arccos\')" style="position:relative;" onMouseOver="advise.show(\'Арккосинус\',document.getElementById(\'arccosButton\').offsetLeft,document.getElementById(\'arccosButton\').offsetTop)" onMouseOut="advise.hide()" id="arccosButton"/>                     <input type="button" value="arctg" onclick="addSymbol(\'arctg\')" style="position:relative;" onMouseOver="advise.show(\'Арктангенс\',document.getElementById(\'arctgButton\').offsetLeft,document.getElementById(\'arctgButton\').offsetTop)" onMouseOut="advise.hide()" id="arctgButton"/>                     <input type="button" value="arcctg" onclick="addSymbol(\'arcctg\')" style="position:relative;" onMouseOver="advise.show(\'Арккотангенс\',document.getElementById(\'arcctgButton\').offsetLeft,document.getElementById(\'arcctgButton\').offsetTop)" onMouseOut="advise.hide()" id="arcctgButton"/>                   </td>                   <td width="20%">                   <select name="placeSelect" size="4" id="placeSelect">                   <option value="ans">в ответ</option>                   <option value="a">в поле А</option>                   <option value="b">в поле B</option>                   <option value="c" selected="selected">в поле C</option>                                </select>                   </td>                   </tr>                  		<tr>             <td colspan="2" align="center">             Добавить в поле С выражение:             </td>            </tr>            <tr>            	<td align="left">                	<input type="button" value="A^B" onclick="addSymbol(\'powAB\')" style="position:relative;" onMouseOver="advise.show(\'Возвести поле А в степень поля В\',document.getElementById(\'powButton\').offsetLeft,document.getElementById(\'powButton\').offsetTop)" onMouseOut="advise.hide()" id="powButton"/>                    <input type="button" value="&radic;A" onclick="addSymbol(\'sqrt\')" style="position:relative;" onMouseOver="advise.show(\'Корень квадратный из А\',document.getElementById(\'sqrtButton\').offsetLeft,document.getElementById(\'sqrtButton\').offsetTop)" onMouseOut="advise.hide()" id="sqrtButton"/>                    <input type="button" value="LOGaB" onclick="addSymbol(\'logAB\')" style="position:relative;" onMouseOver="advise.show(\'Логарифм от B по основанию A\', document.getElementById(\'logABButton\').offsetLeft,document.getElementById(\'logABButton\').offsetTop)" onMouseOut="advise.hide()" id="logABButton"/>                    <input type="button" value="&uarr;A" onclick="addSymbol(\'powA\')" style="position:relative;" onMouseOver="advise.show(\'Возведение в степень A\', document.getElementById(\'powAButton\').offsetLeft,document.getElementById(\'powAButton\').offsetTop)" onMouseOut="advise.hide()" id="powAButton"/>                    <input type="button" value="&darr;A" onclick="addSymbol(\'indexA\')" style="position:relative;" onMouseOver="advise.show(\'с индексом A\', document.getElementById(\'indexAButton\').offsetLeft,document.getElementById(\'indexAButton\').offsetTop)" onMouseOut="advise.hide()" id="indexAButton"/>            	</td>            </tr>                   </table>                </td>';
		tableConstructor+='</tr></table>';*/
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
//Построение ячейки для ввода текста сочинения
function buildTvir()
{
    var tableConstructor='<td><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\">'+textTvir+':</div><div align=\"center\" style=\"width:100%; text-align:center; clear:both;\"><textarea cols=\"55\" rows=\"5\"  onkeyup=\"checkWordNumber()\" id=\"TvirText\" name=\"TvirText\"></textarea></div><div align="center" style="width:100%; text-align:center; clear:both;" id="WordCounter" name="WordCounter" class="WordCounterView">                       </div></td>';
    /*'<table align="center"><tr>';
 tableConstructor+=' <td class="ZnoTvirView" name="ZnoTvir" id="ZnoTvir" align="center">                	<table>					<tr align="center">							<td>						 Введите текст Вашего сочинения:						</td>					</tr>					 <tr align="center">                     							<td>                    	<textarea cols="55" rows="5"  onkeyup="checkWordNumber()" id="TvirText" name="TvirText"></textarea>                        </td>                      </tr>                      <tr align="center">                       <td id="WordCounter" name="WordCounter" class="WordCounterView">                       </td>                      </tr>                    </table>                  </td>';
 tableConstructor+='</tr></table>';*/
    document.getElementById("ZnoOuterTableRowVariant").innerHTML=tableConstructor;
}
function buildResultTable(testTitle)
{
    var tableConstructor=' <table align="center" class="ZnoResultTableView" id="ZnoResultTable" name="ZnoResultTable">	<tr>    	<!-- Ячейка с заголовком таблицы результатов тестирования -->        <td colspan="2" class="ZnoResultTitleView" name="ZnoResultTitle" id="ZnoResultTitle">'+textTestResult+'<br /> ('+testTitle+')        </td>	</tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием всех ответов (правильных и неправильных) -->        	<td class="ZnoResultTotalAnswerView" name="ZnoResultTotalAnswer" id="ZnoResultTotalAnswer">             '+textTotalAnswers+':        </td>        <!-- Ячейка с числом всех ответов (правильных и неправильных) -->        <td class="ZnoResultTotalAnswerNumberView" name="ZnoResultTotalAnswerNumber" id="ZnoResultTotalAnswerNumber">        	0        </td>    </tr>    <tr class="ResultRowView">    	<!-- Ячейка с описанием пропущенных заданий  -->         <td class="ZnoResultPassedView" name="ZnoResultPassed" id="ZnoResultPassed">             '+textPassedAnswers+':        </td>        <!-- Ячейка с числом пропущенных заданий  -->        <td class="ZnoResultPassedNumberView" name="ZnoResultPassedNumber" id="ZnoResultPassedNumber">             0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием правильных ответов -->        	<td class="ZnoResultCorrectAnswerView" name="ZnoResultCorrectAnswer" id="ZnoResultCorrectAnswer">             '+textCorrectAnswer+':        </td>        <!-- Ячейка с числом правильных ответов  -->        <td class="ZnoResultCorrectAnswerNumberView" name="ZnoResultCorrectAnswerNumber" id="ZnoResultCorrectAnswerNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием балла ЗНО -->        	<td class="ZnoResultGradeView" name="ZnoResultGrade" id="ZnoResultGrade">             '+textRatingZNO+':        </td>        <!-- Ячейка с числом балла ЗНО  -->        <td class="ZnoResultGradeNumberView" name="ZnoResultGradeNumber" id="ZnoResultGradeNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с описанием затраченного времени -->        	<td class="ZnoResultTimeView" name="ZnoResultTime" id="ZnoResultTime">             '+textTimeSpent+':        </td>        <!-- Ячейка с числом затраченного времени -->        <td class="ZnoResultTimeNumberView" name="ZnoResultTimeNumber" id="ZnoResultTimeNumber">        	0        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с подробным описанием неправильных ответов -->        	<td class="ZnoResultPoorAnswerView" name="ZnoResultPoorAnswer" id="ZnoResultPoorAnswer">             '+textWrongAnswers+':        </td>        <!-- Ячейка с перечислением неправильных ответов -->        <td class="ZnoResultPoorAnswerDetailView" name="ZnoResultPoorAnswerDetail" id="ZnoResultPoorAnswerDetail">        	0 <br/>  0 <br /> 0 <br />        </td>    </tr>    <tr class="ResultRowView">	        <!-- Ячейка с подробным описанием пропущенных ответов -->       	  <td class="ZnoResultPassedAnswerView" name="ZnoResultPassedAnswer" id="ZnoResultPassedAnswer">             '+textPassedTasks+':      </td>        <!-- Ячейка с перечислением пропущенных ответов -->      <td class="ZnoResultPassedAnswerDetailView" name="ZnoResultPassedAnswerDetail" id="ZnoResultPassedAnswerDetail">        	0 <br/>  0 <br /> 0 <br />      </td>    </tr>    <tr>	        <!-- Ячейка с запросом на повторное тестирование -->        	<td class="ZnoResultRepeatView" name="ZnoResultRepeat" id="ZnoResultRepeat">             '+textRepeatTest+':        </td>        <!-- Ячейка с кнопкой начала повторного тестирования -->        <td class="ZnoResultRepeatButtonView" name="ZnoResultRepeatButton" id="ZnoResultRepeatButton">        	<input name="ZnoResultRepeatTestButton" type="button" id="ZnoResultRepeatTestButton" value="'+textRepeatButton+'" onClick="testInit(\''+testTitle+'\')"/>        </td>    </tr>    </table>';
    document.getElementById("ZnoOuterTable").innerHTML=tableConstructor;
 
}
function buildTestTable(testTitle,sourceDir)
{
    var tableConstructor='<tr class="ZnoOuterTableRowHeaderView" name="ZnoOuterTableRowHeader" id="ZnoOuterTableRowHeader">	<td>              <!--Внутренняя таблица с номером задания и названием теста --><table class="ZnoInnerTableHeaderView" name="ZnoInnerTableHeader" id="ZnoInnerTableHeader">              	<tbody><tr>                     <!-- Ячейка с номером задания -->                     <td class="ZnoTaskNumberView" name="ZnoTaskNumber" id="ZnoTaskNumber">'+textTaskNumber+':<!-- счетчик номера задания --><span class="TaskNumberView" id="TaskNumber" name="TaskNumberCounter"> 1</span></td>                     <!-- Ячейка с названием теста -->                     <td class="ZnoTestNameView" name="ZnoTestName" id="ZnoTestName">'+testTitle+'</td>                                  </tr>          </tbody></table>        </td>  </tr>    <!-- Строка таблицы с счетчиками ответов и оставшегося времени -->  <tr class="ZnoOuterTableRowCounterView" name="ZnoOuterTableRowCounter" id="ZnoOuterTableRowCounter">        <td>                  <!-- Внутренняя таблица со счетчиками ответов и оставшегося времени --><table class="ZnoInnerTableCounterView" name="ZnoInnerTableCounter" id="ZnoInnerTableCounter">                <tbody><tr>                    <!-- Ячейка со счетчиком ответов -->                    <td class="ZnoGivenAnswersView" name="ZnoGivenAnswers" id="ZnoGivenAnswers">'+textTasksLeft+': <!-- Счетчик ответов --><span class="GivenAnswersView" name="GivenAnswers" id="GivenAnswers">46</span></td>                    <!-- Ячейка со счетчиком времени -->                    <td class="ZnoTimeLeftView" name="ZnoTimeLeft" id="ZnoTimeLeft">'+textLeftMin+': <span class="TimeLeftView" name="TimeLeft" id="TimeLeft">120</span></td>                </tr>          </tbody></table>        </td>                    </tr>    <!-- Строка таблицы с условиями задания -->  <tr class="ZnoOuterTableRowTaskView" name="ZnoOuterTableRowTask" id="ZnoOuterTableRowTask">    <td><div class="TaskView" name="Task" id="Task" style="position: relative;" align="center">               <img name="TaskImg" id="TaskImg" title="'+testTitle+'. '+textTask+' 1" alt="'+testTitle+'. '+textTask+' 1" src="'+sourceDir+'/task1.gif" width="500" align="center" height="250"><div id="TaskTip" align="center">'+textPressIncreasePicture+'</div></div>       </td>  </tr>    <!-- Строка таблицы с вариантами ответов -->  <tr class="ZnoOuterTableRowVariantView" name="ZnoOuterTableRowVariant" id="ZnoOuterTableRowVariant">                    </tr>    <!-- Строка таблицы с кнопками управления -->  <tr class="ZnoOuterTableControlView" name="ZnoOuterTableControl" id="ZnoOuterTableControl">    <td>      <!-- Внутренняя таблица с кнопками управления ходом тестирования: "далее" и "прервать тестирование" -->  		<table class="ZnoInnerTableControlView" name="ZnoInnerTableControl" id="ZnoInnerTableControl">        	<tbody><tr>            	<!-- ячейка с кнопкой "Пропустить задание" -->            	<td class="PassAnswerView" name="PassAnswer" id="PassAnswer">                <input value="'+textPassTask+'" name="PassAnswerButton" id="PassAnswerButton" onclick="userPass()" type="button">        <!-- ячейка с кнопкой "Начать тест/Далее" -->        		</td>            	<td class="ResumeTestView" name="ResumeTest" id="ResumeTest"><input value="'+textAcceptAnswer+'" name="ResumeTestButton" id="ResumeTestButton" onclick="nextTask()" type="button"></td>        <!-- ячейка с кнопкой "Прервать тест" -->          		<td class="StopTestView" name="StopTest" id="StopTest">                <input value="'+textFinishTest+'" name="StopTestButton" id="StopTestButton" onclick="resultReport()" type="button" align="right">		                </td>                  	</tr>                    </tbody></table>    </td>  </tr>';
    document.getElementById("ZnoOuterTable").innerHTML=tableConstructor;
}

