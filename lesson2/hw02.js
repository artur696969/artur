let matrix = [1,2,3,4,5,6,7,8,9,10]
console.log(matrix)

let title = "harry poter"
let pagecount = '333'
let genre = 'fantastic'
console.log(title)
console.log(pagecount)
console.log(genre)

let users = [ {title : 'harry poter',
    page : 333,
    genre : 'fantastic',
    author : 'Joanne Rowling'

}
]
users.author = [{
    name : 'joanne', age : 57
        }]
console.log(users)

let people = [ {name: 'artur', username: 'avokado', password: "ara33",},
    {name: 'artur', username: 'avokado', password: "ara333",},
    {name: 'artur', username: 'avokado', password: "ara3333",},
    {name: 'artur', username: 'avokado', password: "ara33333",},
    {name: 'artur', username: 'avokado', password: "ara333333",},
    {name: 'artur', username: 'avokado', password: "ara3",},
    {name: 'artur', username: 'avokado', password: "ara3333333",},
    {name: 'artur', username: 'avokado', password: "ara33333333",},
    {name: 'artur', username: 'avokado', password: "ara333333333",},
    {name: 'artur', username: 'avokado', password: "ara33333333333",}
]
console.log(people[0].password)
console.log(people[1].password)
console.log(people[2].password)
console.log(people[3].password)
console.log(people[4].password)
console.log(people[5].password)
console.log(people[6].password)
console.log(people[7].password)
console.log(people[8].password)
console.log(people[9].password)

let x = 1;
if (x !== 0){console.log('true')}else {console.log(false)}
let time = 60;
if (time >=0 && time < 60){console.log('first')}
else if (time >= 15 && time <30){console.log('second')}
else if (time >= 30 && time <45){console.log('third')}
else if (time >= 45 && time <60){console.log('fourth')}
else{ console.error ('uncorect')}

let dayofweek = 7;
switch (dayofweek){

    case 1:console.log('monday')
        break;
    case 2:console.log('tuesday')
        break;
    case 3:console.log('wednesday')
        break;
    case 4:console.log('thursday')
        break;
    case 5:console.log('friday')
        break;
    case 6:console.log('saturday')
        break;
    case 7:console.log('sunday')
        break;
    default:console.error('ERROR')
}
let number1 =3
let number2 = 33
if (number1 < number2){console.log('друге більше')}
else if (number1 > number2){console.log('перше більше')}
else {console.log('рівні числа')}

let x1 = '0';
if (x1 === '' || x1 === null || x1 === undefined || x1 ===0 ){x1 = "default"}
console.log(x1)

