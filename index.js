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

console.log(convertArrayToObject(students));

function convertArrayToObject(arr) {
    const obj = arr.map(([name, skills, scores]) => ({ name, skills, scores }));
    return obj;
}