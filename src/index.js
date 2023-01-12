module.exports = function reverse (n) {
    let reversed = n.toString().split('').reverse()
    if (n < 0){
        reversed.pop()
        return reversed.join('')
    }
  return reversed.join('')
}
