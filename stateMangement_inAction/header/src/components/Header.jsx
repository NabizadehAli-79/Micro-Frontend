import React from "react";

import { useStore, StateProvider } from "counterStore/counterStore";


const Header = (props) => {
  const { app } = props;

  const {counter, inc} = useStore();
  console.log("header-rendered");
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      Header Team of Akam Super Platform | {app.name} | {counter.counter}
    </div>
  );
};

export default Header;
