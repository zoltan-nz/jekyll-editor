import {version} from '../package.json';

const message = `current version is ${version}`;
export default () => console.log( message );