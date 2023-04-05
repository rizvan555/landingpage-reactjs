import Frikadellen from "../resorce/images/frikadellen.jpeg";
import Glass from "../resorce/images/glass.jpeg";
import Pizza from "../resorce/images/pizza.jpeg";
import Pizza2 from "../resorce/images/pizza2.jpeg";
import Salat from "../resorce/images/salat.jpeg";
import Scampi from "../resorce/images/scampi.jpeg";
import Spagetthi from "../resorce/images/spagetthi.jpeg";
import Teller from "../resorce/images/teller.jpeg";

const footerMenu = [
  {
    image: Salat,
    foodName: "Quisque et felis eros",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    price: "$35/$45",
  },
  {
    image: Pizza,
    foodName: "Fusce dictum finibus",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    price: "$45/$55",
  },
  {
    image: Frikadellen,
    foodName: "Aliquam sagittis",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    price: "$45/$55",
  },
  {
    image: Glass,
    foodName: "Sed varius turpis",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    price: "$65/$75",
  },
  {
    image: Pizza2,
    foodName: "Sed varius turpis",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    price: "$20/$30",
  },
  {
    image: Scampi,
    foodName: "Aliquam sagittis",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    price: "$35/$45",
  },
  {
    image: Spagetthi,
    foodName: "Maeceanas eget justo",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    price: "$50/$60",
  },
  {
    image: Teller,
    foodName: "Maeceanas eget justo",
    contain:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    price: "$35/$45",
  },
];

const Footer = () => {
  return (
    <footer>
      <section className="footer-menu">
        {footerMenu.map((menu) => {
          return (
            <ul>
              <img src={menu.image} />
              <li>{menu.foodName}</li>
              <li>{menu.contain}</li>
              <li>{menu.price}</li>
            </ul>
          );
        })}
      </section>
    </footer>
  );
};

export default Footer;
