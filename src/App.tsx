import './index.css';
import { pizzaData, pizzaInterface } from '../public/data.ts';

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1 style={{ fontSize: '4em' }}> Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 14;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);
  const pizzas = pizzaData;
  return (
    <footer className="footer">
      {isOpen && pizzas.length > 0 ? (
        <Order closingHour={closeHour} />
      ) : (
        <p>
          We're happpy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closingHour }: { closingHour: number }) {
  return (
    <div className="order">
      <p>We're open untill {closingHour}:00. Come visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}
function Pizza({ pizza }: { pizza: pizzaInterface }) {
  const { pizzaImageUrl, name, ingredients, price } = pizza;
  return (
    <figure className={`pizza ${pizza.soldOut && 'sold-out'}`}>
      <img src={pizzaImageUrl} alt={name} />
      <figcaption className="pizza-information">
        <p className="pizza-name">{name}</p>
        <p className="pizza-ingredients">{ingredients}</p>
        {pizza.soldOut ? <span> SOLD OUT</span> : <span>₹ {price} /-</span>}
      </figcaption>
    </figure>
  );
}
function Menu() {
  const pizzas = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzas.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <div className="pizzas">
            {pizzaData.map((pizza: pizzaInterface) => {
              return <Pizza pizza={pizza} key={pizza.name} />;
            })}
          </div>
        </>
      ) : (
        <p> We are still working on the menu. Please come back later 😊.</p>
      )}
    </main>
  );
}

export default App;
