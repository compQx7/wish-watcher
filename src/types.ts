export interface AlertOptions {
  desiredReductionPrice?: number | undefined;
  desiredReductionRate?: number | undefined;
  screenshot?: boolean | undefined;
}

export interface Target {
  url: string;
  title: string;
  alertOptions?: AlertOptions | undefined;
}
