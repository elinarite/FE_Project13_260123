//DZ. 0. Наполнить массив products подобными объектами, с разными значениями
const products = [
    {
        id: 1,
        name: "Iphone 14",
        price: 100000,
        category: "phone"
    },
    {
        id: 2,
        name: "Iphone 12",
        price: 90000,
        category: "mobile"
    },
    {
        id: 3,
        name: "Iphone 12",
        price: 80000,
        category: "phone"
    }
]


    
//  1. Есть массив объектов products. Вывести название и цену каждого товара в консоли со
//     скидкой 10%

// for (let i = 0; i < products.length; i++) {
//     let priceNew = products[i].price / 100 * 90
//     console.log(products[i].name, priceNew)
// }
// 2. Есть массив объектов products. Из этого массива добавить в новый пустой массив только те
//         продукты:
//             а)цена которых больше 88000; const moreThanPrice = [] нужно заполнить данный массив
//             б) категория который "phone"; const moreThanPrice = []
// const moreThanPrice = []
// for (let i = 0; i < products.length; i++) {
//     if ((products[i].price > 88000) && (products[i].category.includes('phone')))
//     moreThanPrice.push(products[i])
// }
// console.log(moreThanPrice)



//3. Создать функцию, которая получает два числа в параметры и выводит в консоль бОльшее из них
//         max(10, 20) // 20
//         max(100, 5) // 100
// const a = 10
// const b = 20
// function max (a, b){
//     if (a > b){
//         console.log(a)
//     }else {
//         console.log(b)
//     }
// }
// max(a,b);

//4. Написать функцию, которая запрашивает число у пользователя и отображает "ЧЕТ", если число четное
//         и "НЕЧЕТ", если нечетное

// function divide(){
// let a = +prompt ("Enter number 1")
// if (a % 2 == 0) {
//     console.log("ЧЕТ")
// }else {
//     console.log ("НЕЧЕТ")
// }
// }
// divide();

//5. Написать функцию, которая получает два числа и возводит первое число в степень второго
//         power(10, 2) // 100
//         power(12, 2) // 144
//         power(2, 5) // 32

function power (a, b){
    console.log(Math.pow(a, b))
}
power(10, 2)
power(12, 2)
power(2, 5)

