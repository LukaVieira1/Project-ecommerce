import "./DiscountScreen.css";

const DiscountScreen = (props) => {
  const { children } = props;

  return (
    <div className="title">
      <h1 className="title-storeName">Jaxons</h1>
      <div className="blackLine">
        <p className="title-discountText">{children}</p>
      </div>
      <h2 className="title-results">Search results</h2>
    </div>
  );
};

export default DiscountScreen;
