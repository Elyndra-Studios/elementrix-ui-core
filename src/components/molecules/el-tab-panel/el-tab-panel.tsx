import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-tab-panel',
  styleUrl: 'el-tab-panel.scss',
  shadow: true,
})
export class ElTabPanel {
  /** Tab label */
  @Prop() label!: string;

  /** Active state */
  @Prop() active = false;

  private get hostClass() {
    return {
      'el-tab-panel': true,
      'el-tab-panel--active': this.active,
    };
  }

  render() {
    return (
      <Host class={this.hostClass} role="tabpanel" hidden={!this.active}>
        <div class="el-tab-panel__content">
          <slot />
        </div>
      </Host>
    );
  }
}
