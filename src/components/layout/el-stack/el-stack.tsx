import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-stack',
  styleUrl: 'el-stack.scss',
  shadow: true,
})
export class ElStack {
  /** Direction */
  @Prop() direction: 'vertical' | 'horizontal' = 'vertical';

  /** Spacing */
  @Prop() spacing: string = 'var(--el-space-4)';

  /** Align items */
  @Prop() align?: 'start' | 'center' | 'end' | 'stretch';

  /** Justify content */
  @Prop() justify?: 'start' | 'center' | 'end' | 'between' | 'around';

  private get style() {
    const justifyMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
    };

    const alignMap = {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      stretch: 'stretch',
    };

    return {
      gap: this.spacing,
      alignItems: this.align ? alignMap[this.align] : undefined,
      justifyContent: this.justify ? justifyMap[this.justify] : undefined,
    };
  }

  private get hostClass() {
    return {
      'el-stack': true,
      [`el-stack--${this.direction}`]: true,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-stack__inner" style={this.style}>
          <slot />
        </div>
      </Host>
    );
  }
}
