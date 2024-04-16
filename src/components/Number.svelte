<script lang="ts">
  import { onMount } from "svelte";
  import { CountUp } from "countup.js";

  export let value = 100;
  export let type = "";
  export let title = "";

  const countOptions = {
    duration: 2,
    enableScrollSpy: true,
    scrolscrollSpyOnce: true,
  };

  let targetEl: HTMLElement, count;

  onMount(() => {
    count = new CountUp(targetEl, value, countOptions);
    count.start();
  });
</script>

<main class="number">
  <h3><b bind:this={targetEl}>-</b>{type}</h3>
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

    @media (max-width: 768px) {
      padding-top: 2rem;
      h3 {
        font-size: 6rem;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }
</style>
