import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-image',
  styleUrl: 'el-image.scss',
  shadow: true,
})
export class ElImage {
  /** Image source */
  @Prop() src!: string;

  /** Alt text */
  @Prop() alt = '';

  /** Lazy loading */
  @Prop() lazy = false;

  /** Object fit */
  @Prop() fit: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' = 'cover';

  @State() loaded = false;
  @State() error = false;

  private onLoad = () => {
    this.loaded = true;
  };

  private onError = () => {
    this.error = true;
  };

  private get hostClass() {
    return {
      'el-image': true,
      'el-image--loaded': this.loaded,
      'el-image--error': this.error,
    };
  }

  render() {
    return (
      <Host class={this.hostClass}>
        <div class="el-image__wrapper">
          {!this.loaded && !this.error && (
            <div class="el-image__placeholder">
              <slot name="placeholder">Loading...</slot>
            </div>
          )}

          {this.error && (
            <div class="el-image__error">
              <slot name="error">Failed to load image</slot>
            </div>
          )}

          <img
            class="el-image__img"
            src={this.src}
            alt={this.alt}
            loading={this.lazy ? 'lazy' : 'eager'}
            onLoad={this.onLoad}
            onError={this.onError}
            style={{ objectFit: this.fit }}
          />
        </div>
      </Host>
    );
  }
}
