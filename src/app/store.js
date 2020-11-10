import { configureStore } from '@reduxjs/toolkit';
import app from '../App.slice'
import inventory from '../features/inventory/inventory.store'
import pos from '../features/pointOfSale/pos.store'
export default configureStore({
  reducer: {
    app,
    inventory,
    pos,
  },
});
