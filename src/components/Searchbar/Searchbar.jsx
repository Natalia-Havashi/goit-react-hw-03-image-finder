const { Component } = require("react");

class Searchbar extends Component  {
  state ={
    search: ''
  }
  handleSumbit = (e) => {
    e.preventDefault()
  }
  handleChange = ({target: {name, value}}) => {
this.setState({
  [name]: value,
})
  }
  render() {
       return (
        <header class="searchbar">
  <form onSubmit={this.handleSumbit}>
    <button type="submit" >
      <span>Search</span>
    </button>

    <input
    name="search"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
      onChange={this.handleChange}
    />
  </form>
</header>
    )
  }
 
}

export default Searchbar