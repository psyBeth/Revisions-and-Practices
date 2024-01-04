console.log("***CALCULATE JS****");

const calculatePrice = (products) => {
    return products.reduce((acc, producst) => acc + producst.price, 0)
}