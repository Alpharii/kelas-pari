// let temp = ""
if(true){
    let nama = "bintang" 
}


let input = 5

// && > AND
// || > OR

if(input > 0 && input % 2 === 0){
    console.log("input adalah positi dan bilangan genap")
}

// if(input > 0){
//     if(input % 2 === 0){
//         console.log("input adalah positi dan bilangan genap")
//     }
// }

if(input > 0 || input % 2 === 0){
    console.log("input adalah positif atau bilangan genap")
}


let str = "abc"

str += "aba"

console.log(str)

const length = str.length
console.log('panjang str= ' + length )
const hurufPertama = str[str.length - 1]

console.log("huruf pertama",hurufPertama)

console.log(str)

if(str === "abcaba"){
    console.log("input adalah abcabc")
}


let angka = 12345

angka = String(angka)

const num = 10

console.log((num + "").l)

const angkalen = angka.length
console.log(angka.length)

angka = Number(angka)
angka += 1
console.log(`angka = ${angka} panjang = ${angkalen} `)

