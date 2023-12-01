"use strict";

const titleCondition = {
  ref: (e) => {
    const ellipsisStyle = (e) => {
      // ellipsisStyle
      e.style.overflow = "hidden";
      e.style.textOverflow = "ellipsis";
      e.style.whiteSpace = "nowrap";
      e.style.display = "block";
      e.title = e.innerText; // title tag

      return e;
    };

    // if have children
    const depth = (currentTarget) => {
      if (currentTarget) {
        const { clientWidth, scrollWidth, children } = currentTarget;

        if (!children?.length && currentTarget?.innerText && clientWidth < scrollWidth) {
          ellipsisStyle(currentTarget);
        } else {
          Array.prototype.filter.call(children, (el) => depth(el));
        }
      }
    };

    if (e) {
      const { children } = e;

      if (!children.length) {
        if (e.clientWidth < e.scrollWidth) {
          ellipsisStyle(e);
        }
      } else {
        depth(e);
      }
    }
  },
};

export default titleCondition;
