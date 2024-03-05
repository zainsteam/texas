import Layout from "../../layouts/layout";
import style from "./Category.module.scss";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuData } from "../../data/Menu";

export const Category = () => {
  const { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const menuData = MenuData;

  // Filter out "DESERTS & SHAKES" items
  const dessertsAndShakes = menuData.find(
    (category) => category.head === title
  );

  // Group items by sub-category
  const groupedItems = dessertsAndShakes.items.reduce((acc, item) => {
    const subCategory = item.sub_category;
    if (!acc[subCategory]) {
      acc[subCategory] = [];
    }
    acc[subCategory].push(item);

    return acc;
  }, {});
  const subCategories = Object.keys(groupedItems);

  return (
    <>
      <Layout>
        <div className={`${style["menu"]}`}>
          <div className={`${style["menu_pg1"]}`}>
            <div className={`${style["main"]}`}>
              <h1>{dessertsAndShakes.head}</h1>
              <p>Texas Food, The Texan Way</p>
            </div>
          </div>
          <div className={`${style["menu_pg2"]}`}>
            <h1>{dessertsAndShakes.head}</h1>
            {Object.entries(groupedItems).map(([subCategory, items]) => (
              <div key={subCategory}>
                {subCategories.length > 1 && (
                  <h4 className={`${style["sub-text"]}`}>{subCategory}</h4>
                )}
                <div id={`${style["menu_card"]}`}>
                  {items.map((data, index) => (
                    <a href={data.url}>
                      <div key={index} className={`${style["menu_card"]}`}>
                        <div className={`${style["drink_height"]}`}>
                          <img src={data.img} alt="" />
                        </div>
                        <h2>{data.name}</h2>

                        <p className={data.para ? "" : `${style["hidden"]}`}>
                          {data.para}
                        </p>
                        <h3>{data.price}</h3>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};
// export default Menu;
