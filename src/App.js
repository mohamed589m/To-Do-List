import { useRef, useState } from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [x, setx] = useState([]);

  const inputRef = useRef();

  const add = () => {
    const value = inputRef.current.value;
    const newData = { completed: false, value };
    setx([...x, newData]);

    inputRef.current.value = "";
  };

  const itemDone = (index) => {
    const newx = [...x];

    newx[index].completed = !newx[index].completed;

    setx(newx);
  };

  const toDelete=(index)=>{
    const newx=[...x];

    newx.splice(index,1);

    setx(newx);
  }

  return (
    <div className="App">
      <h2>To-do list📒</h2>
      <input ref={inputRef} placeholder="Enter new task..." />
      <button onClick={add}>Add</button>
      <ul>
        {x.map(({ value, completed }, index) => {
          return (
            <div className="elementDiv">
              <li
                className={completed ? "diffstyle" : ""}
                onClick={() => itemDone(index)}
              >
                {value}
              </li>
                <span className="x" onClick={()=>toDelete(index)}>❌</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
