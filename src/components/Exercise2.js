import React from "react";
import DisplayCalendar from "./DisplayCalendar";
import moment from "moment";

const today = moment();
const todayISO = today.toISOString();

class Exercise2 extends React.Component {
  constructor() {
    super();

    this.state = {
      events: []
    };

    this.fetchEvents = this.fetchEvents.bind(this);
  }

  fetchEvents() {
    fetch(`https://assessments.bzzhr.net/calendar/since=${todayISO}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          events: data.results
        });
      })
      .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchEvents();
  }

  render() {
    return <DisplayCalendar events={this.state.events} />;
  }
}

export default Exercise2;
