export var elements = {
    searchForm: document.querySelector('.search'),
    searchInput: document.querySelector('.search__field'),
    searchRes: document.querySelector('.results'),
    searchResList: document.querySelector('.results__list'),
};
export var elementStrings = {
    loader: 'loader',
};
export var renderLoader = function (parent) {
    var loader = "\n    <div class=" + elementStrings.loader + ">\n        <svg>\n            <use href=\"img/icons.svg#icon-cw\"></use>\n        </svg>\n    </div>\n    \n    ";
    parent.insertAdjacentHTML('afterbegin', loader);
};
export var clearLoader = function () {
    var loader = document.querySelector("." + elementStrings.loader);
    if (loader) {
        loader.parentElement.removeChild(loader);
        // Before we can remove an element we must first always move up to the parent.
        // We can never delete a child element directly
    }
};
