const MAX_ARRAY_INDEX = Math.pow(2, 53) - 1

 module.exports = function isArrayLike (list) {
    var length = list === null ? void 0 : list.length
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX
}