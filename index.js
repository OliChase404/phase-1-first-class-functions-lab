
const arr = ['Antonia', 'Nuru', 'Amari', 'Mo']


const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    let last = (drivers.length - 1)
    let secondLast = (drivers.length -2)
    return drivers.slice(secondLast, last + 1)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(x){
    return function(y){
        return y * x
    }
}

function fareDoubler(x){
    return x * 2
}

function fareTripler(x){
    return x * 3
}


function selectDifferentDrivers(arr, func){
    return func(arr)
}