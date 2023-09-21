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
    soldOut: true,
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
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  /**
   * - outside the return means outside JSX and we can use any JavaScript we want
   * - 2 returns can not be executed at the same time
   */

  //The JSX returned is required to be a single element, wrapping element in a <div></div> works but sometimes it disrupts the syle so instead we use a react Fragment <></>
  //but when the itmes involves a list we could use <React.Fragment key=''></React.Fragment> key is optional depending on the data being passed (<React.Fragment></React.Fragment> === <></>)
  return (
    <main className="menu">
      <h2>Our Menu 🍕</h2>

      {/**
       * RENDERING LISTS
       * - Rendering: is when we have an array and want to create a component for each element of an array
       */}

      {/* && conditional rendering: react doesn't return true or false, but conditional rendering is for truesy or falsy value. but it will return zero on the UI */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            //After mapping each mapped element need a unique key
            <Pizza pizzaObj={pizza} key={pizza.name} />

            //<Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} /> this would work but not appropriate
          ))}
        </ul>
      )} */}

      {/* Conditional rendering with ternaries (the benefit of using ternaries is there are alternative options if the condition fails; also we cannot use if/else because it does not produce a value*/}
      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious!
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>we're still working on our menu. Please come back later 🤪</p>
      )}

      {/* <Pizza
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
      /> */}
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

//when rendering for instance a list passing an object in the component is more appropriat to have other component access the data via props
function Pizza({ pizzaObj }) {
  //pizzaObj is matching the prop being passed to the other components
  console.log(pizzaData);

  // we can manipulate items from the pizzaObj
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

/**
 * Extracting JSX into a NEW Component
 */

//footer component
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  /*   if (hour >= openHour && hour <= closeHour) alert("we're currently open!");
       else alert("sorry we're closed");
  */

  /* Conditional Rendering with MULTIPLE RETURNS */

  //   if (!isOpen) return <p> were happy to welcome you after {isOpen}</p>;
  return (
    <footer className="footern">
      {/**
       * Conditional rendering with &&
       * - use the && operator to short circuit or conditionally render
       * we could also use this if there was no need to conditionally render {new Date().toLocaleDateString()}. We're Currenly Open
       *
      {isOpen && (
        <div className="order">
          <p>we are open until {closeHour}:00. come visit us or order online</p>
          <button className="btn">Order</button>
        </div>
      )}
      */}

      {/* ternary conditional rendering */}
      {isOpen ? (
        // <div className="order">
        //   <p>we are open until {closeHour}:00. come visit us or order online</p>
        //   <button className="btn">Order</button>
        // </div>

        //Extracting JSX into a new component
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "we are Currently open!");
}

//to access the closeHour we use props because closeHour was defined in a different component (extracting JSX into a new component)
function Order({ closeHour, openHour }) {
  //instead of using props and props.closeHour or props.openHour: we are passing the objects of closeHour and openHour and just using closeHour or openHour without props.
  return (
    <div className="order">
      <p>
        we are open from{openHour}:00 to {closeHour}:00. come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
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

/**
 * RULES OF JSX
 * GENERAL JSX RULES: JSX works essentially like HTML, but we can enter "JavaScript mode" by using {} (for text or attributes)
 * - we can place JavaScript expression inside {}. Eg. reference variables, create arrays or objects [].map(), ternary operator
 * - Statement are not allowed (if/else, for, switch)
 * - JSX produces a JavaScript expression (the ones below are the same thing)
 *      const el = <h1>Hello React!</h1>
 *      const el = React.createElement("h1", null, "Hello React!");
 *      1. we can place other pieces of JSX inside {}
 *      2. we can write JSX anywhere inside a component (in if/else, assign to variables, pass it into functions)
 * - A piece of JSX can only have one root element. if you need more, use <React.Fragment> (or the short <>)
 *
 * DIFFERENCES BETWEEN REACT JSX AND HTML5
 * - className instead of HTML's class
 * - htmlFor instead of HTML's for
 * - Every tag needs to be closed. Eg. <img /> or <br />
 * - All event handlers and other properties need to be camelCased. Eg. onClick or onMouseOver
 * - Exception: aria-* and data-* are written with dashes like in HTML
 * - CSS inline styles are written like this: {{<style}} (to reference a variable, and then an object)
 * - CSS property names are also camelCased
 * - Comments need to be in {} (because they are JS)
 */

/**
 * SUMMARY
 * - JSX block is what we return from a component
 *
 * Component contatins -->Data --> JS Logic --> Appearance: JSX (HTML, CSS, JS inside {})
 *
 * Parents components can pass data to direct child component using props
 * - props can only be passed from parents to children and not the other way
 *
 * Rendering multiple components at once using the JavaScript .map() method
 * - components can be conditionally rendered using JS tools: &&, ?, and multiple return
 */
