import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const sojiro = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
         Sojiro <b>SAKURA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Sojiro Sakura)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Fecha: 20 de abril.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. A hacer café.<br/>2. Ese tío parecía sospechoso.<br/>3. Quiero que las mujeres me adoren.</td></tr><tr><td>3</td><td>-Prepará un café al menos una vez en Leblanc.</td><td>1. ¿Va todo bien?<br/>2. Estoy listo para trabajar.</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. Cuéntame más.<br/>2. Llamar a Sojiro por teléfono.</td></tr><tr><td>5</td><td>-No está disponible hasta el 22 de agosto.</td><td>1. ¡Creo que me he vuelto adicto!<br/>2. Así que no era normal, ¿eh?<br/>3. Al final ha valido la pena.</td></tr><tr><td>6</td><td>&nbsp;</td><td>1. Sobre gustos no hay nada escrito.<br/>2. Cállate la boca.<br/>3. Salvar a Futaba no fue un error.</td></tr><tr><td>7</td><td>-Alcanzá el nivel 5 de amabilidad.</td><td>1. Puede que tengas razón.</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. Algo con curry.<br/>2. Solo estaba protegiendo a Futaba.</td></tr><tr><td>9</td><td>-Completá “The Money-Grubbing Uncle” en Mementos.</td><td>1. Es genial.<br/>2. Tienes una hija fantástica.</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default sojiro