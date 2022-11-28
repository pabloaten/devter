import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const futaba = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
             Futaba <b>SAKURA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Futaba Sakura)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Fecha: 31 de agosto.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>-Alcanzá el nivel 4 de Amabilidad.</td><td>1. Anda, qué buena idea.<br/>2. Juntos lo conseguiremos.&nbsp;</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. Estaba a punto de ir a buscarte.<br/>2. Me alegro de volver a verte.</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. Lo haremos juntos.<br/>3. A mí me parece adorable.&nbsp;</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. No diría que somos amigos.<br/>2. Creo que tienes razón.<br/>3. Él es el protagonista.</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. Debió sorprenderte mucho.<br/>1. Entiendo.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. Qué padres tan horribles.<br/>2. Les mostraremos la verdad.</td></tr><tr><td>8</td><td>-Completá “Daughter’s Just a Meal Ticket” en Mementos.</td><td>1. Me alegra escuchar eso.<br/>2. Has trabajado muy duro también.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. Has madurado mucho.<br/>2. ¿Todo bien, Futaba?<br/>3. Ni hablar.<br/>4. Elegí entre amistad (Porque somos compañeros) o Romance (Porque te quiero).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default futaba