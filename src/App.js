import React from "react";
import { render } from "react-dom";
import "./styles.css";
var dataMain, dataDb;
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: null,
      author: null
    };
    this.fetchQuote = this.fetchQuote.bind(this);
    document.body.style.backgroundColor = `rgb(${Math.random() * 255},${
      Math.random() * 255
    },${Math.random() * 255})`;
    //fetches 1000s quotes
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        dataDb = data;
      })
      .then(function (data) {
        var quoteNum = Math.floor(Math.random() * 1000);

        dataMain = dataDb[quoteNum];
      })
      .then(() => {
        this.setState({ quote: dataMain.text, author: dataMain.author });
      });
  }

  fetchQuote() {
    // fetch("https://type.fit/api/quotes")
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    var quoteNum = Math.floor(Math.random() * 1000);

    dataMain = dataDb[quoteNum];

    this.setState({ quote: dataMain.text, author: dataMain.author });
    document.body.style.backgroundColor = `rgb(${Math.random() * 255},${
      Math.random() * 255
    },${Math.random() * 255})`;
  }
  render() {
    return (
      <div id="wrapper">
        <div id="quote-box">
          <div class="quote-text">
            <i class="fa fa-quote-left"> </i>
            <span id="text">"{this.state.quote}"</span>
          </div>
          <div class="quote-author">
            - {}
            <span id="author">{this.state.author}</span>
          </div>
          <div class="buttons">
            <a
              class="button"
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
            >
              <i class="fa fa-twitter"></i>
            </a>
            <a
              class="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              target="_blank"
            >
              <i class="fa fa-tumblr"></i>
            </a>
            <button class="button" id="new-quote" onClick={this.fetchQuote}>
              New quote
            </button>
          </div>
        </div>
        <div class="footer">
          by <a href="https://codepen.io//iamsachin619/">Sachin Singh</a>
        </div>
      </div>
    );
  }
}
export default App;
