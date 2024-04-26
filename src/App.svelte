<script lang="ts">
  import { onMount } from "svelte";
  import Number from "./components/Number.svelte";
  import FileDownload from "./components/FileDownload.svelte";
  import Footer from "./components/Footer.svelte";
  import { getDownloadFiles, getStats, getUeber } from "./lib/StrapiData";
  import type { DownloadFile, Stat } from "./types/StrapiResponse";
  import SvelteMarkdown from "svelte-markdown";

  let DownloadFiles: DownloadFile[] = [];
  let Stats: Stat[] = [];
  let Ueber: string = "";

  onMount(async () => {
    DownloadFiles = await getDownloadFiles();
    Stats = await getStats();
    Ueber = await getUeber();
  });
</script>

<main>
  <div class="hero">
    <h1>ZAMMA <br /> Pflanzen</h1>
    <div class="about">
      <h2>Über uns</h2>
      <SvelteMarkdown source={Ueber} />
      <h3>
        Seid ihr dabei? Dann füllt einfach das Anmeldeformular aus und schickt
        es an
        <a href="mailto:zamma-pflanzaktion@t-online.de">
          zamma-pflanzaktion@t-online.de
        </a>
      </h3>
    </div>
    <!-- {#if DownloadFiles.length > 0} -->
    <div class="downloads">
      {#each DownloadFiles as file}
        <FileDownload title={file.Titel} url={file.Datei} />
      {/each}
    </div>
    <!-- {/if} -->
  </div>

  <div class="stats">
    <div class="trees">
      <img src="/icons/Tree.svg" alt="tree" />
      <img src="/icons/Tree.svg" alt="tree" />
      <img src="/icons/Tree.svg" alt="tree" />
      <img src="/icons/Tree.svg" alt="tree" />
      <img src="/icons/Tree.svg" alt="tree" />
    </div>
    <h2>Aktueller Stand der Pflanzaktion</h2>
    <div class="nums">
      {#each Stats as stat}
        <Number title={stat.Titel} value={stat.Wert} type={stat.Einheit} />
      {/each}
    </div>
  </div>

  <div class="contact">
    <img src="/BNS.bmp" alt="Bund Naturschutz" />
    <div class="text">
      <div class="box">
        <h2>Kontakt:</h2>
        <div>
          <h3>Mailadresse:</h3>
          <p>zamma-pflanzaktion@t-online.de</p>
        </div>
        <div>
          <h3>Post:</h3>
          <p>83607 Holzkirchen Postfach 1117</p>
        </div>
        <div>
          <h3>Webseite:</h3>
          <p>https://zamma-pflanzen.oberlab.de/</p>
        </div>
      </div>
      <div class="box">
        <h3>Spenden:</h3>
        <br />
        <h2>BUND Naturschutz Holzkirchen</h2>
        <h3>
          Betreff: „Zamma Pflanzaktion“
          <br />
          Raiffeisenbank Holzkirchen-Otterfing
          <br />
          IBAN DE75 7016 9410 0000 0271 38
        </h3>
      </div>
    </div>
    <img src="/KRAFT.png" alt="Kraft" />
  </div>

  <Footer />
</main>

<style lang="scss">
  // weird shit for svelte-markdown in order to style
  :global(ul, ol) {
    padding-inline: 2rem;
    padding-block: 1rem;
  }
  :global(li) {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  :global(.about p) {
    font-size: 1.3rem;
    text-align: justify;
    padding-block: 0.5rem;
  }

  .hero {
    display: flex;
    flex-direction: column;
    margin-top: 10vh;
    margin-inline: 2rem;

    h1 {
      font-family: "Aclonica", sans-serif;
      font-size: 5rem;
      margin-top: 0.7rem;
      z-index: 1;
    }

    .about {
      margin: 0 auto;

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

      @media (max-width: 768px) {
        padding-block: 2rem;

        h2 {
          font-size: 2rem;
        }

        p {
          font-size: 1rem;
        }

        h3 {
          font-size: 1rem;
        }

        .iban {
          h2 {
            font-size: 1.2rem;
          }

          h3 {
            font-size: 1rem;
          }
        }
      }
    }

    .downloads {
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;
    }

    @media (max-width: 768px) {
      margin-top: 10vh;
      h1 {
        font-size: 3rem;
      }
    }
  }

  .stats {
    background-color: var(--white);
    margin-top: 5rem;
    padding-bottom: 10rem;

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
      font-size: 2rem;
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

    @media (max-width: 768px) {
      padding-bottom: 5rem;
      .trees {
        top: -3rem;
        img {
          width: 3rem;
          margin-left: 1rem;
        }
      }

      h2 {
        font-size: 1.8rem;
        margin-top: -1rem;
        margin-bottom: 0;
      }

      .nums {
        margin-inline: 2rem;
      }
    }
  }

  .contact {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-items: center;
    gap: 2rem;
    margin-block: 7rem;
    margin-inline: 2rem;
    img {
      height: 10rem;
      width: 20rem;
      object-fit: contain;
      background-color: #fff;
      // padding: 1rem;
      // border-radius: 30px;
    }

    .box {
      margin-bottom: 2rem;
      text-align: left;

      background-color: var(--white);
      color: var(--turquoise);

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

      div {
        display: grid;
        grid-template-columns: 1fr 2fr;
      }
    }

    @media (max-width: 1080px) {
      grid-template-columns: 1fr;

      .logos {
        flex-direction: column;
        gap: 1rem;
        margin-top: 2rem;

        img {
          height: 6rem;
          width: 15rem;
        }
      }
    }
  }
</style>
