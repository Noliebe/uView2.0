export function zbTab() {
  let _lists = [];
  _lists.push({
    name: "产品列表",
    index: 0,
  });
  _lists.push({
    name: "报告列表",
    index: 1,
  });
  return _lists;
}
export const stateOptionList = [
  {
    label: "全部状态",
    id: "",
  },
  {
    label: "未发布",
    id: 0,
  },
  {
    label: "已发布",
    id: 1,
  },
];

export const getDefParamsData = (data) => ({
  page_no: 1,
  page_size: 15,
  // 搜索
  content: "",
  // 状态
  type: "",
  // 时间id
  start_time: "",
  end_time: "",
  ...data,
});
