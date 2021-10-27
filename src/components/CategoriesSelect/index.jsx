import { useEffect } from "react";
import { selectorGetCategories } from "../../redux/game-service/selector";
import { getCategories } from "../../redux/game-service/actions";
import { connect } from "react-redux";
import s from "./style.module.scss";

const CategoriesSelect = ({
  setActiveFilter,
  categories,
  getCategories,
  setSearch,
}) => {
  const pullData = async () => {
    await getCategories();
  };

  useEffect(() => {
    pullData();
  }, []);

  return (
    <>
      {!!categories.length && (
        <div className={s.categoriesSidebar}>
          <h1>Categories</h1>
          <hr />
          {categories.map(({ name, id }) => {
            return (
              <button onClick={() => setActiveFilter({ name, id })} key={id}>
                {name}
              </button>
            );
          })}
          <input
            placeholder="Search"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className={s.searchInput}
          />
        </div>
      )}
    </>
  );
};

const mapStateToProps = (store) => ({
  categories: selectorGetCategories(store),
});

const mapDispatchToProps = {
  getCategories,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(CategoriesSelect);
