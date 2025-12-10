import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-button',
  styleUrl: 'el-button.scss',
  shadow: true,
})
export class ElButton {
  /** Visual variant of the button */
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' = 'primary';

  /** Size of the button */
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /** Disabled state */
  @Prop() disabled = false;

  /** Loading state */
  @Prop() loading = false;

  /** Icon-only button (no text) */
  @Prop() iconOnly = false;

  /** Make button take full width of its container */
  @Prop() fullWidth = false;

  private get hostClass() {
    return {
      [`el-button`]: true,
      [`el-button--${this.variant}`]: true,
      [`el-button--${this.size}`]: true,
      'el-button--disabled': this.disabled,
      'el-button--loading': this.loading,
      'el-button--icon-only': this.iconOnly,
      'el-button--full-width': this.fullWidth,
    };
  }

  render() {
    const isDisabled = this.disabled || this.loading;

    return (
      <Host class={this.hostClass}>
        <button class="el-button__inner" disabled={isDisabled} aria-busy={this.loading ? 'true' : 'false'}>
          <span class="el-button__icon el-button__icon--left">
            <slot name="icon-left" />
          </span>

          <span class="el-button__label">
            <slot />
          </span>

          <span class="el-button__icon el-button__icon--right">
            <slot name="icon-right" />
          </span>
        </button>
      </Host>
    );
  }
}
