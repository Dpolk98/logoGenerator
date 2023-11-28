const inquirer = require('inquirer');
inquirer
  .prompt([{
    name: "titleInput",
    type: "input",
    message: "What is the 3 letter title you want displayed in your logo?",
    validate: prompt => {
      if (prompt.length <= 3) {
          return true
      } else {
          console.log('\nEnter a title to continue')
          return false;
      }
  }
    },
  {
    name: "titleColor",
    type: "list",
    message: "What color do you want your title to be?",
    choices: ['red', 'blue', 'green','yellow','purple','orange']
  },])
  .then((answers) => {
    if (answers.titleColor === 'red') {
      let logoColor = red
    } else if (answers.titleColor === 'blue') {
      let logoColor = blue
    } else if (answers.titleColor === 'green') {
      let logoColor = green
    } else if (answers.titleColor === 'yellow') {
      let logoColor = yelllow
    } else if (answers.titleColor === 'purple') {
      let logoColor = purple
    } else if (answers.titleColor === 'orange') {
      let logoColor = orange
    }
  })
  .catch((err) => {
    if (err) {
      alert('Error')
    };
  });