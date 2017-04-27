const Sequelize = require('../models').Sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(()=> User.bulkCreate([
{
  userName: 'XxBkLyN sHoTsxX',
  userPhoto: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAbDAAAAJDhkZWM5MTA2LWNjZTMtNDNmMy04OWM0LTU2MzEyMDY1NTg4Yw.jpg',
  password:'123',
  firstName: 'Craig',
  lastName: 'Dejean',
  location: 'Brooklyn',
  company: 'Google'
},

{
  userName: 'foxyKyot0',
  userPhoto: '',
  password:'456',
  firstName: 'Ayuka',
  lastName: 'Niga',
  location: 'Kyoto',
  company: 'Japas'
},

{
  userName: 'NeuroManc3er',
  userPhoto: '',
  password:'789',
  firstName: 'Kamil',
  lastName: 'Skorupa',
  location: 'Poland',
  company: 'Brooklyn College'
},

{
  userName: 'Kayod3',
  userPhoto: '',
  password:'1011',
  firstName: 'Chris',
  lastName: 'Samuel',
  location: 'Brooklyn',
  company: 'Jet Blue'
},

{
  userName: 'BigNat',
  userPhoto: '',
  password:'1122',
  firstName: 'Nathaniel',
  lastName: 'Brown',
  location: 'Bronx',
  company: 'Construction'
},

{
  userName: 'SirLancelot',
  userPhoto: '',
  password:'1234',
  firstName: 'Lance',
  lastName: 'Jones',
  location: 'Bronx',
  company: 'Government'
}

],{individualHooks: true}))

.catch((err) => console.log(err));
