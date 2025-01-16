export type SeverityLevel =
  | 'fatal'
  | 'error'
  | 'warning'
  | 'log'
  | 'info'
  | 'debug';

export abstract class Logging {
  public abstract log<T>(message: string, level: SeverityLevel, data?: T): void;

  public error<T>(message: string, data?: T): void {
    this.log(message, 'error', data);
  }

  public info<T>(message: string, data?: T): void {
    this.log(message, 'info', data);
  }

  public critical<T>(message: string, data?: T): void {
    this.log(message, 'fatal', data);
  }
}
