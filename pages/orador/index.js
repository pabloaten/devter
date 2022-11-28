import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const orador = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
              Toranosuke <b>YOSHIDA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Toranosuke Yoshida)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Visitá Station Square a partir del 6 de mayo y hablá con Toranosuke.<br/>-Trabajá un par de días en Beef Bowl Shop (podés inscribirte tomando un volante en la estación de tren).<br/>-Volvé a hablar con Toranosuke.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Quiero mejorar mi discurso. &nbsp;</td></tr><tr><td>3</td><td>&nbsp;</td><td>2. Su mensaje.</td></tr><tr><td>4</td><td>&nbsp;</td><td>4. No he podido evitarlo.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. Pasa de los medios.</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. Me dan lo mismo.<br/>2. Me negaría.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. Deberías negarte.</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. No renuncies a tus ideales.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. Hazlo lo mejor que puedas.</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default orador