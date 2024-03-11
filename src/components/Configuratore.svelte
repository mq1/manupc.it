<script lang="ts">
  import { attributes, type AttributeName } from "../data/attributes";
  import type { Base } from "../data/bases";

  export let base: Base;

  let priceMap: { [key: string]: string } = {};

  const sendEmail = () => {
    let text = `mailto:manu@manupc.it?subject=Ordine&body=Ciao, vorrei ordinare questo PC<br><br>${base.name}`;

    if (priceMap !== undefined) {
      Object.entries(priceMap).forEach(([attribute, selected]) => {
        text += `<br>${attributes[attribute as AttributeName].label}: ${selected[0]}`;
      });
    }

    window.location.href = text;
  };

  const getDefaultTotal = () => {
    let total = base.price;

    base.attributes.forEach(name => {
      total += Object.values(attributes[name].options)[0];
    });

    return total;
  };

  const getTotal = () => {
    let total = base.price;

    Object.entries(priceMap).forEach(([attribute, selected]) => {
      total += attributes[attribute as AttributeName].options[selected];
    });

    return total;
  };

  let total = getDefaultTotal();
</script>

<div class="flex flex-col gap-2">
  <p>PC base: {base.price} €</p>

  {#each base.attributes as attribute}
    <hr class="text-neutral-500 my-2" />
    <p>{attributes[attribute].label}</p>
    <select
      bind:value={priceMap[attribute]}
      on:change={() => {
        total = getTotal();
      }}
    >
      {#each Object.entries(attributes[attribute].options) as [option, price]}
        <option value={option}>{option} (+{price} €)</option>
      {/each}
    </select>
  {/each}

  <hr class="text-neutral-500 my-8" />
  <p class="text-center">Totale: {total} € + 10€ di spedizione</p>

  <button class="btn btn-primary" on:click={sendEmail}
    >Contattami per ordinarlo</button
  >
  <p class="text-sm text-center">
    O invia una email a <a href="mailto:manu@manupc.it" class="text-primary"
      >manu@manupc.it</a
    >
  </p>
</div>
