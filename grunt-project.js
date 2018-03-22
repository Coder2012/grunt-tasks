var baseDir = 'hybris/bin/custom/trek/trekstorefront/web/';
var themeDir = baseDir + 'webroot/_ui/desktop/theme-trek/';
var commonDir = baseDir + 'webroot/_ui/desktop/common/';
var themeCssDir = themeDir + 'css/';
var commonCssDir = commonDir + 'css/';
var commonJsDir = commonDir + 'js/';
var combinedCssDir = themeDir + 'css/combined/*';
var combinedJsDir = themeDir + 'js/combined/*';
var themeJsDir = themeDir + 'js/';
var sharedJsDir = baseDir + 'webroot/_ui/shared/js/';
var combinedJs = themeDir + 'js/combined/combined';
var addonsUiDir = baseDir + 'webroot/_ui/addons/';

var cssFiles = [
    themeCssDir + 'screen.css',
    commonCssDir + 'storeDetail.css',
    commonCssDir + 'storeFinder.css',
    commonCssDir + 'account.css',
    commonCssDir + 'jquery.colorbox-1.3.16.css',
    commonCssDir + 'magnific-popup.css',
    commonCssDir + 'colorBox.css',
    commonCssDir + 'siteSearch.css',
    commonCssDir + 'addresslookup.css'
];

var jsFiles = [
    themeJsDir  + 'jquery-1.11.2.min.js',
    commonJsDir + 'acc.track.js',
    commonJsDir + 'acc.autocomplete.js',
    sharedJsDir + 'analyticsmediator.js',

    themeJsDir + 'modernizr-custom.js',
    themeJsDir + 'jquery.jcarousel.min.js',
    commonJsDir + 'jquery-ui-1.11.14.min.js',

    commonJsDir + 'jquery.bt-0.9.5-rc1.min.js',
    themeJsDir + 'jquery.blockUI.js',
    themeJsDir + 'owl.carousel.min.js',
    themeJsDir + 'owl.carousel.plugins.js',
    themeJsDir + 'jquery.debouncedresize.js.src.js',
    themeJsDir + 'jquery.validate.min.js',
    themeJsDir + 'additional-methods.min.js',
    themeJsDir + 'jquery.magnific-popup.min.js',
    commonJsDir + 'acc.storefinder.js',
    commonJsDir + 'acc.paginationsort.js',
    themeJsDir + 'lazysizes-fix.js',
    themeJsDir + 'lazysizes.min.js',
    themeJsDir + 'ls.unveilhooks.min.js',
    themeJsDir + 'foundation.js',
    themeJsDir + 'bundle.js',
    themeJsDir + 'addresslookup.js',
    themeJsDir + 'optin-monster.js',
    themeJsDir + 'handlebars-v4.0.5.js',
    themeJsDir + 'tippy.js',
    commonJsDir + 'acc.address.js',
    addonsUiDir + 'smarteditaddon/shared/common/js/webApplicationInjector.js',
    addonsUiDir + 'smarteditaddon/shared/common/js/reprocessPage.js',
    addonsUiDir + 'smarteditaddon/desktop/common/js/smarteditaddon.js',
    addonsUiDir + 'trekcheckoutaddon/desktop/common/js/trekcheckoutaddon.js',
    addonsUiDir + 'trekcheckoutaddon/desktop/common/js/acc.removepaymentdetails.js',
    addonsUiDir + 'cybersourceaddon/desktop/common/js/cybersourceaddon.js'
];

var cdnDeployConfigDev = {
    options: {
        containerName: 'hybris', // container name in blob
        serviceOptions: ['wcpcdn', 'v+v1ZJhABc2AXu+JTj3+ajVprWDFGPj76ZvmDS5W3AZ++JUALX9ldVxz+5Sno85K6jqMTNNoCZ45JGxJfH/Xbg=='], // custom arguments to azure.createBlobService
        folder: 'dev', // path within container
        zip: true, // gzip files if they become smaller after zipping, content-encoding header will change if file is zipped
        deleteExistingBlobs: false, // true means recursively deleting anything under folder
        concurrentUploadThreads: 10, // number of concurrent uploads, choose best for your network condition
        metadata: {
            cacheControl: 'public, no-cache', // cache in browser
            cacheControlHeader: 'public, no-cache' // cache in azure CDN. As this data does not change, we set it to 1 year
        },
        testRun: false // test run - means no blobs will be actually deleted or uploaded, see log messages for details
    },
    src: [
        'css/combined/combined*.css', 'js/combined/combined*.js' // uploading both, the minified and unminified versions of the css and js files. The version (minified or unminified) that app should use is determined by 'storefront.use.grunt.minified.files' flag in local.properties file for the environment.
    ],
    cwd: 'hybris/bin/custom/trek/trekstorefront/web/webroot/_ui/desktop/theme-trek/'
};
var cdnDeployConfigDev1 = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigDev2 = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigProofing = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigE2E = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigMadone = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigDomane = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigSession = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigTopfuel = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigProd = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigTest = JSON.parse(JSON.stringify(cdnDeployConfigDev));
var cdnDeployConfigUnitTest = JSON.parse(JSON.stringify(cdnDeployConfigDev));
cdnDeployConfigUnitTest.options.folder = 'minificationUnitTest';
cdnDeployConfigProd.options.folder = 'prod';
cdnDeployConfigTest.options.folder = 'test';
cdnDeployConfigProofing.options.folder = 'proofing';
cdnDeployConfigE2E.options.folder = 'e2e';
cdnDeployConfigMadone.options.folder = 'madone';
cdnDeployConfigDomane.options.folder = 'domane';
cdnDeployConfigSession.options.folder = 'session';
cdnDeployConfigTopfuel.options.folder = 'topfuel';
cdnDeployConfigDev1.options.folder = 'dev1';
cdnDeployConfigDev2.options.folder = 'dev2';

//For TEST and PROD we're setting the max-age = 7 days since the files are versioned with _v4.11.1 for example all others need to refresh cache soon after the deploy
cdnDeployConfigTest.options.metadata.cacheControl = 'public, max-age=604800';
cdnDeployConfigTest.options.metadata.cacheControlHeader = 'public, max-age=604800';

cdnDeployConfigProd.options.metadata.cacheControl = 'public, max-age=604800';
cdnDeployConfigProd.options.metadata.cacheControlHeader = 'public, max-age=604800';

module.exports = {
    baseDir: baseDir,
    themeDir: themeDir,
    commonDir: commonDir,

    
    themeCssDir: themeCssDir,

    addonsUiDir: baseDir + 'webroot/_ui/addons/',

    commonJsDir: commonDir + 'js/',

    combinedCss: themeDir + 'css/combined/combined',
    combinedMinCss: themeDir + 'css/combined/combined',

    combinedJs: combinedJs,

    combinedCssDir: combinedCssDir,
    combinedJsDir: combinedJsDir,

    cssFiles: cssFiles,
    jsFiles: jsFiles,

    fontPathFilePath: 'hybris/bin/custom/trek/trekstorefront/web/sass/styles/settings/_settings-fontpath.scss',

    addEnvToFontPath: {
        dev: 'dev',
        dev1: 'dev1',
        dev2: 'dev2',
        proofing: 'proofing',
        e2e: 'e2e',
        domane: 'domane',
        madone: 'madone',
        session: 'session',
        topfuel: 'topfuel',
        test: 'test',
        prod: 'prod'
    }
}