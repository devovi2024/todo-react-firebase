import AddNewTodo from "./components/AddNewTodo";
import EditTodo from "./components/EditTodo";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Todo from "./components/Todos";
import User from "./components/User";
// import css app.css
import './App.css'
import './style.css'
import Calender from "./components/Calender";

function App() {
  return (
    <div className="App">
      <Sidebar>
        <User/>
        <AddNewTodo/>
        <Calender/>

        <Projects/>
      </Sidebar>

      <Main className="Main">
        <Todo/>
        <EditTodo/>
      </Main>
    </div>
  )
}

export default App;