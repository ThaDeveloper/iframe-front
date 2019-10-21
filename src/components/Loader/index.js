import React from "react";
import AdminContext from "../../contexts/adminContext";

function Loader() {
  return (
    <AdminContext.Consumer>
      {value =>
        value.contentLoading ? (
          <div className="loader-bg">
            <div className="loader-track">
              <div className="loader-fill" />
            </div>
          </div>
        ) : null
      }
    </AdminContext.Consumer>
  );
}

export default Loader;
