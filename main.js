const isArrayLike = require('./_isArrayLike')  

const _ = {}


_.bloop = (newData, body) => {
    return (data, iteratee) => {
        let result = newData(data)
        if (isArrayLike(data)) {
            for (let i = 0; i < data.length; i++) {
                body(iteratee(data[i], i, data), result)
            }
        } else {
            for (let key in data) {
                if (data.hasOwnProperty(key)) body(iteratee(data[key], key, data), result)
            }
        }
        return result
    }
}

_.map = _.bloop(() => [], (val, obj) => obj.push(val))

_.each = _.bloop((v) => v, function() {})