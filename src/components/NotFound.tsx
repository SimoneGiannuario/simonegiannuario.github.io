import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found section fade-in">
      <div className="not-found__content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn btn-primary mt-4">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
