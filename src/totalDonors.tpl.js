import http from './utils/http';
import getTotal from './utils/getTotal';

export default http('./donors.json').then(donors => {
  const totalDonors = donors.length;
  return `${totalDonors} Donors`;
})
