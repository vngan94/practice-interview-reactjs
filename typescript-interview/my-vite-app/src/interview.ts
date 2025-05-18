

const fruits: (string | number)[] = ["orange", "apple"];

console.log("fruits", fruits);


interface User {
    id: number,
    name: string,
    age: number,
}

const member: Readonly<User> = {
    name: "ngan",
    age: 20,
    id: 0
}

const updateUser = (user: User, field: Partial<User>) => {
    return {...user, ...field};
}

const student = {
    age: 20,
}
console.log(updateUser(member, {age: 25}));
console.log(student);

function greeting(person: string): string;

function greeting(person: string[]): string[];

function greeting(person: unknown): unknown {
    if(typeof person == "string") {
        return "hello " + person;
    } 
    if(Array.isArray(person)) {
        return person.map((name) => "hello " + name);
    }
    throw new Error("Unable to greet")
    
}
console.log(greeting(["ngan", "linh"]));


interface itemToDo{
     title: string,
     description: string,
}

type itemReadOnly = Readonly<itemToDo>;
type ReadOnlyV2<T> = {
    readonly [P in keyof T]: T[P]
}
const firstItem: itemReadOnly = {
    title: "do the chore",
    description: "plz do it quickly"
}
