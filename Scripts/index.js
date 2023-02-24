let slots = document.getElementsByClassName('SS-button');
let talentDots = document.getElementsByClassName('Talent-Dot');


for (let i = 0; i < slots.length; i++) {
    const element = slots[i];
    element.addEventListener('click', function onClick(event) {

        if (element.className !== 'SS-button-toggled') {
            element.className = 'SS-button-toggled'
        }
        else {
            element.className = 'SS-button';
        }

    })
}

for (let i = 0; i < talentDots.length; i++) {
    const element = talentDots[i];
    element.addEventListener('click', function onClick(event) {

        if (element.className !== 'Talent-Dot-Toggled') {
            element.className = 'Talent-Dot-Toggled'
        }
        else {
            element.className = 'Talent-Dot';
        }

    })
}


function UpdateStatBonus(Stat) {
    let bonus = document.getElementById('Bonus-' + Stat.name);

    if (Stat.value == '') { bonus.textContent = ''; return; }

    let content = Math.floor((Stat.value - 10) / 2);
    if (content > 0) { content = '+' + content }
    bonus.textContent = content;
}


function Save() {
    var saveData = {};
    saveData.Name = document.getElementById('name').value;
    saveData.Player = document.getElementById('player').value;
    saveData.Race_Class = document.getElementById('race-class').value;
    saveData.EXP = document.getElementById('exp').value;

    saveData.GC_top = document.getElementById('GC-top').value;
    saveData.GC_right = document.getElementById('GC-right').value;
    saveData.GC_left = document.getElementById('GC-left').value;
    saveData.GC_bottom = document.getElementById('GC-bottom').value;

    saveData.SS_1 = document.getElementById('spell-slot-text-1').value;
    saveData.SS_2 = document.getElementById('spell-slot-text-2').value;
    saveData.SS_3 = document.getElementById('spell-slot-text-3').value;
    saveData.SS_4 = document.getElementById('spell-slot-text-4').value;
    saveData.SS_5 = document.getElementById('spell-slot-text-5').value;
    saveData.SS_6 = document.getElementById('spell-slot-text-6').value;
    saveData.SS_7 = document.getElementById('spell-slot-text-7').value;
    saveData.SS_8 = document.getElementById('spell-slot-text-8').value;

    saveData.SS_1_Slots = parseSpellSlots('1');
    saveData.SS_2_Slots = parseSpellSlots('2');
    saveData.SS_3_Slots = parseSpellSlots('3');
    saveData.SS_4_Slots = parseSpellSlots('4');
    saveData.SS_5_Slots = parseSpellSlots('5');
    saveData.SS_6_Slots = parseSpellSlots('6');
    saveData.SS_7_Slots = parseSpellSlots('7');
    saveData.SS_8_Slots = parseSpellSlots('8');

    saveData.Stat_Stance = document.getElementById('Stat-Stance').value;
    saveData.Stat_Power = document.getElementById('Stat-Power').value;
    saveData.Stat_Dexterity = document.getElementById('Stat-Dexterity').value;
    saveData.Stat_Wit = document.getElementById('Stat-Wit').value;
    saveData.Stat_Instinct = document.getElementById('Stat-Instinct').value;
    saveData.Stat_Charm = document.getElementById('Stat-Charm').value;

    saveData.Talents = parseTalents();

    saveData.MaxHP = document.getElementById('HP_Text').value;
    saveData.Initiative = document.getElementById('Init_Text').value;
    saveData.Status = document.getElementById('Status').value;

    saveData.Notes = document.getElementById('Notes').value;
    saveData.Strikes = document.getElementById('Strikes').value;
    saveData.Languages = document.getElementById('Languages').value;
    saveData.Traits = document.getElementById('Traits').value;
    saveData.Equipment = document.getElementById('Equipment').value;

    let img = document.getElementById('output-portrait').src;
    console.log(img);
    saveData.Portrait = img;

    var data = JSON.stringify(saveData);
    localStorage.setItem('data', data);

    console.log('saved');
}

function parseSpellSlots(slot) {
    var slots = document.querySelector('.spell-slot-buttons-'.concat(slot)).querySelectorAll("[class^=SS-button]");
    var data = '';
    for (let i = 0; i < slots.length; i++) {
        const element = slots[i];
        if (element.className == 'SS-button') {
            data += '0';
        }
        else if (element.className == 'SS-button-toggled') {
            data += '1';
        }
    }
    return data;
}

