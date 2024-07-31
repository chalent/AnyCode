class Person {
    constructor(name) {
        this.name = name;
    }

    showDescr() {
        console.log(this.name + "是一个好人，他善良、勇敢、热心。")
    }
}

const zhangsan = new Person("张三");

zhangsan.showDescr();