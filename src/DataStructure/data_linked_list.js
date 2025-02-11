// 定义 链表节点类(Node)
class Node {
  constructor(data) {
    this.data = data;  // 节点数据
    this.next = null;  // 指针
  }
}

// 定义 链表(LinkedList)
/**
 * 链表特点：长度可变，每个链表节点包含一个指向下一个节点的指针(双向链表会多一个指向上一个节点的指针)，因此节点在内存中地址不一定连续
 * 常用方法：获取所有节点、查询特定节点、向头部添加一个节点、向尾部添加一个节点、删除特定节点、
 */
class LinkedList {

  constructor() {
    this.head = null;  // 头部节点，初始为空
  }

  // 添加一个节点
  append(data) {
    const newNode = new Node(data);
    
    if(this.head == null) {
      // 头部节点为空，设置新节点为头部节点
      this.head = newNode;  
    } else {
      let current = this.head;
      // 遍历链表到最后一个节点
      while(current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
   
  }

  // 向头部添加一个节点
  prepend(data) {
    const newNode = new Node(data);  // 创建新节点
    newNode.next = this.head;
    this.head = newNode;
  }

  // 删除特定节点
  delete(data) {
    if(this.head == null) {
      return;  // 若当前链表为空，直接返回
    }

    // 若删除的是头部节点
    if(data == this.head.data) {
      this.head = this.head.next;  // 直接将头部节点执行其下一个节点
    }

    let current = this.head;
    while(current.next && current.next.data != data) {
      current = current.next;
    }

    if(current.next == null) {
      console.log("当前列表不存在目标节点");
    } else {
      current.next = current.next.next;
    }
  }

  // 获取所有节点
  getList() {
    let result = [];
    if(this.head == null) {
      return result;
    }

    let current = this.head;
    while(current.next) {
      result.push(current.data);
      current = current.next;
    }
    result.push(current.data);
    return result;
    console.log(result.join("->"));  // 打印链表所有数据
  }

  // 查找特定节点
  find(data) {
    let current = this.head;
    while(current) {
      if(current.data == data) {
        return current.data;
      }
      current = current.next;
    }
    return null;
  }

}

export default LinkedList;
