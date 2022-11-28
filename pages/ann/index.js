import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const ann = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
             Ann <b>TAKAMAKI</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Ann Takamaki)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Fecha: 15 de abril.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>-No está disponible hasta el 6 de mayo.<br/>-Conseguí el nivel 2 de amabilidad.</td><td>1. Ella es muy fuerte.<br/>2. Puede que tengas razón.</td></tr><tr><td>3</td><td>&nbsp;</td><td>5. ¿No podemos detenernos?<br/>8. ¿Te ha pasado?<br/>9. ¿La libertad suena bien?</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. Te entiendo.<br/>2. Me parto.<br/>3. Cuéntame.<br/>4. Gran idea.<br/>5. Pues suerte.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. Déjalo.<br/>2. La verdad es que es increíble…<br/>3. Ha tenido su aquel.</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. Eso parece.<br/>2. Muéstrale tu fuerza.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. Por tu belleza natural.<br/>4. ¡A por todas, leona!</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. Los tienes bien puestos.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. Elegí entre amistad (No te he oído) o Romance (Has dicho que me quieres).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default ann