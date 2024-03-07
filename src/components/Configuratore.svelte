<script lang="ts">
  import bases from "../data/bases.json";
  import attributes from "../data/attributes.json";

  export let pc: string;

  let properties = bases[pc];

  let priceMap = {};

  const sendEmail = () => {
    let text = `mailto:manu@manupc.it?subject=Ordine&body=Ciao, vorrei ordinare questo PC<br><br>${properties.name}`;

    if (priceMap !== undefined) {
      Object.entries(priceMap).forEach(([attribute, selected]) => {
        text += `<br>${attributes[attribute].label}: ${selected[0]}`;
      });
    }

    window.location.href = text
  };

  $: total =
    properties.price +
    Object.values(priceMap).reduce(
      (accumulator, currentValue) => accumulator + currentValue[1],
      0,
    );
</script>

<div class="flex flex-col gap-2">
  <p>PC base: {properties.price} €</p>

  {#each properties.attributes as attribute}
    <hr class="text-neutral-500 my-2" />
    <p>{attributes[attribute].label}</p>
    <select bind:value={priceMap[attribute]}>
      {#each Object.entries(attributes[attribute].options) as [option, price]}
        <option value={[option, price]}>{option} (+{price} €)</option>
      {/each}
    </select>
  {/each}

  <hr class="text-neutral-500 my-8" />
  <p class="text-center">Totale: {total} € + 10€ di spedizione</p>

  <button class="btn btn-primary" on:click={sendEmail}>Contattami per ordinarlo</button>
  <p class="text-sm text-center">
    O invia una email a <a href="mailto:manu@manupc.it" class="text-primary"
      >manu@manupc.it</a
    >
  </p>
</div>
