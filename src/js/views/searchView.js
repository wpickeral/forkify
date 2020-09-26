import { elements } from './base';
export var getInput = function () { return elements.searchInput.value; };
export var clearInput = function () {
    elements.searchInput.value = '';
};
export var clearResults = function () {
    var _a;
    (_a = elements.searchResList) === null || _a === void 0 ? void 0 : _a.innerHTML = '';
};
var renderRecipe = function (recipe) {
    var _a;
    var markup = "\n    <li>\n        <a class=\"results__link\" href=\"#" + recipe.recipe_id + "\">\n            <figure class=\"results__fig\">\n                <img src=\"" + recipe.image_url + "\" alt=\"" + recipe.title + "\">\n            </figure>\n            <div class=\"results__data\">\n                <h4 class=\"results__name\">" + recipe.title + "</h4>\n                <p class=\"results__author\">" + recipe.publisher + "</p>\n            </div>\n        </a>\n    </li>\n";
    (_a = elements.searchResList) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', markup);
};
export var renderResults = function (recipes) {
    recipes.forEach(renderRecipe);
};
