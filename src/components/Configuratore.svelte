<script lang="ts">
  import bases from "../data/bases.json";
  import attributes from "../data/attributes.json";

  export let pc: string;

  let properties = bases[pc];

  let priceMap = {};

  $: total = properties.price + Object.values(priceMap).reduce(
    (accumulator, currentValue) => accumulator + currentValue[1],
    0
  );

  $: email = (priceMap => {
    let text = `Ciao, vorrei ordinare questo PC<br>${properties.name}`;

    properties.attributes.forEach(attribute => {
        let tmp = `${attributes[attribute].label}: `;
    });

    return text;
  })();
</script>

<div class="flex flex-col gap-2">
  <p>Base: {properties.price} €</p>
  <hr class="text-neutral-500 my-2" />

  {#each properties.attributes as attribute}
    <p>{attributes[attribute].label}</p>
    <select bind:value={priceMap[attribute]}>
      {#each Object.entries(attributes[attribute].options) as [option, price]}
        <option value={[option, price]}>{option} (+{price} €)</option>
      {/each}
    </select>
    <hr class="text-neutral-500 my-2" />
  {/each}

  <div>Totale: {total} €</div>

  <a
    class="btn btn-primary"
    href={`mailto:manu@manupc.it?subject=Ordine&body=${email}`}
    >
      Contattami per ordinarlo
  </a>
</div>
