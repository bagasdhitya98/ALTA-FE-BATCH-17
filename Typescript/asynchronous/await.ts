import { generateRandom } from "../asynchronous/promise";

function playGacha() {
  generateRandom();
}

function result() {
  playGacha();
}

result();
