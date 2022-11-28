import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const nino = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
              Shinya <b>ODA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Shinya Oda)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Intentá completar la misión “Winners don´t use cheats” en Mementos.<br/>-Seguí la misión posterior hasta que conozcas a Shinya Oda en Akihabara.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. No me compares contigo.<br/>2. Qué empleado tan desagradable.<br/>3. ¿Los admiras?<br/>4. Yo también.</td></tr><tr><td>3</td><td>&nbsp;</td><td>4. Esa es la actitud.</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. Me pareció un poco raro.<br/>2. Confió en ti.<br/>3. Necesitas otra estrategia…</td></tr><tr><td>5</td><td>&nbsp;</td><td>3. Confío en ti.<br/>4. Claro que no.</td></tr><tr><td>6</td><td>&nbsp;</td><td>5. No debes caerle muy bien.<br/>6. Deberías confiar en ella.<br/>7. Eres una gran periodista.</td></tr><tr><td>7</td><td>&nbsp;</td><td>Irrelevante.</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. ¿Eso opinas?<br/>2. Confía en ellos.</td></tr><tr><td>9</td><td>-Completá la misión “A mother’s Agression” en Mementos.</td><td>1. Me alegra oír eso.<br/>2. No, tiene sentido.<br/>3. Quiere ganar cueste lo que cueste.</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default nino