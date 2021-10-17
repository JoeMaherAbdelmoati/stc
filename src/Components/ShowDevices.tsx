import React, { useState, useEffect } from "react";
import { getAllDevices } from "../Services";
import Spinner from "./Spinner";
import { DeviceListInterface } from "../Interfaces/device.interface";

const ShowDevices = () => {
  const [devices, setDevices] = useState<DeviceListInterface[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getAllDevices().then(data => {
      setDevices(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <div
      className={`container-fluid position-relative device-list ${
        !isLoading && devices.length === 0 ? "center" : ""
      }`}
    >
      {isLoading && <Spinner />}
      <div className={"row mt-3"}>
        {!isLoading && devices.length === 0 && <h4>No Data</h4>}
        {devices.map(item => {
          return (
            <div className="col-md-4" key={item.id}>
              <div className={"item-card"}>
                <img src={item.image} className="image" alt={"device"} />
                <p className={"name"}>{item.name}</p>
                <p className={"category"}>{item.category}</p>
                <button className="know-more">Know More</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowDevices;
