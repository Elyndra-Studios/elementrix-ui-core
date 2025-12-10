import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-container',
  styleUrl: 'el-container.scss',
  shadow: true,
})
export class ElContainer {
  /** Max width */
  @Prop() maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' = 'lg';

  /** Padding */
  @Prop() padding = true;

  private get hostClass() {
    return {
      'el-container': true,
      [`el-container--${this.maxWidth}`]: true,
      'el-container--padded': this.padding,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-container__inner">
          <slot />
        </div>
      </Host>
    );
  }
}
