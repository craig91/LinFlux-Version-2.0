const Sequelize = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(()=> User.bulkCreate([

{
  firstName: 'Craig',
  lastName: 'Dejean'
},

{
  firstName: 'Ayuka',
  lastName: 'Niga'
},

{
  firstName: 'Kamil',
  lastName: 'Skorupa'
},

{
  firstName: 'Chris',
  lastName: 'Samuel'
},

{
  firstName: 'Nathaniel',
  lastName: 'Brown'
},

{
  firstName: 'Lance',
  lastName: 'Jones'
},

]))

.catch((err) => console.log(err));