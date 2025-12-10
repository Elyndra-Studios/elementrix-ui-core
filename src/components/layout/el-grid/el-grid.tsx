import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-grid',
  styleUrl: 'el-grid.scss',
  shadow: true,
})
export class ElGrid {
  /** Number of columns */
  @Prop() cols: number | string = 'auto';

  /** Gap size */
  @Prop() gap: string = 'var(--el-space-4)';

  /** Responsive breakpoints */
  @Prop() responsive = false;

  private get style() {
    return {
      gridTemplateColumns: typeof this.cols === 'number' ? `repeat(${this.cols}, 1fr)` : this.cols,
      gap: this.gap,
    };
  }

  private get hostClass() {
    return {
      'el-grid': true,
      'el-grid--responsive': this.responsive,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-grid__inner" style={this.style}>
          <slot />
        </div>
      </Host>
    );
  }
}
