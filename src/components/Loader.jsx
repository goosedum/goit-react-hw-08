import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => (
  <RotatingLines
    visible={true}
    height="90"
    width="90"
    strokeColor="#0d00c3"
    strokeWidth="4"
    animationDuration="0.65"
    ariaLabel="rotating-lines-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
);


export default Loader;
