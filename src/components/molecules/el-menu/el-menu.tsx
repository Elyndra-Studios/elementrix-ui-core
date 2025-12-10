import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'el-menu',
  styleUrl: 'el-menu.scss',
  shadow: true,
})
export class ElMenu {
  render() {
    return (
      <Host class="el-menu">
        <nav class="el-menu__inner" role="menu">
          <slot />
        </nav>
      </Host>
    );
  }
}
