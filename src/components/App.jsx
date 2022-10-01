import React, { useState } from "react";
import Logo from "./Logo";

export default function App() {
  const [input, newInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const { value } = event.target;
    newInput(value);
  }
  function addItem(event) {
    if (event.target.value !== " ") {
      setItems((prevList) => [...prevList, input]);
    }
    event.preventDefault();
    newInput("");
  }

  return (
    <>
      <Logo />
      <div class="body">
        <div class="tcontainer">
          <div>
            <h1> My To-Do List</h1>

            <div class>
              <form class="item" onSubmit={addItem}>
                <div class="form">
                  <input
                    autofocus
                    class="input"
                    autocomplete="off"
                    placeholder="✍️ Add New Item..."
                    type="text"
                    value={input}
                    onChange={handleChange}
                    required
                  />
                  <span class="input-border"></span>
                </div>

                <button
                  class="icon-btn add-btn"
                  type="submit"
                  name="button"
                  onClick={addItem}
                >
                  <div class="add-icon"></div>
                  <div class="btn-txt">Add Item</div>
                </button>
              </form>
            </div>

            <div class="todo-list">
              {items.map((item) => (
                <div class="item todo">
                  <label class="container">
                    <input type="checkbox" />
                    <div class="checkmark"></div>
                  </label>
                  <p> {item} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
