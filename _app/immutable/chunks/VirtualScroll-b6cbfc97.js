import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, l as claim_element, m as children, h as detach, n as attr, p as set_style, b as insert_hydration, H as append_hydration, O as listen, g as group_outros, R as update_keyed_each, d as check_outros, f as transition_in, t as transition_out, T as createEventDispatcher, o as onMount, D as create_slot, a as space, c as claim_space, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, U as outro_and_destroy_block } from "./index-e7fa54cd.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var FUNC_ERROR_TEXT = "Expected a function";
var NAN = 0 / 0;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var nativeMax = Math.max, nativeMin = Math.min;
var now = function() {
  return root.Date.now();
};
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_debounce = debounce;
const VirtualScroll_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[22] = list[i].el;
  child_ctx[23] = list[i].index;
  return child_ctx;
}
const get_default_slot_changes = (dirty) => ({ el: dirty & /*visibleElements*/
8 });
const get_default_slot_context = (ctx) => ({ el: (
  /*el*/
  ctx[22]
) });
function create_each_block(key_1, ctx) {
  let div;
  let t;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[14].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[13],
    get_default_slot_context
  );
  return {
    key: key_1,
    first: null,
    c() {
      div = element("div");
      if (default_slot)
        default_slot.c();
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      if (default_slot)
        default_slot.l(div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "virtual-scroll___element svelte-1je3h9");
      set_style(
        div,
        "height",
        /*elementHeight*/
        ctx[0] + "px"
      );
      set_style(div, "width", 100 / /*elementsPerRow*/
      ctx[2] + "%");
      this.first = div;
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (default_slot) {
        default_slot.m(div, null);
      }
      append_hydration(div, t);
      current = true;
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope, visibleElements*/
        8200)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx,
            /*$$scope*/
            ctx[13],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx[13]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx[13],
              dirty,
              get_default_slot_changes
            ),
            get_default_slot_context
          );
        }
      }
      if (!current || dirty & /*elementHeight*/
      1) {
        set_style(
          div,
          "height",
          /*elementHeight*/
          ctx[0] + "px"
        );
      }
      if (!current || dirty & /*elementsPerRow*/
      4) {
        set_style(div, "width", 100 / /*elementsPerRow*/
        ctx[2] + "%");
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function create_fragment(ctx) {
  let div2;
  let div1;
  let div0;
  let each_blocks = [];
  let each_1_lookup = /* @__PURE__ */ new Map();
  let current;
  let mounted;
  let dispose;
  let each_value = (
    /*visibleElements*/
    ctx[3]
  );
  const get_key = (ctx2) => (
    /*index*/
    ctx2[23]
  );
  for (let i = 0; i < each_value.length; i += 1) {
    let child_ctx = get_each_context(ctx, each_value, i);
    let key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }
  return {
    c() {
      div2 = element("div");
      div1 = element("div");
      div0 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true, style: true });
      var div2_nodes = children(div2);
      div1 = claim_element(div2_nodes, "DIV", { class: true, style: true });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", { class: true, style: true });
      var div0_nodes = children(div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div0_nodes);
      }
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "virtual-scroll___visible-part svelte-1je3h9");
      set_style(div0, "transform", "translateY(" + /*offsetY*/
      ctx[4] + "px)");
      attr(div1, "class", "virtual-scroll__viewport svelte-1je3h9");
      set_style(
        div1,
        "height",
        /*totalContentHeight*/
        ctx[5] + "px"
      );
      attr(div2, "class", "virtual-scroll__container svelte-1je3h9");
      set_style(
        div2,
        "height",
        /*containerHeight*/
        ctx[1] + "px"
      );
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div1);
      append_hydration(div1, div0);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div0, null);
      }
      current = true;
      if (!mounted) {
        dispose = listen(
          div2,
          "scroll",
          /*onScroll*/
          ctx[6]
        );
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*elementHeight, elementsPerRow, $$scope, visibleElements*/
      8205) {
        each_value = /*visibleElements*/
        ctx2[3];
        group_outros();
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx2, each_value, each_1_lookup, div0, outro_and_destroy_block, create_each_block, null, get_each_context);
        check_outros();
      }
      if (!current || dirty & /*offsetY*/
      16) {
        set_style(div0, "transform", "translateY(" + /*offsetY*/
        ctx2[4] + "px)");
      }
      if (!current || dirty & /*totalContentHeight*/
      32) {
        set_style(
          div1,
          "height",
          /*totalContentHeight*/
          ctx2[5] + "px"
        );
      }
      if (!current || dirty & /*containerHeight*/
      2) {
        set_style(
          div2,
          "height",
          /*containerHeight*/
          ctx2[1] + "px"
        );
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].d();
      }
      mounted = false;
      dispose();
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let totalContentHeight;
  let lastInRowRenderedElementIndex;
  let visibleNodeCount;
  let offsetY;
  let visibleElements;
  let { $$slots: slots = {}, $$scope } = $$props;
  const dispatch = createEventDispatcher();
  let { elementCount = 100 } = $$props;
  let { elementHeight = 130 } = $$props;
  let { containerHeight = 500 } = $$props;
  let { renderAhreadElementRowCount = 2 } = $$props;
  let { elementsPerRow = 6 } = $$props;
  let { data = [] } = $$props;
  let scrollTop = 0;
  let maxScrollTop = scrollTop;
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
  let lastNeedToRenderCount = -1;
  const onNewElementAppear = () => {
    const bufferHeight = elementHeight * renderAhreadElementRowCount;
    const supposeToRenderZoneHeight = maxScrollTop + containerHeight + bufferHeight;
    const needToRenderRowsCount = Math.ceil(supposeToRenderZoneHeight / elementHeight);
    const renderedRowsCount = Math.floor(data.length / elementsPerRow);
    if (needToRenderRowsCount > renderedRowsCount && needToRenderRowsCount != lastNeedToRenderCount) {
      const diffInRows = needToRenderRowsCount - renderedRowsCount;
      lastNeedToRenderCount = needToRenderRowsCount;
      computeDataToAdd(diffInRows);
    }
  };
  const handleNewElementAppear = (targetScrollTop) => {
    const isRowScrolled = Math.floor((targetScrollTop - maxScrollTop) / elementHeight) > 0;
    if (targetScrollTop > maxScrollTop && isRowScrolled) {
      maxScrollTop = targetScrollTop;
      onNewElementAppear();
    }
  };
  const onScroll = (e) => {
    return requestAnimationFrame(() => {
      if (e.target instanceof Element) {
        $$invalidate(10, scrollTop = e.target.scrollTop);
        handleNewElementAppear(e.target.scrollTop);
      }
    });
  };
  onMount(() => {
    computeDataToAdd();
  });
  $$self.$$set = ($$props2) => {
    if ("elementCount" in $$props2)
      $$invalidate(7, elementCount = $$props2.elementCount);
    if ("elementHeight" in $$props2)
      $$invalidate(0, elementHeight = $$props2.elementHeight);
    if ("containerHeight" in $$props2)
      $$invalidate(1, containerHeight = $$props2.containerHeight);
    if ("renderAhreadElementRowCount" in $$props2)
      $$invalidate(8, renderAhreadElementRowCount = $$props2.renderAhreadElementRowCount);
    if ("elementsPerRow" in $$props2)
      $$invalidate(2, elementsPerRow = $$props2.elementsPerRow);
    if ("data" in $$props2)
      $$invalidate(9, data = $$props2.data);
    if ("$$scope" in $$props2)
      $$invalidate(13, $$scope = $$props2.$$scope);
  };
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*elementCount, elementsPerRow, elementHeight*/
    133) {
      $$invalidate(5, totalContentHeight = Math.ceil(elementCount / elementsPerRow) * elementHeight);
    }
    if ($$self.$$.dirty & /*scrollTop, elementHeight, renderAhreadElementRowCount, elementsPerRow*/
    1285) {
      $$invalidate(12, lastInRowRenderedElementIndex = Math.max(0, Math.floor(scrollTop / elementHeight) - Math.ceil(renderAhreadElementRowCount / elementsPerRow)) * elementsPerRow);
    }
    if ($$self.$$.dirty & /*elementCount, lastInRowRenderedElementIndex, containerHeight, elementHeight, elementsPerRow, renderAhreadElementRowCount*/
    4487) {
      $$invalidate(11, visibleNodeCount = Math.min(elementCount - (lastInRowRenderedElementIndex || 0), Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + elementsPerRow * (renderAhreadElementRowCount + 1)));
    }
    if ($$self.$$.dirty & /*lastInRowRenderedElementIndex, elementHeight, elementsPerRow*/
    4101) {
      $$invalidate(4, offsetY = lastInRowRenderedElementIndex * elementHeight / elementsPerRow);
    }
    if ($$self.$$.dirty & /*visibleNodeCount, data, lastInRowRenderedElementIndex*/
    6656) {
      $$invalidate(3, visibleElements = Array(visibleNodeCount || 0).fill(null).map((_, index) => {
        return {
          el: data[index + lastInRowRenderedElementIndex],
          index: index + lastInRowRenderedElementIndex
        };
      }));
    }
    if ($$self.$$.dirty & /*elementsPerRow*/
    4) {
      {
        updateDataOnInput();
      }
    }
  };
  return [
    elementHeight,
    containerHeight,
    elementsPerRow,
    visibleElements,
    offsetY,
    totalContentHeight,
    onScroll,
    elementCount,
    renderAhreadElementRowCount,
    data,
    scrollTop,
    visibleNodeCount,
    lastInRowRenderedElementIndex,
    $$scope,
    slots
  ];
}
class VirtualScroll extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {
      elementCount: 7,
      elementHeight: 0,
      containerHeight: 1,
      renderAhreadElementRowCount: 8,
      elementsPerRow: 2,
      data: 9
    });
  }
}
export {
  VirtualScroll as V,
  commonjsGlobal as c,
  lodash_debounce as l
};
