let pol = () => {console.log('I\'m alive!')};


function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
//    this.tostring = function() {return this.name;};
};

function declareWinner(fighter1, fighter2, firstAttacker){
    if(firstAttacker = fighter1.name){
        while (fighter1.health > 0 && fighter2.health > 0){
            fighter2.health -= fighter1.damagePerAttack;
            console.log(fighter1.name + ' did ' + fighter1.damagePerAttack + ' damage.');
            console.log(fighter2.name + ' health: ' + fighter2.health);
            if(fighter2.health > 0){
                fighter1.health -= fighter2.damagePerAttack;
                console.log(fighter2.name + ' did ' + fighter2.damagePerAttack + ' damage.');
                console.log(fighter1.name + ' health: ' + fighter1.health);
            };
        };
        if(fighter1.health > fighter2.health) {
            console.log(fighter1.name);
            return fighter1.name;
        } else {
            console.log(fighter2.name);
            return fighter2.name;
        };
    } else {
        while (fighter1.health > 0 && fighter2.health > 0){
            fighter1.health -= fighter2.damagePerAttack;
            console.log(fighter2.name + ' did ' + fighter2.damagePerAttack + ' damage.');
            console.log(fighter1.name + ' health: ' + fighter1.health);
            if(fighter1.health > 0){
                fighter2.health -= fighter1.damagePerAttack;
                console.log(fighter1.name + ' did ' + fighter1.damagePerAttack + ' damage.');
                console.log(fighter2.name + ' health:' + fighter2.health);
            };
            if(fighter1.health > fighter2.health){
                console.log(fighter1.name);
                return fighter1.name
            } else {
                console.log(fighter2.name);
                return fighter2.name;
            };
        };
    };
};

function saveTime() {
    var bill = new Fighter('bill', 10, 2);
    var ted = new Fighter('ted', 10, 3);
    declareWinner(bill, ted, bill);
};

function tryme(){
    declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4   ), 'Lew    ');
};