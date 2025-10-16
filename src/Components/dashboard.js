import Weather from "./weather";
import Rooms from "./rooms";
import Devices from "./devices";
import { useState } from "react";
import img1 from './images/livingroom.jpeg'
import img2 from './images/bedroom.jpg'
import img3 from './images/kitchen.jpg'
import bgimg from './images/bg.jpg'


const SmartHomeDashboard = () => {

  const [selectedRoom, setSelectedRoom] = useState('Living Room');
  const [deviceStates, setDeviceStates] = useState({});

  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening'

  const energyUsed = '30.5kwh'

  const rooms = [
    { name: 'Living Room', image: img1, devices: 3 },
    { name: 'Bedroom', image: img2, devices: 2 },
    { name: 'Kitchen', image: img3, devices: 3 },
  ];

  const devicesByRoom = {
    'Living Room': ['Smart Light', 'TV', 'Air conditioner'],
    'Bedroom': ['Smart Light', 'Air Conditioner'],
    'Kitchen': ['Smart Light', 'Refrigerator','Air conditioner'],
  };

  const handleToggle = (room, device) => {
    setDeviceStates(prev => ({
      ...prev,
      [room]: {
        ...prev[room],
        [device]: !prev[room]?.[device],
      },
    }));
  };

  return (
    <div className="container py-3 bg-transparent min-vh-100" style={{backgroundImage:`url(${bgimg})`, backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      <h4 className="text-primary text-white">{greeting} 👋</h4>
      <p className="text-primary text-white">Welcome back to your Smart Home!</p>
      <div >
        <h6 className="fw-semibold text-white">Energy Usage Today</h6>
        <h3 className="text-primary ">{energyUsed}</h3>
      </div>
      <Weather />
      <Rooms
        rooms={rooms}
        selectedRoom={selectedRoom}
        onSelectRoom={setSelectedRoom}
      />
      <Devices
        room={selectedRoom}
        devices={devicesByRoom[selectedRoom]}
        deviceStates={deviceStates[selectedRoom]}
        onToggle={handleToggle}
      />
    </div>


  )




}



export default SmartHomeDashboard;