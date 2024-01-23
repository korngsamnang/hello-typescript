type UserInfo = {
    first: string;
    last: string;
    age: number;
};

type AccountDetails = {
    email: string;
    password: string;
};

type User = UserInfo & AccountDetails;

const me: User = {
    first: "Korng",
    last: "Samnang",
    age: 18,
    email: "test@gmail.com",
    password: "strongpassword123",
};

console.log(
    `Name: (${me.first} ${me.last}) Age: (${me.age}) Email: (${me.email}) Password: (${me.password})`
);