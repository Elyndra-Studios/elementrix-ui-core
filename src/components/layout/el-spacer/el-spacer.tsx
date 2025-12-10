import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-spacer',
  styleUrl: 'el-spacer.scss',
  shadow: true,
})
export class ElSpacer {
  /** Size from spacing scale */
  @Prop() size: string = 'var(--el-space-4)';

  private get style() {
    return {
      height: this.size,
      width: this.size,
    };
  }

  render() {
    return (
      <Host class="el-spacer">
        <div class="el-spacer__inner" style={this.style} />
      </Host>
    );
  }
}
