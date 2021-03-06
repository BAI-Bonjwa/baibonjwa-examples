import { stripIndent } from 'common-tags';

const vs = stripIndent`
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

export default vs;