import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { partId } = useParams();
    const [item, setItem] = useState(partId);

    return (
        <div>
            <h2>This is purchase page :{item.name}</h2>
        </div>
    );
};

export default Purchase;