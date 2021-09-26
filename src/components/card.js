import React from "react";

function Card(props) {
  return (
   /*  <div className="card text-center">
      <div className="card-header">
        <h2>Coding Quiz</h2>
        </div>
        <div>
        <p class="card-text">A coding quiz showcasing javascript. Take the quiz and test your luck as a goth music expert.</p>
      </div>
      <div className="card-body">{props.children}</div>
    </div> */
    <div class="card">
    <img src="../assets/CQ1.jpg" class="card-img-top" alt="Coding Quiz Image" />
    <div class="card-body">
    <h5 class="card-title">Coding Quiz</h5>
    <p class="card-text">A coding quiz showcasing javascript. Take the quiz and test your luck as a goth music expert.</p>
    <a href="https://smithrbg.github.io/Coding-Quiz/" class="btn btn-primary">Check it Out</a>
    </div>
    </div>

 /*    <div class="card">
    <img src="" class="card-img-top" alt="API Search" />
    <div class="card-body">
    <h5 class="card-title">Ask Oracle</h5>
    <p class="card-text">A applicaion to look up superhero movies using an API.</p>
    <a href="https://devinpawline.github.io/Ask_Oracle/" class="btn btn-primary">Check it Out</a>
    </div>
    </div> */

  );
}


export default Card;