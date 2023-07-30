import { ArduinoDetection } from "./ArduinoDetection";

export interface DailyArduinoDetection {
  day: string; // LocalDate rappresentato come stringa in formato ISO (es. 'yyyy-MM-dd')
  totalPerHoursInput: number[];
  totalPerHoursOutput: number[];
  totalInput: number;
  totalOutput: number;
  detections: ArduinoDetection[];
}
