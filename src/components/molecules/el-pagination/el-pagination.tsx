import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'el-pagination',
  styleUrl: 'el-pagination.scss',
  shadow: true,
})
export class ElPagination {
  /** Total number of items */
  @Prop() total = 0;

  /** Current page (1-indexed) */
  @Prop({ mutable: true }) page = 1;

  /** Items per page */
  @Prop() pageSize = 10;

  /** Show page size changer */
  @Prop() showSizeChanger = false;

  @Event() elPageChange!: EventEmitter<number>;

  private get totalPages() {
    return Math.ceil(this.total / this.pageSize);
  }

  private onPrev = () => {
    if (this.page > 1) {
      this.page--;
      this.elPageChange.emit(this.page);
    }
  };

  private onNext = () => {
    if (this.page < this.totalPages) {
      this.page++;
      this.elPageChange.emit(this.page);
    }
  };

  render() {
    return (
      <Host class="el-pagination">
        <nav class="el-pagination__inner">
          <button
            class="el-pagination__button"
            onClick={this.onPrev}
            disabled={this.page === 1}
            aria-label="Previous page"
          >
            ‹
          </button>

          <span class="el-pagination__info">
            Page {this.page} of {this.totalPages}
          </span>

          <button
            class="el-pagination__button"
            onClick={this.onNext}
            disabled={this.page === this.totalPages}
            aria-label="Next page"
          >
            ›
          </button>
        </nav>
      </Host>
    );
  }
}
