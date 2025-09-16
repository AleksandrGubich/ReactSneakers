import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./components/card/Card";
import { Drawer } from "./components/drawer/Drawer";
import { Header } from "./components/header/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    axios
      .get("https://68c45fba81ff90c8e61c0f7a.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://68c45fba81ff90c8e61c0f7a.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://68c45fba81ff90c8e61c0f7a.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => {
            setCartOpened(false);
          }}
          items={cartItems}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input
              placeholder="Поиск..."
              onChange={onChangeSearchInput}
              value={searchValue}
            />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item, i) => (
              <Card
                key={i}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onPlus={(obj) => {
                  onAddToCart(obj);
                }}
                onFavorite={() => {
                  console.log("Добавили в закладки");
                }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
