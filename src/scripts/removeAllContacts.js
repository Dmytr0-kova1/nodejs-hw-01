import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const contactsList = await readContacts();
    contactsList.splice(0);

    await writeContacts(contactsList);
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
