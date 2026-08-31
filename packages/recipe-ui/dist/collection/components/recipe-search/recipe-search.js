import { h } from "@stencil/core";
export class RecipeSearch {
    constructor() {
        this.initialQuery = '';
        this.categories = [];
        this.query = '';
        this.category = '';
    }
    componentWillLoad() { this.query = this.initialQuery; }
    submit(e) { e.preventDefault(); this.searchSubmitted.emit({ query: this.query.trim(), category: this.category }); }
    render() {
        return h("form", { key: 'cc23d380ac164aac23598ac214ca78b2dc32dca8', onSubmit: e => this.submit(e) }, h("label", { key: 'a8eb05bc4493f13332901a8c0e595c67f2eb7fe1' }, "Search recipes", h("input", { key: '6b229ea5704b0a70afeb78981fc81f105aff16a2', value: this.query, onInput: (e) => this.query = e.target.value, placeholder: "e.g. chicken" })), h("label", { key: '3b2cfedab65de9c576dcf41aace9d13fbf2a2691' }, "Category", h("select", { key: '979b32a56af8050deffe6e03e1b0004ffa6a32da', onInput: (e) => this.category = e.target.value }, h("option", { key: '9d27140c2d7b6e74fd79cfdc01e0b4e5af730ad5', value: "" }, "All categories"), this.categories.map(c => h("option", { value: c }, c)))), h("button", { key: '3ee018f35409d537518493df3210cb675495b6ec', type: "submit" }, "Search"));
    }
    static get is() { return "recipe-search"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["recipe-search.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["recipe-search.css"]
        };
    }
    static get properties() {
        return {
            "initialQuery": {
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
                "attribute": "initial-query",
                "defaultValue": "''"
            },
            "categories": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "string[]",
                    "resolved": "string[]",
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
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "query": {},
            "category": {}
        };
    }
    static get events() {
        return [{
                "method": "searchSubmitted",
                "name": "searchSubmitted",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{query:string;category:string}",
                    "resolved": "{ query: string; category: string; }",
                    "references": {}
                }
            }];
    }
}
