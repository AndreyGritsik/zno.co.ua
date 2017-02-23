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
/*	if(testName=="ЗНО-2009 Английский язык. Основной тест.")
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
*/
/*ЗНО-2010 Английский язык. Основной тест.*/
/*	if(testName=="ЗНО-2010 Английский язык. Основной тест.")
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
*/
/*ЗНО-2011 Английский язык. Основной тест.*/
/*	if(testName=="ЗНО-2011 Английский язык. Основной тест.")
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
	}*/
/*ЗНО-2012 Английский язык. Основной тест.*/
/*	if(testName=="ЗНО-2012 Английский язык. Основной тест.")
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
	}*/
/*завершение зно 2012*/
/*ЗНО-2013 английский язык. Основной тест. I сессия*/
	if(testName==znoEng2013Main)
	{
		testLength=43;
		timeCounter=120*60;
		testTime=timeCounter;
		testDirectory='\/test\/eng\/img\/test2013main1\/';
		fullTextWindowHorizontalOffset=-150;
		fullTextWindowVerticalOffset=-75;
		answerLanguage="eng";
		gradeArray=new Array("100.0","100.5","100.5","102.0","105.0","108.5","113.0","116.0","120.5","125.5","128.5","131.5","134.0","136.0","137.5","139.0","140.0","141.5","142.5","144.0","145.0","146.0","147.0","148.0","149.0","150.5","151.5","152.5","153.5","154.5","155.5","156.5","158.0","159.0","160.0","161.5","162.5","164.0","165.5","166.5","168.0","169.5","171.5","173.0","175.0","177.0","179.0","181.0","183.5","186.5","189.0","192.0","194.5","197.0","199.0","199.5","200.0");
		answerArray=new Array();
		taskTypeArray=new Array();
		textAnalysisArray=new Array();
		taskMarkArray=new Array();
		variantNumberArray=new Array();
		directionArray=new Array();
		viewArray=new Array();
		taskTextsArray=new Array();
		var chupaChups="The History of Chupa Chups Lollipops\n\n\t The Chupa Chups company started as an idea of a Spanish citizen named Enric Bernat in 1958. Mr. Bernat started his career at an apple jam factory. He approached investors about a lollipop business but he failed to get support. He took over the company himself and built the first production machines with his own hands. He also decided that the new creation would be called Chupa Chups, after the Spanish verb chupar, which translates into to suck.\n\t Enric Bernat knew that the bon-bons on a wooden stick would be an instant hit. Previously candy had been marketed as a luxury and kept away from children. However, he knew that if he could get the candy into the view of children he would sell many more lollipops. Five years after he first introduced the idea, Chupa Chups were being sold at over 300,000 stores across Europe. \n\t The original Chupa Chups sales force was over 600 sales agents for 300,000 locations. This amazing sales force sped across Europe to bring the good news and delicious taste of the Chupa Chups lollipops to the masses. Without their dedication and excitement, there would be no way the company could have grown to the massive size that it is today. \n\t Sadly, the traditional wooden stick that was associated with Chupa Chups had to be discontinued and replaced with a plastic one due to the lack of wood available in Spain. The stick has remained plastic ever since. \n\t Chupa Chups were originally going to be called GOL but the name did not stick. An advertising firm came up with the idea to name them Chupa and the delightful lollipops were born. Salvador Dali, the famous painter, created the new Chupa Chups logo, which remains on the wrapper on all of the lollipops to this day. \n\t The Chupa Chups business went international beginning with Asia and Australia in the 1970’s. It soon followed to North America and the rest of Europe. The amazing results led to a high point for the company, with the production of over 4 billion Chupa Chups lollipops during the 2003 calendar year.";
		var zebras="Why are Zebras Striped?\n\nWhen zebras stick together in a herd, the pattern of their stripes blend together with the stripes of the zebras around them. This is confusing to a lion! All it can see is a large, moving, striped mass. The lion has trouble picking out individual zebras and it’s harder still for the lion to recognize (17)____!\n\nEach zebra pattern is unique like a fingerprint. Like a fingerprint (18)____ and no two zebras are exactly alike. What is truly amazing is (19)____ from their body stripe!\n\nThere are several species classified according to variations in stripe patterns. The mountain zebra has silver-white stripes with black markings (20)____ except for the stomach and the inner thighs. Plains zebras are pale yellow with broad black stripes.\n\nDo you know that people of Africa think of zebras as black animals with white stripes (21)____ as white animals with black stripes! Black stripes or white, the fact remains (22)____ and are among the fastest and most graceful of runners in the African bush land.";
		var Sugababes="\tSugababes\n\nThe story of the Sugababes starts with two self-confident eight-year-old friends from London who (23)____ a hatred of maths but loved singing (24)____ to the radio. Mutya and Keisha then met Siobhan who joined their “gang”. They (25)____ writing and singing and at fourteen the group (26)____ their first record deal. Just two years later, when their classmates were studying for their exams, the girls (27)__________ their first album, the incredibly cool One Touch. But it wasn’t as easy as it (28)____. The album didn’t get publicity and Siobhan decided to leave the group.\n\nKeisha and Mutya advertised for another girl but did not want to (29)____ the group name. “We wanted someone who could sing and had her own ideas,” they said. That was Heidi. Heidi used to be in the girlband Atomic Kitten but she left because she never quite (30)____ in. Heidi was desperate to sing live in concerts and do her own writing – and she soon realised that she would never be able to do this in a “manufactured” band. Her love of urban music (31)____ her the perfect Sugababe. The three became friends as soon as they met and (32)____ to write and record the huge Angels with Dirty Faces album.";
		var toucan="\tThe Beak of the Toucan\n\nWhy does the toucan (33)____ such an enormous beak? The answer, we learned in August, may be that it uses it (34)____ body temperature. Infrared measurement (35)____ just before sleep shows that the bird’s long beak – which can grow to (36)____ of its body size – gets hotter, (37)____ the bird uses it in the presleep cooling process. At other times, as the external heat rises, so too does the heat of the toucan’s beak, while its core body heat stays the same.";
		var ScientificProgress="\tScientific Progress\n\nDespite warnings that it might set off a catastrophic chain reaction that could (38)____ the Earth, scientists have (39)____ created a miniature version of the Big Bang, without any observable ill effects. They were able (40)____ a temperature of (41)____ ten trillion degrees – a million times hotter than the centre of the sun – by (42)____ together lead ions at incredible speeds in the Large Hadron Collider, a 27 km underground tunnel at the CERN (European Organization for Nuclear Research) facility near Geneva.";
		var taskNumber=1;
		/*задание №1 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=1;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 1<br>Read the text below.<br>What are the advertisement about?<p style='text-align:center;  color:red;'>BACK PAIN?<br>Use these Safe and Simple methods to free<br>yourself from back pain misery.<br>FREE Report<br>Visit:<br>www.banishbackpain.co.uk</p>";
			zadanieArray[1]="Properties for sale";
			zadanieArray[2]="Educational services";
			zadanieArray[3]="Editing services";
			zadanieArray[4]="Holidaymaking";
			zadanieArray[5]="Art exhibition";
			zadanieArray[6]="Publishing services";
			zadanieArray[7]="Handicraft art";
			zadanieArray[8]="Health care";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="h";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №2 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=2;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 1<br>Read the text below.<br>What are the advertisement about?<p style='text-align:center;  color:red;'>We make a book out of your manuscript.<br>Looking for NEW AUTHORS<br>ALL SUBJECTS INVITED<br>write or send your work to:<br>ATHENA PRESS<br>QUEEN’S HOUSE, 3 HOLLY ROAD,<br>TWICKENHAM, TW1 4EG<br>www.athenapress.com<br>e-mail: info@athenapress.com</p>";
			zadanieArray[1]="Properties for sale";
			zadanieArray[2]="Educational services";
			zadanieArray[3]="Editing services";
			zadanieArray[4]="Holidaymaking";
			zadanieArray[5]="Art exhibition";
			zadanieArray[6]="Publishing services";
			zadanieArray[7]="Handicraft art";
			zadanieArray[8]="Health care";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="f";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №3 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=3;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 1<br>Read the text below.<br>What are the advertisement about?<p style='text-align:center;  color:red;'>KCP International<br>Language Institute<br>is pleased to be able to offer students from around<br>the world a unique opportunity to learn more about<br>Japan, its language and culture. Our programs are<br>open to all English speaking students.<br>http://www.kcpinternational.com</p>";
			zadanieArray[1]="Properties for sale";
			zadanieArray[2]="Educational services";
			zadanieArray[3]="Editing services";
			zadanieArray[4]="Holidaymaking";
			zadanieArray[5]="Art exhibition";
			zadanieArray[6]="Publishing services";
			zadanieArray[7]="Handicraft art";
			zadanieArray[8]="Health care";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №4 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=4;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 1<br>Read the text below.<br>What are the advertisement about?<p style='text-align:center;  color:red;'>THE JOHN DAVIES GALLERY<br>Deep in the West Country<br>RICHARD THORN<br>Admire our new collection of 50 new paintings<br>2nd – 23rd October 2010<br>Open 9.30 am – 5.30 pm<br>Monday to Saturday</p>";
			zadanieArray[1]="Properties for sale";
			zadanieArray[2]="Educational services";
			zadanieArray[3]="Editing services";
			zadanieArray[4]="Holidaymaking";
			zadanieArray[5]="Art exhibition";
			zadanieArray[6]="Publishing services";
			zadanieArray[7]="Handicraft art";
			zadanieArray[8]="Health care";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №5 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=5;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 1<br>Read the text below.<br>What are the advertisement about?<p style='text-align:center;  color:red;'>Melbury Abbas, Dorset SP7<br>&pound;625,000 guide price<br>An attractively designed 4 bedroom modern family<br>home in a lovely setting with half an acre of<br>delightfully landscaped gardens.<br>Contact 9901 7490 65</p>";
			zadanieArray[1]="Properties for sale";
			zadanieArray[2]="Educational services";
			zadanieArray[3]="Editing services";
			zadanieArray[4]="Holidaymaking";
			zadanieArray[5]="Art exhibition";
			zadanieArray[6]="Publishing services";
			zadanieArray[7]="Handicraft art";
			zadanieArray[8]="Health care";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №6 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=6;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 2<br>Read the text below.<p style='text-align:justify;  color:black;'>Which of the following is stated in the text about Enric Bernat?</p>"; 
			zadanieArray[1]="He inherited the family business.";
			zadanieArray[2]="He borrowed money from a bank.";
			zadanieArray[3]="He devoted his life to jam production.";
			zadanieArray[4]="He made the factory equipment himself.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=chupaChups;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №7 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=7;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 2<br>Read the text below.<p style='text-align:justify;  color:black;'>What is TRUE about the Chupa Chups logo?</p>"; 
			zadanieArray[1]="It was designed by a great artist.";
			zadanieArray[2]="It made the lollipop more popular.";
			zadanieArray[3]="It has changed three times by now.";
			zadanieArray[4]="It varies from country to country.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=chupaChups;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №8 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=8;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 2<br>Read the text below.<p style='text-align:justify;  color:black;'>Where was the Chupa Chups business originally concentrated?</p>"; 
			zadanieArray[1]="In Asia";
			zadanieArray[2]="In Europe";
			zadanieArray[3]="In Australia";
			zadanieArray[4]="In America";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=chupaChups;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №9 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=9;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 2<br>Read the text below.<p style='text-align:justify;  color:black;'>According to the text, what helped the company to become a big success?</p>"; 
			zadanieArray[1]="The product’s unusual name";
			zadanieArray[2]="The variety of lollipop tastes";
			zadanieArray[3]="The candy’s attractive wrapping";
			zadanieArray[4]="The sales staff’s enthusiasm";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=chupaChups;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №10 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=10;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 2<br>Read the text below.<p style='text-align:justify;  color:black;'>Which of the following is NOT TRUE according to the text?</p>"; 
			zadanieArray[1]="Candies used to be an expensive treat.";
			zadanieArray[2]="The name Chupa Chups means bon-bons.";
			zadanieArray[3]="Chupa Chups originally had wooden sticks.";
			zadanieArray[4]="Bernat’s product was meant mainly for children.";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=chupaChups;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №11 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=11;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 3<br>Read the text below.<p style='text-align:justify;  color:blue;'><p style='text-align:center;'>Chinese New Year</p>Chinese New Year is the most important of the traditional Chinese holidays. It falls on different dates each year, between January&nbsp;21 and February&nbsp;20. Visits to friends and family take place during this celebration. Everything golden is said to bring wealth, and everything red is considered especially lucky.</p><p style='text-align:justify;  color:black;'>Which of the winter celebrations is associated with&nbsp;________?</p>";
			zadanieArray[1]="bonfires in the backyard";
			zadanieArray[2]="honoring people’s main values";
			zadanieArray[3]="an imaginary figure appearing in different ways";
			zadanieArray[4]="a festive treat containing a surprise";
			zadanieArray[5]="colours to make people fortunate";
			zadanieArray[6]="sharing food with neighbours";
			zadanieArray[7]="a special dish eaten with something sweet";
			zadanieArray[8]="greens as symbols of riches";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;	
		/*задание №12 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=12;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 3<br>Read the text below.<p style='text-align:justify;  color:blue;'><p style='text-align:center;'>Christmas</p>Christmas is the celebration of the birth of Jesus Christ. Around the world, family members help to decorate trees and homes with bright lights, wreaths, candles, holly, mistletoe, and ornaments. On Christmas Eve, many people go to church. Also on Christmas Eve, Santa comes from the North Pole in a sleigh to deliver gifts. In Hawaii, it is said he arrives by boat, in Australia, the jolly man arrives on water skis, and in Ghana, he comes out of the jungle.</p><p style='text-align:justify;  color:black;'>Which of the winter celebrations is associated with&nbsp;________?</p>";
			zadanieArray[1]="bonfires in the backyard";
			zadanieArray[2]="honoring people’s main values";
			zadanieArray[3]="an imaginary figure appearing in different ways";
			zadanieArray[4]="a festive treat containing a surprise";
			zadanieArray[5]="colours to make people fortunate";
			zadanieArray[6]="sharing food with neighbours";
			zadanieArray[7]="a special dish eaten with something sweet";
			zadanieArray[8]="greens as symbols of riches";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;	
		/*задание №13 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=13;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 3<br>Read the text below.<p style='text-align:justify;  color:blue;'><p style='text-align:center;'>Hanukkah</p>Jewish people celebrate Hanukkah, a holiday honoring the Maccabees victory over King Antiochus, who forbade Jews to practice their religion. For eight nights, Hanukkah is celebrated with prayer, the lighting of the menorah, and food. Children play games, sing  songs, and exchange gifts. Potato pancakes, known as latkes in Yiddish, are traditionally served with applesauce or jam.</p><p style='text-align:justify;  color:black;'>Which of the winter celebrations is associated with&nbsp;________?</p>";
			zadanieArray[1]="bonfires in the backyard";
			zadanieArray[2]="honoring people’s main values";
			zadanieArray[3]="an imaginary figure appearing in different ways";
			zadanieArray[4]="a festive treat containing a surprise";
			zadanieArray[5]="colours to make people fortunate";
			zadanieArray[6]="sharing food with neighbours";
			zadanieArray[7]="a special dish eaten with something sweet";
			zadanieArray[8]="greens as symbols of riches";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="g";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;	
		/*задание №14 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=14;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 3<br>Read the text below.<p style='text-align:justify;  color:blue;'><p style='text-align:center;'>Kwanzaa</p>On December&nbsp;26, Kwanzaa is celebrated. It is a holiday to commemorate African heritage. Kwanzaa lasts a week during which participants gather with family and friends to exchange gifts and to light a series of black, red, and green candles. These candles symbolize the seven basic merits of African American family life: unity, self-determination, collective work and responsibility, cooperative economics, purpose, creativity, and faith.</p><p style='text-align:justify;  color:black;'>Which of the winter celebrations is associated with&nbsp;________?</p>";
			zadanieArray[1]="bonfires in the backyard";
			zadanieArray[2]="honoring people’s main values";
			zadanieArray[3]="an imaginary figure appearing in different ways";
			zadanieArray[4]="a festive treat containing a surprise";
			zadanieArray[5]="colours to make people fortunate";
			zadanieArray[6]="sharing food with neighbours";
			zadanieArray[7]="a special dish eaten with something sweet";
			zadanieArray[8]="greens as symbols of riches";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;	
		/*задание №15 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=15;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 3<br>Read the text below.<p style='text-align:justify;  color:blue;'><p style='text-align:center;'>New Year’s Day</p>New Year’s Day, on January&nbsp;1, is the first day of the year in the Gregorian calendar. There are often fireworks at midnight to celebrate the New Year. Commonly served in the southern part of the United States, peas are thought to bring luck for the New Year, and vegetables bring wealth.</p><p style='text-align:justify;  color:black;'>Which of the winter celebrations is associated with&nbsp;________?</p>";
			zadanieArray[1]="bonfires in the backyard";
			zadanieArray[2]="honoring people’s main values";
			zadanieArray[3]="an imaginary figure appearing in different ways";
			zadanieArray[4]="a festive treat containing a surprise";
			zadanieArray[5]="colours to make people fortunate";
			zadanieArray[6]="sharing food with neighbours";
			zadanieArray[7]="a special dish eaten with something sweet";
			zadanieArray[8]="greens as symbols of riches";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="h";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;	
		/*задание №16 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=16;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 3<br>Read the text below.<p style='text-align:justify;  color:blue;'><p style='text-align:center;'>Three Kings Day</p>At the end of the Twelve Days of Christmas comes a day called the Epiphany, or Three Kings Day. This holiday is celebrated as the day the three wise men first saw baby Jesus and brought him gifts. On this day in Spain, many children get their Christmas presents. In Puerto Rico, before children go to sleep on January&nbsp;5, they leave a box with hay under their beds so the kings will leave good presents. In France, a delicious King cake is baked. Bakers will hide a coin, jewel or little toy inside it.</p><p style='text-align:justify;  color:black;'>Which of the winter celebrations is associated with&nbsp;________?</p>";
			zadanieArray[1]="bonfires in the backyard";
			zadanieArray[2]="honoring people’s main values";
			zadanieArray[3]="an imaginary figure appearing in different ways";
			zadanieArray[4]="a festive treat containing a surprise";
			zadanieArray[5]="colours to make people fortunate";
			zadanieArray[6]="sharing food with neighbours";
			zadanieArray[7]="a special dish eaten with something sweet";
			zadanieArray[8]="greens as symbols of riches";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="test";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;	
		/*задание №17 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=17;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 4<br>Read the text below.<br> Choose from (A – H) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>The lion has trouble picking out individual zebras and it’s harder still for the lion to recognize (17)&nbsp;__________!</p>";
			zadanieArray[1]="that zebras are extremely unique";
			zadanieArray[2]="patterns vary from zebra to zebra";
			zadanieArray[3]="whereas people outside Africa consider them";
			zadanieArray[4]="zebras’ stripes are hard to count";
			zadanieArray[5]="that zebras can recognize other zebras";
			zadanieArray[6]="which way each zebra is moving";
			zadanieArray[7]="Africans try to protect zebras";
			zadanieArray[8]="that extend to every part of the body";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="f";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=zebras;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №18 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=18;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 4<br>Read the text below.<br> Choose from (A – H) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Like a fingerprint (18)&nbsp;__________and no two zebras are exactly alike.</p>";
			zadanieArray[1]="that zebras are extremely unique";
			zadanieArray[2]="patterns vary from zebra to zebra";
			zadanieArray[3]="whereas people outside Africa consider them";
			zadanieArray[4]="zebras’ stripes are hard to count";
			zadanieArray[5]="that zebras can recognize other zebras";
			zadanieArray[6]="which way each zebra is moving";
			zadanieArray[7]="Africans try to protect zebras";
			zadanieArray[8]="that extend to every part of the body";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=zebras;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №19 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=19;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 4<br>Read the text below.<br> Choose from (A – H) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>What is truly amazing is (19)&nbsp;__________from their body stripe!</p>";
			zadanieArray[1]="that zebras are extremely unique";
			zadanieArray[2]="patterns vary from zebra to zebra";
			zadanieArray[3]="whereas people outside Africa consider them";
			zadanieArray[4]="zebras’ stripes are hard to count";
			zadanieArray[5]="that zebras can recognize other zebras";
			zadanieArray[6]="which way each zebra is moving";
			zadanieArray[7]="Africans try to protect zebras";
			zadanieArray[8]="that extend to every part of the body";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="e";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=zebras;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №20 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=20;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 4<br>Read the text below.<br> Choose from (A – H) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>The mountain zebra has silver-white stripes with black markings (20)&nbsp;__________except for the stomach and the inner thighs.</p>";
			zadanieArray[1]="that zebras are extremely unique";
			zadanieArray[2]="patterns vary from zebra to zebra";
			zadanieArray[3]="whereas people outside Africa consider them";
			zadanieArray[4]="zebras’ stripes are hard to count";
			zadanieArray[5]="that zebras can recognize other zebras";
			zadanieArray[6]="which way each zebra is moving";
			zadanieArray[7]="Africans try to protect zebras";
			zadanieArray[8]="that extend to every part of the body";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="h";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=zebras;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №21 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=21;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 4<br>Read the text below.<br> Choose from (A – H) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Do you know that people of Africa think of zebras as black animals with white stripes (21)&nbsp;__________as white animals with black stripes!</p>";
			zadanieArray[1]="that zebras are extremely unique";
			zadanieArray[2]="patterns vary from zebra to zebra";
			zadanieArray[3]="whereas people outside Africa consider them";
			zadanieArray[4]="zebras’ stripes are hard to count";
			zadanieArray[5]="that zebras can recognize other zebras";
			zadanieArray[6]="which way each zebra is moving";
			zadanieArray[7]="Africans try to protect zebras";
			zadanieArray[8]="that extend to every part of the body";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=zebras;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №22 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=22;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 4<br>Read the text below.<br> Choose from (A – H) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Black stripes or white, the fact remains (22)&nbsp;__________and are among the fastest and most graceful of runners in the African bush land.</p>";
			zadanieArray[1]="that zebras are extremely unique";
			zadanieArray[2]="patterns vary from zebra to zebra";
			zadanieArray[3]="whereas people outside Africa consider them";
			zadanieArray[4]="zebras’ stripes are hard to count";
			zadanieArray[5]="that zebras can recognize other zebras";
			zadanieArray[6]="which way each zebra is moving";
			zadanieArray[7]="Africans try to protect zebras";
			zadanieArray[8]="that extend to every part of the body";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=zebras;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=8;
		/*задание №23 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=23;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>The story of the Sugababes starts with two self-confident eight-year-old friends from London who (23)&nbsp;__________a hatred of maths but loved singing...</p>"; 
			zadanieArray[1]="united";
			zadanieArray[2]="combined";
			zadanieArray[3]="shared";
			zadanieArray[4]="joined";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №24 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=24;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>...hatred of maths but loved singing (24)&nbsp;__________to the radio.</p>"; 
			zadanieArray[1]="along";
			zadanieArray[2]="nearly";
			zadanieArray[3]="across";
			zadanieArray[4]="beside";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №25 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=25;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>They (25)&nbsp;__________writing and singing...</p>"; 
			zadanieArray[1]="opened";
			zadanieArray[2]="disclosed";
			zadanieArray[3]="revealed";
			zadanieArray[4]="discovered";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №26 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=26;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>...and at fourteen the group (26)&nbsp;__________their first record deal.</p>"; 
			zadanieArray[1]="took";
			zadanieArray[2]="brought";
			zadanieArray[3]="got";
			zadanieArray[4]="wrote";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №27 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=27;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Just two years later, when their classmates were studying for their exams, the girls (27)&nbsp;__________their first album, the incredibly cool <i>One Touch</i>.</p>"; 
			zadanieArray[1]="demonstrated";
			zadanieArray[2]="released";
			zadanieArray[3]="published";
			zadanieArray[4]="displayed";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №28 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=28;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>But it wasn’t as easy as it (28)&nbsp;__________.</p>"; 
			zadanieArray[1]="says";
			zadanieArray[2]="proclaims";
			zadanieArray[3]="goes";
			zadanieArray[4]="sounds";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №29 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=29;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Keisha and Mutya advertised for another girl but did not want to (29)&nbsp;__________the group name.</p>"; 
			zadanieArray[1]="bare";
			zadanieArray[2]="mention";
			zadanieArray[3]="describe";
			zadanieArray[4]="comment";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №30 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=30;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Heidi used to be in the girlband Atomic Kitten but she left because she never quite (30)&nbsp;__________in.</p>"; 
			zadanieArray[1]="fitted";
			zadanieArray[2]="went";
			zadanieArray[3]="suited";
			zadanieArray[4]="got";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №31 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=31;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Her love of urban music (31)&nbsp;__________her the perfect Sugababe.</p>"; 
			zadanieArray[1]="kept";
			zadanieArray[2]="did";
			zadanieArray[3]="held";
			zadanieArray[4]="made";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;
		/*задание №32 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=32;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 5<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>The three became friends as soon as they met and (32)&nbsp;__________to write and record the huge <i>Angels with Dirty Faces</i> album.</p>"; 
			zadanieArray[1]="went down";
			zadanieArray[2]="went off";
			zadanieArray[3]="went on";
			zadanieArray[4]="went up";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=Sugababes;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №33 ЗНО-2013 английский язык. Основной тест(доделать!!!)*/
			taskNumber=33;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Why does the toucan (33)&nbsp;__________such an enormous beak?</p>";
			zadanieArray[1]="has";
			zadanieArray[2]="had";
			zadanieArray[3]="having";
			zadanieArray[4]="have";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=toucan;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №34 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=34;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>The answer, we learned in August, may be that it uses it (34)&nbsp;__________body temperature.</p>";
			zadanieArray[1]="regulate";
			zadanieArray[2]="to regulate";
			zadanieArray[3]="regulated";
			zadanieArray[4]="regulates";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=toucan;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №35 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=35;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Infrared measurement (35)&nbsp;__________just before sleep shows that...</p>";
			zadanieArray[1]="taken";
			zadanieArray[2]="take";
			zadanieArray[3]="to take";
			zadanieArray[4]="taking";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=toucan;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;		
		/*задание №36 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=36;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>...shows that the bird’s long beak – which can grow to (36)&nbsp;__________of its body size – gets hotter,...</p>"; 
			zadanieArray[1]="third";
			zadanieArray[2]="a three";
			zadanieArray[3]="a third";
			zadanieArray[4]="three";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=toucan;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №37 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=37;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>...gets hotter, (37)&nbsp;__________the bird uses it in the presleep cooling process.</p>"; 
			zadanieArray[1]="suggested";
			zadanieArray[2]="suggesting";
			zadanieArray[3]="suggest";
			zadanieArray[4]="to suggest";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=toucan;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №38 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=38;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>Despite warnings that it might set off a catastrophic chain reaction that could (38)&nbsp;__________the Earth,...</p>"; 
			zadanieArray[1]="to destroy";
			zadanieArray[2]="destroying";
			zadanieArray[3]="destroyed";
			zadanieArray[4]="destroy";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="d";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=ScientificProgress;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №39 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=39;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>...scientists have (39)&nbsp;__________ created a miniature version of the Big Bang, without any observable ill effects.</p>"; 
			zadanieArray[1]="successful";
			zadanieArray[2]="success";
			zadanieArray[3]="successfully";
			zadanieArray[4]="successfulness";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=ScientificProgress;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №40 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=40;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>They were able (40)&nbsp;__________ a temperature...</p>"; 
			zadanieArray[1]="produce";
			zadanieArray[2]="produced";
			zadanieArray[3]="to produce";
			zadanieArray[4]="producing";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="c";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=ScientificProgress;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №41 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=41;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>temperature of (41)&nbsp;__________ ten trillion degrees...</p>"; 
			zadanieArray[1]="the most";
			zadanieArray[2]="more than";
			zadanieArray[3]="more";
			zadanieArray[4]="much more";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="b";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=ScientificProgress;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №42 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=42;
			var zadanieArray=new Array();
			zadanieArray[0]="Task 6<br>Read the text below.<br> Choose from (A – D) the one which best fits following sentence in the text.<p style='text-align:justify;  color:black;'>...a million times hotter than the centre of the sun – by (42)&nbsp;__________ together lead ions at incredible speeds in the Large Hadron Collider, a 27&nbsp;km underground tunnel at the CERN (European Organization for Nuclear Research) facility near Geneva.</p>"; 
			zadanieArray[1]="smashing";
			zadanieArray[2]="smashed";
			zadanieArray[3]="smash";
			zadanieArray[4]="to smash";
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="vertical";
			viewArray[taskNumber-1]="table";
			answerArray[taskNumber-1]="a";
			taskTypeArray[taskNumber-1]="textanalysis";
			textAnalysisArray[taskNumber-1]=ScientificProgress;
			taskMarkArray[taskNumber-1]=1;
			variantNumberArray[taskNumber-1]=4;	
		/*задание №43 ЗНО-2013 английский язык. Основной тест*/
			taskNumber=43;
			var zadanieArray=new Array();
			zadanieArray[0]="Writing<br>Listening to a radio programme you heard different people discussing the topic of friendship between teens. You have decided to write a letter to the editor of the programme. In your letter <ul><li>describe what kind of friend you prefer and why</li><li>say what can cause a friendship to go wrong</li><li>argue whether it is better to have a wide circle of friends or a few close friends</li></ul>Write a letter of at least 100 words. Do not write your own name, any dates, addresses or other personal information. Start your letter in an appropriate way."; 
			taskTextsArray[taskNumber-1]=zadanieArray;
			directionArray[taskNumber-1]="horizontal";
			viewArray[taskNumber-1]="singleText";
			answerArray[taskNumber-1]="";
			taskTypeArray[taskNumber-1]="tvir";
			textAnalysisArray[taskNumber-1]="";
			taskMarkArray[taskNumber-1]=14;
			variantNumberArray[taskNumber-1]=4;	
		/*Завершение инициализации теста*/	
		for (var i=0; i<testLength; i++)
		{
			curView=new view(testName,i+1,testDirectory,viewArray[i],variantNumberArray[i], directionArray[i], answerLanguage, taskTextsArray[i]);
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}	/* Окончание ЗНО-2013 английский язык. Основной тест. I сессия*/	
	
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		buildTestTable(testName,testDirectory);
		document.getElementById("ZnoGivenAnswers").innerHTML=textTasksLeft+': <!-- Счетчик ответов --><span class="GivenAnswersView" name="GivenAnswers" id="GivenAnswers"></span>';
		taskLoader(taskArray[currentTaskCounter]);
		isTestingFlag=1;
		document.getElementById("ResumeTest").innerHTML='<input type="button" value="'+textAcceptAnswer+'" name="ResumeTestButton" id="ResumeTestButton" onClick="nextTask ()" />';
		/*установка счетчика времени*/
		isTestingFlag=1;
		timing();
		
	 					
	
}
