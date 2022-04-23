import { sum } from "./calc";

import "./index.css"

console.log(sum( 10,20))

var root = document.querySelector(".root")

var h1 = document.createElement("h1")

h1.textContent = "HELLO WORLD"

h1.setAttribute("class","red")

root.append(h1)