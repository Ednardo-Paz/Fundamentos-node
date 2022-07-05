const _ = require('lodash');

const alunos = [
  {
    nome: 'Joao',
    nota: 5.5,
  },
  {
    nome: 'Sabrina',
    nota: 8.1,
  },
  {
    nome: 'Eduardo',
    nota: 7.5,
  },
];

const media = _.sumBy(alunos, 'nota') / alunos.length;
console.log(media);
