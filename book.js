import React from "react";
function Book() {
  return (
    <div>
      <form>
        <label>Book Id:</label>
        <input type="text" placeholder="bookid"></input>
        <br></br>
        <label>Title:</label>
        <input type="text" placeholder="title"></input>
        <br></br>
        <label>Author first name:</label>
        <input type="text" placeholder="author first name"></input>
        <br></br>
        <label>Author last name:</label>
        <input type="text" placeholder="author last name"></input>
        <br></br>
        <label>Released year:</label>
        <input type="text" placeholder="released year"></input>
        <br></br>
        <label>Stock Quantity:</label>
        <input type="number" placeholder="stock quantity"></input>
        <br></br>
        <label>pages:</label>
        <input type="number" placeholder="pages"></input>
        <br></br>
        <center>
          <button type="submit">Add Book details</button>
        </center>
      </form>
    </div>
  );
}
export default Book;
