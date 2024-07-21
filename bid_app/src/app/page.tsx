import { database } from '@/db/database';
import { bids as bidsSchema } from '@/db/schema';

export default async function HomePage() {

  const bids = await database.query.bids.findMany(); //fetch all bids *add async to 

  return (
  <main className="">
    <form
      action={async (formData: FormData) => {
        "use server";
        await database.insert(bidsSchema).values({});
      }}
    >
      <input name="bid" placeholder="Bid" />
      <button type="submit">Place Bid</button>
    </form>

    {bids.map(bid => (
      <div key={bid.id}>{bid.id}</div>
    ))}
  </main>
  );
}