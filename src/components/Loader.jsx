import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="magnifying-glass-loading"
      wrapperClass="magnifying-glass-wrapper"
      glassColor="gray"
      color="#0d00c3"
    />
  );
};


  export default Loader;
