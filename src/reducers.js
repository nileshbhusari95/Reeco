const initialState = {
    products: [
        {
            productName: "Laptop",
            brand: "ABC",
            price: 1000,
            quantity: 2,
            total: 2000,
            status: "In Stock",
            id: 1
        },
        {
            productName: "Mobile Phone",
            brand: "XYZ",
            price: 500,
            quantity: 3,
            total: 1500,
            status: "Out of Stock",
            id: 2
        },
        {
            productName: "Tablet",
            brand: "DEF",
            price: 800,
            quantity: 4,
            total: 3200,
            status: "In Stock",
            id: 3
        },
        {
            productName: "Headphones",
            brand: "PQR",
            price: 200,
            quantity: 5,
            total: 1000,
            status: "In Stock",
            id: 4
        },
        {
            productName: "Smart Watch",
            brand: "LMN",
            price: 300,
            quantity: 2,
            total: 600,
            status: "Out of Stock",
            id: 5
        },

    ],
    searchValue: '',
}

const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        case 'SET_SEARCH_VALUE':
            return {
                ...state,
                searchValue: action.payload,
            };
        case 'APPROVE_PRODUCT':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload ? { ...product, status: "Approved" } : product
                ),
            };
        case 'MARK_AS_MISSING':
            return {
                ...state,
                products: state.products.map(product =>
                    product.id === action.payload ? { ...product, status: "Missing" } : product
                ),
            };
        default:
            return state;
    }
};

export default counterReducer;
