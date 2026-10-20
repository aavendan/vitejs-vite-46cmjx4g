import './style.css';
import { Cancion } from './cancion.ts';

const titulo = 'PlayList - TypeScript';
const descripcion = 'Explora y busca tus canciones favoritas';

const appDiv: HTMLElement = document.getElementById('app');

appDiv.innerHTML = `
  <header>
    <h1>🎵 ${titulo}</h1>
    <p>${descripcion}</p>
  </header>
  <main>
    <section class="buscador">
      <label for="buscar">Buscar canción</label>

      <input
        type="text"
        id="buscar"
        placeholder="Escribe una canción, artista o género..."
      />
    </section>

    <section>
      <h2>Lista de canciones</h2>

      <div id="lista-canciones"></div>
    </section>
  </main>`;

document.addEventListener('load', () => {
  let canciones: Cancion[10] = new Cancion[10]();

  canciones.push(new Cancion());

  console.log(canciones)
});
