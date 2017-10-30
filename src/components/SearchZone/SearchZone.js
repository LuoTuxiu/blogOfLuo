import React from 'react';
import s from './SearchZone.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import AutoComplete from 'material-ui/AutoComplete';

class SearchZone extends React.Component {
  state = {
    dataSource: [],
  };
  render() {
    return (
      <div className={s.root}>
        <AutoComplete
          hintText="input what you want"
          dataSource={this.state.dataSource}
        />
      </div>
    );
  }
}

export default withStyles(s)(SearchZone);
