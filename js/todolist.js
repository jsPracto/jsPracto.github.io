let iValue = document.getElementById('value');
let addBtn = document.getElementById('add-list');

addBtn.addEventListener("click", addvalue, false);

function addvalue(){
    iValue.value ? createList(iValue.value) : alert('Add value');
}

function createList (list){

    // Object for creating element
    let listCon={
        createLI : document.createElement('li'),
        checkbox : document.createElement('input'),
        textInput : document.createElement('input'),
        deleteBtn : document.createElement('button'),
        editBtn : document.createElement('button')
    }
   
    // Main container
    const listCreater = document.getElementById("todoAddedList");   
   
   listCreater.append(listCon.createLI);
   listCon.createLI.append(listCon.checkbox, listCon.textInput, listCon.editBtn, listCon.deleteBtn);
   listCon.checkbox.type = 'checkbox';
   listCon.textInput.value = list;
   listCon.textInput.classList.add('disable', 'add-list');
   listCon.deleteBtn.innerHTML = 'Delete';
   listCon.editBtn.innerHTML = 'Edit';
   
   //event
   listCon.deleteBtn.addEventListener('click', deleteBtnFn);
   listCon.editBtn.addEventListener('click', editBtnFn);
   listCon.checkbox.addEventListener('click', checkboxFn);


function deleteBtnFn (){
    listCreater.removeChild(listCon.createLI);
}

function editBtnFn (){
    listCon.textInput.classList.remove('disable');
    listCon.textInput.focus();
    listCon.textInput.addEventListener('blur', () =>{
        listCon.textInput.classList.add('disable'); 
    })
}

function checkboxFn (){
    console.log('checkbox button clicked.');
}
}
