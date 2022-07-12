AOS.init();

let tombol = document.querySelector('.tombol');

tombol.addEventListener('mouseover', function () {
  this.classList.add('btn-outline-danger');
  this.classList.remove('btn-secondary');
  this.addEventListener('mouseout', function () {
    this.classList.add('btn-secondary');
    this.classList.remove('btn-outline-danger');
  });
});
