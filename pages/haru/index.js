import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const haru = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
             Haru <b>OKAMURA</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Completá el tercer palacio.<br/>-Alcanzá el nivel 3 de conocimiento.<br/>-Hablá con ella en la oficina del consejo de estudiantes.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Estás muy bien informada.<br/>2. Ha sido peligroso.</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. Te estás equivocando.<br/>2. Puedes cambiar.</td></tr><tr><td>4</td><td>&nbsp;</td><td>1. No es propio de ti.<br/>3. ¿Por qué la usas?<br/>4. Es un objetivo increíble.</td></tr><tr><td>5</td><td>&nbsp;</td><td>1. Me da mal rollo.<br/>2. Yo me encargo.</td></tr><tr><td>6</td><td>-Alcanzá el nivel 5 de encanto.</td><td>1. El amor adopta muchas formas.</td></tr><tr><td>7</td><td>&nbsp;</td><td>1. Es admirable</td></tr><tr><td>8</td><td>&nbsp;</td><td>1. Así es como te engatusa.<br/>2. Absolutamente.</td></tr><tr><td>9</td><td>-Luego de iniciar el evento, durante la visita a Shinjuku, tenés que hablar dos veces con el hombre enfrente de la tienda de libros.</td><td>3. Hiciste lo que debías.<br/>4. Suelo venir mucho.<br/>5. Elegí entre amistad (Ya encontrarás a alguien) o Romance (Estudiaré contigo).<br/>6. Elegí entre amistad (Eso no es lo que quería decir) o Romance (Sí).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default haru