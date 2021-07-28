import React, { useEffect, useState } from "react";
import ShoutOut from "../models/ShoutOut";
import { getAllShoutOuts, postShoutOut } from "../services/shoutOutService";
import ShoutOutForm from "./ShoutOutForm";
import ShoutOutItem from "./ShoutOutItem";
import "./HomeRoute.css";

const HomeRoute = () => {
  const getShoutOuts = async () => {
    setShoutOuts(await getAllShoutOuts());
  };
  const [shoutouts, setShoutOuts] = useState<ShoutOut[]>([]);
  useEffect(() => {
    getShoutOuts();
  }, []);
  const addShoutOut = async (shoutOut: ShoutOut) => {
    await postShoutOut(shoutOut);
    getShoutOuts();
  };
  return (
    <div className="HomeRoute">
      <h1>All Shout Out</h1>
      <ul>
        {shoutouts.map((item) => (
          <ShoutOutItem item={item} key={item._id} />
        ))}
      </ul>
      <ShoutOutForm addShoutOut={addShoutOut} />
    </div>
  );
};

export default HomeRoute;
