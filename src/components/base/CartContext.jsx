import React, { createContext, useState } from "react";

export const CartContext = React.createContext();
export const ContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [items, setItems] = useState(0);
  const [notification, setNotification] = useState('');
  const [searchText, setSearchText] = useState("");

  // function to send alert message on add to cart action
  const sendNotification = () => {
    setNotification('Item added to your cart!');
    setTimeout(() => {
      setNotification("");
    }, 1000);
  };

  // function to add to cart
  const addToCart = (prod) => {
    // set the item count in the cart
    setItems((prevCount) => prevCount + 1);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === prod.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...prod, quantity: 1 }];
      }
    });

    sendNotification();
  };

  // function to remove from cart
  const removeFromCart = (prod) => {
    setItems((prevCount) => prevCount - 1);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === prod.id);

      if (existingItem && existingItem.quantity > 1) {
        return prevItems.map((item) =>
          item.id === prod.id ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevItems.filter((item) => item.id !== prod.id);
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        items,
        setItems,
        cartItems,
        addToCart,
        notification,
        removeFromCart,
        searchText,
        setSearchText
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
