// Copyright (C) vanjavk.me
chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
  if (command==="transliterate_cyrillic"){
    chrome.tabs.executeScript({
      file: 'transliterate_cyrillic.js', runAt:'document_end'
    });
  }
  else if (command==="transliterate_latin"){
    chrome.tabs.executeScript({
      file: 'transliterate_latin.js', runAt:'document_end'
    });
  }
});
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    file: 'transliterate_cyrillic.js', runAt:'document_end'
  });
});

// latin=""
// cyrillic=""
// x="""А а	A a	/ä/
// Б б	B b	/b/
// В в	V v	/v/
// Г г	G g	/ɡ/
// Д д	D d	/d/
// Ђ ђ	Đ đ	/dʑ/
// Е е	E e	/e/
// Ж ж	Ž ž	/ʐ/
// З з	Z z	/z/
// И и	I i	/i/
// Ј ј	J j	/j/
// К к	K k	/k/
// Л л	L l	/l/
// Љ љ	Lj lj	/ʎ/
// М м	M m	/m/
// Н н	N n	/n/
// Њ њ	Nj nj	/ɲ/
// О о	O o	/ɔ/
// П п	P p	/p/
// Р р	R r	/ɾ/
// С с	S s	/s/
// Т т	T t	/t/
// Ћ ћ	Ć ć	/tɕ/
// У у	U u	/u/
// Ф ф	F f	/f/
// Х х	H h	/x/
// Ц ц	C c	/ts/
// Ч ч	Č č	/ʈʂ/
// Џ џ	Dž dž	/ɖʐ/
// Ш ш	Š š	/ʂ/"""
// for i in x.split('\n'):
//     latin+=i[4]
//     latin+=i[6]
//     cyrillic+=i[0]
//     cyrillic+=i[2]
// dicta='{'
// for i in range(len(latin)):
//     dicta+="'"+cyrillic[i]+"'"+':'+"'"+latin[i]+"'"+','
// dicta+='}'   
// print(latin)
// print(cyrillic)
// print(dicta)
// #{'А':'A','а':'a','Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g','Д':'D','д':'d','Ђ':'Đ','ђ':'đ','Е':'E','е':'e','Ж':'Ž','ж':'ž','З':'Z','з':'z','И':'I','и':'i','Ј':'J','ј':'j','К':'K','к':'k','Л':'L','л':'l','Љ':'Lj','љ':'lj','М':'M','м':'m','Н':'N','н':'n','Њ':'Nj','њ':'nj','О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t','Ћ':'Ć','ћ':'ć','У':'U','у':'u','Ф':'F','ф':'f','Х':'H','х':'h','Ц':'C','ц':'c','Ч':'Č','ч':'č','Џ':'Dž','џ':'dž','Ш':'Š','ш':'š'}
// dicta1={'Б':'B','б':'b','В':'V','в':'v','Г':'G','г':'g','Д':'D','д':'d','Ђ':'Đ','ђ':'đ','Ж':'Ž','ж':'ž','З':'Z','з':'z','И':'I','и':'i','к':'k','Л':'L','л':'l','Љ':'Lj','љ':'lj','М':'M','м':'m','Н':'N','н':'n','Њ':'Nj','њ':'nj','О':'O','о':'o','П':'P','п':'p','Р':'R','р':'r','С':'S','с':'s','Т':'T','т':'t','Ћ':'Ć','ћ':'ć','У':'U','у':'u','Ф':'F','ф':'f','Х':'H','х':'h','Ц':'C','ц':'c','Ч':'Č','ч':'č','Џ':'Dž','џ':'dž','Ш':'Š','ш':'š'}
// for k,v in dicta1.items():
//     if v == k:
//        del dicta1[k]
// print(dicta1)
// #{'Б': 'B', 'б': 'b', 'В': 'V', 'в': 'v', 'Г': 'G', 'г': 'g', 'Д': 'D', 'д': 'd', 'Ђ': 'Đ', 'ђ': 'đ', 'Ж': 'Ž', 'ж': 'ž', 'З': 'Z', 'з': 'z', 'И': 'I', 'и': 'i', 'к': 'k', 'Л': 'L', 'л': 'l', 'Љ': 'Lj', 'љ': 'lj', 'М': 'M', 'м': 'm', 'Н': 'N', 'н': 'n', 'Њ': 'Nj', 'њ': 'nj', 'О': 'O', 'о': 'o', 'П': 'P', 'п': 'p', 'Р': 'R', 'р': 'r', 'С': 'S', 'с': 's', 'Т': 'T', 'т': 't', 'Ћ': 'Ć', 'ћ': 'ć', 'У': 'U', 'у': 'u', 'Ф': 'F', 'ф': 'f', 'Х': 'H', 'х': 'h', 'Ц': 'C', 'ц': 'c', 'Ч': 'Č', 'ч': 'č', 'Џ': 'Dž', 'џ': 'dž', 'Ш': 'Š', 'ш': 'š'}

// Called when the user clicks on the browser action.

// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete' && tab.active) {
//     chrome.tabs.executeScript({
//       code: codetorun
//     });
//   }
// })

