import Menu_14 from "./components/Menu_14";
import items from './data'
import Category_14 from "./components/Category_14";
import { useState } from 'react';

const allCategories = [`all`, ...new Set(items.map(item => item.category))]
console.log('allCategories',allCategories);

function App_14() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  return (
    <div>
     <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Category_14 categories={categories}/>
      <Menu_14 items={items}/>
    </section>
  </main>
    </div>
  );
}

export default App_14;
