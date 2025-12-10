import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-popover',
  styleUrl: 'el-popover.scss',
  shadow: true,
})
export class ElPopover {
  /** Placement */
  @Prop() placement: 'top' | 'right' | 'bottom' | 'left' = 'bottom';

  /** Trigger */
  @Prop() trigger: 'click' | 'hover' | 'focus' = 'click';

  /** Controlled open state */
  @Prop({ mutable: true }) open = false;

  @State() internalOpen = false;

  private get isOpen() {
    return this.open || this.internalOpen;
  }

  private onTriggerClick = () => {
    if (this.trigger === 'click') {
      this.internalOpen = !this.internalOpen;
    }
  };

  private onMouseEnter = () => {
    if (this.trigger === 'hover') {
      this.internalOpen = true;
    }
  };

  private onMouseLeave = () => {
    if (this.trigger === 'hover') {
      this.internalOpen = false;
    }
  };

  private get hostClass() {
    return {
      'el-popover': true,
      [`el-popover--${this.placement}`]: true,
      'el-popover--open': this.isOpen,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div
          class="el-popover__trigger"
          onClick={this.onTriggerClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <slot name="trigger" />
        </div>

        {this.isOpen && (
          <div class="el-popover__content">
            <slot name="content" />
          </div>
        )}
      </Host>
    );
  }
}
