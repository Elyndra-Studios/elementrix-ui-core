import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-menu-item',
  styleUrl: 'el-menu-item.scss',
  shadow: true,
})
export class ElMenuItem {
  /** Active state */
  @Prop() active = false;

  /** Disabled state */
  @Prop() disabled = false;

  /** Link href */
  @Prop() href?: string;

  private get hostClass() {
    return {
      'el-menu-item': true,
      'el-menu-item--active': this.active,
      'el-menu-item--disabled': this.disabled,
    };
  }

  render() {
    const Tag = this.href ? 'a' : 'button';

    return (
      <Host class={this.hostClass}>
        <Tag
          class="el-menu-item__inner"
          href={this.href}
          disabled={this.disabled && !this.href}
          role="menuitem"
        >
          <span class="el-menu-item__icon">
            <slot name="icon" />
          </span>

          <span class="el-menu-item__label">
            <slot />
          </span>

          <span class="el-menu-item__suffix">
            <slot name="suffix" />
          </span>
        </Tag>
      </Host>
    );
  }
}
