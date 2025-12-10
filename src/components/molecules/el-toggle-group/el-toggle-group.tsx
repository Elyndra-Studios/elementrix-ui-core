import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-toggle-group',
  styleUrl: 'el-toggle-group.scss',
  shadow: true,
})
export class ElToggleGroup {
  /** Selection type */
  @Prop() type: 'single' | 'multiple' = 'single';

  /** Current value(s) */
  @Prop({ mutable: true }) value?: string | string[];

  @Event() elChange!: EventEmitter<string | string[]>;

  render() {
    return (
      <Host class="el-toggle-group">
        <div class="el-toggle-group__inner" role="group">
          <slot />
        </div>
      </Host>
    );
  }
}
