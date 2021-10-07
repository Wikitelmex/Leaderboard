import './style.css';
import { MyHttpRequest } from './modules/httpRequests.js';
import { DomRequest } from './modules/domRequests.js';
import { Templates } from './modules/domTemplates.js';

const myUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dJgNxV0NZwLdKmSLhQCZ/scores/';
const httpreq = new MyHttpRequest(myUrl);
const myForm = document.querySelector('#myForm');

// #region Form-Validators
const validator = () => {
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
};
// #endregion

window.refreshData = () => {
  DomRequest.clear('tableElements');
  httpreq.getAsync().then((res) => {
    res.forEach((element) => {
      DomRequest.appendTemplate('tableElements', Templates.scoreRow(element.user, element.score));
    });
  });
};

window.onload = () => {
  window.refreshData();
  validator();
};

myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!myForm.checkValidity()) {
    validator();
    return;
  }
  const userName = document.querySelector('#TextBoxName');
  const userScore = document.querySelector('#TextBoxScore');
  httpreq.postAsync({
    user: userName.value,
    score: parseInt(userScore.value, 10),
  }).then(() => {
    DomRequest.appendTemplate('tableElements', Templates.scoreRow(userName.value, userScore.value));
    myForm.reset();
  });
});
