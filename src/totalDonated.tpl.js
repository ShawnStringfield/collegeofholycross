import http from './utils/http';

export default http('./donors.json').then(donors => {
  const donations = donors.map(donor => donor.amount);
  const total = donations.reduce((iterator, currentVal) => iterator + currentVal);

  return `$${total}`;
})
