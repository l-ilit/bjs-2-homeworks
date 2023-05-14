class AlarmClock {
    constructor() {
    this.alarmCollection = [];
    this.intervalID = null;
    }

    addClock(time, callback) {
      if ((typeOf (this.time) === "undefined") || (typeOf (this.callback) === "undefined")) {
        throw new Error("Отсутствуют обязательные аргументы")
      } 
      if (typeOf (this.alarmCollection.find(clock => clock.time === time) != undefined)) {
        console.warn("Уже присутствует звонок на то же время")
      } 
      let alarm = {callback, time, canCall};
      this.alarmCollection.push(alarm);
    }
    removeClock(time) {
      this.alarmCollection.filter(clock => clock.time === time);
      return this.alarmCollection.filter(el => !this.alarmCollection.includes(el));
    }
    getCurrentFormatedTime() {
      return new Date().toLocaleTimeString("ru", {hour: "2-digit", minute: "2-digit"});  
    }
    start() {
      if (this.intervalID != null) {
        return;
      }
      let interval = setInterval (() => {
        this.alarmCollection.forEach((el) => checkTime(el));
      }, 1000);
       this.intervalID = interval;
       const checkTime = (el) => {
        if ((this.getCurrentFormattedTime() === el.time) && (this.canCall === true)){
          this.canCall = false;
          return el.callback();
        }
       }
    }
    stop() {
      clearInterval(this.intervalID);
      this.intervalID === null;
    }
    resetAllCalls() {
      this.alarmCollection.forEach((el) => alarm.canCall = true);
    }
    clearAlarms() {
      this.stop();
      this.alarmCollection = [];
    }
}