//import CdpPageView from 'components/CdpPageView';
import FEAASScripts from 'components/FEAASScripts';
import BYOC from 'src/byoc';

const Scripts = (): JSX.Element => {
  return (
    <>
      <BYOC></BYOC>
      {/* <CdpPageView /> */}
      <FEAASScripts />
    </>
  );
};

export default Scripts;
