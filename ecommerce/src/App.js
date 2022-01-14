import "./App.css";
import Card from "./components/Card/Card";
import GetData from "./assets/dataHelper";

function App() {
  const data = GetData();
  console.log(data);

  return (
    <div className="cards">
      {data?.map((card) => (
        <Card
          key={card.id}
          title={card.brand}
          description={card.name}
          price={card.price}
          currency={card.currency}
          shoeImg={card.image}
        />
      ))}
    </div>
  );
}

export default App;
