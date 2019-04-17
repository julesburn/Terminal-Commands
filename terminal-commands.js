const fs = require('fs');


module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.appendFile('newfile.txt', 'Hello world!', function (err) {
    if (err) throw err;
    console.log('New file created!');
  });

module.exports.mkdir = () => {
  console.log("Preparing to create directory /tmp/test");
  fs.mkdir('/tmp/test', function(err){
    if (err){
      return console.error(err);
    }
    console.log("Directory created successfully!");
  });
};
