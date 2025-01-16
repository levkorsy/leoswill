import { Logging, type SeverityLevel } from './logging.service';

export class ConsoleLogging extends Logging {
  public log<T>(message: string, level: SeverityLevel, data?: T) {
    if (level === 'fatal' || level === 'error') {
      console.error(message, data ?? '');

      return;
    }

    console.log(message, data ?? '');
  }
}
