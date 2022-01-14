import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <div className="cards">
      <Card
        title="Jordan"
        description="Air Jordan 1 Retro Premium"
        price="$ 756"
        shoe="Yellow"
      ></Card>
      <Card
        title="Jordan"
        description="Air Jordan 2 Retro Premium"
        price="$ 556"
        shoe="White"
      ></Card>
      <Card
        title="Jordan"
        description="Air Jordan 3 Retro Premium"
        price="$ 456"
        shoe="Brown"
      ></Card>
      <Card
        title="Jordan"
        description="Air Jordan 4 Retro Premium"
        price="$ 356"
        shoe="Black"
      ></Card>
    </div>
  );
}

export default App;
