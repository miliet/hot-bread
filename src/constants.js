//Language Resources
/*******************************/

var introductionImageEnglish="res/introduction.png";
var introductionSoundEnglish="res/introduction.wav";

var shareImageEnglish="res/share.png";

var imgEnglishPage0 = "res/page0.png";
var imgEnglishPage1 = "res/page1.png";
var imgEnglishPage2 = "res/page2.png";
var imgEnglishPage3 = "res/page3.png";
var imgEnglishPage4 = "res/page4.png";
var imgEnglishPage5 = "res/page5.png";
var imgEnglishPage6 = "res/page6.png";
var imgEnglishPage7 = "res/page7.png";
var imgEnglishPage8 = "res/page8.png";
var imgEnglishPage9 = "res/page9.png";
var imgEnglishPage10 = "res/page10.png";

var soundEnglishPage0= "";
var soundEnglishPage1= "res/page1.wav";
var soundEnglishPage2= "res/page2.wav";
var soundEnglishPage3= "res/page3.wav";
var soundEnglishPage4= "res/page4.wav";
var soundEnglishPage5= "res/page5.wav";
var soundEnglishPage6= "res/page6.wav";
var soundEnglishPage7= "res/page7.wav";
var soundEnglishPage8= "res/page8.wav";
var soundEnglishPage9= "res/page9.wav";
var soundEnglishPage10= "res/page10.wav";

//Normal Resources
/*******************************/
var soundSplash="res/splash.wav";
var splash= "res/splash.png";
var logo= "res/logo.png";
var frame= "res/frame.png";

var btnHomeNormal= "res/btnHomeNormal.png";
var btnHomeSelected= "res/btnHomeSelected.png";
var btnForwardNormal= "res/btnForwardNormal.png";
var btnForwardSelected= "res/btnForwardSelected.png";
var btnBackwardNormal= "res/btnBackwardNormal.png";
var btnBackwardSelected= "res/btnBackwardSelected.png";

var btnSoundNormal= "res/btnSoundNormal.png";
var btnSoundSelected= "res/btnSoundSelected.png";
var btnSoundDisabledNormal= "res/btnSoundDisabledNormal.png";
var btnSoundDisabledSelected= "res/btnSoundDisabledSelected.png";

var btnSoundReplayNormal= "res/btnSoundReplayNormal.png";
var btnSoundReplaySelected= "res/btnSoundReplaySelected.png";

var btnFacebookNormal= "res/btnFacebookNormal.png";
var btnFacebookSelected= "res/btnFacebookSelected.png";
var btnTwitterNormal= "res/btnTwitterNormal.png";
var btnTwitterSelected= "res/btnTwitterSelected.png";
var btnMailNormal= "res/btnMailNormal.png";
var btnMailSelected= "res/btnMailSelected.png";

var soundBtnStandard= "res/soundBtnStandard.wav";

var ttfArialRoundedMTBold= "res/ArialRoundedMTBold.ttf";
var svgArialRoundedMTBold= "res/ArialRoundedMTBold.svg";
var woffArialRoundedMTBold= "res/ArialRoundedMTBold.woff";
var eotArialRoundedMTBold= "res/ArialRoundedMTBold.eot";


//Global constants
/*******************************/

var pages=12;
var idEnglish=0;
var transitionTime=1.0;
var btnPaddingWidth=10;
var fntArialRoundedMTBoldStr="Arial Rounded MT Bold";
var fntSize=24;
var wordColors=new Array(cc.c3b(66,173,73),cc.c3b(236,0,140),cc.c3b(0,174,239),cc.c3b(255,203,5),cc.c3b(123,46,111),cc.c3b(37,64,143),cc.c3b(250,148,30),cc.c3b(210,35,42));
var highlightTime=0.5;
var highlightColor=cc.c3b(253, 185, 19);
var tickTime=1.0;
var btnFadeTime=0.1;

//Tags
/*****************/
menuSoundReplayTag=1;

//English
/*******************************/
var languageEnglish = new Array(pages);
languageEnglish [0]  = "";
languageEnglish [1]  = "";
languageEnglish [2]  = "Lucy, the little girl, is three years old.";
languageEnglish [3]  = "After getting up, she goes to the kitchen where her\nmother is taking some bread out of the oven.";
languageEnglish [4]  = "- Does the hot bread smell good? - says her mother.\n- Yes, - she replies lovingly.";
languageEnglish [5]  = "When her mother isn’t looking, Lucy takes a piece\nof bread, but as it’s hot,\nshe burns herself.";
languageEnglish [6]  = "- Ow! I’ve burnt my finger!\nWhen her mother hears her cry\nshe comes quickly to help her.";
languageEnglish [7]  = "She puts some ice on her finger and wraps\nit in a cloth, to ease the pain.";
languageEnglish [8]  = "You should never touch things when they are hot.\nYou must wait and be patient.";
languageEnglish [9]  = "A few minutes later, Lucy’s mother gives her\na nice slice of bread and butter.";
languageEnglish [10]  = "- Now, it’s nice! Mummy\n - says Lucy happily.";

