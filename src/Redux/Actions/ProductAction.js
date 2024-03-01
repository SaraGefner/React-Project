

export const ADD_QTY = (index) => {
    return{
        type: "ADD_QTY",
        index
    }
}

export const DECREASE_QTY = (index) => {
    return{
        type: "DECREASE_QTY",
        index
    }
}

// export const changeProductName = (name, index) => {
//     return{
//         type: "CHANGE_PRODUCT_NAME",
//         name,
//         index
//     }
// }

// export const changeProductPrice = (price, index) => {
//     return{
//         type: "CHANGE_PRODUCT_PRICE",
//         price,
//         index
//     }
// }

