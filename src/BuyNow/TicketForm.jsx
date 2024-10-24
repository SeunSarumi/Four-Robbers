import styles from "./TicketForm.module.css";

function handleSubmit() {}

function TicketForm() {
  return (
    <div>
      Ticket Form
      <form onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div>
            <label htmlFor="first-name">First Name</label>
            <input
              className={styles.formInput}
              id="first-name"
              type="text"
              placeholder="Adesire"
              name="full-name"
              required
            />
          </div>
          <div>
            <label htmlFor="last-name">Last Name</label>
            <input
              className={styles.formInput}
              id="last-name"
              type="text"
              placeholder="Backend"
              name="full-name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              className={styles.formInput}
              id="email"
              type="email"
              placeholder="me@example.com"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="phone-number">Phone Number</label>
            <input
              className={styles.formInput}
              id="phone-number"
              type="text"
              placeholder="me@example.com"
              name="phone-number"
              required
            />
          </div>
        </div>
        {/* tickets now */}
        <div className={styles.TicketContainer}>
          <label htmlFor="tier">Ticket Tier:</label>
          <select className={styles.formInput} id="tier" required>
            <option value="" disabled>
              Select ticket tier
            </option>
            <option value="standard">EarlyBird</option>
            <option value="premium">Regular</option>
            <option value="vip">VIP</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default TicketForm;
