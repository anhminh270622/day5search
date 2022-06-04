const closeSearch = document.querySelector('.item');
const openSearch = document.querySelector('.on');
const minh = document.querySelector('.on');

openSearch.addEventListener('click', function () {
    if (closeSearch.classList.contains('close')) {
        closeSearch.classList.add('active');
    }
    // console.log(this);
    // this.parentElement.classList.toggle('open');
}
);

minh.addEventListener('click', function () {
    if (closeSearch.classList.contains('active')) {
        closeSearch.classList.add('active');
    }
    // console.log(this);
    // this.parentElement.classList.toggle('open');
})

