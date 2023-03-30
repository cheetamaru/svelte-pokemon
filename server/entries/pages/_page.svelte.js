import { c as create_ssr_component, e as escape, d as add_attribute, i as is_promise, n as noop, v as validate_component } from "../../chunks/index.js";
import { PokemonClient } from "pokenode-ts";
import { V as VirtualScroll } from "../../chunks/VirtualScroll.js";
import debounce from "lodash.debounce";
const api = new PokemonClient();
const getPokemonByName = (name) => {
  return api.getPokemonByName(name);
};
const getList = (offset2, limit2) => {
  return api.listPokemons(offset2, limit2);
};
const pokemonApi = {
  getPokemonByName,
  getList
};
const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};
const PokemonInfo_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".pokemon-info__name.svelte-1t2a0vv{text-align:center}",
  map: null
};
const PokemonInfo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name;
  let capitalizedName;
  let spriteSrc;
  let { pokemon } = $$props;
  if ($$props.pokemon === void 0 && $$bindings.pokemon && pokemon !== void 0)
    $$bindings.pokemon(pokemon);
  $$result.css.add(css$2);
  name = pokemon.name;
  capitalizedName = capitalize(name);
  spriteSrc = pokemon.sprites.front_default;
  return `<div class="${"pokemon-info"}"><div class="${"pokemon-info__name svelte-1t2a0vv"}">${escape(capitalizedName)} (${escape(pokemon.id)})</div>
    <img${add_attribute("src", spriteSrc, 0)} alt="${escape(name, true) + " sprite"}">
</div>`;
});
const PokemonCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".pokemon-card.svelte-1uanphx{border:1px solid black;display:flex;justify-content:center;align-items:center;height:100%}",
  map: null
};
const PokemonCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name = "" } = $$props;
  const { getPokemonByName: getPokemonByName2 } = pokemonApi;
  let promise = getPokemonByName2(name);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$1);
  return `<div class="${"pokemon-card svelte-1uanphx"}">${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
        ...pokemon loading
    `;
    }
    return function(pokemon) {
      return `
        ${validate_component(PokemonInfo, "PokemonInfo").$$render($$result, { pokemon }, {}, {})}
    `;
    }(__value);
  }(promise)}
</div>`;
});
const PokemonCardList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pokemon-card-list.svelte-rhllxr{display:flex;justify-content:center}.pokemon-card-list__main.svelte-rhllxr{display:flex;flex-wrap:wrap;align-items:center;justify-content:left;;;width:100%}",
  map: null
};
const PokemonCardList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let total;
  const { getList: getList2 } = pokemonApi;
  let { list } = $$props;
  let data = [...list.results];
  let elementPool = 0;
  const getWithElPool = async () => {
    if (elementPool === 0) {
      return;
    }
    const newData = getList2(data.length, elementPool);
    elementPool = 0;
    data = [...data, ...(await newData).results];
  };
  const handleEndReached = (event) => {
    const newElsNeeded = event.detail;
    elementPool += newElsNeeded;
    getWithElPool();
  };
  debounce(handleEndReached, 100);
  let elementsPerRow = 4;
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    total = list.count;
    $$rendered = `<div>Total: ${escape(total)}</div>
<div>data: ${escape(data.length)}</div>
<div>Elements per row: <input type="${"number"}" min="${"1"}" max="${"30"}"${add_attribute("value", elementsPerRow, 0)}></div>
<div class="${"pokemon-card-list svelte-rhllxr"}"><div class="${"pokemon-card-list__main svelte-rhllxr"}">${validate_component(VirtualScroll, "VirtualScroll").$$render(
      $$result,
      {
        data,
        elementsPerRow,
        elementCount: total
      },
      {
        elementCount: ($$value) => {
          total = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ el }) => {
          return `${!el ? `Pokemon is loading` : `${validate_component(PokemonCard, "PokemonCard").$$render($$result, { name: el?.name }, {}, {})}`}`;
        }
      }
    )}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
let offset = 0;
let limit = 30;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const { getList: getList2 } = pokemonApi;
  const getPokemonList = () => {
    return getList2(offset, limit);
  };
  let promise = getPokemonList();
  return `<div><h1>Svelte Pokemon Pet Project</h1>
    <main>${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
            ...Loading
        `;
    }
    return function(list) {
      return `
            ${validate_component(PokemonCardList, "PokemonCardList").$$render($$result, { list }, {}, {})}
        `;
    }(__value);
  }(promise)}</main></div>`;
});
export {
  Page as default
};
