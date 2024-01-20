const lokal_Storage_Key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');
const email = document.querySelector('input');

try {
  const initFormDat = JSON.parse(localStorage.getItem(lokal_Storage_Key));

  Array.from(form.elements).forEach(elem => {
    const locStorVal = initFormDat[elem.name];
    if (locStorVal) {
      elem.value = locStorVal;
    }
  });
} catch (e) {
  console.error('Parse storage form ERROR');
}

form.addEventListener('input', event => {
  const formData = new FormData(form);
  const feedbackObject = {};
  formData.forEach((value, key) => {
    feedbackObject[key.trim()] = value.trim();
  });
  localStorage.setItem(lokal_Storage_Key, JSON.stringify(feedbackObject));
});
form.addEventListener('submit', event => {
  event.preventDefault();
  try {
    const initFormData = JSON.parse(localStorage.getItem(lokal_Storage_Key));
    if (!email.value.trim() || !textarea.value.trim()) {
      alert('Усі поля повинні бути заповнені');
    } else {
      console.log(initFormData);
    }
  } catch (e) {
    console.error('Parse storage form ERROR');
  }
  localStorage.removeItem(lokal_Storage_Key);
  form.reset();
});
