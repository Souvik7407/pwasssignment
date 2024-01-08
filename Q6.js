let payment = "credit";
let fee;

switch (payment) {
  case "credit":
    fee = 2;

    break;
  case "debit":
    fee = 1.5;

    break;
  case "paypal":
    fee = 3;

    break;

  default:
    console.log("invalid");
    break;
}
console.log(`processing fee for ${payment} : ${fee}`);
