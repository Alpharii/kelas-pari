//looping 1 - 5

let nama = "kalam"

// ["k", "a", "l", "a", "m"]


// for(let i=0; i < nama.length; i++){
//     console.log("looping ke", i)
//     console.log("huruf ke", i+1, ": ", nama[i])
// }

// for(let i=0; i < 5; i++){
//     console.log('i', i)
// }

// console.log(nama.length)

// for(let i=nama.length; i >= 0; i--){
//     console.log(nama[i])
// }

let arr = [["abc", "def"], ["hij", "klm"], ['zzz', 'yyy', 'xxx', '091']]
// console.log('array', arr[2][2][1])
// console.log('arr', arr[0][0][0])


// console.log('data', arr)

// let temp = ""
// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[i].length; j++){
//         console.log("temp sekarang =", temp)
//         console.log("yang ditambah ke temp =", arr[i][j])
//         temp += arr[i][j]
//     }
// }
// console.log(temp)



// }


// array

// kumpulan data bisa String, number, object atau array lagi
// selalu dimulai dari index ke 0
let count = 1;

// while(count <= 3){
//     console.log("Hitung: " + count);
//     count++;
// }

// let isTrue = true

// while(isTrue === true){
//     console.log("Hitung: " + count);
//     count++;
//     if(count ===3){
//         isTrue = false
//         break
//     }
// }

let lists = ["1", "2", "3"]

lists.push(4)

console.log(lists)

lists.pop()

console.log(lists)

lists = lists.join("+")
console.log(lists)
lists = lists.split("+")
console.log(lists)

let names = "Muhammad Rayhan Kalam"
let arrName = names.split(" ")
console.log(arrName)

// let namaAsal = "abcabcabc"

// console.log(namaAsal.split("a"))

