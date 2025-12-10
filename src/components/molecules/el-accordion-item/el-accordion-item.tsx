import { Component, Prop, h, Host, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-accordion-item',
  styleUrl: 'el-accordion-item.scss',
  shadow: true,
})
export class ElAccordionItem {
  /** Item heading text */
  @Prop() heading!: string;

  /** Open state */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Disabled state */
  @Prop({ reflect: true }) disabled = false;

  @Event() elToggle!: EventEmitter<boolean>;

  @Watch('open')
  openChanged(newValue: boolean) {
    this.elToggle.emit(newValue);
  }

  private toggle = () => {
    if (this.disabled) return;
    this.open = !this.open;
  };

  private get hostClass() {
    return {
      'el-accordion-item': true,
      'el-accordion-item--open': this.open,
      'el-accordion-item--disabled': this.disabled,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <button class="el-accordion-item__header" onClick={this.toggle}>
          <span class="el-accordion-item__title">
            <slot name="header">{this.heading}</slot>
          </span>
          <span class="el-accordion-item__icon">{this.open ? '−' : '+'}</span>
        </button>

        {this.open && (
          <div class="el-accordion-item__content">
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
