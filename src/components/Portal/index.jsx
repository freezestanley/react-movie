import { createPortal } from 'react-dom';

export default function Portal({ children, node }) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  } else {
    throw new Error('Please use `id` or `class`');
  }
  if (!node) return null;
  return createPortal(children, node)
}