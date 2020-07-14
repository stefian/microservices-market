import { Ticket } from "../ticket";

it("implements optimistic concurrency control", async () => {
  // Create an instance of a ticket
  // Save the ticket to the database
  // Fetch the ticket twice
  // make two separate changes to the tickets
  // save the first fetched ticket
  // save the second fetched ticket and expect an error
  // - will have an outdated version nr
});
