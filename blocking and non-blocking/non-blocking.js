var fs = require("fs");

fs.readFile('text.txt', function(err, data){//asynchronos function
    if (err) {
        console.log(err);
    }
    setTimeout(()=>{
        console.log("Display after two seconds");
    }, 2000);
});
console.log("Start Here");