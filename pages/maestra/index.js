import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const maestra = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
             Sadayo <b>KAGAKAMI</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Sadayo Kawakami)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Asistí al evento del 24 de mayo.<br/>-Hablá con Kawakami enfrente del Faculty Lounge del instituto. Alcanzá el nivel 3 de valor.<br/>-Utilizá el teléfono amarillo de Leblanc durante la noche.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Sí.<br/>2. ¡De eso nada!</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. Sí.<br/>3. Solicitaré más tus servicios.</td></tr><tr><td>4</td><td>&nbsp;</td><td>2. Menuda grosería.<br/>3. Tienes que quererte a ti misma.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. Es divertido.<br/>2. Es horrible…</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. ¿Quieres descansar un poco?<br/>2. Deberías irte a casa.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. No les pagues.<br/>2. Piénsatelo mejor.</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. ¿Es eso lo que quieres?<br/>2. Si ya lo tienes claro…</td></tr><tr><td>9</td><td>-Completá la misión “A Teacher Maid to Suffer” en Mementos.</td><td>1. Es absurdo.<br/>3. Elegí entre amistad (La verdad es que no) o Romance (Quiero seguir viéndote).<br/>4. Elegí entre amistad (Lo entiendo) o Romance (Hablo en serio).<br/>5. Elegí entre amistad (Soy tu amo y tú, mi sirvienta) o Romance (Soy un hombre y tú, una mujer).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default maestra