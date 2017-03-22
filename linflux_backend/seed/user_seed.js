const Sequelize = require('../models').Sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(()=> User.bulkCreate([
{
  firstName: 'Craig',
  lastName: 'Dejean',
  location: 'Brooklyn',
  company: 'C4Q',
  contact: 'craigdejean1@gmail.com',
  website:'https://spotify-crud.herokuapp.com/?',
  linkedIn: 'https://www.linkedin.com/in/craigdejean/',
  facebook:'https://www.facebook.com/thelegendarycraig',
  twitter:'https://twitter.com/t3chcraig1',
  github: 'https://github.com/craig91'
},

{
  firstName: 'Ayuka',
  lastName: 'Niga',
  location: 'Kyoto',
  company: 'Japas 38',
  contact: '',
  website:'',
  linkedIn: '',
  facebook:'',
  twitter:'',
  github: ''
},

{
  firstName: 'Kamil',
  lastName: 'Skorupa',
  location: 'Poland',
  company: 'Brooklyn College',
  contact: '',
  website:'',
  linkedIn: '',
  facebook:'',
  twitter:'',
  github: ''
},

{
  firstName: 'Chris',
  lastName: 'Samuel',
  location: 'Brooklyn',
  company: 'Jet Blue',
  contact: '',
  website:'',
  linkedIn: '',
  facebook:'',
  twitter:'',
  github: ''

},

{
  firstName: 'Nathaniel',
  lastName: 'Brown',
  location: 'Bronx',
  company: 'Construction',
  contact: '',
  website:'',
  linkedIn: '',
  facebook:'',
  twitter:'',
  github: ''
},

{
  firstName: 'Lance',
  lastName: 'Jones',
  location: 'Bronx',
  company: 'New York Department of Labor',
  contact: '',
  website:'',
  linkedIn: '',
  facebook:'',
  twitter:'',
  github: ''
},

]))

.catch((err) => console.log(err));
