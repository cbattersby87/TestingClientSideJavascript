var Combat = function() {

}

Combat.prototype.attack = function (){
    if (attacker.calculateHit(defender)) {
        defender.takeDamage(attacker.damage);
    }
}

var Character = function (){
    Character.prototype.calculateHit = function () {

    }
    Character.prototype.takeDamage = function () {

    }
}