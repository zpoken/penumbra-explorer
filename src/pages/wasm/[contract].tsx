import WasmDetails from '@screens/wasm_details';
import NotFound from '@screens/404';
import { chainConfig } from '@configs';

const WasmContractPage = () => {
  if (!chainConfig.extra.cosmwasm) {
    return (
      <NotFound />
    );
  }

  return (
    <WasmDetails />
  );
};

export default WasmContractPage;
