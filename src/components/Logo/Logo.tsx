import React, {FC} from 'react';

interface IProps {
}

const Logo: FC<IProps> = () => {
  return (
    <div className={'text-white text-2xl font-logo'}>
      Efforts
      {/*<img src={'/favicon-96.png'}/>*/}
    </div>
  );
};

export default Logo;
