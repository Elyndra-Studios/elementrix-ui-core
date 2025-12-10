import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-tooltip',
  styleUrl: 'el-tooltip.scss',
  shadow: true,
})
export class ElTooltip {
  /** Tooltip content text */
  @Prop() content?: string;

  /** Placement */
  @Prop() placement: 'top' | 'right' | 'bottom' | 'left' = 'top';

  /** Trigger */
  @Prop() trigger: 'hover' | 'click' | 'focus' = 'hover';

  @State() visible = false;

  private onMouseEnter = () => {
    if (this.trigger === 'hover') {
      this.visible = true;
    }
  };

  private onMouseLeave = () => {
    if (this.trigger === 'hover') {
      this.visible = false;
    }
  };

  private onClick = () => {
    if (this.trigger === 'click') {
      this.visible = !this.visible;
    }
  };

  private get hostClass() {
    return {
      'el-tooltip': true,
      [`el-tooltip--${this.placement}`]: true,
      'el-tooltip--visible': this.visible,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div
          class="el-tooltip__trigger"
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          onClick={this.onClick}
        >
          <slot name="trigger" />
        </div>

        {this.visible && (
          <div class="el-tooltip__content">
            <slot name="content">{this.content}</slot>
          </div>
        )}
      </Host>
    );
  }
}
