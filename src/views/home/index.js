import Nav from '../../components/nav';
import Footer from '../../components/footer';

import marcas from '../../img/marcas.jpg';

let Home = {
  render: async () => {
    let view = `
      ${Nav}
      <div class="text-home">
        <h1>Olá!</h1>
        <p>Este é o projeto realizado em Full Js, desenvolvido pela Gama Academy - ICarros!</p>

        <img src="${marcas}" alt="Marcas de carro" class="img-marcas">
      </div>
      ${Footer}
    `
    return view
  },
  after_render: async () => {}
};

export default Home;