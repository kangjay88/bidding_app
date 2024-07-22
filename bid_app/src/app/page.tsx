import { database } from '@/db/database';
import { bids as bidsSchema } from '@/db/schema';
//Every ShadCN component is stored in the components folder;
import { Button } from '@/components/ui/button'; 
import { Input } from '@/components/ui/input';
import { revalidatePath } from 'next/cache';

export default async function HomePage() {

  const bids = await database.query.bids.findMany(); //fetch all bids *add async to 

  return (
  <main className="container mx-auto py-12">
    <form
      action={async (formData: FormData) => {
        "use server";
        await database.insert(bidsSchema).values({});
        revalidatePath("/"); // tells nextjs you need to reload/refetch the data = refetch bids const, 
        // rerun this form component and its jsx
      }}
    >
      <Input name="bid" placeholder="Bid" />
      <Button type="submit">Place Bid</Button>
    </form>

    {bids.map(bid => (
      <div key={bid.id}>{bid.id}</div>
    ))}
  </main>
  );
}