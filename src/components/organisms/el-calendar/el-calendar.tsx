import { Component, Prop, h, Host, State } from '@stencil/core';

@Component({
  tag: 'el-calendar',
  styleUrl: 'el-calendar.scss',
  shadow: true,
})
export class ElCalendar {
  /** Current date */
  @Prop({ mutable: true }) value?: Date;

  @State() currentMonth = new Date();

  render() {
    return (
      <Host class="el-calendar">
        <div class="el-calendar__header">
          <button class="el-calendar__nav" aria-label="Previous month">‹</button>
          <span class="el-calendar__title">
            {this.currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </span>
          <button class="el-calendar__nav" aria-label="Next month">›</button>
        </div>

        <div class="el-calendar__grid">
          <div class="el-calendar__day-header">Sun</div>
          <div class="el-calendar__day-header">Mon</div>
          <div class="el-calendar__day-header">Tue</div>
          <div class="el-calendar__day-header">Wed</div>
          <div class="el-calendar__day-header">Thu</div>
          <div class="el-calendar__day-header">Fri</div>
          <div class="el-calendar__day-header">Sat</div>
          
          {/* Calendar days would be generated here */}
          <div class="el-calendar__day">1</div>
          <div class="el-calendar__day">2</div>
          <div class="el-calendar__day">3</div>
        </div>
      </Host>
    );
  }
}
