import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class DisplayCalendar extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log(this.props.events);
    return (
      <BigCalendar
        events={this.props.events}
        onSelectEvent={event => alert(event.title)}
        showMultiDayTimes
        selectable
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "100vh" }}
      />
    );
  }
}

export default DisplayCalendar;
