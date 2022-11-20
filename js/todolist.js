const todoList = [];

function addValue (){
    let iValue = document.getElementById('value').value;
    todoList.push(iValue);
    createList(iValue)
}

function createList (list){
   const listCreater = document.getElementById("todoAddedList");
   const createLI = document.createElement('li');
   listCreater.append(createLI);
   todoList.filter((tlist, i) => {
    tlist
    console.log('test',i)
    }).length;
   console.log(createLI);
}