import React from "react";
import "./Filtersection.css";
import { useFitercontext } from "../../../Context/Filter_context";
import { Formatprice } from "../../../Helpers/Formatprice";
import { Check } from "@material-ui/icons";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useState } from "react";
export const Filtersection = () => {
  let [rotate, setrotate] = useState(false);
  let togglefun = () => {
    if (!rotate) {
      setrotate(true);
    } else {
      setrotate(false);
    }
  };
  let {
    filters: { text, colors, price, maxPrice, minPrice },
    updatefiltervalue,
    all_products,
    clearfilters,
  } = useFitercontext();
  //to get the unique data of each field
  let getuniquedata = (data, prototype) => {
    let newval = data.map((currentelm) => {
      return currentelm[prototype];
    });
    if (prototype === "colors") {
      // return newval = ["All",...new Set([].concat(...newval))];
      newval = newval.flat();
    }
    return (newval = ["All", ...new Set(newval)]);
  };
  //we need to have indivisual data of each in an arry format
  const categoryonlydata = getuniquedata(all_products, "category");
  const companyonlydata = getuniquedata(all_products, "company");
  const colorsdata = getuniquedata(all_products, "colors");

  return (
    <div
      className={
        rotate ? "row filtersection activerotate" : "row filtersection"
      }
    >
      <div className="downarrow d-block d-md-none">
        <KeyboardArrowDownIcon onClick={togglefun} />
      </div>
      <div className="col-12 filter-search">
        <form action="" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={updatefiltervalue}
            className="px-1 py-1 allcorlor"
            placeholder="search here"
          />
        </form>
      </div>
      <div className="row filter-catagory mt-4">
        <h5>Category</h5>
        {categoryonlydata.map((currentdta, id) => {
          return (
            <>
              <div className="col-12">
                <button
                  className="mt-2"
                  type="button"
                  key={id}
                  name="category"
                  value={currentdta}
                  onClick={updatefiltervalue}
                >
                  {currentdta}{" "}
                </button>
              </div>
            </>
          );
        })}
      </div>
      <div className="row filter-company mt-4">
        <h5>Company</h5>
        <div className="col-12">
          <select
            name="company"
            id="company"
            className="filter-company-select"
            onClick={updatefiltervalue}
          >
            {companyonlydata.map((currentdata, id) => {
              return (
                <>
                  <option value={currentdata} key={id} name="company">
                    {currentdata}
                  </option>
                </>
              );
            })}
          </select>
        </div>
      </div>
      <div className="row mt-4 filter-colors">
        <h5>Colors</h5>
        <div className="col-12">
          {colorsdata.map((currentdta, index) => {
            if (currentdta === "All") {
              return (
                <button
                  key={index}
                  type="button"
                  value={currentdta}
                  name="colors"
                  id="colors"
                  className="me-2"
                  onClick={updatefiltervalue}
                >
                  All
                </button>
              );
            }
            return (
              <>
                <button
                  key={index}
                  type="button"
                  value={currentdta}
                  name="colors"
                  id="colors"
                  style={{ background: currentdta }}
                  onClick={updatefiltervalue}
                  className={colors === currentdta ? "btnactive me-1" : "me-1"}
                >
                  {colors === currentdta ? <Check /> : ""}
                </button>
              </>
            );
          })}
        </div>
      </div>
      <div className="row filter-price mt-4">
        <div className="col-12">
          <h5>Price</h5>
          <p>
            <Formatprice price={price} />
          </p>
          <input
            type="range"
            max={maxPrice}
            min={minPrice}
            value={price}
            onChange={updatefiltervalue}
            name="price"
          />
        </div>
      </div>
      <div className="row filter-clear mt-3">
        <div className="col-12">
          <button className="btn" onClick={clearfilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};
