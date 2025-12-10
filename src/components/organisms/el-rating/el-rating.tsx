import { Component, Prop, h, Host, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-rating',
  styleUrl: 'el-rating.scss',
  shadow: true,
})
export class ElRating {
  /** Current value */
  @Prop({ mutable: true }) value = 0;

  /** Max rating */
  @Prop() max = 5;

  /** Readonly */
  @Prop() readonly = false;

  /** Size */
  @Prop() size: 'sm' | 'md' | 'lg' = 'md';

  @State() hoverValue = 0;

  @Event() elChange!: EventEmitter<number>;

  private onStarClick = (rating: number) => {
    if (!this.readonly) {
      this.value = rating;
      this.elChange.emit(this.value);
    }
  };

  private onStarHover = (rating: number) => {
    if (!this.readonly) {
      this.hoverValue = rating;
    }
  };

  private onMouseLeave = () => {
    this.hoverValue = 0;
  };

  private get hostClass() {
    return {
      'el-rating': true,
      [`el-rating--${this.size}`]: true,
      'el-rating--readonly': this.readonly,
    };
  }

  render() {
    const displayValue = this.hoverValue || this.value;

    return (
      <Host class={this.hostClass} onMouseLeave={this.onMouseLeave}>
        <div class="el-rating__stars">
          {Array.from({ length: this.max }).map((_, i) => {
            const rating = i + 1;
            const filled = rating <= displayValue;

            return (
              <button
                key={i}
                class={`el-rating__star ${filled ? 'el-rating__star--filled' : ''}`}
                onClick={() => this.onStarClick(rating)}
                onMouseEnter={() => this.onStarHover(rating)}
                disabled={this.readonly}
                aria-label={`Rate ${rating} out of ${this.max}`}
              >
                ★
              </button>
            );
          })}
        </div>
      </Host>
    );
  }
}
