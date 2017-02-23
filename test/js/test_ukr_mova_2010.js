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
//Тесты по украинскому языку	
/*************************************************************/
	/*ЗНО-2010 Украинский язык и литература. Основной тест. I сессия*/
	if(testName==znoUkr2010Main1)
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2010main1\/';
		testTitle = znoName+"2010"+znoUkrName;
		testDetails=mainName+session1Name;
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
			curView=new view(testName,i+1,testDirectory,"picture",variantNumberArray[i], "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}	
	}
/*ЗНО-2010 Украинский язык и литература. Основной тест. II сессия*/
	if(testName==znoUkr2010Main2)
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2010main2\/';
		testTitle = znoName+"2010"+znoUkrName;
		testDetails=mainName+session2Name;
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
			curView=new view(testName,i+1,testDirectory,"picture",variantNumberArray[i], "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}
/*ЗНО-2010 Украинский язык и литература. Основной тест. III сессия*/
	if(testName==znoUkr2010Main3)
	{
		testLength=61;
		timeCounter=180*60;
		testTime=timeCounter;
		testDirectory='\/test\/ukr\/img\/test2010main3\/';
		testTitle = znoName+"2010"+znoUkrName;
		testDetails=mainName+session3Name;
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
			curView=new view(testName,i+1,testDirectory,"picture",variantNumberArray[i], "vertical", answerLanguage, "", "");
			taskArray[i]=new task(taskTypeArray[i],taskMarkArray[i],answerArray[i],curView);
		}
	}
/*Завершение инициализации тестов*/
/*Заполнение поля дано ответов*/

		startInitialization();	
	
}
