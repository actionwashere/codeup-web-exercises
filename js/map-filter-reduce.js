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

let threeLangUsers = users.filter((user) => user.languages.length >= 3);

let usersEmails = users.map((user) => user.email);

let userNames = users.map((user) => user.name);

let userExperience = users.map((user) => user.yearsOfExperience);
let totalYears = userExperience.reduce((preValue, currentValue) => {
    return preValue += currentValue;
}, 0);

let longestEmail = usersEmails.reduce((email, currentEmail) => {
    return currentEmail.length > email.length ? currentEmail : email;
},'');

let userNameStr = userNames.reduce((str, currentName) => {
    return (str += `${currentName}`);
},'');

const uniqueLanguages = users.reduce((acc, user) => {
    return acc.concat(user.languages.filter(language => !acc.includes(language)));
}, []);
console.log(uniqueLanguages);


console.log(threeLangUsers);
console.log(usersEmails);
console.log(totalYears);
console.log(longestEmail);
console.log(userNames);
console.log(userNameStr);
console.log(uniqueLanguages);