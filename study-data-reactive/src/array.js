import { def } from "./utils";

// 得到Array.prototype
const arrayPrototype = Array.prototype;

// 以Array.prototype为原型，创建arrayMethods对象
export const arrayMethods = Object.create(arrayPrototype);
// console.log(arrayMethods);

const methodsNeedChange = [
    'push',
    'pop',
    'shift',
    'unshift',
    'splice',
    'sort',
    'reverse'
]

methodsNeedChange.forEach(methodName => {
    // 备份原来的方法
    const original = arrayPrototype[methodName];
    // 定义新的方法
    def(arrayMethods, methodName, function () {
        console.log('啦啦啦');
        original.apply(this, arguments);
    }, false);
})
