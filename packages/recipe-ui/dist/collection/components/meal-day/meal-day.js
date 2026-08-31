import { h } from "@stencil/core";
export class MealDay {
    constructor() {
        this.recipeTitle = '';
        this.imageUrl = '';
    }
    render() {
        return h("section", { key: '3d6177d3a67ae3b9be69f24563905949b0f00a12' }, h("h3", { key: '5fb7139f200a5e96efbf5f55d2692ad0ab1f35e2' }, this.day), this.recipeTitle ? h("div", null, this.imageUrl && h("img", { src: this.imageUrl, alt: "" }), h("strong", null, this.recipeTitle), h("div", null, h("button", { onClick: () => this.chooseMeal.emit({ day: this.day }) }, "Change"), h("button", { onClick: () => this.removeMeal.emit({ day: this.day }) }, "Remove"))) : h("button", { class: "add", onClick: () => this.chooseMeal.emit({ day: this.day }) }, "+ Choose recipe"));
    }
    static get is() { return "meal-day"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["meal-day.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["meal-day.css"]
        };
    }
    static get properties() {
        return {
            "day": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "day"
            },
            "recipeTitle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "recipe-title",
                "defaultValue": "''"
            },
            "imageUrl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "image-url",
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "chooseMeal",
                "name": "chooseMeal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{day:string}",
                    "resolved": "{ day: string; }",
                    "references": {}
                }
            }, {
                "method": "removeMeal",
                "name": "removeMeal",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{day:string}",
                    "resolved": "{ day: string; }",
                    "references": {}
                }
            }];
    }
}
