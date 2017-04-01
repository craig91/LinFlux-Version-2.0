const Sequelize = require('../models').Sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(()=> User.bulkCreate([
{
  userName: 'XxBkLyN sHoTsxX',
  firstName: 'Craig',
  lastName: 'Dejean', 
  location: 'Brooklyn',
  company: 'Spotify'
},

{
  userName: 'foxyKyot0',
  firstName: 'Ayuka',
  lastName: 'Niga',  
  location: 'Kyoto',
  company: 'Japas'
},

{
  userName: 'NeuroManc3er',
  firstName: 'Kamil',
  lastName: 'Skorupa',
  location: 'Poland',
  company: 'Brooklyn College'
},

{
  userName: 'Kayod3',
  firstName: 'Chris',
  lastName: 'Samuel',
  location: 'Brooklyn',
  company: 'Jet Blue'
},

{
  userName: 'BigNat',
  firstName: 'Nathaniel',
  lastName: 'Brown',
  location: 'Bronx',
  company: 'Construction'
},

{
  userName: 'SirLancelot',
  firstName: 'Lance',
  lastName: 'Jones',
  location: 'Bronx',
  company: 'Government'
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
