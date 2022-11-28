import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const psicologo = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
          TAKUTO <b>MARUKI</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Takuto Maruki)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Fecha: 13 de mayo.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Hicimos un trato.<br/>3. Pero me parece correcto.<br/>5. Bueno, vale.</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. No me digas.<br/>2. Claro que sí.<br/>4. Ese parece necesario.</td></tr><tr><td>4</td><td>&nbsp;</td><td>2. ¿Verdad?<br/>3. ¿Eso investigas?<br/>6. Me parece guay.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. ¡Tiene buena pinta!<br/>3. ¿Sabes qué? Tienes razón.<br/>4. Si están buenas, no me quejaré.</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. ¿Otra taza?<br/>2. Claro que sí.<br/>4. Pues ríndete.</td></tr><tr><td>7</td><td>&nbsp;</td><td>Irrelevante.</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. ¿Qué quieres decir?<br/>2. ¿De verdad?<br/>3. ¡Gracias por la comida!<br/>4. Tenemos un trato.</td></tr><tr><td>9</td><td>&nbsp;</td><td>1. Es un poco triste…</td></tr><tr><td>10</td><td>&nbsp;</td><td>Automático.</td></tr></tbody></table>
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

export default psicologo