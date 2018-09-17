import { Component, Prop } from '@stencil/core';
import { css } from 'emotion';

const className = css`
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
      <div class={className}>
        Hello, World! I'm {this.first} {this.last}
      </div>
    );
  }
}
