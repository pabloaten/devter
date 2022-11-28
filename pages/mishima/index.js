import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const mishima = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
              Yuuki <b>MISHIMA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Yuuki Mishima)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Fecha: 6 de mayo.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>-Fecha: 8 de mayo.</td><td>Irrelevante.</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. ¡Buena idea!<br/>2. ¿Que somos parte de los… fans?<br/>3. No es culpa tuya.</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. ¿Qué me dices de un buen filete?<br/>2. Eres un genio.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. ¿Es para mí?<br/>2. Buena idea.</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. Dímelo ya.<br/>2. Si no es más que un rumor.<br/>4. Es cierto. Buen trabajo.</td></tr><tr><td>7</td><td>&nbsp;</td><td>Parte 1: 1. Se puede confiar en ti.<br/>Parte 1: 2. Me parece excesivo.<br/>Parte 2: 3. ¿Y la Fansite?</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. De aquí no me muevo.<br/>3. Has estado muy guay.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. Has mostrado mucha valentía.</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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
    text-align: center;
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

export default mishima