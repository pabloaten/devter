import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const akechi = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
            Goro <b>AKECHI</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Goro Akechi)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Fecha: 10 de junio.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Siempre pareces ocupado.</td></tr><tr><td>3</td><td>-Alcanzá el nivel 3 de Encanto.</td><td>2. Tendría que haberlo imaginado.</td></tr><tr><td>4</td><td>&nbsp;</td><td>2. Es muy de mi rollo.<br/>3. ¿Qué recomiendas?<br/>4. Me encanta el lugar.<br/>6. Siempre que puedo.</td></tr><tr><td>5</td><td>&nbsp;</td><td>2. ¿Estás acostumbrado a disparar?<br/>3. ¿Querías ser un héroe?</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. ¿Cuánto tiempo?<br/>2. Has pasado por mucho…<br/>3. No es nada.<br/>4. Lo mismo digo.<br/>6. Creo que tienes razón.</td></tr><tr><td>7</td><td>-Alcanzá el nivel 4 de Conocimiento.</td><td>1. Por eso es tan divertido.<br/>4. Me niego a perder.</td></tr><tr><td>8</td><td>&nbsp;</td><td>6. Seguro que no perdería.<br/>7. Detesto perder, ¿y tú?</td></tr><tr><td>9</td><td>&nbsp;</td><td>Automático.</td></tr><tr><td>10</td><td>&nbsp;</td><td>Automático.</td></tr></tbody></table>
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

export default akechi