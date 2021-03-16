import { def } from "./utils";
import defineReactive from "./defineReactive";
import { arrayMethods } from "./array";
import observe from "./observe";

export default class Observer {
    constructor(value) {
        // 给实例添加了__ob__属性，值是这次new的实例
        def(value, '__ob__', this, false);
        // console.log('我是Observer构造器', value)
        // Observer类的目的：将一个正常的object转换为每个层级的属性都是响应式的object
        if (Array.isArray(value)) {
            Object.setPrototypeOf(value, arrayMethods)
            // 让这个数组变的observe
            this.observeArray(value);
        } else {
            this.walk(value);
        }
    }

    walk(value) {
        for (let k in value) {
            defineReactive(value, k);
        }
    }

    // 数组的特殊遍历
    observeArray(arr) {
        for (let i = 0, l = arr.length; i < l; i++) {
            observe(arr[i]);
        }
    }
}
