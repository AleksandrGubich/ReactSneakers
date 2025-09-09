import { Card } from "./components/card/Card";
import { Drawer } from "./components/drawer/Drawer";
import { Header } from "./components/header/Header";

const arr = [
  {
    title: "Крос 1",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Крос 2",
    price: 15600,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Крос 3",
    price: 8600,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Крос 4",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
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
