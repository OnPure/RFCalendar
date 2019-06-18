import React, { Component } from 'react';
import moment from 'moment';
import Month from './Month';
import { range } from './utils';
import Row from 'antd/lib/Row';
import Col from 'antd/lib/Col';
import '@/index.less';

class Calendar extends Component{
  static defaultProps = {
    forceFullWeeks: false,
    showDaysOfWeek: true,
    showWeekSeparators: true,
    firstDayOfWeek: 0,
    selectRange: false,
    onPickDate: null,
    onPickRange: null,
    selectedDay: [],
    customClasses: null
  };

  constructor(props) {
    super(props);

    this.state = {
      selectingRange: undefined
    };
  }

  dayClicked(date, classes) {
    if (!date) {
      // clicked on prev or next month
      return;
    }

    let { selectingRange } = this.state;
    const { selectRange, onPickRange, onPickDate } = this.props;

    if (!selectRange) {
      if (onPickDate instanceof Function) {
        onPickDate(date, classes);
      }
      return;
    }

    if (!selectingRange) {
      selectingRange = [date, date];
    } else {
      if (onPickRange instanceof Function) {
        if (selectingRange[0] > date) {
          onPickRange(date, selectingRange[0]);
        } else {
          onPickRange(selectingRange[0], date);
        }
      }
      selectingRange = undefined;
    }

    this.setState({
      selectingRange
    });
  }

  dayHovered(hoveredDay) {
    if (!hoveredDay) {
      // clicked on prev or next month
      return;
    }

    const { selectingRange } = this.state;

    if (selectingRange) {
      selectingRange[1] = hoveredDay;

      this.setState({
        selectingRange
      });
    }
  }


  renderDaysOfWeek() {
    const { firstDayOfWeek, showWeekSeparators } = this.props;
    const totalDays =  37;

    const days = [];
    range(firstDayOfWeek, totalDays + firstDayOfWeek).forEach(i => {
      const day = moment()
        .weekday(i)
        .format('dd')
        .charAt(0);

      if (showWeekSeparators) {
        if (i % 7 === firstDayOfWeek && days.length) {
          // push week separator
          days.push(<th className="week-separator" key={`seperator-${i}`} />);
        }
      }
      days.push(
        <th key={`weekday-${i}`} className={i % 7 === 0 ? 'bolder' : ''}>
          {day}
        </th>
      );
    });

    return (
      <tr>
        <th>&nbsp;</th>
        {days}
      </tr>
    );
  }

  render() {
    const { selectingRange } = this.state;

    const months = [0,1,2,3,4,5,6,7,8,9,10,11].map(month => (
      month !== 0 && month !== 4 && month !== 8 ?
        <Col span={5} offset={1}>
          <Month
            month={month}
            key={`month-${month}`}
            dayClicked={(d, classes) => this.dayClicked(d, classes)}
            dayHovered={d => this.dayHovered(d)}
            {...this.props}
            selectingRange={selectingRange}
          />
        </Col> : <Col span={5}>
          <Month
            month={month}
            key={`month-${month}`}
            dayClicked={(d, classes) => this.dayClicked(d, classes)}
            dayHovered={d => this.dayHovered(d)}
            {...this.props}
            selectingRange={selectingRange}
          />
        </Col>
    ));

    return (
      <div className="fullCalendar">
        <Row>
          { months }
        </Row>
      </div>
    );
  }
}

export default Calendar;
