import "./App.css";
import Card from "./components/Card/Card";
import GetData from "./assets/dataHelper";
import DiscountScreen from "./components/DiscountScreen/DiscountScreen";

function App() {
  const data = GetData();
  console.log(data);
  return (
    <>
      <DiscountScreen>
        30% Discount on all products till 31st of december
      </DiscountScreen>
      <div className="cards">
        {data?.map((card) => (
          <Card
            key={card.id}
            title={card.brand}
            description={card.name}
            price={card.price}
            currency={card.currency}
            shoeImg={card.image}
            shoeId={card.id}
          />
        ))}
      </div>
    </>
  );
}

export default App;
