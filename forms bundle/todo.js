var ul = document.getElementById('list');
var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

function removeItem() {
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        while ( li[index] && li[index].children[0].checked){
            ul.removeChild(li[index])
        
        }
        
    }
}
