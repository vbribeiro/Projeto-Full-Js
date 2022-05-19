import axios from 'axios';

import LoaderContent from '../../img/loader.gif'

import Nav from '../../components/nav';
import Footer from '../../components/footer';

let Contato = {
  render: async () => {
    let view = `
      ${Nav}
      <div class="contact-form">
        <h1>Contato</h1>
        <div id="loader"></div>
        <form id="contact">
          <input type="text" id="name" placeholder="Seu nome">
          <input type="text" id="phone" placeholder="Seu telefone">
          <input class="btn" type="submit" value="Enviar">
        </form>
      </div>
      ${Footer}
    `
    return view
  },
  after_render: async () => {
    let form = document.getElementById("contact")
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let loader = document.getElementById("loader")

      let userName = document.getElementById('name').value,
          userPhone = document.getElementById('phone').value

      loader.innerHTML = `
        <img src="${LoaderContent}" alt="loader">
      `
      axios.post('https://webhook.site/2f762b53-82cc-4772-867e-ee7626d2a644', {
        name: userName,
        phone: userPhone
      })
      .catch( e => console.error(e) )
      .finally( () => loader.innerHTML = ``)
    })
  }
};

export default Contato;