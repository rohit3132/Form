//EXAMINE THE DOCUMENT OBJECT //

//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10]

// var headerTitle = (document.getElementById('header-title'));
// var header=document.getElementById('main-header');
// // //headerTitle.innerHTML = '<h3>Hello</h3>';
//  headerTitle.style.borderBottom ='solid 3px #000 ';
//  var title = document.getElementById('title');
//  title.style.color ='green';
//  title.style.fontWeight='900';
//  items[1].textContext='Hello 2';
//  items[1].style.fontWeight='bold';
//  items[1].style.backgrpund='yellow';

//  items.style.backgroundColor = '#f4f4f4';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[2].style.background = 'green';
// // Gives Error
// // items.style.background =  '#f4f4f4';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';

// }

var li= document.getElementsByTagName('li');
console.log(li);

for(var i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
    li[i].style.backgroundColor='lightgrey';
}

