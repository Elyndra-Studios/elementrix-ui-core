import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-drawer',
  styleUrl: 'el-drawer.scss',
  shadow: true,
})
export class ElDrawer {
  /** Open state */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Placement */
  @Prop() placement: 'left' | 'right' | 'top' | 'bottom' = 'right';

  /** Size */
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /** Closable */
  @Prop() closable = true;

  @Event() elClose!: EventEmitter<void>;

  private onBackdropClick = () => {
    this.open = false;
    this.elClose.emit();
  };

  private onCloseClick = () => {
    this.open = false;
    this.elClose.emit();
  };

  private onContentClick = (e: Event) => {
    e.stopPropagation();
  };

  private get hostClass() {
    return {
      'el-drawer': true,
      [`el-drawer--${this.placement}`]: true,
      [`el-drawer--${this.size}`]: true,
      'el-drawer--open': this.open,
    };
  }

  render() {
    if (!this.open) return null;

    return (
      <Host class={this.hostClass}>
        <div class="el-drawer__backdrop" onClick={this.onBackdropClick} />

        <div class="el-drawer__content" onClick={this.onContentClick}>
          {this.closable && (
            <button class="el-drawer__close" onClick={this.onCloseClick} aria-label="Close">
              ×
            </button>
          )}

          <div class="el-drawer__header">
            <slot name="header" />
          </div>

          <div class="el-drawer__body">
            <slot />
          </div>

          <div class="el-drawer__footer">
            <slot name="footer" />
          </div>
        </div>
      </Host>
    );
  }
}
