<script lang="ts">
  export var title: string;
  export var url: string;
</script>

<main>
  <a href={url} download>
    <img src="/icons/File.svg" alt="File" />
    <h2>{title}</h2>
    <img src="/icons/Download.svg" alt="Download" />
  </a>
</main>

<style lang="scss">
  main {
    a {
      width: 100%;
      display: flex;
      align-items: center;
      color: #fffbfc;
      background-color: #7d8ca3;
      margin: 1rem 0;
      padding: 1rem;
      border-radius: 20px;
      text-decoration: none;

      transition: all 0.3s ease-in-out;

      img {
        width: 1.5rem;
      }

      h2 {
        font-size: 1.2rem;
        padding-inline: 1rem;
      }

      img:last-child {
        width: 2rem;
        margin-left: auto;
      }

      &:hover {
        background-color: #5c6d8a;
      }

      @media (max-width: 768px) {
        img {
          width: 2rem;
        }

        h2 {
          font-size: 1rem;
          padding-inline: 0.5rem;
        }
      }
    }
  }
</style>
