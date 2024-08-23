import './misDatos.css'

function MisDatos() {
  return (
    <div className="divPrincipalMisDatos">
    <h3 className='Título'>MIS DATOS</h3>
    <br></br>
    <p className='párraf'>{`const nombre = "Luis Miguel, LUCATTI";`}</p>
    
    <p className='párraf'>{`var edad = 35;`}</p>
    
    <p className='párraf'>{`var direccion = "P. Blanqui 693, Alta Gracia, Córdoba-Argentina";`}</p>
    
    <p className='párraf'>{`let tel = "+54 1 351 766-3425";`}</p>
    
    <p className='párraf'>{`let e-mail = "luizitho36@hotmail.com";`}</p>

    <p className='párraf'>{`let nivelSecundario = "Completo (2006)";`}</p>

    <p className='párraf'>{`let inglés = "Intermedio (1º y 2º año en Oxford, Alta Gracia)";`}</p>
    
    </div>
  )
}

export default MisDatos