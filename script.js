/*GOODSフォーム入力チェック*/ 
const nameElement = document.querySelector('input[name="name"]');
const emailElement = document.querySelector('input[name="email"]');
const passwordElement = document.querySelector('input[name="password"]');
const telElement = document.querySelector('input[name="tel"]');
const submitElement = document.querySelector('input[name="submit"]');

submitElement.addEventListener('click', event => {
  removeErrors();

  if (nameElement.value === '') {
    showError(nameElement, '入力してください');
  }

  if (!emailElement.value.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    showError(emailElement, '正しいメールアドレスを入力してください');
  }

  if (passwordElement.value.length < 8) {
    showError(passwordElement, '8文字以上で入力してください');
  }

  if (!telElement.value.match(/^0\d{9,10}$/)) { // \d == []
    showError(telElement, '正しい電話番号を入力してください')
  }

  if (existsError()) {
    event.preventDefault(); // イベントのデフォルト操作(フォーム送信)を止める
  }
});

function showError(element, message) {
  const errorElement = document.createElement('p');
  errorElement.classList.add('message-error');
  errorElement.innerText = message;
  element.closest('label').append(errorElement);
}

function removeErrors() {
  const errors = document.querySelectorAll('.message-error');
  errors.forEach(error => error.remove());
}

function existsError() {
  const errors = document.querySelectorAll('.message-error');
  return errors.length > 0;
}
