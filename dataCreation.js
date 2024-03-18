const { generateKey } = require('crypto');
const fs = require('fs');
const path = require('path');
const process = require('process');
const rootDirectory = path.join(__dirname);


function checkJSONFile(fileName,data){
  if (!fs.existsSync(fileName)){
    console.log(`${fileName} does not exists. Creating file with default data`);
    fs.writeFile(path, data, (err) => {
      if (err) {
        console.error("Error writing file", err);
      } else {
        console.log(fileName, " has been created");
      }
    });
  } else {
    console.log(`${fileName}, already exists`);
  }
}

function changeDirectory(dir){
  process.chdir(dir);
  console.log("Current directory: ", process.cwd());
}


const resume = {
  id: generateKey(),
  data: {}
}
const user = {
  id: generateKey(),
  username: '',
  password: ''
}

function checkResumeJSONFile() {
  checkJSONFile('resumes.json', defaultData);
}

function checkUsersJSONFile(){
  checkJSONFile('users.json', defaultData);
}

try {
  if (fs.existsSync(rootDirectory+'/data')){
    changeDirectory('data');
    checkResumeJSONFile();
    checkUsersJSONFile();
  } else {
    fs.mkdirSync(rootDirectory+'/data');
    console.log(`${rootDirectory}/data has been created`);

  }
} catch(error) {
  console.error(error);
}
