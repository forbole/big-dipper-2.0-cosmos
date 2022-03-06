const blockHeight = fetch(process.env.NEXT_PUBLIC_GRAPHQL_URL, {
  method: 'POST',
  body: JSON.stringify({
    query: `
    query LatestBlockTimestamp {
      block: block(order_by: {height: desc}, limit: 1) {
          height
      }
    }
    `,
  }),
})
  .then((response) => response.json())
  .then((r) => {
    return r.data.block[0].height;
  });
export default async function handler(req, res) {
  res.end(JSON.stringify(await blockHeight));
}
