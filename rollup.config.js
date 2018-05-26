import includePaths from 'rollup-plugin-includepaths';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/js/index.js',
    output: {
        file: 'public/assets/js/app.bundle.js',
        format: 'iife'
    },
    plugins: [
        includePaths({
            paths: [
                'src/js'
            ],
            extensions: [
                '.js'
            ]
        }),
        babel()
    ]
}