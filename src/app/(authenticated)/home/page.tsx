'use client';

import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    require('@passageidentity/passage-elements/passage-profile');
  }, []);

  return <passage-profile app-id={process.env.NEXT_PUBLIC_PASSAGE_APP_ID}></passage-profile>;
}
