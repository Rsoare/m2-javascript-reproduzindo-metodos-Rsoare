
//          1) Multiplicando os numeros por 2 com metodo Map 

const arrayMethodMap = [13, 25, 61, 60, 27, 21, 45, 17, 31, 28]

function methodMap(array, callback) {
    let resultArray = []

    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        resultArray[index] = callback(currentValue, index, array)
    }
    return resultArray
}

function callBackMap(element, index, array) {
    return element * 2
}
console.log(methodMap(arrayMethodMap, callBackMap))






//                  2) Filtrando todos os numeros maiores que 20 com o metodo Filter

const methodFilterArray = [19, 63, 45, 17, 29, 50, 37, 97, 96, 16]

function methodFilter(array, callBack) {
    let elementFilter = []
    let newElementFilter = []
    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        elementFilter[index] = callBack(currentValue, index, array)
    }
    
    for (let i = 0; i < array.length; i++) {
        if (elementFilter[i] !== undefined) {
            newElementFilter.push(elementFilter[i])
        }
    }
    return newElementFilter
}

function callBackFilter(element, index, array) {
    if (element > 20) {
        return element
    }
}
console.log(methodFilter(methodFilterArray, callBackFilter))






//                  3) Filtrando o primeiro  numero maior que 20 com o metodo find

const methodFindArray = [19, 20, 10, 17, 49, 88, 70, 10, 51, 57]

function methodFind(array, callBack) {
    let elementFind = []

    for (let index = 0; index < array.length; index++) {
        const currentValue = array[index]
        elementFind[index] = callBack(currentValue, index, array)
    }

    for (let i = 0; i < elementFind.length; i++) {
        if (elementFind[i] !== undefined) {
            return elementFind[i]
        }
    }
}

function callbackFind(element, index, array) {
    if (element > 20) {
        return element
    }
}
console.log(methodFind(methodFindArray, callbackFind))





//                  4) realizando a soma do array usando o metodo reduce

const methodReduceArray = [93, 76, 37, 4, 22]
const positionIndexReduce = 0

function methodReduce(array, callBack, indexElement) {
    let accumulator = 0

    for (let index = indexElement; index < array.length; index++) {
        const currentValue = array[index];
        accumulator = callBack(accumulator, currentValue, array, index)
    }
    return accumulator
}

function callBackReduce(accumulator, element, array, index) {
    let total = accumulator
    total += element
    return total
}
console.log(methodReduce(methodReduceArray, callBackReduce, positionIndexReduce))







//                      5) Vericando se o numero esta dentro do array com o metodo includes.

const methodIncludesArray = [14, 64, 17, 47, 48, 51, 96, 92, 92, 16]
const searchNumberIncludes = 51
const positionIndexIncludes = 0

function methodIncludes(array, searchElement, indexElement) {

    for (let index = indexElement; index < array.length; index++) {
        if (array[index] == searchElement) {
            return true
        }
    }
    return false
}
console.log(methodIncludes(methodIncludesArray, searchNumberIncludes, positionIndexIncludes))






//6) Vericando o índice do primeiro numero encontrado dentro do array com o metodo indexOf

const methodIndexOfArray = [2, 7, 26, 65, 94, 49, 58, 77, 42, 24]
const positionIndexIndexOf = 0
const searchNumberIndexOf = 26

function methodIndex(array, indexElement, searchElement) {
    for (let index = indexElement; index < array.length; index++) {
        if (searchElement == array[index]) {
            return index
        }
    }
    return -1
}
console.log(methodIndex(methodIndexOfArray, positionIndexIndexOf, searchNumberIndexOf))