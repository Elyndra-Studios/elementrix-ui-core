import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-checkbox',
  styleUrl: 'el-checkbox.scss',
  shadow: true,
})
export class ElCheckbox {
  /** Visual size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Checked state */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** Indeterminate state */
  @Prop({ reflect: true }) indeterminate = false;

  /** Disabled state */
  @Prop({ reflect: true }) disabled = false;

  @Event() elChange!: EventEmitter<boolean>;

  private onChange = (event: Event) => {
    if (this.disabled) return;
    const target = event.target as HTMLInputElement;
    this.checked = target.checked;
    this.indeterminate = false;
    this.elChange.emit(this.checked);
  };

  private get hostClass() {
    return {
      'el-checkbox': true,
      [`el-checkbox--${this.size}`]: true,
      'el-checkbox--checked': this.checked,
      'el-checkbox--indeterminate': this.indeterminate,
      'el-checkbox--disabled': this.disabled,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <label class="el-checkbox__label">
          <span class="el-checkbox__control">
            <input
              type="checkbox"
              class="el-checkbox__input"
              checked={this.checked}
              disabled={this.disabled}
              onChange={this.onChange}
            />
            <span class="el-checkbox__box">
              {this.checked && (
                <svg class="el-checkbox__icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              )}
              {this.indeterminate && (
                <svg class="el-checkbox__icon" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.5 6H9.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              )}
            </span>
          </span>

          <span class="el-checkbox__text">
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}
