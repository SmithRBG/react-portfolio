import React from "react";

function Card(props) {
  return (
   
<>
    <div class="card">
    <img src="../assets/CQ1.jpg" class="card-img-top" alt="Coding Quiz Image" />
    <div class="card-body">
    <h5 class="card-title">Coding Quiz</h5>
    <p class="card-text">A coding quiz showcasing javascript. Take the quiz and test your luck as a goth music expert.</p>
    <a href="https://smithrbg.github.io/Coding-Quiz/" class="btn btn-primary">Check it Out</a>
    </div>
    </div>

    <div class="card">
    <img src="" class="card-img-top" alt="API Search" />
    <div class="card-body">
    <h5 class="card-title">Ask Oracle</h5>
    <p class="card-text">A applicaion to look up superhero movies using an API.</p>
    <a href="https://devinpawline.github.io/Ask_Oracle/" class="btn btn-primary">Check it Out</a>
    </div>
    </div>

    <div class="card">
    <img src="" class="card-img-top" alt="Markdown Maker" />
    <div class="card-body">
    <h5 class="card-title">Markdown Maker</h5>
    <p class="card-text">This application utilizates Node to create a professional ReadMe.</p>
    <a href="https://github.com/SmithRBG/Markdown-Maker" class="btn btn-primary">Check it Out</a>
    </div>
    </div>

    <div class="card">
    <img src="" class="card-img-top" alt="Fitness Tracker" />
    <div class="card-body">
    <h5 class="card-title">Fitness Tracker</h5>
    <p class="card-text">Keep track of your projects with ths fitness tracker. Uses MongoDB, Mongo Atlas, and deployed on Heroku.</p>
    <a href="https://pacific-peak-57462.herokuapp.com/?id=613ec08c5f05430016e3d165" class="btn btn-primary">Check it Out</a>
    </div>
    </div>

    <div class="card">
    <img src="" class="card-img-top" alt="GitShare Application" />
    <div class="card-body">
    <h5 class="card-title">Git Share</h5>
    <p class="card-text">Get help with projects from around the globe, get started with GitShare. Git share uses Node, Express, and Sql.</p>
    <a href="https://git-share.herokuapp.com/" class="btn btn-primary">Check it Out</a>
    </div>
    </div>

    <div class="card">
    <img src="" class="card-img-top" alt="E-Commerce Backend" />
    <div class="card-body">
    <h5 class="card-title">E-Commerce Backend</h5>
    <p class="card-text">E-Commerce backend configured with Express.js API using Sequelize to interact with a MySQL database.</p>
    <a href="https://github.com/SmithRBG/E-Commerce_Back_End" class="btn btn-primary">Check it Out</a>
    </div>
    </div>
</>

  );
}


export default Card;