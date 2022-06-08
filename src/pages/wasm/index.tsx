import Wasm from '@screens/wasm';
import NotFound from '@screens/404';
import { chainConfig } from '@configs';

const WasmPage = () => {
  if (!chainConfig.extra.cosmwasm) {
    return (
      <NotFound />
    );
  }

  return (
    <Wasm />
  );
};

export default WasmPage;
