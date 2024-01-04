import Passage from '@passageidentity/passage-node/lib/cjs';
import { cookies } from 'next/headers';

const appID = process.env.NEXT_PUBLIC_PASSAGE_APP_ID!;
const apiKey = process.env.PASSAGE_API_KEY!;

const passage = new Passage({
  appID,
  apiKey,
  authStrategy: 'HEADER',
});

export async function isUserAuthorized() {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get('psg_auth_token')?.value;

    const req = {
      headers: {
        authorization: `Bearer ${authToken}`,
      },
    };

    const userID = await passage.authenticateRequest(req);

    if (userID) {
      return true;
    }
  } catch (e) {
    console.error(e);
    return false;
  }
}
