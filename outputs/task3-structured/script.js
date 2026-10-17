const progress = document.querySelector('.progress');
const boxes = document.querySelectorAll('input[type="checkbox"]');

boxes.forEach((box) => {
  box.addEventListener('change', () => {
    const checked = [...boxes].filter((item) => item.checked).length;
    progress.textContent = `${checked} / ${boxes.length}`;
  });
});
