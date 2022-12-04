require.config({
    packages: [
        {
            name: "edc_base_ts",
            location: "../../node_modules/edc_base_ts/dist",
            main: "bundle.js"
        },
        {
            name: "edc_input_ts",
            location: "../../node_modules/edc_input_ts/dist",
            main: "bundle.js"
        },
        {
            name: "edc_popup_ts",
            location: "../../node_modules/edc_popup_ts/dist",
            main: "bundle.js"
        }
    ]
});