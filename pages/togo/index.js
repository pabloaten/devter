import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const togo = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
          HIFUMI <b>TOGO</b>

        </h1>
        <br/>
            <table  >
                <thead><tr><th>Nivel de confidente (Hifumi Togo)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Alcanzá el nivel 3 de Encanto.<br />-Visitá Kanda Church a partir del 25 de junio</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Qué curioso.<br />3. Pero no tienes ganas, ¿Verdad?</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. Te describe perfectamente.<br />2. ¿Lo estás pasando mal?</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. Me da lo mismo.<br />2. Me molan.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. Da miedo.<br />2. Pues deberías dejarlo.</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. ¿Tan frustrante resulta?<br />2. Sigue tu pasión.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. Quizás acabe siendo cosa de suerte.<br />2. Confío en ti.</td></tr><tr><td>8</td><td>-Alcanzá el nivel 5 de Conocimiento.<br />-Comenzá la primera parte de la conversación y completá la misión “Upstaging the Stage Mother” en Mementos.</td><td>Parte 1: 2. No es buena idea.<br />Parte 2: 1. Me alegro de que haya despertado.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. Hazlo lo mejor que puedas.<br />2. Una decisión digna de una reina.<br />3. Elegí entre amistad (Quiero ser más fuerte) o Romance (Quiero quedarme a tu lado).<br />4. Elegí entre amistad (Seremos amigos para siempre) o Romance (Quiero tener una cita contigo).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
                </main>
                <style jsx>
                    {`
                    *{
                        margin: 0;
  line-height: 1.15;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

                    }
                      table {
    
    color:#c00;
    width:100%;
   
}
 table th, table td {
    padding: .25em .5em;
    text-align: left;
}
 table th:nth-child(2), table td:nth-child(2) {
    text-align: right;
}
 table td {
    background-color: #eee;
}
 table th {
    background-color: #009;
    color: #fff;
}
 .zigzag {
    border-collapse: separate;
    border-spacing: .25em 1em;
}
 .zigzag tbody tr:nth-child(odd) {
    transform: rotate(2deg);
}
 .zigzag thead tr, .zigzag tbody tr:nth-child(even) {
    transform: rotate(-2deg);
}
 `}
                </style>
                </div>
                
    
    )
}

export default togo