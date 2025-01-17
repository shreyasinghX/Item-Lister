var form =document.getElementById('add-form');
var itemList =document.getElementById('items');
var filter=document.getElementById('filter');

itemList.addEventListener('click',removeItem);
filter.addEventListener('keyup',filterItem);

var submit=document.addEventListener('submit',addItem);
function addItem(e){
    e.preventDefault();
    var newItem=document.getElementById('item').value;
    var li =document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
  
    
    var deletebtn = document.createElement('button');
    deletebtn.className='btn btn-danger btn-sm'
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    itemList.appendChild(li);


}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are u sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItem(e){
    var text=e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}
