const list = document.querySelector('ol');
const input = document.querySelector('input');
const button = document.querySelector('button');
button.onclick = function() {
    let myItem = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);
    listBtn.onclick = function(e) {
        list.removeChild(listItem);
        $("#item").attr("h1", "Item deleted").fadeOut(300).fadeIn(300);
    }
    input.focus();
}
$('.show-me').click(()=>$('ol').toggle(3000));
 