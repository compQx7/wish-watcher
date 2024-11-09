export interface AlertOptions {
  desiredDiscountPrice?: number | undefined;
  desiredDiscountRate?: number | undefined;
  screenshot?: boolean | undefined;
}

export interface Target {
  url: string;
  title: string;
  alertOptions?: AlertOptions | undefined;
}
