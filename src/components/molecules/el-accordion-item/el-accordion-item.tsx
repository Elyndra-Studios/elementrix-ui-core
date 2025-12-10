import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-accordion-item',
  styleUrl: 'el-accordion-item.scss',
  shadow: true,
})
export class ElAccordionItem {
  /** Item heading text */
  @Prop() heading!: string;

  /** Open state */
  @Prop({ mutable: true }) open = false;

  @State() isOpen = this.open;

  private toggle = () => {
    this.isOpen = !this.isOpen;
  };

  private get hostClass() {
    return {
      'el-accordion-item': true,
      'el-accordion-item--open': this.isOpen,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <button class="el-accordion-item__header" onClick={this.toggle}>
          <span class="el-accordion-item__title">
            <slot name="header">{this.heading}</slot>
          </span>
          <span class="el-accordion-item__icon">{this.isOpen ? '−' : '+'}</span>
        </button>

        {this.isOpen && (
          <div class="el-accordion-item__content">
            <slot />
          </div>
        )}
      </Host>
    );
  }
}
