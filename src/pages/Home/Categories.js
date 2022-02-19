import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/homepage.styles.scss";
import Category from "../../components/Category/Category";
import { fetchCategories } from "../../store/categories/action";
import { selectCategories } from "../../store/categories/selector";
import { Link } from "react-router-dom";
import { selectUser } from "../../store/user/selector";
import Loading from "../../components/Loading";

function Categories() {
  const categories = useSelector(selectCategories);
  //console.log("categories", categories);
  const { isAdmin } = useSelector(selectUser);

  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (!categories) {
    console.log(categories);
    return <Loading />;
  }

  //search for category
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = categories.filter((item) => {
        return (
          item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      //console.log("filtered data", filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(categories);
    }
  };

  return (
    <div className="homepage">
      <div className="category">
        <Link to="/createCategory">
          {isAdmin ? <button>Create New</button> : null}
        </Link>
      </div>
      <div>
        <input
          class="search"
          type="search"
          value={searchInput}
          placeholder="Search...categories"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <h3>Categories</h3>
      <div className="directory-menu">
        {searchInput.length > 1 ? (
          <>
            {filteredResults.map((category) => (
              <Category
                key={category._id}
                id={category.id}
                title={category.title}
                subtitle={category.subtitle}
                imageUrl={category.imageUrl}
              />
            ))}
          </>
        ) : (
          <>
            {categories.map((category) => {
              return (
                <Category
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  subtitle={category.subtitle}
                  imageUrl={category.imageUrl}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Categories;

/* import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/homepage.styles.scss";
import Category from "../../components/Category/Category";
import { fetchCategories } from "../../store/categories/action";
import { selectCategories } from "../../store/categories/selector";

function Categories() {
  const categories = useSelector(selectCategories);
  //console.log("categories", categories);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  //search for category
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = categories.filter((item) => {
      if(item.title)
        return (
          item.title.toLowerCase().includes(searchInput.toLowerCase()) ||
          item.title.toLowerCase().includes(searchInput.toLowerCase())
        );
      });
      //console.log("filtered data", filteredData);
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(categories);
    }
  };

  return (
    <div className="homepage">
      <div>
        <input
          class="search"
          type="search"
          value={searchInput}
          placeholder="Search...categories"
          onChange={(e) => searchItems(e.target.value)}
        />
      </div>
      <h3>Categories</h3>
      <div key={categories.id} className="directory-menu">
        {searchInput.length > 1 ? (
          <>
            {filteredResults.map((category) => (
              <Category
                key={category._id}
                id={category.id}
                title={category.title}
                subtitle={category.subtitle}
                imageUrl={category.imageUrl}
              />
            ))}
          </>
        ) : (
          <>
            {categories.map((category) => {
              return (
                <Category
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  subtitle={category.subtitle}
                  imageUrl={category.imageUrl}
                />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default Categories;*/
