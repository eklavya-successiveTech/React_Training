import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  const AuthComponent = (props) => {
    const cookieStore = cookies();

    const sessionToken = cookieStore.get('session_token');

    if (!sessionToken) {
      redirect('/login');
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;