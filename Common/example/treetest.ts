export {};
type Data = { com_created_at: number[] };
type ChildrenD = Data & { children: Data[] };
const data = [
  { com_created_at: [1] },
  { com_created_at: [2] },
  { com_created_at: [1, 3] },
  { com_created_at: [1, 4] },
  { com_created_at: [1, 3, 5] },
  { com_created_at: [1, 3, 5, 6] },
  { com_created_at: [2, 7, 0] },
  { com_created_at: [2, 7] },
];

const commentsTree = (arr: Data[]) => {
  // 우선 length 긴 애들부터 재배치 한다. 자식요소들 시간순으로 고정배치되도록함
  arr = arr.sort((a, b) => {
    const ac = a.com_created_at;
    const bc = b.com_created_at;
    if (ac.length === bc.length) return bc[bc.length - 1] - ac[ac.length - 1];
    return bc.length - ac.length;
  });

  const lengthOne = arr.filter((highData) => {
    arr.forEach((data) => {
      const h = highData.com_created_at;
      const d = data.com_created_at;
      /** 중복제거 */
      const duplePrevent = !(highData as ChildrenD).children
        ?.map((el) => el.com_created_at[el.com_created_at.length - 1])
        .includes(d[d.length - 1]);

      // 부모요소의 끝에부분과 자식요소의 끝에서 두번째 부분이 일치 하고 & 중복요소가 포함되지 않도록 조건을 건다.
      if (h[h.length - 1] === d[d.length - 2] && duplePrevent) {
        (
          (highData as ChildrenD).children ||
          ((highData as ChildrenD).children = [])
        ).push(data);
      }
    });

    // 마지막에 one depth 인 요소만 남긴다
    return highData?.com_created_at?.length === 1;
  });
  return lengthOne;
};

console.log(commentsTree(data));
