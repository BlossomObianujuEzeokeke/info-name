import React from "react";

const Meme = () => {
  return (
    <main>
      <form className="form">
        <input type="text" className="form--input" placeholder="Shut up" />
        <input type="text" className="form--input" />
        <button className="form--btn">Get a new meme image 😀🀄</button>
      </form>
    </main>
  );
};

export default Meme;
