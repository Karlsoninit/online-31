import { Form } from "./Components/Form/Form";
import { DropDownMenu } from "./Components/DropdownMenu/DropdownMenu";

function App() {
  const getCurrentFormData = (data) => {
    console.log(`data`, data);
  };
  return (
    <DropDownMenu>
      <Form onSubmit={getCurrentFormData} />
    </DropDownMenu>
  );
}

export default App;
