import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import { useStore, StateProvider } from "counterStore/counterStore";

// using lazy to load the component only when it is needed
const Header = lazy(() => import("header/Header"));

import Footer from "footer/Footer";
import ErrorBoundries from "./ErrorBoundries";


const App = () => {
  console.log("homePage render");

  const {counter, makeNull} = useStore();


  return (
    <div className="text-3xl text-center">
      <ErrorBoundries>
        <Suspense fallback="Loading  . . .">
          <Header app={{ name: "Product" }} />
        </Suspense>
      </ErrorBoundries>
      <div>Name: home</div>
      <div>Framework: react</div>
      <div>Language: JavaScript</div>
      <div>CSS: Tailwind</div>
      <button 
        className="my-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-4 border border-gray-400 rounded shadow" 
        onClick={makeNull}
      >
        Make Zero
      </button>
      <Footer />
    </div>
  );
};

ReactDOM.render(
<StateProvider>
  <App />
</StateProvider>,
document.getElementById("app"));
