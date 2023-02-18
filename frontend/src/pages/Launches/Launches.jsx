import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLaunches } from "../../actions/launches";

const Launches = () => {
  const dispatch = useDispatch();
  const launches = useSelector((state) => state.launches.data);

  useEffect(() => {
    dispatch(loadLaunches());
  }, [dispatch]);
  return (
    <>
      <div className="cards-container">
        {launches.map((launch) => (
          <div className="card" key={launch.flight_number}>
            <h3>{launch.mission_name}</h3>
            <p>
              <strong>Launch Date:</strong> {launch.launch_date_utc}
            </p>
            <p>
              <strong>Rocket:</strong> {launch.rocket.rocket_name}
            </p>
            <p>
              <strong>Launch Site:</strong> {launch.launch_site.site_name_long}
            </p>
            <p>
              <strong>Details:</strong>{" "}
              {launch.details || "No details available."}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Launches;
