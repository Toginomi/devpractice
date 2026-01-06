const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('#list')

function addChapter(){
    if(input.value.trim() !== '') {
        const li = document.createElement('li')
        const deleteButton = document.createElement('button')

        li.textContent = input.value
        deleteButton.textContent = '❌'
        
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
        
        li.append(deleteButton)
        list.append(li)

    }
    input.focus();
    input.value = '';
}



button.addEventListener('click', addChapter);
input.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        addChapter();
    }
})
