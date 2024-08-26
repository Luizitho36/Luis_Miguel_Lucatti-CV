import "./footer.css";
import LinkedIn from '../../img/Footer/linkedin.png';
import GitHub from '../../img/Footer/github.png';
// import MortalKombat from '../../img/Footer/mortal-kombat.png';
import Pint_Arte from '../../img/Footer/pint-Arte.png';

function Footer() {
  return (
    <div className='divPrincipalFooter'>
      <hr className="hr"></hr>
      <section className="redes-sociales">
				<h1>Redes Principales:</h1>
				
        <a href="https://www.linkedin.com/in/luis-miguel-lucatti-b2b677104/" target='_blank'>
        <img src={LinkedIn} className="icons"/>
        </a>

        <a href="https://luizitho36.github.io/Pint.-Arte_Terapia/" target='_blank'>
          <img src={Pint_Arte} className="icons"/>
        </a>
				
        <a href="https://github.com/Luizitho36" target='_blank'>
          <img src={GitHub} className="icons"/>
        </a>

			</section>
    </div>
  )
}

export default Footer;