import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-modal',
  styleUrl: 'el-modal.scss',
  shadow: true,
})
export class ElModal {
  /** Open state */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Size */
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';

  /** Closable (show close button) */
  @Prop() closable = true;

  /** Close on backdrop click */
  @Prop() closeOnBackdrop = true;

  /** Persistent (prevent closing) */
  @Prop() persistent = false;

  @Event() elClose!: EventEmitter<void>;

  private onBackdropClick = () => {
    if (this.closeOnBackdrop && !this.persistent) {
      this.open = false;
      this.elClose.emit();
    }
  };

  private onCloseClick = () => {
    if (!this.persistent) {
      this.open = false;
      this.elClose.emit();
    }
  };

  private onContentClick = (e: Event) => {
    e.stopPropagation();
  };

  private get hostClass() {
    return {
      'el-modal': true,
      [`el-modal--${this.size}`]: true,
      'el-modal--open': this.open,
    };
  }

  render() {
    if (!this.open) return null;

    return (
      <Host class={this.hostClass}>
        <div class="el-modal__backdrop" onClick={this.onBackdropClick} />

        <div class="el-modal__wrapper">
          <div class="el-modal__content" onClick={this.onContentClick}>
            {this.closable && (
              <button class="el-modal__close" onClick={this.onCloseClick} aria-label="Close">
                ×
              </button>
            )}

            <div class="el-modal__header">
              <slot name="header" />
            </div>

            <div class="el-modal__body">
              <slot />
            </div>

            <div class="el-modal__footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
