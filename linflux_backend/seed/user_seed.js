const Sequelize = require('../models').Sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(()=> User.bulkCreate([
{
  firstName: 'Craig',
  lastName: 'Dejean', 
},

{
  firstName: 'Ayuka',
  lastName: 'Niga',  
},

{
  firstName: 'Kamil',
  lastName: 'Skorupa',
},

{
  firstName: 'Chris',
  lastName: 'Samuel',
},

{
  firstName: 'Nathaniel',
  lastName: 'Brown',
},

{
  firstName: 'Lance',
  lastName: 'Jones',
}

// firstName: 'Lance',
//   lastName: 'Jones',
//   location: 'Bronx',
//   company: 'New York Department of Labor',
//   contact: '',
//   website:'',
//   linkedIn: '',
//   facebook:'',
//   twitter:'',
//   github: ''

]))

.catch((err) => console.log(err));
