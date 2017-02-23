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
//Тесты по английскому языку	
/*************************************************************/	

/*ЗНО-2012 Английский язык. Основной тест.*/
	if(testName==znoEng2012Main)
	{
		testLength=43;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2012main1\/';
		testTitle = znoName+"2012"+znoEngName;
		testDetails=mainName;
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
			curView=new view(testName,i+1,testDirectory,"picture",variantNumberArray[i], "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}
/*завершение зно 2012*/
	
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		startInitialization();	
}
