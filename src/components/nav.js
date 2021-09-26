import React from "react";

//Use these links/buttons to sort information...
function Navbar() {
  return (
    <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="https://github.com/SmithRBG" target="_blank">GitHub</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="https://smithrbg.github.io/Developer-Website/" target="_blank">Website</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="https://docs.google.com/document/d/12d0QKOczpuSP1YJk_yjh15oIfCA0AnAXOmWYfsR5NFI/edit" target="_blank">Resume</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled">Contact Me </a>
  </li>
</ul>
   
  );
}

export default Navbar;
