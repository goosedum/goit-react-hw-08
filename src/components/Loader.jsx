import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="blue"
    />
  );
};

export default Loader;
