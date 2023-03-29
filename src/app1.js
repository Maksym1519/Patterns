"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//massive-------------------------------------------------------------------
var year = ['january', 'february', 'march'];
year = ['april', 'may', 'june'];
var week = [1, 2, 3, 4, 5, 6, 7];
console.log("week has: ".concat(week, " days"));
//massive operators-------------------------------for,for in, for of,while
//for
for (var i = 0; i < year.length; i++) {
    console.log("year[".concat(i, "] = ").concat(year[i]));
}
;
for (var i = 0; i < year.length; i++) { //break
    //console.log(`if ${year[i]} already summer`)
    if (year[i] == 'june')
        break;
    console.log("while ".concat(year[i], " it is spring"));
}
//for in-----------------------------------
for (var day in week) {
    console.log("week[".concat(day, "] = ").concat(week[day]));
}
;
var buiding = [1, 2, 3, 4, 5];
for (var level in buiding) {
    console.log("level ".concat(buiding[level], " in bulding = ").concat(buiding[level]));
}
;
var chairs = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12];
for (var chair_1 in chairs) {
    console.log("Chair number ".concat(chairs[chair_1], " in collection"));
}
;
//for of------------------------------------------------------
var palm = [1, 2, 3, 4, 5];
for (var _i = 0, palm_1 = palm; _i < palm_1.length; _i++) {
    var finger = palm_1[_i];
    console.log("finger ".concat(finger, " of palm"));
}
;
var album = ['Night lights', 'Robot man', 'Seventh sun'];
for (var _a = 0, album_1 = album; _a < album_1.length; _a++) {
    var song = album_1[_a];
    console.log("".concat(song, " on album"));
}
//while--------------------------------------------------------
var temperature = 7;
while (temperature > 0) {
    console.log("it is not so cold because temperature  ".concat(temperature, " above 0"));
    temperature--;
}
;
var money = 5;
while (money) {
    console.log("it is good money is ".concat(money, " more then 0"));
    money--;
}
;
var fuel = 5;
do {
    console.log("car is going while fuel more then ".concat(fuel));
    fuel--;
} while (fuel >= 0);
var volume = 5;
do {
    console.log("volume is ".concat(volume));
    volume--;
} while (volume > 0);
//switch case-------------------------------------------------
var car = 'bmw';
switch (car) {
    case 'toyota':
        console.log('it is japan brand');
        break;
    case 'opel':
        console.log('it is german brand but it is not fit for us');
        break;
    case 'bmw':
        console.log('it is german brand and it is we are looking for');
}
;
var words = 'rock you like a hurricane';
switch (words) {
    case 'la la la':
        console.log('it is not a song');
        break;
    case 'bum bum':
        console.log('it is not a song again');
        break;
    case 'rock you like a hurricane':
        console.log('it is a rock anthem');
}
;
//try,catch,finaly-----------------------------------------------------
/*let num: number = 0;
try {
   num = 5/qq;
    }
catch(error: any) {
    console.log(error.name);
    }
var yourAge = prompt();

function enterAge(age:any) {
    if(age > 18) {
        alert('Ok')
    } else {
        alert('you are too young')
    }
   }
try {
    enterAge(yourAge)
}
catch(error) {
    console.log('Wrong')
};
*/
function chekDay(day) {
    if (typeof day === 'string') {
        console.log('This is a day');
    }
    else {
        console.log('it is not a day');
    }
}
try {
    chekDay('sunday');
}
catch (error) {
    console.log(error.name);
}
;
var Education = /** @class */ (function () {
    function Education(name, level, numbers) {
        this.name = name;
        this.level = level;
        this.numbers = numbers;
    }
    return Education;
}());
;
var SecondarySchool = /** @class */ (function (_super) {
    __extends(SecondarySchool, _super);
    function SecondarySchool(name, level, numbers, puples) {
        var _this = _super.call(this, name, level, numbers) || this;
        _this.puples = puples;
        return _this;
    }
    SecondarySchool.prototype.showInfo = function () {
        return ("This school is ".concat(this.level));
    };
    return SecondarySchool;
}(Education));
var secondarySchool = new SecondarySchool('Secondary school N120', 'Secondary', 150, true);
console.log(secondarySchool.showInfo());
//factory method------------------------------------------------------
var FurniturePlant = /** @class */ (function () {
    function FurniturePlant() {
    }
    FurniturePlant.prototype.produce = function (type) {
        var furniture;
        if (type === 'chair') {
            furniture = new ChairFurniture();
        }
        else if (type === 'table') {
            furniture = new TableFurniture();
        }
        else if (type === 'sofa') {
            furniture = new SofaFurniture();
        }
        furniture.type = type;
        furniture.make = function () {
            console.log("".concat(this.type, " = ").concat(this.wood, " + ").concat(this.glue, " + ").concat(this.paint));
        };
        return furniture;
    };
    return FurniturePlant;
}());
;
;
var ChairFurniture = /** @class */ (function () {
    function ChairFurniture() {
        this.type = 'Chair';
        this.glue = 'PVA';
        this.wood = 'pine';
        this.paint = 'white';
    }
    return ChairFurniture;
}());
;
var TableFurniture = /** @class */ (function () {
    function TableFurniture() {
        this.type = 'Table';
        this.glue = 'PVA';
        this.wood = 'oak';
        this.paint = 'polish';
    }
    return TableFurniture;
}());
;
var SofaFurniture = /** @class */ (function () {
    function SofaFurniture() {
        this.type = 'Sofa';
        this.glue = 'moment';
        this.wood = 'pine';
        this.paint = 'mix';
    }
    return SofaFurniture;
}());
;
var plant = new FurniturePlant();
var chair = plant.produce('chair');
var table = plant.produce('table');
var sofa = plant.produce('sofa');
chair.make();
table.make();
sofa.make();
;
var Leopard = /** @class */ (function () {
    function Leopard() {
        this.name = 'Leopard';
        this.calibr = 120;
        this.country = 'German';
    }
    Leopard.prototype.leopardInfo = function () {
        console.log("".concat(this.name, ": calibr ").concat(this.calibr, ", country-maker: ").concat(this.country));
    };
    return Leopard;
}());
;
var Challenger = /** @class */ (function () {
    function Challenger() {
        this.name = 'Chalenger';
        this.calibr = 120;
        this.country = 'Great Britain';
    }
    Challenger.prototype.chalengerInfo = function () {
        console.log("".concat(this.name, ": calibr ").concat(this.calibr, ", country-maker: ").concat(this.country));
    };
    return Challenger;
}());
;
var TankPlant = /** @class */ (function () {
    function TankPlant() {
    }
    TankPlant.prototype.creatLeopard = function () { };
    ;
    TankPlant.prototype.createChalenger = function () { };
    ;
    return TankPlant;
}());
;
var TankCreate = /** @class */ (function (_super) {
    __extends(TankCreate, _super);
    function TankCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TankCreate.prototype.creatLeopard = function () {
        return new Leopard;
    };
    ;
    TankCreate.prototype.createChalenger = function () {
        return new Challenger;
    };
    return TankCreate;
}(TankPlant));
;
var tankPlant = new TankCreate();
var leopard = tankPlant.creatLeopard();
leopard.leopardInfo();
var chalenger = tankPlant.createChalenger();
chalenger.chalengerInfo();
