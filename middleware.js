export default (displayAll=false) => store => next => action => {
  if(!displayAll && action.type && (action.type.substr(0, 5) == "redux" || action.type.substr(0,6) == "@redux" || action.type.substr(0,7) == "@@redux")){
    return next(action)
  }
  else {
    const logColor = action.__type == "FAIL" ? "#FF0000" : action.__type == "SUCCESS" ? "#008000" : "#222";
    // use groupCollapsed to collapse
    console.group('%c '+action.type, `background:${logColor}; color: yellow`);
    console.info(`%c dispatching:`, `background:${logColor}; color: yellow`);
    console.log(action)
    let result = next(action)
    console.log(`%c next state`, `background:${logColor}; color: yellow`)
    console.log(store.getState());
    console.groupEnd(action.type)
    return result
  }
}
