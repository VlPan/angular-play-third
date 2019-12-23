import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public loggs: string[] = [];

  addLog(log: string) {
    this.loggs.push(log);
  }
  clearLogs() {
    this.loggs = [];
  }
}
