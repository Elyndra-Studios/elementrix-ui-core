import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-date-picker',
  styleUrl: 'el-date-picker.scss',
  shadow: true,
})
export class ElDatePicker {
  /** Type */
  @Prop() type: 'single' | 'range' = 'single';

  /** Format */
  @Prop() format = 'MM/DD/YYYY';

  /** Placeholder */
  @Prop() placeholder = 'Select date';

  @State() open = false;

  private toggleOpen = () => {
    this.open = !this.open;
  };

  render() {
    return (
      <Host class="el-date-picker">
        <div class="el-date-picker__control" onClick={this.toggleOpen}>
          <span class="el-date-picker__value">{this.placeholder}</span>
          <span class="el-date-picker__icon">📅</span>
        </div>

        {this.open && (
          <div class="el-date-picker__dropdown">
            <el-calendar />
          </div>
        )}
      </Host>
    );
  }
}
