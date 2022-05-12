import store from "./store";

function listener() {
    store.subscribe(() => {
        console.log("store changed", store.getState());
    });
}
export { listener };