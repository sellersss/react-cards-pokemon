import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useFlip = (initialFlipState = true) => {
  const [flipState, setFlipState] = useState(initialFlipState);
  const toggleFlipState = () => setFlipState(!flipState);
  return [flipState, toggleFlipState];
};

const useAxios = (baseUrl, format, storageKey) => {
  const [cards, setCards] = useLocalStorage(
    storageKey,
    localStorage.getItem(storageKey)
  );
  const addCard = async (urlSuffix) => {
    const url =
      typeof urlSuffix === "string" ? `${baseUrl}${urlSuffix}/` : baseUrl;
    const res = await axios.get(url);
    const newCard = format(res.data);
    newCard.id = uuid();
    const newCards = [...cards, newCard];
    setCards(storageKey, newCards);
  };
  const removeAll = () => {
    setCards(storageKey, []);
  };
  return [cards, addCard, removeAll];
};

const useLocalStorage = (key, value) => {
  const parsedValue = JSON.parse(value);
  const [cards, setCards] = useState(parsedValue ? parsedValue : []);
  localStorage.setItem(key, JSON.stringify(parsedValue));
  const syncCards = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setCards(value);
  };
  return [cards, syncCards];
};

export { useAxios, useFlip, useLocalStorage };
