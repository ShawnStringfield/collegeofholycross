import http from './utils/http';

export default http('donors.json').then(donors => {
  return `
    <div class="card-container-grid">
      <span class="heading">Donor</span>
      <span class="heading">Dollars</span>
      <span class="heading">Type</span>
      ${donors.map(donor => {
          return `
            <span class="name">${donor.name}</span>
            <span>$${donor.amount}</span>
            <span>${donor.type}</span>
          `
      }).join('')}
    </div>`
});
