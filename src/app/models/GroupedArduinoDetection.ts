import { ArduinoDetection } from './ArduinoDetection';

export class GroupedArduinoDetection {
  day: string;
  totalInput: number;
  totalOutput: number;
  detections: ArduinoDetection[];

  constructor(
    day: string,
    totalInput: number,
    totalOutput: number,
    detections: ArduinoDetection[]
  ) {
    this.day = day;
    this.totalInput = totalInput;
    this.totalOutput = totalOutput;
    this.detections = detections;
  }
}
