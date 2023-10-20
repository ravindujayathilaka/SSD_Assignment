import { createGlobalState } from "react-hooks-global-state";

const initialState = { country: null, ip: null };

const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
