import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-color-picker',
  styleUrl: 'el-color-picker.scss',
  shadow: true,
})
export class ElColorPicker {
  /** Current value */
  @Prop({ mutable: true }) value = '#3b82f6';

  @Event() elChange!: EventEmitter<string>;

  private onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.elChange.emit(this.value);
  };

  render() {
    return (
      <Host class="el-color-picker">
        <div class="el-color-picker__wrapper">
          <input
            type="color"
            class="el-color-picker__input"
            value={this.value}
            onChange={this.onChange}
          />
          <div class="el-color-picker__preview" style={{ backgroundColor: this.value }} />
          <span class="el-color-picker__value">{this.value}</span>
        </div>
      </Host>
    );
  }
}
