export default (price: string) => {
    const lastI = price.lastIndexOf(',')
    const priceWithoutEnd = price.substr(0, lastI)
    return +priceWithoutEnd.split(' ').join('')
}