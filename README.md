Hooks

1. useState: Used ti manipulate state of component
2. useEffect: Used to hook into lifecycle of the component
3. useLayoutEffect: Is simillar like of useEffect but get triggered sync after all DOM mutation or just before the DOM is going to painted/render or display in the screen
4. useRef: used to provied to a raw DOM node based on React ref object
5. useMemo: Used to memorized the version of a variable /function which only changes based on supplied predefined set of dependency . help tp reduce the number of recomputation of expensived csalculation and improves the performance


7. useCallback
: This is used to return a memozed version of vairables /function which will we changed when dependency will be changed 

9. useImperativeHandle
: to expose ref based value in the child component to parent component

10. useDefferedValue
//it used for defer a value similar to debouncing or throttling to defer updates

11. useDebug

//it is only used debugging use case in React DEV Tools 
12. useTransition
//this is used to identify the pending status of the transaction
13: userId
: used to create uniqueId for an element in the application

5. useContext
6. useReducer: Advanced version of useState hooks with reducer concept

14. Custom Hook