import reslove from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

// export default [{
//     entry: "src/index.js",
//     dest: "dist/index.js",
//     format: "cjs"
//   }, {
//     entry: "src/index.js",
//     dest: "dist/index.es6.js",
//     format: 'es'
//   }]






export default [{
    input: 'src/index.js',
    output: {
        file: './dist/index.es6.js',
        format: 'es'
    },
    // external: [ 'moment' ],
    name: 'MyModulees6'
    // plugins: [
    //     reslove(),
    //     commonjs()
    // ]
},
{
  input: 'src/index.js',
  output: {
      file: './dist/index.js',
      format: 'cjs'
  },
  name: 'MyModulecjs'
  // plugins: [
  //     reslove(),
  //     commonjs()
  //]
}];