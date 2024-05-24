const crypto = require('crypto');

function hotp(secret, counter, digits = 6) {
  const key = Buffer.from(secret, 'hex');
  const counterBuffer = Buffer.alloc(8);
  for (let i = 0; i < 8; i++) {
    counterBuffer[7 - i] = counter & 0xff;
    counter = counter >> 8;
  }

  const hmac = crypto.createHmac('sha1', key).update(counterBuffer).digest();
  const offset = hmac[hmac.length - 1] & 0x0f;
  const binary = ((hmac[offset] & 0x7f) << 24) |
    ((hmac[offset + 1] & 0xff) << 16) |
    ((hmac[offset + 2] & 0xff) << 8) |
    (hmac[offset + 3] & 0xff);

  const hotpValue = binary % (10 ** digits);
  return hotpValue.toString().padStart(digits, '0');
}

const secret = '3132333435363738393031323334353637383930'; // Hex formatda secret key
const counter = 1; // Hisoblagich qiymati

console.log(hotp(secret, counter)); // HOTP qiymatini chop etadi

