function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

console.log (saturdayFun())

let mondayWork = function (work = 'go to the office'){
    return`This Monday, I will ${work}.`
}
console.log(mondayWork());


function wrapAdjective(val="*"){
   return function(arg=special){
      return `You are ${val}${arg}${val}!`
    }
}
console.log(wrapAdjective())
