import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-search',
  styleUrl: 'el-search.scss',
  shadow: true,
})
export class ElSearch {
  /** Placeholder */
  @Prop() placeholder = 'Search...';

  /** Current value */
  @Prop({ mutable: true }) value = '';

  /** Debounce delay in ms */
  @Prop() debounce = 300;

  @State() focused = false;

  @Event() elSearch!: EventEmitter<string>;
  @Event() elClear!: EventEmitter<void>;

  private debounceTimer?: NodeJS.Timeout;

  private onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.elSearch.emit(this.value);
    }, this.debounce);
  };

  private onClear = () => {
    this.value = '';
    this.elClear.emit();
    this.elSearch.emit('');
  };

  private onFocus = () => {
    this.focused = true;
  };

  private onBlur = () => {
    this.focused = false;
  };

  private get hostClass() {
    return {
      'el-search': true,
      'el-search--focused': this.focused,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-search__wrapper">
          <span class="el-search__icon">🔍</span>

          <input
            type="search"
            class="el-search__input"
            placeholder={this.placeholder}
            value={this.value}
            onInput={this.onInput}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
          />

          {this.value && (
            <button class="el-search__clear" onClick={this.onClear} aria-label="Clear">
              ×
            </button>
          )}
        </div>
      </Host>
    );
  }
}
