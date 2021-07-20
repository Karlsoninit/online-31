import React from "react";
import { Todo } from "./components/Todo/Todo";
import options from "./options.json";

function App() {
  return (
    <div className="App">
      <Todo options={options} />
    </div>
  );
}

export default App;

// class App extends React.Component {
//   state = {
//     isOpen: false,
//     isVisible: true,
//   };

//   toggle = () => {
//     this.setState((prevState) => {
//       return { isOpen: !prevState.isOpen };
//     });
//   };

//   render() {
//     return (
//       <>
//         <h2>умный компонент</h2>
//         <Button onClick={this.toggle} color="primary">
//           показать
//         </Button>
//         {this.state.isOpen && <p>show!!!!</p>}
//       </>
//     );
//   }
// }

// export default App;
