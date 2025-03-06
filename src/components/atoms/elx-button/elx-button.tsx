import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'elx-button',
  styleUrl: 'elx-button.scss',
  shadow: true,
})
export class ElxButton {
  @Prop() variant: 'primary' | 'secondary' = 'primary';
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  @Prop() radius: 'small' | 'medium' | 'large' = 'medium';
  @Prop() disabled: boolean = false;

  render() {
    return (
      <button
        class={`elx-button ${this.variant} ${this.size} radius-${this.radius} ${this.disabled ? 'disabled' : ''}`}
        disabled={this.disabled}
      >
        <slot />
      </button>
    );
  }
}
