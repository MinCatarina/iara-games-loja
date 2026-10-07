import { createContext, useContext, useMemo } from "react";
import useLocalStorage from "../utils/useLocalStorage";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  // carrinho: [{ id, qtd }]  |  favoritos: [id, id, ...]
  const [items, setItems] = useLocalStorage("iara-cart", []);
  const [favorites, setFavorites] = useLocalStorage("iara-favorites", []);

  const value = useMemo(() => {
    const addToCart = (id) =>
      setItems((prev) =>
        prev.some((i) => i.id === id)
          ? prev.map((i) => (i.id === id ? { ...i, qtd: i.qtd + 1 } : i))
          : [...prev, { id, qtd: 1 }]
      );

    const changeQty = (id, delta) =>
      setItems((prev) =>
        prev
          .map((i) => (i.id === id ? { ...i, qtd: i.qtd + delta } : i))
          .filter((i) => i.qtd > 0)
      );

    const removeFromCart = (id) => setItems((prev) => prev.filter((i) => i.id !== id));
    const clearCart = () => setItems([]);

    const toggleFavorite = (id) =>
      setFavorites((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

    return {
      items,
      favorites,
      count: items.reduce((sum, i) => sum + i.qtd, 0),
      addToCart,
      changeQty,
      removeFromCart,
      clearCart,
      toggleFavorite,
    };
  }, [items, favorites, setItems, setFavorites]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart deve ser usado dentro de <CartProvider>");
  return ctx;
};
