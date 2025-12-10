import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-carousel',
  styleUrl: 'el-carousel.scss',
  shadow: true,
})
export class ElCarousel {
  /** Autoplay */
  @Prop() autoplay = false;

  /** Interval in ms */
  @Prop() interval = 3000;

  /** Loop */
  @Prop() loop = true;

  /** Show indicators */
  @Prop() showIndicators = true;

  /** Show arrows */
  @Prop() showArrows = true;

  @State() currentIndex = 0;
  @State() itemCount = 0;

  private autoplayTimer?: NodeJS.Timeout;
  private slotEl?: HTMLSlotElement;

  componentDidLoad() {
    this.updateItemCount();
    if (this.autoplay) {
      this.startAutoplay();
    }
  }

  disconnectedCallback() {
    this.stopAutoplay();
  }

  private updateItemCount() {
    if (this.slotEl) {
      const items = this.slotEl.assignedElements();
      this.itemCount = items.length;
    }
  }

  private startAutoplay() {
    this.autoplayTimer = setInterval(() => {
      this.next();
    }, this.interval);
  }

  private stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }

  private prev = () => {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else if (this.loop) {
      this.currentIndex = this.itemCount - 1;
    }
  };

  private next = () => {
    if (this.currentIndex < this.itemCount - 1) {
      this.currentIndex++;
    } else if (this.loop) {
      this.currentIndex = 0;
    }
  };

  private goTo = (index: number) => {
    this.currentIndex = index;
  };

  render() {
    return (
      <Host class="el-carousel">
        <div class="el-carousel__wrapper">
          <div class="el-carousel__track" style={{ transform: `translateX(-${this.currentIndex * 100}%)` }}>
            <slot ref={el => (this.slotEl = el as HTMLSlotElement)} />
          </div>

          {this.showArrows && (
            <div class="el-carousel__arrows">
              <button class="el-carousel__arrow el-carousel__arrow--prev" onClick={this.prev} aria-label="Previous">
                ‹
              </button>
              <button class="el-carousel__arrow el-carousel__arrow--next" onClick={this.next} aria-label="Next">
                ›
              </button>
            </div>
          )}
        </div>

        {this.showIndicators && (
          <div class="el-carousel__indicators">
            {Array.from({ length: this.itemCount }).map((_, i) => (
              <button
                key={i}
                class={`el-carousel__indicator ${i === this.currentIndex ? 'el-carousel__indicator--active' : ''}`}
                onClick={() => this.goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </Host>
    );
  }
}
