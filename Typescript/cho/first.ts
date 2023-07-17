type Brand<K, T> = K & { _brand: T };

type EUR = Brand<number, "EUR">;
type USD = Brand<number, "USD">;
type KRW = Brand<number, "KRW">;

const usd = 10 as USD;
const eur = 10 as EUR;
const krw = 2000 as KRW;
function euroToUsd(euro: EUR): number {
  return euro * 1.18;
}

console.log(`USD : ${euroToUsd(eur)} `);

euroToUsd(eur);