function loadSpellSlots(slot, data) {
    var slots = document.querySelector('.spell-slot-buttons-'.concat(slot)).querySelectorAll("[class^=SS-button]");
    for (let i = 0; i < slots.length; i++) {
        const element = slots[i];
        if (data[i] == '1') {
            element.className = 'SS-button-toggled';
        }
    }
}

function parseTalents() {
    var talents = document.querySelectorAll("[class^=Talent-Dot]");
    var data = '';

    for (let i = 0; i < talents.length; i++) {
        const element = talents[i];
        if (element.className == 'Talent-Dot-Toggled') {
            data += '1';
        }
        else if (element.className == 'Talent-Dot') {
            data += '0';
        }
    }

    return data;
}

function loadTalents(data) {
    var talents = document.querySelectorAll("[class^=Talent-Dot]");

    for (let i = 0; i < talents.length; i++) {
        const element = talents[i];
        if (data[i] == '1') {
            element.className = 'Talent-Dot-Toggled';
        }

    }
}

function Load() {
    var data = localStorage.getItem('data');
    var saveData = JSON.parse(data);

    document.getElementById('name').value = saveData.Name;
    document.getElementById('player').value = saveData.Player;
    document.getElementById('race-class').value = saveData.Race_Class;
    document.getElementById('exp').value = saveData.EXP;

    document.getElementById('GC-top').value = saveData.GC_top;
    document.getElementById('GC-right').value = saveData.GC_right;
    document.getElementById('GC-left').value = saveData.GC_left;
    document.getElementById('GC-bottom').value = saveData.GC_bottom;

    document.getElementById('spell-slot-text-1').value = saveData.SS_1;
    document.getElementById('spell-slot-text-2').value = saveData.SS_2;
    document.getElementById('spell-slot-text-3').value = saveData.SS_3;
    document.getElementById('spell-slot-text-4').value = saveData.SS_4;
    document.getElementById('spell-slot-text-5').value = saveData.SS_5;
    document.getElementById('spell-slot-text-6').value = saveData.SS_6;
    document.getElementById('spell-slot-text-7').value = saveData.SS_7;
    document.getElementById('spell-slot-text-8').value = saveData.SS_8;


    loadSpellSlots('1', saveData.SS_1_Slots);
    loadSpellSlots('2', saveData.SS_2_Slots);
    loadSpellSlots('3', saveData.SS_3_Slots);
    loadSpellSlots('4', saveData.SS_4_Slots);
    loadSpellSlots('5', saveData.SS_5_Slots);
    loadSpellSlots('6', saveData.SS_6_Slots);
    loadSpellSlots('7', saveData.SS_7_Slots);
    loadSpellSlots('8', saveData.SS_8_Slots);

    document.getElementById('Stat-Stance').value = saveData.Stat_Stance;
    document.getElementById('Stat-Power').value = saveData.Stat_Power;
    document.getElementById('Stat-Dexterity').value = saveData.Stat_Dexterity;
    document.getElementById('Stat-Wit').value = saveData.Stat_Wit;
    document.getElementById('Stat-Instinct').value = saveData.Stat_Instinct;
    document.getElementById('Stat-Charm').value = saveData.Stat_Charm;

    loadTalents(saveData.Talents);

    document.getElementById('HP_Text').value = saveData.MaxHP;
    document.getElementById('Init_Text').value = saveData.Initiative;
    document.getElementById('Status').value = saveData.Status;

    document.getElementById('Notes').value = saveData.Notes;
    document.getElementById('Strikes').value = saveData.Strikes;
    document.getElementById('Languages').value = saveData.Languages;
    document.getElementById('Traits').value = saveData.Traits;
    document.getElementById('Equipment').value = saveData.Equipment;

    
    let img = saveData.Portrait;
    document.getElementById('output-portrait').src = img;
    
    

}

Load();



/*Updates the stat bonus after the data is loaded in*/
UpdateStatBonus(document.getElementById('Stat-Stance'));
UpdateStatBonus(document.getElementById('Stat-Power'));
UpdateStatBonus(document.getElementById('Stat-Dexterity'));
UpdateStatBonus(document.getElementById('Stat-Wit'));
UpdateStatBonus(document.getElementById('Stat-Instinct'));
UpdateStatBonus(document.getElementById('Stat-Charm'));
