import { h } from "@stencil/core";
export class RecipeCard {
    constructor() {
        this.imageUrl = '';
        this.category = '';
        this.isFavorite = false;
        this.showEdit = false;
        this.editUrl = '';
    }
    handleImageError(event) {
        const image = event.target;
        image.style.display = 'none';
    }
    render() {
        return (h("article", { key: '32943b64246a2d3107dffb3d8d5f4694e955fea8' }, this.imageUrl && (h("img", { key: 'e99b7ae87098a68e378895977f3cb84bb7375570', src: this.imageUrl, alt: this.recipeTitle, onError: (event) => this.handleImageError(event) })), h("div", { key: 'e0a56cbcd7fcf684741f1ef72e7ab644a88b06f2', class: "body" }, this.category && h("small", { key: '86043455a517d759004228c6b3cb92682c89c81f' }, this.category), h("h3", { key: '95a2d330dbec4669239cd9a317af8060d195437c' }, this.recipeTitle), h("slot", { key: 'e3afa23aa9566876b8b3b6ea0a031626a857990e' }), h("div", { key: '4ad0fec367c417d8099660a89519438ae5fef659', class: "actions" }, h("button", { key: '8a2e57b3a8ddc741a2d5ea0963cdece3a47c00cc', type: "button", class: "primary", onClick: () => this.detailsRequested.emit({ recipeId: this.recipeId }) }, "View details"), h("button", { key: '15b2ed572962370b4ba6fa17ecbaef9f1250e1b9', type: "button", "aria-pressed": String(this.isFavorite), onClick: () => this.favoriteToggled.emit({ recipeId: this.recipeId }) }, this.isFavorite ? 'Remove favorite' : 'Favorite'), this.showEdit && this.editUrl && (h("a", { key: 'eed4c7bb2bfa7a5360079a66cd09c05c5a96f868', class: "edit", href: this.editUrl }, "Edit")), this.showEdit && (h("button", { key: '356dd0f0d32452e515730e887d74fd5ce185159d', type: "button", class: "danger", onClick: () => this.deleteRequested.emit({ recipeId: this.recipeId }) }, "Delete"))), h("slot", { key: 'dc851e6830822966eec7b60fe3b84809e0fc5fcd', name: "actions" }))));
    }
    static get is() { return "recipe-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["recipe-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["recipe-card.css"]
        };
    }
    static get properties() {
        return {
            "recipeId": {
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
                "attribute": "recipe-id"
            },
            "recipeTitle": {
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
                "attribute": "recipe-title"
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
            },
            "category": {
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
                "attribute": "category",
                "defaultValue": "''"
            },
            "isFavorite": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "is-favorite",
                "defaultValue": "false"
            },
            "showEdit": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
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
                "attribute": "show-edit",
                "defaultValue": "false"
            },
            "editUrl": {
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
                "attribute": "edit-url",
                "defaultValue": "''"
            }
        };
    }
    static get events() {
        return [{
                "method": "favoriteToggled",
                "name": "favoriteToggled",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ recipeId: string }",
                    "resolved": "{ recipeId: string; }",
                    "references": {}
                }
            }, {
                "method": "detailsRequested",
                "name": "detailsRequested",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ recipeId: string }",
                    "resolved": "{ recipeId: string; }",
                    "references": {}
                }
            }, {
                "method": "deleteRequested",
                "name": "deleteRequested",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ recipeId: string }",
                    "resolved": "{ recipeId: string; }",
                    "references": {}
                }
            }];
    }
}
