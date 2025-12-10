import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-textarea',
  styleUrl: 'el-textarea.scss',
  shadow: true,
})
export class ElTextarea {
  /** Visual size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  /** Number of rows */
  @Prop() rows = 3;

  /** Whether the textarea is resizable */
  @Prop() resize: 'none' | 'vertical' | 'horizontal' | 'both' = 'vertical';

  /** Max length for the value */
  @Prop() maxLength?: number;

  /** Disabled state */
  @Prop() disabled = false;

  /** Readonly state */
  @Prop() readonly = false;

  /** Error text */
  @Prop() error?: string;

  /** Current value (uncontrolled for now) */
  @Prop({ mutable: true }) value?: string;

  @Event() elInput!: EventEmitter<string>;
  @Event() elChange!: EventEmitter<string>;

  private onInput = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.elInput.emit(this.value ?? '');
  };

  private onChange = (event: Event) => {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.elChange.emit(this.value ?? '');
  };

  private get hostClass() {
    return {
      'el-textarea': true,
      [`el-textarea--${this.size}`]: true,
      'el-textarea--disabled': this.disabled,
      'el-textarea--error': !!this.error,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-textarea__wrapper">
          <textarea
            class="el-textarea__control"
            rows={this.rows}
            disabled={this.disabled}
            readOnly={this.readonly}
            maxlength={this.maxLength}
            value={this.value}
            onInput={this.onInput}
            onChange={this.onChange}
          />
        </div>

        {this.error && <div class="el-textarea__error">{this.error}</div>}
      </Host>
    );
  }
}
