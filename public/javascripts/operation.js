/**
 * Created by admin on 2016/12/31.
 */
function add(x,y) {
    return x+y;
}
function sub(x,y) {
    return x-y;
}
function mul(x,y) {
    return x*y;
}
function div(x,y) {
    if(y==0){
        return "error";
    }
    return x/y;
}