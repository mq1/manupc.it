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

    base.attributes.forEach((name) => {
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
    <div />

    <label class="form-control w-full max-w-xs">
      <div class="label">
        <span class="label-text">{attributes[attribute].label}</span>
      </div>
      <select
        bind:value={priceMap[attribute]}
        on:change={() => {
          total = getTotal();
        }}
        class="select select-bordered"
      >
        {#each Object.entries(attributes[attribute].options) as [option, price]}
          <option value={option}>{option} (+{price} €)</option>
        {/each}
      </select>
    </label>
  {/each}

  <div class="divider" />

  <p class="text-center">Totale: {total} € + 10€ di spedizione</p>

  <button class="btn btn-primary" on:click={sendEmail}
    >Contattami per ordinarlo</button
  >
  <p class="text-sm text-center">
    O invia una email a <a
      href="mailto:manu@manupc.it"
      class="link link-primary">manu@manupc.it</a
    >
  </p>
</div>
