/**
 * A junior developer structure student name, skills and score
 * in array of arrays which may not easy to read.
 * Destruction the following array name to name, skills array to skills,
 * scores array to scores, JavaScript score to jsScore and
 * React score to reactScore variable.
 */

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [name, skills, scores] = student;
const [, , jsScore, reactScore] = scores;

// console.log(name, skills, scores);
// console.log(jsScore, reactScore);

/**
 * Write a function called convertArrayToObject which can convert
 * the array to a structured object.
 */

 const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

// console.log(convertArrayToObject(students));

function convertArrayToObject(arr) {
    const obj = arr.map(([name, skills, scores]) => ({ name, skills, scores }));
    return obj;
}

/**
 * Copy the student object to newStudent without mutating the original object. 
 * In the new object add the following ?
 * Add Bootstrap with level 8 to the front end skill sets
 * Add Express with level 9 to the back end skill sets
 * Add SQL with level 8 to the data base skill sets
 * Add SQL without level to the data science skill sets
 */

 const student1 = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}




const newStudent = {...student1};
newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
newStudent.skills.dataScience.push('SQL');

// console.log(newStudent);

/**
 * Use the student object to solve the following questions: 
 * a. Find the length of student object keys 
 * b. Find the length of the student object values 
 * c. Find the length of skills object keys 
 * d. check if the student object has graphicDesign property 
 * e. Iterate the keys of the student object
 */

// console.log(Object.keys(newStudent).length);
// console.log(Object.keys(newStudent).length);
// console.log(Object.values(newStudent.skills).length);
// console.log(!!newStudent.graphicDesign);
// Object.keys(newStudent).forEach(console.log);



/**
 * Questions:a, b and c are based on the following two arrays:users and products
 */

 const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];

/**
 * a. Imagine you are getting the above users collection from a MongoDB database.
 * a. Create a function called ***signUp*** which allows user to add to the collection. 
 * If user exists, inform the user that he has already an account.
 * b. Create a function called ***signIn*** which allows user to sign in to the application
 */

signUp(users, {
    _id: 'ghdercfc',
    username: 'Nora',
    email: 'nora@thomas.com',
    password: '123333',
    createdAt:'17/05/2019 12:00 AM',
    isLoggedIn: true
});

signIn(users, 'Martha', '123222');

function signUp(db, user) {
    const existingUser = db.some(({ username }) => username === user.username);
    if (existingUser) throw "user already exists";
    db.push(user);
}

function signIn(db, username, password) {
    for (let i = 0; i < db.length; i++){
        if (db[i].username === username && db[i].password === password) {
            db[i].isLoggedIn = true;
            console.log('logged in');
            return true;
        };
    }
    return false;
}