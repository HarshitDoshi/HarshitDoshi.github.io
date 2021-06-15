import { Switch, Route, Link, useRouteMatch, useParams } from "react-router-dom";
import { useState } from "react";
import { useRemark } from "react-remark";

function Blog() {

  let match = useRouteMatch();

  const [markdownContent, setMarkdownContent] = useRemark();
  const [notesActiveTab, setNotesActiveState] = useState('editor');

  return (
    <div className="h-full w-full bg-gray-50 flex flex-col justify-start items-center">
      <div className="flex flex-col md:flex-row justify-start md:justify-center items-center w-full">
        <h2 className="font-sans text-xl font-black">Blog</h2>
        <div className="flex flex-row md:flex-row justify-start md:justify-center items-center w-full h-auto">
          <ul className="mx-4">
            <li>
              <Link to={`${match.url}/example-post-1`}>Example Post 1</Link>
            </li>
            <li>
              <Link to={`${match.url}/example-post-2`}>Example Post 2</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path={`${match.path}/:postId`}>
            <Post />
          </Route>
          <Route path={match.path}>
            <h3>Please select a blog post.</h3>
          </Route>
        </Switch>
      </div>
      <div className="my-4 flex flex-col flex-grow md:flex-row justify-start md:justify-center items-center w-full">
        <h2 className="font-sans text-xl font-black">Markdown Lab</h2>
        <div className="w-full h-full px-4 flex flex-col justify-start items-center">
          <div className="flex flex-row w-full justify-center items-center">
            <button onClick={() => {
              setNotesActiveState('editor');
            }} className={`w-1/2 py-2 rounded-t-lg shadow-lg font-bold focus:outline-none` + ((notesActiveTab === 'editor') ? ` bg-gray-100 border border-gray-400 border-b-0` : ` bg-gray-300 border border-gray-400`)}>Editor</button>
            <button onClick={() => {
              setNotesActiveState('preview');
            }} className={`w-1/2 py-2 rounded-t-lg shadow-lg font-bold focus:outline-none` + ((notesActiveTab === 'preview') ? ` bg-gray-100 border border-gray-400 border-b-0` : ` bg-gray-300 border border-gray-400`)}>Preview</button>
          </div>
          {
            (notesActiveTab === 'editor')
              ? <textarea wrap="soft" spellCheck="true" onChange={({ currentTarget }) => {
                setMarkdownContent(currentTarget.value);
              }} className="markdown-editor w-full h-full focus:outline-none shadow-lg p-2 bg-gray-50 rounded-b-lg border border-gray-400 border-t-0"></textarea>
              : <div className="markdown-content w-full h-full p-2 bg-gray-100 shadow-lg rounded-b-lg border border-gray-400 border-t-0">
                {markdownContent ? markdownContent : <p>Start typing below to add content.</p>}
              </div>
          }
        </div>
      </div>
    </div>
  );
}

function Post() {
  let { postId } = useParams<{ postId: string }>();
  return <h3>Requested post ID: {postId}</h3>;
}

export default Blog;