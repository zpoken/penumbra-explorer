import React from 'react';

const Verified: React.FC<{verified: boolean} & ComponentDefault> = (props) => {
  return (
    <div>
      {props.verified ? (
        'true'
      ) : (
        'false'
      )}
    </div>
  );
};

export default Verified;
