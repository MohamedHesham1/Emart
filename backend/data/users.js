import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'mohamed.hesham.2049@gmail.com',
    password: bcrypt.hashSync('01124100241h', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'Jabe@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: false,
  },
];

export default users;
