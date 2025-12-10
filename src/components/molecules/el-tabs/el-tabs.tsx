import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-tabs',
  styleUrl: 'el-tabs.scss',
  shadow: true,
})
export class ElTabs {
  /** Visual variant */
  @Prop() variant: 'line' | 'enclosed' | 'pills' = 'line';

  /** Active tab index */
  @Prop({ mutable: true }) activeTab = 0;

  @Event() elTabChange!: EventEmitter<number>;

  @State() tabs: string[] = [];

  private get hostClass() {
    return {
      'el-tabs': true,
      [`el-tabs--${this.variant}`]: true,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-tabs__header" role="tablist">
          <slot name="tabs" />
        </div>

        <div class="el-tabs__panels">
          <slot name="panels" />
        </div>
      </Host>
    );
  }
}
