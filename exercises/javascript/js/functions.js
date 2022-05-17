const set_headline = () => {
    let element = document.querySelector('h1');
    element.innerHTML = 'Javascript functions';
}

const findById = (id, text) => {

    let element = document.getElementById(id);
    element.innerHTML = text;

}

// Wine glasses


const hour = 60;
const day = 7 * 60;


const wineGlassesInTime = (time) => {

    let speed = 5;

    const wineGlassesAmount = console.log('Wine glasses: ' + time / speed);


}

wineGlassesInTime(hour);
wineGlassesInTime(day);

//Tiling a hallway

const tilesCounter = (a, b) => {

    const tileWidth = 0.5;
    const tileHeight = 0.5;

    const tilesAmount = console.log('Tiling a hallway: ' + (a / tileWidth) * (b / tileHeight));
}

tilesCounter(6, 2.5)

//Salary


const getNetto = (brutto, tax) => {

    console.log(brutto);

    const netto = console.log('Netto Salary: ' + (brutto - (brutto * tax)));

}

const mySalary = 12;
const workingHours = 8;
const workingDays = 21;
const myBrutto = mySalary * workingHours * workingDays;

const myTax = 0.15;

getNetto(myBrutto, myTax);


//Mortgage

const priceByMeter = 6688;
const apartment = 80;

const apartmentPrice = priceByMeter * apartment;

const apartmentPriceinCZK = apartmentPrice * 25;

const mortageAmount = apartmentPrice * 0.85;

const paymentPerMonth = 800;

const years = console.log('Your mortgage will last ' + (mortageAmount / (paymentPerMonth * 12)).toFixed(2) + ' years');


//Study Time

const classHours = (7 * 4) + 3;
//console.log(classHours);
const studyHours = (classHours * 0.3) + classHours;
//console.log(studyHours);
const totalStudyTime = 12 * studyHours;
const studyMessage = 'Total study time: ' + totalStudyTime.toFixed(0) + ' hours';
console.log(studyMessage);

const el = document.querySelector('.message');
el.innerHTML = studyMessage;

//Hanging a painting

const wallWidth = 245;
const frameWidth = 175;

const clinch1 = wallWidth / 2 - (frameWidth / 2 + 10);
const clinch2 = wallWidth / 2;
const clinch3 = wallWidth / 2 + (frameWidth / 2 - 10);

console.log('Clinch 1: ' + clinch1 + ', Clinch 2: ' + clinch2 + ', Clinch 3: ' + clinch3);

const photoWidth = 4250;
const photoHeight = 2040;

const frameHeight = (photoHeight / photoWidth) * frameWidth;
console.log('frameHeight ' + frameHeight);

//Population in the Pilsner region

const startYear = 2000;
const startPopulation = 551281;
const endYear = 2100;
const rate = 0.014;



const endPopulation = startPopulation * (1 - rate) ** (endYear - startYear);

console.log('Population by 2100: ' + endPopulation.toFixed(0));


//Carpet

const area = 30;
const size = area ** 0.5;
const size2 = Math.sqrt(area);

const isFit = console.log(size < 5 ? 'It fits' : 'It doesn\'t fit');

//////////Exercises - functions, writing scripts/////////////////

//Birth year



const ageCounter = (birthYear) => {
    const currentYear = new Date().getFullYear();

    console.log(currentYear);

    const age = currentYear - birthYear;
    let element = document.querySelector('.age');
    element.innerHTML = 'Your age is = ' + age;

}

const myBirthYear = Number(prompt('Enter your year of birth:'));
ageCounter(myBirthYear);

//Velocity conversion

const converter = (vpm) => {

    const mph = 1.609344;
    let element = document.querySelector('.velocity');
    element.innerHTML = 'Velocity in miles per hour: ' + vpm + ' Velocity in km per hour = ' + (vpm * mph).toFixed(2);

}

const vpmInput = Number(prompt('Enter a velocity in miles: '));
converter(vpmInput);

//Currency exchange

const convertToEur = (sum) => {

    const exchangeRate = 25.695;

    const converted = Math.round(sum * exchangeRate);
    // console.log('Sum in crowns:' + converted);

    let element = document.querySelector('.crowns');
    element.innerHTML = 'Sum in euros = ' + sum + ' Sum in crowns = ' + converted.toFixed(2);

}

const sumInput = Number(prompt('Enter a sum in euros: '));
convertToEur(sumInput);




















