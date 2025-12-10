import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-input',
  styleUrl: 'el-input.scss',
  shadow: true,
})
export class ElInput {
  /** Input type */
  @Prop() type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' = 'text';

  /** Visual size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Placeholder text */
  @Prop() placeholder?: string;

  /** Disabled state */
  @Prop() disabled = false;

  /** Readonly state */
  @Prop() readonly = false;

  /** Error state */
  @Prop() error?: string;

  /** Required */
  @Prop() required = false;

  /** Current value (uncontrolled for now) */
  @Prop({ mutable: true }) value?: string;

  @Event() elInput!: EventEmitter<string>;
  @Event() elChange!: EventEmitter<string>;

  private onInput = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.elInput.emit(this.value ?? '');
  };

  private onChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.elChange.emit(this.value ?? '');
  };

  private get hostClass() {
    return {
      'el-input': true,
      [`el-input--${this.size}`]: true,
      'el-input--disabled': this.disabled,
      'el-input--error': !!this.error,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-input__wrapper">
          <span class="el-input__prefix">
            <slot name="prefix" />
          </span>

          <input
            class="el-input__control"
            type={this.type}
            placeholder={this.placeholder}
            disabled={this.disabled}
            readOnly={this.readonly}
            required={this.required}
            value={this.value}
            onInput={this.onInput}
            onChange={this.onChange}
          />

          <span class="el-input__suffix">
            <slot name="suffix" />
          </span>
        </div>

        {this.error && <div class="el-input__error">{this.error}</div>}
      </Host>
    );
  }
}
