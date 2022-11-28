import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const medica = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
             Tae <b>TAKAMI</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Tae Takemi)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Visitá la clínica cerca de Leblanc después del 18 de abril.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>-Alcanzá el nivel 2 de valor.</td><td>1. Tengo problemas de corazón.<br/>2. Estoy de acuerdo.</td></tr><tr><td>3</td><td>&nbsp;</td><td>3. Necesito el medicamento.</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. La doctora Takemi te ayudará.<br/>2. Pareces feliz.</td></tr><tr><td>5</td><td>&nbsp;</td><td>3. Eso es bueno.</td></tr><tr><td>6</td><td>&nbsp;</td><td>3. Pues te vienen que ni pintado.</td></tr><tr><td>7</td><td>&nbsp;</td><td>3. Tú descansa por hoy.&nbsp;</td></tr><tr><td>8</td><td>-Alcanzá el nivel 4 de Encanto.<br/>-Comenzá la primera parte de la conversación y, luego, completá la misión “Bad Medicine” en Mementos.</td><td>Parte 1: 2. Yo soy tu aliado.<br/>Parte 2: 2. Manos a la obra, doctora.<br/>Parte 2: 3. Lo haré por tí.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. Fue duro.<br/>3. Elegí entre amistad (Era por mis exámenes) o Romance (Porque quería verte).<br/>4. Elegí entre amistad (¿Tú qué crees?) o Romance (Te quiero).<br/>5. Elegí entre amistad (No es una broma) o Romance (Me parece bien).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default medica