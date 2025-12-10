import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-aspect-ratio',
  styleUrl: 'el-aspect-ratio.scss',
  shadow: true,
})
export class ElAspectRatio {
  /** Aspect ratio */
  @Prop() ratio: '16/9' | '4/3' | '1/1' | string = '16/9';

  private get style() {
    return {
      aspectRatio: this.ratio,
    };
  }

  render() {
    return (
      <Host class="el-aspect-ratio">
        <div class="el-aspect-ratio__inner" style={this.style}>
          <slot />
        </div>
      </Host>
    );
  }
}
