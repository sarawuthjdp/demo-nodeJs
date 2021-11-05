function getCurrentTime(){
    return new Date()
}

function add(x,y){
    return x+y
}

const minus = (x,y) => x-y

module.exports.getCurrentTime = getCurrentTime
module.exports.add = add
module.exports.minus = minus