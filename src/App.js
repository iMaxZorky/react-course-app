
import Costs from "./components/Costs";

function App() {
  const costs = [
    {
      date: new Date (2021, 2, 12),
      description: 'Холодильник',
      amount: 495.99
    },
    {
      date: new Date (2021, 5, 10),
      description: 'MacBook',
      amount: 999.99
    },
    {
      date: new Date (2021, 0, 6), 
      description: 'Джинсы',
      amount: 79.99
    }
]
  return (
    <div className="App">
      <h1>Погнали</h1>
      <Costs costs={costs}/>
    </div>
  );
}

export default App;
