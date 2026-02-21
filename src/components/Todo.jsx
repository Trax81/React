import './Todo.css'

function Todo(props) {
    console.log(props)
    return (
        <div className="todo">
      <h2>{ props.title}</h2>
      <button>Delete</button>
     </div>
    )
}
export default Todo