import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
   const greet = (childName) => {
      alert(`Hello ${parentName} from ${childName}`)
   }
   const [parentName, setParentName] = useState('Parent')
   return (
      <div>
         <ChildComponent greetHandler={greet} />
      </div>
   );
}

export default ParentComponent;