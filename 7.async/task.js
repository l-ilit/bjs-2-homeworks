class AlarmClock {
    constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
    }

    addClock(time, callback) {
      if ((!time) || (!callback)) {
        throw new Error("Отсутствуют обязательные аргументы");
      } 
      let validTime = this.alarmCollection.some((clock) => clock.time == time);
      if (validTime === true) {
        console.warn("Уже присутствует звонок на то же время")
      } 
      let alarm = {callback, time, canCall: true};
      this.alarmCollection.push(alarm);
    }
    removeClock(time) {
      this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
    }
    getCurrentFormattedTime() {
      return new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});  
    }
    start() {
      if (this.intervalId != null) {
        return;
      }
      this.intervalId = setInterval (() => {
        this.alarmCollection.forEach((clock) => checkTime(clock));
      }, 1000);
       const checkTime = (clock) => {
        if ((this.getCurrentFormattedTime() === clock.time) && (clock.canCall == true)) {
          clock.canCall = false;
          clock.callback();
        }
       }
    }
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    resetAllCalls() {
      this.alarmCollection.forEach((clock) => clock.canCall = true);
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
}