import './App.css';
import BlockPage from './components/BlogPage';
import UserInfoContext from './context/UserInfoContext';

 export default function App() {

  const userInfo = {username: 'Admin', isAdmin: 'true'}

  return (
  <UserInfoContext value={userInfo}>
  <BlockPage></BlockPage>
  </UserInfoContext>
  )
}

