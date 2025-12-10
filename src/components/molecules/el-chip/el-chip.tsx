import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-chip',
  styleUrl: 'el-chip.scss',
  shadow: true,
})
export class ElChip {
  /** Visual variant */
  @Prop() variant: 'filled' | 'outlined' = 'filled';

  /** Size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Removable */
  @Prop() removable = false;

  /** Clickable */
  @Prop() clickable = false;

  @Event() elRemove!: EventEmitter<void>;
  @Event() elClick!: EventEmitter<void>;

  private onRemove = (e: Event) => {
    e.stopPropagation();
    this.elRemove.emit();
  };

  private onClick = () => {
    if (this.clickable) {
      this.elClick.emit();
    }
  };

  private get hostClass() {
    return {
      'el-chip': true,
      [`el-chip--${this.variant}`]: true,
      [`el-chip--${this.size}`]: true,
      'el-chip--clickable': this.clickable,
    };
  }

  render() {
    const Tag = this.clickable ? 'button' : 'span';

    return (
      <Host class={this.hostClass}>
        <Tag class="el-chip__inner" onClick={this.onClick}>
          <span class="el-chip__icon">
            <slot name="icon" />
          </span>

          <span class="el-chip__label">
            <slot />
          </span>

          {this.removable && (
            <button class="el-chip__remove" onClick={this.onRemove} aria-label="Remove">
              ×
            </button>
          )}
        </Tag>
      </Host>
    );
  }
}
