import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-command',
  styleUrl: 'el-command.scss',
  shadow: true,
})
export class ElCommand {
  /** Open state */
  @Prop({ mutable: true, reflect: true }) open = false;

  /** Placeholder */
  @Prop() placeholder = 'Type a command or search...';

  @State() query = '';

  private onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.query = target.value;
  };

  private get hostClass() {
    return {
      'el-command': true,
      'el-command--open': this.open,
    };
  }

  render() {
    if (!this.open) return null;

    return (
      <Host class={this.hostClass}>
        <div class="el-command__backdrop" onClick={() => (this.open = false)} />

        <div class="el-command__dialog">
          <div class="el-command__input-wrapper">
            <input
              type="text"
              class="el-command__input"
              placeholder={this.placeholder}
              value={this.query}
              onInput={this.onInput}
              autoFocus
            />
          </div>

          <div class="el-command__list">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
