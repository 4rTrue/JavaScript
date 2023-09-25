let num = [1,5,4,12,27]

num.sort()

for(let c in num){
    console.log(`${c} -> ${num[c]}`)
}

var ind = num.indexOf(5)

console.log(`o indice do valor 5 é ${ind}`)