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

   return name;
}

function picname( name,ind) {
   if(gup(name).substr(1,1)==ind.toString())
     return gup(name).substr(0,1)+ind.toString()+"s";
     return gup(name).substr(0,1)+ind.toString()+"ss";

}

