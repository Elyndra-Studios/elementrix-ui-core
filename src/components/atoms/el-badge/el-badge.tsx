import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-badge',
  styleUrl: 'el-badge.scss',
  shadow: true,
})
export class ElBadge {
  /** Visual variant */
  @Prop() variant: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' = 'default';

  /** Size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Pill shape */
  @Prop() pill = false;

  /** Dot-only badge */
  @Prop() dot = false;

  private get hostClass() {
    return {
      'el-badge': true,
      [`el-badge--${this.variant}`]: true,
      [`el-badge--${this.size}`]: true,
      'el-badge--pill': this.pill,
      'el-badge--dot': this.dot,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <span class="el-badge__inner">
          {!this.dot && <slot />}
        </span>
      </Host>
    );
  }
}
