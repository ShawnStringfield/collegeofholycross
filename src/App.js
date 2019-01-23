import donorData from './donors.tpl';
import donationData from './totalDonated.tpl';
import './styles.scss';

const app = document.getElementById('app');
const donors = document.getElementById('donors');
const donatedTotal = document.getElementById('donated-total');
const donatedTotalFooter = document.getElementById('donated-total-footer');
const checkout = document.getElementById('checkout');

const handleStripeCheckout = StripeCheckout.configure({
  key: 'pk_test_0nUAQufqWEzRNs2PifuCbrta'
})

donorData.then(resp => donors.innerHTML = resp);
donationData.then(resp => donatedTotal.innerHTML = resp);
donationData.then(resp => donatedTotalFooter.innerHTML = resp);
checkout.addEventListener('click', handleCheckout);

function handleCheckout(e) {
  handleStripeCheckout.open({
    name: 'Interview Test',
    amount: 100
  });
  e.preventDefault();
}

window.addEventListener('popstate', function() {
  handler.close();
});
