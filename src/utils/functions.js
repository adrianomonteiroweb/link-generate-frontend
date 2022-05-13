export default function phoneVerify(phone) {
  const regex = /^\([1-9]{2}\) 9[7-9]{1}[0-9]{3}-[0-9]{4}$/g;

  return regex.test(phone);
}
