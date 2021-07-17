import * as React from "react"
import { Admin, Resource, EditGuesser } from 'react-admin';
import { UserList } from './users';
import jsonServerProvider from 'ra-data-json-server';
import { PostEdit, PostList, PostCreate } from "./posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
