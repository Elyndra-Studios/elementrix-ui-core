import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-transition',
  styleUrl: 'el-transition.scss',
  shadow: true,
})
export class ElTransition {
  /** Variant */
  @Prop() variant: 'fade' | 'slide' | 'scale' | 'collapse' = 'fade';

  /** Show state */
  @Prop() show = true;

  /** Duration in ms */
  @Prop() duration = 200;

  @State() isVisible = this.show;

  componentWillUpdate() {
    if (this.show !== this.isVisible) {
      this.isVisible = this.show;
    }
  }

  private get hostClass() {
    return {
      'el-transition': true,
      [`el-transition--${this.variant}`]: true,
      'el-transition--show': this.show,
      'el-transition--hide': !this.show,
    };
  }

  private get style() {
    return {
      transitionDuration: `${this.duration}ms`,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-transition__inner" style={this.style}>
          <slot />
        </div>
      </Host>
    );
  }
}
