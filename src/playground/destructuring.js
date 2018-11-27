//
// Object destructuring 
//

// console.log('destructuring');
// const person = {
//     name: 'Lucas',
//     age: 35, 
//     location: {
//         city: 'Brussels',
//         temp: 26
//     }
// };

// const { name: firstName = 'anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.log(`it's ${temperature} in ${city}.`);
// }

const book = {
     title: 'Ego is the Enemy',
     author: 'Ryan Holiday',
     publisher: {
         name: 'Penguin'
     }
};

const { publisher: { name: publisherName = 'Self-Published' } } = book;

console.log(publisherName);

//
// Array destructuring 
//

const address = ['69 avenue Victor Jacobs', 'Bruxelles', 'Braban Wallon', '1040'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}`);

const item  = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, , mediumPrice] = item ;
console.log(`A ${itemName} costs ${mediumPrice}`);