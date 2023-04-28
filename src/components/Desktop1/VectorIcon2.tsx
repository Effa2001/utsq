import { memo, SVGProps } from 'react';

const VectorIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15.4549 13.8277L4.92188 24.4494C4.19386 25.1835 3.01664 25.1835 2.29636 24.4494L0.546015 22.6843C-0.182005 21.9502 -0.182005 20.763 0.546015 20.0367L8.0121 12.5078L0.546015 4.97891C-0.182005 4.24477 -0.182005 3.05764 0.546015 2.3313L2.28862 0.550609C3.01664 -0.183536 4.19386 -0.183536 4.91414 0.550609L15.4472 11.1723C16.183 11.9064 16.183 13.0936 15.4549 13.8277V13.8277Z'
      fill='#585353'
    />
  </svg>
);
const Memo = memo(VectorIcon2);
export { Memo as VectorIcon2 };
