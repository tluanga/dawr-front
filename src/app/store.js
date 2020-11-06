import { configureStore } from '@reduxjs/toolkit';
import inventory from '../features/inventory/inventory.store'
import pos from '../features/pointOfSale/pos.store'
export default configureStore({
  reducer: {
    inventory,
    pos,
  },
});
