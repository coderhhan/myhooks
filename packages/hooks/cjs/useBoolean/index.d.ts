interface Actions {
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
}
declare function useBoolean(defaultvalue?: boolean): [boolean, Actions];
export default useBoolean;
