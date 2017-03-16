const Sequelize  = require('../models').Sequelize;
const sequelize = require('../models').sequelize;
const Blog = require('../models').Blog;


Blog.sync({force: true})
.then(()=> Blog.bulkCreate([
  {
    hero: 'https://www.kali.org/wp-content/uploads/2014/06/kali-wp-june-2014_1920x1080_B.png',
    title: 'Kali Linux',
    sDescript: 'Penetration Testing distro. For security professionals'
  },
]))

.catch((err) => console.log(err));
