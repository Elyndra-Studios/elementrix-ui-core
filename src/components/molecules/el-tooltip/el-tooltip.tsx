import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

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

  /** Visible state */
  @Prop({ mutable: true, reflect: true }) visible = false;

  /** Disabled state */
  @Prop({ reflect: true }) disabled = false;

  @Event() elVisibleChange!: EventEmitter<boolean>;

  private onMouseEnter = () => {
    if (this.trigger === 'hover' && !this.disabled) {
      this.visible = true;
      this.elVisibleChange.emit(true);
    }
  };

  private onMouseLeave = () => {
    if (this.trigger === 'hover' && !this.disabled) {
      this.visible = false;
      this.elVisibleChange.emit(false);
    }
  };

  private onClick = () => {
    if (this.trigger === 'click' && !this.disabled) {
      this.visible = !this.visible;
      this.elVisibleChange.emit(this.visible);
    }
  };

  private get hostClass() {
    return {
      'el-tooltip': true,
      [`el-tooltip--${this.placement}`]: true,
      'el-tooltip--visible': this.visible,
      'el-tooltip--disabled': this.disabled,
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
