import { c as create_ssr_component, v as validate_component, e as escape } from "../../../chunks/index.js";
import { V as VirtualScroll } from "../../../chunks/VirtualScroll.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let index = 1;
  let data = Array(20).fill(null).map((el) => el + index++);
  return `<div><div>Component!</div>
    ${validate_component(VirtualScroll, "VirtualScroll").$$render($$result, { data }, {}, {
    default: ({ el }) => {
      return `${escape(el)}`;
    }
  })}</div>`;
});
export {
  Page as default
};
