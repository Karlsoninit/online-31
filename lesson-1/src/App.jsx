import { StaffMenu } from './components/StaffMenu/StaffMenu'

const cities = [{ name: 'Киев', id: '09f8uyhgdnj' }, { name: 'Лондон', id: '987yhdf' }]

const App = () => {

  return (
    <>
      {/* <StaffMenu title='Преподаватели' buttonName='Добавить преподавателя' /> */}
      <StaffMenu title='Города' buttonName='Добавить город' content={cities} />
      {/* <StaffMenu title='Факультеты' buttonName='Добавить факультет' /> */}
    </>
  );
}

export default App;

