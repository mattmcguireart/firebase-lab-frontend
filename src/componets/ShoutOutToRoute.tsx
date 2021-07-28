import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import ShoutOut from "../models/ShoutOut";
import { getShoutOutsByTo, postShoutOut } from "../services/shoutOutService";
import ShoutOutForm from "./ShoutOutForm";
import ShoutOutItem from "./ShoutOutItem";
import "./ShoutOutToRoute.css";

interface RouteParams {
  name: string;
}

const ShoutOutToRoute = () => {
  const [shoutOut, setShoutout] = useState<ShoutOut[]>();
  const { name } = useParams<RouteParams>();
  const getShoutOuts = async (name: string) => {
    setShoutout(await getShoutOutsByTo(name));
  };

  useEffect(() => {
    getShoutOuts(name);
  }, [name]);

  const addShoutOut = async (shoutOut: ShoutOut) => {
    await postShoutOut(shoutOut);
  };

  return (
    <div className="ShoutOutToRoute">
      <h1>Shout Outs to {name}</h1>
      <Link to="/">See All Shout Outs</Link>
      <ul>
        {shoutOut?.map((item) => (
          <ShoutOutItem item={item} key={item._id} />
        ))}
      </ul>
      <ShoutOutForm addShoutOut={addShoutOut} name={name} />
    </div>
  );
};

export default ShoutOutToRoute;
