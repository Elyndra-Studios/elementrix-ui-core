import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-time-picker',
  styleUrl: 'el-time-picker.scss',
  shadow: true,
})
export class ElTimePicker {
  /** Format */
  @Prop() format: '12h' | '24h' = '12h';

  /** Placeholder */
  @Prop() placeholder = 'Select time';

  render() {
    return (
      <Host class="el-time-picker">
        <div class="el-time-picker__control">
          <span class="el-time-picker__value">{this.placeholder}</span>
          <span class="el-time-picker__icon">🕐</span>
        </div>
      </Host>
    );
  }
}
