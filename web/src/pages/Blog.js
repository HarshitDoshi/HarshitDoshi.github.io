import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

function Blog() {

  let match = useRouteMatch();

  return (
    <div>
      <h2>Blog</h2>
      <ul>
        <li>
          <Link to={`${match.url}/winning-the-startup-game`}>Start-up Game Triumph</Link>
        </li>
        <li>
          <Link to={`${match.url}/monitoring-the-art-of-the-digital-eagles`}>Monitoring: The Art of the digital Eagles</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:postId`}>
          <Post />
        </Route>
        <Route path={match.path}>
          <h3>Please select a blog post.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Post() {
  let { postId } = useParams();
  return <h3>Requested post ID: {postId}</h3>;
}

export default Blog;