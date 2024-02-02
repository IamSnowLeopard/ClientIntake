export default function IntakeForm() {
  return (
    <div>
      <form>
        <label htmlFor="payerfirstname">Taxpayer First Name</label>
        <input type="text" id="payerfirstname" name="payerfirstname" />

        <label htmlFor="payerlastname">Taxpayer Last Name</label>
        <input type="text" id="payerlastname" name="payerlastname" />

        <label htmlFor="payerSSN">Last Four Digits of Taxpayer's SSN</label>
        <input
          type="text"
          id="payerSSN"
          name="payerSSN"
          pattern="\d{4}"
          maxLength={4}
          title="Last four digits only"
        />

        <label htmlFor="payerdob">Taxpayer Date of Birth</label>
        <input type="date" id="payerdob" name="payerdob" />

        <label htmlFor="payerphone">Taxpayer Phone Number</label>
        <input type="tel" id="payerphone" name="payerphone" />

        <label htmlFor="payeremail">Taxpayer Email</label>
        <input type="email" id="payeremail" name="payeremail" />

        <label htmlFor="payeroccupation">Taxpayer Occupation</label>
        <input type="text" id="payeroccupation" name="payeroccupation" />

        <label htmlFor="payeraddress">Taxpayer Current Home Address</label>
        <input type="text" id="payeraddress" name="payeraddress" />

        <button className="submit-button">Submit</button>
      </form>
      I
    </div>
  );
}
