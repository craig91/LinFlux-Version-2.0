const Sequelize = require('../models').Sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(()=> User.bulkCreate([
{
  userName: 'XxBkLyN sHoTsxX',
  firstName: 'Craig',
  lastName: 'Dejean', 
  location: 'Brooklyn'
},

{
  userName: 'foxyKyot0',
  firstName: 'Ayuka',
  lastName: 'Niga',  
  location: 'Kyoto'
},

{
  userName: 'NeuroManc3er',
  firstName: 'Kamil',
  lastName: 'Skorupa',
  location: 'Poland'
},

{
  userName: 'Kayod3',
  firstName: 'Chris',
  lastName: 'Samuel',
  location: 'Brooklyn'
},

{
  userName: 'BigNat',
  firstName: 'Nathaniel',
  lastName: 'Brown',
  location: 'Bronx'
},

{
  userName: 'SirLancelot',
  firstName: 'Lance',
  lastName: 'Jones',
  location: 'Bronx'
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
