import { Component, Prop, Watch, State, h } from '@stencil/core';
import { applyTheme } from '../../../utils/themes';
import config from '../../../../elementrix.config';

@Component({
	tag: 'elx-button',
	styleUrl: 'elx-button.scss',
	shadow: true,
})
export class ElxButton {
	@Prop() size: 'small' | 'medium' | 'large' = 'medium';
	@Prop() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
	@Prop() disabled: boolean = false;
  @Prop({ reflect: true }) theme: 'light' | 'dark' | 'custom' = config.theme || 'light';
  @Prop() customTheme?: string = config.customTheme;

  @State() currentTheme: 'light' | 'dark' | 'custom' = this.theme;

  @Watch('theme')
  handleThemeChange(newValue: 'light' | 'dark' | 'custom') {
    this.currentTheme = newValue;
    applyTheme(newValue, config.themes?.light, config.themes?.dark, this.customTheme);
  }

  toggleTheme = () => {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(this.currentTheme, config.themes?.light, config.themes?.dark, this.customTheme);
  };

  componentWillLoad() {
    applyTheme(this.theme, config.themes?.light, config.themes?.dark, this.customTheme);
  }

  componentDidLoad() {
    if (this.theme === 'custom' && this.customTheme) {
      document.documentElement.setAttribute('data-theme', 'custom');
      let existingLink = document.getElementById('custom-theme-stylesheet');
      if (existingLink) {
        existingLink.setAttribute('href', this.customTheme);
      } else {
        const link = document.createElement('link');
        link.id = 'custom-theme-stylesheet';
        link.rel = 'stylesheet';
        link.href = this.customTheme;
        document.head.appendChild(link);
      }
    }
  }

  private handleClick = (event: Event) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  };

	render() {
		return (
			<button
        class={`elx-button ${this.size} ${this.variant} ${this.disabled ? 'disabled' : ''}`}
        disabled={this.disabled}
        onClick={this.handleClick}
      >
				<slot />
			</button>
		);
	}
}
