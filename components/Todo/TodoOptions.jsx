import React, { PropTypes } from 'react';

export default class TodoOptions extends React.PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    toggleVisible: PropTypes.func.isRequired,
  }

  handleToggleVisible() {
    event.preventDefault();
    this.props.toggleVisible();
  }

  render() {
    const visibleOption =
      this.props.visible ?
      <a href="#" onClick={(e) => this.handleToggleVisible(e)}>hide done</a> :
      <a href="#" onClick={(e) => this.handleToggleVisible(e)}>show all</a>;

    return (
      <div>
        { visibleOption }
      </div>
    );
  }
}
