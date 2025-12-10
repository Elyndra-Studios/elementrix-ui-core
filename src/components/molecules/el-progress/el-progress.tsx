import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-progress',
  styleUrl: 'el-progress.scss',
  shadow: true,
})
export class ElProgress {
  /** Visual variant */
  @Prop() variant: 'bar' | 'circle' = 'bar';

  /** Size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Current value (0-100) */
  @Prop() value = 0;

  /** Max value */
  @Prop() max = 100;

  /** Show value text */
  @Prop() showValue = false;

  /** Indeterminate state */
  @Prop() indeterminate = false;

  private get percentage() {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }

  private get hostClass() {
    return {
      'el-progress': true,
      [`el-progress--${this.variant}`]: true,
      [`el-progress--${this.size}`]: true,
      'el-progress--indeterminate': this.indeterminate,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        {this.variant === 'bar' && (
          <div class="el-progress__bar">
            <div class="el-progress__track">
              <div class="el-progress__fill" style={{ width: `${this.percentage}%` }} />
            </div>
            {this.showValue && <span class="el-progress__label">{Math.round(this.percentage)}%</span>}
          </div>
        )}

        {this.variant === 'circle' && (
          <div class="el-progress__circle">
            <svg viewBox="0 0 100 100">
              <circle class="el-progress__circle-track" cx="50" cy="50" r="45" />
              <circle
                class="el-progress__circle-fill"
                cx="50"
                cy="50"
                r="45"
                style={{
                  strokeDasharray: `${2 * Math.PI * 45}`,
                  strokeDashoffset: `${2 * Math.PI * 45 * (1 - this.percentage / 100)}`,
                }}
              />
            </svg>
            {this.showValue && <span class="el-progress__label">{Math.round(this.percentage)}%</span>}
          </div>
        )}
      </Host>
    );
  }
}
