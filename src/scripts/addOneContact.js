import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async (contact) => {
  try {
    const contactsList = await readContacts();
    contactsList.push(contact);

    await writeContacts(contactsList);
  } catch (error) {
    console.log(error);
  }
};

addOneContact(createFakeContact());
