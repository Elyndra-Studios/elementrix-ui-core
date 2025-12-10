import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-form',
  styleUrl: 'el-form.scss',
  shadow: true,
})
export class ElForm {
  /** Layout */
  @Prop() layout: 'vertical' | 'horizontal' = 'vertical';

  @Event() elSubmit!: EventEmitter<Event>;

  private onSubmit = (event: Event) => {
    event.preventDefault();
    this.elSubmit.emit(event);
  };

  private get hostClass() {
    return {
      'el-form': true,
      [`el-form--${this.layout}`]: true,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <form class="el-form__inner" onSubmit={this.onSubmit}>
          <slot />
        </form>
      </Host>
    );
  }
}
