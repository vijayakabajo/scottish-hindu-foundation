// src/components/events/Events.jsx
import { useState } from 'react';
// import Footer from "../footer/Footer";
import Header from "../header/Header";
import EventCard from "./Eventcard";
import Herosection from "../herosection/Herosection";
import PopupEvent from './PopupEvent';


const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const majorevents = [
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "10:00 AM",
      date: "2024-05-22",
      location: "Location One",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "10:00 AM",
      date: "2024-05-22",
      location: "Location One",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "10:00 AM",
      date: "2024-05-22",
      location: "Location One",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "10:00 AM",
      date: "2024-05-22",
      location: "Location One",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "10:00 AM",
      date: "2024-05-22",
      location: "Location One",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "10:00 AM",
      date: "2024-05-22",
      location: "Location One",
    },
    // ...other major events
  ];

  const upcomingevents = [
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "2024-05-22 10:00 AM",
      location: "Location One",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "2024-05-22 10:00 AM",
      location: "Location One",
    },
    {
      image: "https://via.placeholder.com/150",
      title: "Event One",
      time: "2024-05-22 10:00 AM",
      location: "Location One",
    },
    // ...other upcoming events
  ];

  return (
    <>
      <Header />
      <Herosection
        imageUrl="\Images\Herosection\events.png"
        heading="Events"
        description="Home/ Events"
      />

      <div className="container-body">
        <div className="px-4 py-3 mt-10 md:px-32 md:py-6">
          <div className="textpart mb-6">
            <div className="inline-flex gap-2 justify-center items-center">
              <p className="text-gray-700 text-md font-semibold">
                Enroll Yourself Into
              </p>
              <hr className="w-[60px] border-t-1 border-gray-400 mx-auto" />
            </div>
            <h2 className="text-3xl font-bold">Our Major Events</h2>
          </div>

          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 md:gap-x-8">
            {majorevents.map((event, index) => (
              <EventCard
                key={index}
                image={event.image}
                title={event.title}
                time={event.time}
                date={event.date}
                location={event.location}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </div>
        </div>

        <div>
          <div className="px-4 py-3 my-10 md:px-32 md:py-6">
            <div className="textpart mb-6">
              <div className="inline-flex gap-2 justify-center items-center">
                <p className="text-gray-700 text-md font-semibold">
                  Pre-Enroll Yourself Into
                </p>
                <hr className="w-[60px] border-t-1 border-gray-400 mx-auto" />
              </div>
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
            </div>

            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-10 md:gap-x-8">
              {upcomingevents.map((event, index) => (
                <EventCard
                  key={index}
                  image={event.image}
                  title={event.title}
                  time={event.time}
                  date={event.date}
                  location={event.location}
                  onClick={() => setSelectedEvent(event)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <PopupEvent/>
      {/* <Footer /> */}
    </>
  );
};

export default Events;
