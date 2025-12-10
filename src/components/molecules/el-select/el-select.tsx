import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-select',
  styleUrl: 'el-select.scss',
  shadow: true,
})
export class ElSelect {
  /** Size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Placeholder */
  @Prop() placeholder = 'Select...';

  /** Disabled */
  @Prop() disabled = false;

  /** Multiple selection */
  @Prop() multiple = false;

  /** Searchable */
  @Prop() searchable = false;

  /** Current value */
  @Prop({ mutable: true }) value?: string | string[];

  @State() open = false;

  @Event() elChange!: EventEmitter<string | string[]>;

  private toggleOpen = () => {
    if (!this.disabled) {
      this.open = !this.open;
    }
  };

  private get hostClass() {
    return {
      'el-select': true,
      [`el-select--${this.size}`]: true,
      'el-select--open': this.open,
      'el-select--disabled': this.disabled,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-select__control" onClick={this.toggleOpen}>
          <span class="el-select__value">{this.placeholder}</span>
          <span class="el-select__arrow">▼</span>
        </div>

        {this.open && (
          <div class="el-select__dropdown">
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
