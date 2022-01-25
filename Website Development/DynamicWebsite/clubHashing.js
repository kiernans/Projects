const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 13;
let hashedUsers = [];
hashedUsers = users;
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

for (let i=0; i < users.length; i++)
{
    let salt = bcrypt.genSaltSync(nRounds);
    let passHash = bcrypt.hashSync(users[i].password, salt);
    hashedUsers[i].password = passHash;
}


let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));