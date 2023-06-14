import './App.css';
import Nav from './components/Nav/Nav';
import Display from './components/NoteContainer/Note';

function App() {
  return (
    <div className="bg-gray-800 h-max">
      <Nav />
      <Display />
    </div>
  );
}

export default App;
