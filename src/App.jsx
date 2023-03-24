import { Provider } from "react-redux";
import store from "./coffee-shop-redux/store";
import Layout from "./Layout/Layout";
const products = [
  {
    id: 1,
    name: "traditional espresso",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/tradicional.png",
    description: "Traditional coffee made with hot water and ground beans",
    categories: ["traditional"],
    price: 9.9,
  },
  {
    id: 2,
    name: "American espresso",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/americano.png",
    description: "Diluted espresso, less intense than the traditional one",
    categories: ["traditional"],
    price: 9.9,
  },
  {
    id: 3,
    name: "creamy espresso",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/cremoso.png",
    description: "Traditional espresso with creamy foam",
    categories: ["traditional"],
    price: 9.9,
  },
  {
    id: 4,
    name: "Iced Espresso",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/gelado.png",
    description: "Drink prepared with espresso coffee and ice cubes",
    categories: ["traditional", "ice cream"],
    price: 9.9,
  },
  {
    id: 5,
    name: "Coffee with milk",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/leite.png",
    description: "Traditional coffee made with hot water and ground beans",
    categories: ["traditional",'with milk'],
    price: 9.9,
  },
  {
    id: 6,
    name: "Latte",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/latte.png",
    description: "A shot of espresso with twice as much milk and creamy foam",
    categories: ["traditional","WITH MILK"],
    price: 9.9,
  },
  {
    id: 7,
    name: "Cappuccino",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/capuccino.png",
    description: "Cinnamon drink made from equal doses of coffee, milk and foam",
    categories: ["traditional", "with milk"],
    price: 9.9,
  },
  {
    id: 8,
    name: "macchiato",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/macchiato.png",
    description: "Espresso coffee mixed with a little hot milk and foam",
    categories: ["traditional", 'with milk'],
    price: 9.9,
  },
  {
    id: 9,
    name: "Moccacino",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/mocaccino.png",
    description: "Espresso coffee with chocolate sauce, a little milk and foam",
    categories: ["traditional", 'with milk'],
    price: 9.9,
  },
  {
    id: 10,
    name: "Hot chocolate",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/chocolate.png",
    description: "Drink made with chocolate dissolved in hot milk and coffee",
    categories: ["special", "with milk"],
    price: 9.9,
  },
  {
    id: 11,
    name: "Cuban",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/cubano.png",
    description: "Iced espresso drink with rum, cream and mint",
    categories: ["special", 'alcoholic', 'ice cream'],
    price: 9.9,
  },
  {
    id: 12,
    name: "Haawaiian",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/havaiano.png",
    description: "Sweet drink prepared with coffee and coconut milk",
    categories: ["special"],
    price: 9.9,
  },
  {
    id: 13,
    name: "Arabic",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/arabe.png",
    description: "Drink prepared with Arabic coffee beans and spices",
    categories: ["special"],
    price: 9.9,
  },
  {
    id: 14,
    name: "Irish",
    imageURL: "https://coffe-delivery-lemon.vercel.app/coffees/irlandes.png",
    description: "Drink based on coffee, Irish whiskey, sugar and whipped cream",
    categories: ["special", 'alcoholic'],
    price: 9.9,
  },
];
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Layout products={products} />
      </div>
    </Provider>
  );
};

export default App;
