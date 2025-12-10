import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

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

  /** Open state */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Close on click outside */
  @Prop() closeOnClickOutside = true;

  @Event() elOpen!: EventEmitter<boolean>;

  private onTriggerClick = () => {
    if (this.trigger === 'click') {
      this.open = !this.open;
      this.elOpen.emit(this.open);
    }
  };

  private onMouseEnter = () => {
    if (this.trigger === 'hover') {
      this.open = true;
      this.elOpen.emit(true);
    }
  };

  private onMouseLeave = () => {
    if (this.trigger === 'hover') {
      this.open = false;
      this.elOpen.emit(false);
    }
  };

  private get hostClass() {
    return {
      'el-popover': true,
      [`el-popover--${this.placement}`]: true,
      'el-popover--open': this.open,
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

        {this.open && (
          <div class="el-popover__content">
            <slot name="content" />
          </div>
        )}
      </Host>
    );
  }
}
