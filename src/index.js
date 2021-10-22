import App from "./App.svelte";

let app = new App({
    target: document.body,

});

export default app;

if (undefined /* [snowpack] import.meta.hot */ ) {
    undefined /* [snowpack] import.meta.hot */ .accept();
    undefined /* [snowpack] import.meta.hot */ .dispose(() => {
        app.$destroy();
    });
}