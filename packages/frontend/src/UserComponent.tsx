import { UserComponent_user$key } from './__generated__/UserComponent_user.graphql';
import React from 'react';
import { graphql, useFragment } from 'react-relay/hooks';

type Props = {
    user: UserComponent_user$key;
};

function UserComponent(props: Props) {
    const data = useFragment(
        graphql`
            fragment UserComponent_user on User {
                id
                name
                username
            }
        `,
        props.user,
    );

    return (
        <h1>
            {data.name}, {data.username}
        </h1>
    );
}

export default UserComponent;
