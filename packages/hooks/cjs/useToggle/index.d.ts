type Fun = () => void;
export interface Actions<T> {
    toggle: Fun;
    setLeft: Fun;
    setRight: Fun;
}
declare function useToggle<T = boolean>(): [boolean, Actions<T>];
declare function useToggle<D, R>(D?: any, R?: any): [D | R, Actions<D | R>];
export default useToggle;
