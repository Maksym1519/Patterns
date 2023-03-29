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
exports.__esModule = true;
//variable------------------------------------------------
//js-----------------
var a;
a = 10;
a = 'Maksym';
//ts----------------
var y = 10;
//y = 'Maksym';
//y: string = 'Maksym';
var any = 10;
any = 'Maksym';
//functions------------------------------------------------
function create(num2) {
    var num1 = 10;
    var sum = num1 + num2;
}
create(10);
function create2(num2) {
    var num1 = 10;
    var sum = num1 + num2;
    console.log(sum);
}
create2(10);
function makeWindow(material1, material2) {
    var window = material1 + material2;
    console.log(window);
}
makeWindow('plastic', 10);
function makeWindow2(material1, material2) {
    var window = material1 + material2;
    console.log(window);
}
makeWindow2(20, 10);
function checkNum(a, b) {
    if (!isNaN(a || b)) {
        console.log(a * b);
    }
}
checkNum(10, 20);
function checkNum2(a, b) {
    if (!isNaN(a || b)) {
        console.log(a * b);
    }
}
checkNum2(10, '10');
//cicle-----------------------------
var count = 0; //syntax js
while (count <= 30) {
    console.log(count);
    count = count + 5;
}
var count2 = 0; //syntax ts
while (count2 <= 30) {
    //console.log(count2)
    count2 = count2 + 5;
}
;
var result = 1; //syntax js
var counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
    console.log(result);
}
var result2 = 1; //syntax ts
var counter2 = 0;
while (counter2 < 1) {
    result2 = result2 * 3;
    counter2 = counter2 + 1;
    //console.log(result2)
}
var result3 = 1; //syntaxjs
for (var counter3 = 0; counter3 < 3; counter3++) {
    result3 = result3 * 2;
    console.log(result3);
}
var result4 = 1; //syntaxjs
for (var counter4 = 0; counter4 < 3; counter4++) {
    result4 = result4 * 2;
    console.log(result4);
}
;
var sign = '#'; //syntax js
for (var i = 0; i <= 7; i++) {
    sign += '#';
    console.log(sign);
}
;
var sign2 = '#'; //syntax ts   
for (var i = 0; i <= 7; i++) {
    sign2 += '#';
    console.log(sign2);
}
;
var square = function (x) {
    return x * x;
};
console.log(square('12'));
var square2 = function (x) {
    return x * x;
};
console.log(square2(12));
//замыкание----------------------------------
function multiplier(factor) {
    return function (number) {
        return number * factor;
    };
}
var twice = multiplier(2);
console.log(twice(5));
function multiplier2(factor) {
    return function (number) {
        return number * factor;
    };
}
var twice2 = multiplier2(2);
console.log(twice2(5));
function createCourses(title) {
    var nameCourses = title;
    return function (type) {
        return "".concat(nameCourses).concat(type);
    };
}
var infoCourses = createCourses('Avada Media');
console.log(infoCourses(' React'));
//рекурсия------------------------------------------------------
function powerM(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * powerM(base, --exponent);
}
console.log(powerL(2, 4));
function powerL(base, exponent) {
    if (exponent == 0)
        return 1;
    else
        return base * powerL(base, --exponent);
}
console.log(powerL(2, 4));
//massives---------------------------------------------
var arrayNums = [1, 2, 3, 4, 5];
var arrayNums2 = [1, 2, 3, 4, 5];
var arrayNums3 = [1, 2, 3, 4, 5];
arrayNums3.push(6);
arrayNums2.push('a');
console.log(arrayNums2);
var tasks = ['clean', 'wash', 'read'];
function listTask(task) {
    return tasks.push(task);
}
listTask('walk');
console.log(tasks);
function nextTask() {
    return tasks.shift();
}
nextTask();
console.log(tasks);
function urgentTask(task) {
    return tasks.unshift(task);
}
urgentTask('learn');
console.log(tasks);
//Objects----------------------------------------------------------
var house = {
    window: true,
    roof: 'metal',
    walls: 'bricks',
    rooms: 3
};
var year = {
    month: 'march',
    numbers: 12
};
;
var house2 = {
    window: false,
    roof: 'plastic',
    walls: 'concrete',
    rooms: 1
};
console.log(house2);
var dog = {}; //syntax js
dog.speak = function (line) {
    console.log("Dog saying '" + line + "'");
};
dog.speak("I'm a big dog");
function catGreet(cat) {
    console.log("".concat(cat.speak, " my name is ").concat(cat.name, " my fur is ").concat(cat.color));
}
catGreet({ speak: 'Meow', name: 'Cat', color: 'white' });
function dogGreet(dog) {
    console.log("".concat(dog.speak, " my name is ").concat(dog.name, " my fur is ").concat(dog.color));
}
dogGreet({ speak: 'Ruff', name: 'Dog', color: 'black' });
//Prototype-------------------------------------------------------------
var scorpion = {
    name: 'black'
};
var spider = {
    name: 'white'
};
console.log(spider.__proto__ === scorpion.__proto__); //true  __proto__  all objects ===
var dell = {
    model: 'Dell',
    color: 'Black',
    os: 'Windows',
    turn: function load() {
        console.log('100%');
    }
};
console.log(dell.turn);
var monkey = {
    head: true,
    legs: 2,
    hands: 2,
    kind: 'monkey',
    speak: function greet() {
        console.log("Hello I am a ".concat(this.kind));
    }
};
var human = Object.create(monkey);
human.kind = 'human';
console.log(human.legs);
//constructor-------------------------------------------------------------
var Ship = /** @class */ (function () {
    function Ship(options) {
        this.type = options.type,
            this.flag = options.flag;
    }
    return Ship;
}());
var asianGlory = new Ship({
    type: 'Car-Career',
    flag: 'Panama'
});
console.log(asianGlory);
var Vessel = /** @class */ (function () {
    function Vessel(type, flag, gasEngeen) {
        this.type = 'Car-career',
            this.flag = 'Panama',
            this.gasEngeen = false;
    }
    return Vessel;
}());
;
var goodwood = new Vessel('heavy-lift', 'panama', true);
console.log(goodwood);
//classes---------------------------------------------------------
var Courses = /** @class */ (function () {
    function Courses(company, type, id, language) {
        this.company = company;
        this.type = type;
        this.id = id;
        this.language = language;
    }
    Courses.prototype.info = function () { return "".concat(this.company, " provides ").concat(this.type, " courses"); };
    return Courses;
}());
var group1 = new Courses('Avada Media', 'React', 555, 'any');
console.log(group1.info());
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School(company, type, id, language, numbers) {
        var _this = _super.call(this, company, type, id, language) || this;
        _this.numbers = numbers;
        return _this;
    }
    return School;
}(Courses));
var group2 = new School('Avada Media', 'React', 555, 'any', 15);
console.log(group2.numbers);
var Jet = /** @class */ (function () {
    function Jet(wings, turbine) {
        this.wings = wings,
            this.turbine = turbine;
    }
    return Jet;
}());
var Country = /** @class */ (function () {
    function Country(title) {
        this.title = title;
    }
    Country.prototype.getInfo = function () { return "The name of my country is ".concat(this.title); };
    return Country;
}());
var ukraine = new Country('Ukraine');
console.log(ukraine.getInfo());
var City = /** @class */ (function (_super) {
    __extends(City, _super);
    function City(title, location) {
        var _this = _super.call(this, title) || this;
        _this.location = location;
        return _this;
    }
    City.prototype.getLocation = function () {
        return "The name of my country is ".concat(this.title, " and located in ").concat(this.location);
    };
    return City;
}(Country));
var odessa = new City('Ukraine', 'south');
console.log(odessa.getLocation());
var MassMedia = /** @class */ (function () {
    function MassMedia(type, sport) {
        this.type = type,
            this.sport = sport,
            this.language = 'ukrainian';
    }
    return MassMedia;
}());
var information = new MassMedia('tv', 'chanal');
var BaseClassWithConstructor = /** @class */ (function () {
    function BaseClassWithConstructor(_id, num) {
        this.id = _id;
        this.num = num;
    }
    return BaseClassWithConstructor;
}());
var hrt = new BaseClassWithConstructor(45, 65);
console.log(hrt);
var InheritPrevClass = /** @class */ (function (_super) {
    __extends(InheritPrevClass, _super);
    function InheritPrevClass(num, password) {
        var _this = _super.call(this, num, password) || this;
        _this.password = password;
        return _this;
    }
    return InheritPrevClass;
}(BaseClassWithConstructor));
var jkr = new InheritPrevClass(12345, 55);
console.log(jkr);
//polymorphism--------------------------------------------
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.sum = function (num1, num2) {
        return num1 + num2;
    };
    Calculator.prototype.sum = function (num1, num2) {
        return num1 + num2;
    };
    return Calculator;
}());
var newNum = new Calculator();
console.log(newNum.sum(5, 5));
console.log(newNum.sum('5', '5'));
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this._firstName = firstName,
            this._lastName = lastName,
            this._age = age;
    }
    Person.prototype.greeting = function () {
        return ("\u041F\u0440\u0438\u0432\u0435\u0442, \u044F \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0438 \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(this._firstName));
    };
    Object.defineProperty(Person.prototype, "fullName", {
        get: function () {
            return "\u0424\u0430\u043C\u0438\u043B\u0438\u044F -".concat(this._lastName, " \u0418\u043C\u044F -").concat(this._firstName);
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
;
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, age, inn, numbers, skills) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.inn = inn;
        _this.numbers = numbers;
        _this.skills = skills;
        return _this;
    }
    Employee.prototype.greeting = function () {
        return ("\u041F\u0440\u0438\u0432\u0435\u0442, \u044F \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A \u0438 \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(this._firstName));
    };
    return Employee;
}(Person));
;
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(firstName, lastName, age, inn, numbers, skills, level, language) {
        var _this = _super.call(this, firstName, lastName, age, inn, numbers, skills) || this;
        _this.level = level;
        _this.language = language;
        return _this;
    }
    Developer.prototype.greeting = function () {
        return ("\u041F\u0440\u0438\u0432\u0435\u0442, \u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u0438 \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(this._firstName));
    };
    return Developer;
}(Employee));
var pers = new Person('Maksym', 'Korostelov', 100);
var employ = new Employee('Marina', 'Guseva', 100, 298, 15, 'TS');
var develop = new Developer('Damir', 'Korostelov', 100, 298, 15, 'TS', 'Junior', 'Advance');
//console.log(pers.greeting())
//console.log(employ.greeting())
//console.log(develop.greeting())
var personList = [pers, employ, develop];
function allGreet(personList) {
    for (var i = 0; i < personList.length; i++) {
        var person = personList[i];
        console.log(person.greeting());
    }
}
allGreet(personList);
//inheritance--------------------------
var Comedy = /** @class */ (function () {
    function Comedy(movie, length) {
        this.movie = movie;
        this.length = length;
    }
    Comedy.prototype.info = function () {
        return ("This movie called ".concat(this.movie, " and it has ").concat(this.length, " length"));
    };
    return Comedy;
}());
var Horor = /** @class */ (function (_super) {
    __extends(Horor, _super);
    function Horor(movie, length) {
        return _super.call(this, movie, length) || this;
    }
    Horor.prototype.show = function () {
        return ('This type of movie could be watch by person above 18');
    };
    return Horor;
}(Comedy));
var comedyFilm = new Comedy('Eurotrip', 120);
var hororFilm = new Horor('Saw', 120);
console.log(hororFilm.info());
;
var Oblast = /** @class */ (function () {
    function Oblast(name, length, width) {
        this.name = name;
        this.length = length;
        this.width = width;
    }
    Oblast.prototype.countSquare = function () {
        return this.length * this.width;
    };
    return Oblast;
}());
;
var odObl = new Oblast('odesskaya oblast', 10, 10);
console.log(odObl.name);
var Rajon = /** @class */ (function (_super) {
    __extends(Rajon, _super);
    function Rajon(name, length, width, library) {
        var _this = _super.call(this, name, length, width) || this;
        _this.library = library;
        return _this;
    }
    Rajon.prototype.showName = function () {
        return this.name;
    };
    return Rajon;
}(Oblast));
var kiyvskiy = new Rajon('odesskaya oblast', 10, 10, true);
//generic---------------------------------------------------
var getter = function (data) { return data; };
console.log(getter(10).length);
console.log(getter('max').length);
var key = function (sign) { return sign; };
console.log(key(10).length);
console.log(key('max').length);
