import { createFileRoute } from '@tanstack/react-router'
import { useAuth } from '../hook/authContext'
import LoginModal from '../form/login';
import { Link } from '@tanstack/react-router';


export const Route = createFileRoute('/studylog')({
  component: () => {
    const { isAuthenticated } = useAuth();

    if(!isAuthenticated){
      return <LoginModal />
    }

    return (
      <div>
        <p>Hello /studylog!</p>
        <Link to="/studylog">StudyLog</Link>
        <Link to="/create"> Create</Link>
      </div>
    )
  }
})
