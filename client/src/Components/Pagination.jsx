import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./ComponentsStyles/Pagination.css";

export default function Paginate({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = []; // me traigo lo dogs  amostrar , todos los dogs

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }
  let restorePagination = useSelector((state) => state.filters);
  useEffect(() => {
    paginado(1);
  }, [restorePagination]);
  return (
    <nav>
      <ul className="paginationNav">
        {pageNumbers.length > 0 &&
          pageNumbers.map((number) => (
            <div key={number}>
              <li onClick={() => paginado(number)}>
                <button className="pageButton" type="button">
                  {number}
                </button>
              </li>
            </div>
          ))}
      </ul>
    </nav>
  );
}
