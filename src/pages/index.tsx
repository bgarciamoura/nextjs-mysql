import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const users = await fetch(`${process.env.base_api_url}/users`).then((response) => response.json());

    return {
        props: {
            users,
        },
    };
};

interface Users {
    id: string;
    name: string;
    email: string;
    pwd: string;
}

const Home: React.FC<{ users: Users[] }> = ({ users }) => {
    return (
        <div>
            {users.map((user: Users) => (
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <span>{user.email}</span>
                </div>
            ))}
        </div>
    );
};

export default Home;
