var form =  document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
//Delete event
itemList.addEventListener('click' ,removeItem);
//Filter Event
filter.addEventListener('keyup',filterItems);
//add item
function addItem(e){
    e.preventDefault();

   // Get input value
   var newItem = document.getElementById('item').value;

   // Create new li element
   var li = document.createElement('li');
   //add Class
   li.className = 'list-group-item';
   //console.log(li);
   // Add text Node with input value
   li.appendChild(document.createTextNode(newItem));

    //Create del button
    var deleteBtn = document.createElement('button');

    //add clases to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);
    //Edit Button
    var editBtn = document.createElement('button');
    editBtn.className='btn btn-sm float-right Edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    

//Append li to item
   itemList.appendChild(li);
}
//Remove Item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//FilterItems
function filterItems(e){
    // converts text to lower case
    var text = e.target.value.toLowerCase();
    var items=itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName =item.firstChild.textContent;
       if(itemName.toLowerCase().indexOf(text)!=-1){
        item.style.display='block';
       } else{
        item.style.display='none';
       }
    })
}




