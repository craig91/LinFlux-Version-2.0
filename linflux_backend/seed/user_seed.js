const Sequelize = require('../models').Sequelize;
const User = require('../models').User;

User.sync({force: true})
.then(()=> User.bulkCreate([
{
  userName: 'XxBkLyNsHoTsxX',
  userPhoto: 'https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAbDAAAAJDhkZWM5MTA2LWNjZTMtNDNmMy04OWM0LTU2MzEyMDY1NTg4Yw.jpg',
  password:'123',
  firstName: 'Craig',
  lastName: 'Dejean',
  location: 'Brooklyn',
  company: 'Google'
},

{
  userName: 'foxyKyot0',
  userPhoto: 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/12898404_1180328825335101_7579305621754036883_o.jpg?oh=6dfa632cb5d4e87f7aa0ade86f6e6433&oe=59BF09EB',
  password:'456',
  firstName: 'Ayuka',
  lastName: 'Niga',
  location: 'Kyoto',
  company: 'Japas' 
},

{
  userName: 'NeuroManc3er',
  userPhoto: 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1915715_357593280227_1527802_n.jpg?oh=6dfd6dd41c6f5a005803ae50eb1da85a&oe=59C020DA',
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
