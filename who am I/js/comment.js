const input = document.querySelector('.input');
const user_name = document.querySelector('.name');
const itemAdd = document.querySelector('.itemAdd');
const items = document.querySelector('.items');

const onAdd = () => {
  const text = input.value;
  const NickName = user_name.value;
    if (user_name.value == ''){
      user_name.focus();
      return;
    }else if (input.value == ''){
      input.focus();
      return;
    }

  const item = document.createElement('li');
  item.setAttribute('class','item');

  const itemName = document.createElement('b');
  itemName.setAttribute('class','itemName');
  itemName.innerHTML = NickName;

  const itemText = document.createElement('span');
  itemText.setAttribute('class','itemText');
  itemText.innerHTML = text;
  
  const itemDel = document.createElement('button');
  itemDel.setAttribute('class','itemDel');
  itemDel.innerHTML = '삭제';
  itemDel.addEventListener('click',() => {
    items.removeChild(item);
  })

  item.appendChild(itemName);
  item.appendChild(itemText);
  item.appendChild(itemDel);
  items.appendChild(item);
  user_name.value='';
  user_name.focus();
  input.value='';
  input.focus();


}
itemAdd.addEventListener('click',() => {
  onAdd();
});
