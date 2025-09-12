import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);
  return (
    <div>
      <h4 className="font-semibold mb-4">All Category</h4>
      <div className="flex flex-col gap-2">
        {categories.map((category) => (
          <NavLink to={`/category/${category.category_id}`} key={category.category_id} className="btn">
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
