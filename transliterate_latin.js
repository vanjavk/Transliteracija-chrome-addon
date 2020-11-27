
console.log('Transliteracija latinice počinje');

$('body :not(script)').contents().filter(function () {
  return this.nodeType === 3;
}).replaceWith(function () {
  for (const [key, value] of Object.entries(dictionary_latin)) {
    this.nodeValue = this.nodeValue.replaceAll(key, value);
  }
  return this.nodeValue;
});
console.log('Transliteracija latinice završila')
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