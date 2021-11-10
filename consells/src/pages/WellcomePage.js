import React from "react";

const WellcomePage = ({changeFirstTime}) => {

  return (
    <section>
      <h1>¿Preparat per aquesta aventura espacial?</h1>
      <button
        type="button"
        onClick={() => {
          changeFirstTime()
        }}
      >
        Començar
      </button>
    </section>
  );
};

export default WellcomePage ;
