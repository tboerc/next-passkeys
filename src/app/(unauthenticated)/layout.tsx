import { isUserAuthorized } from '@/utils/auth';
import { redirect } from 'next/navigation';

type UnauthenticatedLayoutProps = {
  children: JSX.Element;
};

export default async function UnauthenticatedLayout({ children }: UnauthenticatedLayoutProps) {
  if (await isUserAuthorized()) {
    redirect('/home');
  }

  return children;
}
