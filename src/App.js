import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("")

  const handleSubmit= (e) => {
    e.preventDefault();
    setName("");
    console.log("form submitted");
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

        <fieldset>
          <div className="field">
            <label htmlFor="fld">Name</label>
            <input
            id="fld" 
            type="text" 
            placeholder="Name" 
            name="name" 
            onChange={e => setName(e.target.value)}
            />
          </div>
          <button disabled={!name} type="submit">submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;


