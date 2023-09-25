let num = [5,8,3,7,9]

num.sort()
num.push(1)

console.log(`nosso vetor é o (${num})`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)

for (var c = 0; c <num.length;c++){
    console.log(num[c])
}