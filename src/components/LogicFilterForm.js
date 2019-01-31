import React from 'react';

class LogicFilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'nothing'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <form>
        <label>
          Filter By Logics
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="base">Base</option>
            <option value="routing">Routing</option>
            <option value="library">Library</option>
            <option value="programming">Programming</option>
            <option value="everything">Everything</option>
          </select>
        </label>
      </form>
    );
  }
}

export default LogicFilterForm;