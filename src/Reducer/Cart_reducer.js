const Cart_reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;
      // tackle the existing product
      let existingproduct = state.cart.find(
        (currentelm) => currentelm.id === id + color
      );

      if (existingproduct) {
        let updatedproduct = state.cart.map((currentitem) => {
          if (currentitem.id === id + color) {
            let newamount = currentitem.amount + amount;
            console.log(currentitem.max);
            if (newamount >= currentitem.max) {
              newamount = currentitem.max;
            }
            return { ...currentitem, amount: newamount };
          } else {
            return currentitem;
          }
        });
        return { ...state, cart: updatedproduct };
      } else {
        let Cartproduct;
        Cartproduct = {
          id: id + color,
          Name: product.name,
          color,
          amount,
          image: product.image[0].url,
          max: product.stock,
          price: product.price,
        };
        return { ...state, cart: [...state.cart, Cartproduct] };
      }

    // to set the increment and decrement
    case "SET_INCREASE":
      let updatedproduct = state.cart.map((currentdta) => {
        if (currentdta.id === action.payload) {
          let decrementamount = currentdta.amount + 1;
          if (decrementamount > currentdta.max) {
            decrementamount = currentdta.max;
          }
          return { ...currentdta, amount: decrementamount };
        } else {
          return currentdta;
        }
      });
      return { ...state, cart: updatedproduct };
    case "SET_DECREASE":
      let decupdatedproduct = state.cart.map((currentdta) => {
        if (currentdta.id === action.payload) {
          let decrementamount = currentdta.amount - 1;
          if (decrementamount < 1) {
            decrementamount = 1;
          }
          return { ...currentdta, amount: decrementamount };
        } else {
          return currentdta;
        }
      });
      return { ...state, cart: decupdatedproduct };
    //remove particular item
    case "REMOVE_ITEM":
      let updatedcart = state.cart.filter(
        (currentelm) => currentelm.id !== action.payload
      );
      return { ...state, cart: updatedcart };
    // to clear all cart data
    case "REMOVE_ALL_CARTDATA":
      return { ...state, cart: [] };
    //to cartitem and total price count
    case "CART_ITEM_PRICE_TOTAL":
      let { total_item, total_price } = state.cart.reduce(
        (accumulator, currentelm) => {
          let { price, amount } = currentelm;
          accumulator.total_item += amount;
          accumulator.total_price += price * amount;
          return accumulator;
        },
        { total_item: 0, total_price: 0 }
      );
      return {
        ...state,
        total_price,
        total_item,
      };
    default:
      return state;
  }
};
export default Cart_reducer;
