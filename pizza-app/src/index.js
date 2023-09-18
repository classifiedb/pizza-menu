//this file has to be named index.js because webex expects the first entry to be named index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; //webpex will automatically include the syles to the application

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

//creating app component (doesn't necessary have to be called app it's just a convention and has to be uppercase)
function App() {
  //since we can only return one element in a component (nesting component would help get all components together)
  return (
    //in jsx we use className, not class it's reserved already in JS
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

/**
 * *styling react Applications
 *Inline styling, css modules, or SAS, styled components, tailwinds, external css
 *inline css (in html we can use style => '') but in JSX we need to use javascript to style
 *style in javaScrtipt are like creating an object so they have to be in strings, also the css to js convention is from using dashes to camel case
 *The best and easiest way to style react is to add an external css file
 */

//header component
function Header() {
  // const style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}

  const style = {};

  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Italian Pizza Co.
      </h1>
    </header>
  );
}

/**
 * PASSING AND RECEIVING PROPS (prop = property)
 * Props - is the way of passing data between components (from parent to child components)
 * You can pass anything as a prop, it's not just a number or string it could be arrays
 *
 * 2 ways to define props
 * 1- pass props into the component
 * 2- receive the prop into the component we passed into
 *
 * props, immutability, and one-way data flow
 * - props are used to pass data from parent components to child components (down the component tree)
 * - Essential tool to configure and customize components (like function parameters)
 * - with props, parent components control how child components look and work
 * - Anything can be passed as props: single values, arrays, objects, functions, even other components
 *
 * (props are read-only) they are immutable!  this is one of react's strict rule (if you need to mutate props, you actually need state)
 *  - because props are objects, and when changes happen to the child they will affect the parent as well.
 *  - Mutating props would affect parent, creating side effects (not pure) (never mutate any date outside of it's function scope)
 *  - Components have to be pure functions in terms of props and state
 *  - This allows React to optimize apps, avoid bugs, make apps preddictable
 *
 * Props is data coming from the outside, and can only be updated by the parent component
 * state is internal data that can be updated by the component's logic
 */

//menu component
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu at Jakes Pizza</h2>
      <Pizza
        name="Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}

/**
 * CREATING COMPONENTS & REUSEABILITY
 * each component can only return one element (but they could be nested)
 * in react we write components using functions (two important rulesa; 1.function name has to start with uppercase letter 2. it has to return some markup)
 *
 * we could also write the components as arrow function or as declarative functions
 * const Test = () =>
 */

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

//footer component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("we're currently open!");
  //   else alert("sorry we're closed");

  return (
    <footer className="footern">
      {new Date().toLocaleDateString()}. We're Currenly Open
    </footer>
  );
  // return React.createElement("footer", null, "we are Currently open!");
}

//in future we won't be writing all this by hand
//this is how to render the root in react 18 which may differ to older react versions
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//before react 18 rendering looked like below
// React.render(<App />, document.getElementById("root"));

/**
 * Components as Building blocks in React
 * - everything in react is either a component or inside a component
 *
 * Components: react applications are entirely made ot of components
 *          - Bulding blocks of user interfaces in React
 *          - piece of UI that has its own data, logic, and appearance (how it works and looks)
 *          - we build complex UIs by building multiple components and combining them
 *          - Nesting and combining components is a key way of using components in react
 * Eg: question components, video component, (refine questions(parent component) --> filters (child component))
 */

/**
 * What is JSX
 * JSX: is a declarative syntax to describe what components look like and how they work
 *    - components must return a block of JSX
 *    - Extension of JavaScript that allows us to embed JavaScript CSS and React components into HTML
 *    - Each JSX element is converted to a React.createElement function call
 *    - we could actually use React without JSX
 *
 * JSX is DECLARATIVE: - Describe what UI should look like using JSX, based on current data
 *              - React is an abstraction away from DOM: we never touch the DOM
 *              - Instead, we think of the UI as a reflection of the current data
 *              (basically we tell React what we want on the screen, but not how)
 *
 * IMPERATIVE: manual DOM element selections and DOM traversing
 *          - Step-by-step DOM mutations until we reach the desired UI
 *            (vanilla react, basically tell react how to do things step by step)
 */

/**
 * 
      example of REUSING components
      <Pizza />
      <Pizza /> 
 */
