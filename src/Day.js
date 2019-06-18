import React, { Component, Fragment } from 'react';

class Day extends Component {
  static defaultProps = {
    classes: '',
    day: null,
  };
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onHover = this.onHover.bind(this);
  }

  onClick() {
    const { dayClicked, day } = this.props;
    dayClicked(day);
  }

  onHover() {
    const { dayHovered, day } = this.props;
    dayHovered(day);
  }

  render() {
    const { classes, day } = this.props;
    return(
      <Fragment>
        <td onClick={this.onClick} onMouseEnter={this.onHover} className={classes}>
          <span className={"day-number"}>{ day === null ? '' : day.date() }</span>
        </td>
      </Fragment>
    )
  }
}

export default Day;
