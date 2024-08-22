// Function to initialize Firebase
const initializeFirebase = (config) => {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
  };
  
  // Function to create a Redux store with middleware
  const createStoreWithMiddleware = (rootReducer, middlewares) => {
    return createStore(rootReducer, applyMiddleware(...middlewares));
  };
  
  // Function to create a Redux slice
  const createSlice = (name, initialState, reducers) => {
    return createSlice({
      name,
      initialState,
      reducers,
    });
  };
  
  // Function to fetch data from Firebase
  const fetchData = async (collection) => {
    const snapshot = await firebase.firestore().collection(collection).get();
    return snapshot.docs.map(doc => doc.data());
  };
  
  // Function to add data to Firebase
  const addData = async (collection, data) => {
    await firebase.firestore().collection(collection).add(data);
  };
  
  // Function to update data in Firebase
  const updateData = async (collection, id, data) => {
    await firebase.firestore().collection(collection).doc(id).update(data);
  };
  
  // Function to delete data from Firebase
  const deleteData = async (collection, id) => {
    await firebase.firestore().collection(collection).doc(id).delete();
  };
  
  // Function to apply Tailwind CSS classes conditionally
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };
  
  // Function to create a Redux action
  const createAction = (type, payload) => {
    return { type, payload };
  };
  
  // Function to create a Redux reducer
  const createReducer = (initialState, handlers) => {
    return (state = initialState, action) => {
      if (handlers.hasOwnProperty(action.type)) {
        return handlersaction.type;
      }
      return state;
    };
  };
  
  module.exports = {
    initializeFirebase,
    createStoreWithMiddleware,
    createSlice,
    fetchData,
    addData,
    updateData,
    deleteData,
    classNames,
    createAction,
    createReducer,
  };
  