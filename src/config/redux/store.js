import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persitedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persitedReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store)

export {store, persistor};
