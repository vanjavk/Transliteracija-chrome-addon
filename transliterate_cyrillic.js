var recnik = {
  'Њ': 'Nj',
  'њ': 'nj',
  'Љ': 'Lj',
  'љ': 'lj',
  'Џ': 'Dž',
  'џ': 'dž',
  'Б': 'B',
  'б': 'b',
  'В': 'V',
  'в': 'v',
  'Г': 'G',
  'г': 'g',
  'Д': 'D',
  'д': 'd',
  'Ђ': 'Đ',
  'ђ': 'đ',
  'Ж': 'Ž',
  'ж': 'ž',
  'З': 'Z',
  'з': 'z',
  'И': 'I',
  'и': 'i',
  'к': 'k',
  'Л': 'L',
  'л': 'l',
  'М': 'M',
  'м': 'm',
  'Н': 'N',
  'н': 'n',
  'О': 'O',
  'о': 'o',
  'П': 'P',
  'п': 'p',
  'Р': 'R',
  'р': 'r',
  'С': 'S',
  'с': 's',
  'Т': 'T',
  'т': 't',
  'Ћ': 'Ć',
  'ћ': 'ć',
  'У': 'U',
  'у': 'u',
  'Ф': 'F',
  'ф': 'f',
  'Х': 'H',
  'х': 'h',
  'Ц': 'C',
  'ц': 'c',
  'Ч': 'Č',
  'ч': 'č',
  'Ш': 'Š',
  'ш': 'š'
};
console.log('Transliteracija ćirilice počinje');

$('body :not(script)').contents().filter(function () {
  return this.nodeType === 3;
}).replaceWith(function () {
  for (const [key, value] of Object.entries(dictionary_cyrillic)) {
    this.nodeValue = this.nodeValue.replaceAll(key, value);
  }
  return this.nodeValue;
});
console.log('Transliteracija ćirilice završila')
// $("body").children().each(function() {
//     for (const [key, value] of Object.entries(recnik)) {

//         if ($(this).nodeType === 3) 
//         {
//             $(this).html($(this).html().replaceAll(key,value)  );
//         }

//     };
// });

// $("body").children().each(function() {
//     $(this).html($(this).html().replace(/e/g,"$"));
// });



//var temp = document.body.innerHTML;

// for (const [key, value] of Object.entries(recnik)) {
//     temp = temp.replaceAll(key, value);
// };
//document.body.innerHTML = temp;