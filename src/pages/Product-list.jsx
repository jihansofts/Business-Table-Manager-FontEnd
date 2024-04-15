import React, { Fragment, useEffect, useState } from "react";
import { GetProductList } from "../API/ApiRequest";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

function ProductList() {
  let [searchKey, setSearchKey] = useState("0");
  let [perPage, setperPage] = useState(5);

  useEffect(() => {
    GetProductList(1, perPage, searchKey);
  }, [perPage, searchKey]);

  let ALLProduct = useSelector((state) => state.product.AllProduct);
  let Total = useSelector((state) => state.product.Total);

  const onClickPageHandle = (e) => {
    let pageNo = e.selected;
    GetProductList(pageNo + 1, perPage, searchKey);
  };
  const pageHandleChange = (e) => {
    setperPage(parseInt(e.target.value));
    GetProductList(1, e.target.value, searchKey);
  };
  const SearchKeyChange = (e) => {
    setSearchKey(e.target.value);
    if (e.target.value.length > 0) {
      GetProductList(1, perPage, searchKey);
    }
  };
  const searchData = () => {
    GetProductList(1, perPage, searchKey);
  };

  return (
    <Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-6">
                      <h5>My Product List</h5>
                    </div>
                    <div className="col-2">
                      <select
                        onChange={pageHandleChange}
                        className="form-control mx-2 form-select-sm form-select form-control-sm">
                        <option value="5">5 Per Page</option>
                        <option value="10">10 Per Page</option>
                        <option value="20">20 Per Page</option>
                        <option value="30">30 Per Page</option>
                        <option value="50">50 Per Page</option>
                        <option value="100">100 Per Page</option>
                        <option value="200">200 Per Page</option>
                        <option value="200">200 Per Page</option>
                      </select>
                    </div>
                    <div className="col-4">
                      <div className="input-group mb-3">
                        <input
                          onChange={SearchKeyChange}
                          type="text"
                          className="form-control form-control-sm"
                          placeholder="Search.."
                          aria-label="Recipient's username"
                          aria-describedby="button-addon2"
                        />
                        <button
                          onClick={searchData}
                          className="btn  btn-outline-primary btn-sm mb-0"
                          type="button">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="table-responsive data-table">
                        <table className="table ">
                          <thead className="sticky-top bg-white">
                            <tr>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Product
                              </th>
                              <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                Price
                              </th>
                              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Stock
                              </th>
                              <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                                Code
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {ALLProduct.map((item, i) => (
                              <tr>
                                <td>
                                  <div className="d-flex px-2 py-1">
                                    <div>
                                      <img
                                        src={item.image}
                                        className="avatar me-3"
                                        alt=""
                                      />
                                    </div>
                                    <div className="d-flex flex-column justify-content-center">
                                      <h6 className="mb-0  text-xs">
                                        {item.title}
                                      </h6>
                                      <p className="text-xs  text-secondary mb-0">
                                        {item.category}
                                      </p>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <p className="text-xs font-weight-bold mb-0">
                                    {item.brand}
                                  </p>
                                  <p className="text-xs  text-secondary mb-0">
                                    {item.price} Taka
                                  </p>
                                </td>
                                <td>
                                  <p className="badge  bg-gradient-success">
                                    {item.stock}
                                  </p>
                                </td>
                                <td>
                                  <span className="text-secondary text-xs font-weight-bold">
                                    {item.product_code}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-12 mt-5">
                      <nav aria-label="Page navigation example">
                        <ReactPaginate
                          previousLabel="<"
                          nextLabel=">"
                          pageClassName="page-item"
                          pageLinkClassName="page-link"
                          previousClassName="page-item"
                          previousLinkClassName="page-link"
                          nextClassName="page-item"
                          nextLinkClassName="page-link"
                          breakLabel="..."
                          breakClassName="page-item"
                          breakLinkClassName="page-link"
                          pageCount={Total / perPage}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={5}
                          onPageChange={onClickPageHandle}
                          containerClassName="pagination"
                          activeClassName="active"
                        />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ProductList;
