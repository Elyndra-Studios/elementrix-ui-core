import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-nav',
  styleUrl: 'el-nav.scss',
  shadow: true,
})
export class ElNav {
  /** Variant */
  @Prop() variant: 'sidebar' | 'topbar' = 'topbar';

  private get hostClass() {
    return {
      'el-nav': true,
      [`el-nav--${this.variant}`]: true,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <nav class="el-nav__inner">
          <slot />
        </nav>
      </Host>
    );
  }
}
