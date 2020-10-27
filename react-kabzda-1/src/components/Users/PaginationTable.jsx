import React from "react";
import ReactNextPaging from "react-next-paging";
import s from "./Users.module.css";

const buttonStyles = {
  border: "1px solid #ccc",
  background: "#fff",
  fontSize: "0.8em",
  padding: 10,
  margin: 5,
  width: 50
};

const PaginationTable = ({ itemsperpage, nocolumns, items, pagesspan, props }) => {
  return (
    <ReactNextPaging
      itemsperpage={itemsperpage}
      nocolumns={nocolumns}
      items={items}
      pagesspan={pagesspan}
    >
      {({
          getBackButtonProps,
          getFastBackButtonProps,
          getFwdButtonProps,
          getFastFwdButtonProps,
          getSelPageButtonProps,
          inipagearray,
          pagesforarray,
          currentpage,
          noitems,
          initialitem,
          lastitem,
          goBackBdisabled,
          goFastBackBdisabled,
          goFwdBdisabled,
          goFastFwdBdisabled
        }) => (
        <tbody>
        {items.slice(initialitem, lastitem).map(p =>
          <span className={(props.currentPage === p) ? s.selected : null}
                onClick={() => props.onPageChanged(p)}>{p}</span>)}
        {noitems > 0
          ? [
            <tr key={"pagingrow" + 100}>
              <td colSpan={nocolumns} style={{ textAlign: "center" }}>
                <button
                  style={buttonStyles}
                  {...getFastBackButtonProps()}
                  disabled={goFastBackBdisabled}
                >
                  {"<<"}
                </button>
                <button
                  style={buttonStyles}
                  {...getBackButtonProps()}
                  disabled={goBackBdisabled}
                >
                  {"<"}
                </button>
                {Array.from(
                  { length: pagesforarray },
                  (v, i) => i + inipagearray
                ).map(page => {
                  return (
                    <button
                      key={page}
                      {...getSelPageButtonProps({ page: page })}
                      disabled={currentpage === page}
                    >
                      {page}
                    </button>
                  );
                })}
                <button
                  style={buttonStyles}
                  {...getFwdButtonProps()}
                  disabled={goFwdBdisabled}
                >
                  {">"}
                </button>
                <button
                  style={buttonStyles}
                  {...getFastFwdButtonProps()}
                  disabled={goFastFwdBdisabled}
                >
                  {">>"}
                </button>
              </td>
            </tr>
          ]
          : null}
        </tbody>
      )}
    </ReactNextPaging>
  );
};

export default PaginationTable;