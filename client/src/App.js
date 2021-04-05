import { Switch } from "react-router-dom";
import "./App.css";
import Layout from '../src/Components/Layout/Layout'
import Landing from './Screens/Landing'
// Imports =========================================================
function App() {
  return (
    <div className='layout-contianer'>
      <Layout>
        <Switch>
        <Landing />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
