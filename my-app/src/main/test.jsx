import { formatName } from '../common/default.jsx';
import { user } from "../common/default"

export default function Test() {
  return (
    <h1>Hello, {formatName(user)}</h1>
  );
}