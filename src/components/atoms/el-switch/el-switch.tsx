import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-switch',
  styleUrl: 'el-switch.scss',
  shadow: true,
})
export class ElSwitch {
  /** Visual size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Checked state */
  @Prop({ mutable: true, reflect: true }) checked = false;

  /** Disabled state */
  @Prop({ reflect: true }) disabled = false;

  @Event() elChange!: EventEmitter<boolean>;

  private onToggle = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.elChange.emit(this.checked);
  };

  private get hostClass() {
    return {
      'el-switch': true,
      [`el-switch--${this.size}`]: true,
      'el-switch--checked': this.checked,
      'el-switch--disabled': this.disabled,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <button 
          class="el-switch__track" 
          type="button" 
          disabled={this.disabled} 
          aria-pressed={this.checked ? 'true' : 'false'}
          aria-label="Toggle switch"
          onClick={this.onToggle}
        >
          <span class="el-switch__thumb" />
        </button>

        <span class="el-switch__label" onClick={this.onToggle}>
          <slot />
        </span>
      </Host>
    );
  }
}
