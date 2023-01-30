const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let threeLangUsers = users.filter((user) => user.languages.length >= 3);

// 3. Use .map to create an array of strings where each element is a user's email address
let usersEmails = users.map((user) => user.email);

// 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.
let userExperience = users.map((user) => user.yearsOfExperience);
let totalYears = userExperience.reduce((preValue, currentValue) => {
    return preValue += currentValue;
}, 0);
let averageYears = totalYears / users.length;

// 5. Use .reduce to get the longest email from the list of users.
let longestEmail = usersEmails.reduce((email, currentEmail) => {
    return currentEmail.length > email.length ? currentEmail : email;
},'');

// 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
let userNames = users.map((user) => `${user.name}`);
let userNameStr = userNames.reduce((str, currentName) => {
    return (str += `${currentName}, `);
},'Your instructors are: ');
let finalStr = userNameStr.slice(0, -2) + `.`

// BONUS: Use .reduce to get the unique list of languages from the list of users.
const uniqueLanguages = users.reduce((acc, user) => {
    return acc.concat(user.languages.filter(language => !acc.includes(language)));
}, []);

console.log(threeLangUsers);
console.log(usersEmails);
console.log(totalYears);
console.log(averageYears);
console.log(longestEmail);
console.log(userNames);
console.log(finalStr);
console.log(uniqueLanguages);