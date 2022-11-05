import React from 'react';
import Counter from './components/counter';
import Link from './components/link';

function App(){
   return (
      <div>
         <Counter incrementBy={1}/>
         <Counter incrementBy={5}/>

         <Link />
      </div>
   );
}

export default App;