import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-skeleton',
  styleUrl: 'el-skeleton.scss',
  shadow: true,
})
export class ElSkeleton {
  /** Visual variant */
  @Prop() variant: 'text' | 'circle' | 'rectangle' = 'text';

  /** Width */
  @Prop() width?: string;

  /** Height */
  @Prop() height?: string;

  /** Number of rows (for text variant) */
  @Prop() rows = 1;

  private get hostClass() {
    return {
      'el-skeleton': true,
      [`el-skeleton--${this.variant}`]: true,
    };
  }

  private get style() {
    return {
      width: this.width,
      height: this.height,
    };
  }

  render() {
    if (this.variant === 'text' && this.rows > 1) {
      return (
        <Host class={this.hostClass}>
          {Array.from({ length: this.rows }).map((_, i) => (
            <div class="el-skeleton__item el-skeleton__item--text" key={i} />
          ))}
        </Host>
      );
    }

    return (
      <Host class={this.hostClass}>
        <div class="el-skeleton__item" style={this.style} />
      </Host>
    );
  }
}
