// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (string, n) => {
    return string.split('', n); // на цьому я погорів
    // це завдання також -
    // не догадуюсь як
};

console.log(cutString('наслаждение', 3));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


// let delete_characters = (str,length_) => str.slice(0, length_);
// console.log(delete_characters('Каждый охотник желает знать', 7))


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'


// let str = "HTML JavaScript PHP";
//
// let insert_dash = str => str.replaceAll(' ', '-').toUpperCase();
// console.log(insert_dash(str));


//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


// let toUppFirstLetter = txt => {
//     let firstLetter = txt[0].toUpperCase();
//     return txt.replace(txt[0], firstLetter);
// };
// console.log(toUppFirstLetter('wtf'));


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
//


// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
//
//
// let normalName = txt => { //яким чином можна визначити кількість знаків(. - _),
// щоб нормалізувати пробіли між ім'ям і прізвищем?
//     return txt.replaceAll('.', ' ').trim()
//         .replaceAll('-',' ').trim()
//         .replaceAll('_',' ').trim()
//         .replaceAll('"',' ').trim();
// }
//
// console.log(normalName(n1));
// console.log(normalName(n2));
// console.log(normalName(n3));
// console.log(normalName('  . Jake-_-Holl       '));


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// let randomF = () => {
//     let arr = [];
//     for (let i = 0; i < 20; i++) {
//        arr.push(Math.round(Math.random()*100));
//     }
//     return arr
// }
//
// console.log(randomF());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort


// let arr = randomF();
// console.log('Від меншого до більшого : ' + arr.sort((a,b)=> a - b));
// console.log('Від більшого до меншого : ' + arr.sort((a,b)=> b - a));


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)


// let arr = randomF();
// console.log(arr.filter(value => value % 2 ===0 && value !== 0));


//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.


// взагалі не зрозумів як то зробити......
let capitalize = str => {

}


// - Створити функцію-валідатор для адрес електронної пошти.
// Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// з цим завданням також -


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
// - є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// console.log(coursesArray.sort((a,b) => {
//     return b.modules.length - a.modules.length
// }));


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// let symb = "а", str = "Астрономия это наука о небесных объектах";
//
// let count = (str,stringsearch) => {
//     let a = 0;
//     let arr = str.toLowerCase().split('');
//     for (let i = 0; i < arr.length; i++) {
//        if(arr[i] === stringsearch){
//            a++;
//        }
//     }
//     return a;
// }
//
// console.log(count(str,symb));


//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'


// let str = "Сила тяжести приложена к центру масс тела";
//
// let cutstring = (str, n) => {
//     let arr = str.split(' ');
//     return arr.splice(0,n);
// }
// console.log(cutstring(str,5));


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        name: 'Dear deer',
        pages: 175,
        authors: ['Jake Paul', 'Alice Vong'],
        genre: ['drama', 'biography']
    },
    {
        name: 'Pasta monster',
        pages: 666,
        authors: ['That guy who know the God'],
        genre: ['religion', 'fantasy']
    },
    {
        name: 'Warm shades of the sun on the bitch',
        pages: 369,
        authors: ['Tedd Bandy,', 'Edward Kemper', 'Richard Chase'],
        genre: ['horror', 'thriller', 'psychology']
    },
    {
        name: 'Kitties`s dream',
        pages: 246,
        authors: ['Pushok'],
        genre: ['autobiography']
    }
];


// Яким ще чином, наступні 3 завдання, можна було зробити?? Окрім мктоду sort який я використав


// -знайти наібльшу книжку.


// let theMorePages = books.sort((a,b) => b.pages - a.pages);
// console.log(theMorePages[0]);


// - знайти книжку/ки з найбільшою кількістю жанрів


// let moreGenres = books.sort((a,b) => b.genre.length - a.genre.length);
// console.log(moreGenres[0])


// - знайти книжку/ки з найдовшою назвою

// let theLongestName = books.sort((a,b)=>{b.name.length - a.name.length});
// console.log(theMorePages[0]);






// - знайти книжку/ки які писали 2 автори


// console.log(books.filter(value => value.authors.length === 2 ));


// - знайти книжку/ки які писав 1 автор

// console.log(books.filter(value => value.authors.length === 1));


// - вісортувати книжки по кількості сторінок по зростанню

console.log(books.sort((a, b) => a.pages - b.pages));