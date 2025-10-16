import React from "react";

const Rooms = ({ rooms, selectedRoom, onSelectRoom }) => {
  return (
    <div className="mb-3">
      <h5 className="fw-bold mb-2 text-white">Rooms</h5>
      <div className="d-flex overflow-auto">
        {rooms.map((room) => (
          <div
            key={room.name}
            className={`card me-2 text-center shadow-lg ${
              selectedRoom === room.name ? "bg-secondary text-white" : "bg-transparent text-white"
            }`}
            style={{ width: "140px", flex: "0 0 auto" }}
            onClick={() => onSelectRoom(room.name)}
          >
            <img
              src={room.image}
              alt={room.name}
              className="card-img-top rounded"
              style={{ height: "80px", objectFit: "cover" }}
            />
            <div className="card-body p-2">
              <h6 className="card-title mb-1">{room.name}</h6>
              <small>{room.devices} Devices</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
