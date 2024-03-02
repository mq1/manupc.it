<script lang="ts">
  import bases from "../data/bases.json";
  import attributes from "../data/attributes.json";

  export let pc: string;

  let properties = bases[pc];

  let priceMap = {};

  $: total = properties.price + Object.values(priceMap).reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
</script>

<div class="flex flex-col gap-2">
  {#each properties.attributes as attribute}
    <p>{attributes[attribute].label}</p>
    <select bind:value={priceMap[attribute]}>
      {#each Object.entries(attributes[attribute].options) as [option, price]}
        <option value={price}>{option} (+{price} €)</option>
      {/each}
    </select>
    <hr class="text-neutral-500" />
  {/each}

  <div class="border p-2 rounded-lg shadow-lg">Totale: {total} €</div>
</div>
