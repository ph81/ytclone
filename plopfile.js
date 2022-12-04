module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/components/{{name}}',
        base: 'plop_templates/component/',
        templateFiles: 'plop_templates/component/*.hbs',
      },
    ],
  });
  plop.setGenerator('page', {
    description: 'Create a page',
    // User input prompts provided as arguments to the template
    prompts: [
      {
        // Raw text input
        type: 'input',
        // Variable name for this input
        name: 'name',
        // Prompt to display on command line
        message: 'What is your page name?',
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'src/pages/{{name}}',
        base: 'plop_templates/page/',
        templateFiles: 'plop_templates/page/*.hbs',
      },
    ],
  });
};
