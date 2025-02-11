import LinkedList from "./data_linked_list.js";

// 链表测试
document.getElementById("btn_linked").addEventListener("click", function () {
  const linkedList = new LinkedList();
  console.log("第一次打印链表：", linkedList.getList());

  // 添加节点
  linkedList.append("A");
  linkedList.append("B");
  console.log("尾部添加节点后打印：", linkedList.getList());

  // 头部添加节点
  linkedList.prepend(3);
  linkedList.prepend(2);
  linkedList.prepend(1);
  console.log("头部添加节点后打印：", linkedList.getList());

  // 删除特定节点
  linkedList.delete(2);
  console.log("删除特定节点后打印：", linkedList.getList());

  // 查找特定节点
  const target1 = linkedList.find(2);
  const target2 = linkedList.find("A");
  console.log("查找特定节点", target1, target2);
});
