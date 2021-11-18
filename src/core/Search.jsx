import React, { useState, useEffect } from "react";
import { getCategories } from "./apiCore";
import Card from "./Card";

export default function Search() {
  const [data, setData] = useState({
    categories: [],
    category: "",
    search: "",
    results: [],
    searched: false,
  });

  const { categories, category, search, results, searched } = data;

  const loadCategories = () => {
    getCategories().then((data) => {
      if (data.err) {
        console.log(data.err);
      } else {
        setData({ ...data, categories: data });
      }
    });
  };

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <div>
      <h2>Search bar {JSON.stringify(categories)}</h2>
    </div>
  );
}
