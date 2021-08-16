class ElectronicDevices{
    constructor(name) {
        this.name = name;
        this.isPugged = false;
    }
    plugIn(){
        console.log(this.name + " is plugged!");
        this.isPugged = true;
    }
    unPlug(){
        console.log(this.name + " is unplugged!");
    }
}
class Computer extends ElectronicDevices{
    constructor(name, type, year) {
        super(name);
        this.type = type;
        this.year = year;
        this.isPugged = false;
    }
}
const portableComputer = new Computer('Samsung', 'PC', 2021);
class Lamp extends ElectronicDevices{
    constructor(name, type, light, color) {
        super(name);
        this.type = type;
        this.light = light;
        this.color = color;
        this.isPugged = false;
    }
}
const tableLamp = new Lamp("Transvit", "Table Lamp", "White", "Black");
portableComputer.plugIn();
console.log(portableComputer);
tableLamp.unPlug();
console.log(tableLamp);
