import React, { Component } from 'react';
import { render } from 'react-dom';
import moment from 'moment';
import { Calendar, CalendarControls } from 'rfcalendar';

class Index extends Component{
  constructor(props){
    super(props);
    const today = moment();
    this.state = {
      year: today.year(),
      selectedDay: [],
      selectedRange: [today, moment(today).add(15, 'day')],
      showDaysOfWeek: true,
      showTodayBtn: true,
      showWeekSeparators: true,
      selectRange: false,
      firstDayOfWeek: 0, // sunday
      customCSSclasses: [today],
      customClassesError: false,
    };
  }

  /**
   * 切换到前一年
   */
  onPrevYear() {
    this.setState(prevState => {
      return{
        year: prevState.year - 1
      }
    });
  }

  /**
   * 切换到下一年
   */
  onNextYear() {
    this.setState(prevState => {
      return{
        year: prevState.year + 1
      }
    });
  }

  /**
   * 日期单项选择
   * @param  {[type]} date    [description]
   * @param  {[type]} classes [description]
   * @return {[type]}         [description]
   */
  datePicked(date, classes) {
    if (!date) {
      // clicked on prev or next month
      return;
    }
    let flag = 0, type = 1;
    let selectedDay = this.state.selectedDay;
    if(selectedDay.length !== 0) {
      selectedDay.forEach((item, index) => {
        ++flag;
        if (moment(item).format("YYYY-MM-DD") == moment(date).format("YYYY-MM-DD")) {
          type = 2;
          selectedDay.splice(index, 1);
        }
      });
    }else{
      selectedDay.push(date);
    }
    type === 1 && flag == selectedDay.length ?
      selectedDay.push(date) : '';
    this.setState({
      selectedDay: selectedDay,
    })
  }

  /**
   * 日期范围选择
   * @param  {[type]} start [description]
   * @param  {[type]} end   [description]
   * @return {[type]}       [description]
   */
  rangePicked(start, end) {
    this.setState({
      selectedRange: [start, end],
      selectedDay: start
    });
  }

  render(){
    const {
      year,
      showTodayBtn,
      selectedDay,
      showDaysOfWeek,
      // forceFullWeeks,
      showWeekSeparators,
      firstDayOfWeek,
      selectRange,
      selectedRange,
      customCSSclasses
    } = this.state;
    return (
      <div id="calendar">
        <CalendarControls
            year={year}
            showTodayButton={showTodayBtn}
            onPrevYear={() => this.onPrevYear()}
            onNextYear={() => this.onNextYear()}
            goToToday={() => this.goToToday()}
          />
        <Calendar
          year={year}
          selectedDay={selectedDay}
          showDaysOfWeek={showDaysOfWeek}
          showWeekSeparators={showWeekSeparators}
          firstDayOfWeek={firstDayOfWeek}
          selectRange={selectRange}
          selectedRange={selectedRange}
          onPickDate={(date, classes) => this.datePicked(date, classes)}
          onPickRange={(start, end) => this.rangePicked(start, end)}
          customClasses={customCSSclasses}
        />
      </div>
    )
  }
}

render(
  <Index />,
  document.getElementById('app')
)
