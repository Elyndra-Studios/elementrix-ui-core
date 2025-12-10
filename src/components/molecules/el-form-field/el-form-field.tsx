import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'el-form-field',
  styleUrl: 'el-form-field.scss',
  shadow: true,
})
export class ElFormField {
  /** Label text (used when no custom label slot is provided) */
  @Prop() label?: string;

  /** Hint text (used when no custom hint slot is provided) */
  @Prop() hint?: string;

  /** Error text (used when no custom error slot is provided) */
  @Prop() error?: string;

  /** Mark the associated control as required */
  @Prop() required = false;

  /** Mark the associated control as optional */
  @Prop() optional = false;

  private get hostClass() {
    return {
      'el-form-field': true,
      'el-form-field--error': !!this.error,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-form-field__header">
          <slot name="label">
            {this.label && (
              <el-label required={this.required} optional={this.optional}>
                {this.label}
              </el-label>
            )}
          </slot>
        </div>

        <div class="el-form-field__control">
          <slot name="control" />
        </div>

        <div class="el-form-field__hint">
          <slot name="hint">{this.hint}</slot>
        </div>

        <div class="el-form-field__error">
          <slot name="error">{this.error}</slot>
        </div>
      </Host>
    );
  }
}
