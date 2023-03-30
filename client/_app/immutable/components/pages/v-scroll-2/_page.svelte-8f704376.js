import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, x as create_component, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, y as claim_component, b as insert_hydration, H as append_hydration, z as mount_component, f as transition_in, t as transition_out, A as destroy_component, u as set_data } from "../../../chunks/index-e7fa54cd.js";
import { V as VirtualScroll } from "../../../chunks/VirtualScroll-b6cbfc97.js";
function create_default_slot(ctx) {
  let t_value = (
    /*el*/
    ctx[3] + ""
  );
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & /*el*/
      8 && t_value !== (t_value = /*el*/
      ctx2[3] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let div1;
  let div0;
  let t0;
  let t1;
  let virtualscroll;
  let current;
  virtualscroll = new VirtualScroll({
    props: {
      data: (
        /*data*/
        ctx[0]
      ),
      $$slots: {
        default: [create_default_slot, ({ el }) => ({ 3: el }), ({ el }) => el ? 8 : 0]
      },
      $$scope: { ctx }
    }
  });
  virtualscroll.$on(
    "endReached",
    /*handleEndReached*/
    ctx[1]
  );
  return {
    c() {
      div1 = element("div");
      div0 = element("div");
      t0 = text("Component!");
      t1 = space();
      create_component(virtualscroll.$$.fragment);
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", {});
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "Component!");
      div0_nodes.forEach(detach);
      t1 = claim_space(div1_nodes);
      claim_component(virtualscroll.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      append_hydration(div1, div0);
      append_hydration(div0, t0);
      append_hydration(div1, t1);
      mount_component(virtualscroll, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const virtualscroll_changes = {};
      if (dirty & /*data*/
      1)
        virtualscroll_changes.data = /*data*/
        ctx2[0];
      if (dirty & /*$$scope, el*/
      24) {
        virtualscroll_changes.$$scope = { dirty, ctx: ctx2 };
      }
      virtualscroll.$set(virtualscroll_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(virtualscroll.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(virtualscroll.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      destroy_component(virtualscroll);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let index = 1;
  let data = Array(20).fill(null).map((el) => el + index++);
  const handleEndReached = (event) => {
    const dataToAdd = Array(event.detail).fill(0).map((el) => el + index++);
    $$invalidate(0, data = [...data, ...dataToAdd]);
  };
  return [data, handleEndReached];
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
