type User = {
    name: string;
    age?: number;
    location: string;
};

const user: User = {
    name: "Samnang",
    age: 21,
    location: "Cambodia",
};

console.log(`Name: ${user.name}, Age: ${user.age}, Location: ${user.location}`);