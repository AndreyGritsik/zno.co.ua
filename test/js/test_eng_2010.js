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
/*ЗНО-2010 Английский язык. Основной тест.*/
	if(testName==znoEng2010Main)
	{
		testLength=51;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2010main1\/';
		testTitle = znoName+"2010"+znoEngName;
		testDetails=mainName;
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
			curView=new view(testName,i+1,testDirectory,"picture",variantNumberArray[i], "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}
	
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		startInitialization();		
	
}
