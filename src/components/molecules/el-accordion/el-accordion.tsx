import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-accordion',
  styleUrl: 'el-accordion.scss',
  shadow: true,
})
export class ElAccordion {
  /** Allow multiple items to be open at once */
  @Prop() multiple = false;

  render() {
    return (
      <Host class="el-accordion">
        <div class="el-accordion__inner">
          <slot />
        </div>
      </Host>
    );
  }
}
