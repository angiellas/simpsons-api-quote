import React from "react";

function DisplayQuote({ quote }) {
  return (
    <div>
      <img src={quote.image} />
      <ul>
        <li>{quote.quote}</li>
        <li>{quote.character}</li>
      </ul>
    </div>
  );
}

export default DisplayQuote;
