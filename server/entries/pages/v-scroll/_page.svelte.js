import { c as create_ssr_component, f as createEventDispatcher, e as escape, d as add_attribute, h as each } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".virtual-scroll__container.svelte-1fdooz6{overflow:auto;background-color:blanchedalmond}.virtual-scroll__viewport.svelte-1fdooz6{overflow:hidden;will-change:transform;position:relative}.virtual-scroll___visible-part.svelte-1fdooz6{will-change:transform;display:flex;flex-wrap:wrap}.virtual-scroll___element.svelte-1fdooz6{display:block;box-sizing:border-box;border:1px solid blueviolet}",
  map: null
};
const elementCount = 100;
const elementHeight = 30;
const containerHeight = 200;
const renderAhreadElementRowCount = 2;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalContentHeight;
  let lastInRowRenderedElementIndex;
  let visibleNodeCount;
  let offsetY;
  let visibleElements;
  createEventDispatcher();
  let elementsPerRow = 2;
  const firstBatch = Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + 2 * renderAhreadElementRowCount;
  let index = 1;
  let data = Array(firstBatch).fill(0).map((el) => el + index++);
  let scrollTop = 0;
  $$result.css.add(css);
  totalContentHeight = Math.ceil(elementCount / elementsPerRow) * elementHeight;
  lastInRowRenderedElementIndex = Math.max(0, Math.floor(scrollTop / elementHeight) - Math.ceil(renderAhreadElementRowCount / elementsPerRow)) * elementsPerRow;
  visibleNodeCount = Math.min(elementCount - (lastInRowRenderedElementIndex || 0), Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + elementsPerRow * (renderAhreadElementRowCount + 1));
  offsetY = lastInRowRenderedElementIndex * elementHeight / elementsPerRow;
  visibleElements = Array(visibleNodeCount || 0).fill(null).map((_, index2) => {
    return data[index2 + lastInRowRenderedElementIndex];
  });
  return `<div>Virtual Scrolling</div>
<div>data.length: ${escape(data.length)}</div>
<div>elementsPerRow: <input${add_attribute("value", elementsPerRow, 0)}></div>
<div class="${"virtual-scroll__container svelte-1fdooz6"}" style="${"height: " + escape(containerHeight, true) + "px"}"><div class="${"virtual-scroll__viewport svelte-1fdooz6"}" style="${"height: " + escape(totalContentHeight, true) + "px"}"><div class="${"virtual-scroll___visible-part svelte-1fdooz6"}" style="${"transform: translateY(" + escape(offsetY, true) + "px)"}">${each(visibleElements, (el) => {
    return `<div class="${"virtual-scroll___element svelte-1fdooz6"}" style="${"height: " + escape(elementHeight, true) + "px; width: " + escape(100 / elementsPerRow, true) + "%"}">${escape(el)}
                </div>`;
  })}</div></div>
</div>`;
});
export {
  Page as default
};
