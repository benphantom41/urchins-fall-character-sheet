let slots = document.getElementsByClassName('SS-button');
let transparent = 'rgba(0,0,0,0)';

for (let i = 0; i < slots.length; i++) {
    const element = slots[i];
    element.addEventListener('click', function onClick(event){

        if(element.className !== 'SS-button-toggled')
        {
            element.className = 'SS-button-toggled'
        }
        else
        {
            element.className = 'SS-button';
        }
        
    })
}