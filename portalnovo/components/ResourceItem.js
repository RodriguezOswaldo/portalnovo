import React from 'react';

function ResourceItem({resource}){
    return(
        <div>
            <h3>{resource.name}</h3>
            <p>Needed:{resource.needed}</p>
            <p>Current:{resource.current}</p>
        </div>
    );
}
export default ResourceItem;