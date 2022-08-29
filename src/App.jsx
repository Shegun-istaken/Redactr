import React, { Component } from "react";
import "./App.css";

function DivBox(props) {
  return (
    <div className="divBox" id={props.id}>
      {props.children}
    </div>
  );
}

function Input(props) {
  return (
    <form  onSubmit={props.onSubmit}>
      <div>
        <label htmlFor="data">Paste your text here</label>
        <textarea name="text" onChange={props.onChange} />
      </div>
      <div>
        <label htmlFor="word">What words do you want to redact</label>
        <input type="text" id="word" onChange={props.onChange} name="word" />
      </div>
      <div>
        <label htmlFor="char">
          {" "}
          What character do you want to replace your text
        </label>
        <input
          type="text"
          name="char"
          maxLength="1"
          onChange={props.onChange}
        />
      </div>
      <button type="submit">Done</button>
    </form>
  );
}

const n = "test";

function Output(props) {
  return (
    <>
      <h1>Result</h1>
      {props.children}
    </>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      word: "",
      char: "",
      redone:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // console.log(e.target.name)
    // e.target.type === "textarea"? this.setState({text: e.target.value}): this.setState({char: e.target.value});
    switch (e.target.name) {
      case ("text"):
        this.setState({text: e.target.value});
        break;
      case ("word"):
        this.setState({word: e.target.value});
        break;
      case "char":
        this.setState({char: e.target.value});
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const text = this.state.text;
    const word = this.state.word;
    const char = this.state.char;
    const result = text.replace(word, char);
    this.setState({redone: result});
  }

  render() {
    return (
      <>
        <DivBox id="inp">
          <Input onChange={this.handleChange} onSubmit={this.handleSubmit}/>
        </DivBox>
        <DivBox>
          <Output>
            <h2>Your Text</h2>
            <p>{this.state.redone}</p>
          </Output>
        </DivBox>
      </>
    );
  }
}

export default App;
