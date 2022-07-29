const container = document.querySelector('.container');
const jumbo = document.querySelector('.img-jumbo');
const tumbs = document.querySelectorAll('.tumb');

container.addEventListener('click', function (e) {
  // cek apakah yang di-klik adalah tumb
  if ((e.target.className = 'tumb')) {
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function () {
      jumbo.classList.remove('fade');
    }, 500);

    tumbs.forEach(function (tumb) {
      // if (tumb.classList.contains('active')) {
      //   tumb.classList.remove('active');
      // }
      tumb.className = 'tumb';
    });

    e.target.classList.add('active');
  }
});
