import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-card',
  styleUrl: 'el-card.scss',
  shadow: true,
})
export class ElCard {
  /** Visual variant */
  @Prop() variant: 'elevated' | 'outlined' | 'flat' = 'elevated';

  /** Hoverable state */
  @Prop() hoverable = false;

  /** Clickable state */
  @Prop() clickable = false;

  private get hostClass() {
    return {
      'el-card': true,
      [`el-card--${this.variant}`]: true,
      'el-card--hoverable': this.hoverable,
      'el-card--clickable': this.clickable,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-card__inner">
          <div class="el-card__header">
            <slot name="header" />
          </div>

          <div class="el-card__media">
            <slot name="media" />
          </div>

          <div class="el-card__body">
            <slot />
          </div>

          <div class="el-card__footer">
            <slot name="footer" />
          </div>
        </div>
      </Host>
    );
  }
}
