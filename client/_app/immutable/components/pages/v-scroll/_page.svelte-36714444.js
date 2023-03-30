import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, p as set_style, b as insert_hydration, H as append_hydration, N as set_input_value, O as listen, u as set_data, C as noop, V as destroy_each, W as run_all, T as createEventDispatcher } from "../../../chunks/index-e7fa54cd.js";
const _page_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[21] = list[i];
  return child_ctx;
}
function create_each_block(ctx) {
  let div;
  let t0_value = (
    /*el*/
    ctx[21] + ""
  );
  let t0;
  let t1;
  return {
    c() {
      div = element("div");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true, style: true });
      var div_nodes = children(div);
      t0 = claim_text(div_nodes, t0_value);
      t1 = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "virtual-scroll___element svelte-1fdooz6");
      set_style(div, "height", elementHeight + "px");
      set_style(div, "width", 100 / /*elementsPerRow*/
      ctx[0] + "%");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t0);
      append_hydration(div, t1);
    },
    p(ctx2, dirty) {
      if (dirty & /*visibleElements*/
      4 && t0_value !== (t0_value = /*el*/
      ctx2[21] + ""))
        set_data(t0, t0_value);
      if (dirty & /*elementsPerRow*/
      1) {
        set_style(div, "width", 100 / /*elementsPerRow*/
        ctx2[0] + "%");
      }
    },
    d(detaching) {
      if (detaching)
        detach(div);
    }
  };
}
function create_fragment(ctx) {
  let div0;
  let t0;
  let t1;
  let div1;
  let t2;
  let t3_value = (
    /*data*/
    ctx[1].length + ""
  );
  let t3;
  let t4;
  let div2;
  let t5;
  let input;
  let t6;
  let div5;
  let div4;
  let div3;
  let mounted;
  let dispose;
  let each_value = (
    /*visibleElements*/
    ctx[2]
  );
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  return {
    c() {
      div0 = element("div");
      t0 = text("Virtual Scrolling");
      t1 = space();
      div1 = element("div");
      t2 = text("data.length: ");
      t3 = text(t3_value);
      t4 = space();
      div2 = element("div");
      t5 = text("elementsPerRow: ");
      input = element("input");
      t6 = space();
      div5 = element("div");
      div4 = element("div");
      div3 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div0 = claim_element(nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Virtual Scrolling");
      div0_nodes.forEach(detach);
      t1 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "data.length: ");
      t3 = claim_text(div1_nodes, t3_value);
      div1_nodes.forEach(detach);
      t4 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {});
      var div2_nodes = children(div2);
      t5 = claim_text(div2_nodes, "elementsPerRow: ");
      input = claim_element(div2_nodes, "INPUT", {});
      div2_nodes.forEach(detach);
      t6 = claim_space(nodes);
      div5 = claim_element(nodes, "DIV", { class: true, style: true });
      var div5_nodes = children(div5);
      div4 = claim_element(div5_nodes, "DIV", { class: true, style: true });
      var div4_nodes = children(div4);
      div3 = claim_element(div4_nodes, "DIV", { class: true, style: true });
      var div3_nodes = children(div3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div3_nodes);
      }
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      div5_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div3, "class", "virtual-scroll___visible-part svelte-1fdooz6");
      set_style(div3, "transform", "translateY(" + /*offsetY*/
      ctx[3] + "px)");
      attr(div4, "class", "virtual-scroll__viewport svelte-1fdooz6");
      set_style(
        div4,
        "height",
        /*totalContentHeight*/
        ctx[4] + "px"
      );
      attr(div5, "class", "virtual-scroll__container svelte-1fdooz6");
      set_style(div5, "height", containerHeight + "px");
    },
    m(target, anchor) {
      insert_hydration(target, div0, anchor);
      append_hydration(div0, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, div1, anchor);
      append_hydration(div1, t2);
      append_hydration(div1, t3);
      insert_hydration(target, t4, anchor);
      insert_hydration(target, div2, anchor);
      append_hydration(div2, t5);
      append_hydration(div2, input);
      set_input_value(
        input,
        /*elementsPerRow*/
        ctx[0]
      );
      insert_hydration(target, t6, anchor);
      insert_hydration(target, div5, anchor);
      append_hydration(div5, div4);
      append_hydration(div4, div3);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div3, null);
      }
      if (!mounted) {
        dispose = [
          listen(
            input,
            "input",
            /*input_input_handler*/
            ctx[10]
          ),
          listen(
            input,
            "input",
            /*updateDataOnInput*/
            ctx[5]
          ),
          listen(
            div5,
            "scroll",
            /*onScroll*/
            ctx[6]
          )
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (dirty & /*data*/
      2 && t3_value !== (t3_value = /*data*/
      ctx2[1].length + ""))
        set_data(t3, t3_value);
      if (dirty & /*elementsPerRow*/
      1 && input.value !== /*elementsPerRow*/
      ctx2[0]) {
        set_input_value(
          input,
          /*elementsPerRow*/
          ctx2[0]
        );
      }
      if (dirty & /*elementHeight, elementsPerRow, visibleElements*/
      5) {
        each_value = /*visibleElements*/
        ctx2[2];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div3, null);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      if (dirty & /*offsetY*/
      8) {
        set_style(div3, "transform", "translateY(" + /*offsetY*/
        ctx2[3] + "px)");
      }
      if (dirty & /*totalContentHeight*/
      16) {
        set_style(
          div4,
          "height",
          /*totalContentHeight*/
          ctx2[4] + "px"
        );
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div0);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(div1);
      if (detaching)
        detach(t4);
      if (detaching)
        detach(div2);
      if (detaching)
        detach(t6);
      if (detaching)
        detach(div5);
      destroy_each(each_blocks, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
const elementCount = 100;
const elementHeight = 30;
const containerHeight = 200;
const renderAhreadElementRowCount = 2;
function instance($$self, $$props, $$invalidate) {
  let totalContentHeight;
  let lastInRowRenderedElementIndex;
  let visibleNodeCount;
  let offsetY;
  let visibleElements;
  const dispatch = createEventDispatcher();
  let elementsPerRow = 2;
  const firstBatch = Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + 2 * renderAhreadElementRowCount;
  let index = 1;
  let data = Array(firstBatch).fill(0).map((el) => el + index++);
  let scrollTop = 0;
  let maxScrollTop = scrollTop;
  let needToRenderRows = 0;
  let lastNewRows = 0;
  const computeDataToAdd = (newRows = 0) => {
    let elementsToAddCount = (newRows - lastNewRows) * elementsPerRow * renderAhreadElementRowCount;
    if (data.length + elementsToAddCount < visibleNodeCount) {
      elementsToAddCount += visibleNodeCount;
    }
    if (data.length + elementsToAddCount > elementCount) {
      const diff = elementCount - data.length;
      elementsToAddCount = diff > 0 ? diff : 0;
    }
    lastNewRows = newRows;
    return Array(elementsToAddCount).fill(0).map((el) => el + index++);
  };
  const updateData = (newRows) => {
    const dataToAdd = computeDataToAdd(newRows);
    $$invalidate(1, data = [...data, ...dataToAdd]);
  };
  const updateDataOnInput = () => {
    updateData(0);
  };
  const onNewElementAppear = () => {
    const newRows = Math.ceil(maxScrollTop / elementHeight / renderAhreadElementRowCount);
    if (newRows > needToRenderRows) {
      needToRenderRows = newRows;
      dispatch("endReached", newRows - lastNewRows);
      updateData(newRows);
    }
  };
  const handleNewElementAppear = (targetScrollTop) => {
    if (targetScrollTop > maxScrollTop) {
      maxScrollTop = targetScrollTop;
      onNewElementAppear();
    }
  };
  const onScroll = (e) => {
    return requestAnimationFrame(() => {
      if (e.target instanceof Element) {
        $$invalidate(7, scrollTop = e.target.scrollTop);
        handleNewElementAppear(e.target.scrollTop);
      }
    });
  };
  function input_input_handler() {
    elementsPerRow = this.value;
    $$invalidate(0, elementsPerRow);
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & /*elementsPerRow*/
    1) {
      $$invalidate(4, totalContentHeight = Math.ceil(elementCount / elementsPerRow) * elementHeight);
    }
    if ($$self.$$.dirty & /*scrollTop, elementsPerRow*/
    129) {
      $$invalidate(9, lastInRowRenderedElementIndex = Math.max(0, Math.floor(scrollTop / elementHeight) - Math.ceil(renderAhreadElementRowCount / elementsPerRow)) * elementsPerRow);
    }
    if ($$self.$$.dirty & /*lastInRowRenderedElementIndex, elementsPerRow*/
    513) {
      $$invalidate(8, visibleNodeCount = Math.min(elementCount - (lastInRowRenderedElementIndex || 0), Math.ceil(Math.ceil(containerHeight / elementHeight) * elementsPerRow) + elementsPerRow * (renderAhreadElementRowCount + 1)));
    }
    if ($$self.$$.dirty & /*lastInRowRenderedElementIndex, elementsPerRow*/
    513) {
      $$invalidate(3, offsetY = lastInRowRenderedElementIndex * elementHeight / elementsPerRow);
    }
    if ($$self.$$.dirty & /*visibleNodeCount, data, lastInRowRenderedElementIndex*/
    770) {
      $$invalidate(2, visibleElements = Array(visibleNodeCount || 0).fill(null).map((_, index2) => {
        return data[index2 + lastInRowRenderedElementIndex];
      }));
    }
  };
  return [
    elementsPerRow,
    data,
    visibleElements,
    offsetY,
    totalContentHeight,
    updateDataOnInput,
    onScroll,
    scrollTop,
    visibleNodeCount,
    lastInRowRenderedElementIndex,
    input_input_handler
  ];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
