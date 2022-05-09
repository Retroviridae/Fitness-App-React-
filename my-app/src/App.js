import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Workout from './Workout';
import Form from './Form';
import WorkoutList from './WorkoutList';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <WorkoutList />
    </div>
  );
}

export default App;
