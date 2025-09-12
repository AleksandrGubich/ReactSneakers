import { useState } from "react";
import { Card } from "./components/card/Card";
import { Drawer } from "./components/drawer/Drawer";
import { Header } from "./components/header/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  fetch("https://68c45fba81ff90c8e61c0f7a.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onClose={() => {
            setCartOpened(false);
          }}
        />
      )}
      <Header
        onClickCart={() => {
          setCartOpened(true);
        }}
      />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onPlus={() => {
                console.log("Нажали плюс");
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
