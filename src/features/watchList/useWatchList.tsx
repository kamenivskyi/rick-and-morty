import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IWatchListItem {
  id: string;
  text: string;
  completed: boolean;
}
export function useWatchList() {
  const [watchList, setWatchList] = useState<IWatchListItem[]>([]);

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem("rick-and-morty-watch-list") || "[]"
    ) as any;

    setWatchList(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "rick-and-morty-watch-list",
      JSON.stringify(watchList)
    );
  }, [watchList]);

  const removeItem = (id: string) => {
    const newItems = watchList.filter((item: IWatchListItem) => item.id !== id);
    setWatchList(newItems);
  };

  const createItem = (value: string): IWatchListItem => {
    return {
      text: value,
      id: uuidv4(),
      completed: false,
    };
  };
  const addNewItem = (value: string) => {
    const newItem = createItem(value);

    setWatchList((prevValue) => {
      return [...prevValue, newItem];
    });
  };

  const clearWatchList = () => {
    setWatchList([]);
  };

  const toggleCompleted = (id: string) => {
    const newArray = watchList.map((item: IWatchListItem) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    setWatchList(newArray);
  };

  return {
    watchList,
    setWatchList,
    removeItem,
    addNewItem,
    toggleCompleted,
    clearWatchList,
  };
}
