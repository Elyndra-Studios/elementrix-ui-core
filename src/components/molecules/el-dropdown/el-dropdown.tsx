import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-dropdown',
  styleUrl: 'el-dropdown.scss',
  shadow: true,
})
export class ElDropdown {
  /** Placement */
  @Prop() placement: 'top' | 'right' | 'bottom' | 'left' = 'bottom';

  /** Trigger */
  @Prop() trigger: 'click' | 'hover' = 'click';

  /** Open state */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Close on select */
  @Prop() closeOnSelect = true;

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
      'el-dropdown': true,
      [`el-dropdown--${this.placement}`]: true,
      'el-dropdown--open': this.open,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div
          class="el-dropdown__trigger"
          onClick={this.onTriggerClick}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <slot name="trigger" />
        </div>

        {this.open && (
          <div class="el-dropdown__menu">
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
