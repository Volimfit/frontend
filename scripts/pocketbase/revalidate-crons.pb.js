/// <reference path="../pb_data/types.d.ts" />

// Place on PocketBase server: /pb_hooks/revalidate-crons.pb.js
// Then restart PocketBase. Jobs will appear in Settings -> Crons.

const REVALIDATE_URL = $os.getenv("NEXT_REVALIDATE_URL") || "https://volimfit.ru/api/revalidate";
const REVALIDATE_SECRET = $os.getenv("REVALIDATE_SECRET");

function callRevalidate(collection) {
  if (!REVALIDATE_SECRET) {
    console.log(`[revalidate:${collection}] REVALIDATE_SECRET is empty`);
    return;
  }

  try {
    $http.send({
      url: REVALIDATE_URL,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        secret: REVALIDATE_SECRET,
        collection,
      }),
      timeout: 120,
    });
    console.log(`[revalidate:${collection}] sent`);
  } catch (e) {
    console.log(`[revalidate:${collection}] failed:`, e);
  }
}

// Every 15 minutes + manual run from admin "play" button
cronAdd("revalidate_trainers", "*/15 * * * *", () => {
  callRevalidate("trainers");
});

// Every 30 minutes + manual run from admin "play" button
cronAdd("revalidate_public_offer_files", "*/30 * * * *", () => {
  callRevalidate("public_offer_files");
});
