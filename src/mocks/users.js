import shuffle from 'lodash/shuffle';
import sample from 'lodash/sample';
import sampleSize from 'lodash/sampleSize';

const users = [
  {
    id: 1,
    name: 'Yukiko Adebayo',
    image: require('images/users/1.jpg'),
    username: '@IanWinburn',
  },
  {
    id: 2,
    name: 'Jemimah Adebayo',
    image: require('images/users/2.jpg'),
    username: '@RachelWilliams',
  },
  {
    id: 3,
    name: 'Jahdiel Adebayo',
    image: require('images/users/3.jpg'),
    username: '@ByronYoung',
  },
  {
    id: 4,
    name: 'Jake Adebayo',
    image: require('images/users/4.jpg'),
    username: '@RobertTuttle',
  },
  {
    id: 5,
    name: 'Idera Akeredolu',
    image: require('images/users/5.jpg'),
    username: '@CarolynWitkowski',
  },
  {
    id: 6,
    name: 'Tony Ajulo',
    image: require('images/users/6.jpg'),
    username: '@RamonFairley',
  },
  {
    id: 7,
    name: 'Tony Yaks',
    image: require('images/users/7.jpg'),
    username: '@SarahMiranda',
  },
  {
    id: 8,
    name: 'Tumininu Adebisi',
    image: require('images/users/8.jpg'),
    username: '@JenniferLucero',
  },
  {
    id: 9,
    name: 'Paulina Anyadike',
    image: require('images/users/9.jpg'),
    username: '@AlissaLundgren',
  },
  {
    id: 10,
    name: 'Uso Ahjara',
    image: require('images/users/10.jpg'),
    username: '@ThomasFierror',
  },
];

export const getUsers = () => shuffle(users);
export const getRandomUser = () => sample(users);
export const getNUsers = (n) => sampleSize(users, n);
export const getUserById = (id) => users.find((user) => user.id === id);
