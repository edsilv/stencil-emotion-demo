import { css } from 'emotion';
const someCSSProps = css `
  color: hotpink;
`;
export class MyComponent {
    render() {
        return (h("div", { className: someCSSProps },
            "Hello, World! I'm ",
            this.first,
            " ",
            this.last));
    }
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "first": {
            "type": String,
            "attr": "first"
        },
        "last": {
            "type": String,
            "attr": "last"
        }
    }; }
    static get style() { return "/**style-placeholder:my-component:**/"; }
}
