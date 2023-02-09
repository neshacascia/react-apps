import Head from 'next/head';
import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';

export default function NewMeetupPage() {
  const router = useRouter();

  async function addMeetupHandler(enteredMeetupData) {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = res.json();
    console.log(data);

    router.push('/');
  }

  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Create your own React meetup!" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
}
