import { Live2DModelWebGL } from '../../src/lib/live2d';

export function loadBytes(path, type, callback) {
  var request = new XMLHttpRequest();
  request.open('GET',path, true);
  request.responseType = type;
  request.onload = () => {
    switch (request.status) {
    case 200:
        callback(request.response);
        break;
    default:
        console.error( 'Failed to load (' + request.status + ') : ' + path );
        break;
    }
  }
  request.send(null);
}
