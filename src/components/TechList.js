import React, { Component } from 'react';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  /**
   * Has to be an arrow function to have access to class' `this` instance.
   */
  handleInputChange = e => {
    this.setState({ newTech: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.newTech) {
      return;
    }
    this.setState({ 
      techs: [ ...this.state.techs, this.state.newTech ],
      newTech: ''
    });
  }

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(t => t !== tech) })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          { this.state.techs.map(tech => (
            <li key={tech}>
              {tech}
              <button type="button" onClick={() => {this.handleDelete(tech)}}>Delete</button>
            </li>
          )) }
        </ul>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={this.state.newTech}
        />
        <button type="submit">Save</button>
      </form>
    );
  }

}

export default TechList;