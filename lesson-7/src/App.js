import React from "react";
import { Dashboard } from "./components/Dashboard";

// const ITEM = {
//   display: "flex",
//   padding: "10px",
//   border: "1px solid green",
//   justifyContent: "center",
//   marginBottom: "5px",
//   listStyle: "none",
// };

// const CONTAINER = {
//   display: "flex",
//   flexDirection: "column",
// };

// const WRAPPER = {
//   display: "flex",
//   height: "100vh",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const LIST = {
//   display: "flex",
//   flexDirection: "column",
//   border: "1px solid red",
//   padding: "5px",
//   maxHeight: "250px",
//   overflow: "hidden",
//   overflowY: "scroll",
//   width: "200px",
// };

// const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function App() {
//   // let ulElem;
//   // let timer;

//   // const ulElem = React.useRef();
//   const timerRef = React.useRef();
//   const [numbers, setNumbers] = React.useState([]);

//   React.useEffect(() => {
//     console.log("call inside useEffect");
//     setNumbers(NUMBERS);
//   }, []);

//   // React.useEffect(() => {
//   //   console.log("new numbers array :", numbers);
//   // }, [numbers]);

//   const addNumber = () => {
//     setNumbers((prev) => [...prev, prev[prev.length - 1] + 1]);
//     // console.log(numbers);
//   };

//   // const handleScroll = () => {
//   //   console.log("scroll");
//   // };

//   // React.useEffect(() => {
//   //   ulElem.current.addEventListener("scroll", handleScroll);
//   // }, []);

//   // const removeScroll = () => {
//   //   ulElem.current.removeEventListener("scroll", handleScroll);
//   // };

//   const startTimer = () => {
//     timerRef.current = setInterval(addNumber, 1000);
//   };

//   const stopTimer = () => {
//     clearInterval(timerRef.current);
//   };

//   return (
//     <div style={WRAPPER}>
//       <div style={CONTAINER}>
//         <ul style={LIST}>
//           {numbers.map((number) => (
//             <li style={ITEM} key={number}>
//               {number}
//             </li>
//           ))}
//         </ul>
//         {/* <button onClick={addNumber}>add number</button> */}
//         <button onClick={startTimer}>start</button>
//         <button onClick={stopTimer}>stop</button>
//         {/* <button onClick={removeScroll}>снять слушатель</button> */}
//       </div>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return <Dashboard />;
};

export default App;
