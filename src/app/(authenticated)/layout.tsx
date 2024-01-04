import { redirect } from 'next/navigation';
import { isUserAuthorized } from '@/utils/auth';

type AuthenticatedLayoutProps = {
  children: JSX.Element;
};

export default async function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  if (!(await isUserAuthorized())) {
    redirect('/login');
  }

  return children;
}
