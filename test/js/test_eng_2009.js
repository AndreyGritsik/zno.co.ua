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
/*ЗНО-2009 Английский язык. Основной тест.*/
	if(testName==znoEng2009Main)
	{
		testLength=45;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2009main1\/';
		testTitle = znoName+"2009"+znoEngName;
		testDetails=mainName;
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
			curView=new view(testName,i+1,testDirectory,"picture",variantNumberArray[i], "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}


/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		startInitialization();		
	
}