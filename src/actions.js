// actions.js

export const increment = () => {
    return {
      type: 'INCREMENT',
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT',
    };
  };
// actions.js

export const deleteProduct = (productId) => {
    return {
      type: 'DELETE_PRODUCT',
      payload: productId,
    };
  };

  export const setSearchValue = (value) => {
    return {
      type: 'SET_SEARCH_VALUE',
      payload: value,
    };
  };
  
  export const approveProduct = (productId) => {
    return {
      type: 'APPROVE_PRODUCT',
      payload: productId,
    };
  }