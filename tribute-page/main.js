var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);

//Add item
function addItem(e){
  e.preventDefault();

  //Get input value
  var newItem = document.getElementById('item').value;

  //Create new element
  var li = document.createElement('li');
  //Add class
  li.className = 'list-group-item';
  console.log(li);
  //Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  //Create delete button element
  var deleteBtn = document.createElement('button');

  //Add classes to delete button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //Append text node
  deleteBtn.appendChild(document.createTextNode('X'));
  // Append button to li

  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}