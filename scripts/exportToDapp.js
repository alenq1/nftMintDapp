const fs = require('fs');
const path = require('path');

let files = fs.readdirSync('./contracts')

  // console.log(path.parse(files[0]).name, "FILES ZERO")

const contractName = path.parse(files[0]).name

const contractJson = require(`./deployments/${contractName}.json`)

let data = fs.readFileSync(contractJson, 'utf-8')
console.log(data, "DATA DE JSON")
let myObject = JSON.parse(data);

console.log(myObject, "DATA PARSEADA")

let newData = {
    address: deployed.address,
};

// myObject.push(newData)

let newData2 = JSON.stringify(myObject);
fs.writeFileSync(contractJson, newData2, 'utf-8',(err) => {
// Error checking
if (err) throw err;
console.log("New data added");
});

