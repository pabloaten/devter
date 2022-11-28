import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const yoshizawa = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
          KASUMI <b>YOSHIZAWA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Kasumi Yoshizawa)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Fecha: 30 de mayo.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Acabamos de empezar.<br/>2. La próxima vez será.</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. ¿Te interesa la cocina?<br/>2. ¡Qué emoción!<br/>3. ¿Todo eso es para ti?<br/>4. Es especial, sin duda.</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. ¿Quieres comprar unas?<br/>2. Qué modernas.<br/>4. Claro.<br/>6. Buena elección.<br/>8. Todo el mundo pasa por eso.<br/>9. Lo haremos juntos.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. Es una sorpresa, sí.<br/>3. Venga, yo te miro.<br/>5. Enhorabuena.<br/>6. Eso es importante.</td></tr><tr><td>6</td><td>&nbsp;</td><td>Irrelevante.</td></tr><tr><td>7</td><td>&nbsp;</td><td>3. ¿Estás bien?<br/>4. Mentira.</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. Acercarse a Sumire.</td></tr><tr><td>9</td><td>&nbsp;</td><td>3. Claro que sí.<br/>5. Adelante.<br/>7. Elegí entre amistad (Mejor seamos amigos) o Romance (Yo también te quiero).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default yoshizawa