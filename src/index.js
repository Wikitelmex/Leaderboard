import './style.css';
import { myHttpRequest } from "./modules/httpRequests.js";
import { domRequest } from "./modules/domRequests.js";
import { scoreRow } from "./modules/domTemplates"

const myUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zQeTLB9MkqImEjIEky2O/scores/';
const httpreq = new myHttpRequest(myUrl);
const domreq = new domRequest();

window.refreshData = () => {
  domreq.clear('tableElements');
  httpreq.getAsync().then( res => {
    res.forEach(element => {
      domreq.appendTemplate('tableElements',scoreRow(element.user,element.score));
    });
  });
}

window.onload = ()  => {
  window.refreshData();
};

(function () {
  const forms = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(forms)
    .forEach((form) => {
      form.addEventListener('submit', (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
}());