import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-stepper',
  styleUrl: 'el-stepper.scss',
  shadow: true,
})
export class ElStepper {
  /** Current step (0-indexed) */
  @Prop({ mutable: true }) currentStep = 0;

  /** Variant */
  @Prop() variant: 'horizontal' | 'vertical' = 'horizontal';

  @Event() elStepChange!: EventEmitter<number>;

  private get hostClass() {
    return {
      'el-stepper': true,
      [`el-stepper--${this.variant}`]: true,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-stepper__inner">
          <slot />
        </div>
      </Host>
    );
  }
}
