const initState = {
  projects: [
    {id: '1', title: '2 room apartment Ben Yehuda', content: ' 2 room apartment in Ben Yehuda 180, 6000 nis, enter 1.8'},
    {id: '2', title: '1 studio apartment Carmel Market', content: 'studio apartment close to the market, 3500 nis, enter immediately'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    default:
      return state;
  }
};

export default projectReducer;