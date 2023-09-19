

let inputx =document.getElementById('inputx');
let list =document.getElementById('list');

inputx.addEventListener('keyup',function(event){
    if(event.key =='Enter'){
        addItem(this.value)
        this.value= ''
    }
})

let addItem=(inputx)=>{
    let listItem= document.createElement('li');
    listItem.innerHTML = `${inputx}<i></i>`;

    listItem.addEventListener('click', function(){
        this.classList.toggle('done');
    })

    listItem.querySelector('i').addEventListener('click',function(){
        listItem.remove();
    })
    list.appendChild(listItem);
}
