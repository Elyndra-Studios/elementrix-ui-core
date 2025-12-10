import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-data-grid',
  styleUrl: 'el-data-grid.scss',
  shadow: true,
})
export class ElDataGrid {
  /** Sortable */
  @Prop() sortable = false;

  /** Filterable */
  @Prop() filterable = false;

  /** Selectable */
  @Prop() selectable = false;

  render() {
    return (
      <Host class="el-data-grid">
        <div class="el-data-grid__wrapper">
          <table class="el-data-grid__table">
            <slot />
          </table>
        </div>
      </Host>
    );
  }
}
