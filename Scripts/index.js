let slots = document.getElementsByClassName('SS-button');
let talentDots = document.getElementsByClassName('Talent-Dot');


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


for (let i = 0; i < talentDots.length; i++) {
    const element = talentDots[i];
    element.addEventListener('click', function onClick(event){

        if(element.className !== 'Talent-Dot-Toggled')
        {
            element.className = 'Talent-Dot-Toggled'
        }
        else
        {
            element.className = 'Talent-Dot';
        }
        
    })
}