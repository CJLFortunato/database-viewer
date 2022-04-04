import { v4 as uuidv4 } from 'uuid';

export interface Person {
    id: string;
    firstname: string;
    lastname: string;
    gender: string;
    age: number;
    major: string;
    occupation: string;
    location: string;
}

export const DATA: Person[] = [
    {
        id: "1",
        firstname: 'Lotte',
        lastname: 'Ziegler',
        gender: 'Female',
        age: 18,
        major: 'Politic Sciences',
        occupation: 'Student',
        location: 'Rhemes'
    },
    {
        id: "2",
        firstname: 'Charles',
        lastname: 'Gardner',
        gender: 'Male',
        age: 33,
        major: 'Business, Law',
        occupation: 'CEO',
        location: 'Hellas Basin'
    },
    {
        id: "3",
        firstname: 'Chalun',
        lastname: 'Raiven',
        gender: 'Female',
        age: 28,
        major: 'None',
        occupation: 'Police Officer',
        location: 'Alliance City'
    },
    {
        id: "4",
        firstname: 'Charlotte',
        lastname: 'Leclerc',
        gender: 'Female',
        age: 17,
        major: 'None',
        occupation: 'Student',
        location: 'Monolith City'
    },
    {
        id: "5",
        firstname: 'Rowan',
        lastname: 'Grim',
        gender: 'Male',
        age: 25,
        major: 'None',
        occupation: 'Servant',
        location: 'Hillford'
    },
    {
        id: "6",
        firstname: 'Artheon',
        lastname: 'Corbois',
        gender: 'Male',
        age: 36,
        major: 'None',
        occupation: 'Paladin',
        location: 'Avalon'
    },
    {
        id: "7",
        firstname: 'Zorah',
        lastname: 'Maxwell',
        gender: 'Female',
        age: 21,
        major: 'Accounting',
        occupation: 'Student',
        location: 'Rhemes'
    },
    {
        id: "8",
        firstname: 'Maja',
        lastname: 'Pedersen',
        gender: 'Female',
        age: 18,
        major: 'Veterinary Studies',
        occupation: 'Student',
        location: 'Rhemes'
    },
    {
        id: "9",
        firstname: 'Guadalupe',
        lastname: 'Di Angelo',
        gender: 'Nonbinary',
        age: 19,
        major: 'None',
        occupation: 'None',
        location: 'Rhemes'
    },
    {
        id: "10",
        firstname: 'Thisbe',
        lastname: 'D\'Aubigny',
        gender: 'Female',
        age: 24,
        major: 'None',
        occupation: 'Violinist',
        location: 'Rhemes'
    },
    {
        id: "11",
        firstname: 'Asami',
        lastname: 'Yamamoto',
        gender: 'Female',
        age: 18,
        major: 'Business',
        occupation: 'Student',
        location: 'Rhemes'
    },
    {
        id: "12",
        firstname: 'Ekaterina',
        lastname: 'Petrovna',
        gender: 'Female',
        age: 25,
        major: 'None',
        occupation: 'None',
        location: 'Rhemes'
    },
    {
        id: "13",
        firstname: 'Charis',
        lastname: 'Alexiou',
        gender: 'Female',
        age: 23,
        major: 'None',
        occupation: 'Fogwatcher',
        location: 'Rhemes'
    },
    {
        id: "14",
        firstname: 'Elizabeth',
        lastname: 'Floyd',
        gender: 'Female',
        age: 17,
        major: 'None',
        occupation: 'Student',
        location: 'Monolith City'
    },
    {
        id: "15",
        firstname: 'Nyla',
        lastname: 'Abeba',
        gender: 'Female',
        age: 17,
        major: 'None',
        occupation: 'Student',
        location: 'Monolith City'
    },
    {
        id: "16",
        firstname: 'Lawrence',
        lastname: 'Flint',
        gender: 'Male',
        age: 19,
        major: 'None',
        occupation: 'Courrier',
        location: 'Monolith City'
    },
    {
        id: "17",
        firstname: 'Pallas',
        lastname: 'Ryder',
        gender: 'Nonbinary',
        age: 21,
        major: '3D Art',
        occupation: 'Student',
        location: 'Monolith City'
    },
    {
        id: "18",
        firstname: 'Penny',
        lastname: 'Valmont',
        gender: 'Female',
        age: 15,
        major: 'None',
        occupation: 'None',
        location: 'Monolith City'
    },
];


const randomizer = (arr:Person[]):Person[] => {

    const randomizedArray: Person[] = [];
    

    for (let index in arr) {
        const obj: Person = arr[index];
        obj.id = uuidv4();
        let randomIndex = Math.floor(Math.random() * arr.length);

        while(randomizedArray[randomIndex]) {
            randomIndex = Math.floor(Math.random() * arr.length);
        }
        randomizedArray[randomIndex] = arr[index];
    }
    randomizedArray.filter((item) => item !== undefined);

    return randomizedArray;
}

export const data = randomizer(DATA);

//console.log(data);