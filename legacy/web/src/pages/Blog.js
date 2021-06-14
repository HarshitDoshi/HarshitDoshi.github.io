import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";

function Blog() {

  let match = useRouteMatch();

  return (
    <div>
      <h2 className="font-sans text-xl font-black">Blog</h2>
      <ul>
        <li>
          <Link to={`${match.url}/example-post-1`}>Example Post 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/example-post-1`}>Example Post 2</Link>
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