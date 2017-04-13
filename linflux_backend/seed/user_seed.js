const Sequelize = require('../models').Sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(()=> User.bulkCreate([
{
  userName: 'XxBkLyN sHoTsxX',
  password:'123',
  firstName: 'Craig',
  lastName: 'Dejean',
  location: 'Brooklyn',
  company: 'Spotify'
},

{
  userName: 'foxyKyot0',
  password:'456',
  firstName: 'Ayuka',
  lastName: 'Niga',
  location: 'Kyoto',
  company: 'Japas'
},

{
  userName: 'NeuroManc3er',
  password:'789',
  firstName: 'Kamil',
  lastName: 'Skorupa',
  location: 'Poland',
  company: 'Brooklyn College'
},

{
  userName: 'Kayod3',
  password:'1011',
  firstName: 'Chris',
  lastName: 'Samuel',
  location: 'Brooklyn',
  company: 'Jet Blue'
},

{
  userName: 'BigNat',
  password:'1122',
  firstName: 'Nathaniel',
  lastName: 'Brown',
  location: 'Bronx',
  company: 'Construction'
},

{
  userName: 'SirLancelot',
  password:'1234',
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

],{individualHooks: true}))

.catch((err) => console.log(err));
