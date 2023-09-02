export default function CartReducer({ cart, action }) {
  switch (action.type) {
    case "empty cart":
      return [];
    case "add to cart": {
      const { id, sku } = action; // Destructuring
      const itemInCart = cart.find((i) => i.sku === sku);
      if (itemInCart) {
        // Return new array with the matching item replaced
        return cart.map((i) =>
          i.sku === sku ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Return new array with the new item appended
        return [...cart, { id, sku, quantity: 1 }];
      }
    }
    case "update quantity": {
      const { sku, quantity } = action;
      //current state is named cart hence the name change from items to cart(ie. app.jsx)
      return quantity === 0
        ? cart.filter((i) => i.sku !== sku)
        : cart.map((i) => (i.sku === sku ? { ...i, quantity } : i));
    }
    default:
      throw new Error("Unhandled action " + action.type);
  }
}
