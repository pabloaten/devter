import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const yusuke = () => {
    return (
        <div className={styles.container}>
           <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
          Yusuke <b>KITAGAWA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Yusuke Kitagawa)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Visitá el paseo subterráneo de Shibuya después del 14 de junio.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Es enigmático.<br/>2. Lo estoy deseando.</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. No dejes que te afecte.<br/>3. No es propio de ti.</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. ¿Por qué estamos en una barca?<br/>2. El amor tiene muchas formas.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. ¿Quieres que me desnude?<br/>2. Estoy seguro de que lo harás.</td></tr><tr><td>6</td><td>-Alcanzá el nivel 4 de habilidad.</td><td>1. Se siente nostálgico.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. ¿Qué quieres decir?<br/>2. La verdad está dentro de ti.</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. Tiene que ser Ann.<br/>2. Sí que has madurado, Yusuke.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. El amor por su hijo.<br/>2. Sí que has cambiado, Yusuke.</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default yusuke