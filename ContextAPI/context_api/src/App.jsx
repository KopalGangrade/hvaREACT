import UserContextProvider from './context/UserContextProvider';
import Profile from './component/Profile';
import Login from './Login';

function App() {

  return (
    <UserContextProvider>
      <h1>React with Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}
export default App
