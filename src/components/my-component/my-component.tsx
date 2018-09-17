import { Component, Prop } from '@stencil/core';
import { css } from 'emotion';

const someCSSProps  = css`
  color: hotpink;
`

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div className={someCSSProps}>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
