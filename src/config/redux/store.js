import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/rootReducer";
// import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
    key: 'root',
    storage
}

const persitedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persitedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store)

export {store, persistor};
