<main>
  <a href="https://oberlab.de" target="_blank" rel="noopener noreferrer">
    <h1>powered by</h1>
    <img src="/Oberlab.png" alt="Oberlab" />
  </a>
</main>

<style lang="scss">
  main {
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: inherit;
      margin-bottom: 2rem;

      h1 {
        font-size: 1.3rem;
        margin-top: 1rem;
        margin-right: 1rem;
      }

      img {
        height: 4rem;
      }
    }

    @media (max-width: 768px) {
      a {
        h1 {
          font-size: 1rem;
        }

        img {
          height: 3rem;
        }
      }
    }
  }
</style>
