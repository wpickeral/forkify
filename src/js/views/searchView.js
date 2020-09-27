import { elements } from './base';
export var getInput = function () { return elements.searchInput.value; };
export var clearInput = function () {
    elements.searchInput.value = '';
};
export var clearResults = function () {
    var _a;
    (_a = elements.searchResList) === null || _a === void 0 ? void 0 : _a.innerHTML = '';
};
/*
// 'Past with tomato and spinach
acc: 0 / acc + cur.length = 5 / newTitle = ['Pasta']
acc: 5 / acc + cur.length = 9 / newTitle = ['Pasta', 'with']
acc: 9 / acc + cur.length = 15 / newTitle = ['Pasta', 'with', 'tomato']
acc: 15 / acc + cur.length = 18 / newTitle = ['Pasta', with', 'tomato',]
acc: 18 / acc + cur.length = 24 / newTitle = ['Pasta', with', 'tomato',]

*/
var limitRecipeTitle = function (title, limit) {
    if (limit === void 0) { limit = 17; }
    var newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce(function (acc, cur) {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        return newTitle.join(' ') + "...";
    }
    return title;
};
var renderRecipe = function (recipe) {
    var _a;
    var markup = "\n    <li>\n        <a class=\"results__link\" href=\"#" + recipe.recipe_id + "\">\n            <figure class=\"results__fig\">\n                <img src=\"" + recipe.image_url + "\" alt=\"" + recipe.title + "\">\n            </figure>\n            <div class=\"results__data\">\n                <h4 class=\"results__name\">" + limitRecipeTitle(recipe.title) + "</h4>\n                <p class=\"results__author\">" + recipe.publisher + "</p>\n            </div>\n        </a>\n    </li>\n";
    (_a = elements.searchResList) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML('beforeend', markup);
};
export var renderResults = function (recipes) {
    recipes.forEach(renderRecipe);
};
