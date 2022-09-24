import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import { data } from './data';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {data.map((e) => (
            <Card
              key={e.id}
              {...e}
              //item={e}
              //spread syntaxe {...item} (takes propriety of data and creates seprate props... exp : img={item.img}...)
            />
          ))}
      
      
    </div>
  );
}

export default App;
