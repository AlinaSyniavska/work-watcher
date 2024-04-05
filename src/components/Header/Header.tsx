import React, {FC} from 'react';
import DatePicker from "@/components/DatePicker/DatePicker";

interface IProps {
  title: string,
}

const Header: FC<IProps> = ({title}) => {
  return (
    <div className={'py-3 px-5 bg-card-foreground'}>
      <div className={'text-2xl font-bold'}>{title}</div>

      <DatePicker/>
    </div>
  );
};

export default Header;