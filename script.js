const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');

console.log(itemInput.type);
console.dir(itemInput);

function addItem(e) {
  e.preventDefault();

  const newItem = itemInput.value;

  if (newItem.value === '') {
    alert('Please add an item');
    return;
  }

  const liElement = document.createElement('li');
  const textNode = document.createTextNode(newItem);
  liElement.appendChild(textNode);

  const button = document.createElement('button');
  button.className = 'remove-item btn-link text-red';

  const icon = document.createElement('icon');
  icon.className = 'fa-solid fa-xmark';

  button.appendChild(icon);
  liElement.appendChild(button);

  itemList.appendChild(liElement);
}

// Event listeners
itemForm.addEventListener('submit', addItem);
