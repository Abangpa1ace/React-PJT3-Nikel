const bcrypt = require('bcrypt');
const defaultPwd = bcrypt.hashSync('Dyek7273!', 10);

const usersData = [
  {
    id: Date.now(2020, 3, 1).toString(),
    information: {
      email: 'zxhomeco@hanmail.net',
      password: defaultPwd,
      fullName: '김태형',
      phone: '01071211380',
    },
    checked: {
      clause: true,
      privacy: true,
      privacyMore: false,
      sendEmail: false,
      sendMessage: true,
    }
  },
]

module.exports = usersData;