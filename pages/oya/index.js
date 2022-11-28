import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const oya = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
        Ohya <b>ICHIKO</b>

        </h1>
        <br/>
        <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Ohya Ichiko)</th><th>Requisito previo</th><th>Mejores respuestas</th></tr></thead><tbody><tr><td>1</td><td>-Visitá el bar Crossroads cuando se desbloqueé Shinjuku.</td><td>Irrelevante.</td></tr><tr><td>2</td><td>&nbsp;</td><td>1. Puede que Mishima…<br/>3. Es para el artículo.</td></tr><tr><td>3</td><td>&nbsp;</td><td>1. No lo asumas tan rápido.<br/>4. ¿Fue una acusación falsa?</td></tr><tr><td>4</td><td>&nbsp;</td><td>Irrelevante.</td></tr><tr><td>5</td><td>&nbsp;</td><td>4. Es imperdonable.</td></tr><tr><td>6</td><td>&nbsp;</td><td>2. No debes caerle muy bien.<br/>3. Deberías confiar en ella.<br/>4. Eres una gran periodista.</td></tr><tr><td>7</td><td>&nbsp;</td><td>2. No dejes que te provoque.<br/>3. ¿Para qué? Eres encantadora.</td></tr><tr><td>8</td><td>-Completá la primera parte de la conversación y, luego, completá la misión “Fighting for Truth in Journalism” en Mementos.</td><td>Parte 1: 1. Pareces cansada.<br/>Parte 2: Irrelevante.</td></tr><tr><td>9</td><td>&nbsp;</td><td>2. No irás a rendirte, ¿no?<br/>3. No puedo dejarte.<br/>5. Elegí entre amistad (No me lo he tomado en serio) o Romance (Me lo he tomado en serio).<br/>6. Elegí entre amistad (Es broma) o Romance (Te quiero, Ichiko).</td></tr><tr><td>10</td><td>&nbsp;</td><td>Irrelevante.</td></tr></tbody></table>
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

export default oya