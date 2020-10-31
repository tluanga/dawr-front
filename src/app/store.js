import { configureStore } from '@reduxjs/toolkit';
import inventory from '../features/inventory/inventory.store'

export default configureStore({
  reducer: {
    inventory
  },
});
