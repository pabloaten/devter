import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const gemelas = () => {
    return (
        <div className={styles.container}>
              <Link href="/" ><button className={styles.button}>Volver</button></Link>
              <main className={styles.main}>
              <h1 className={styles.title}>
             Caroline y <b>JUSTINE</b>

        </h1>
        <br/>
       <table class="has-fixed-layout"><thead><tr><th>Nivel de confidente (Caroline y Justine)</th><th>Petición</th><th>Instrucciones</th></tr></thead><tbody><tr><td>1</td><td>-Jack Frost (Mago) con Mabufu.</td><td>-Fusioná a Berith (Hierofante) con Apsaras (Emperatriz).<br/>-Subí al nivel 12, donde Jack Frost aprende Mabufu.</td></tr><tr><td>2</td><td>-Shiissa con Frei.</td><td>-Fusioná a Jack Frost (Mago) con Makami (Templanza).</td></tr><tr><td>3</td><td>-Matador con Magaru.</td><td>-Fusioná a Nekomata (Mago) con Obariyon (Loco).</td></tr><tr><td>4</td><td>-Flauros con Tarukaja.</td><td>-Conseguí un Andras (Diablo) y subilo hasta el nivel 11 para que obtenga Tarukaja.<br/>-Realizá tu primera fusión avanzada: Berith (Hierofante), Andras (Diablo) y Eligor (Emperador).</td></tr><tr><td>5</td><td>-Ame-no-Uzume con Dodge Psy.</td><td>-Conseguí un Kin-ki (Carro) y subí a nivel 27 para obtener Dodge Psy.<br/>-Fusioná Kin-Ki (Carro) con Sui-ki (Luna).</td></tr><tr><td>6</td><td>-Neko Shogun con Dekaja.</td><td>-Subí a nivel 28 a un Anzu (Hierofante) para obtener Dekaja.<br/>-Realizá una fusión avanzada con Anzu (Hierofante), Kodama (Estrella) y Sudama (Ermitaño).</td></tr><tr><td>7</td><td>-Lachesis con Tetraja.</td><td>-Fusioná a Sandman (Mago) con Lamia (Emperatriz) para conseguir un Principality (Justicia) con Tetraja.<br/>-Fusioná a Principality (Justicia) con Yaksini (Amantes) para conseguir un Ame-no-Uzume (Amantes) con Tetraja.<br/>-Fusioná a Ame-no-Uzume (Amantes) con Isis (Emperatriz) para conseguir un Lachesis (Fortuna) con Tetraja.</td></tr><tr><td>8</td><td>-Hecatoncheires con Masukunda</td><td>-Fusioná a Clotho (Fortuna) con Red Rider (Torre) o Belphegor (Torre).</td></tr><tr><td>9</td><td>-Bugs con Samarecarm</td><td>-Subí a Hariti (Emperatriz) al nivel 41 para que aprenda Samarecarm.<br/>-Realizá una fusión avanzada entre Hariti (Emperatriz), Pixie (Amantes) y Pisaca (Muerte).</td></tr><tr><td>10</td><td>-Seth con High Counter</td><td>-Completá la misión “The Killer Laughs in the Garbage Can” (disponible el 14 de octubre) en Mementos. Obtendrás la carta de habilidad de High Counter.<br/>-Fusioná Hechatoncheir (Ahorcado) con Kushinada-Hime (Amantes) para obtener Horus (Sol).<br/>-Realizá una fusión avanzada entre Horus (Sol), Isis (Emperatriz), Thoth (Emperador) y Anubis (Juicio) para obtener a Seth.<br/>-Utilizá la carta de habilidad de High Counter en Seth.</td></tr></tbody></table>
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

export default gemelas