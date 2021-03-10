import { def } from "./utils";
import defineReactive from "./defineReactive";
import array from "./array";

export default class Observer {
    constructor(value) {
        // 给实例添加了__ob__属性，值是这次new的实例
        def(value, '__ob__', this, false);
        // console.log('我是Observer构造器', value)
        // Observer类的目的：将一个正常的object转换为每个层级的属性都是响应式的object
        this.walk(value);
    }

    walk(value) {
        for (let k in value) {
            defineReactive(value, k);
        }
    }
}
