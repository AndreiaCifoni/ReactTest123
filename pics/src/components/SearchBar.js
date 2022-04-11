import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    //aqui foi colocado em forma de arrow func pq senao o "this" nao iria funcionar
    //o this se referencia a classe quando esta num metodo, mas quando é colocado dentro de uma funcao dentro da classe, ai se referencia ao window e da erro de "undefined"
    event.preventDefault(); //prevent the page to refresh automatic
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
