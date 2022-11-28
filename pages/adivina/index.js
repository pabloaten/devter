import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const adivina = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
             Chihaya <b>MIFUNE</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Chihaya Mifune)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>&nbsp;</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Animarla.<br/>2. ¡Cambia el destino!<br/>3. Para cambiar, abre la mente.</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. Que le haga caso a su corazón.<br/>2. A lo mejor la secuestran.</td></tr><tr><td>4</td><td>&nbsp;</td><td>2. Confía en ti.&nbsp;</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. Eres una currante.</td></tr><tr><td>6</td><td>&nbsp;</td><td>4. Para mí eres solo Chihaya.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. No creo.</td></tr><tr><td>8</td><td>-Habla con Chihaya para poder comenzar la misión “Debunking the psychic”.<br/>-Completá la misión “Debunking the psychic” en Mementos.</td><td>1. Ya lo sé.<br/>3. Pues resulta que sí.</td></tr><tr><td>9</td><td>&nbsp;</td><td>2. El destino se puede cambiar.<br/>3. Elegí entre amistad (Me gusta que me lean el futuro) o Romance (Para poder estar contigo).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default adivina