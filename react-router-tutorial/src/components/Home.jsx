import React from "react";

function Button({ label, ...handlers }) {
  return <button {...handlers} className="bg-red-400 p-2 rounded-lg">{label}</button>;
}
const Home = () => {
  // const dynamicEvents = ["Click", "MouseEnter", "Focus"];
  // const handlers = dynamicEvents.reduce((acc, event) => {
  //   acc[`on${event}`] = () =>
  //     console.log(`Button was ${event.toLowerCase()}ed!`);
  //   return acc;
  // }, {});
  // return <Button label="Multi-Event Button" {...handlers}  />;

  //  2nd approach using map and [key ]notation
  const buttons = [
    { label: "Click Me", event: "Click" },
    { label: "Hover Me", event: "MouseEnter" },
    { label: "Focus Me", event: "Focus" }
  ];

  return (
    <div>
      {buttons.map(({ label, event }) => {
        const handlers = { [`on${event}`]: () => alert(`${label} was ${event.toLowerCase()}ed!`) };
        return <Button key={label} label={label} {...handlers} />;
      })}
    </div>
  );
};

export default Home;
