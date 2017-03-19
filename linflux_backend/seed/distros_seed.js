const Sequelize = require('../models').Sequelize;

const Distros = require('../models').Distros

Distros.sync({force: true})
.then(() => Distros.bulkCreate([
  {
    dImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Former_UbuntuCoF.svg/2000px-Former_UbuntuCoF.svg.png',
    description: 'Ubuntu'
  },
  {
    dImage:'http://cathbard.com/images/mint/mint-logo.svg',
    description: 'Linux Mint'
  },
  {
    dImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Archlinux-icon-crystal-64.svg/2000px-Archlinux-icon-crystal-64.svg.png',
    description: 'Arch Linux'
  },
  {
    dImage:'http://domenicominicozzi.it/wp-content/uploads/2015/09/debian.png',
    description: 'Debian'
  },
  {
    dImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Fedora-logo.svg/1000px-Fedora-logo.svg.png',
    description: 'Fedora'
  },
  {
    dImage:'http://www.unixstickers.com/image/cache/data/stickers/opensuse/Opensuse-logo-wog.sh-600x600.png',
    description: 'SUSE Linux'
  },
  {
    dImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Ubuntustudio_v3_logo_only.svg/2000px-Ubuntustudio_v3_logo_only.svg.png',
    description: 'Ubuntu Studio'
  },

]))

.catch((err) => console.log(err));
