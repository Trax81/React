import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'


function App() {
  return (
    <div>
     
  <h1>My Todo List</h1>
      <Title />

      <div className="todo__wrapper">
      <Todo Title="Finish Frontend Simplified"/>
      <Todo Title="Finish Interview section"/>
      <Todo Title="Land a $100k job"/>
    </div>
    <Modal />
    </div>
  );
}

export default App;
