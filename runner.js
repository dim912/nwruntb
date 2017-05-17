var nwrun = require('nwrun')
nwrun(
    {
        standalone: true,
        "src_folders": [
            "tests/",
        ],
        "output_folder": "./testReports",
        "test_workers": { "enabled": true, "workers": "auto" }
    }
    , function (done) {
        console.log(JSON.stringify(done))
        if (done === false) {
            process.exit(1);
        }
    });