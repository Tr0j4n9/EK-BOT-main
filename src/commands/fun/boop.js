import Promise from 'bluebird';

function boop() {
  const number = Math.floor(Math.random() * 2) + 1;
  if (number === 1) return Promise.resolve({upload: './images/Heads.png'});
  return Promise.resolve({upload: './images/Tails.png'});
}

export default {
  boop,
  boops: coin,
};

export const help = {
  boop: {}
};
