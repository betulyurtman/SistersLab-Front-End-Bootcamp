import FirstComponent from './Components/theComponent';

function App() {
  const person = {
    name: 'Betül',
    age: 23,
  };

  return (
    <div
      style={{
        color: 'purple',
      }}
      className="app"
    >
      <FirstComponent
        title="Veri Listesi"
        person={person}
        languages={['korean', 'english', 'turkish']}
        componentExample={<div>Bu bir component örneğidir.</div>}
      />
    </div>
  );
}

export default App;