import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-slider',
  styleUrl: 'el-slider.scss',
  shadow: true,
})
export class ElSlider {
  /** Current value */
  @Prop({ mutable: true }) value = 0;

  /** Min value */
  @Prop() min = 0;

  /** Max value */
  @Prop() max = 100;

  /** Step */
  @Prop() step = 1;

  /** Disabled */
  @Prop() disabled = false;

  @Event() elChange!: EventEmitter<number>;
  @Event() elInput!: EventEmitter<number>;

  private onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = parseFloat(target.value);
    this.elInput.emit(this.value);
  };

  private onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = parseFloat(target.value);
    this.elChange.emit(this.value);
  };

  private get hostClass() {
    return {
      'el-slider': true,
      'el-slider--disabled': this.disabled,
    };
  }

  private get percentage() {
    return ((this.value - this.min) / (this.max - this.min)) * 100;
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-slider__wrapper">
          <div class="el-slider__track">
            <div class="el-slider__fill" style={{ width: `${this.percentage}%` }} />
          </div>

          <input
            type="range"
            class="el-slider__input"
            min={this.min}
            max={this.max}
            step={this.step}
            value={this.value}
            disabled={this.disabled}
            onInput={this.onInput}
            onChange={this.onChange}
          />
        </div>
      </Host>
    );
  }
}
