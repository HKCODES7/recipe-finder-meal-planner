import { r as registerInstance, c as createEvent, h } from './index-g1DkgzAh.js';

const mealDayCss = () => `:host{display:block;font-family:Inter,system-ui,sans-serif}section{border:1px solid #d9e6dd;border-radius:15px;padding:14px;background:#fff}h3{margin:0 0 10px;color:#173d29;text-transform:capitalize}img{width:58px;height:58px;object-fit:cover;border-radius:10px;vertical-align:middle;margin-right:10px}strong{vertical-align:middle}button{margin:10px 7px 0 0;padding:8px 10px;border:1px solid #aac0b1;background:#fff;border-radius:8px;cursor:pointer}.add{width:100%;border-style:dashed;color:#197149}`;

const MealDay = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.chooseMeal = createEvent(this, "chooseMeal");
        this.removeMeal = createEvent(this, "removeMeal");
        this.recipeTitle = '';
        this.imageUrl = '';
    }
    render() {
        return h("section", { key: '3d6177d3a67ae3b9be69f24563905949b0f00a12' }, h("h3", { key: '5fb7139f200a5e96efbf5f55d2692ad0ab1f35e2' }, this.day), this.recipeTitle ? h("div", null, this.imageUrl && h("img", { src: this.imageUrl, alt: "" }), h("strong", null, this.recipeTitle), h("div", null, h("button", { onClick: () => this.chooseMeal.emit({ day: this.day }) }, "Change"), h("button", { onClick: () => this.removeMeal.emit({ day: this.day }) }, "Remove"))) : h("button", { class: "add", onClick: () => this.chooseMeal.emit({ day: this.day }) }, "+ Choose recipe"));
    }
};
MealDay.style = mealDayCss();

export { MealDay as meal_day };
