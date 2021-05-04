import React from "react";
import backOfCard from "./back.png";
import { useFlip } from "./hooks";
import "./PlayingCard.css";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flipState, toggleFlipState] = useFlip();
  return (
    <img
      src={flipState ? front : back}
      alt="playing card"
      onClick={toggleFlipState}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
