import { c as create_ssr_component, f as createEventDispatcher, e as escape, h as each } from "./index.js";
import "lodash.debounce";
const VirtualScroll_svelte_svelte_type_style_lang = "";
const css = {
  code: ".virtual-scroll__container.svelte-1je3h9{overflow:auto;background-color:blanchedalmond;width:100%}.virtual-scroll__viewport.svelte-1je3h9{overflow:hidden;will-change:transform;position:relative}.virtual-scroll___visible-part.svelte-1je3h9{will-change:transform;display:flex;flex-wrap:wrap}.virtual-scroll___element.svelte-1je3h9{display:block;box-sizing:border-box;border:1px solid blueviolet}",
  map: null
};
const VirtualScroll = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalContentHeight;
  let lastInRowRenderedElementIndex;
  let visibleNodeCount;
  let offsetY;
  let visibleElements;
  const dispatch = createEventDispatcher();
  let { elementCount = 100 } = $$props;
  let { elementHeight = 130 } = $$props;
  let { containerHeight = 500 } = $$props;
  let { renderAhreadElementRowCount = 2 } = $$props;
  let { elementsPerRow = 6 } = $$props;
  let { data = [] } = $$props;
  let scrollTop = 0;
  const computeDataToAdd = (newRows = 0) => {
    let elementsToAddCount = newRows * elementsPerRow;
    if (data.length + elementsToAddCount < visibleNodeCount) {
      elementsToAddCount += visibleNodeCount;
    }
    if (data.length + elementsToAddCount > elementCount) {
      const diff = elementCount - data.length;
      elementsToAddCount = diff > 0 ? diff : 0;
    }
    return dispatch("endReached", elementsToAddCount);
  };
  const updateDataOnInput = () => {
    computeDataToAdd(0);
  };
  if ($$props.elementCount === void 0 && $$bindings.elementCount && elementCount !== void 0)
    $$bindings.elementCount(elementCount);
  if ($$props.elementHeight === void 0 && $$bindings.elementHeight && elementHeight !== void 0)
    $$bindings.elementHeight(elementHeight);
  if ($$props.containerHeight === void 0 && $$bindings.containerHeight && containerHeight !== void 0)
    $$bindings.containerHeight(containerHeight);
  if ($$props.renderAhreadElementRowCount === void 0 && $$bindings.renderAhreadElementRowCount && renderAhreadElementRowCount !== void 0)
    $$bindings.renderAhreadElementRowCount(renderAhreadElementRowCount);
  if ($$props.elementsPerRow === void 0 && $$bindings.elementsPerRow && elementsPerRow !== void 0)
    $$bindings.elementsPerRow(elementsPerRow);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  totalContentHeight = Math.ceil(elementCount / elementsPerRow) * elementHeight;
  lastInRowRenderedElementIndex = Math.max(0, Math.floor(scrollTop / elementHeight) - Math.ceil(renderAhreadElementRowCount / elementsPerRow)) * elementsPerRow;
  visibleNodeCount = Math.min(elementCount - (lastInRowRenderedElementIndex || 0), Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + elementsPerRow * (renderAhreadElementRowCount + 1));
  offsetY = lastInRowRenderedElementIndex * elementHeight / elementsPerRow;
  visibleElements = Array(visibleNodeCount || 0).fill(null).map((_, index) => {
    return {
      el: data[index + lastInRowRenderedElementIndex],
      index: index + lastInRowRenderedElementIndex
    };
  });
  {
    {
      updateDataOnInput();
    }
  }
  return `<div class="${"virtual-scroll__container svelte-1je3h9"}" style="${"height: " + escape(containerHeight, true) + "px"}"><div class="${"virtual-scroll__viewport svelte-1je3h9"}" style="${"height: " + escape(totalContentHeight, true) + "px"}"><div class="${"virtual-scroll___visible-part svelte-1je3h9"}" style="${"transform: translateY(" + escape(offsetY, true) + "px)"}">${each(visibleElements, ({ el, index }) => {
    return `<div class="${"virtual-scroll___element svelte-1je3h9"}" style="${"height: " + escape(elementHeight, true) + "px; width: " + escape(100 / elementsPerRow, true) + "%"}">${slots.default ? slots.default({ el }) : ``}
                </div>`;
  })}</div></div>
</div>`;
});
export {
  VirtualScroll as V
};
