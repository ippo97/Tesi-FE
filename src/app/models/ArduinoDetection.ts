export class ArduinoDetection {
  plantName: string;
  value: number;
  type: string;
  date: string;
  constructor(plantName: string, value: number, type: string, date: string,) {
    this.plantName = plantName;
    this.value = value;
    this.type = type;
    this.date = date;
  }
}
