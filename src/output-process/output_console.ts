export const processOutputConsole = (target: any, result: any) => {
  // 商品名と値下がり率と現在価格（コメント数）を出力する
  console.log(target.title);
  console.log(result.currentPrice);
};
