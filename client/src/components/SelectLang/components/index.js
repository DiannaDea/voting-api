import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

class SelectLang extends Component {
  state = {
    curLanguage: 'en',
  };

  changeLanguage = (event) => {
    const { changeLanguage } = this.props;

    changeLanguage({
      lang: event.target.value,
    });

    localStorage.setItem('lang', event.target.value);

    this.setState({
      curLanguage: event.target.value,
    });
  };

  render() {
    const { curLanguage } = this.state;

    return (
      <Select
        value={curLanguage}
        onChange={this.changeLanguage}
        inputProps={{
          name: 'language',
        }}
      >
        <MenuItem value='en'>
          <em>EN</em>
        </MenuItem>
        <MenuItem value='ru'>UA</MenuItem>
      </Select>
    );
  }
}

export default SelectLang;
