const Sequelize  = require('../models').Sequelize;
const Article = require('../models').Article;


Article.sync({force: true})
.then(()=> Article.bulkCreate([
  {
    hero: 'https://www.kali.org/wp-content/uploads/2014/06/kali-wp-june-2014_1920x1080_B.png',
    title: 'Kali Linux',
    sDescript: 'Penetration Testing distro. For security professionals',
    UserId: 1,
    articleId: 1
  },
  {
    hero: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Archlinux-vert-dark.svg/2000px-Archlinux-vert-dark.svg.png',
    title: 'Arch Linux',
    sDescript: 'Customization at its finest! Use Arch linux',
    UserId: 1,
    articleId: 1
  },
  {
    hero: 'https://linuxpeer.org/assets/img/distro_logo/mint.png',
    title: 'Linux Mint',
    sDescript: 'Simple, Lightweight Linux Distro for beginners',
    UserId: 2,
    articleId: 1
  },
  {
    hero: 'http://i.imgur.com/9KXZaVU.png',
    title: 'XFCE Desktop Environment',
    sDescript: 'Simple, Beginner friendly',
    UserId: 3,
    articleId: 1
  },
  {
    hero: 'http://fossbytes.com/wp-content/uploads/2016/08/fedora-25-features.jpg',
    title: 'Fedora Linux',
    sDescript: 'Red Hat Linux variant',
    UserId: 3,
    articleId: 1
  },
  {
    hero: 'http://www.rkdesigns.org/wp-content/uploads/bfi_thumb/slackao-18082008-30jg9z5uolqwx2xtg3en7k.jpg',
    title: 'Slackware Linux',
    sDescript: 'Old School Linux distro',
    UserId: 4,
    articleId: 1
  },
]))

.catch((err) => console.log(err));
