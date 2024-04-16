<script lang="ts">
  export let value = 0;
  export let type = "";
  export let title = "";
</script>

<main class="number">
  <h3>{value}{type}</h3>
  <p>{title}</p>
</main>

<style lang="scss">
  .number {
    h3 {
      font-family: "Aladin";
      color: var(--turquoise);
      font-size: 8rem;
      line-height: 0.8;
    }

    p {
      font-family: "Aladin";
      color: var(--blue);
      font-size: 2.5rem;
    }
  }
</style>
