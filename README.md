# react 全日历组件

> 基于react开发的一个非常漂亮的全日历组件
预览地址：https://onpure.github.io/rfcalendar/index.html

## 从NPM下载包

``` npm
npm i rfcalendar
```

## 使用实例

### 引入包

``` js
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
```

### 自定义样式

#### 编写样式覆盖即可

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
