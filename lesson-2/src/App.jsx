import { StaffMenu } from './components/StaffMenu/StaffMenu'
import {Wrapper} from './components/Wrapper/Wrapper'

const cities = [{ name: 'Киев', id: 938474834 }, { name: 'Лондон', id: '987yhdf' }]

const App = () => {

  return (
   <Wrapper>
     <StaffMenu title='Преподаватели' buttonName='Добавить преподавателя' /> 
      <StaffMenu title='Города' buttonName='Добавить город' content={cities} /> 
      <StaffMenu title='Факультеты' buttonName='Добавить факультет' />
   </Wrapper>
  );
}

export default App;



{/* <StaffMenu title='Преподаватели' buttonName='Добавить преподавателя' /> 
<StaffMenu title='Города' buttonName='Добавить город' content={cities} /> 
<StaffMenu title='Факультеты' buttonName='Добавить факультет' /> */}