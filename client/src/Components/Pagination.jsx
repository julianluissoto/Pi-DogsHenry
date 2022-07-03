import React from "react";
import "./ComponentsStyles/Pagination.css";

export default function Paginate({ dogsPerPage, allDogs, paginado }) {
  const pageNumbers = []; // me traigo lo dogs  amostrar , todos los dogs

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="paginationNav">
        {pageNumbers &&
          pageNumbers.map((number) => (
            <div key={number}>
              <li className="liStyle" onClick={() => paginado(number)}>
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
