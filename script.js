const  listForm = document.querySelector('[data-form]');
const  listInput = document.querySelector('[data-input]');
const listContainer = document.querySelector('[data-list]');

let list = [];

listForm.addEventListener('submit',function(e){ //Quando botão form for pressionado
    e.preventDefault();//evitar que pagina atualize
    const listName = listInput.value;
    if(listName=='' || typeof(listName)=='null')return
    listInput.value = null;
    list.push(listName);
    console.log(list);
    render();
})

function render(){
    while(listContainer.firstChild){
        listContainer.removeChild(listContainer.firstChild);
    }
    list.forEach(function(list) {
        const item = document.createElement('li');
        item.innerText = list;
        listContainer.appendChild(item);
    })

}