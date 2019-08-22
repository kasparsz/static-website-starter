module.exports = {
    'plugins': {
        'autoprefixer': {},
        'cssnano': {
            'zindex': false,
            'mergeIdents': false,
            'reduceIdents': false,
            'discardUnused': {
                'fontFace': false
            }
        }
    },
    'map': { 'inline': false }
};
