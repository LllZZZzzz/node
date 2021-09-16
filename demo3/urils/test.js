const fs = require('fs');
console.log(JSON.parse(fs.readFileSync("./type.json").toString())['.html'])