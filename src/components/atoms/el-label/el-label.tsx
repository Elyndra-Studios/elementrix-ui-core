import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-label',
  styleUrl: 'el-label.scss',
  shadow: true,
})
export class ElLabel {
  /** Id of the form control this label is for */
  @Prop() for?: string;

  /** Mark the associated field as required */
  @Prop() required = false;

  /** Mark the associated field as optional */
  @Prop() optional = false;

  /** Visual size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  private get hostClass() {
    return {
      'el-label': true,
      [`el-label--${this.size}`]: true,
      'el-label--required': this.required,
      'el-label--optional': this.optional,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <label class="el-label__inner" htmlFor={this.for}>
          <span class="el-label__text">
            <slot />
          </span>

          {this.required && <span class="el-label__required-indicator" aria-hidden="true">*</span>}
          {this.optional && !this.required && (
            <span class="el-label__optional-text">(optional)</span>
          )}
        </label>

        <div class="el-label__hint">
          <slot name="hint" />
        </div>
      </Host>
    );
  }
}
