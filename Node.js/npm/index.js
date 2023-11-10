"use strict";

const titleCondition = {
  ref: (e) => {
    const ellipsisStyle = (e) => {
      e.style.overflow = "hidden";
      e.style.textOverflow = "ellipsis";
      e.style.whiteSpace = "nowrap";
      e.style.display = "block";
      return e;
    };
    if (e) {
      if (e.clientWidth < e.scrollWidth) {
        ellipsisStyle(e);
      }
    }
  },
  onFocus: (e) => {
    e.stopPropagation();
  },
  onMouseOver: (e) => {
    e.stopPropagation();
    if (
      !e.currentTarget.children.length &&
      e.currentTarget.innerText &&
      e.currentTarget.clientWidth < e.currentTarget.scrollWidth
    ) {
      e.currentTarget.title = e.currentTarget.innerText;
    }
  },
};

export default titleCondition;
