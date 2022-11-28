import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const iwai = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
             Iwai <b>MUNEHISA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Iwai Munehisa)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Fecha: 31 de agosto.<br/>-Alcanzá el nivel 4 de valor.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>3. ¿Cómo va tu resfriado?</td></tr><tr><td>3</td><td>&nbsp;</td><td>2. Sabía que eras un mafioso.<br/>3. ¿No habíamos hecho un trato?</td></tr><tr><td>4</td><td>&nbsp;</td><td>4. ¿Y mi recompensa?</td></tr><tr><td>5</td><td>&nbsp;</td><td>2. Eres patético.<br/>3. Me quedo, pero por las armas.</td></tr><tr><td>6</td><td>&nbsp;</td><td>3. De chicas.<br/>4. Invítate a algo.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. Totalmente.<br/>2. Es un tío listo.</td></tr><tr><td>8</td><td>-Alcanzá el nivel 5 de valor.<br/>-Completá la parte 1 de la conversación para desbloquear la misión “Shady Deal in the Shadows” en Mementos.<br/>-Completá la misión “Shady Deal in the Shadows” en Mementos.</td><td>Parte 1: 1. Lo he hecho por Iwai. Parte 1: 2. Quiero ayudarte.<br/>Parte 2: 1. No lo sé.<br/>Parte 2: 2. Si me pagas bien, sí.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. ¿Seguro que sigue vivo?<br/>6. Kaoru tiene mucha voluntad.</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default iwai