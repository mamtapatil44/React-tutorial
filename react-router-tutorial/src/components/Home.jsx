import React from "react";

function Button({ label, ...handlers }) {
  return <button {...handlers} className="bg-red-400 p-2 rounded-lg">{label}</button>;
}
const Home = () => {
  const dynamicEvents = ["Click", "MouseEnter", "Focus"];
  const handlers = dynamicEvents.reduce((acc, event) => {
    acc[`on${event}`] = () =>
      console.log(`Button was ${event.toLowerCase()}ed!`);
    return acc;
  }, {});
  return <Button label="Multi-Event Button" {...handlers}  />;
};

export default Home;
