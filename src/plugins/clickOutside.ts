/**
 * @Author Mario Krause
 * @file resources\plugins\clickOutside.ts
 * @description Global directive for click outside elements
 * @created 13.07.2022
 * @last_edit: 13.07.2022
 */
export const clickOutside = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  beforeMount: (el: any, binding: any) => {
    el.clickOutsideEvent = (e: { target: any; currentTarget: never }) => {
      // Get the handler method name and the exclude array
      // from the object used in v-closable
      const { handler, exclude } = binding.value
      // This variable indicates if the clicked element is excluded
      let clickedOnExcludedEl = false
      // if the target element has no classes, it won't be in the exclude list: skip the check
      if(e.target.classList.contains(exclude))
        clickedOnExcludedEl = true;

      // don't call the handler if our directive element contains the target element
      // or if the element was in the exclude list
      if (!(clickedOnExcludedEl || el.contains(e.target))) {
        handler()
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: (el: { clickOutsideEvent: (this: Document, ev: MouseEvent) => any }) => {
    document.removeEventListener("click", el.clickOutsideEvent);
  },
};
