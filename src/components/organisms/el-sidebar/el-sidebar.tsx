import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-sidebar',
  styleUrl: 'el-sidebar.scss',
  shadow: true,
})
export class ElSidebar {
  /** Collapsible */
  @Prop() collapsible = false;

  /** Collapsed state */
  @Prop({ mutable: true }) collapsed = false;

  /** Placement */
  @Prop() placement: 'left' | 'right' = 'left';

  private toggle = () => {
    if (this.collapsible) {
      this.collapsed = !this.collapsed;
    }
  };

  private get hostClass() {
    return {
      'el-sidebar': true,
      [`el-sidebar--${this.placement}`]: true,
      'el-sidebar--collapsed': this.collapsed,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <aside class="el-sidebar__inner">
          <slot />
        </aside>

        {this.collapsible && (
          <button class="el-sidebar__toggle" onClick={this.toggle} aria-label="Toggle sidebar">
            {this.collapsed ? '›' : '‹'}
          </button>
        )}
      </Host>
    );
  }
}
