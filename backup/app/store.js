import { configureStore } from '@reduxjs/toolkit';
import inventoryReducer from '../features/inventory/store.inventory'
import componentReducer from './components/components.store'
import loginReducer from '../features/login/login.slice'
import posReducer from '../features/pos/pos.store'
export default configureStore({
  reducer: {
    login:loginReducer,
    component:componentReducer,
    inventory:inventoryReducer,
    pos:posReducer,

  },
});
