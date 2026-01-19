const textarea = document.getElementById('num');
textarea.readOnly = true;

const btn1 = document.querySelector('.btn-add');
const btn2 = document.querySelector('.btn-minus');

let count = 0;

btn1.addEventListener('click', function () {
  count = count + 1;
  textarea.value = count;
});

btn2.addEventListener('click', function () {
  count = count - 1;
  textarea.value = count;
});
