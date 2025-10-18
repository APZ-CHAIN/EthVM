---



`ts
import client from 'prom-client';

export const blockGauge = new client.Gauge({
  name: 'apzlastsynced_block',
  help: 'آخرین بلاک سینک‌شده توسط indexer',
});

export const errorCounter = new client.Counter({
  name: 'apzindexererrors_total',
  help: 'تعداد خطاهای رخ‌داده در indexer',
});

export const rpcLatency = new client.Histogram({
  name: 'apzrpclatency_seconds',
  help: 'زمان پاسخ‌دهی RPC به ثانیه',
  buckets: [0.1, 0.5, 1, 2, 5],
});
`

🔹 این فایل متریک‌های اصلی رو تعریف می‌کنه: بلاک آخر، خطاها، و latency.

---
