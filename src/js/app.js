
// function butunMelumatlar(ad, soyad, yas, is) {
//     this.ad = ad
//     this.soyad = soyad
//     this.yas = yas
//     this.is = is
//     this.butunMelumatlar = function () {
//         console.log(this.ad, this.soyad, this.yas, this.is)
//     }
// }

// let user = new butunMelumatlar("Mervan", "Memmedli", 23, "telebe")

// user.butunMelumatlar ();


class animals {
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    typeanimal() {
        if (this.name === "lion") {
            console.log("sir hemmise sirdir")
        } else {
            console.log(this.name)
        }
    }
}
let animal = new animals("monkey");

animal.typeanimal();


class animalsCategory {
    constructor(name, type) {
        this.type = type
        this.name = name


    }
    categoryanimal() {
        if (this.name === "lion") {
            console.log(this.type = "wild")
        } else if (this.name === "cat") {
            console.log(this.type = "Domestic")
        } else if (this.name === "shark") {
            console.log(this.type = "Water Animal")
        } else {
            console.log("Other Animal")
        }
    }




}


let category = new animalsCategory("lion", "wild");
let category2 = new animalsCategory("cat", "Domestic");
let category3 = new animalsCategory("shark", "Water Animal");

category.categoryanimal()
category2.categoryanimal()
category3.categoryanimal()