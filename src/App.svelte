<script lang="ts">
  import { onMount } from "svelte";
  import Number from "./components/Number.svelte";
  import FileDownload from "./components/FileDownload.svelte";
  import Footer from "./components/Footer.svelte";
  import { getDownloadFiles, type DownloadFile } from "./lib/StrapiData";

  let DownloadFiles: DownloadFile[] = [];

  onMount(async () => {
    DownloadFiles = await getDownloadFiles();
  });
</script>

<main>
  <div class="hero">
    <h1>ZAMMA <br /> Pflanzen</h1>
    <div class="logos">
      <img src="/BNS.png" alt="Bund Naturschutz" />
      <img src="/KRAFT.png" alt="Kraft" />
    </div>
  </div>

  <div class="stats">
    <div class="trees">
      <img src="/icons/Tree.svg" alt="tree" />
      <img src="/icons/Tree.svg" alt="tree" />
      <img src="/icons/Tree.svg" alt="tree" />
      <img src="/icons/Tree.svg" alt="tree" />
      <img src="/icons/Tree.svg" alt="tree" />
    </div>
    <h2>Ergebnisse der Pflanzaktion</h2>
    <div class="nums">
      <Number value={150} title="Bäume werden gepflanzt" />
      <Number value={150} type="m" title="Hecke werden gepflanzt" />
      <Number value={479} type="€" title="Spenden erhalten" />
      <Number value={36} title="Pflanzhelfer gefunden" />
    </div>
  </div>

  <div class="about">
    <h2>Über uns</h2>
    <p>
      Bei ZAMMA erwartet die Bürgerinnen und Bürger von Holzkirchen ein
      mehrtägiges Programm aus den Bereichen Kultur, Jugend, Gesellschaft &
      Soziales, Religion, Sport & Bewegung, Tradition & Heimat, Umwelt & Natur
      sowie Wirtschaft & Wissenschaft. Das Festival ist seit 1980 fester
      Bestandteil der Kulturarbeit des Bezirks Oberbayern und leistet einen
      wichtigen Beitrag zur Förderung des kulturellen und sozialen Miteinanders
      in den Regionen. Der Bezirk Oberbayern veranstaltet das Festival alle zwei
      Jahre mit einer ausgewählten Bewerberkommune – zuletzt mit Bad Aibling und
      Garmisch-Partenkirchen.
    </p>
    <h3>
      Sie erreichen uns unter:
      <a href="mailto:zamma-pflanzaktion@t-online.de">
        zamma-pflanzaktion@t-online.de
      </a>
    </h3>
    <div class="iban">
      <h2>BUND Naturschutz Holzkirchen</h2>
      <h3>
        Raiffeisenbank Holzkirchen-Otterfing
        <br />
        IBAN DE75 7016 9410 0000 0271 38
      </h3>
    </div>
  </div>

  <div class="downloads">
    <h2>Relevante Downloads</h2>
    <div>
      <!-- {#each DownloadFiles as file}
        <FileDownload title={file.name} url={file.url} />
      {/each} -->
      <FileDownload
        title="Spendenformular"
        url="/downloads/Spendenformular.pdf"
      />
      <FileDownload
        title="Pflanzanleitung"
        url="/downloads/Pflanzanleitung.pdf"
      />
    </div>
  </div>
  <Footer />
</main>

<style lang="scss">
  main {
    .hero {
      display: flex;
      flex-direction: column;
      place-items: center;
      margin-top: 20vh;
      margin-inline: 2rem;

      h1 {
        font-family: "Aclonica", sans-serif;
        font-size: 5rem;
        margin-top: 0.7rem;
        z-index: 1;
      }

      .logos {
        display: flex;
        justify-content: center;
        gap: 2rem;
        margin-top: 3rem;

        img {
          height: 10rem;
          width: 25rem;
          object-fit: contain;
          background-color: var(--white);
          padding: 1rem;
          border-radius: 30px;
        }
      }
    }

    .stats {
      background-color: var(--white);
      margin-top: 10rem;
      padding-bottom: 3rem;

      .trees {
        position: relative;
        top: -4rem;

        img {
          width: 4rem;
          margin-left: 10rem;

          &:nth-child(1) {
            margin-left: 0;
          }
        }
      }

      h2 {
        color: var(--green);
        font-size: 1.5rem;
        margin-top: -2rem;
        margin-bottom: 6rem;
      }

      .nums {
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        gap: 2rem;
        margin-top: 2rem;
        margin-inline: 5rem;
      }
    }

    .about {
      position: relative;
      left: 50%;
      transform: translateX(-50%);

      text-align: left;
      max-width: 1200px;
      padding-block: 5rem;
      padding-inline: 1rem;

      h2 {
        font-family: "Aladin";
        font-size: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1.3rem;
        text-align: justify;
      }

      h3 {
        padding-top: 1rem;
        font-family: "Rubik";
        font-weight: 800;

        a {
          color: inherit;
          text-decoration: none;
        }
      }

      .iban {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        width: max-content;

        background-color: var(--white);
        color: var(--turquoise);

        margin-top: 5rem;
        padding: 1.5rem;

        h2 {
          font-family: "Rubik";
          font-size: 1.5rem;
          font-weight: 800;
          margin: 0;
        }

        h3 {
          font-family: "Rubik";
          font-size: 1.3rem;
          font-weight: 400;
          padding: 0;
        }
      }
    }

    .downloads {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: var(--white);
      padding: 10rem;

      h2 {
        font-family: "Rubik";
        color: var(--darkblue);
        font-size: 2rem;
        padding-bottom: 1rem;
      }
    }
  }
</style>
