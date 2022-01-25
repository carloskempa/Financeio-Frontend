export default interface IRota {
    path: string;
    name: string;
    exact: boolean;
    component?: any;
    props?: any;
    layout: string;
    sub?: this[];
}