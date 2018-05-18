module.exports = {
    'plugins': {
        'autoprefixer': {
            'browsers': '> 5%'
        },
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
