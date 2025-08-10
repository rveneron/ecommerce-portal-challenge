import { memo, ReactNode } from 'react';
import { Trans as ReactTrans } from 'react-i18next';
import { ClassNameProps } from '@/types/classnames-props.type';

const defaultComponents = {
  primary: <span className="text-primary" />,
  secondary: <span className="text-secondary" />,
  error: <span className="text-red-600" />,
  important: <span className="font-bold" />,
  italic: <span className="italic" />,
  br: <br />
};

export type Props = ClassNameProps & {
  message: string;
  values?: Record<string, string>;
  components?: Record<string, ReactNode | string>;
};

const Trans = ({ className, message, values = {}, components = {} }: Props) => {
  return (
    <span className={className}>
      <ReactTrans
        i18nKey={message}
        components={{ ...defaultComponents, ...components }}
        values={values}
      />
    </span>
  );
};

export default memo(Trans);
