import "../cssStyle.css";
import ViewImage from "../../img/image.jpg";

function Home() {
  return (
    <div id="homeId" className="divPrincipalPages">
      <h2 className="párrafo2">¡HOLA, MI NOMBRE ES <b className="título">LUIS MIGUEL LUCATTI</b>!</h2>
      <section className="sidebar"><img className="imageOfMe" src={ViewImage}></img></section>
      <b id="about_me" className="párrafo1">
        y busco desarrollarme en un ámbito laboral que me permita, mediante desafíos,
        aplicar los conocimientos adquiridos con la mayor eficiencia y, así mismo, poder
        superarme mediante los nuevos. Estoy dispuesto a ofrecer toda mi capacidad
        intelectual, mi creatividad e imaginación, para el máximo crecimiento profesional.
      </b>
    </div>
  );
}

export default Home;
