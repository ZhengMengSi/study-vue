import observe from "./observe";


var obj = {
    a: {
        m: {
            n: 5
        }
    },
    b: 10,
    g: [22,33,44,55]
};

observe(obj);
// console.log(obj.a.m)
obj.g.push(66)
