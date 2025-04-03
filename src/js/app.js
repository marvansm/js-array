
//! 1. Dairenin sahesini hesablayan areaOfCircle funksiyasi yaz.  (S=pi*r*r;  r-radiusdur, pi sabit deyisen)
//! 2. checkSeason adli funksiya yaz, bu funksiya parametr olaraq bir ay alsin,
//! ve neticede yaz,payiz, qis, yay oldugunu desin
//! 3. Dairenin uzunlugunu hesablayan lengthOfCircle funksiyasini yaz (l=2*pi*r)
//! 4.  maxNumber adli funksiya yaz ve parametr olaraq 3 argument alsin, netice
//! olaraq en boyuk ededi versin.

//! 1. Task dairenin sahesi

// function areaOfCircle(r) {
//     return Math.PI * r * r;
// }
// console.log (areaOfCircle(10))


//! 2.   Task fesiller

// function checkSeason (ay) {

//     switch (ay) {
//         case "dekabr":
//             console.log("qis");

//             break;
//         case "yanvar":
//             console.log("qis");

//             break;
//         case "fevral":
//             console.log("qis");

//             break;

//         default:
//             break;
//     }
// }
// let inp=document.getElementById ("inp")

// checkSeason(inp.value)


//!3 dairenin uzunlugu

// function lengthOfCircle(r) {
//    return 2 * Math.PI*r;
// }
// console.log (lengthOfCircle(40))


//! 4. Task en boyuk eded

// function maxNumber(eded1, eded2, eded3) {

//     return Math.max(eded1, eded2, eded3);
// }
// console.log(maxNumber(5, 6, 9));








//!Array
// let user = []

// user.push("mervan");
// user.push("kenan");
// user.push("orxan");
// user.push("yusif");




// function addDataToArray (ad) {
//     user.push (ad)
// }
// addDataToArray("salam")
// addDataToArray("salamsad")
// addDataToArray("salamasdad")
// addDataToArray("salamasdada")
// addDataToArray("salamasdadasd")
// console.log(user)








// ! Array

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]


// function bolme(array) {
//     for (let index = 0; index < array.length; index++) {

//         if(array[index]%3==0){
//             console.log(array[index])

//         }

//     }
// }


// bolme(a)

//! Bal Sistemi metodu

// let duzlerinSayi = Number(prompt("Duzgun cavablarin sayi?"))

// function balHesablayici(netice) {
//     if (netice > 100) {
//         console.log("A")

//     } else if (netice < 90) {
//         console.log("c")

//     } else if (netice > 90) {
//         console.log("b")
//     }

//     else {
//         console.log("Kesildiniz")
//     }
// }

// balHesablayici(duzlerinSayi);





// let users = []
// const melumatlar = { ad: "mervan", soyad: "memmedli", yas: 20, }
// users[0] = melumatlar;
// console.log(users)


// for (let index = 0; index < melumatlar.length; index++) {

//     index = users;
//     console.log(index[users])


// }

// !----------------! array

//  let GelenDatalar = [];

// GelenDatalar.push("mervan")
// GelenDatalar.push("sultan")
// GelenDatalar.push("eli")
// GelenDatalar.push("huseyn")
// GelenDatalar.push("huseyn2")
// GelenDatalar.push("huseyn3")
// GelenDatalar.push("huseyn4")

// ! console.log (GelenDatalar.includes("huseyn"));    Datanin olub olmamagin yoxluyur.

// !console.log (GelenDatalar.slice(1,3))   1-ci indexden basladi ve axrinci 3 cu indexi sildi.


// let filternumber = [1, 2, 3, 4, 6, 12, 32, 33, 45, 65, 65, 34, 23];
// let hesabla = filternumber.reduce((a, b) => a + b, 0)
// console.log (hesabla)
//! butun reqemleri toplayib cem gosterir   0 baslangic deyeridi


// let first = ["salam", "saol"]
// let second = ["salam", "orxan"]
// let conct = first.concat(second)

// console.log(conct)
//! birlesdirir concat


// let first = ["salam", "saol"]
// let second = ["salam", "orxan"]
// let conct =  [...first,...second]
// console.log (conct)  //!BIRlesdiri


