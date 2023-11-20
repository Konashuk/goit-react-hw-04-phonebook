import { List, Button, Item } from './contactList.styled';

export const ContactList = ({ names, onDelete }) => {
  return (
    <List>
      {names.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            {`${name}: ${number}`}
            <Button onClick={() => onDelete(id)}>Delete</Button>
          </Item>
        );
      })}
    </List>
  );
};
