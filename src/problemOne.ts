interface IEvent {
  title: string;
  date: string;
  location: string;
}

interface ICalendar {
  // events: Array<Event>;
  events: IEvent[];
  addEvent: (event: IEvent) => void;
  removeEvent: (eventTitle: string) => void;
}

const event1 = {
  title: "Meeting",
  date: "2022-10-12",
  location: "Conference Room",
};
const event2 = {
  title: "Birthday Party",
  date: "2022-10-15",
  location: "Alice's House",
};

const calendar: ICalendar = {
  events: [],
  addEvent(event: IEvent) {
    this.events.push(event);
  },
  removeEvent(eventTitle: string): void {
  },
};

calendar.addEvent(event1);

console.log(calendar.events);
