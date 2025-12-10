import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-breadcrumbs',
  styleUrl: 'el-breadcrumbs.scss',
  shadow: true,
})
export class ElBreadcrumbs {
  /** Separator character or element */
  @Prop() separator = '/';

  /** Max items to show before collapsing */
  @Prop() maxItems?: number;

  render() {
    return (
      <Host class="el-breadcrumbs">
        <nav class="el-breadcrumbs__inner" aria-label="Breadcrumb">
          <ol class="el-breadcrumbs__list">
            <slot />
          </ol>
        </nav>
      </Host>
    );
  }
}
