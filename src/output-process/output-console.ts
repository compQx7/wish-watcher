export const processOutputConsole = (target: any, pageData: any, alert: any) => {
  console.log(`title: ${target.title}`);
  // TODO: Modify the alert so that it is clear what it is.
  console.log(`alert: ${alert ? 'Alert!' : '-'}`);
  console.log(`listPrice: ${target.alertOptions.listPrice}`);
  console.log(`currentPrice: ${pageData.currentPrice}`);
  console.log('discountRate: ', (target.alertOptions.listPrice - pageData.currentPrice) / target.alertOptions.listPrice * 100);
};
