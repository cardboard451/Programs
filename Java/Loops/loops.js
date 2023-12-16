const list = [{
  stuff : '',
  dueDate: ''
}];

function addEntry(){
  const toDo = document.querySelector('.entry');
  const name = toDo.value;

  const toDate = document.querySelector('.entryDate');
  const nameDate = toDate.value;

  list.push({name,nameDate});
  toDo.value = '';
  renderList();
}
function renderList(){
  let i = 0;
  let prList = "";
  while(i<list.length){
    const prName = list[i];
    //const stuff = prName.stuff;
    //const dueDate = prName.dueDate;
    const {stuff, dueDate} =prName;
    const html =`
      <div>${stuff}</div>
      <div>${dueDate}</div>
        <button onclick='
          list.splice(${i},1);
          renderList();
        '>Delete</button>
    `;
    prList += html;
    i++;
  }
  document.querySelector('.js-todo-list').innerHTML = prList
  console.log(prList);
}

