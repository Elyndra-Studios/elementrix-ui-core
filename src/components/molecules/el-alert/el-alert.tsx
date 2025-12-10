import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-alert',
  styleUrl: 'el-alert.scss',
  shadow: true,
})
export class ElAlert {
  /** Visual variant */
  @Prop() variant: 'info' | 'success' | 'warning' | 'error' = 'info';

  /** Dismissible */
  @Prop() dismissible = false;

  @Event() elDismiss!: EventEmitter<void>;

  private onDismiss = () => {
    this.elDismiss.emit();
  };

  private get hostClass() {
    return {
      'el-alert': true,
      [`el-alert--${this.variant}`]: true,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-alert__inner">
          <div class="el-alert__icon">
            <slot name="icon" />
          </div>

          <div class="el-alert__content">
            <div class="el-alert__title">
              <slot name="title" />
            </div>
            <div class="el-alert__description">
              <slot />
            </div>
          </div>

          <div class="el-alert__actions">
            <slot name="actions" />
          </div>

          {this.dismissible && (
            <button class="el-alert__close" onClick={this.onDismiss} aria-label="Dismiss">
              ×
            </button>
          )}
        </div>
      </Host>
    );
  }
}
