const addSum = function(a, b, cb) {
    setTimeout(function(){
        if(typeof a !== "number" || typeof b !== "number"){
            cb("false")
        }
        cb(undefined, a+b)
    }, 3000)
}

let cb = (err, sum) => {
    if(err) console.log(err);
    console.log(sum);
}

addSum(2,"5", cb)