import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: []
  };

  /**
   * Loads tech list from localStorage.
   */
  componentDidMount() {
    const techs = localStorage.getItem('techs');

    if (techs) {
      this.setState({ techs: JSON.parse(techs) });
    }
  }

  /**
   * Updates tech list in localStorage.
   */
  componentDidUpdate(_, prevState) {
    if (prevState.techs !== this.state.techs) {
        localStorage.setItem('techs', JSON.stringify(this.state.techs));
    }
  }

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
    if (this.state.techs.find(tech => tech === this.state.newTech)) {
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
          { this.state.techs.map(tech => 
            <TechItem 
              key={tech} 
              tech={tech} 
              onDelete={() => this.handleDelete(tech)}
            />) }
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