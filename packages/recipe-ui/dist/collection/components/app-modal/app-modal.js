import { h, Host } from "@stencil/core";
export class AppModal {
    constructor() {
        this.open = false;
    }
    render() {
        return h(Host, { key: 'b8c43c837128e55b36daa1f56c17f2a8f3640555' }, this.open && h("div", { key: '309b0eeb4c67f450622697bacd83992088dc4e31', class: "backdrop", onClick: () => this.modalClosed.emit() }, h("section", { key: '92cb294886e0525f5706dcc57121ad2089e1e59a', role: "dialog", "aria-modal": "true", onClick: e => e.stopPropagation() }, h("header", { key: 'd6ae0ca4347e667d9b60a0a284495db6bda266c1' }, h("slot", { key: '14054682a9cb4a405b48f7393a2862f2dfed662b', name: "header" }), h("button", { key: '1362d97b73b349f086938057a4f7a94b7111cbd5', "aria-label": "Close", onClick: () => this.modalClosed.emit() }, "\u00D7")), h("main", { key: 'c81825b6dd11c38003b4cfb5849e1780e5009d84' }, h("slot", { key: '499e05efbf8d134288a49a48ed4751456665fc4e' })), h("footer", { key: '4cdaf744a0db2001ee494a9d6a0433ec2a786be0' }, h("slot", { key: '92da039cf50f7c085b36e0ca74c14c98dc832bd0', name: "footer" })))));
    }
    static get is() { return "app-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["app-modal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["app-modal.css"]
        };
    }
    static get properties() {
        return {
            "open": {
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
                "attribute": "open",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "modalClosed",
                "name": "modalClosed",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
