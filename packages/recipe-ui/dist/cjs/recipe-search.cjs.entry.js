'use strict';

var index = require('./index-B2UvBNuy.js');

const recipeSearchCss = () => `:host{display:block;font-family:Inter,system-ui,sans-serif}form{display:grid;grid-template-columns:2fr 1fr auto;gap:12px;align-items:end;background:#eef7f1;padding:16px;border-radius:16px}label{display:grid;gap:6px;font-weight:650;color:#173d29}input,select,button{font:inherit;border:1px solid #adc4b5;border-radius:10px;padding:11px;background:white}button{background:#197149;color:white;border-color:#197149;font-weight:700;cursor:pointer}@media (max-width:650px){form{grid-template-columns:1fr}}`;

const RecipeSearch = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.searchSubmitted = index.createEvent(this, "searchSubmitted");
        this.initialQuery = '';
        this.categories = [];
        this.query = '';
        this.category = '';
    }
    componentWillLoad() { this.query = this.initialQuery; }
    submit(e) { e.preventDefault(); this.searchSubmitted.emit({ query: this.query.trim(), category: this.category }); }
    render() {
        return index.h("form", { key: 'cc23d380ac164aac23598ac214ca78b2dc32dca8', onSubmit: e => this.submit(e) }, index.h("label", { key: 'a8eb05bc4493f13332901a8c0e595c67f2eb7fe1' }, "Search recipes", index.h("input", { key: '6b229ea5704b0a70afeb78981fc81f105aff16a2', value: this.query, onInput: (e) => this.query = e.target.value, placeholder: "e.g. chicken" })), index.h("label", { key: '3b2cfedab65de9c576dcf41aace9d13fbf2a2691' }, "Category", index.h("select", { key: '979b32a56af8050deffe6e03e1b0004ffa6a32da', onInput: (e) => this.category = e.target.value }, index.h("option", { key: '9d27140c2d7b6e74fd79cfdc01e0b4e5af730ad5', value: "" }, "All categories"), this.categories.map(c => index.h("option", { value: c }, c)))), index.h("button", { key: '3ee018f35409d537518493df3210cb675495b6ec', type: "submit" }, "Search"));
    }
};
RecipeSearch.style = recipeSearchCss();

exports.recipe_search = RecipeSearch;
