function gup( name )
{
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
		return "";
	else
		return results[1];
}

function showInfo()
{
document.getElementById("info").style.display="inline";
document.getElementById("applet").style.display="none";
}

function showApplet()
{
document.getElementById("info").style.display="none";
document.getElementById("applet").style.display="inline";
}



function titlename( name )
{
   if(name=="A1_de") return "<b>Spiegelungen:</b> Mathematischer Klappspiegel";
   if(name=="A2_de") return "<b>Spiegelungen:</b> Physikalischer Klappspiegel";
   if(name=="A3_de") return "<b>Spiegelungen:</b> Kaleidoskop";
   if(name=="A4_de") return "<b>Spiegelungen:</b> Ornamente";

   if(name=="B1_de") return "<b>Drehstreckungen:</b> Rotationssymmetrie";
   if(name=="B2_de") return "<b>Drehstreckungen:</b> Aneinanderlegen von Polygonen";
   if(name=="B3_de") return "<b>Drehstreckungen:</b> Iterierte Drehstreckungen";
   if(name=="B4_de") return "<b>Drehstreckungen:</b> Iteration zweier Drehstreckungen";

   if(name=="C1_de") return "<b>K%26ouml%3Brper:</b> Platonische%20K%26ouml%3Brper";
   if(name=="C2_de") return "<b>K%26ouml%3Brper:</b> Archimedische%20K%26ouml%3Brper";
   if(name=="C3_de") return "<b>K%26ouml%3Brper:</b> Platonische K%26ouml%3Brper schachteln";
   if(name=="C4_de") return "<b>K%26ouml%3Brper:</b> K%C3%B6rper%20morphen";

   if(name=="D1_de") return "<b>Packungen:</b> Raumf%26uuml%3Bllende Polyeder";
   if(name=="D2_de") return "<b>Packungen:</b> Sierpinski-Tetraeder";
   if(name=="D3_de") return "<b>Packungen:</b> Kugelpackung";
   if(name=="D4_de") return "<b>Packungen:</b> Kristalle und Gitter";

   if(name=="E1_de") return "<b>Chaos:</b> Spiegel-Chaos";
   if(name=="E2_de") return "<b>Chaos:</b> Conways Spiel des Lebens";
   if(name=="E3_de") return "<b>Chaos:</b> Doppelpendel";
   if(name=="E4_de") return "<b>Chaos:</b> Planet im Schwerefeld";

   if(name=="F1_de") return "<b>Pflanzen:</b> Kopien von Kopien";
   if(name=="F2_de") return "<b>Pflanzen:</b> Farne und andere Pflanzen";
   if(name=="F3_de") return "<b>Pflanzen:</b> Sonnenblume";
   if(name=="F4_de") return "<b>Pflanzen:</b> Baumstrukturen";

   if(name=="G1_de") return "<b>Spiele:</b> Sudoku";
   if(name=="G2_de") return "<b>Spiele:</b> 14/15-Puzzle";
   if(name=="G3_de") return "<b>Spiele:</b> Solitaire";
   if(name=="G4_de") return "<b>Spiele:</b> Ausparken";

   if(name=="H1_de") return "<b>Simulationen:</b> Laufroboter";
   if(name=="H2_de") return "<b>Simulationen:</b> Balance";
   if(name=="H3_de") return "<b>Simulationen:</b> Schwarmsimulation";
   if(name=="H4_de") return "<b>Simulationen:</b> Vererbungsspielplatz";


   if(name=="A1_en") return "<b>Reflections:</b> Reflection of reflections";
   if(name=="A2_en") return "<b>Reflections:</b> Physical refelctions";
   if(name=="A3_en") return "<b>Reflections:</b> Kaleidoscopes";
   if(name=="A4_en") return "<b>Reflections:</b> Wallpapers";

   if(name=="B1_en") return "<b>Similarities:</b> Rotational symmetry";
   if(name=="B2_en") return "<b>Similarities:</b> Juxtapositions of four-gons";
   if(name=="B3_en") return "<b>Similarities:</b> Iterated similarities";
   if(name=="B4_en") return "<b>Similarities:</b> Iterating two similarities";

   if(name=="C1_en") return "<b>Solids:</b> Platonic solids";
   if(name=="C2_en") return "<b>Solids:</b> Archimedian solids";
   if(name=="C3_en") return "<b>Solids:</b> Nesting platonic solids";
   if(name=="C4_en") return "<b>Solids:</b> Morphing solids";

   if(name=="D1_en") return "<b>Packings:</b> Space filling polyhedra";
   if(name=="D2_en") return "<b>Packings:</b> Sierpinski tetrahedron";
   if(name=="D3_en") return "<b>Packings:</b> Sphere packings";
   if(name=="D4_en") return "<b>Packings:</b> Crystals and lattices";

   if(name=="E1_en") return "<b>Chaos:</b> Mirror chaos";
   if(name=="E2_en") return "<b>Chaos:</b> Conway's game of life";
   if(name=="E3_en") return "<b>Chaos:</b> Double pendulum";
   if(name=="E4_en") return "<b>Chaos:</b> Planet in a force field";

   if(name=="F1_en") return "<b>Plants:</b> Copies of copies";
   if(name=="F2_en") return "<b>Plants:</b> Ferns and other plants";
   if(name=="F3_en") return "<b>Plants:</b> Sunflower";
   if(name=="F4_en") return "<b>Plants:</b> Tree structures";

   if(name=="G1_en") return "<b>Games:</b> Sudoku";
   if(name=="G2_en") return "<b>Games:</b> 14/15 Puzzle";
   if(name=="G3_en") return "<b>Games:</b> Solitaire";
   if(name=="G4_en") return "<b>Games:</b> Free your car";

   if(name=="H1_en") return "<b>Simulations:</b> A walking robot";
   if(name=="H2_en") return "<b>Simulations:</b> Balancing seal";
   if(name=="H3_en") return "<b>Simulations:</b> Swarm simulation";
   if(name=="H4_en") return "<b>Simulations:</b> Inheritance playground";


   if(name=="A1_no") return "<b>Speiling:</b> Speiling i speil";
   if(name=="A2_no") return "<b>Speiling:</b> Fysisk speiling";
   if(name=="A3_no") return "<b>Speiling:</b> Kaleidoskoper";
   if(name=="A4_no") return "<b>Speiling:</b> Tapetm&oslash;nster";

   if(name=="B1_no") return "<b>Likheter:</b> Rotasjonssymmetri";
   if(name=="B2_no") return "<b>Likheter:</b> Sammenstilling av firkanter";
   if(name=="B3_no") return "<b>Likheter:</b> Gjentatt kopiering";
   if(name=="B4_no") return "<b>Likheter:</b> Gjentatt dobbel kopiering";

   if(name=="C1_no") return "<b>Legemer:</b> Platonske legemer";
   if(name=="C2_no") return "<b>Legemer:</b> Arkimediske legemer";
   if(name=="C3_no") return "<b>Legemer:</b> N&oslash;stede platonske legemer";
   if(name=="C4_no") return "<b>Legemer:</b> Forvandling av legemer";

   if(name=="D1_no") return "<b>Pakking:</b> Polyedere som fyller rommet";
   if(name=="D2_no") return "<b>Pakking:</b> Sierpinski tetraeder";
   if(name=="D3_no") return "<b>Pakking:</b> Pakking av kuler";
   if(name=="D4_no") return "<b>Pakking:</b> Krystaller og gitter";

   if(name=="E1_no") return "<b>Kaos:</b> Speilkaos";
   if(name=="E2_no") return "<b>Kaos:</b> Conways - Livets spill";
   if(name=="E3_no") return "<b>Kaos:</b> Dobbel pendel";
   if(name=="E4_no") return "<b>Kaos:</b> Planet i kraftfelt";

   if(name=="F1_no") return "<b>Planter:</b> Kopier av kopier";
   if(name=="F2_no") return "<b>Planter:</b> Bregner og andre planter";
   if(name=="F3_no") return "<b>Planter:</b> Solsikke";
   if(name=="F4_no") return "<b>Planter:</b> Trestrukturer";

   if(name=="G1_no") return "<b>Spill:</b> Sudoku";
   if(name=="G2_no") return "<b>Spill:</b> 14/15 pusselet";
   if(name=="G3_no") return "<b>Spill:</b> Kabal";
   if(name=="G4_no") return "<b>Spill:</b> Slipp bilen fri";

   if(name=="H1_no") return "<b>Simuleringer:</b> Roboten som g&aring;r";
   if(name=="H2_no") return "<b>Simuleringer:</b> Den balanserende selen";
   if(name=="H3_no") return "<b>Simuleringer:</b> Simulering av svermer";
   if(name=="H4_no") return "<b>Simuleringer:</b> Genenes lekeplass";


   if(name=="A1_tr") return "<b>Yansımalar:</b> Yansımaların yansımaları";
   if(name=="A2_tr") return "<b>Yansımalar:</b> Fiziksel yansımalar";
   if(name=="A3_tr") return "<b>Yansımalar:</b> Kaleydoskop (Çiçek Dürbünü)";
   if(name=="A4_tr") return "<b>Yansımalar:</b> Duvar kağıtları";

   if(name=="B1_tr") return "<b>Benzerlikler:</b> Döndürme simetrisi";
   if(name=="B2_tr") return "<b>Benzerlikler:</b> Ucuca eklenen dörtgenler";
   if(name=="B3_tr") return "<b>Benzerlikler:</b> Yinelemeli benzerlikler";
   if(name=="B4_tr") return "<b>Benzerlikler:</b> İki benzerliği yineleme";

   if(name=="C1_tr") return "<b>Cisimler:</b> Platonik cisimler";
   if(name=="C2_tr") return "<b>Cisimler:</b> Arşimet cisimleri";
   if(name=="C3_tr") return "<b>Cisimler:</b> İçiçe geçmiş platonik cisimler";
   if(name=="C4_tr") return "<b>Cisimler:</b> Biçim değiştiren cisimler";

   if(name=="D1_tr") return "<b>Doldurmalar:</b> Uzay dolduran çok yüzlü cisimler";
   if(name=="D2_tr") return "<b>Doldurmalar:</b> Sierpinski dörtyüzlüsü";
   if(name=="D3_tr") return "<b>Doldurmalar:</b> Kürelerle doldurma";
   if(name=="D4_tr") return "<b>Doldurmalar:</b> Kristaller ve örgüler";

   if(name=="E1_tr") return "<b>Kaos:</b> Ayna kaosu";
   if(name=="E2_tr") return "<b>Kaos:</b> Conway’in yaşam oyunu";
   if(name=="E3_tr") return "<b>Kaos:</b> Çift sarkaç";
   if(name=="E4_tr") return "<b>Kaos:</b> Kuvvet alanındaki gezegen";

   if(name=="F1_tr") return "<b>Bitkiler:</b> Kopyaların kopyaları";
   if(name=="F2_tr") return "<b>Bitkiler:</b> Eğrelti otu ve diğer bitkiler";
   if(name=="F3_tr") return "<b>Bitkiler:</b> Ayçiçeği";
   if(name=="F4_tr") return "<b>Bitkiler:</b> Ağaç yapıları";

   if(name=="G1_tr") return "<b>Oyunlar:</b> Sudoku";
   if(name=="G2_tr") return "<b>Oyunlar:</b> 14/15 Bulmacası";
   if(name=="G3_tr") return "<b>Oyunlar:</b> Solitaire";
   if(name=="G4_tr") return "<b>Oyunlar:</b> Arabanı serbest bırak";

   if(name=="H1_tr") return "<b>Simülasyonlar:</b> Yürüyen bir robot";
   if(name=="H2_tr") return "<b>Simülasyonlar:</b> Dengeci fok";
   if(name=="H3_tr") return "<b>Simülasyonlar:</b> Sürü simülasyonu";
   if(name=="H4_tr") return "<b>Simülasyonlar:</b> Kalıtım oyunu";


   if(name=="A1_he") return "<b>שתקפויות:</b> שיקוף של השתקפויות";
   if(name=="A2_he") return "<b>שתקפויות:</b> השתקפויות פיזיקליות";
   if(name=="A3_he") return "<b>שתקפויות:</b> קליידוסקופים";
   if(name=="A4_he") return "<b>שתקפויות:</b> טפטים";

   if(name=="B1_he") return "<b>דמיון:</b> סימטריה סיבובית";
   if(name=="B2_he") return "<b>דמיון:</b> ריצוף של מרובעים";
   if(name=="B3_he") return "<b>דמיון:</b> חזרתיות של דמיון";
   if(name=="B4_he") return "<b>דמיון:</b> חזרתיות של שתי תכונות דמיון";

   if(name=="C1_he") return "<b>גופים:</b> גופים אפלטוניים";
   if(name=="C2_he") return "<b>גופים:</b> גופים ארכימדיים";
   if(name=="C3_he") return "<b>גופים:</b> גופים אפלטונים כלואים";
   if(name=="C4_he") return "<b>גופים:</b> גופים משתנים";

   if(name=="D1_he") return "<b>למלא מרחב:</b> פאונים הממלאים מרחב";
   if(name=="D2_he") return "<b>למלא מרחב:</b> ארבעון סיירפינסקי";
   if(name=="D3_he") return "<b>למלא מרחב:</b> מערום כדורים";
   if(name=="D4_he") return "<b>למלא מרחב:</b> גבישים ושריגים";

   if(name=="E1_he") return "<b>כאוס:</b> כאוס מראות";
   if(name=="E2_he") return "<b>כאוס:</b> משחק החיים של קונוואי";
   if(name=="E3_he") return "<b>כאוס:</b> מטוטלת כפולה";
   if(name=="E4_he") return "<b>כאוס:</b> פלנטה בשדה כבידה";

   if(name=="F1_he") return "<b>צמחים:</b> העתקים של העתקים";
   if(name=="F2_he") return "<b>צמחים:</b> שרכים ועוד צמחים";
   if(name=="F3_he") return "<b>צמחים:</b> חמניה";
   if(name=="F4_he") return "<b>צמחים:</b> מבני עצים";

   if(name=="G1_he") return "<b>משחקים:</b> סודוקו";
   if(name=="G2_he") return "<b>משחקים:</b> חידת 14/15";
   if(name=="G3_he") return "<b>משחקים:</b> סוליטר";
   if(name=="G4_he") return "<b>משחקים:</b> שעת שיא";

   if(name=="H1_he") return "<b>סימולציות:</b> רובוט מהלך";
   if(name=="H2_he") return "<b>סימולציות:</b> כלב ים מאזן";
   if(name=="H3_he") return "<b>סימולציות:</b> הדמיית נחיל";
   if(name=="H4_he") return "<b>סימולציות:</b> משחק תורשה";


   if(name=="A1_ar") return "<b>انعكاسات:</b> انعكاس الانعكاسات";
   if(name=="A2_ar") return "<b>انعكاسات:</b> الانعكاسات الفيزيائية";
   if(name=="A3_ar") return "<b>انعكاسات:</b> المشكال";
   if(name=="A4_ar") return "<b>انعكاسات:</b> خلفيات";

   if(name=="B1_ar") return "<b> متشابهات:</b> التناظر الدوراني";
   if(name=="B2_ar") return "<b> متشابهات:</b> رباعيات متجاورة";
   if(name=="B3_ar") return "<b> متشابهات:</b> المتشابهات المكررة"
   if(name=="B4_ar") return "<b>متشابهات:</b> تكرار متشابهين";

   if(name=="C1_ar") return "<b>المواد الصلبة:</b> المواد الصلبة الأفلاطونية";
   if(name=="C2_ar") return "<b>المواد الصلبة:</b> المواد الصلبة الأرخميديسية";
   if(name=="C3_ar") return "<b>المواد الصلبة:</b> المواد الصلبة الأفلاطونية التعشيش";
   if(name=="C4_ar") return "<b>المواد الصلبة:</b> المواد الصلبة المتغيرة";

   if(name=="D1_ar") return "<b>الأغلفة:</b> ملء الفراغ في المجسمات كثيرة السطوح";
   if(name=="D2_ar") return "<b>الأغلفة:</b> رباعي وجوه Sierpinski ";
   if(name=="D3_ar") return "<b>الأغلفة:</b> الأغلفة الكروية";
   if(name=="D4_ar") return "<b>الأغلفة:</b> البلورات و الشبكات";

   if(name=="E1_ar") return "<b>الفوضى:</b> فوضى المرايا";
   if(name=="E2_ar") return "<b>الفوضى:</b> Conway's game of life ";
   if(name=="E3_ar") return "<b>الفوضى:</b> الهزاز المضاعف";
   if(name=="E4_ar") return "<b>الفوضى:</b> كوكب في حقل قوة";

   if(name=="F1_ar") return "<b>النباتات:</b> نسخ النسخ";
   if(name=="F2_ar") return "<b>النباتات:</b> السرخس و نباتات أخرى";
   if(name=="F3_ar") return "<b>النباتات:</b> عباد الشمس";
   if(name=="F4_ar") return "<b>النباتات:</b> بنية الأشجار";

   if(name=="G1_ar") return "<b>ألعاب:</b> Sudoku ";
   if(name=="G2_ar") return "<b>ألعاب:</b> لغز 14/15 ";
   if(name=="G3_ar") return "<b>ألعاب:</b> سوليتير ";
   if(name=="G4_ar") return "<b>ألعاب:</b> أطلق سيارتك ";

   if(name=="H1_ar") return "<b>محاكاة:</b> رجل آلي يمشي ";
   if(name=="H2_ar") return "<b>محاكاة:</b> موازنة الختم";
   if(name=="H3_ar") return "<b>محاكاة:</b> محاكاة منتشرة";
   if(name=="H4_ar") return "<b>محاكاة:</b> ملعب الإرث";


   if(name=="A1_nl") return "<b>Reflecties:</b> Spiegel van spiegelingen";
   if(name=="A2_nl") return "<b>Reflecties:</b> Werkelijke spiegels";
   if(name=="A3_nl") return "<b>Reflecties:</b> Kaleidoscoop";
   if(name=="A4_nl") return "<b>Reflecties:</b> Behangpapieren";

   if(name=="B1_nl") return "<b>Gelijkvormigheden:</b> Rotationele symmetrie";
   if(name=="B2_nl") return "<b>Gelijkvormigheden:</b> spiraal van vierhoeken";
   if(name=="B3_nl") return "<b>Gelijkvormigheden:</b> Iteratie van gelijkvormigheden";
   if(name=="B4_nl") return "<b>Gelijkvormigheden:</b> Iteratie van twee gelijkvormigheden";

   if(name=="C1_nl") return "<b>Lichamen:</b> Platonische lichamen";
   if(name=="C2_nl") return "<b>Lichamen:</b> Archimedische lichamen";
   if(name=="C3_nl") return "<b>Lichamen:</b> Genestelde platonische lichamen";
   if(name=="C4_nl") return "<b>Lichamen:</b> Vervormen van lichamen";

   if(name=="D1_nl") return "<b>Stapels:</b> Ruimtevullende polyhedra";
   if(name=="D2_nl") return "<b>Stapels:</b> Sierpinski tetra&euml;der";
   if(name=="D3_nl") return "<b>Stapels:</b> Balverpakkingen";
   if(name=="D4_nl") return "<b>Stapels:</b> Kristallen en roosters";

   if(name=="E1_nl") return "<b>Chaos:</b> Spiegelchaos";
   if(name=="E2_nl") return "<b>Chaos:</b> Conway's spel van het leven";
   if(name=="E3_nl") return "<b>Chaos:</b> Dubbele slinger";
   if(name=="E4_nl") return "<b>Chaos:</b> Planeet in een krachtveld";

   if(name=="F1_nl") return "<b>Planten:</b> Kopies van kopies";
   if(name=="F2_nl") return "<b>Planten:</b> Varens en andere planten";
   if(name=="F3_nl") return "<b>Planten:</b> Zonnebloem";
   if(name=="F4_nl") return "<b>Planten:</b> Boomstructuren";

   if(name=="G1_nl") return "<b>Spel:</b> Sudoku";
   if(name=="G2_nl") return "<b>Spel:</b> 14/15 Puzzel";
   if(name=="G3_nl") return "<b>Spel:</b> Driehoek";
   if(name=="G4_nl") return "<b>Spel:</b> Rijd uw wagen uit";

   if(name=="H1_nl") return "<b>Simulatie:</b> Wandelende robot";
   if(name=="H2_nl") return "<b>Simulatie:</b> Balanceren";
   if(name=="H3_nl") return "<b>Simulatie:</b> Zwermen";
   if(name=="H4_nl") return "<b>Simulatie:</b> Erfelijkheidsspel";

   if(name=="A1_zh-t") return "<b>反射:</b> 多重反射";
   if(name=="A2_zh-t") return "<b>反射:</b> 物理上的反射";
   if(name=="A3_zh-t") return "<b>反射:</b> 萬花筒";
   if(name=="A4_zh-t") return "<b>反射:</b> 壁紙";

   if(name=="B1_zh-t") return "<b>相似形:</b> 旋轉對稱";
   if(name=="B2_zh-t") return "<b>相似形:</b> 四邊形的相似形並列";
   if(name=="B3_zh-t") return "<b>相似形:</b> 遞迴相似";
   if(name=="B4_zh-t") return "<b>相似形:</b> 遞迴兩種相似";

   if(name=="C1_zh-t") return "<b>多面體:</b> 柏拉圖多面體";
   if(name=="C2_zh-t") return "<b>多面體:</b> 阿基米德多面體";
   if(name=="C3_zh-t") return "<b>多面體:</b> 柏拉圖多面體的相嵌";
   if(name=="C4_zh-t") return "<b>多面體:</b> 連續變化的多面體";

   if(name=="D1_zh-t") return "<b>空間堆疊:</b> 空間填充多面體";
   if(name=="D2_zh-t") return "<b>空間堆疊:</b> 謝爾賓斯基四面體";
   if(name=="D3_zh-t") return "<b>空間堆疊:</b> 圓球堆疊";
   if(name=="D4_zh-t") return "<b>空間堆疊:</b> 結晶與晶格";

   if(name=="E1_zh-t") return "<b>混沌:</b> 鏡面反射混沌";
   if(name=="E2_zh-t") return "<b>混沌:</b> 康威生命遊戲";
   if(name=="E3_zh-t") return "<b>混沌:</b> 雙擺系統";
   if(name=="E4_zh-t") return "<b>混沌:</b> 重力場中的行星";

   if(name=="F1_zh-t") return "<b>植物:</b> 多重複製操作";
   if(name=="F2_zh-t") return "<b>植物:</b> 蕨類與各種職務";
   if(name=="F3_zh-t") return "<b>植物:</b> 向日葵";
   if(name=="F4_zh-t") return "<b>植物:</b> 樹狀結構";

   if(name=="G1_zh-t") return "<b>遊戲:</b> 數獨";
   if(name=="G2_zh-t") return "<b>遊戲:</b> 數字推盤";
   if(name=="G3_zh-t") return "<b>遊戲:</b> 孔明棋";
   if(name=="G4_zh-t") return "<b>遊戲:</b> 解救你的車";

   if(name=="H1_zh-t") return "<b>模擬:</b> 走路的機器人";
   if(name=="H2_zh-t") return "<b>模擬:</b> 平衡球的海報";
   if(name=="H3_zh-t") return "<b>模擬:</b> 群體模擬器";
   if(name=="H4_zh-t") return "<b>模擬:</b> 繼承沙盒";


   return name;
}

function picname( name,ind) {
   if(gup(name).substr(1,1)==ind.toString())
     return gup(name).substr(0,1)+ind.toString()+"s";
     return gup(name).substr(0,1)+ind.toString()+"ss";

}
