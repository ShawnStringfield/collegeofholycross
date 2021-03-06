import http from './utils/http';
import getTotal from './utils/getTotal';

export default http('./donors.json').then(donors => {
  const donations = donors.map(donor => donor.amount);
  const total = getTotal(donations);

  return `$${total}`;
})
