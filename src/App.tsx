import { SplitViewPanels } from './components/';
import { Modal } from './components/';
import { SearchBar } from './components/';
import { DatePicker } from './components';
import { List } from './components/';
import './App.css';

export const App = () => {
  return (
    <>
      <section className="appContainer">
        <div className="screenContainer panels">
          <SplitViewPanels
            leftPanel={<div>Left Panel Content</div>}
            rightPanel={<div>Right Panel Content</div>}
          />
        </div>
        <div className="screenContainer datepicker">
          <DatePicker />
        </div>
        <div className="screenContainer modal">
          <Modal btnName="Submit" />
        </div>
        <div className="screenContainer searchBar">
          <SearchBar />
        </div>
        <div className="screenContainer list">
          <List />
        </div>
      </section>
    </>
  );
};

export default App;
