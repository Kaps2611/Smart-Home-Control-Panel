import React from "react";

const Devices = ({ room, devices = [], deviceStates = {}, onToggle }) => {
  return (
    <div className="mb-4">
      <h5 className="fw-bold mb-3 text-white">{room} Devices</h5>
      <div className="row g-3">
        {devices.map((device) => (
          <div key={device} className="col-6">
            <div className="card p-3 text-center shadow-lg bg-transparent text-white">
              <h6>{device}</h6>
              <div>
                <button
                  className={`btn btn-sm w-50 ${deviceStates?.[device] ? "btn-success" : "btn-secondary"
                    } mt-2`}
                  onClick={() => onToggle(room, device)}
                >
                  {deviceStates?.[device] ? "ON" : "OFF"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Devices;
