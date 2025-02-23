import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contactsList = await readContacts();
    return contactsList.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
