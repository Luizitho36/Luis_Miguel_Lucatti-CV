import "./footer.css";
import LinkedIn from '../../img/Footer/linkedin.png';
import GitHub from '../../img/Footer/github.png';
import MortalKombat from '../../img/Footer/mortal-kombat.png';

function Footer() {
  return (
    <div className='divPrincipalFooter'>
      <hr className="hr"></hr>
      <section className="redes-sociales">
				<h1>Redes Principales:</h1>
				
        <a href="https://www.linkedin.com/in/luis-miguel-lucatti-b2b677104/" target='_blank'>
        <img src={LinkedIn} className="icons"/>
        </a>

        <a href="https://mortal-kombat-page.vercel.app/" target='_blank'>
          <img src={MortalKombat} className="icons"/>
        </a>
				
        <a href="https://github.com/Luizitho36" target='_blank'>
          <img src={GitHub} className="icons"/>
        </a>

			</section>
    </div>
  )
}

export default Footer;