import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-table',
  styleUrl: 'el-table.scss',
  shadow: true,
})
export class ElTable {
  /** Striped rows */
  @Prop() striped = false;

  /** Hoverable rows */
  @Prop() hoverable = false;

  /** Bordered */
  @Prop() bordered = false;

  private get hostClass() {
    return {
      'el-table': true,
      'el-table--striped': this.striped,
      'el-table--hoverable': this.hoverable,
      'el-table--bordered': this.bordered,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-table__wrapper">
          <table class="el-table__inner">
            <slot />
          </table>
        </div>
      </Host>
    );
  }
}
