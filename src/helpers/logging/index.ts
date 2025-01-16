import { Logging } from '@/helpers/logging/logging.service';
import { ConsoleLogging } from '@/helpers/logging/console-logging.service';

export let logger: Logging;

if (import.meta.env.MODE === 'development') {
  logger = new ConsoleLogging();
}

// if (import.meta.env.MODE === 'production') {
// }
