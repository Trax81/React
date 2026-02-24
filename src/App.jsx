import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/modal.jsx' 


function App() {
  return (
    <div>
     
  <h1>My Todo List</h1>
      <Title />

      <div className="todo__wrapper">
      <Todo 
      title="Finish Frontend Simplified"
      paragraph="Code along with fronend Simplified step by step."
      />
      <Todo 
      title="Finish Interview section"
      paragraph="Finish every interview question in the next 6 weeks."
      />
      <Todo 
      title="Land a $100k job"
      paragraph="Apply to 100 jobs."
      />
    </div>
   { /*<Modal title="Are you sure you want to delete?"/> 
    <Modal title="Are you sure you want to add?"/> */}
    </div>
  );
}

export default App;
