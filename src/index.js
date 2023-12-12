const inquirer = require('inquirer');
const img = document.getElementById('svg');
const logoShape = data.logoShape;
const titleInput = data.titleInput;
const titleColor = data.titleColor;
const shapeColor = data.shapeColor;

const questions = [{
    name: "titleInput",
    type: "input",
    message: "What is the 3 letter title you want displayed in your logo?",
    validate: prompt => {
      if (prompt.length <= 3) {
          return true
      } else {
          console.log('\nEnter a 3 letter title to continue')
          return false;
      }
  }
    },
    {
      name: "logoShape",
      type: "list",
      message: "what shape do you want your logo to be?",
      choices: ['Square', 'Circle', 'Triangle']
    },
    {
      name: "titleColor",
      type: "list",
      message: "What color do you want your title to be?",
      choices: ['red', 'blue', 'green','yellow','purple','orange']
    }, 
    {
      name:'shapeColor',
      type:'list',
      message:'What color do you want the shape to be?',
      choices: ['red', 'blue', 'green','yellow','purple','orange']
    }
  ];

  function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
    });
}

init();

function renderSVG (data) {
  img.innerHTML(data.logoShape)
};

renderSVG(data);