var soundsEnglish = new Array(pages);
soundsEnglish  [0]  = soundEnglishPage0;
soundsEnglish [1]  = soundEnglishPage1;
soundsEnglish [2]  = soundEnglishPage2;
soundsEnglish [3]  = soundEnglishPage3;
soundsEnglish [4]  = soundEnglishPage4;
soundsEnglish [5]  = soundEnglishPage5;
soundsEnglish [6]  = soundEnglishPage6;
soundsEnglish [7]  = soundEnglishPage7;
soundsEnglish [8]  = soundEnglishPage8;
soundsEnglish [9]  = soundEnglishPage9;
soundsEnglish [10]  = soundEnglishPage10;

var imgsEnglish = new Array(pages);
imgsEnglish  [0]  = imgEnglishPage0;
imgsEnglish  [1]  = imgEnglishPage1;
imgsEnglish  [2]  = imgEnglishPage2;
imgsEnglish  [3]  = imgEnglishPage3;
imgsEnglish  [4]  = imgEnglishPage4;
imgsEnglish  [5]  = imgEnglishPage5;
imgsEnglish  [6]  = imgEnglishPage6;
imgsEnglish  [7]  = imgEnglishPage7;
imgsEnglish  [8]  = imgEnglishPage8;
imgsEnglish  [9]  = imgEnglishPage9;
imgsEnglish  [10]  = imgEnglishPage10;

var highlightsEnglish=new Array(pages);
highlightsEnglish [0]  = new Array();
highlightsEnglish [1]  = new Array();
//Lucy, the little girl, is three years old.
highlightsEnglish [2]  = new Array(0.640, 1.510, 1.635,1.885,2.554,2.885,3.310,3.735);
//After getting up, she goes to the kitchen\nwhere her mother is taking some bread out of the oven.
highlightsEnglish [3]  = new Array(0.408, 0.740,1.010,1.483,1.725,2.005,2.120,2.230,2.948,3.150,3.245,3.720,3.895,4.185,4.472,4.978, 5.097,5.205,5.345);
//- Does the hot bread smell good? - says her mother.\n- Yes, - she replies lovingly.
highlightsEnglish [4]  = new Array(0.000,0.244,0.500,0.585,0.870,1.130,1.565,0.000,2.200,2.529,2.845,0.000,3.400,0.000,4.175,4.400,4.930);
//When her mother isn’t looking,\nLucy takes a piece of bread, but as it’s hot,\nshe burns herself.
highlightsEnglish [5]  = new Array(0.664,0.810,1.050,1.460,1.630,2.400,2.910,3.290,3.410,3.630,3.790,4.590,4.807,4.990,5.200,5.914,6.220,6.565);
//- Ow! I’ve burnt my finger!\nWhen her mother hears her cry she comes quickly to help her.
highlightsEnglish [6]  = new Array(0.000,0.305,0.822,1.050,1.280,1.570,2.310,2.485,2.600,2.935,3.249,3.390,4.020,4.202,4.590,5.108,5.228,5.570);
//She puts some ice on her finger and wraps it in a cloth, to ease the pain.
highlightsEnglish [7]  = new Array(0.280,0.505,0.653,0.915,1.245,1.345,1.550,2.085,2.315,2.510,2.635,2.795,2.920,3.346,3.575, 3.860,3.995);
//You should never touch things when they are hot. You must wait and be patient.
highlightsEnglish [8]  = new Array(0.370,0.465,0.720,1.164,1.500,1.825,1.975,1.995,2.100,2.965,3.050,3.310, 3.975,4.152,4.340);
//A few minutes later, Lucy’s mother gives her a nice slice of bread and butter.
highlightsEnglish [9]  = new Array(0.362,0.450,0.655,0.980,1.780,2.260,2.770,3.092,3.290,3.400,3.735,4.045,4.225,4.555,4.810);
//- Now, it’s nice! Mummy - says Lucy happily.
highlightsEnglish [10]  = new Array(0.000,0.265, 0.590,0.800,1.235,0.000,2.010,2.280,2.745);


var coloredWordsEnglish = new Array(pages);
coloredWordsEnglish [0]  = new Array();
coloredWordsEnglish [1]  = new Array();
coloredWordsEnglish [2]  = new Array(-1,5);
coloredWordsEnglish [3]  = new Array(7,14);
coloredWordsEnglish [4]  = new Array(-1,10);
coloredWordsEnglish [5]  = new Array(6,14);
coloredWordsEnglish [6]  = new Array(3,11);
coloredWordsEnglish [7]  = new Array(-1,3);
coloredWordsEnglish [8]  = new Array(4,15);
coloredWordsEnglish [9]  = new Array(10,14);
coloredWordsEnglish [10]  = new Array(-1,3);

/*******************************/
var languages = new Array(languageEnglish);
var sounds = new Array(soundsEnglish);
var images = new Array(imgsEnglish);
var highlights = new Array(highlightsEnglish);
var coloredWords= new Array(coloredWordsEnglish);
var introductionImages=new Array(introductionImageEnglish);
var introductionSounds=new Array(introductionSoundEnglish);
var shareImages=new Array(shareImageEnglish);