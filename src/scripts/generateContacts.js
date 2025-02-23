import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  try {
    const contactsList = await readContacts();
    const newContact = createFakeContact();

    for (let i = 0; i < number; i++) {
      contactsList.push(newContact);
    }

    await writeContacts(contactsList);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
