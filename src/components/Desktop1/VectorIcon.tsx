import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 25' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.544788 11.1723L11.0728 0.550609C11.8004 -0.183536 12.9771 -0.183536 13.697 0.550609L15.4465 2.31568C16.1742 3.04983 16.1742 4.23696 15.4465 4.96329L7.99178 12.5L15.4542 20.0289C16.1819 20.763 16.1819 21.9502 15.4542 22.6765L13.7047 24.4494C12.9771 25.1835 11.8004 25.1835 11.0805 24.4494L0.552529 13.8277C-0.182881 13.0936 -0.182881 11.9064 0.544788 11.1723V11.1723Z'
      fill='#585353'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