//! Submit inputdan arraye data yollamag

//  var SubmitData = []
// const Name = document.querySelector("#name")
// const UserForm = document.querySelector("#user-form")

// UserForm.addEventListener("submit", (norefresh) => {
//     norefresh.preventDefault()
//     SubmitData.push(Name.value)
//     Name.value = "";


// console.log(SubmitData)
// }
// )

//! sort azdan coxa duzmek veya eksi

// let azdancoxa = [1, 2, 3, 4, 56, 7, 11, 99, 8, 5757, 345, 21, 31, 5, 6]
// azdancoxa.sort((a, b) => a - b)
// console.log(azdancoxa)



//!------------------------------------------------------------------------
// let persons = ["mervan", "sultan", "orxan", "maga"

// ]
// let kimlik = {
//     name: "sulta",
//     soyad: "sultanov",
//     yas: "20",
//     is: "berber"

// }
// kimlik.Unvan = "Bineqedi";

// persons.push(kimlik)

// console.log(persons[4])

// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let b = [1, 15, 3, 30, 5, 40, 7, 20, 9, 10]

// for (let y = 0; y < a.length; y++) {

//     let ortag=[]

//     for (let j = 0; j < b.length; j++) {
//         if(a[y]===b[j]){
//             ortag.push(b[j])

//         }

//     }


//     console.log(ortag)

// }



// ! Task
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let b = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// let empty = []


// for (let c = 0; c < a.length; c++) {

//     empty.push(a[c] + b[c])
// }

// console.log(empty)




// let a = [12, 1, 23, 123, 24, 14, 45, 564, 34, 23, "@", "%"];
// let b = [12, 1, 223, 123, 24, 14, 435, 564, 34, 23, "@"];
// let netice = [];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] === b[i]) {
//         netice.push(a[i],b[i])
//     }


// }
// console.log(netice)


// let a = [12, 1, 23, 123, 24, 14, 45, 564, 34, 23, "@", "%"];
// let b = [12, 1, 223, 123, 24, 14, 435, 564, 34, 23, "@"];
// let netice = [];

// for (let i = 0; i < a.length; i++) {
//     if (+a[i] === +b[i]) {
//         netice.push(a[i], b[i])
//     }


// }
// console.log(netice)






// let a = [12, 1, 23, 123, 24, 14, 45, 564, 34, 23, "@", "%"];
// let b = [12, 1, 223, 123, 24, 14, 435, 564, 34, 23, "@"];

//     if (a.length === b.length) {
//     console.log("berabedir")


// }else{
//     console.log("deyil");

// }





// let a = [12, 1, 23, 123, 24, 14, 45, 564, 34, 23, "@", "%"];
// let b = [12, 1, 223, 123, 24, 14, 435, 564, 34, 23, "@"];
// let netice = [];

// for (let i = 0; i < a.length; i++) {
//     if (a[0] === b[0]) {
//         console.log("beraberdir")
//     } else {
//         console.log("deyil")
//     }


// }




// let a = [12, 1, 23, 123, 24, 14, 45, 564, 34, 23, "@", "%", 99];
// let b = [12, 1, 223, 123, 24, 14, 435, 564, 34, 23, "@", 99];
// let netice = [];

// let cem = (a[a.length - 1] + b[b.length - 1])
// if (cem % 2 == 1) {
//     console.log("tek");

// } else {
//     console.log("cut");

// }

//! ------------------------task--------------

//! 1.


// let a = [1, 2, 3, 4, 5, 6, 7];
// let b = [4, 5, 6, 7, 8, 9, 2];
// let SameElements = [];

// SameElements = a.filter(num => b.includes(num));


// for (let i = 0; i < SameElements.length; i++) {
//     if (SameElements[i] % 2 === 0) {
//         console.log(SameElements[i], "cutdur")
//     } else {
//         console.log(SameElements[i], "tekdir")
//     }

// }

//! 2.

let minus = [0, 2, 4, 5, 7, -1, -4, -5, -20, -6, -100, -98, -12]

let Empty = []

for (let i = 0; i < minus.length; i++) {
    if (minus[i] < 0) {
        Empty.push(minus[i])
    }
}
Empty.sort((a, b) => b - a)
console.log(Empty)





