"use strict";

class CountdownTimer {
  constructor(timeObj) {
    this.selector = timeObj.selector;
    this.targetDate = timeObj.targetDate;
  }
  updateTimer() {
    setInterval(() => {
      let time = Date.parse(this.targetDate) - Date.now();
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((time % (1000 * 60)) / 1000);

      document.querySelector('span[data-value="days"]').textContent = `${days}`;
      document.querySelector(
        'span[data-value="hours"]'
      ).textContent = `${hours}`;
      document.querySelector('span[data-value="mins"]').textContent = `${mins}`;
      document.querySelector('span[data-value="secs"]').textContent = `${secs}`;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2020")
});

timer.updateTimer();
