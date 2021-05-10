const numbersToPrice = (num: number) => {
    const reverseArr = num.toString().split('').reverse()
    const result: Array<string> = []
    reverseArr.forEach((num, index) => {
        result.push(num)
        if((index + 1) % 3 === 0){
            result.push(' ')
        }
    })
    return result.reverse().join('') + ',00'
}

export default numbersToPrice