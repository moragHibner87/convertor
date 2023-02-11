/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputVal = document.querySelector('#input-val')
const convertBtn = document.querySelector('#convert-btn')
const boxMeter = document.querySelector('.box-meter p')
const boxLiter = document.querySelector('.box-liter p')
const boxKilo = document.querySelector('.box-kilo p')

convertBtn.addEventListener('click', function(){
    let Val = inputVal.value
    renderUiMeter(Val)
    renderUiLiter(Val)
    renderUiKilo(Val)
})

//renderUiMeter
function renderUiMeter(num){
     //calc
     function calcFeet(num){
        let result = 3.281 * num
        return result.toFixed(3)
    }
    function calcMeter(num){
        let result = num / 3.281
        return result.toFixed(3)
    }
    //render
    boxMeter.innerHTML = `
     <p>${num} meters = ${calcFeet(num)} feet | ${num} feet = ${calcMeter(num)} meters</p>
    `
}

//renderUiLiter
function renderUiLiter(num){
     //calc
     function calcGalon(num){
        let result = num * 0.264
        return result.toFixed(3)
    }
    function calcLiter(num){
        let result = num / 0.264
        return result.toFixed(3)
    }
    //render
    boxLiter.innerHTML = `
     <p>${num} liters = ${calcGalon(num)} gallons | ${num} gallons = ${calcLiter(num)} liters</p>
    `
}

//renderUiKilo
function renderUiKilo(num){
     //calc
     function calcPound(num){
        let result = num * 2.204
        return result.toFixed(3)
    }
    function calcKilo(num){
        let result = num / 2.204
        return result.toFixed(3)
    }
    //render
    boxKilo.innerHTML = `
     <p>${num} kilos = ${calcPound(num)} pounds | ${num} pounds = ${calcKilo(num)} kilos</p>
    `
}