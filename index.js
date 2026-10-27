const textToBuffer = (text, encoding) => {
  return Buffer.from(text, encoding);
};

const bufferToText = (buffer, encoding) => {
  return buffer.toString(encoding);
};

// Проверка решения
const text = 'Привет, мир!';
const utf8Buffer = textToBuffer(text, 'utf-8');
console.log(utf8Buffer);

const decodedText = bufferToText(utf8Buffer, 'utf-8');
console.log(decodedText);
