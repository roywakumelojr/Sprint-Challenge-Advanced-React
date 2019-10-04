import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';
import { Card } from 'semantic-ui-react';

const PlayerData = props => {
    const  { data } = props;
    const [ value ] = useLocalStorage('players', data);

    return (
        <Card.Group>
            {value.map(person => {
                return (
                    <Card key={person.id}>
                        <Card.Content>
                            <Card.Header> {person.name} </Card.Header>
                            <Card.Meta> Country: {person.country} </Card.Meta>
                            <Card.Description> Searches: {person.searches} </Card.Description>
                        </Card.Content>
                    </Card>
                )
            })}
        </Card.Group>
    )
}

export default PlayerData;