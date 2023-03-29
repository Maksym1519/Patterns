export {

};

 //massive-------------------------------------------------------------------
let year: string[] = ['january','february','march'];
year = ['april','may','june'];
let week: number[] = [1,2,3,4,5,6,7];
console.log(`week has: ${week} days`)


//massive operators-------------------------------for,for in, for of,while
//for
for(let i = 0; i < year.length; i++) {
    console.log(`year[${i}] = ${year[i]}`)
};

for(let i = 0; i < year.length; i++) {                        //break
    //console.log(`if ${year[i]} already summer`)
    if(year[i] == 'june') break;
    console.log(`while ${year[i]} it is spring`)
} 
//for in-----------------------------------
for(let day in week) {
    console.log(`week[${day}] = ${week[day]}`)
};

const buiding: number[] = [1,2,3,4,5];
for(let level in buiding) {
    console.log(`level ${buiding[level]} in bulding = ${buiding[level]}`)
};

const chairs: number[] = [1,2,3,4,5,6,7,8,10,11,12];
for(let chair in chairs) {
    console.log(`Chair number ${chairs[chair]} in collection`)
};
//for of------------------------------------------------------
const palm: number[] = [1,2,3,4,5];
for(let finger of palm) {
    console.log(`finger ${finger} of palm`)
};

const album: string[] = ['Night lights','Robot man','Seventh sun'];
for(let song of album) {
    console.log(`${song} on album`)
}

//while--------------------------------------------------------
let temperature: number = 7;
while(temperature > 0) {
    console.log(`it is not so cold because temperature  ${temperature} above 0`);
    temperature--
};

let money: number = 5;
while(money) {
    console.log(`it is good money is ${money} more then 0`);
    money--
};

let fuel: number = 5;
do {
console.log(`car is going while fuel more then ${fuel}`);
fuel--
} while 
    (fuel >= 0);

let volume: number = 5;
do {
    console.log(`volume is ${volume}`);
    volume--
}  while (volume > 0)

//switch case-------------------------------------------------
let car: string = 'bmw'
switch(car) {
case 'toyota':
console.log('it is japan brand')
break;
case 'opel':
console.log('it is german brand but it is not fit for us')
break;
case 'bmw':
    console.log('it is german brand and it is we are looking for')
};

let words = 'rock you like a hurricane';
switch(words) {
    case 'la la la':
        console.log('it is not a song')
        break;
        case 'bum bum':
            console.log('it is not a song again')
            break;
            case 'rock you like a hurricane':
                console.log('it is a rock anthem')
};

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
function chekDay(day: string): any {
if(typeof day === 'string') {
    console.log('This is a day')
} else {
    console.log('it is not a day')
}
}
try {
    chekDay('sunday')
} 
catch(error: any) {
    console.log(error.name)
}

//Abstract class---------------------------------------------------------
interface Education {
    name: string;
    level: string;
    numbers: number;
};

abstract class Education implements Education {
    constructor(name: string,level: string, numbers: number) {
    this.name = name;
    this.level = level;
    this.numbers = numbers
  }
  abstract showInfo(): string 
   };

class SecondarySchool extends Education {
public puples: boolean;
constructor(name: string,level: string,numbers: number,puples: boolean) {
super(name,level,numbers)
this.puples = puples
}
showInfo(): string {
 return (`This school is ${this.level}`)
}
}
let secondarySchool = new SecondarySchool('Secondary school N120','Secondary',150,true)
console.log(secondarySchool.showInfo())
 

//factory method------------------------------------------------------
class FurniturePlant {
    produce(type: string) {
        let furniture: any;
        if(type === 'chair') {
            furniture = new ChairFurniture();
        } else if(type === 'table') {
            furniture = new TableFurniture();
        } else if(type === 'sofa') {
            furniture = new SofaFurniture();
        }
        furniture.type = type;
        furniture.make = function () {
            console.log(`${this.type} = ${this.wood} + ${this.glue} + ${this.paint}`)
        }
        return furniture;
    }
};

 interface Furniture {
    type: string;
    glue: string;
    paint: string;
    wood: string;
 };
 
 class ChairFurniture implements Furniture {
    type: string;
    glue: string;
    paint: string;
    wood: string;
    constructor() {
        this.type = 'Chair';
        this.glue = 'PVA';
        this.wood = 'pine';
        this.paint = 'white'
    }
 };

 class TableFurniture implements Furniture {
    type: string;
    glue: string;
    paint: string;
    wood: string;
    constructor() {
        this.type = 'Table';
        this.glue = 'PVA';
        this.wood = 'oak';
        this.paint = 'polish';
       }
 };
 class SofaFurniture implements Furniture {
    type: string;
    glue: string;
    paint: string;
    wood: string;
    constructor() {
        this.type = 'Sofa';
        this.glue = 'moment';
        this.wood = 'pine';
        this.paint = 'mix';
       }
 };

 const plant = new FurniturePlant();

 let chair = plant.produce('chair');
 let table = plant.produce('table');
 let sofa = plant.produce('sofa')
 chair.make();
 table.make();
 sofa.make()