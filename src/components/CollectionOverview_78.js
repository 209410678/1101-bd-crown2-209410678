import React, { useState } from 'react';
import './CollectionOverview_78.scss';
//import items from './collection-item_78';
import CollectionPreview_78 from '../components/CollectionPreview_78';

const CollectionOverview_78 = () => {
  return (
    <div className="collection-overview">
      <CollectionPreview_78 />
    </div>
  );
};


/*const CollectionOverview_78 = () => {
  const [collectionItems, setCollectionItems] = useState(items,);
  console.log('collectionItems', collectionItems);
  return (
    <div className="collection-overview">
      {collectionItems.map((item) => {
        const { id, name, price, remoteUrl, size } = item;
        return (
          <CollectionPreview_78
            id={id}
            name={name}
            price={price}
            remoteUrl={remoteUrl}
            size={size}
          />
        );
      })}
    </div>
  );
};
*/
export default CollectionOverview_78;
