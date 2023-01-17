// değişkenler
let randomNumber = Math.ceil(Math.random() * 100)
const input = document.querySelector('.input')
const buton = document.querySelector('.input-con button')
let live = 6

console.log(buton)

// 1- 100 arasında sayı tut

console.log(randomNumber)

buton.addEventListener('click', () => {
  console.log(+input.value)
  live--

  console.log('can', live)

  // kazanma durumu
  if (+input.value === randomNumber) {
    console.log('Bildiniz')
  }

  // tahmin edilen sayı küçükse

  if (+input.value < randomNumber) {
    console.log('arttır')
  }

  // tahmin edilen sayı büyükse

  if (+input.value > randomNumber) {
    console.log('azalt')
  }

  // can bitince
  if (live == 0) {
    console.log('kaybettiniz can bitti')
  }
})
