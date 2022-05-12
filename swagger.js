const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Shayla\'s Contact API',
    description: 'A list of all all my imaginary friends.',
  },
  host: 'cse341-webapi.herokuapp.com',
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);