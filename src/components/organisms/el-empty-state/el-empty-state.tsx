import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-empty-state',
  styleUrl: 'el-empty-state.scss',
  shadow: true,
})
export class ElEmptyState {
  /** Heading text */
  @Prop() heading?: string;

  /** Description */
  @Prop() description?: string;

  render() {
    return (
      <Host class="el-empty-state">
        <div class="el-empty-state__inner">
          <div class="el-empty-state__icon">
            <slot name="icon" />
          </div>

          <div class="el-empty-state__title">
            <slot name="title">{this.heading}</slot>
          </div>

          <div class="el-empty-state__description">
            <slot name="description">{this.description}</slot>
          </div>

          <div class="el-empty-state__actions">
            <slot name="actions" />
          </div>
        </div>
      </Host>
    );
  }
}
