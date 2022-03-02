const printsMessage = (id, message) => document.getElementById(id).innerText = message; //u zagradama je jer ima vise oid jednog parametra
const resetsMachineWorkState = value => coffeeMachine.poring = value;

let coffeeMachine = {
    water: 400,
    coffee: 200,
    milk: 100,
    credit: 100,
    poring: false,
    ////////////////////////////////////////////////////////////////////////////
    //--Water related functions:
    waterSattus: function () {
        printsMessage('water-status', this.water);
    },

    addWater: function () {
        if (this.poring)
            return alert('sacekajte da masina napravi kafu');
        let inputAmount = prompt('dodaj vodu');
        if (inputAmount === null)
            return;
        while (isNaN(inputAmount) || inputAmount % 1 !== 0 || inputAmount < 0)
            alert('unesite ceo i pozitivan broj - do 400'), inputAmount = prompt('dodaj vodu');
        let newAmount = this.water + Number(inputAmount);
        if (newAmount > 400) {
            this.water = 400, alert('posuda moze drzati max 400ml vode');
        } else {
            this.water = newAmount;
        }
        coffeeMachine.waterSattus();
    },
    emptyWater: function (water) {
        if (this.water < water)
            return  printsMessage('message', 'out of water');
        this.water = this.water - water;
        coffeeMachine.waterSattus();
        printsMessage('message', 'Poring Water');
    },
    ////////////////////////////////////////////////////////////////////////////
    //--Cofee related functions:
    coffeeSattus: function () {
        printsMessage('coffee-status', this.coffee);
    },
    addCoffee: function () {
        if (this.poring)
            return alert('sacekajte da masina napravi kafu');
        let inputAmount = prompt('dodaj kafu');
        if (inputAmount === null)
            return;
        while (isNaN(inputAmount) || inputAmount % 1 !== 0 || inputAmount < 0)
            alert('unesite ceo i pozitivan broj - do 200'), inputAmount = prompt('dodaj kafu');
        let newAmount = this.coffee + Number(inputAmount);
        if (newAmount > 200) {
            this.coffee = 200, alert('posuda moze drzati max 200g kafe');
        } else {
            this.coffee = newAmount;
        }
        coffeeMachine.coffeeSattus();
    },
    emptyCoffee: function (coffee) {
        if (this.coffee < coffee)
            return printsMessage('message', 'out of coffee');
        this.coffee = this.coffee - coffee;
        coffeeMachine.coffeeSattus();
        printsMessage('message', 'Poring coffee');
    },
    ////////////////////////////////////////////////////////////////////////////
    //--Milk related functions:
    milkSattus: function () {
        printsMessage('milk-status', this.milk);
    },
    addMilk: function () {
        if (this.poring)
            return alert('sacekajte da masina napravi kafu');
        let inputAmount = prompt('dodaj mleko');
        if (inputAmount === null)
            return;
        while (isNaN(inputAmount) || inputAmount % 1 !== 0 || inputAmount < 0)
            alert('unesite ceo i pozitivan broj - do 100'), inputAmount = prompt('dodaj mleko');
        let newAmount = this.milk + Number(inputAmount);
        if (newAmount > 100) {
            this.milk = 100, alert('posuda moze drzati max 100ml mleka');
        } else {
            this.milk = newAmount;
        }
        coffeeMachine.milkSattus();
    },
    emptyMilk: function (milk) {
        if (this.milk < milk)
            return printsMessage('message', 'out of milk');
        this.milk = this.milk - milk;
        coffeeMachine.milkSattus();
        printsMessage('message', 'Poring milk');
    },
    ////////////////////////////////////////////////////////////////////////////
    //--Credit related functions:
    creditSattus: function () {
        document.getElementById('credit').innerText = this.credit;
    },
    addCredit: function () {
        if (this.poring)
            return alert('sacekajte da masina napravi kafu');
        let inputAmount = prompt('dodaj kredit');
        if (inputAmount === null)
            return;
        while (isNaN(inputAmount) || inputAmount % 1 !== 0 || inputAmount < 0)
            alert('unesite ceo i pozitivan broj'), inputAmount = prompt('dodaj kredit');
        this.credit += Number(inputAmount);
        coffeeMachine.creditSattus();
    },
    emptyCredit: function (credit) {
        if (this.credit < credit)
            return printsMessage('message', 'OUT OF CREDIT');
        this.credit = this.credit - credit;
        coffeeMachine.creditSattus();
    },
    ////////////////////////////////////////////////////////////////////////////
    //--Product related functions:
    makeShortEspresso: function (credit, water, coffee) {
        if (this.poring)
            return alert('sacekajte da masina napravi kafu');
        if (this.credit < credit)
            return coffeeMachine.emptyCredit(credit);
        if (this.water < water)
            return coffeeMachine.emptyWater(water);
        if (this.coffee < coffee)
            return coffeeMachine.emptyCoffee(coffee);
        this.poring = true;
        coffeeMachine.emptyCredit(credit);
        setTimeout(this.emptyWater.bind(this), 1000, 20);
        setTimeout(this.emptyCoffee.bind(this), 2000, 10);
        setTimeout(printsMessage, 3000, 'message', 'Short espresso FINISHED');
        setTimeout(resetsMachineWorkState, 3000, false);
        setTimeout(printsMessage, 5000, 'message', 'DISPLAY MESAGE');
    },
    makeLongEspresso: function (credit, water, coffee) {
        if (this.poring)
            return alert('sacekajte da masina napravi kafu');
        if (this.credit < credit)
            return coffeeMachine.emptyCredit(credit);
        if (this.water < water)
            return coffeeMachine.emptyWater(water);
        if (this.coffee < coffee)
            return coffeeMachine.emptyCoffee(coffee);
        this.poring = true;
        coffeeMachine.emptyCredit(credit);
        setTimeout(this.emptyWater.bind(this), 1000, 40);
        setTimeout(this.emptyCoffee.bind(this), 2000, 10);
        setTimeout(printsMessage, 3000, 'message', 'Long espresso FINISHED');
        setTimeout(resetsMachineWorkState, 3000, false);
        setTimeout(printsMessage, 5000, 'message', 'DISPLAY MESAGE');
    },
    makeCapuchino: function (credit, water, coffee, milk) {
        if (this.poring)
            return alert('sacekajte da masina napravi kafu');
        if (this.credit < credit)
            return coffeeMachine.emptyCredit(credit);
        if (this.water < water)
            return coffeeMachine.emptyWater(water);
        if (this.coffee < coffee)
            return coffeeMachine.emptyCoffee(coffee);
        if (this.milk < milk)
            return coffeeMachine.emptyMilk(milk);
        this.poring = true;
        coffeeMachine.emptyCredit(credit);
        setTimeout(this.emptyWater.bind(this), 1000, 20);
        setTimeout(this.emptyCoffee.bind(this), 2000, 10);
        setTimeout(this.emptyMilk.bind(this), 3000, 10);
        setTimeout(printsMessage, 4000, 'message', 'Capuchino FINISHED');
        setTimeout(resetsMachineWorkState, 4000, false);
        setTimeout(printsMessage, 6000, 'message', 'DISPLAY MESAGE');
    }
};
coffeeMachine.waterSattus(); //pozovi status vode
coffeeMachine.coffeeSattus(); //pozovi status kafe
coffeeMachine.milkSattus(); //pozovi status mleka
coffeeMachine.creditSattus(); //pozovi status kredita


