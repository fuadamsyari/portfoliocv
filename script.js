AOS.init();

const tombol = document.querySelector('.tombol');

tombol.addEventListener('mouseover', function () {
  this.classList.add('btn-outline-danger');
  this.classList.remove('btn-secondary');
  this.addEventListener('mouseout', function () {
    this.classList.add('btn-secondary');
    this.classList.remove('btn-outline-danger');
  });
});

// even pada saat di klik

const pscrl = document.querySelectorAll('.page-scroll');

pscrl.forEach((item) => {
  console.log(item);
  item.addEventListener('click', function () {
    let tujuan = item.getAttribute('data-link');
    let elemenTujuan = document.querySelector(tujuan);
    elemenTujuan.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    // elemenTujuan.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  });
});
