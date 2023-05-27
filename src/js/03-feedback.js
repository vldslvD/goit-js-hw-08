import throttle from "lodash.throttle";
const formRef = document.querySelector('.feedback-form');
const emailInputRef = formRef.children[0].firstElementChild;
const msgInputRef = formRef.children[1].firstElementChild;

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSubmit);
let formData = {};

fillFromLS();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  console.log(formData);
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function fillFromLS() {
  const fillData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (fillData) {
    emailInputRef.value = fillData['email']||"";
    msgInputRef.value = fillData['message'] ||"";
    formData['email'] = fillData['email']||"";
    formData['message'] = fillData['message'] || "";
    //Має бути якийсь спосіб більш адекватний, стопроц, але я до нього не додумався
    //В ідеалі потрібно в локалСторадж відправляти навіть пусті рядки, щоб таким не займатись, але тоді треба слідкувати за кожним з інпутів окремо
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();

  //Що краще використати у цьому випадку? напевно, що №1, бо немає зайвих звернень до локалСтораджа?
  //#1
  console.log(formData);
  //#2
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.removeItem('feedback-form-state');
  formData = {};
}