import Menu_14 from './components/Menu_14';
import items from './data';
import { useState } from 'react';

function App_14() {
  const [menuItems, setMenuItems] = useState(items);
  return (
    <div>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Menu_14 items={items} />
        </section>
      </main>
    </div>
  );
}

export default App_14;
