// *************************************
//
//   Paths and globs for Jekyll-Boilerplate gulpfile.js
//
// *************************************


var paths = {};

// Directory locations
paths.appDir             = '_app/';  // Source for Gulp build
paths.jekyllDir          = '.';      // Jekyll Sources
paths.siteDir            = '_site/'; // Output dir for site build

// Folder naming conventions
paths.postFolderName   = '_posts';
paths.draftFolderName  = '_drafts';
paths.stylesFolderName = 'sass';

// App files locations
paths.appSassFiles   = paths.appDir  + paths.stylesFolderName;

// Jekyll files locations
paths.jekyllPostFiles  = paths.jekyllDir + paths.postFolderName;
paths.jekyllDraftFiles = paths.jekyllDir + paths.draftFolderName;


// Glob patterns by file type
paths.sassPattern        = '/**/*.scss';
paths.jsPattern          = '/**/*.js';
paths.imagePattern       = '/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|gif|GIF|webp|WEBP|tif|TIF)';
paths.markdownPattern    = '/**/*.+(md|MD|markdown|MARKDOWN)';
paths.htmlPattern        = '/**/*.html';
paths.xmlPattern         = '/**/*.xml';

// App files globs
paths.appSassFilesGlob     = paths.appSassFiles     + paths.sassPattern;


// Jekyll files globs
paths.jekyllPostFilesGlob    = paths.jekyllPostFiles  + paths.markdownPattern;
paths.jekyllDraftFilesGlob   = paths.jekyllDraftFiles + paths.markdownPattern;
paths.jekyllHtmlFilesGlob    = paths.jekyllDir        + paths.htmlPattern;
paths.jekyllXmlFilesGlob     = paths.jekyllDir        + paths.xmlPattern;

// Site files globs
paths.siteHtmlFilesGlob    = paths.siteDir + paths.htmlPattern;


module.exports = paths;
