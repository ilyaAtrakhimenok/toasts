export default function uniqKey() {
  return Date.now().toString(16) + Math.random().toString(16);
}
