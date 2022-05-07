// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let hello = 'hello world';
let lorem = 'lorem ipsum';
let js = 'javascript is cool';

// console.log(hello.length);
// console.log(lorem.length);
// console.log(js.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// console.log(hello.toUpperCase());
// console.log(lorem.toUpperCase());
// console.log(js.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let bigHello = 'HELLO WORLD';
// let bigLorem = 'LOREM IPSUM';
// let bigJs = 'JAVASCRIPT IS COOL';
//
// console.log(bigLorem.toLowerCase());
// console.log(bigLorem.toLowerCase());
// console.log(bigJs.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
//
// console.log(str.trim());


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// console.log(str.split(' '));


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
//
// console.log(arr.map(item => item + ''));
// console.log(arr.map(item => item.toString()));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];

// я правильно зрозумів завдання? Чи тут потрібно було зробити щось інше?

// let sortNums = (nums,direction) => {
//
//     // if(direction === 'ascending'){
//     //     return nums.sort((a,b) => a - b);
//     // }else if(direction === 'descending'){
//     //     return nums.sort((a,b) => b -a);
//     // }else {
//     //     return 'Pls enter : descending or ascending';
//     // }
//
//     return direction === 'ascending' ? nums.sort((a,b) => a - b) : nums.sort((a,b) => b - a);
// };
//
// console.log(sortNums(nums, 'ascending'));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log
// (coursesAndDurationArray.sort
// ((a,b) =>
//     b.monthDuration - a.monthDuration).filter(value => value.monthDuration > 5));


// описати колоду карт
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



let cardSuitArr = ['spade', 'diamond', 'heard', 'clubs'];
let valueArr = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'joker'];
let colorArr = ['red', 'black'];

// наскільки цей спосіб заповнення убогий?
// яким чином ще можна описати колоду карт
// бо на даний момент - мені здається, що ручками найлегше

let createColoda = (cardSuits, value_, color_) => {
    let cards = {};
    cards["cardSuit"] = '';
    cards["value"] = '';
    cards["color"] = '';

    for (let i = 0; i < 9; i++) {
            cards[i] = {
                cardSuits: cardSuits[0],
                value: value_[i],
                color: color_[1]
        }
    }
    for (let v = 0, i = 9; v < 9, i < 18; v++,i++) {
        cards[i] = {
            cardSuits: cardSuits[1],
            value: value_[v],
            color: color_[0]
        }
    }
    for (let v = 0, i = 18; v < 9, i < 27; v++, i++) {
        cards[i] = {
            cardSuits: cardSuits[2],
            value: value_[v],
            color: color_[0]
        }
    }
    for (let v = 0, i = 27; v < 9, i < 36; v++, i++) {
        cards[i] = {
            cardSuits: cardSuits[3],
            value: value_[v],
            color: color_[1]
        }
    }

return cards
}

let  cardsPack = createColoda(cardSuitArr,valueArr,colorArr);
console.log(cardsPack);

// - знайти піковий туз

// let filterFindJoker = Object.values(cardsPack).filter(value => value.value === 'joker' && value.cardSuits === 'spade');
// console.log(filterFindJoker);

// - всі шістки

// console.log( Object.values(cardsPack).filter(value => value.value === '6'))

// - всі червоні карти

// console.log(Object.values(cardsPack).filter(value => value.color === 'red'));

// - всі буби

// console.log(Object.values(cardsPack).filter(value => value.cardSuits === 'diamond'))

// - всі трефи від 9 та більше



// яким ще чином можна було зробити це завдання?

// let moreThanNine = Object.values(cardsPack).filter(value => value.cardSuits === 'clubs').splice(3);
// console.log(moreThanNine);